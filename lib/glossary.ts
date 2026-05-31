export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
}

export const glossaryData: GlossaryTerm[] = [
  // Block A terms
  { id: "activation-energy", term: "Energi Aktivasi (Eₐ)", definition: "Energi minimum yang diperlukan agar reaksi kimia dapat terjadi." },
  { id: "activation-entropy", term: "Entropi Aktivasi (ΔS‡)", definition: "Perubahan ketidakteraturan antara reaktan dan keadaan transisi. Nilai negatif menunjukkan proses asosiatif." },
  { id: "activation-volume", term: "Volume Aktivasi (ΔV‡)", definition: "Perubahan volume antara reaktan dan keadaan transisi; diukur melalui kebergantungan laju terhadap tekanan." },
  { id: "cfse", term: "CFSE", definition: "Energi Stabilisasi Medan Kristal (Crystal Field Stabilization Energy). Energi yang diperoleh dari pembelahan orbital d dalam kompleks koordinasi." },
  { id: "conjugate-base", term: "Mekanisme Basa Konjugasi (SN1cb)", definition: "Jalur substitusi yang dipicu oleh deprotonasi ligan oleh basa kuat (OH⁻)." },
  { id: "eyring", term: "Persamaan Eyring", definition: "Menghubungkan laju reaksi dengan suhu dan parameter aktivasi (ΔH‡, ΔS‡)." },
  { id: "inert", term: "Kompleks Inert", definition: "Kompleks yang mengalami substitusi ligan dengan sangat lambat (t₁/₂ > 1 menit)." },
  { id: "labile", term: "Kompleks Labil", definition: "Kompleks yang mengalami substitusi ligan dengan cepat (t₁/₂ < 1 menit)." },
  { id: "marcus", term: "Teori Marcus-Hush", definition: "Teori yang menjelaskan laju reaksi transfer elektron, khususnya jalur outer sphere." },
  { id: "rds", term: "RDS", definition: "Tahap Penentu Laju (Rate-Determining Step). Tahap paling lambat dalam mekanisme reaksi, yang menentukan laju keseluruhan." },
  { id: "trans-effect", term: "Efek Trans", definition: "Kemampuan kinetik suatu ligan untuk mengarahkan substitusi ke posisi trans terhadap dirinya sendiri." },
  { id: "bridging-ligand", term: "Ligan Jembatan (μ)", definition: "Ligan yang terkoordinasi pada dua atau lebih pusat logam secara bersamaan, membentuk jembatan." },
  // Block B terms
  { id: "back-bonding", term: "Ikatan Balik π", definition: "Kerapatan elektron bergeser dari orbital d logam ke orbital anti-ikatan π* ligan seperti CO." },
  { id: "hapticity", term: "Haptisitas (η)", definition: "Jumlah atom yang berdekatan dalam suatu ligan yang berkoordinasi langsung ke pusat logam." },
  { id: "oxidative-addition", term: "Adisi Oksidatif", definition: "Pusat logam menyisip ke dalam ikatan kovalen, meningkatkan keadaan oksidasi dan bilangan koordinasinya sebesar 2." },
  { id: "reductive-elimination", term: "Eliminasi Reduktif", definition: "Kebalikan dari adisi oksidatif; dua ligan bergabung dan meninggalkan logam, menurunkan bilangan oksidasi dan koordinasi sebesar 2." },
  { id: "pyrophoric", term: "Piroforik", definition: "Zat yang menyala secara spontan saat kontak dengan udara." },
  { id: "zeise", term: "Garam Zeise", definition: "Kompleks organologam pertama yang disintesis, K[PtCl₃(η²-C₂H₄)]." },
  { id: "18e-rule", term: "Aturan 18-Elektron", definition: "Aturan stabilitas yang memprediksi bahwa kompleks logam transisi dengan 18 elektron valensi memiliki konfigurasi kelopak tertutup." },
  { id: "migratory-insertion", term: "Penyisipan Migrasi", definition: "Ligan tak jenuh menyisip ke ikatan M-alkil atau M-hidrida di dekatnya, menghasilkan situs kosong." },
];
