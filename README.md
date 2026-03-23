# Business Model Generator

An AI-powered platform for creating comprehensive business models using the proven Business Model Canvas framework by Alexander Osterwalder.

## 🚀 Features

- **Interactive Business Model Canvas**: Drag-and-drop interface for building business models
- **AI-Powered Insights**: Get intelligent suggestions and market analysis
- **Industry Templates**: Pre-built templates for different industries
- **Export & Share**: Export models to PDF or share with team members
- **Real-time Collaboration**: Work together with your team
- **Market Validation**: Validate assumptions with industry benchmarks

## 🛠 Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: SQLite (development) / PostgreSQL (production)
- **State Management**: Zustand
- **UI Components**: Radix UI, Lucide React
- **Authentication**: NextAuth.js
- **AI Integration**: OpenAI GPT-4 API

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd business-model-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-super-secret-key-change-in-production"
   OPENAI_API_KEY="your-openai-api-key-optional"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── api/            # API routes
│   │   ├── create/         # Business model creation page
│   │   └── page.tsx        # Landing page
│   ├── components/         # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── BusinessModelCanvas.tsx
│   │   └── Navbar.tsx
│   ├── lib/                # Utilities and configurations
│   │   ├── prisma.ts       # Database client
│   │   ├── utils.ts        # Utility functions
│   │   └── mockData.ts     # Mock data for development
│   └── store/              # State management
│       └── businessModel.ts
├── prisma/                 # Database schema
├── public/                 # Static assets
└── package.json
```

## 🎯 Usage

### Creating a Business Model

1. Click "Create Your First Model" on the homepage
2. Fill in basic information (title, industry, description)
3. Complete each section of the Business Model Canvas:
   - **Key Partners**: Who are your key partners and suppliers?
   - **Key Activities**: What key activities does your value proposition require?
   - **Key Resources**: What key resources does your value proposition require?
   - **Value Propositions**: What value do you deliver to customers?
   - **Customer Relationships**: What type of relationship does each customer segment expect?
   - **Channels**: Through which channels do your customers want to be reached?
   - **Customer Segments**: For whom are you creating value?
   - **Cost Structure**: What are the most important costs?
   - **Revenue Streams**: For what value are customers willing to pay?
4. Generate AI insights for personalized recommendations
5. Save and export your completed business model

### AI Insights Feature

Click the "AI Insights" button to receive:
- Value proposition analysis
- Revenue optimization suggestions
- Customer segmentation insights
- Cost structure recommendations
- Industry-specific advice

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Docker

```bash
# Build the image
docker build -t business-model-generator .

# Run the container
docker run -p 3000:3000 business-model-generator
```

## 📈 MVP Roadmap (Next 30 Days)

### Week 1: Core Foundation
- [ ] Complete user authentication with NextAuth.js
- [ ] Implement database operations for saving/loading models
- [ ] Add real AI integration with OpenAI API
- [ ] Create responsive design for mobile devices

### Week 2: Enhanced Features  
- [ ] Add export to PDF functionality
- [ ] Implement team collaboration features
- [ ] Create industry-specific templates
- [ ] Add competitor analysis tools

### Week 3: User Experience
- [ ] Implement drag-and-drop canvas functionality
- [ ] Add guided onboarding tutorial
- [ ] Create dashboard with model management
- [ ] Add search and filtering capabilities

### Week 4: Growth & Validation
- [ ] Implement analytics and tracking
- [ ] Add referral system
- [ ] Create landing pages for different industries
- [ ] Set up customer feedback collection
- [ ] Prepare for beta launch

## ⚠️ Risk Mitigation

### Technical Risks
- **Database Performance**: Implement proper indexing and query optimization
- **API Rate Limits**: Add caching and request queuing for OpenAI API
- **Scalability**: Use Next.js static generation where possible

### Business Risks  
- **User Adoption**: Focus on solving real pain points with simple UX
- **Competition**: Differentiate through AI features and industry expertise
- **Revenue**: Start with freemium model, validate pricing with early users

### Operational Risks
- **Team Capacity**: Prioritize MVP features, defer nice-to-haves
- **Quality Assurance**: Implement automated testing and staging environment
- **Security**: Regular security audits and data protection compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@businessmodelgenerator.com or create an issue in this repository.
