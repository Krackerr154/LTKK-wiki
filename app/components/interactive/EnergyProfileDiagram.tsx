'use client';

import { useState, useMemo } from 'react';
import styles from './EnergyProfileDiagram.module.css';

interface EnergyProfileDiagramProps {
  activationEnergy?: number;
}

/**
 * Interactive 2D potential energy profile (Energy vs. Reaction Coordinate).
 * - Slider: adjusts activation energy (peak height).
 * - Toggle: single-step vs two-step (intermediate valley).
 * Color coding: gold metal center, red leaving group, green entering group.
 */
export function EnergyProfileDiagram({ activationEnergy: initialEa = 60 }: EnergyProfileDiagramProps) {
  const [ea, setEa] = useState(initialEa);
  const [isTwoStep, setIsTwoStep] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  // SVG viewbox dimensions
  const W = 600;
  const H = 350;
  const pad = { top: 40, right: 40, bottom: 60, left: 60 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;

  // Map y: energy (0–100) to SVG y
  const yScale = (val: number) => pad.top + plotH - (val / 100) * plotH;
  const xScale = (frac: number) => pad.left + frac * plotW;

  const reactantE = 30;
  const productE = 15;
  const peakE = reactantE + ea;
  const intermediateE = reactantE + ea * 0.35;

  const singlePath = useMemo(() => {
    const pts = [
      [0, reactantE],
      [0.1, reactantE],
      [0.35, peakE * 0.85],
      [0.5, peakE],
      [0.65, peakE * 0.85],
      [0.9, productE],
      [1, productE],
    ];
    return pts.map(([x, y], i) => {
      const cmd = i === 0 ? 'M' : 'L';
      return `${cmd}${xScale(x)},${yScale(y)}`;
    }).join(' ');
  }, [ea, reactantE, productE, peakE]);

  const twoStepPath = useMemo(() => {
    const peak1E = reactantE + ea * 0.9;
    const peak2E = intermediateE + ea * 0.55;
    const pts = [
      [0, reactantE],
      [0.08, reactantE],
      [0.2, peak1E * 0.8],
      [0.3, peak1E],
      [0.38, peak1E * 0.78],
      [0.5, intermediateE],
      [0.6, peak2E * 0.85],
      [0.68, peak2E],
      [0.78, peak2E * 0.7],
      [0.92, productE],
      [1, productE],
    ];
    return pts.map(([x, y], i) => {
      const cmd = i === 0 ? 'M' : 'L';
      return `${cmd}${xScale(x)},${yScale(y)}`;
    }).join(' ');
  }, [ea, reactantE, productE, intermediateE]);

  // Rate speedometer angle (0-180 degrees)
  const rateAngle = Math.max(5, 180 - (ea / 80) * 160);

  return (
    <div className={styles.container}>
      <div className={styles.svgWrapper}>
        <svg viewBox={`0 0 ${W} ${H}`} className={styles.svg}>
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map(v => (
            <line key={v} x1={pad.left} y1={yScale(v)} x2={W - pad.right} y2={yScale(v)}
              stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
          ))}

          {/* Axes */}
          <line x1={pad.left} y1={pad.top} x2={pad.left} y2={H - pad.bottom}
            stroke="rgba(255,255,255,0.3)" strokeWidth={1.5} />
          <line x1={pad.left} y1={H - pad.bottom} x2={W - pad.right} y2={H - pad.bottom}
            stroke="rgba(255,255,255,0.3)" strokeWidth={1.5} />

          {/* Axis labels */}
          <text x={pad.left - 10} y={H / 2} textAnchor="middle" fill="var(--text-muted)" fontSize={11}
            transform={`rotate(-90, ${pad.left - 35}, ${H / 2})`}>
            Energi Potensial
          </text>
          <text x={W / 2} y={H - 10} textAnchor="middle" fill="var(--text-muted)" fontSize={11}>
            Koordinat Reaksi →
          </text>

          {/* Energy profile curve */}
          <path
            d={isTwoStep ? twoStepPath : singlePath}
            fill="none"
            stroke="url(#curveGrad)"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Gradient def */}
          <defs>
            <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Ea annotation arrow */}
          {!isTwoStep && (
            <>
              <line x1={xScale(0.5)} y1={yScale(reactantE)} x2={xScale(0.5)} y2={yScale(peakE)}
                stroke="var(--accent-danger)" strokeWidth={1.5} strokeDasharray="4,3" />
              <text x={xScale(0.5) + 10} y={(yScale(reactantE) + yScale(peakE)) / 2}
                fill="var(--accent-danger)" fontSize={12} fontWeight={600}>
                E_a
              </text>
            </>
          )}

          {/* Reactant / Product labels */}
          <circle cx={xScale(0.05)} cy={yScale(reactantE)} r={6} fill="#d4a017" opacity={0.9} />
          <text x={xScale(0.05)} y={yScale(reactantE) - 12} textAnchor="middle" fill="#d4a017" fontSize={10} fontWeight={600}>
            Reaktan
          </text>

          <circle cx={xScale(0.95)} cy={yScale(productE)} r={6} fill="#10b981" opacity={0.9} />
          <text x={xScale(0.95)} y={yScale(productE) - 12} textAnchor="middle" fill="#10b981" fontSize={10} fontWeight={600}>
            Produk
          </text>

          {/* Transition state marker */}
          {!isTwoStep && (
            <g
              onMouseEnter={() => setHoveredPoint('ts')}
              onMouseLeave={() => setHoveredPoint(null)}
              style={{ cursor: 'pointer' }}
            >
              <circle cx={xScale(0.5)} cy={yScale(peakE)} r={8} fill="none" stroke="#ef4444" strokeWidth={2} />
              <text x={xScale(0.5)} y={yScale(peakE) - 14} textAnchor="middle" fill="#ef4444" fontSize={10} fontWeight={600}>
                Keadaan Transisi ‡
              </text>
              {hoveredPoint === 'ts' && (
                <text x={xScale(0.5)} y={yScale(peakE) + 22} textAnchor="middle" fill="var(--text-muted)" fontSize={9}>
                  M···X···Y (ikatan meregang)
                </text>
              )}
            </g>
          )}

          {/* Two-step markers */}
          {isTwoStep && (
            <>
              {/* Peak 1 */}
              <circle cx={xScale(0.3)} cy={yScale(reactantE + ea * 0.9)} r={6}
                fill="none" stroke="#ef4444" strokeWidth={2} />
              <text x={xScale(0.3)} y={yScale(reactantE + ea * 0.9) - 12}
                textAnchor="middle" fill="#ef4444" fontSize={9} fontWeight={600}>
                TS₁ ‡
              </text>

              {/* Intermediate valley */}
              <g
                onMouseEnter={() => setHoveredPoint('int')}
                onMouseLeave={() => setHoveredPoint(null)}
                style={{ cursor: 'pointer' }}
              >
                <circle cx={xScale(0.5)} cy={yScale(intermediateE)} r={8}
                  fill="none" stroke="#3b82f6" strokeWidth={2} />
                <text x={xScale(0.5)} y={yScale(intermediateE) - 14}
                  textAnchor="middle" fill="#3b82f6" fontSize={9} fontWeight={600}>
                  Zat Antara
                </text>
                {hoveredPoint === 'int' && (
                  <text x={xScale(0.5)} y={yScale(intermediateE) + 22}
                    textAnchor="middle" fill="var(--text-muted)" fontSize={9}>
                    Spesies [ML₅] berkoordinasi 5
                  </text>
                )}
              </g>

              {/* Peak 2 */}
              <circle cx={xScale(0.68)} cy={yScale(intermediateE + ea * 0.55)} r={6}
                fill="none" stroke="#ef4444" strokeWidth={2} />
              <text x={xScale(0.68)} y={yScale(intermediateE + ea * 0.55) - 12}
                textAnchor="middle" fill="#ef4444" fontSize={9} fontWeight={600}>
                TS₂ ‡
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label className={styles.sliderLabel}>
            Energi Aktivasi (E<sub>a</sub>): <strong>{ea.toFixed(0)} kJ/mol</strong>
          </label>
          <input
            type="range"
            min={10}
            max={80}
            step={1}
            value={ea}
            onChange={(e) => setEa(Number(e.target.value))}
            className={styles.slider}
          />
        </div>

        <div className={styles.controlGroup}>
          <label className={styles.toggleLabel}>Profil Reaksi:</label>
          <div className={styles.toggleGroup}>
            <button
              className={`${styles.toggleBtn} ${!isTwoStep ? styles.active : ''}`}
              onClick={() => setIsTwoStep(false)}
            >
              Satu Tahap
            </button>
            <button
              className={`${styles.toggleBtn} ${isTwoStep ? styles.active : ''}`}
              onClick={() => setIsTwoStep(true)}
            >
              Dua Tahap (Zat Antara)
            </button>
          </div>
        </div>

        {/* Rate Speedometer */}
        <div className={styles.speedometer}>
          <div className={styles.speedLabel}>Laju Reaksi Relatif</div>
          <div className={styles.speedGauge}>
            <svg viewBox="0 0 120 70" className={styles.gaugeSvg}>
              <path d="M 10 65 A 50 50 0 0 1 110 65" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={8} strokeLinecap="round" />
              <path d="M 10 65 A 50 50 0 0 1 110 65" fill="none" stroke="url(#gaugeGrad)" strokeWidth={8} strokeLinecap="round"
                strokeDasharray={`${(rateAngle / 180) * 157} 157`} />
              <line
                x1={60} y1={65}
                x2={60 + 40 * Math.cos(Math.PI - (rateAngle / 180) * Math.PI)}
                y2={65 - 40 * Math.sin((rateAngle / 180) * Math.PI)}
                stroke="var(--text-primary)" strokeWidth={2} strokeLinecap="round"
              />
              <circle cx={60} cy={65} r={4} fill="var(--text-primary)" />
              <defs>
                <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.speedValue}>
              {ea <= 20 ? 'Sangat Cepat' : ea <= 40 ? 'Cepat' : ea <= 60 ? 'Sedang' : 'Lambat'}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ background: '#d4a017' }}></span>
          <span>Pusat logam (Au)</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ background: '#ef4444' }}></span>
          <span>Gugus pergi (X)</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ background: '#10b981' }}></span>
          <span>Gugus masuk (Y)</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ background: '#3b82f6' }}></span>
          <span>Spesies zat antara</span>
        </div>
      </div>
    </div>
  );
}
