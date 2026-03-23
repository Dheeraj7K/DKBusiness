/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server'
import { mockBusinessModels } from '@/lib/mockData'

export async function GET() {
  return NextResponse.json(mockBusinessModels)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const newModel = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    return NextResponse.json(newModel, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: 'Failed to create business model' },
      { status: 400 }
    )
  }
}