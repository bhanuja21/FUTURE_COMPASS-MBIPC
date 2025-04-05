const careerRoadmaps = {
  "Doctor": `graph LR
    A[Core Skills] --> A1[Anatomy]
    A --> A2[Physiology]
    A --> A3[Pathology]
    B[Education] --> B1[MBBS]
    B --> B2[Specialization_MD/MS]
    B --> B3[Residency]
    C[Tools] --> C1[Stethoscope]
    C --> C2[Diagnostic_Equipment]
    C --> C3[EHR_Systems]
    D[Applications] --> D1[Clinics]
    D --> D2[Hospitals]
    D --> D3[Research]
`,
  "Dentist": `
graph LR
  A[Core Skills] --> A1[Dental Anatomy]
  A --> A2[Oral Surgery]
  A --> A3[Orthodontics]
  B[Education] --> B1[BDS]
  B --> B2[MDS]
  B --> B3[Internship]
  C[Tools] --> C1[Dental Drill]
  C --> C2[X-ray Machines]
  C --> C3[Sterilization Equipment]
  D[Applications] --> D1[Dental Clinics]
  D --> D2[Hospitals]
  D --> D3[Cosmetic Dentistry]
`,
  "Engineer": `
graph LR
  A[Core Skills] --> A1[Maths]
  A --> A2[Physics]
  A --> A3[Problem Solving]
  B[Fields] --> B1[Mechanical]
  B --> B2[Electrical]
  B --> B3[Civil]
  B --> B4[Computer Science]
  C[Tools] --> C1[CAD Software]
  C --> C2[Simulation Tools]
  C --> C3[Programming Languages]
  D[Applications] --> D1[Infrastructure]
  D --> D2[Product Design]
  D --> D3[Technology Solutions]
`,
  "Veterinarian": `
graph LR
  A[Core Skills] --> A1[Animal Anatomy]
  A --> A2[Surgery]
  A --> A3[Diagnostics]
  B[Education] --> B1[BVSc]
  B --> B2[Specialization]
  B --> B3[Internship]
  C[Tools] --> C1[X-rays]
  C --> C2[Surgical Kits]
  C --> C3[Lab Equipment]
  D[Applications] --> D1[Animal Clinics]
  D --> D2[Zoos]
  D --> D3[Livestock Management]
`,
  "Pharmacist": `
graph LR
  A[Core Skills] --> A1[Pharmacology]
  A --> A2[Chemistry]
  A --> A3[Drug Interactions]
  B[Education] --> B1[B.Pharm]
  B --> B2[M.Pharm]
  B --> B3[Licensing Exam]
  C[Tools] --> C1[Dispensing Software]
  C --> C2[Compounding Tools]
  C --> C3[Inventory Systems]
  D[Applications] --> D1[Pharmacies]
  D --> D2[Hospitals]
  D --> D3[Research Labs]
`,
  "Biotechnologist": `
graph LR
  A[Core Skills] --> A1[Cell Biology]
  A --> A2[Molecular Biology]
  A --> A3[Biochemistry]
  B[Education] --> B1[B.Sc Biotechnology]
  B --> B2[M.Sc Biotechnology]
  B --> B3[PhD/Research]
  C[Tools] --> C1[PCR Machines]
  C --> C2[Gene Sequencers]
  C --> C3[Bioinformatics Software]
  D[Applications] --> D1[Healthcare]
  D --> D2[Agriculture]
  D --> D3[Environment]
`,
  "Geneticist": `
graph LR
  A[Core Skills] --> A1[Genetics]
  A --> A2[Genomics]
  A --> A3[Cell Biology]
  B[Education] --> B1[B.Sc Genetics]
  B --> B2[M.Sc Genetics]
  B --> B3[PhD]
  C[Tools] --> C1[CRISPR]
  C --> C2[DNA Analyzers]
  C --> C3[Gene Editing Software]
  D[Applications] --> D1[Medical Genetics]
  D --> D2[Gene Therapy]
  D --> D3[Research]
`,
  "Agricultural Expert": `
graph LR
  A[Core Skills] --> A1[Soil Science]
  A --> A2[Crop Production]
  A --> A3[Agri Economics]
  B[Education] --> B1[B.Sc Agriculture]
  B --> B2[M.Sc Agriculture]
  B --> B3[Field Experience]
  C[Tools] --> C1[Sensors]
  C --> C2[GIS Tools]
  C --> C3[Farm Management Software]
  D[Applications] --> D1[Crop Management]
  D --> D2[Agri Research]
  D --> D3[Policy Making]
`,
  "AI Developer": `
graph LR
  A[Core Skills] --> A1[Machine Learning]
  A --> A2[Deep Learning]
  A --> A3[Math & Stats]
  B[Tools] --> B1[Python]
  B --> B2[TensorFlow]
  B --> B3[PyTorch]
  C[Concepts] --> C1[NLP]
  C --> C2[Computer Vision]
  C --> C3[Reinforcement Learning]
  D[Applications] --> D1[Chatbots]
  D --> D2[Autonomous Systems]
  D --> D3[Recommendation Engines]
`,
  "Data Scientist": `
graph LR
  A[Core Skills] --> A1[Statistics]
  A --> A2[Data Wrangling]
  A --> A3[Data Visualization]
  B[Tools] --> B1[Python/R]
  B --> B2[Pandas/Numpy]
  B --> B3[Tableau/PowerBI]
  C[Concepts] --> C1[Machine Learning]
  C --> C2[Data Modeling]
  C --> C3[Big Data]
  D[Applications] --> D1[Business Analytics]
  D --> D2[Market Trends]
  D --> D3[AI Solutions]
`
};

function loadRoadmap() {
  const container = document.getElementById("roadmap-container");
  const career = localStorage.getItem("selectedCareer");

  if (!career || !careerRoadmaps[career]) {
    container.innerHTML = `
      <div class="error">
        <h2>Roadmap Not Available</h2>
        <p>We couldn't find the requested career path.</p>
        <a href="results.html">← Back to Results</a>
        <p>Technical details: ${career ? career + " not found" : "No career selected"}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <h2>${career} Roadmap</h2>
    <div class="mermaid">
      ${careerRoadmaps[career]}
    </div>
    <button onclick="window.history.back()">← Back</button>
  `;

  if (typeof mermaid !== 'undefined') {
    mermaid.init(undefined, document.querySelectorAll('.mermaid'));
  } else {
    console.error("Mermaid.js not loaded!");
  }
}

document.addEventListener("DOMContentLoaded", loadRoadmap);