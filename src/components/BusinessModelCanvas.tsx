'use client'

import { useBusinessModelStore } from '@/store/businessModel'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

export default function BusinessModelCanvas() {
  const { currentModel, updateField } = useBusinessModelStore()

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-5 gap-4 min-h-[600px]"
      >
        {/* Key Partners */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg"
        >
          <h3 className="font-semibold text-blue-400 mb-2">Key Partners</h3>
          <p className="text-xs text-gray-400 mb-3">Who are your key partners and suppliers?</p>
          <Textarea
            value={currentModel.keyPartners}
            onChange={(e) => updateField('keyPartners', e.target.value)}
            placeholder="List your key partners..."
            className="min-h-32 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-400"
          />
        </motion.div>

        {/* Key Activities + Key Resources */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg"
          >
            <h3 className="font-semibold text-green-400 mb-2">Key Activities</h3>
            <p className="text-xs text-gray-400 mb-3">What key activities does your value proposition require?</p>
            <Textarea
              value={currentModel.keyActivities}
              onChange={(e) => updateField('keyActivities', e.target.value)}
              placeholder="List your key activities..."
              className="min-h-24 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-green-400"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg"
          >
            <h3 className="font-semibold text-yellow-400 mb-2">Key Resources</h3>
            <p className="text-xs text-gray-400 mb-3">What key resources does your value proposition require?</p>
            <Textarea
              value={currentModel.keyResources}
              onChange={(e) => updateField('keyResources', e.target.value)}
              placeholder="List your key resources..."
              className="min-h-24 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-yellow-400"
            />
          </motion.div>
        </div>

        {/* Value Propositions */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg"
        >
          <h3 className="font-semibold text-red-400 mb-2">Value Propositions</h3>
          <p className="text-xs text-gray-400 mb-3">What value do you deliver to the customer?</p>
          <Textarea
            value={currentModel.valueProposition}
            onChange={(e) => updateField('valueProposition', e.target.value)}
            placeholder="Describe your value propositions..."
            className="min-h-32 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-red-400"
          />
        </motion.div>

        {/* Customer Relationships + Channels */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg"
          >
            <h3 className="font-semibold text-purple-400 mb-2">Customer Relationships</h3>
            <p className="text-xs text-gray-400 mb-3">What type of relationship does each customer segment expect?</p>
            <Textarea
              value={currentModel.customerRelationships}
              onChange={(e) => updateField('customerRelationships', e.target.value)}
              placeholder="Describe customer relationships..."
              className="min-h-24 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-400"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg"
          >
            <h3 className="font-semibold text-indigo-400 mb-2">Channels</h3>
            <p className="text-xs text-gray-400 mb-3">Through which channels do your customer segments want to be reached?</p>
            <Textarea
              value={currentModel.channels}
              onChange={(e) => updateField('channels', e.target.value)}
              placeholder="List your channels..."
              className="min-h-24 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-indigo-400"
            />
          </motion.div>
        </div>

        {/* Customer Segments */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg"
        >
          <h3 className="font-semibold text-pink-400 mb-2">Customer Segments</h3>
          <p className="text-xs text-gray-400 mb-3">For whom are you creating value?</p>
          <Textarea
            value={currentModel.customerSegments}
            onChange={(e) => updateField('customerSegments', e.target.value)}
            placeholder="Define your customer segments..."
            className="min-h-32 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-pink-400"
          />
        </motion.div>
      </motion.div>

      {/* Bottom row - Cost Structure and Revenue Streams */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 gap-4 mt-4"
      >
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg">
          <h3 className="font-semibold text-orange-400 mb-2">Cost Structure</h3>
          <p className="text-xs text-gray-400 mb-3">What are the most important costs inherent in your business model?</p>
          <Textarea
            value={currentModel.costStructure}
            onChange={(e) => updateField('costStructure', e.target.value)}
            placeholder="List your main costs..."
            className="min-h-24 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-orange-400"
          />
        </div>
        
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg">
          <h3 className="font-semibold text-teal-400 mb-2">Revenue Streams</h3>
          <p className="text-xs text-gray-400 mb-3">For what value are your customers really willing to pay?</p>
          <Textarea
            value={currentModel.revenueStreams}
            onChange={(e) => updateField('revenueStreams', e.target.value)}
            placeholder="Describe your revenue streams..."
            className="min-h-24 bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-teal-400"
          />
        </div>
      </motion.div>
    </div>
  )
}