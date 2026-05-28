# Infrastructure & Deployment Guidelines: LTKK Wiki Project

## 1. Overview
The **LTKK Wiki (KI 3231)** is an interactive, chemistry-education web application. Due to its pedagogical nature, it will be heavily reliant on client-side rendering (React/Next.js) for animations, interactive SVGs, and calculators (Eyring, Marcus-Hush, 18-Electron Rule). 

The infrastructure leverages the existing G-Labs topology:
- **Execution Environment:** Docker containers hosted on the **NAT VPS** (4 vCPU / 8GB RAM).
- **Public Gateway:** Traffic is funneled through a Wireguard tunnel (10.66.66.2 $\rightarrow$ 10.66.66.1) to the **Main VPS** (1 vCPU / 1GB RAM) which holds the public IP.
- **Reverse Proxy:** Nginx Proxy Manager (NPM) on the Main VPS handles SSL termination and reverse proxying to the NAT VPS.

## 2. Infrastructure Topology

```mermaid
graph LR
    User[Student/User] -->|HTTPS| PublicIP[Main VPS<br>103.197.189.138]
    
    subgraph Main VPS (1C/1GB)
        NPM[Nginx Proxy Manager]
    end

    PublicIP --> NPM
    
    subgraph Wireguard Mesh
        Tunnel(10.66.66.1 <--> 10.66.66.2)
    end
    
    NPM -->|HTTP over WG| Tunnel

    subgraph NAT VPS (4C/8GB)
        Tunnel --> DockerHost[Docker Engine]
        
        subgraph LTKK Wiki Stack
            NextJS[LTKK Web App<br>Port: 3007]
        end
        
        DockerHost --> NextJS
    end
```

## 3. Application Stack (Recommended)
Since this project is highly interactive but doesn't strictly require complex backend databases (unless you want to save user progress/accounts later), the recommended stack is:
- **Frontend Framework:** Next.js (App Router) or React (Vite). Next.js is preferred for easy deployment as a standalone Node server.
- **Styling & Animation:** Tailwind CSS + Framer Motion (for mechanism animations).
- **Math/Formulas:** KaTeX or MathJax.
- **Data/Content:** The Markdown curriculum file can be parsed at build-time using `react-markdown`.

## 4. Port Allocation
To avoid colliding with existing G-Labs services on the NAT VPS, assign a new port.

**Currently mapped ports on the NAT VPS:**
- `x01_waha`: 3000
- `web-oven`: 3005
- `web-oven-ap-lab`: 3006
- `web-ltkk`: 3007 ⚠️ **ALREADY IN USE**
- `portfolio-web`: 3008
- `skor-utbk-dashboard`: 3010

**Port Assignment for LTKK Wiki:**
- **`ltkk-wiki` (New): `3009`** (Map `0.0.0.0:3009->3000/tcp` in Docker)

This maintains sequential order and avoids collision with the existing `web-ltkk` service on port 3007.

## 5. Deployment Process

### Step 1: Dockerization
Create a `Dockerfile` in the LTKK Wiki repository optimized for Next.js/React.

**Example Next.js Dockerfile:**
```dockerfile
# Base image
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
# Set timezone to WIB
ENV TZ=Asia/Jakarta 

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### Step 2: Docker Compose Setup
Create a `docker-compose.yml` in the deployment directory on the NAT VPS.

```yaml
version: '3.8'

services:
  ltkk-wiki:
    container_name: ltkk-wiki
    image: ghcr.io/your-username/ltkk-wiki:latest # Or build locally: build: .
    restart: unless-stopped
    ports:
      - "3009:3000"
    environment:
      - NODE_ENV=production
      - TZ=Asia/Jakarta
```

### Step 3: CI/CD Pipeline (Optional but Recommended)
Set up a GitHub Action to automatically build and push the Docker image to GHCR (GitHub Container Registry) on push to the `main` branch. Then, pull and restart on the NAT VPS.

### Step 4: Routing via Nginx Proxy Manager (Main VPS)
1. Log in to your NPM dashboard on the Main VPS.
2. Add a new **Proxy Host**.
3. **Domain Names:** `ltkk.g-labs.my.id` (or your preferred subdomain).
4. **Scheme:** `http`
5. **Forward Hostname / IP:** `10.66.66.2` (The NAT VPS Wireguard IP).
6. **Forward Port:** `3009`
7. Enable **Block Common Exploits** and **Websockets Support** (useful for Next.js fast refresh if doing remote dev, and good for modern frameworks).
8. Go to the **SSL** tab, request a new certificate via Let's Encrypt, and enable "Force SSL".

## 6. Performance & Constraints
- **Memory (RAM):** The NAT VPS has 8GB of RAM, which is plenty. A standalone Next.js container typically uses <150MB RAM.
- **CPU:** The 4 vCPUs will easily handle the traffic. The heavy lifting (animations, calculators) happens client-side in the user's browser.
- **Storage:** Static assets (images, SVGs) should be optimized before building the Docker image to keep the container size small.

## 7. Future Expansion (State Management)
If you decide to add user accounts, progress tracking (badges), or saving quiz scores later:
1. Spin up a new PostgreSQL container (e.g., `ltkk-db` on port `5435`).
2. Add Prisma or Drizzle ORM to the Next.js app.
3. Keep the timezone policy consistent: `TZ=Asia/Jakarta` and `PGTZ=Asia/Jakarta`, storing timestamps as UTC.
