import './globals.css'
import Navbar from '../components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Mahe Muntaser | Technical Support Portfolio',
    template: '%s | Mahe Muntaser'
  },
  description: 'Technical support and QA portfolio of Mahe Muntaser, focused on troubleshooting, reliability, and system-oriented problem solving.',
  keywords: 'technical support, QA, problem solver, computer science, systems engineering, support professional',
  applicationName: 'Mahe Muntaser Portfolio',
  authors: [{ name: 'Mahe Muntaser' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  },
  openGraph: {
    title: 'Mahe Muntaser | Technical Support Portfolio',
    description: 'Technical support and QA portfolio highlighting projects, skills, and system-focused problem solving.',
    url: 'https://mahemuntaser.com',
    siteName: 'Mahe Muntaser Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://i.ibb.co/d4V03y6/342205953-249563270830337-3313931393799632386-n.jpg',
        width: 1200,
        height: 630,
        alt: 'Mahe Muntaser'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahe Muntaser | Technical Support Portfolio',
    description: 'Technical support and QA portfolio highlighting projects, skills, and system-focused problem solving.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://mahemuntaser.com" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="min-h-screen bg-white text-slate-800 antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
