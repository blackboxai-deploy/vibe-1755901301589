"use client"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Simple Black Button
          </h1>
          <p className="text-gray-600">
            A clean, modern black button implementation
          </p>
        </div>

        {/* Button Showcase */}
        <div className="space-y-6">
          {/* Default Black Button */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">Default</h2>
            <Button 
              className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              onClick={() => alert('Black button clicked!')}
            >
              Click Me
            </Button>
          </div>

          {/* Different Sizes */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-800">Sizes</h2>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Button 
                size="sm"
                className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                onClick={() => alert('Small black button clicked!')}
              >
                Small
              </Button>
              <Button 
                className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                onClick={() => alert('Default black button clicked!')}
              >
                Default
              </Button>
              <Button 
                size="lg"
                className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                onClick={() => alert('Large black button clicked!')}
              >
                Large
              </Button>
            </div>
          </div>

          {/* Disabled State */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">Disabled</h2>
            <Button 
              disabled
              className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Disabled
            </Button>
          </div>
        </div>

        {/* Description */}
        <div className="text-sm text-gray-500 space-y-2">
          <p>Features:</p>
          <ul className="list-disc list-inside space-y-1 text-left max-w-xs mx-auto">
            <li>Pure black background with white text</li>
            <li>Smooth hover transition to dark gray</li>
            <li>Accessible focus states</li>
            <li>Multiple size variants</li>
            <li>Click handlers with alerts</li>
          </ul>
        </div>
      </div>
    </main>
  )
}