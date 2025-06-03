import Link from 'next/link'
import './styles/globals.css'
import ProfileIcon from './components/ProfileIcon'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <nav className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl sticky top-0 z-50 border-b border-white/10 dark:border-gray-700/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                DisasterHow
              </Link>
            </div>
            <div className="flex-1 flex justify-center items-center space-x-8">
              <Link href="/courses" className="nav-link text-gray-900 dark:text-gray-100">
                Courses
              </Link>
              <Link href="/about" className="nav-link text-gray-900 dark:text-gray-100">
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <ProfileIcon />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-gray-900 dark:text-gray-100">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
              Prepare for <span className="text-gradient inline-block font-anorma">Humanitarian</span> Work
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300">
              Access high-quality online learning resources at no cost to better prepare for critical humanitarian and development work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/courses" className="modern-button font-sans">
                Explore Courses
              </Link>
              <Link href="/about" className="modern-button-outline font-sans">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card p-8 bg-[#1A1A1E] dark:bg-[#1A1A1E] rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Free Learning Resources</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Access comprehensive courses and materials at no cost to enhance your professional development.
              </p>
            </div>
            <div className="feature-card p-8 bg-[#1A1A1E] dark:bg-[#1A1A1E] rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Multiple Languages</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Available in English, Arabic, French, and Spanish to reach professionals worldwide.
              </p>
            </div>
            <div className="feature-card p-8 bg-[#1A1A1E] dark:bg-[#1A1A1E] rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Expert-Led Content</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Learn from experienced humanitarian professionals and industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-24 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Response",
                description: "Learn essential skills for effective emergency response and crisis management.",
                category: "Disaster Management"
              },
              {
                title: "Humanitarian Principles",
                description: "Understand the core principles and ethics of humanitarian work.",
                category: "Foundations"
              },
              {
                title: "Project Management",
                description: "Master project management skills specific to humanitarian contexts.",
                category: "Management"
              }
            ].map((course, index) => (
              <div key={index} className="course-card p-8 bg-[#1A1A1E] dark:bg-[#1A1A1E] rounded-lg shadow-sm">
                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold">{course.category}</span>
                <h3 className="text-2xl font-semibold mt-2 mb-4 text-gray-900 dark:text-white">{course.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{course.description}</p>
                <Link
                  href="/courses"
                  className="course-link text-gray-700 dark:text-white font-semibold transition-colors inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-800 text-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-100">DisasterHow</h3>
              <p className="text-gray-400 leading-relaxed">
                Empowering humanitarian professionals through quality education.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg text-gray-100">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="/courses" className="footer-link text-gray-400 hover:text-gray-300">Courses</Link></li>
                <li><Link href="/about" className="footer-link text-gray-400 hover:text-gray-300">About</Link></li>
                <li><Link href="/contact" className="footer-link text-gray-400 hover:text-gray-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg text-gray-100">Languages</h4>
              <ul className="space-y-4">
                <li><Link href="/en" className="footer-link text-gray-400 hover:text-gray-300">English</Link></li>
                <li><Link href="/ar" className="footer-link text-gray-400 hover:text-gray-300">العربية</Link></li>
                <li><Link href="/fr" className="footer-link text-gray-400 hover:text-gray-300">Français</Link></li>
                <li><Link href="/es" className="footer-link text-gray-400 hover:text-gray-300">Español</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg text-gray-100">Connect</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="footer-link text-gray-400 hover:text-gray-300">Twitter</Link></li>
                <li><Link href="#" className="footer-link text-gray-400 hover:text-gray-300">LinkedIn</Link></li>
                <li><Link href="#" className="footer-link text-gray-400 hover:text-gray-300">Facebook</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} DisasterHow. All rights reserved.</p>
            <p className="text-gray-500 mt-2">Made with <span className="text-white">♥</span> by Lin</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
