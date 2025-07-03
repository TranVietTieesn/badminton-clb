import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Badminton Club - Play • Connect • Grow',
  description: 'Join our vibrant badminton community. Whether you\'re a beginner or a pro, we\'ve got a place for you.',
  keywords: 'badminton, club, sports, community, tournament, coaching',
  authors: [{ name: 'Badminton Club' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafbfc' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-offwhite via-white to-lightgray/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 