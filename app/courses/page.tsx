'use client'

import { useState } from 'react'
import Link from 'next/link'
import '../styles/globals.css'
import ProfileIcon from '../components/ProfileIcon'
import ThemeToggle from '../components/ThemeToggle'

const courses = [
  {
    id: 1,
    title: "Emergency Response",
    description: "Learn essential skills for effective emergency response and crisis management.",
    category: "Disaster Management",
    duration: "8 weeks",
    level: "Intermediate",
    topics: [
      "Crisis Assessment",
      "Emergency Planning",
      "Resource Management",
      "Team Coordination",
      "Safety Protocols"
    ],
    instructor: "Dr. Sarah Johnson",
    instructorBio: "20+ years of experience in emergency response and disaster management"
  },
  {
    id: 2,
    title: "Humanitarian Principles",
    description: "Understand the core principles and ethics of humanitarian work.",
    category: "Foundations",
    duration: "6 weeks",
    level: "Beginner",
    topics: [
      "Humanitarian Ethics",
      "International Law",
      "Human Rights",
      "Cultural Sensitivity",
      "Professional Standards"
    ],
    instructor: "Prof. Michael Chen",
    instructorBio: "Former UN Humanitarian Affairs Officer with extensive field experience"
  },
  {
    id: 3,
    title: "Project Management",
    description: "Master project management skills specific to humanitarian contexts.",
    category: "Management",
    duration: "10 weeks",
    level: "Advanced",
    topics: [
      "Project Planning",
      "Budget Management",
      "Stakeholder Engagement",
      "Risk Assessment",
      "Monitoring & Evaluation"
    ],
    instructor: "Emma Rodriguez",
    instructorBio: "Certified PMP with 15 years of humanitarian project management"
  },
  {
    id: 4,
    title: "Public Health in Emergencies",
    description: "Learn to address public health challenges in emergency and crisis situations.",
    category: "Health",
    duration: "12 weeks",
    level: "Advanced",
    topics: [
      "Epidemiology",
      "Disease Prevention",
      "Health Systems",
      "Medical Logistics",
      "Health Education"
    ],
    instructor: "Dr. Maria Gonzalez",
    instructorBio: "WHO Consultant with experience in multiple global health emergencies"
  },
  {
    id: 5,
    title: "Child Protection",
    description: "Develop skills to protect and support children in humanitarian settings.",
    category: "Protection",
    duration: "8 weeks",
    level: "Intermediate",
    topics: [
      "Child Rights",
      "Psychosocial Support",
      "Family Reunification",
      "Child-Friendly Spaces",
      "Case Management"
    ],
    instructor: "Sarah Thompson",
    instructorBio: "UNICEF Child Protection Specialist with 15 years of field experience"
  },
  {
    id: 6,
    title: "Water, Sanitation & Hygiene",
    description: "Master WASH interventions in emergency and development contexts.",
    category: "Health",
    duration: "10 weeks",
    level: "Intermediate",
    topics: [
      "Water Supply Systems",
      "Sanitation Solutions",
      "Hygiene Promotion",
      "WASH in Emergencies",
      "Community Engagement"
    ],
    instructor: "James Wilson",
    instructorBio: "WASH Technical Advisor with experience in 20+ countries"
  },
  {
    id: 7,
    title: "Gender in Humanitarian Action",
    description: "Learn to integrate gender perspectives in humanitarian programming.",
    category: "Foundations",
    duration: "6 weeks",
    level: "Intermediate",
    topics: [
      "Gender Analysis",
      "Gender Mainstreaming",
      "GBV Prevention",
      "Inclusive Programming",
      "Gender Equality"
    ],
    instructor: "Dr. Aisha Patel",
    instructorBio: "Gender Specialist with extensive experience in humanitarian settings"
  },
  {
    id: 8,
    title: "Logistics & Supply Chain",
    description: "Master logistics and supply chain management in humanitarian operations.",
    category: "Management",
    duration: "12 weeks",
    level: "Advanced",
    topics: [
      "Supply Chain Design",
      "Procurement",
      "Warehouse Management",
      "Transportation",
      "Inventory Control"
    ],
    instructor: "Mark Anderson",
    instructorBio: "Logistics Director with experience in major humanitarian operations"
  },
  {
    id: 9,
    title: "Mental Health & Psychosocial Support",
    description: "Learn to provide mental health and psychosocial support in crises.",
    category: "Health",
    duration: "8 weeks",
    level: "Intermediate",
    topics: [
      "Psychological First Aid",
      "Trauma Support",
      "Community Resilience",
      "Mental Health Systems",
      "Self-Care"
    ],
    instructor: "Dr. Lisa Chen",
    instructorBio: "Clinical Psychologist specializing in trauma and crisis intervention"
  }
]

const categories = ["All", "Disaster Management", "Foundations", "Health", "Management", "Protection"]

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === activeCategory)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
      </div>

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

      {/* Header */}
      <header className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-4">Our Courses</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive training programs designed to prepare you for humanitarian work
          </p>
        </div>
      </header>

      {/* Course Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl hover:bg-white/30 dark:hover:bg-gray-800/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-[#1A1A1E] dark:bg-[#1A1A1E] backdrop-blur-xl rounded-lg shadow-lg overflow-hidden border border-white/10 dark:border-gray-700/10 flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {course.category}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {course.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Topics:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {course.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Instructor:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{course.instructor}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{course.instructorBio}</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 dark:border-gray-700/10 p-4 mt-auto">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Level: {course.level}
                </span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 