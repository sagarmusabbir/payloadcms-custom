import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import logo from '@/assets/logo.svg'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="min-h-screen bg-[#f4f5f7] dark:bg-[#29303a] flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-8">
          <Image
            alt="Logo"
            height={44}
            src={logo}
            width={200}
            className="h-11"
          />
        </div>
        
        {!user && (
          <h1 className="text-4xl md:text-6xl font-bold text-[#37404d] dark:text-[#ffffff] mb-6">
            Welcome to your new project.
          </h1>
        )}
        {user && (
          <h1 className="text-4xl md:text-6xl font-bold text-[#37404d] dark:text-[#ffffff] mb-6">
            Welcome back, <span className="text-[#617086] dark:text-[#a9b2bf]">{user.email}</span>
          </h1>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            className="px-8 py-4 bg-[#37404d] dark:bg-[#455060] text-white font-semibold rounded-lg hover:bg-[#29303a] dark:hover:bg-[#37404d] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
          <a
            className="px-8 py-4 bg-[#ffffff] dark:bg-[#37404d] text-[#617086] dark:text-[#a9b2bf] font-semibold rounded-lg border-2 border-[#d4d9df] dark:border-[#536073] hover:border-[#bfc5cf] dark:hover:border-[#617086] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </a>
        </div>
      </div>
      
      <div className="mt-16 text-center text-[#617086] dark:text-[#9fa9b7]">
        <p className="mb-2">Update this page by editing</p>
        <a 
          className="inline-block px-4 py-2 bg-[#eaecef] dark:bg-[#455060] text-[#37404d] dark:text-[#a9b2bf] rounded-md font-mono text-sm hover:bg-[#dfe2e7] dark:hover:bg-[#536073] transition-colors duration-200"
          href={fileURL}
        >
          app/(frontend)/page.tsx
        </a>
      </div>
    </div>
  )
}
