import { Skill } from "@/types";

/**
 * Only technologies that appear in the project dataset, the certification
 * records or the portfolio's own stack are listed here. There are no
 * proficiency percentages — each entry records how it has actually been used.
 */
export const skillsData: Skill[] = [
  // Programming Languages
  { name: "Python", category: "Programming Languages", tier: "core", note: "ML training, evaluation and Streamlit apps (3 projects)" },
  { name: "TypeScript", category: "Programming Languages", tier: "project", note: "Client and API code in the email assistant" },
  { name: "JavaScript", category: "Programming Languages", tier: "project", note: "Node runtime behind the email assistant API" },

  // AI & Machine Learning
  { name: "Machine Learning", category: "AI & Machine Learning", tier: "core", note: "Classification models trained and evaluated end to end" },
  { name: "scikit-learn", category: "AI & Machine Learning", tier: "core", note: "RBF-SVM classifier and model evaluation" },
  { name: "TensorFlow", category: "AI & Machine Learning", tier: "project", note: "InceptionV3 feature extraction" },
  { name: "Transfer Learning", category: "AI & Machine Learning", tier: "project", note: "InceptionV3 embeddings for a small medical-image dataset" },
  { name: "Generative AI / LLM APIs", category: "AI & Machine Learning", tier: "project", note: "Server-side summaries and reply drafting in the email assistant" },

  // Data & Analysis
  { name: "Pandas", category: "Data & Analysis", tier: "project", note: "Splits, feature tables and result files in the blood group experiments" },
  { name: "NumPy", category: "Data & Analysis", tier: "project", note: "Array handling in the ML pipeline" },
  { name: "Matplotlib", category: "Data & Analysis", tier: "project", note: "Feature-importance and result charts" },
  { name: "Seaborn", category: "Data & Analysis", tier: "project", note: "Exploratory data visualisation" },
  { name: "Jupyter Notebook", category: "Data & Analysis", tier: "project", note: "Model training and experiment notebooks" },
  { name: "Model Evaluation", category: "Data & Analysis", tier: "core", note: "Accuracy, balanced accuracy and macro F1 reporting" },

  // Databases & Backend
  { name: "Node.js", category: "Databases & Backend", tier: "project", note: "API layer and server-side AI requests" },
  { name: "Express", category: "Databases & Backend", tier: "project", note: "REST API in the email assistant" },
  { name: "REST APIs", category: "Databases & Backend", tier: "familiar", note: "Client-server communication across projects" },

  // Frameworks & Tools
  { name: "Next.js", category: "Frameworks & Tools", tier: "project", note: "This portfolio site" },
  { name: "React", category: "Frameworks & Tools", tier: "project", note: "Email assistant client (Vite + React 19)" },
  { name: "Tailwind CSS", category: "Frameworks & Tools", tier: "project", note: "Interface styling in the web projects" },
  { name: "Streamlit", category: "Frameworks & Tools", tier: "project", note: "Model interface for the blood group project" },
  { name: "Git", category: "Frameworks & Tools", tier: "familiar", note: "Version control" },
  { name: "GitHub", category: "Frameworks & Tools", tier: "familiar", note: "Repositories and version control" },
];

export const skillCategories: Skill["category"][] = [
  "Programming Languages",
  "AI & Machine Learning",
  "Data & Analysis",
  "Databases & Backend",
  "Frameworks & Tools",
];

export default skillsData;
