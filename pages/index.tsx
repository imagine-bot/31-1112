import Image from 'next/image'
import { Inter } from 'next/font/google'
import Pricing from '../components/Pricing'

const inter = Inter({ subsets: ['latin'] })

const monthly = [
  {
    name: 'Basic',
    price: 9,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Pro',
    price: 19,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    name: 'Enterprise',
    price: 29,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
]

const annual = [
  {
    name: 'Basic',
    price: 90,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Pro',
    price: 190,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    name: 'Enterprise',
    price: 290,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
]

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Pricing monthly={monthly} annual={annual} />
    </main>
  )
}