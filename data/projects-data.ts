import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "ai-email-automation-agent",
    title: "AI Email Automation Agent",
    featured: true,
    category: "Generative AI",
    status: "Completed",
    year: "2026",
    shortDescription:
      "An AI-powered email copilot that helps teams draft, classify, and approve responses with a polished workflow experience.",
    longDescription:
      "I designed and built an intelligent email automation system that combines LLM-driven drafting with a structured approval workflow. The product focuses on reducing response time for recurring communications while preserving human oversight, making it suitable for modern support and operations teams.",
    challenge:
      "Email-heavy teams often spend significant time writing repetitive replies while maintaining consistency and compliance across messages.",
    solution:
      "The system uses prompt-driven generation, context-aware suggestions, and a review-first workflow to accelerate drafting without sacrificing control.",
    architecture:
      "A Next.js front end connects to AI generation services and a lightweight backend layer for orchestration, audit trails, and approval state management.",
    image: "/projects/AI Email.png",
    gallery: [
      "/projects/AI Email.png",
      "/projects/studymate.png",
      "/projects/diabetes.png",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Framer Motion",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "Vercel",
    ],
    features: [
      "Context-aware email drafting",
      "Priority inbox routing",
      "Human approval workflow",
      "Reusable response templates",
      "Usage analytics dashboard",
    ],
    highlights: [
      "Reduced repetitive writing overhead",
      "Designed for fast product iteration",
      "Clean multi-step review UX",
    ],
    github: "https://github.com/portfolio/ai-email-automation-agent",
    liveDemo: "https://example.com/ai-email-automation-agent",
  },
  {
    id: 2,
    slug: "studymate-ai",
    title: "StudyMate AI",
    featured: false,
    category: "AI",
    status: "Completed",
    year: "2026",
    shortDescription:
      "A smart study companion that transforms notes into personalized revision plans and adaptive practice experiences.",
    longDescription:
      "StudyMate AI is a learning product that blends structured curriculum support with conversational AI. It helps students move from raw notes to targeted learning objectives through intelligent summaries, revision prompts, and progress-aware guidance.",
    challenge:
      "Students often struggle to convert scattered notes into a coherent study strategy that fits their pace and goals.",
    solution:
      "The platform organizes content into digestible learning paths, generates quiz prompts, and adjusts recommendations based on engagement patterns.",
    architecture:
      "A React-based client interacts with an AI content generation layer and a managed database for user progress, topic history, and generated study materials.",
    image: "/projects/study-mate.png",
    gallery: [
      "/projects/studymate.png",
      "/projects/AI Email.png",
      "/projects/diabetes.png",
    ],
    technologies: [
      "React",
      "Node.js",
      "OpenAI",
      "PostgreSQL",
      "Tailwind CSS",
      "Express",
      "JWT",
      "Vercel",
    ],
    features: [
      "Adaptive study planning",
      "AI-generated flashcards",
      "Topic-based summaries",
      "Practice question generation",
      "Progress tracking dashboard",
    ],
    highlights: [
      "Designed around learner retention",
      "Strong focus on UX and content clarity",
      "Modular architecture for future expansion",
    ],
    github: "https://github.com/portfolio/studymate-ai",
    liveDemo: "https://example.com/studymate-ai",
  },
  {
    id: 3,
    slug: "ai-blood-group-prediction",
    title: "AI Blood Group Prediction using Fingerprint Biometrics",
    featured: false,
    category: "Computer Vision",
    status: "Completed",
    year: "2026",
    shortDescription:
      "A computer vision prototype that explores biometric pattern analysis and predictive modeling in a structured, explainable workflow.",
    longDescription:
      "This project investigates how fingerprint-based image data can be processed with modern vision techniques and presented through a reliable analysis interface. The experience emphasizes explainability, data handling discipline, and a product-oriented dashboard for experimental results.",
    challenge:
      "Biometric data is complex to interpret, and predictions become more valuable when they are both accurate and understandable to non-experts.",
    solution:
      "The workflow combines image preprocessing, classification models, and a clear UI layer that surfaces confidence, structure, and reviewable outputs.",
    architecture:
      "A Python-based model pipeline runs behind a lightweight API and a React front end, enabling visual inspection and iterative experimentation.",
    image: "/projects/bloo-group.png",
    gallery: [
      "/projects/bloo-group.png",
      "/projects/diabetes.png",
    ],
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "FastAPI",
      "React",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
    features: [
      "Fingerprint image preprocessing",
      "Model-based classification flow",
      "Confidence and explainability views",
      "Secure upload handling",
      "Inspection-friendly result dashboard",
    ],
    highlights: [
      "Focused on responsible AI presentation",
      "Strong data pipeline design",
      "Clear separation between model and UI layers",
    ],
    github: "https://github.com/portfolio/ai-blood-group-prediction",
    liveDemo: "https://example.com/ai-blood-group-prediction",
  },
  {
    id: 4,
    slug: "diabetes-prediction",
    title: "Diabetes Prediction using Machine Learning",
    featured: false,
    category: "Machine Learning",
    status: "Completed",
    year: "2026",
    shortDescription:
      "A data science product that translates health indicators into a clear risk assessment experience for decision support.",
    longDescription:
      "This project packages a predictive modeling workflow into a professional interface that makes medical data interpretation more approachable. It focuses on clean feature engineering, interpretable results, and a straightforward dashboard experience for risk analysis.",
    challenge:
      "Healthcare-oriented predictions need to be both technically reliable and easy to understand for stakeholders unfamiliar with model internals.",
    solution:
      "The solution combines robust preprocessing, model training, and a lightweight dashboard that explains key inputs and predicted outcomes.",
    architecture:
      "A Python modeling pipeline feeds a Streamlit-based application that visualizes metrics, feature influence, and prediction outputs.",
    image: "/projects/diabetes.png",
    gallery: [
      "/projects/diabetes.png",
      "/projects/AI Email.png",
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "Streamlit",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "NumPy",
      "Jupyter",
    ],
    features: [
      "Risk score prediction",
      "Feature importance analysis",
      "Interactive charts",
      "Model summary view",
      "Clean input form experience",
    ],
    highlights: [
      "Strong emphasis on explainability",
      "Designed for practical stakeholder use",
      "Well-structured data science workflow",
    ],
    github: "https://github.com/portfolio/diabetes-prediction",
    liveDemo: "https://example.com/diabetes-prediction",
  },
];