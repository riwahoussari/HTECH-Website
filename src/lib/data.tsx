export const GENERAL_DATA = {
  PARTNERS: [
    {
      text: "“Gaiant's team stepped in to review partially completed conversations between different models. We analyzed the search results, reference material, and model responses”.",
      logoSrc: "/partners/partner-1.svg",
    },
    {
      text: "“Gaiant automated processes like invoice reconciliation, W9 processing, claim approval letters, and compliance support, resulting in significant cost and time savings”.",
      logoSrc: "/partners/partner-2.svg",
    },
    {
      text: "“Gaiant’s team worked within the client's platform to review model conversations from the research team and assess the level of accuracy of the model responses”.",
      logoSrc: "/partners/partner-3.svg",
    },
    {
      text: "“Gaiant's team stepped in to review partially completed conversations between different models. We analyzed the search results, reference material, and model responses”.",
      logoSrc: "/partners/partner-4.svg",
    },
  ],

  INDUSTRIES: [
    {
      name: "Technology",
      img: "/industries/Industries-tech.webp",
    },
    {
      name: "Banking & Financial Services",
      img: "/industries/Industries-banking.webp",
      // description: "Advancing patient care and biological research",
    },
    {
      name: "Insurance",
      img: "/industries/Industries-insurance.webp",
      // description: "Advancing patient care and biological research",
    },
    {
      name: "Logistics & Transportation",
      img: "/industries/Industries-healthcare.webp",
      // description: "Advancing patient care and biological research",
    },
    {
      name: "Retail",
      img: "/industries/Industries-tech.webp",
      // description: "Advancing patient care and biological research",
    },
    {
      name: "Manufacturing",
      img: "/industries/Industries-government.webp",
      description: "Advancing patient care and biological research",
    },
    {
      name: "Energy & Utilities",
      img: "/industries/Industries-energy.webp",
      description: "Advancing patient care and biological research",
    },
    {
      name: "Legal Services",
      img: "/industries/Industries-legal.webp",
      description: "Advancing patient care and biological research",
    },
    {
      name: "Education",
      img: "/industries/Industries-education.webp",
      description: "Advancing patient care and biological research",
    },
    {
      name: "Hopitality",
      img: "/industries/Industries-hospitality.webp",
      description: "Advancing patient care and biological research",
    },
  ],

  ARTICLES: [
    {
      title: "How AI is Reshaping Decision-Making Across Industries",
      subtitle: "GAIANT TEAM - SEP 19, 2025",
      imgSrc: "/blogs/blog-1.webp",
    },
    {
      title: "From Hype to Help: Making AI Practical for Everyday Work",
      subtitle: "GAIANT TEAM - SEP 19, 2025",
      imgSrc: "/blogs/blog-2.webp",
    },
    {
      title: "The Future of Efficiency: Why AI Is Your Next Teammate",
      subtitle: "GAIANT TEAM - SEP 19, 2025",
      imgSrc: "/blogs/blog-3.webp",
    },
    {
      title: "How AI is Reshaping Decision-Making Across Industries",
      subtitle: "GAIANT TEAM - SEP 19, 2025",
      imgSrc: "/blogs/blog-4.webp",
    },
  ],

  CASE_STUDIES: [
    {
      name: "Lebanese Army SuperApp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.",
      img: "/assets/case-studies/leb-army.jpg",
      markdown: `
## Overview
 
If you ask a lawyer, “What is the most rewarding aspect of contract creation?” they’ll tell you that it’s the chance to be creative and offer the client novel strategic advice. Ask them where they spend most of their time, and the script flips. “Lawyers I talk to often refer to themselves as ‘cut-and-paste drones,’” says James Ding, Co-Founder and CEO of Draftwise, an AI contract drafting, review, and negotiation platform powered by customers’ legal expertise.

As a software engineer, James has led teams across multiple industries where privacy, data security, and advanced search capability are crucial. So, he knew that the legal profession could create a sea change by implementing state-of-the-art generative and search AI models to draft higher-quality contracts faster and reduce time-consuming, mundane work. To realize this vision, James and the Draftwise team turned to Cohere models available through Microsoft Azure AI Foundry.

“Cohere models deliver the security, reliability, and performance that lawyers need to draft complex legal contracts. Integrating Cohere into Draftwise boosted the quality of search results by 30%.”
– James Ding, Co-Founder and CEO

## The Challenge

The Draftwise developer team laid out their strategy for bringing Smart Draft, their AI-powered contract drafting product, to market. Because of their deep trust in Microsoft based on extensive experience with Microsoft Azure, the company founders researched large language models (LLMs) on Azure AI Foundry and discovered Cohere's set of models: Command for text generation, and Embed and Rerank for search and retrieval.

“Once we knew that we could run Cohere models on Azure, we were sure we’d have the best of both worlds,” explains James Ding.
The Draftwise team also went directly to prospective customers to fully grasp the needs and preferences of today’s lawyers, and they found a customer base committed to the ideals of their profession. “We knew we could provide the best experience for lawyers by aligning with the tools they use every day and deliver Draftwise convenience from within their current workflow,” says Will Seaton, Chief Customer Officer at Draftwise.

![three soldiers holding and aiming their rifles](/assets/case-studies/leb-army.jpg)

## The Solution

When generating a legal agreement, lawyers seek specific information grounded in their clients' contracts, communications, and other documents. Draftwise needed a strong retrieval-augmented generation (RAG) system to power its contract generation tool, Smart Draft. Draftwise selected Cohere's models for their quality, accuracy, and search retrieval capabilities, and subsequently built its RAG system using three powerful Cohere models: Command, Embed, and Rerank.

The Cohere Command model offers strong text generation capabilities with the ability to cite source documents, which provides a natural, approachable interface for Smart Draft. Cohere Embed, a multimodal embedding model, enables advanced search through any source document by semantic meaning rather than simple keywords. Embed can process all data, including images, diagrams, tables, and graphs, which means that Draftwise solutions aren’t limited to text searches only. Finally, Cohere Rerank ensures that only the most relevant results appear at the top.

The three stacked models provide accurate information, with verifiable citations of source documents, to support complex legal cases. “We’ve built our models for real-world business use cases,” says Nicolás Morales, Head of Customer Experience and Partnerships at Cohere. “Cohere's secure, enterprise-focused generative and retrieval AI models seamlessly integrate into your workflows, delivering powerful results with broad multilingual support, high accuracy with citations, and cost-efficiency.”


## The Impact

Draftwise's Smart Draft solution gives lawyers more time for strategic client work by reducing the mundane aspects of drafting contracts. The company has seen impressive results by building a RAG-powered AI search system with Cohere.

Since incorporating fine-tuned Cohere models into its solution, Draftwise’s internal benchmarks have shown a 30% improvement in search result quality. On the backend, a threefold increase in API calls made by Draftwise to models over just the first quarter of 2025 indicates spectacular growth in usage. That comes as no surprise to Chief Customer Officer of Draftwise Will Seaton. “We’re seeing tremendous excitement about AI in the legal profession,” he says. “In addition to the productivity boosts and faster new lawyer training our customers are experiencing, they’re advising their clients on how they can also use AI to improve their operations.”
    `,
    },
    {
      name: "Lebanese Army LLM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.",
      img: "/assets/case-studies/leb-army.jpg",
      markdown: `
## Overview
 
If you ask a lawyer, “What is the most rewarding aspect of contract creation?” they’ll tell you that it’s the chance to be creative and offer the client novel strategic advice. Ask them where they spend most of their time, and the script flips. “Lawyers I talk to often refer to themselves as ‘cut-and-paste drones,’” says James Ding, Co-Founder and CEO of Draftwise, an AI contract drafting, review, and negotiation platform powered by customers’ legal expertise.

As a software engineer, James has led teams across multiple industries where privacy, data security, and advanced search capability are crucial. So, he knew that the legal profession could create a sea change by implementing state-of-the-art generative and search AI models to draft higher-quality contracts faster and reduce time-consuming, mundane work. To realize this vision, James and the Draftwise team turned to Cohere models available through Microsoft Azure AI Foundry.

“Cohere models deliver the security, reliability, and performance that lawyers need to draft complex legal contracts. Integrating Cohere into Draftwise boosted the quality of search results by 30%.”
– James Ding, Co-Founder and CEO

## The Challenge

The Draftwise developer team laid out their strategy for bringing Smart Draft, their AI-powered contract drafting product, to market. Because of their deep trust in Microsoft based on extensive experience with Microsoft Azure, the company founders researched large language models (LLMs) on Azure AI Foundry and discovered Cohere's set of models: Command for text generation, and Embed and Rerank for search and retrieval.

“Once we knew that we could run Cohere models on Azure, we were sure we’d have the best of both worlds,” explains James Ding.
The Draftwise team also went directly to prospective customers to fully grasp the needs and preferences of today’s lawyers, and they found a customer base committed to the ideals of their profession. “We knew we could provide the best experience for lawyers by aligning with the tools they use every day and deliver Draftwise convenience from within their current workflow,” says Will Seaton, Chief Customer Officer at Draftwise.

![three soldiers holding and aiming their rifles](/assets/case-studies/leb-army.jpg)

## The Solution

When generating a legal agreement, lawyers seek specific information grounded in their clients' contracts, communications, and other documents. Draftwise needed a strong retrieval-augmented generation (RAG) system to power its contract generation tool, Smart Draft. Draftwise selected Cohere's models for their quality, accuracy, and search retrieval capabilities, and subsequently built its RAG system using three powerful Cohere models: Command, Embed, and Rerank.

The Cohere Command model offers strong text generation capabilities with the ability to cite source documents, which provides a natural, approachable interface for Smart Draft. Cohere Embed, a multimodal embedding model, enables advanced search through any source document by semantic meaning rather than simple keywords. Embed can process all data, including images, diagrams, tables, and graphs, which means that Draftwise solutions aren’t limited to text searches only. Finally, Cohere Rerank ensures that only the most relevant results appear at the top.

The three stacked models provide accurate information, with verifiable citations of source documents, to support complex legal cases. “We’ve built our models for real-world business use cases,” says Nicolás Morales, Head of Customer Experience and Partnerships at Cohere. “Cohere's secure, enterprise-focused generative and retrieval AI models seamlessly integrate into your workflows, delivering powerful results with broad multilingual support, high accuracy with citations, and cost-efficiency.”


## The Impact

Draftwise's Smart Draft solution gives lawyers more time for strategic client work by reducing the mundane aspects of drafting contracts. The company has seen impressive results by building a RAG-powered AI search system with Cohere.

Since incorporating fine-tuned Cohere models into its solution, Draftwise’s internal benchmarks have shown a 30% improvement in search result quality. On the backend, a threefold increase in API calls made by Draftwise to models over just the first quarter of 2025 indicates spectacular growth in usage. That comes as no surprise to Chief Customer Officer of Draftwise Will Seaton. “We’re seeing tremendous excitement about AI in the legal profession,” he says. “In addition to the productivity boosts and faster new lawyer training our customers are experiencing, they’re advising their clients on how they can also use AI to improve their operations.”
    `,
    },
    {
      name: "Military Tribunal AI Powered Internal System",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.",
      img: "/assets/case-studies/leb-army.jpg",
      markdown: `
## Overview
 
If you ask a lawyer, “What is the most rewarding aspect of contract creation?” they’ll tell you that it’s the chance to be creative and offer the client novel strategic advice. Ask them where they spend most of their time, and the script flips. “Lawyers I talk to often refer to themselves as ‘cut-and-paste drones,’” says James Ding, Co-Founder and CEO of Draftwise, an AI contract drafting, review, and negotiation platform powered by customers’ legal expertise.

As a software engineer, James has led teams across multiple industries where privacy, data security, and advanced search capability are crucial. So, he knew that the legal profession could create a sea change by implementing state-of-the-art generative and search AI models to draft higher-quality contracts faster and reduce time-consuming, mundane work. To realize this vision, James and the Draftwise team turned to Cohere models available through Microsoft Azure AI Foundry.

“Cohere models deliver the security, reliability, and performance that lawyers need to draft complex legal contracts. Integrating Cohere into Draftwise boosted the quality of search results by 30%.”
– James Ding, Co-Founder and CEO

## The Challenge

The Draftwise developer team laid out their strategy for bringing Smart Draft, their AI-powered contract drafting product, to market. Because of their deep trust in Microsoft based on extensive experience with Microsoft Azure, the company founders researched large language models (LLMs) on Azure AI Foundry and discovered Cohere's set of models: Command for text generation, and Embed and Rerank for search and retrieval.

“Once we knew that we could run Cohere models on Azure, we were sure we’d have the best of both worlds,” explains James Ding.
The Draftwise team also went directly to prospective customers to fully grasp the needs and preferences of today’s lawyers, and they found a customer base committed to the ideals of their profession. “We knew we could provide the best experience for lawyers by aligning with the tools they use every day and deliver Draftwise convenience from within their current workflow,” says Will Seaton, Chief Customer Officer at Draftwise.

![three soldiers holding and aiming their rifles](/assets/case-studies/leb-army.jpg)

## The Solution

When generating a legal agreement, lawyers seek specific information grounded in their clients' contracts, communications, and other documents. Draftwise needed a strong retrieval-augmented generation (RAG) system to power its contract generation tool, Smart Draft. Draftwise selected Cohere's models for their quality, accuracy, and search retrieval capabilities, and subsequently built its RAG system using three powerful Cohere models: Command, Embed, and Rerank.

The Cohere Command model offers strong text generation capabilities with the ability to cite source documents, which provides a natural, approachable interface for Smart Draft. Cohere Embed, a multimodal embedding model, enables advanced search through any source document by semantic meaning rather than simple keywords. Embed can process all data, including images, diagrams, tables, and graphs, which means that Draftwise solutions aren’t limited to text searches only. Finally, Cohere Rerank ensures that only the most relevant results appear at the top.

The three stacked models provide accurate information, with verifiable citations of source documents, to support complex legal cases. “We’ve built our models for real-world business use cases,” says Nicolás Morales, Head of Customer Experience and Partnerships at Cohere. “Cohere's secure, enterprise-focused generative and retrieval AI models seamlessly integrate into your workflows, delivering powerful results with broad multilingual support, high accuracy with citations, and cost-efficiency.”


## The Impact

Draftwise's Smart Draft solution gives lawyers more time for strategic client work by reducing the mundane aspects of drafting contracts. The company has seen impressive results by building a RAG-powered AI search system with Cohere.

Since incorporating fine-tuned Cohere models into its solution, Draftwise’s internal benchmarks have shown a 30% improvement in search result quality. On the backend, a threefold increase in API calls made by Draftwise to models over just the first quarter of 2025 indicates spectacular growth in usage. That comes as no surprise to Chief Customer Officer of Draftwise Will Seaton. “We’re seeing tremendous excitement about AI in the legal profession,” he says. “In addition to the productivity boosts and faster new lawyer training our customers are experiencing, they’re advising their clients on how they can also use AI to improve their operations.”
    `,
    },
    {
      name: "Council of Ministers Internal Dashboard",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.",
      img: "/assets/case-studies/leb-army.jpg",
      markdown: `
## Overview
 
If you ask a lawyer, “What is the most rewarding aspect of contract creation?” they’ll tell you that it’s the chance to be creative and offer the client novel strategic advice. Ask them where they spend most of their time, and the script flips. “Lawyers I talk to often refer to themselves as ‘cut-and-paste drones,’” says James Ding, Co-Founder and CEO of Draftwise, an AI contract drafting, review, and negotiation platform powered by customers’ legal expertise.

As a software engineer, James has led teams across multiple industries where privacy, data security, and advanced search capability are crucial. So, he knew that the legal profession could create a sea change by implementing state-of-the-art generative and search AI models to draft higher-quality contracts faster and reduce time-consuming, mundane work. To realize this vision, James and the Draftwise team turned to Cohere models available through Microsoft Azure AI Foundry.

“Cohere models deliver the security, reliability, and performance that lawyers need to draft complex legal contracts. Integrating Cohere into Draftwise boosted the quality of search results by 30%.”
– James Ding, Co-Founder and CEO

## The Challenge

The Draftwise developer team laid out their strategy for bringing Smart Draft, their AI-powered contract drafting product, to market. Because of their deep trust in Microsoft based on extensive experience with Microsoft Azure, the company founders researched large language models (LLMs) on Azure AI Foundry and discovered Cohere's set of models: Command for text generation, and Embed and Rerank for search and retrieval.

“Once we knew that we could run Cohere models on Azure, we were sure we’d have the best of both worlds,” explains James Ding.
The Draftwise team also went directly to prospective customers to fully grasp the needs and preferences of today’s lawyers, and they found a customer base committed to the ideals of their profession. “We knew we could provide the best experience for lawyers by aligning with the tools they use every day and deliver Draftwise convenience from within their current workflow,” says Will Seaton, Chief Customer Officer at Draftwise.

![three soldiers holding and aiming their rifles](/assets/case-studies/leb-army.jpg)

## The Solution

When generating a legal agreement, lawyers seek specific information grounded in their clients' contracts, communications, and other documents. Draftwise needed a strong retrieval-augmented generation (RAG) system to power its contract generation tool, Smart Draft. Draftwise selected Cohere's models for their quality, accuracy, and search retrieval capabilities, and subsequently built its RAG system using three powerful Cohere models: Command, Embed, and Rerank.

The Cohere Command model offers strong text generation capabilities with the ability to cite source documents, which provides a natural, approachable interface for Smart Draft. Cohere Embed, a multimodal embedding model, enables advanced search through any source document by semantic meaning rather than simple keywords. Embed can process all data, including images, diagrams, tables, and graphs, which means that Draftwise solutions aren’t limited to text searches only. Finally, Cohere Rerank ensures that only the most relevant results appear at the top.

The three stacked models provide accurate information, with verifiable citations of source documents, to support complex legal cases. “We’ve built our models for real-world business use cases,” says Nicolás Morales, Head of Customer Experience and Partnerships at Cohere. “Cohere's secure, enterprise-focused generative and retrieval AI models seamlessly integrate into your workflows, delivering powerful results with broad multilingual support, high accuracy with citations, and cost-efficiency.”


## The Impact

Draftwise's Smart Draft solution gives lawyers more time for strategic client work by reducing the mundane aspects of drafting contracts. The company has seen impressive results by building a RAG-powered AI search system with Cohere.

Since incorporating fine-tuned Cohere models into its solution, Draftwise’s internal benchmarks have shown a 30% improvement in search result quality. On the backend, a threefold increase in API calls made by Draftwise to models over just the first quarter of 2025 indicates spectacular growth in usage. That comes as no surprise to Chief Customer Officer of Draftwise Will Seaton. “We’re seeing tremendous excitement about AI in the legal profession,” he says. “In addition to the productivity boosts and faster new lawyer training our customers are experiencing, they’re advising their clients on how they can also use AI to improve their operations.”
    `,
    },
    {
      name: "Code For Lebanon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.",
      img: "/assets/case-studies/leb-army.jpg",
      markdown: `
## Overview
 
If you ask a lawyer, “What is the most rewarding aspect of contract creation?” they’ll tell you that it’s the chance to be creative and offer the client novel strategic advice. Ask them where they spend most of their time, and the script flips. “Lawyers I talk to often refer to themselves as ‘cut-and-paste drones,’” says James Ding, Co-Founder and CEO of Draftwise, an AI contract drafting, review, and negotiation platform powered by customers’ legal expertise.

As a software engineer, James has led teams across multiple industries where privacy, data security, and advanced search capability are crucial. So, he knew that the legal profession could create a sea change by implementing state-of-the-art generative and search AI models to draft higher-quality contracts faster and reduce time-consuming, mundane work. To realize this vision, James and the Draftwise team turned to Cohere models available through Microsoft Azure AI Foundry.

“Cohere models deliver the security, reliability, and performance that lawyers need to draft complex legal contracts. Integrating Cohere into Draftwise boosted the quality of search results by 30%.”
– James Ding, Co-Founder and CEO

## The Challenge

The Draftwise developer team laid out their strategy for bringing Smart Draft, their AI-powered contract drafting product, to market. Because of their deep trust in Microsoft based on extensive experience with Microsoft Azure, the company founders researched large language models (LLMs) on Azure AI Foundry and discovered Cohere's set of models: Command for text generation, and Embed and Rerank for search and retrieval.

“Once we knew that we could run Cohere models on Azure, we were sure we’d have the best of both worlds,” explains James Ding.
The Draftwise team also went directly to prospective customers to fully grasp the needs and preferences of today’s lawyers, and they found a customer base committed to the ideals of their profession. “We knew we could provide the best experience for lawyers by aligning with the tools they use every day and deliver Draftwise convenience from within their current workflow,” says Will Seaton, Chief Customer Officer at Draftwise.

![three soldiers holding and aiming their rifles](/assets/case-studies/leb-army.jpg)

## The Solution

When generating a legal agreement, lawyers seek specific information grounded in their clients' contracts, communications, and other documents. Draftwise needed a strong retrieval-augmented generation (RAG) system to power its contract generation tool, Smart Draft. Draftwise selected Cohere's models for their quality, accuracy, and search retrieval capabilities, and subsequently built its RAG system using three powerful Cohere models: Command, Embed, and Rerank.

The Cohere Command model offers strong text generation capabilities with the ability to cite source documents, which provides a natural, approachable interface for Smart Draft. Cohere Embed, a multimodal embedding model, enables advanced search through any source document by semantic meaning rather than simple keywords. Embed can process all data, including images, diagrams, tables, and graphs, which means that Draftwise solutions aren’t limited to text searches only. Finally, Cohere Rerank ensures that only the most relevant results appear at the top.

The three stacked models provide accurate information, with verifiable citations of source documents, to support complex legal cases. “We’ve built our models for real-world business use cases,” says Nicolás Morales, Head of Customer Experience and Partnerships at Cohere. “Cohere's secure, enterprise-focused generative and retrieval AI models seamlessly integrate into your workflows, delivering powerful results with broad multilingual support, high accuracy with citations, and cost-efficiency.”


## The Impact

Draftwise's Smart Draft solution gives lawyers more time for strategic client work by reducing the mundane aspects of drafting contracts. The company has seen impressive results by building a RAG-powered AI search system with Cohere.

Since incorporating fine-tuned Cohere models into its solution, Draftwise’s internal benchmarks have shown a 30% improvement in search result quality. On the backend, a threefold increase in API calls made by Draftwise to models over just the first quarter of 2025 indicates spectacular growth in usage. That comes as no surprise to Chief Customer Officer of Draftwise Will Seaton. “We’re seeing tremendous excitement about AI in the legal profession,” he says. “In addition to the productivity boosts and faster new lawyer training our customers are experiencing, they’re advising their clients on how they can also use AI to improve their operations.”
    `,
    },
  ],
};

export const LANDING_PAGE_DATA = {
  HERO: {
    title: "One AI work platform for any kind of work",
    text: "Gaiant is where powerful AI meets practical business solutions, so you can work smarter.",
    img1: {
      src: "/demos/patient-history-dashboard.svg",
      alt: "Image of Pateint History Dashboard",
    },
    img2: {
      src: "/images/team-smiling.webp",
      alt: "A team smiling and working together",
    },
  },

  WHAT_MAKES_US_DIFFERENT: {
    title: "Turning complex AI into your clear advantage",
    subtitle: "WHAT MAKES US DIFFERENT",
    text: "We bring clarity to complexity, combining secure deployment, tailored solutions, and ongoing support to give your business a lasting advantage.",
    boldText:
      "With us, AI isn’t just technology — it’s your edge in a changing world.",
    cards: [
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Adaptability",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Cutomization",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Deployment",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
    ],
  },

  INDUSTRIES_WE_EMPOWER: {
    subtitle: "TAILORED TO EVERY SECTOR",
    title: "Industries We Empower",
  },

  TOOLS: {
    title: "Works seamlessly with the tools you already use",
    subtitle: "PART OF YOUR WORKFLOW",
  },

  ARCHE_SECTION: {
    title: "Your complete AI solution for seamless workflows",
    text: "From messy systems to one smart flow — Archē unifies it all so progress feels effortless.",
    img: { src: "/demos/ai-chat-demo.svg", alt: "AI chatbot dashboard" },
  },

  WHAT_THIS_MEANS: {
    title: "What this means for you",
    subtitle: "REDEFINING YOUR WORK DAY",
    img: { src: "/demos/ai-chat-demo-2.svg", alt: "Ai workflow Demo" },
    accordionContent: [
      {
        title: "For your work",
        subtitle: "WHERE WE MAKE A DIFFERENCE",
        list: [
          "Turns complex data into clear, actionable insights",
          "Adapts to the tools and systems you already use",
          "Supports collaboration across teams and departments",
          "Scales with your projects as they grow",
        ],
      },
      {
        title: "For your time",
        subtitle: "WHERE WE MAKE A DIFFERENCE",
        list: [
          "Turns complex data into clear, actionable insights",
          "Adapts to the tools and systems you already use",
          "Supports collaboration across teams and departments",
          "Scales with your projects as they grow",
        ],
      },
      {
        title: "For your results",
        subtitle: "WHERE WE MAKE A DIFFERENCE",
        list: [
          "Turns complex data into clear, actionable insights",
          "Adapts to the tools and systems you already use",
          "Supports collaboration across teams and departments",
          "Scales with your projects as they grow",
        ],
      },
    ],
  },
};

export const ARCHE_PAGE_DATA = {
  HERO: {
    title: "AI for business that turns complexity into clarity",
    subtitle: "ARCHĒ",
    text: "Archē sets the standard for business performance by helping teams automate work and accelerate decisions that drive results — all in one scalable, secure workspace.",
  },

  THE_ARCHE_MODEL: {
    title: "More mindspace, <br> less mayhem",
    subtitle: "THE ARCHĒ MODEL",
    text: "No matter the industry, Archē handles the repetitive work so your people can focus on the big picture.",
    img1: {
      src: "/images/woman-on-laptop.webp",
      alt: "A woman working on her laptop",
    },
    img2: {
      src: "/images/watered-leaf.webp",
      alt: "A green true leaf with drops of water",
    },
  },

  ACCELERATE_IMPACT: {
    title: "Accelerate impact <br> and outcomes",
    subtitle: "",
    text: "Enable seamless human-agent collaboration, automate routine tasks, and transform fragmented data into actionable insights.",
    cards: [
      {
        subtitle: "ADVANCED SEARCH & RETRIEVAL",
        title: "Discover",
        text: "From basic Q&A to complex decision making, Archē surfaces verifiable insights grounded in your data.",
        img: {
          src: "/demos/patient-history-dashboard-beige.svg",
          alt: "Image of the Patient History Dashboard",
        },
      },
      {
        subtitle: "GENERATIVE AI",
        title: "Create",
        text: "Co-create documents, generate summaries, and produce tables and charts instantly.",
        img: {
          src: "/demos/ai-chat-demo-3.svg",
          alt: "Image of the Patient History Dashboard",
        },
      },
      {
        subtitle: "WORKFLOW AUTOMATION",
        title: "Discover",
        text: "Deploy AI agents across teams to eliminate tedious tasks and accelerate complex workflows.",
        img: {
          src: "/demos/ai-chat-demo-2.svg",
          alt: "Image of the Patient History Dashboard",
        },
      },
    ],
  },

  ARCHE_INDUSTRIES: {
    title: "Make AI work for you",
    text: "No matter the role or industry, Archē handles the repetitive work so your people can focus on the big picture",
    tabs: ["Vault", "Legal", "Sales", "Finance", "Operations", "HR"],
  },
};

export const INDUSTRIES_PAGE_DATA = {
  HERO: {
    subtitle: "INDUSTRIES",
    title: "Solutions designed <sm:br> for any industry need",
    text: "Every organization faces unique challenges. <br> Our AI adapts, scales, and delivers value across fields — streamlining operations and enabling smarter decisions, all while fitting the way you work.",
  },

  TESTIMONIALS_SECTION: {
    title: "Hear from our customers",
    text: "Industry leaders trust Gaiant to deliver better customer experiences",
    testimonials: [
      {
        text: "“Gaiant transformed how we work — reports that used to take days now take minutes. Accuracy is solid, integrations were painless, and our team actually trusts the insights. ROI within two months.”",
        name: "Maya Hage",
        position: "Head of Operations",
        company: "NovaHealth",
        image: "/images/woman-profile.webp",
      },
      {
        text: "“Since implementing Gaiant, our support response time dropped by 50%. The automation and AI suggestions are game-changers. Our customers notice the difference.”",
        name: "Jordan Lee",
        position: "Customer Experience Manager",
        company: "BrightCom",
        image: "/images/woman-profile.webp",
      },
      {
        text: "“We tried multiple tools before, but none were as seamless and insightful as Gaiant. It adapts to our workflow and delivers exactly what we need — effortlessly.”",
        name: "Ava Patel",
        position: "Operations Director",
        company: "FinSight",
        image: "/images/woman-profile.webp",
      },
    ],
  },
};

export const INDUSTRY_PAGE_DATA = {
  HERO: {
    title: "AI for faster decisions <sm:br> and lower risk",
    subtitle: "BANKING & FINANCIAL SERVICES",
    text: "Speed decision-making, detect fraud, and automate reporting with secure, scalable AI — cutting costs while surfacing high-value insights.",
  },

  FEATURES_SECTION: {
    title: "Smarter moves with fewer resources",
    subtitle: "TRUSTED BY FINANCIAL LEADERS",
    text: "AI often adds people and process. Done right, it finds fraud, streamlines ops, and makes services human — real impact without the extra overhead.",
    img1: {
      src: "/images/man-on-laptop.webp",
      alt: "A man in a suit working on his laptop",
    },
    img2: { src: "/demos/ai-prompt.svg", alt: "" },
    accordionContent: [
      {
        title: "Improve knowledge management",
        subtitle: "STRENGTHEM TRUST AND EFFICIENCY",
        list: [
          "Detect fraud and protect sensitive data",
          "Automate reporting with precision and speed",
          "Ensure compliance across every transaction",
          "Deliver clear insights for smarter decisions",
        ],
      },
      {
        title: "Reduce busywork",
        subtitle: "STRENGTHEM TRUST AND EFFICIENCY",
        list: [
          "Detect fraud and protect sensitive data",
          "Automate reporting with precision and speed",
          "Ensure compliance across every transaction",
          "Deliver clear insights for smarter decisions",
        ],
      },
      {
        title: "Automate common support tickets",
        subtitle: "STRENGTHEM TRUST AND EFFICIENCY",
        list: [
          "Detect fraud and protect sensitive data",
          "Automate reporting with precision and speed",
          "Ensure compliance across every transaction",
          "Deliver clear insights for smarter decisions",
        ],
      },
    ],
  },

  USE_CASES: {
    title: "Use Cases",
    subtitle: "BANKING & FINANCIAL SERVICES",
    text: "See how leading firms are streamlining operations and scaling insight.",
    cards: [
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
    ],
  },

  OUR_APPROACH: {
    title: "Our Approach",
    subtitle: "SYSTEMS THAT FIT, NOT FORCE",
    text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
    img: {
      src: "/images/video-screenshot.webp",
      alt: "screenshot of a videoplayer",
    },
  },
};

export const ABOUT_PAGE_DATA = {
  HERO: {
    title: "We’re building the <sm:br> future of language AI",
    subtitle: "WHO ARE GAIANT",
    text: "Gaiant empowers every developer and enterprise to build amazing products and capture true business value with language AI.",
  },

  OUR_STORY: {
    subtitle: "OUR STORY",
    title:
      "Gaiant enables enterprises that prioritize data security to deploy AI agents and automations at scale within their own infrastructure.",
    text: "We believe AI has the potential to eliminate most mundane tasks from daily work. To achieve this, we built Archē, an agentic AI platform that securely accesses all of the data you use in your work, because AI is only as good as the data you give it. By enabling private deployment, we give companies the confidence to put their data into AI, with the efficiency to offer a cost of ownership that makes sense at scale. <br> <br> We are expanding from serving a select group of customers to making Archē widely available, building on our work over the past few months. Leading organizations such as The lebanese Army, USJ, CFL, Beycom, Elites, Mitai and most recently ICGER are seeing the transformative impact of secure AI agents developed in Archē. These agents are being deployed across critical industries that underpin the global economy, including finance, healthcare, manufacturing, telecommunications, energy, and the public sector.",
  },

  OUR_MISSION: {
    title: "",
    subtitle: "",
    cards: [
      {
        title: "We’re driven by cutting edge research",
        subtitle: "SHAPING THE FUTURE OF LANGUAGE",
        text: "Unifying research and product to create human-level language technology.",
      },
      {
        title: "We’re a collaborative team of experts",
        subtitle: "DRIVEN BY HUMAN INGENUITY",
        text: "Passionate ML/AI experts advancing language AI for everyone.",
      },
      {
        title: "We’re pioneering the future of language AI",
        subtitle: "TRANSFORMING BUSINESS THROUGH INTELLIGENCE",
        text: "Transformer-powered models delivering practical, scalable NLP solutions.",
      },
    ],
  },
};

export const CAREERS_PAGE_DATA = {
  HERO: {
    title: "Work with us, change business forever",
    subtitle: "WORKING AT GAIANT",
    text: "Join a team of thinkers and doers pushing the boundaries to reshape what's possible.",
  },

  LIFE_AT_GAIANT: {
    title: "Life At Gaiant",
    subtitle: "WHAT SHOULD YOU EXPECT?",
    cards: [
      {
        title: "A mission with meaning",
        subtitle: "SHAPE THE FUTURE OF LANGUAGE INTELLIGENCE",
        text: "Every project contributes to redefining how businesses understand people.",
      },
      {
        title: "A team that listens",
        subtitle: "COLLABORATION ROOTED IN TRUST AND RESPECT",
        text: "Your ideas guide decisions in a culture of open dialogue.",
      },
      {
        title: "A place to grow",
        subtitle: "CONTINUOUS LEARNING, MENTORSHIP & CAREER EVOLUTION",
        text: "We invest in your growth with guidance, opportunities, and freedom.",
      },
    ],
  },

  DO_YOU_FIT: {
    subtitle: "DO YOU FIT?",
    title:
      "We want Gaiant to be the place where everyone does the best work of their career.",
    text: " So we make thoughtful decisions about how we work, the perks we provide, and how we create a diverse and inclusive work environment. We also foster technical creativity and innovation through internal hackathons, demos, tech talks, and achievement recognition programs that form a cornerstone of our culture at Gaiant. <br> <br> Join us and work alongside some of the world’s best talent from the likes of Apple, Meta AI, Amazon and Google Brain, as well as full-time staff adjunct professors from Stanford, Oxford, University of Toronto, and UCL London.",
  },

  WHATS_IN_IT_FOR_YOU: {
    title: "What's in it for you?",
    subtitle: "PERKS AND BENEFITS",
    img: {
      src: "/images/man-in-online-meeting.webp",
      alt: "A man in an online meeting",
    },
    accordionContent: [
      {
        title: "Work Flexibility",
        subtitle: "ON YOUR OWN TERMS",
        list: [
          "We proudly support a remote work culture worldwide",
          "We offer centralized hubs to give teams a place to meet and innovate",
          "We respect that life gets busy – no penalties or apologies ",
          "Quality work matters most, whether it’s from a desk or the Bahamas",
        ],
      },
      {
        title: "Bonuses and Equity",
        subtitle: "ON YOUR OWN TERMS",
        list: [
          "We proudly support a remote work culture worldwide",
          "We offer centralized hubs to give teams a place to meet and innovate",
          "We respect that life gets busy – no penalties or apologies ",
          "Quality work matters most, whether it’s from a desk or the Bahamas",
        ],
      },
      {
        title: "Health Coverage",
        subtitle: "ON YOUR OWN TERMS",
        list: [
          "We proudly support a remote work culture worldwide",
          "We offer centralized hubs to give teams a place to meet and innovate",
          "We respect that life gets busy – no penalties or apologies ",
          "Quality work matters most, whether it’s from a desk or the Bahamas",
        ],
      },
    ],
  },

  OPEN_ROLES: {
    title: "Open roles at Gaiant",
    cards: [
      {
        title: "Enterprise Solutions Associate",
        text: "(Beirut - Remote)",
      },
      {
        title: "Quality Manager",
        text: "(Beirut - Remote)",
      },
      {
        title: "SVP of Sales, Enterprise, Technology - Banking",
        text: "(Beirut - Remote)",
      },
      {
        title: "Director of Quality",
        text: "(Beirut - Remote)",
      },
      {
        title: "SVP of Sales, Enterprise, Technology - Healthcare",
        text: "(Beirut - Remote)",
      },
      {
        title: "Senior Front-End Engineer",
        text: "(Beirut - Remote)",
      },
      {
        title: "Procurement Analyst",
        text: "(Beirut - Remote)",
      },
      {
        title: "AI Data Trainer, Arabic",
        text: "(Beirut - Remote)",
      },
      {
        title: "Research Internship",
        text: "(Beirut - Remote)",
      },
    ],
  },
};

export type TLinkRecord = {
  name: string;
  link: string;
  sublinks?: TLinkRecord[];
};
export const LINKS: TLinkRecord[] = [
  {
    name: "Products",
    link: "/arche",
    sublinks: [{ name: "Archē", link: "/arche" }],
  },
  {
    name: "Solutions",
    link: "/industries",
    sublinks: GENERAL_DATA.INDUSTRIES.map((industry) => {
      return { link: `/industries/${industry.name}`, name: industry.name };
    }),
  },
  {
    name: "Company",
    link: "/about",
    sublinks: [
      { name: "About", link: "/about" },
      { name: "News", link: "/news" },
      { name: "Careers", link: "/careers" },
    ],
  },
];
