import { Project } from "@/types/project";

/**
 * Canonical project dataset — the single source of truth for the whole app.
 * Consumed by the homepage Projects section/modal, the /projects index,
 * the /projects/[slug] detail route and the sitemap.
 *
 * `visibility` defaults to "published". Records marked "draft" are kept here so
 * they can be restored later, but every public surface reads
 * `publishedProjects`, so a draft is never rendered, routed or indexed.
 * StudyMate AI and Diabetes Prediction are drafts until their source code can
 * be produced for review.
 */
export const projects: Project[] = [
  {
    id: 1,
    slug: "ai-email-automation-agent",
    title: "AI Email Assistant",
    featured: true,
    category: "Generative AI",
    status: "Completed",
    year: "2026",
    shortDescription:
      "AI-powered Gmail assistant that summarizes emails, identifies priorities, extracts tasks and deadlines, and generates suggested replies.",
    longDescription:
      "AI Email Assistant connects to a Gmail account and turns an inbox into a working queue. After signing in with Google, the app reads the account's messages and has Gemini summarise each one, assign a priority and a category, and pull out deadlines and action items. Extracted tasks appear on a dashboard and a Kanban board, suggested replies are drafted as text the user can edit, and a daily briefing plus Recharts analytics view summarises what needs attention. Nothing is sent automatically: replies stay in the app as drafts.",
    challenge:
      "A full inbox hides its own priorities. Summarising, classifying, and turning each message into an actionable task is repetitive work, and the parts that matter are easy to lose between reading and replying.",
    solution:
      "The app does the reading work in one pass: each message is summarised, prioritised, categorised and mined for tasks and deadlines, so the inbox becomes a list of concrete actions. Reply drafting is provided as text, keeping the user in control of anything that would leave the account.",
    architecture:
      "A Vite + React 19 single-page client communicates with an Express 4 API written in TypeScript. Google sign-in is handled by Firebase Authentication and the server verifies the resulting token before returning mailbox data. Mail is read through the Gmail API and Gemini is called from the server through @google/genai, so the model API key never reaches the browser. The interface is styled with Tailwind CSS 4 and the analytics views are drawn with Recharts.",
    implementation: [
      "Google sign-in through Firebase Authentication; the API verifies the user's token before serving any mailbox data.",
      "Gmail read synchronisation pulls the signed-in user's messages into the app.",
      "Gemini summarises each message, assigns a priority and category, and extracts deadlines and action items.",
      "Suggested replies are generated as text for the user to review and edit; there is no send endpoint.",
      "Extracted tasks are shown on a dashboard and a Kanban board, and Recharts renders the analytics views.",
      "A daily briefing condenses the day's priorities into a single summary.",
    ],
    limitations: [
      "Emails are held in an in-memory store on the server, so synchronised state does not persist across restarts.",
      "The interface ships with mock seed data; real messages appear only after a user signs in with Google and synchronises Gmail.",
      "Replies are generated as text only. Gmail send permission is requested during sign-in, but no send call is implemented, so the app never mails on the user's behalf.",
      "The hosted deployment is linked as a live demo. The site loads, but the AI and Gmail routes have not been verified end to end in production.",
    ],
    futureWork: [
      "Add persistent storage so synchronised mail and task state survive restarts.",
      "Replace the seeded sample data with a start state that expects a real account.",
      "Measure summarisation and classification quality against a labelled sample of real mail.",
    ],
    image: "/projects/AI Email.png",
    gallery: ["/projects/AI Email.png"],
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Express",
      "Tailwind CSS",
      "Firebase Authentication",
      "Gmail API",
      "Google Gemini",
      "Recharts",
    ],
    features: [
      "Google sign-in and Gmail read synchronisation",
      "AI summaries with priority and category classification",
      "Deadline and task extraction into a Kanban board",
      "Suggested reply generation",
      "Daily briefing and email analytics",
    ],
    highlights: [
      "Summaries, priorities and categories are generated from the message content",
      "Tasks and deadlines extracted from mail land on a Kanban board",
      "Replies are drafted as text for the user — nothing is sent automatically",
    ],
    github: "https://github.com/Charan7769/AI-Email-Assistant",
    liveDemo: "https://ai-email-assistant-tawny.vercel.app",
  },
  {
    id: 2,
    slug: "studymate-ai",
    title: "StudyMate AI",
    // Withheld from every public surface: no source code or public repository
    // could be produced for the evidence audit. Retained for restoration.
    visibility: "draft",
    featured: false,
    category: "AI",
    status: "Completed",
    year: "2026",
    shortDescription:
      "A study companion that turns a student's own notes into summaries, practice questions, and a revision plan.",
    longDescription:
      "StudyMate AI starts from material the student already has. Notes are organised by subject and topic, then converted into summaries, flashcards, and practice questions. A revision plan orders topics so that covered material and outstanding work are visible in one place. The product is built around the routine a student actually repeats: read the notes, test understanding, decide what to study next.",
    challenge:
      "Notes collected across lectures and readings rarely turn into a study routine on their own. Time goes into re-reading and re-organising material instead of practising it, and there is no clear view of what has already been covered.",
    solution:
      "The app groups notes by subject, generates summaries and question prompts from that content, and builds a study plan around topic coverage. Completing a topic updates progress, so the plan reflects the material actually finished rather than a fixed schedule.",
    architecture:
      "A React client talks to a Node and Express API backed by PostgreSQL, which stores subjects, notes, generated study material, and progress. Authentication uses JWT, and AI generation is performed server-side rather than in the browser.",
    implementation: [
      "Subjects, notes, generated study material and progress are stored in PostgreSQL behind a Node/Express API.",
      "Authentication uses JWT, so generated material and progress stay tied to the signed-in student.",
      "Summaries, flashcards and practice questions are generated server-side from the stored notes rather than written by hand.",
      "Completing a topic updates stored progress, so the revision plan reflects finished material instead of a fixed schedule.",
    ],
    limitations: [
      "No public repository or live demo is linked.",
      "The quality of the generated summaries and practice questions has not been evaluated against a baseline.",
    ],
    futureWork: [
      "Publish a demo instance loaded with sample notes.",
      "Evaluate generated questions against a hand-written reference set.",
    ],
    image: "/projects/study-mate.png",
    gallery: ["/projects/study-mate.png"],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "OpenAI",
      "Tailwind CSS",
    ],
    features: [
      "Notes organised by subject and topic",
      "AI-generated summaries and flashcards",
      "Practice question generation",
      "Revision plan built from topic coverage",
      "Progress tracking per subject",
    ],
    highlights: [
      "Works from the student's own notes instead of a fixed curriculum",
      "Summaries, practice, and planning share one interface",
      "Generated material stays attached to the topic it came from",
    ],
  },
  {
    id: 3,
    slug: "ai-blood-group-prediction",
    title: "AI-Driven Non-Invasive Blood Group Prediction",
    featured: false,
    category: "Computer Vision",
    status: "Completed",
    year: "2026",
    shortDescription:
      "A research project that tests whether a fingerprint image carries enough signal to predict ABO/Rh blood group, comparing two separate model pipelines.",
    longDescription:
      "This project tests whether a fingerprint image can stand in for a blood sample when determining blood group. It uses a dataset of 5,837 fingerprint images covering eight classes (A+, A−, B+, B−, AB+, AB−, O+, O−), split into 4,085 training, 875 validation and 877 test images, with a duplicate-overlap audit confirming the clean splits share no images. Work is organised as two separate pipelines: an offline experiment that extracts InceptionV3 embeddings and fits an RBF-kernel SVM on top of them, and a Streamlit application that serves a fine-tuned MobileNetV2 model through a soft-vote prediction pipeline. The application does not serve the InceptionV3 + SVM model. Each run's results are recorded against the model and split that produced them, and the two clean-test evaluation reports below are published together with the run that produced each one.",
    challenge:
      "Blood grouping normally requires a blood draw, trained staff, and laboratory time, which is a constraint in emergencies and in low-resource settings. The question behind this project is whether a non-invasive input such as a fingerprint carries enough information to predict blood group, and how much of that signal survives on images the models have not seen.",
    solution:
      "Two approaches are kept deliberately separate rather than merged into one claimed result. The experiment path asks how far transfer-learned image features go when a classical classifier is placed on top of them: InceptionV3 supplies 2,048-dimensional embeddings and an RBF-kernel SVM learns the eight-class boundary. The application path packages a fine-tuned MobileNetV2 model behind a Streamlit interface so a fingerprint image can be submitted and scored locally.",
    architecture:
      "The experiment pipeline loads the dataset at 299 × 299, extracts 2,048-dimensional global-average-pooled InceptionV3 features, and fits an RBF-kernel SVM over them; evaluation scripts and saved result files record each run. Separately, the application pipeline resizes input to 224 × 224 and serves a fine-tuned MobileNetV2 model through a soft-vote prediction pipeline in Streamlit. These are distinct implementations — the Streamlit app is not a front end for the InceptionV3 + SVM experiment.",
    implementation: [
      "The dataset covers 5,837 fingerprint images across the eight ABO/Rh classes (A+, A−, B+, B−, AB+, AB−, O+, O−).",
      "Splits are fixed at 4,085 training, 875 validation and 877 test images, and a duplicate-overlap audit confirmed the clean splits share no images.",
      "Experiment pipeline: pretrained InceptionV3 at 299 × 299 input producing 2,048-dimensional global average pooling features, classified by an RBF-kernel SVM, with evaluation scripts and saved result files.",
      "Application pipeline: a Streamlit app resizing input to 224 × 224 and serving a fine-tuned MobileNetV2 model through a soft-vote prediction pipeline.",
      "The application runs locally as a Streamlit app; there is no public repository or hosted demo for it.",
    ],
    results: [
      {
        label: "InceptionV3 + soft voting — clean test split, 877 images (experiment run_20261110_extended_inception)",
        value: "70.6956% accuracy",
        detail: "Balanced accuracy 70.9943% · Macro F1 71.3250%",
      },
      {
        label: "MobileNetV2 + soft voting — clean test split, 877 images (experiment run_20261111_backbone_resize)",
        value: "79.5895% accuracy",
        detail: "Balanced accuracy 80.0969% · Macro F1 80.2961%",
      },
    ],
    resultsNote:
      "Experimental results from offline evaluation runs, not clinical performance. Each figure comes from the model, experiment run and clean test split named on its own card, and the local Streamlit app's saved model is not re-benchmarked here.",
    limitations: [
      "The published results come from two offline experiment runs measured on the same clean test split; the local Streamlit app loads a saved MobileNetV2 model and its behaviour is not re-benchmarked here.",
      "The application is a local Streamlit implementation. Its behaviour on fingerprints captured with different sensors, lighting or pressure is not established.",
      "This is a research prototype. Fingerprint-based blood group prediction is not clinically validated and must not be used for medical diagnosis or to replace laboratory blood typing.",
    ],
    futureWork: [
      "Publish each experiment's results alongside the exact model and split that produced them.",
      "Evaluate the served MobileNetV2 pipeline on a held-out test set that follows the same clean-split protocol.",
      "Test robustness to image quality, lighting and sensor variation.",
    ],
    image: "/projects/bloo-group.png",
    gallery: ["/projects/bloo-group.png"],
    evidence: [
      {
        src: "/projects/evidence/blood-group-inceptionv3-soft-vote-test-confusion.png",
        alt: "Eight-class confusion matrix for the InceptionV3 soft-vote experiment on the clean test split, with most predictions falling on the diagonal.",
        caption:
          "InceptionV3 + soft-voting experiment, clean test split (877 images, run run_20261110_extended_inception): 70.6956% accuracy, 70.9943% balanced accuracy, 71.3250% macro F1. Rows are true classes, columns predicted.",
      },
      {
        src: "/projects/evidence/blood-group-mobilenetv2-soft-vote-test-confusion.png",
        alt: "Eight-class confusion matrix for the MobileNetV2 aspect-preserving soft-vote experiment on the same clean test split, with a stronger diagonal than the InceptionV3 run.",
        caption:
          "MobileNetV2 + aspect-preserving + soft-voting experiment, same clean test split (877 images, run run_20261111_backbone_resize): 79.5895% accuracy, 80.0969% balanced accuracy, 80.2961% macro F1. Rows are true classes, columns predicted.",
      },
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "Streamlit",
    ],
    features: [
      "Eight-class ABO/Rh prediction from a fingerprint image",
      "InceptionV3 + RBF-SVM feature experiment (299 × 299, 2,048-D embeddings)",
      "Streamlit app serving a fine-tuned MobileNetV2 model (224 × 224)",
      "Seed-controlled train/validation/test splits with a duplicate-overlap audit",
    ],
    highlights: [
      "Two separate pipelines: an InceptionV3 + SVM experiment and a MobileNetV2 Streamlit app",
      "5,837 fingerprint images across eight blood groups, split 4,085 / 875 / 877",
      "Presented as a research prototype, not a clinical test",
    ],
  },
  {
    id: 4,
    slug: "diabetes-prediction",
    title: "Diabetes Prediction using Machine Learning",
    // Withheld from every public surface: no source code or public repository
    // could be produced for the evidence audit. Retained for restoration.
    visibility: "draft",
    featured: false,
    category: "Machine Learning",
    status: "Completed",
    year: "2026",
    shortDescription:
      "A machine learning application that estimates diabetes risk from routine health indicators and shows which inputs influenced the result.",
    longDescription:
      "Diabetes Prediction packages a trained classification model as a small application for risk assessment. A user enters routine health indicators and receives a risk estimate, together with the factors that contributed most to it. The project treats explanation as part of the output: a prediction is presented with its reasoning rather than as a bare number, so someone without a modelling background can see what drove the result.",
    challenge:
      "A risk score is difficult to act on when nothing explains it. For a health-related prediction to be useful outside a data science team, the user needs to see which inputs pushed the estimate up or down.",
    solution:
      "Prediction is paired with feature-importance analysis. The trained model produces a risk estimate, and the application shows how much each input contributed to that estimate, supported by charts the user can read directly.",
    architecture:
      "A Python pipeline handles preprocessing and model training, and the trained model is served through a Streamlit application that renders the input form, the prediction, and the feature-importance charts.",
    implementation: [
      "A Python pipeline handles preprocessing and model training, and the trained model is served through a Streamlit application.",
      "Each prediction is paired with feature-importance values, so the inputs that moved the estimate are visible next to the result.",
      "Results are presented as charts rather than a single score, so the reasoning behind an estimate can be inspected.",
    ],
    limitations: [
      "No public repository or live demo is linked.",
      "No accuracy, precision or calibration figures are published for this model, so its performance should not be assumed.",
      "The application is a course project, not a medical device or a clinical decision tool.",
    ],
    futureWork: [
      "Publish model metrics together with the dataset split used to produce them.",
      "Add calibration analysis so predicted risk can be compared with observed outcomes.",
    ],
    image: "/projects/diabetes.png",
    gallery: ["/projects/diabetes.png"],
    technologies: [
      "Python",
      "scikit-learn",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    features: [
      "Risk prediction from routine health indicators",
      "Feature-importance analysis for each prediction",
      "Interactive charts for exploring results",
      "Model performance summary",
      "Input form for entering a new case",
    ],
    highlights: [
      "Predictions are shown with the factors behind them",
      "Model metrics stay visible rather than hidden",
      "One Python workflow covers training and the interface",
    ],
  },
];

/** Projects cleared for public rendering, routing and indexing. */
export const publishedProjects: Project[] = projects.filter(
  (project) => project.visibility !== "draft"
);

/** Drafts retained in the dataset but withheld from every public surface. */
export const draftProjects: Project[] = projects.filter(
  (project) => project.visibility === "draft"
);
