export const profile = {
  name: 'Pratik Jawade',
  role: 'DevOps Engineer',
  experience: '6+ Years',
  tagline: 'Automating Cloud Delivery. Building Reliable DevOps at Scale.',
  location: 'India',
  email: 'pratikjawade608@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pratik-jawade-devops/',
  github: 'https://github.com/pratikjawade0608',
  resume: 'Pratik_Jawade_Resume.pdf',
  image: 'profile.png',
}

export const rotatingRoles = [
  'Multi-Environment Deployments',
  'End-to-End CI/CD Delivery',
  'Cloud Automation',
  'Infrastructure as Code',
  'Azure DevOps Engineering',
]

export const metrics = [
  {
    end: 75,
    prefix: '',
    suffix: '%+',
    label: 'Processing efficiency improvement',
    detail: 'Privacy-request automation',
  },
  {
    end: 40,
    prefix: '~',
    suffix: '%',
    label: 'Infrastructure cost reduction',
    detail: 'Cloud resource optimization',
  },
  {
    end: 15,
    prefix: '',
    suffix: '+ hrs',
    label: 'Manual effort saved / week',
    detail: 'CI/CD automation',
  },
  {
    end: 2,
    prefix: '< ',
    suffix: ' hrs',
    label: 'Optimized ETL processing',
    detail: 'Data pipeline performance',
  },
]

export const skillGroups = [
  {
    title: 'Cloud & Administration',
    items: [
      'Microsoft Azure',
      'Azure Administration',
      'Azure Web App',
      'Google Cloud Platform',
    ],
  },
  {
    title: 'DevOps & CI/CD',
    items: [
      'Azure DevOps',
      'Azure Pipelines',
      'Azure Repos',
      'YAML Pipelines',
      'Git',
      'GitHub',
      'Jenkins',
      'Release Management',
    ],
  },
  {
    title: 'Infrastructure as Code',
    items: [
      'Terraform',
      'ARM Templates',
      'Infrastructure as Code',
    ],
  },
  {
    title: 'Containers & Orchestration',
    items: [
      'Docker',
      'Kubernetes',
      'Helm',
      'AKS',
    ],
  },
  {
    title: 'Data Engineering & Automation',
    items: [
      'Azure Synapse Analytics',
      'Azure Data Factory',
      'Azure SQL Database',
      'SQL Server',
      'T-SQL',
      'ETL',
      'SFTP',
      'Data Mapping',
      'Data Validation',
    ],
  },
  {
    title: 'Database DevOps',
    items: [
      'SSDT',
      'DACPAC',
      'SqlPackage',
      'SQLCMD',
      'Azure SQL',
      'Database CI/CD',
    ],
  },
  {
    title: 'Development & Automation',
    items: [
      'Power Platform',
      'Power Automate',
      'PowerShell',
      'Ansible',
      'Node.js',
      'npm',
      'Python',
    ],
  },
  {
    title: 'Identity, Monitoring & Integration',
    items: [
      'Microsoft Entra ID',
      'Azure AD',
      'Managed Identity',
      'Azure Log Analytics',
      'SSO',
      'Snowflake Integration',
      'Azure Artifacts',
    ],
  },
]

export const projects = [
  {
    eyebrow: 'Data Engineering · SQL · Azure DevOps',
    role: 'Data Engineering & Deployment',
    title:
      'Sales Intelligence Platform — Data Integration & CI/CD Deployment',
    summary:
      'Integrated a new business data source into a Sales Intelligence platform, covering secure SFTP ingestion, SQL staging and target models, application-facing views, database deployment, environment promotion, and application release support.',
    impact:
      'Enabled multiple business datasets to be presented through a unified application experience while establishing controlled, repeatable database and application deployments across Sandbox, Dev/Test, and Production.',
    details: [
      'Processed recurring source files received through secure SFTP and loaded inbound data into SQL staging tables.',
      'Supported staging-to-target processing for opportunity, engagement, headcount, client-mapping, solution, and relationship datasets.',
      'Implemented and supported data mapping, datatype conversion, missing-field handling, and source-data validation.',
      'Worked with Azure SQL objects including tables, views, indexes, staging models, and application-facing database objects.',
      'Supported SSDT/DACPAC-based Azure SQL deployment through Azure DevOps using dotnet build, Managed Identity, Azure SQL access tokens, and SqlPackage.',
      'Supported separate pre-deployment SQL automation using ordered SQL scripts and SQLCMD.',
      'Supported React and Flask application deployment to Azure Web App through controlled CI/CD workflows.',
      'Validated changes across Sandbox, Dev/Test, and Production promotion stages.',
    ],
    tags: [
      'Azure DevOps',
      'Azure SQL',
      'T-SQL',
      'SSDT',
      'DACPAC',
      'SqlPackage',
      'SQLCMD',
      'Azure Synapse',
      'SFTP',
      'Managed Identity',
      'Azure Web App',
      'CI/CD',
    ],
  },

  {
    eyebrow: 'Solution Architecture · Azure Data Factory',
    role: 'Solution Architecture & Data Engineering',
    title: 'GeoServe — ADF Solution Architecture & Deployment',
    summary:
      'Designed and implemented an end-to-end Azure Data Factory solution including ADF pipelines, datasets, supporting scripts, Git integration, deployment artifacts, and environment-specific configurations.',
    impact:
      'Established a structured multi-environment ADF deployment process and strengthened secure platform access through centralized Snowflake SSO integration.',
    details: [
      'Designed the Azure Data Factory solution architecture and supporting deployment approach.',
      'Created and maintained ADF pipelines, datasets, scripts, and related deployment components.',
      'Integrated source control and managed application changes through Git and Azure DevOps.',
      'Managed controlled ADF deployments across Stage, Dev, and Production environments.',
      'Supported ARM-template based release processes and environment-specific configuration.',
      'Implemented Snowflake Single Sign-On using Microsoft Entra ID / Azure Enterprise Applications.',
    ],
    tags: [
      'Azure Data Factory',
      'Solution Architecture',
      'Azure DevOps',
      'CI/CD',
      'Git',
      'ARM Templates',
      'Microsoft Entra ID',
      'Snowflake',
      'SSO',
    ],
  },

  {
    eyebrow: 'DevOps Automation · Azure Data Factory',
    role: 'ADF Engineering & DevOps Automation',
    title: 'IndusInd Bank — ADF CI/CD & npm Deployment Automation',
    summary:
      'Designed and implemented an Azure Data Factory delivery solution covering pipelines, datasets, supporting scripts, Git integration, branching strategy, ARM-template management, and controlled Stage-to-Dev-to-Production deployment.',
    impact:
      'Improved deployment repeatability through automated ADF releases and npm-based deployment workflows while optimizing ETL processing to complete in under 2 hours.',
    details: [
      'Created and maintained Azure Data Factory pipelines, datasets, scripts, and supporting deployment components.',
      'Designed ADF Git integration and an effective branching strategy for development and release management.',
      'Generated and managed ARM templates through Azure Repos.',
      'Developed a selective deployment approach for ADF workloads.',
      'Extended the deployment process with npm-based automation to reduce repetitive deployment activities.',
      'Managed controlled deployments across Stage, Dev, and Production environments.',
      'Monitored and optimized ETL workloads, reducing processing time to less than 2 hours.',
    ],
    tags: [
      'Azure Data Factory',
      'Azure DevOps',
      'npm',
      'CI/CD',
      'Git',
      'ARM Templates',
      'Deployment Automation',
      'ETL',
    ],
  },

  {
    eyebrow: 'Azure DevOps · Kubernetes · Terraform · CI/CD',
    role: 'Application Developer / DevOps Engineer',
    title:
      'Enterprise Application Platform — DevOps, Kubernetes & CI/CD Automation',
    summary:
      'Worked on a large-scale application platform supporting development, maintenance, testing, troubleshooting, feature delivery, infrastructure automation, and multi-environment deployments. Built and maintained Azure DevOps YAML pipelines, Docker-based delivery workflows, Terraform infrastructure, and Kubernetes deployment configurations across multiple application modules.',
    impact:
      'Improved deployment repeatability and operational consistency by standardizing build, containerization, infrastructure, and Kubernetes deployment workflows while reducing repetitive manual delivery activities across multiple platform services.',
    details: [
      'Designed, created, and maintained Azure DevOps YAML build and release pipelines for multiple application modules and platform services.',
      'Created and maintained Dockerfiles and container delivery workflows for application components.',
      'Built reusable infrastructure definitions using Terraform to automate repetitive infrastructure provisioning activities.',
      'Created and maintained Kubernetes deployment configurations and supported workloads running on Azure Kubernetes Service.',
      'Worked with Helm-based application deployments, Azure Container Registry, environment-specific configuration, and multi-environment release workflows.',
      'Supported multiple platform components including landing-page services, search services, event-driven services, event registry components, monitoring workloads, multi-tenant components, and shared services.',
      'Used Kubernetes management and troubleshooting tools to inspect workloads, deployments, pods, and runtime configuration.',
      'Used Azure Log Analytics and application logs to investigate issues in depth, identify root causes, and support production and non-production troubleshooting.',
      'Resolved development and deployment defects assigned through Jira and collaborated with development teams on CI/CD and application-delivery issues.',
      'Supported technical discussions around installation, sizing, scaling, deployment, and continuous delivery practices.',
      'Prepared and maintained release documentation and release notes in Confluence for deployment activities.',
    ],
    tags: [
      'Azure DevOps',
      'YAML Pipelines',
      'Docker',
      'Kubernetes',
      'AKS',
      'Helm',
      'Terraform',
      'Azure Container Registry',
      'Azure Log Analytics',
      'GitHub',
      'CI/CD',
      'Jira',
      'Confluence',
    ],
  },

  {
    eyebrow: 'Automation · Azure Synapse · Data Privacy',
    role: 'Automation & Data Engineering',
    title:
      'Privacy Request Automation — Azure Synapse & Data Processing',
    summary:
      'Designed and implemented Azure Synapse Analytics-based automation for privacy-request processing, replacing repetitive manual data-processing activities with standardized and repeatable workflows.',
    impact:
      'Improved processing efficiency by 75%+ across approximately 30–40 requests per week while reducing manual effort and turnaround time.',
    details: [
      'Automated repetitive privacy-request data-processing activities using Azure Synapse Analytics.',
      'Supported validation and controlled handling of data across business systems.',
      'Improved consistency and reduced dependency on manual execution.',
      'Worked with technical and business stakeholders to troubleshoot data issues and improve request workflows.',
    ],
    tags: [
      'Azure Synapse Analytics',
      'Data Automation',
      'SQL',
      'Data Privacy',
      'Data Validation',
      'Process Improvement',
    ],
  },

  {
    eyebrow: 'Azure Cloud · CI/CD',
    role: 'Cloud & CI/CD Engineering',
    title: 'AT&T — Cloud & Delivery Automation',
    summary:
      'Supported Microsoft Azure environments and CI/CD processes, automating repeatable build and deployment activities while assisting development teams with delivery and cloud operations.',
    impact:
      'Reduced repetitive manual deployment effort and improved delivery consistency across application workloads.',
    details: [
      'Developed and managed CI/CD processes for multiple application workloads.',
      'Automated repeatable build and deployment activities.',
      'Managed and supported customer environments hosted on Microsoft Azure.',
      'Supported operational troubleshooting and application deployment activities.',
      'Consulted teams on installation, infrastructure sizing, scaling, and delivery practices.',
      'Supported development teams with Continuous Integration and Continuous Delivery issues.',
    ],
    tags: [
      'Microsoft Azure',
      'Azure DevOps',
      'CI/CD',
      'DevOps Automation',
      'Cloud Operations',
      'Release Management',
    ],
  },

  {
    eyebrow: 'Cloud DevOps · Infrastructure as Code',
    role: 'Cloud DevOps Engineering',
    title: 'Humana MRM — Cloud DevOps Automation',
    summary:
      'Automated software delivery and infrastructure provisioning for a Medical Record Management platform using CI/CD practices and Terraform-based Infrastructure as Code.',
    impact:
      'Saved approximately 15 hours of manual effort per week and contributed to approximately 40% infrastructure cost reduction.',
    details: [
      'Developed and managed automated CI/CD pipelines for application build and deployment.',
      'Automated multiple repetitive delivery activities, saving approximately 15 hours of manual effort per week.',
      'Provisioned and standardized infrastructure using Terraform.',
      'Reduced repetitive infrastructure provisioning through Infrastructure as Code.',
      'Optimized infrastructure utilization by eliminating unnecessary servers.',
      'Contributed to approximately 40% reduction in infrastructure costs.',
    ],
    tags: [
      'Terraform',
      'CI/CD',
      'Microsoft Azure',
      'Infrastructure as Code',
      'DevOps Automation',
    ],
  },
]

export const experience = [
  {
    company: 'Hoonartek',
    role: 'Consultant',
    period: 'Aug 2022 — Present',
    bullets: [
      'Deliver DevOps, cloud automation, data engineering, CI/CD, and integration solutions across multiple client engagements.',
      'Built and supported Azure DevOps YAML-based CI/CD workflows, Docker containerization, Kubernetes deployments, and Terraform-based infrastructure automation for large-scale application platforms.',
      'Implemented Azure Synapse Analytics-based automation for privacy-request processing, improving processing efficiency by 75%+ across approximately 30–40 weekly requests.',
      'Worked on a Sales Intelligence data-integration initiative covering SFTP ingestion, SQL staging and target models, data mapping, application views, validation, database CI/CD, environment promotion, and application deployment support.',
      'Supported DACPAC-based Azure SQL deployments using SSDT, dotnet build, Managed Identity, Azure SQL access tokens, SqlPackage, environment-specific Azure DevOps configuration, and approval-based release processes.',
      'Designed and delivered end-to-end Azure Data Factory solutions including pipelines, datasets, scripts, Git integration, ARM templates, and controlled Stage-to-Dev-to-Production deployments.',
      'Implemented npm-based deployment automation for IndusInd Bank ADF workloads and supported regular multi-environment deployment for GeoServe.',
      'Implemented Snowflake SSO integration using Microsoft Entra ID / Azure Enterprise Applications and automated infrastructure provisioning using Terraform.',
    ],
  },

  {
    company: 'Amdocs India Pvt. Ltd.',
    role: 'Technology Engineer — AT&T',
    period: 'May 2022 — Jul 2022',
    bullets: [
      'Worked on the AT&T engagement supporting DevOps automation, CI/CD processes, and Microsoft Azure cloud environments.',
      'Developed and managed CI/CD processes for multiple application workloads, automating repetitive build and deployment activities to improve release consistency and reduce manual effort.',
      'Managed and supported Microsoft Azure customer environments, including operational troubleshooting, application deployments, and environment support.',
      'Consulted technical teams on application installation, infrastructure sizing, scaling, continuous integration, and continuous delivery practices.',
    ],
  },

  {
    company: 'Techvira Technologies Pvt. Ltd.',
    role: 'Senior DevOps Engineer',
    period: 'Sep 2018 — Apr 2022',
    bullets: [
      'Worked across DevOps projects including Health Gen — Humana Medical Record Management, focusing on CI/CD automation, cloud infrastructure, and application delivery.',
      'Built and automated multiple CI/CD pipelines, saving approximately 15 hours of manual effort per week.',
      'Optimized infrastructure utilization by eliminating unnecessary servers, contributing to approximately 40% reduction in infrastructure costs.',
      'Provisioned and standardized infrastructure using Terraform-based Infrastructure as Code, reducing repetitive provisioning activities and improving environment consistency.',
      'Worked with Azure DevOps, Azure Repos, Azure Pipelines, Git, Jenkins, Ansible, Docker, PowerShell, and deployment automation.',
    ],
  },
]

export const certifications = [
  {
    name: 'Microsoft Certified: DevOps Engineer Expert',
    issuer: 'Microsoft',
    type: 'Expert Certification',
    group: 'core',
    badge: 'certifications/microsoft-devops-expert.png',
    link:
      'https://www.credly.com/badges/cc5fc6a8-4195-40fa-8e71-56dccc8596c7/public_url',
  },

  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    type: 'Associate Certification',
    group: 'core',
    badge:
      'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
    link:
      'https://learn.microsoft.com/en-us/users/pratikjawade-3612/credentials/89eec1d7ff848629',
  },

  {
    name: 'Google Cloud Certified: Professional Cloud Architect',
    issuer: 'Google Cloud',
    type: 'Professional Certification',
    group: 'core',
    badge: 'certifications/gcp-cloud-architect.png',
    link:
      'https://www.credly.com/badges/1e8bd883-6d47-4147-b663-5ad118f78150',
  },

  {
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    issuer: 'Microsoft',
    type: 'Associate Certification',
    group: 'core',
    badge: 'certifications/microsoft-azure-ai-engineer-associate.png',
    link:
      'https://learn.microsoft.com/en-us/users/pratikjawade-3612/credentials/8a139306ad84f7ea',
  },

  {
    name: 'Gemini Enterprise Deployment',
    issuer: 'Google Cloud',
    type: 'Certified Partner Specialist',
    group: 'specialization',
    badge: 'certifications/gemini-enterprise.png',
    badgeVariant: 'poster',
    link:
      'https://www.credly.com/badges/6c81ae2f-a76c-4877-96f9-522db837bda4',
  },

  {
    name: 'Build with Vertex AI',
    issuer: 'Google Cloud',
    type: 'Technical Expert',
    group: 'specialization',
    badge: 'certifications/vertex-ai.png',
    badgeVariant: 'poster',
    link:
      'https://www.credly.com/badges/32c7b72e-5d17-460a-8beb-892c09fac952',
  },

  {
    name: 'Introduction to Artificial Intelligence',
    issuer: 'LinkedIn Learning',
    type: 'Course Completion',
    group: 'specialization',
    badge: 'certifications/linkedin-ai.png',
    badgeVariant: 'poster',
    link:
      'https://www.linkedin.com/learning/certificates/923520d2eb2da7c825a9250a8c75692aacfe2c7e29418cfc63644df971a6a9e1',
  },
]

export const awards = [
  {
    title: 'Rising Star Award',
    issuer: 'Hoonartek',
    detail:
      'Recognized for performance, contribution, and strong potential across technical and client-focused delivery.',
  },

  {
    title: 'Learning Achievement — Google Cloud Technical Training',
    issuer: 'Hoonartek',
    detail:
      'Recognized for successfully completing Google Cloud technical training and demonstrating commitment to continuous technical learning.',
  },

  {
    title: 'Long Service Recognition',
    issuer: 'Hoonartek',
    detail:
      'Recognized for continued service, commitment, and contribution to the organization and client engagements.',
  },
]