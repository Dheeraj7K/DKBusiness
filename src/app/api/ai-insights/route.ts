import { NextResponse } from 'next/server'
import { generateText } from 'ai'
import { google } from '@ai-sdk/google'
import { anthropic } from '@ai-sdk/anthropic'
import { openai } from '@ai-sdk/openai'

function getModel() {
  if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return google('gemini-1.5-pro')
  }
  if (process.env.ANTHROPIC_API_KEY) {
    return anthropic('claude-3-5-sonnet-20240620')
  }
  if (process.env.OPENAI_API_KEY) {
    return openai('gpt-4o-mini')
  }
  return null
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { businessModel } = body

    const model = getModel()
    if (!model) {
      return NextResponse.json(
        { error: 'No AI provider configured. Please set GOOGLE_GENERATIVE_AI_API_KEY, ANTHROPIC_API_KEY, or OPENAI_API_KEY.' },
        { status: 500 }
      )
    }

    const insights = await generateAIInsights(businessModel, model)

    return NextResponse.json({ insights })
  } catch (error) {
    console.error('AI Insights Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate AI insights' },
      { status: 500 }
    )
  }
}

async function generateAIInsights(modelData: {
  title?: string;
  industry?: string;
  description?: string;
  keyPartners?: string;
  keyActivities?: string;
  keyResources?: string;
  valueProposition?: string;
  customerRelationships?: string;
  channels?: string;
  customerSegments?: string;
  costStructure?: string;
  revenueStreams?: string;
}, model: any) {
  const prompt = `You are a business strategy expert analyzing a Business Model Canvas. Provide actionable insights and recommendations.

Business Model Details:
- Title: ${modelData.title || 'Not specified'}
- Industry: ${modelData.industry || 'Not specified'}
- Description: ${modelData.description || 'Not specified'}
- Key Partners: ${modelData.keyPartners || 'Not specified'}
- Key Activities: ${modelData.keyActivities || 'Not specified'}
- Key Resources: ${modelData.keyResources || 'Not specified'}
- Value Proposition: ${modelData.valueProposition || 'Not specified'}
- Customer Relationships: ${modelData.customerRelationships || 'Not specified'}
- Channels: ${modelData.channels || 'Not specified'}
- Customer Segments: ${modelData.customerSegments || 'Not specified'}
- Cost Structure: ${modelData.costStructure || 'Not specified'}
- Revenue Streams: ${modelData.revenueStreams || 'Not specified'}

Provide 4-6 specific, actionable insights covering:
1. Value proposition strength and optimization
2. Revenue stream opportunities
3. Customer segment analysis
4. Cost structure recommendations
5. Industry-specific strategic advice
6. Potential risks and mitigation strategies

Format each insight with an emoji and bold header (e.g., "💡 **Value Proposition Analysis:**"), followed by 2-3 sentences of actionable advice. Separate insights with double line breaks.`

  const { text } = await generateText({
    model,
    system: 'You are an expert business strategist specializing in Business Model Canvas analysis. Provide clear, actionable, and specific insights.',
    prompt: prompt,
    temperature: 0.7,
    maxTokens: 1000,
  })

  return text || 'Unable to generate insights at this time.'
}