import { Poppins } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HomePage } from '@/components/pages/home'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col ${poppins.className} bg-white`}
    >
      <Header />
      <HomePage />
      <Footer />
    </main>
  )
}
