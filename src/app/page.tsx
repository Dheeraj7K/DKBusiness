import Link from 'next/link';
import discoveriesData from '@/data/discoveries.json';
import { Button } from '@/components/ui/button';
import { PlusCircle, Zap, Users, TrendingUp, FileText } from 'lucide-react';

interface Discovery {
  id: string;
  title: string;
  category: string;
  summary: string;
  impact: string;
  links: string[];
}

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">
          Create Professional Business Models 
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> with AI</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Transform your business ideas into comprehensive models using our AI-powered platform. 
          Built on the proven Business Model Canvas framework by Alexander Osterwalder.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/create">
            <Button size="lg" className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none shadow-lg">
              <PlusCircle className="w-5 h-5" />
              Create Your First Model
            </Button>
          </Link>
          
          <Button variant="outline" size="lg" className="flex items-center gap-2 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800">
            <FileText className="w-5 h-5" />
            View Examples
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-2xl">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">AI-Powered Insights</h3>
          <p className="text-gray-300">
            Get intelligent suggestions and market analysis to strengthen your business model components.
          </p>
        </div>
        
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-2xl">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">Team Collaboration</h3>
          <p className="text-gray-300">
            Work together with your team to refine and validate your business model in real-time.
          </p>
        </div>
        
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-2xl">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">Market Validation</h3>
          <p className="text-gray-300">
            Validate your assumptions with industry benchmarks and competitor analysis.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-2xl text-center">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">10K+</div>
            <div className="text-gray-300">Models Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-gray-300">Industries Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">95%</div>
            <div className="text-gray-300">User Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">$2.3B</div>
            <div className="text-gray-300">Market Opportunity</div>
          </div>
        </div>
      </div>


      {/* Validated Discovery Section [NEW] */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-1 as-secondary rounded-full bg-secondary"></div>
          <h2 className="text-3xl font-bold text-white uppercase italic tracking-tighter">Market Validated Concepts</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {(discoveriesData as Discovery[]).slice(0, 4).map((disc: Discovery) => (
            <div key={disc.id} className="group relative bg-[#0a0a15] rounded-xl p-8 border border-white/5 hover:border-secondary/30 transition-all shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 uppercase tracking-widest">
                  {disc.category}
                </span>
                <span className="text-mono text-[10px] text-gray-500 uppercase">Registry #{disc.id.slice(0, 8)}</span>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                {disc.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-2">
                {disc.summary}
              </p>
              
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                    <TrendingUp className="w-3 h-3" />
                    Valuation: High Coherence
                 </div>
                 <Link href="/create" className="text-xs font-black text-secondary uppercase tracking-widest border-b border-secondary/0 hover:border-secondary transition-all">
                    Bid on Concept →
                 </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to build your next big idea?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of entrepreneurs who trust our platform to validate and scale their business models.
        </p>
        
        <Link href="/create">
          <Button size="lg" className="flex items-center gap-2 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none shadow-lg">
            <PlusCircle className="w-5 h-5" />
            Get Started Free
          </Button>
        </Link>
      </div>
    </div>
  );
}
