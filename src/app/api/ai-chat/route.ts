import { NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
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
    const { messages, businessModel } = body

    const model = getModel()
    if (!model) {
      return NextResponse.json(
        { error: 'No AI provider (Gemini, Claude, or OpenAI) is configured. Please set the appropriate API key.' },
        { status: 500 }
      )
    }

    // Build context about the business model
    const systemPrompt = `You are a business strategy expert helping with the following business model:

Title: ${businessModel.title || 'Not specified'}
Industry: ${businessModel.industry || 'Not specified'}
Description: ${businessModel.description || 'Not specified'}

Business Model Canvas Details:
- Key Partners: ${businessModel.keyPartners || 'Not specified'}
- Key Activities: ${businessModel.keyActivities || 'Not specified'}
- Key Resources: ${businessModel.keyResources || 'Not specified'}
- Value Proposition: ${businessModel.valueProposition || 'Not specified'}
- Customer Relationships: ${businessModel.customerRelationships || 'Not specified'}
- Channels: ${businessModel.channels || 'Not specified'}
- Customer Segments: ${businessModel.customerSegments || 'Not specified'}
- Cost Structure: ${businessModel.costStructure || 'Not specified'}
- Revenue Streams: ${businessModel.revenueStreams || 'Not specified'}

Provide helpful, actionable advice based on this context. Be conversational, concise, and specific.`

    const { text } = await generateText({
      model,
      system: systemPrompt,
      messages: messages.map((m: any) => ({ role: m.role, content: m.content })),
      temperature: 0.7,
    })

    return NextResponse.json({ message: { role: 'assistant', content: text } })
  } catch (error) {
    console.error('AI Chat Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}
