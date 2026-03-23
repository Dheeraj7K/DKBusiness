'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'

const AUTOMATION_PROMPT = `You are an expert full-stack developer, product strategist, and startup founder. I will provide you with a single-line app idea, and your task is to design and create the complete app for me. Execute these steps:

1. Expand the idea into a precise product vision with problem, solution, and unique value proposition.

2. Define the target audience, competitors, and market opportunity.

3. Create a strategy for high adoption, retention, and path to $1M+ ARR.

4. Design scalable technical architecture (frontend, backend, database, APIs).

5. Write production-grade starter code in the best framework (Next.js, React Native, Django, Node.js, etc.) with clear file structure.

6. Include mock data, basic UI screens, and local setup instructions (npm, Docker, etc.).

7. Provide MVP roadmap with exact 30-day steps.

8. Identify risks and solutions for 100% execution success.

Don't ask business model canvas questions - instead create it automatically with best strategy. Make the UI sleek with black iPhone theme. Start coding immediately. Ask no questions - make all decisions and build the complete working application.`

export default function AutomationPrompt() {
  const [isCopied, setIsCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(AUTOMATION_PROMPT)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 shadow-2xl z-50">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <span className="font-semibold text-white">App Automation Prompt</span>
          <span className="text-sm text-gray-400">Use this prompt to create similar apps with AI</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="flex items-center gap-2 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800"
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Prompt
              </>
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-gray-300 hover:text-white hover:bg-gray-800"
          >
            {isExpanded ? (
              <>
                <ChevronDown className="w-4 h-4" />
                Hide
              </>
            ) : (
              <>
                <ChevronUp className="w-4 h-4" />
                Show
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="px-6 pb-4 border-t border-gray-700">
          <div className="bg-gray-800 rounded-xl p-4 mt-3 border border-gray-700">
            <h3 className="font-semibold text-white mb-3">
              🤖 AI App Generation Prompt
            </h3>
            <div className="bg-black border border-gray-600 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                {AUTOMATION_PROMPT}
              </pre>
            </div>
            <div className="mt-3 text-sm text-gray-300">
              <p className="text-white"><strong>How to use:</strong></p>
              <ol className="list-decimal list-inside mt-1 space-y-1">
                <li>Copy the prompt above</li>
                <li>Paste it into Claude, ChatGPT, or any AI assistant</li>
                <li>Add your app idea at the end</li>
                <li>Get a complete app like this Business Model Generator!</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}