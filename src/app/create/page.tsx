'use client'

import { useState } from 'react'
import { useBusinessModelStore } from '@/store/businessModel'
import BusinessModelCanvas from '@/components/BusinessModelCanvas'
import AIChat from '@/components/AIChat'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Save, Sparkles, Download, MessageCircle } from 'lucide-react'

const industries = [
  'Technology', 'Healthcare', 'Finance', 'Retail', 'Education', 
  'Manufacturing', 'Food & Beverage', 'Transportation', 'Real Estate', 'Other'
]

export default function CreatePage() {
  const { currentModel, updateField } = useBusinessModelStore()
  const [isGeneratingInsights, setIsGeneratingInsights] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleSave = async () => {
    console.log('Saving model:', currentModel)
  }

  const generateAIInsights = async () => {
    setIsGeneratingInsights(true)

    try {
      const response = await fetch('/api/ai-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessModel: currentModel })
      })

      if (!response.ok) throw new Error('Failed to generate insights')

      const data = await response.json()
      updateField('aiInsights', data.insights)
    } catch (error) {
      console.error('Error generating insights:', error)
      updateField('aiInsights', 'Failed to generate insights. Please try again.')
    } finally {
      setIsGeneratingInsights(false)
    }
  }
  
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Create Business Model</h1>
          <p className="text-gray-300">AI automatically generates your business model using proven strategies</p>
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={generateAIInsights}
            disabled={isGeneratingInsights}
            className="flex items-center gap-2 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <Sparkles className="w-4 h-4" />
            {isGeneratingInsights ? 'Generating...' : 'AI Insights'}
          </Button>
          
          <Button variant="outline" className="flex items-center gap-2 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800">
            <Download className="w-4 h-4" />
            Export
          </Button>
          
          <Button onClick={handleSave} className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none">
            <Save className="w-4 h-4" />
            Save
          </Button>
        </div>
      </div>

      {/* Basic Info */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-2xl mb-6">
        <h2 className="text-xl font-semibold mb-4 text-white">Basic Information</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Business Model Title
            </label>
            <Input
              value={currentModel.title}
              onChange={(e) => updateField('title', e.target.value)}
              placeholder="e.g., SaaS Platform for Small Businesses"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Industry
            </label>
            <select
              value={currentModel.industry}
              onChange={(e) => updateField('industry', e.target.value)}
              className="w-full h-9 px-3 rounded-md border border-gray-700 bg-gray-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
            >
              <option value="">Select an industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <Textarea
            value={currentModel.description}
            onChange={(e) => updateField('description', e.target.value)}
            placeholder="Briefly describe your business idea and target market..."
            className="min-h-20 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Business Model Canvas */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-2xl mb-6">
        <h2 className="text-xl font-semibold mb-6 text-white">Business Model Canvas</h2>
        <BusinessModelCanvas />
      </div>

      {/* AI Insights */}
      {currentModel.aiInsights && (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-semibold text-white">AI Insights</h2>
            </div>
            <Button
              onClick={() => setIsChatOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with AI
            </Button>
          </div>
          <div className="whitespace-pre-wrap text-gray-300">
            {currentModel.aiInsights}
          </div>
        </div>
      )}

      {/* AI Chat Component */}
      <AIChat
        businessModel={currentModel}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  )
}