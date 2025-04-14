'use client'

import React from 'react'
import Image from 'next/image'
import { BlogContent } from '@/data/blogs'
import { CopyBlock } from './CopyBlock'

interface BlogContentRendererProps {
  content: BlogContent[]
}

export function BlogContentRenderer({ content }: BlogContentRendererProps) {
  const renderHeading = (level: number, text: string, index: number) => {
    switch (level) {
      case 1:
        return <h1 key={index}>{text}</h1>
      case 2:
        return <h2 key={index}>{text}</h2>
      case 3:
        return <h3 key={index}>{text}</h3>
      case 4:
        return <h4 key={index}>{text}</h4>
      case 5:
        return <h5 key={index}>{text}</h5>
      case 6:
        return <h6 key={index}>{text}</h6>
      default:
        return <h3 key={index}>{text}</h3>
    }
  }

  return (
    <div className="prose prose-lg max-w-none">
      {content.map((item, index) => {
        switch (item.type) {
          case 'heading':
            return renderHeading(item.level, item.text, index)
            
          case 'paragraph':
            return <p key={index}>{item.text}</p>
            
          case 'code':
            return (
              <CopyBlock
                key={index}
                language={item.language}
                code={item.code}
              />
            )
            
          case 'image':
            return (
              <div key={index} className="my-6">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={768}
                  height={432}
                  className="rounded-lg mx-auto"
                  style={{ height: 'auto' }}
                />
                {item.alt && (
                  <p className="text-sm text-center text-gray-500 mt-2">{item.alt}</p>
                )}
              </div>
            )
            
          default:
            return null
        }
      })}
    </div>
  )
}