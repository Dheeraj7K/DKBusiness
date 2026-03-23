import { create } from 'zustand'

interface BusinessModelStore {
  currentModel: {
    id?: string
    title: string
    description: string
    industry: string
    keyPartners: string
    keyActivities: string
    keyResources: string
    valueProposition: string
    customerRelationships: string
    channels: string
    customerSegments: string
    costStructure: string
    revenueStreams: string
    aiInsights?: string
  }
  updateField: (field: string, value: string) => void
  resetModel: () => void
  loadModel: (model: BusinessModelStore['currentModel']) => void
}

const initialModel = {
  title: '',
  description: '',
  industry: '',
  keyPartners: '',
  keyActivities: '',
  keyResources: '',
  valueProposition: '',
  customerRelationships: '',
  channels: '',
  customerSegments: '',
  costStructure: '',
  revenueStreams: '',
}

export const useBusinessModelStore = create<BusinessModelStore>((set) => ({
  currentModel: initialModel,
  updateField: (field: string, value: string) =>
    set((state) => ({
      currentModel: {
        ...state.currentModel,
        [field]: value,
      },
    })),
  resetModel: () =>
    set(() => ({
      currentModel: initialModel,
    })),
  loadModel: (model: BusinessModelStore['currentModel']) =>
    set(() => ({
      currentModel: model,
    })),
}))