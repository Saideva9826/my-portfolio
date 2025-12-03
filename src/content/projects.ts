export const projects = [
  {
    _id: "1",
    _type: "project" as const,
    title: "Automated Price Monitoring & Compliance",
    description:
      "Engineered a pricing compliance pipeline across 6+ datasets for 1500+ SKUs to detect policy violations and automate resolution.",
    summary: "Enterprise pricing compliance automation system",
    impact: [
      "Monitored 1500+ product SKUs across 6+ data sources",
      "Reduced manual compliance checks by 90%, saving 40 hours/week",
      "Achieved 99.2% accuracy in policy violation detection"
    ],
    previewImage: "/projects/Automated_price.webp",
    images: ["/projects/Automated_price.webp"],
    status: "completed",
    link: "https://github.com/Saideva9826",
    github: "https://github.com/Saideva9826",
    tags: [
      { _id: "tag1", _type: "tag" as const, name: "Python" },
      { _id: "tag2", _type: "tag" as const, name: "Data Pipeline" },
      { _id: "tag3", _type: "tag" as const, name: "Analytics" },
    ],
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    _type: "project" as const,
    title: "Retail Forecasting & Model Explainability",
    description:
      "Developed ARIMA and regression models for monthly sales forecasting with explainable insights using SHAP and advanced visualizations.",
    summary: "Demand forecasting with explainable AI",
    impact: [
      "Achieved 85% accuracy on 24-month sales forecasting",
      "Delivered actionable insights via SHAP-based model interpretability",
      "Reduced inventory costs by 12% through better demand prediction"
    ],
    previewImage: "/projects/Retail_forecasting.webp",
    images: ["/projects/Retail_forecasting.webp"],
    status: "completed",
    link: "https://github.com/Saideva9826",
    github: "https://github.com/Saideva9826",
    tags: [
      { _id: "tag4", _type: "tag" as const, name: "Machine Learning" },
      { _id: "tag5", _type: "tag" as const, name: "ARIMA" },
      { _id: "tag6", _type: "tag" as const, name: "Data Science" },
    ],
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    _type: "project" as const,
    title: "Computer Vision with YOLO",
    description:
      "Built a YOLOv5-based pipeline for real-time image analysis with AWS Lambda and Flask API for scalable deployment.",
    summary: "Real-time object detection at scale",
    impact: [
      "Processed 10,000+ images daily with <100ms latency",
      "Deployed serverless architecture supporting 1000+ concurrent requests",
      "Achieved 94.3% mAP on custom object detection dataset"
    ],
    previewImage: "/projects/Computer_vision.webp",
    images: ["/projects/Computer_vision.webp"],
    status: "completed",
    link: "https://github.com/Saideva9826",
    github: "https://github.com/Saideva9826",
    tags: [
      { _id: "tag7", _type: "tag" as const, name: "Computer Vision" },
      { _id: "tag8", _type: "tag" as const, name: "AWS" },
      { _id: "tag9", _type: "tag" as const, name: "Flask" },
    ],
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  },
  {
    _id: "4",
    _type: "project" as const,
    title: "AI Study Buddy (RAG Chatbot)",
    description:
      "Context-aware chatbot using LangChain, Hugging Face models and vector stores for intelligent document Q&A, flashcard generation, and summarization.",
    summary: "Intelligent study companion with RAG capabilities",
    impact: [
      "Processed 500+ documents with semantic search and retrieval",
      "Reduced study prep time by 60% with AI-powered summarization",
      "Deployed to production serving 100+ active users"
    ],
    previewImage: "/projects/AI_study_buddy.webp",
    images: ["/projects/AI_study_buddy.webp"],
    status: "completed",
    link: "https://github.com/Saideva9826",
    github: "https://github.com/Saideva9826",
    tags: [
      { _id: "tag10", _type: "tag" as const, name: "AI/ML" },
      { _id: "tag11", _type: "tag" as const, name: "LangChain" },
      { _id: "tag12", _type: "tag" as const, name: "NLP" },
    ],
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  },
];
