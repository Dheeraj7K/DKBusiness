'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlusCircle, Home } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">BM</span>
              </div>
              <span className="font-semibold text-xl text-white">Business Model Generator</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800">
                <Home className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>
            
            <Link href="/create">
              <Button size="sm" className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none">
                <PlusCircle className="w-4 h-4" />
                New Model
              </Button>
            </Link>
            
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}