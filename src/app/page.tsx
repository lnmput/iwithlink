import { SparklesCore } from "@/components/ui/sparkles"
import { Faqs } from "@/components/ui/faq"
import { HowToUse } from "@/components/ui/use"
import { ChromeIcon } from '@/components/ui/chrome-icon';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20">
      {/* Hero Section */}
      <section className="w-full max-w-4xl mx-auto text-center mb-10 py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 flex items-center justify-center gap-4">
          <Image 
            src="/logo.png" 
            alt="Link It Now Logo" 
            width={70}
            height={70}
            className="w-12 md:w-16 lg:w-20 h-auto" 
          />
          LINK IT NOW
        </h1>
        <p>Make Your Web Bookmarks Smarter</p>
        <div className="relative">
          {/* Sparkles and gradients */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            className="w-full h-20"
            particleColor="#FFFFFF"
          />
          {/* Download button */}
          <a target="_blank" href="https://chromewebstore.google.com/detail/linkit/afglhbhdpnicmeklejjhgmfoagllfkgj" className="inline-flex items-center justify-center">
            <button className="flex items-center space-x-2 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 py-3 bg-[#0070f3] rounded-md text-white font-medium transition duration-200 ease-linear">
              <ChromeIcon className="w-6 h-6" />
              <span>Download For Chrome</span>
            </button>
          </a>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto">
        <HowToUse />
        <Faqs />
      </section>
      
      {/* Footer */}
      <footer className="mt-10">
        <nav className="flex justify-center space-x-6">
          <a href="/privacy-policy" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy Policy</a>
          <a href="/terms-of-use" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms of Use</a>
        </nav>
      </footer>
    </main>
  )
}