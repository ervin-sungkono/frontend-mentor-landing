import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ervin Cahyadinata Sungkono | Frontend Mentor',
  description: 'Showcasing my frontend mentor project, from components to landing pages.',
  openGraph: {
    title: 'Ervin Cahyadinata Sungkono | Frontend Mentor',
    description: 'Showcasing my frontend mentor project, from components to landing pages.',
  },
  twitter: {
    title: 'Ervin Cahyadinata Sungkono | Frontend Mentor',
    description: 'Showcasing my frontend mentor project, from components to landing pages.',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
