import Navbar from './components/Navbar'
import './globals.css'
import { Inter, Open_Sans, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans'
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
})

export const metadata = {
  title: 'Om Mistry',
  description: 'Om Mistry\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={'${openSans.variable} ${robotoMono.variable} font-sans'}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
