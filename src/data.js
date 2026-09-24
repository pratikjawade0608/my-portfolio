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
  'Azure DevOps Engineering',
  'Cloud Automation',
  'CI/CD Modernization',
  'Infrastructure as Code',
  'Enterprise Platform Delivery',
]

export const metrics = [
  {
    end: 75,
    prefix: '',
    suffix: '%+',
    label: 'Processing efficiency improvement',
    detail: 'Enterprise privacy-request automation',
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
    title: 'Identity & Integration',
    items: [
      'Microsoft Entra ID',
      'Azure AD',
      'Managed Identity',
      'SSO',
      'Snowflake Integration',
      'Azure Artifacts',
    ],
  },
]

export const projects = [
  {
    eyebrow: 'Automation · Azure Synapse · Data Privacy',
    title: 'Enterprise Privacy Request Automation',
    summary:
      'Designed and implemented Azure Synapse Analytics-based automation for enterprise privacy-request processing, replacing repetitive manual data-processing activities with standardized and repeatable workflows.',
    impact:
      'Improved processing efficiency by 75%+ across approximately 30–40 requests per week while reducing manual effort and turnaround time.',
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
    eyebrow: 'Data Engineering · SQL · Azure DevOps',
    title:
      'Enterprise Sales Intelligence Platform — Data Integration & CI/CD Deployment',
    summary:
      'Integrated a new business data source into an enterprise Sales Intelligence platform, covering secure SFTP ingestion, SQL staging and target models, application-facing views, database deployment, environment promotion, and application release support.',
    impact:
      'Enabled multiple enterprise datasets to be presented through a unified application experience while establishing controlled, repeatable database and application deployments across Sandbox, Dev/Test, and Production.',
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
    title: 'GeoServe — ADF Solution Architecture & Deployment',
    summary:
      'Designed and implemented an end-to-end Azure Data Factory solution including ADF pipelines, datasets, supporting scripts, Git integration, deployment artifacts, and environment-specific configurations. Managed deployments across Stage, Dev, and Production environments.',
    impact:
      'Established a structured multi-environment ADF deployment process and strengthened secure platform access through centralized Snowflake SSO integration.',
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
    title: 'IndusInd Bank — ADF CI/CD & npm Deployment Automation',
    summary:
      'Designed and implemented an Azure Data Factory delivery solution covering pipelines, datasets, supporting scripts, Git integration, branching strategy, ARM-template management, and controlled Stage-to-Dev-to-Production deployment. Extended the release process with npm-based automation.',
    impact:
      'Improved deployment repeatability and consistency through automated ADF releases while optimizing ETL processing to complete in under 2 hours.',
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
    eyebrow: 'Cloud DevOps · Infrastructure as Code',
    title: 'Humana MRM — Cloud DevOps Automation',
    summary:
      'Automated software delivery and infrastructure provisioning for a Medical Record Management platform using CI/CD practices and Terraform-based Infrastructure as Code.',
    impact:
      'Saved approximately 15 hours of manual effort per week and contributed to approximately 40% infrastructure cost reduction.',
    tags: [
      'Terraform',
      'CI/CD',
      'Microsoft Azure',
      'Infrastructure as Code',
      'DevOps Automation',
    ],
  },

  {
    eyebrow: 'Azure Cloud · CI/CD',
    title: 'AT&T — Cloud & Delivery Automation',
    summary:
      'Supported enterprise Microsoft Azure environments and CI/CD processes, automating repeatable build and deployment activities while assisting development teams with delivery, installation, sizing, scaling, and operational requirements.',
    impact:
      'Reduced repetitive manual deployment effort and improved delivery consistency across enterprise application workloads.',
    tags: [
      'Microsoft Azure',
      'Azure DevOps',
      'CI/CD',
      'DevOps Automation',
      'Cloud Operations',
      'Release Management',
    ],
  },
]

export const experience = [
  {
    company: 'Hoonartek',
    role: 'Consultant',
    period: 'Aug 2022 — Present',
    bullets: [
      'Deliver enterprise DevOps, cloud automation, data engineering, CI/CD, and integration solutions across multiple client engagements.',
      'Implemented Azure Synapse Analytics-based automation for enterprise privacy-request processing, improving processing efficiency by 75%+ across approximately 30–40 weekly requests.',
      'Worked on an enterprise Sales Intelligence data-integration initiative covering SFTP ingestion, SQL staging and target models, data mapping, application views, validation, database CI/CD, environment promotion, and application deployment support.',
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
      'Worked on the AT&T enterprise engagement supporting DevOps automation, CI/CD processes, and Microsoft Azure cloud environments.',
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
      'Worked across enterprise DevOps projects including Health Gen — Humana Medical Record Management, focusing on CI/CD automation, cloud infrastructure, and application delivery.',
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
    badge:
      'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
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