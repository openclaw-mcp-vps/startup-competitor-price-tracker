import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Competitor Price Tracker — Monitor Pricing Changes Automatically',
  description: 'Scrape competitor pricing pages, track historical data, and get instant alerts when prices change. Built for startup founders and product managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1b71e302-22cd-4cf1-9e66-9b7c66af8b27"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
