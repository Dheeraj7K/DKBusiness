export const mockBusinessModels = [
  {
    id: '1',
    title: 'SaaS Customer Support Platform',
    description: 'AI-powered customer support platform for small to medium businesses',
    industry: 'Technology',
    stage: 'draft',
    keyPartners: 'Cloud infrastructure providers (AWS, GCP)\nAI/ML technology partners\nIntegration partners (Slack, Microsoft Teams)\nCustomer success consultants',
    keyActivities: 'Software development and maintenance\nCustomer support and success\nMarketing and sales\nData analysis and AI model training',
    keyResources: 'Development team\nAI/ML infrastructure\nCustomer data\nBrand and intellectual property\nSales and marketing team',
    valueProposition: '• 50% reduction in response time\n• 24/7 automated support coverage\n• Seamless integration with existing tools\n• Advanced analytics and insights\n• Cost-effective solution for growing teams',
    customerRelationships: 'Self-service onboarding\nDedicated customer success manager\nCommunity support forums\nRegular training webinars\nPersonalized recommendations',
    channels: 'Direct online sales\nPartner channel program\nContent marketing (blog, webinars)\nSocial media and SEO\nReferral program',
    customerSegments: 'Small to medium businesses (50-500 employees)\nE-commerce companies\nSaaS companies\nProfessional services firms\nRemote-first organizations',
    costStructure: 'Development and engineering (40%)\nCloud infrastructure (20%)\nSales and marketing (25%)\nCustomer support (10%)\nGeneral operations (5%)',
    revenueStreams: 'Monthly recurring subscriptions\nPremium feature add-ons\nProfessional services and setup\nTraining and consultation\nAPI usage fees',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '2',
    title: 'Sustainable Food Delivery Service',
    description: 'Eco-friendly food delivery platform focusing on local restaurants and zero-waste packaging',
    industry: 'Food & Beverage',
    stage: 'draft',
    keyPartners: 'Local restaurants and cafes\nSustainable packaging suppliers\nEco-friendly delivery vehicle providers\nEnvironmental organizations\nLocal farmers and suppliers',
    keyActivities: 'Platform development and maintenance\nRestaurant onboarding and support\nDelivery logistics coordination\nSustainability program management\nMarketing and customer acquisition',
    keyResources: 'Technology platform\nDelivery fleet (bikes, electric vehicles)\nWarehouse and fulfillment centers\nSustainable packaging inventory\nBrand and customer relationships',
    valueProposition: '• 100% compostable packaging\n• Carbon-neutral delivery options\n• Support for local businesses\n• Fresh, quality food with minimal environmental impact\n• Transparent sustainability metrics',
    customerRelationships: 'Mobile app experience\nLoyalty rewards program\nSustainability progress tracking\nCommunity engagement initiatives\nPersonalized recommendations',
    channels: 'Mobile application\nWebsite ordering\nSocial media marketing\nPartnership with environmental groups\nInfluencer collaborations',
    customerSegments: 'Environmentally conscious consumers\nUrban millennials and Gen Z\nBusy professionals seeking convenience\nHealth-conscious individuals\nLocal community supporters',
    costStructure: 'Delivery operations (35%)\nTechnology development (20%)\nSustainable packaging (15%)\nMarketing and acquisition (20%)\nOperational overhead (10%)',
    revenueStreams: 'Commission from restaurant partners\nDelivery fees\nSubscription memberships\nSustainable packaging sales\nSponsorship from eco-brands',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-05')
  },
  {
    id: '3',
    title: 'EdTech Skill Assessment Platform',
    description: 'AI-driven platform for personalized skill assessment and learning path recommendations',
    industry: 'Education',
    stage: 'draft',
    keyPartners: 'Educational institutions\nCorporate training departments\nContent creators and educators\nTechnology certification bodies\nCareer counseling services',
    keyActivities: 'AI algorithm development\nContent creation and curation\nAssessment tool development\nUser experience optimization\nPartnership management',
    keyResources: 'AI/ML technology stack\nEducational content library\nUser learning data\nDevelopment and data science team\nBrand and platform reputation',
    valueProposition: '• Personalized learning paths\n• Real-time skill gap analysis\n• Industry-relevant assessments\n• Career progression guidance\n• Integration with learning platforms',
    customerRelationships: 'Self-service platform access\nPersonalized dashboard and insights\nCommunity learning groups\nMentorship connections\nRegular progress check-ins',
    channels: 'Direct B2B sales to enterprises\nEducational institution partnerships\nOnline marketing and content\nProfessional network referrals\nFreemium model for individuals',
    customerSegments: 'Corporate HR and L&D teams\nIndividual professionals\nEducational institutions\nCareer changers and job seekers\nSkill development enthusiasts',
    costStructure: 'Technology development (45%)\nContent creation and licensing (25%)\nSales and marketing (20%)\nOperational support (7%)\nGeneral administration (3%)',
    revenueStreams: 'Enterprise software licenses\nIndividual subscription fees\nPremium assessment packages\nCorporate training services\nCertification and badging fees',
    createdAt: new Date('2024-01-30'),
    updatedAt: new Date('2024-02-10')
  }
]

export const industryTemplates = {
  'Technology': {
    keyPartners: 'Cloud providers, technology integrators, development agencies, strategic investors',
    keyActivities: 'Software development, product management, customer support, marketing',
    keyResources: 'Development team, technology infrastructure, intellectual property, customer data',
    valueProposition: 'Innovative technology solutions, scalable platform, user-friendly interface, cost efficiency',
    customerRelationships: 'Self-service, automated support, community forums, dedicated account management',
    channels: 'Direct online sales, partner channels, app stores, digital marketing',
    customerSegments: 'Tech-savvy users, businesses seeking efficiency, early adopters, enterprise clients',
    costStructure: 'Development costs, infrastructure, marketing, customer acquisition, operations',
    revenueStreams: 'Subscription fees, transaction fees, premium features, enterprise licenses'
  },
  'Healthcare': {
    keyPartners: 'Healthcare providers, insurance companies, regulatory bodies, medical device manufacturers',
    keyActivities: 'Service delivery, compliance management, patient care, technology development',
    keyResources: 'Medical professionals, facilities, medical equipment, patient data, certifications',
    valueProposition: 'Improved patient outcomes, cost reduction, accessibility, quality care',
    customerRelationships: 'Personal assistance, dedicated support, patient communities, follow-up care',
    channels: 'Healthcare networks, direct patient access, insurance partnerships, referrals',
    customerSegments: 'Patients, healthcare providers, insurance companies, caregivers',
    costStructure: 'Staff salaries, equipment, facilities, insurance, regulatory compliance',
    revenueStreams: 'Service fees, insurance reimbursements, subscription models, equipment sales'
  }
}