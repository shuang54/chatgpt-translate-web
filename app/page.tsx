import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Main />
    </div>
  )
}
