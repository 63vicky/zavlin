import TimedCarousel from '@/components/timed-carousel'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Timed Carousel</h1>
      <TimedCarousel />
    </main>
  )
}
