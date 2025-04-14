'use client'

import React, { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CopyBlockProps {
  language: string
  code: string
}

export function CopyBlock({ language, code }: CopyBlockProps) {
  const [isCopied, setIsCopied] = useState(false)
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="relative group my-6">
      <pre className={`p-4 rounded-lg bg-gray-900 text-gray-100 overflow-x-auto language-${language}`}>
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 
                  text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 
                  focus:ring-gray-500"
        aria-label="Copy code"
      >
        {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}
