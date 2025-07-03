import Image from 'next/image'
import { FaHeart, FaUsers, FaTrophy, FaStar, FaHandshake, FaRocket } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative py-24 bg-pattern overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-16 right-10 neuro w-16 h-16 rounded-4xl float-animation"></div>
        <div className="absolute bottom-16 left-10 neuro w-12 h-12 rounded-3xl float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 neuro w-8 h-8 rounded-2xl float-animation" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="neuro-card pulse-glow max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-cute mb-8 font-poppins">
              About Our Club
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-quicksand">
              More than just a badminton club - we&apos;re a community of passionate players 
              who believe in the power of sport to bring people together! 🏸✨
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Fluid layout */}
      <section className="py-24 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl font-bold text-gradient-mint font-poppins">Our Mission</h2>
            <div className="w-20 h-1 bg-gradient-mint mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-600 leading-relaxed font-quicksand">
                Our mission is to create an inclusive, fun, and supportive environment where 
                badminton enthusiasts of all skill levels can come together to play, learn, 
                and grow both as athletes and as friends.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-quicksand">
                We believe that badminton is more than just a sport - it&apos;s a way to build 
                lasting friendships, develop character, and create a sense of community that 
                extends far beyond the court.
              </p>
            </div>
            
            <div className="text-center">
              <div className="neuro-icon w-24 h-24 mx-auto mb-8">
                <FaHeart className="text-5xl text-gradient-cute" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-pink mb-6 font-poppins">
                Play • Connect • Grow
              </h3>
              <p className="text-gray-600 font-quicksand text-lg">
                Our three core principles that guide everything we do as a community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Keep cards here as they're meaningful */}
      <section className="py-24 bg-soft-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl font-bold text-gradient-pink font-poppins">Our Values</h2>
            <p className="text-xl text-gray-600 font-quicksand max-w-3xl mx-auto">
              These values shape our club culture and guide how we interact with each other
            </p>
            <div className="w-20 h-1 bg-gradient-pink mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neuro-card text-center neuro-hover">
              <div className="neuro-icon mx-auto mb-6">
                <FaUsers className="text-3xl text-cute-mint" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 font-poppins">Inclusivity</h3>
              <p className="text-gray-600 font-quicksand">
                Everyone is welcome regardless of skill level, background, or experience. 
                We celebrate diversity and create space for all.
              </p>
            </div>
            
            <div className="neuro-card text-center neuro-hover">
              <div className="neuro-icon mx-auto mb-6">
                <FaHandshake className="text-3xl text-cute-pink" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 font-poppins">Respect</h3>
              <p className="text-gray-600 font-quicksand">
                We treat each other with kindness, fairness, and mutual respect 
                both on and off the court.
              </p>
            </div>
            
            <div className="neuro-card text-center neuro-hover">
              <div className="neuro-icon mx-auto mb-6">
                <FaRocket className="text-3xl text-cute-yellow" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 font-poppins">Growth</h3>
              <p className="text-gray-600 font-quicksand">
                We support each other&apos;s journey to improve, whether that&apos;s in 
                badminton skills or personal development.
              </p>
            </div>
            
            <div className="neuro-card text-center neuro-hover">
              <div className="neuro-icon mx-auto mb-6">
                <FaStar className="text-3xl text-cute-purple" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 font-poppins">Excellence</h3>
              <p className="text-gray-600 font-quicksand">
                We strive for excellence in everything we do, from organizing events 
                to supporting our members.
              </p>
            </div>
            
            <div className="neuro-card text-center neuro-hover">
              <div className="neuro-icon mx-auto mb-6">
                <FaHeart className="text-3xl text-cute-pink" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 font-poppins">Fun</h3>
              <p className="text-gray-600 font-quicksand">
                At the heart of everything we do is having fun! We believe 
                joy and laughter make us stronger.
              </p>
            </div>
            
            <div className="neuro-card text-center neuro-hover">
              <div className="neuro-icon mx-auto mb-6">
                <FaTrophy className="text-3xl text-cute-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 font-poppins">Achievement</h3>
              <p className="text-gray-600 font-quicksand">
                We celebrate every victory, big or small, and support each other 
                through challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section - Fluid timeline */}
      <section className="py-24 bg-soft-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl font-bold text-gradient-cute font-poppins">Our Story</h2>
            <p className="text-xl text-gray-600 font-quicksand max-w-3xl mx-auto">
              From humble beginnings to a thriving community - here&apos;s how we grew
            </p>
            <div className="w-20 h-1 bg-gradient-cute mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-20">
            {/* 2019 - Fluid layout without cards */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="neuro-icon">
                    <span className="text-cute-mint font-bold text-xl font-poppins">1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gradient-mint font-poppins">The Beginning (2019)</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed font-quicksand pl-16">
                  It all started when Sarah, Alex, and Maya - three badminton enthusiasts - 
                  met at a local sports center. They shared a dream of creating a welcoming 
                  space where people could enjoy badminton regardless of their skill level. 
                  With just 8 founding members, our club was born!
                </p>
              </div>
              <div className="lg:w-1/2 text-center">
                <div className="neuro-icon w-24 h-24 mx-auto mb-6">
                  <FaUsers className="text-5xl text-cute-mint" />
                </div>
                <p className="text-2xl font-semibold text-gradient-mint font-poppins">8 Founding Members</p>
              </div>
            </div>

            {/* 2020-2021 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="neuro-card neuro-hover">
                  <div className="flex items-center mb-6">
                    <div className="neuro-icon mr-6">
                      <span className="text-pastel-pink font-bold text-xl font-poppins">2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gradient-pink font-poppins">Growing Strong (2020-2021)</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-quicksand">
                    Despite the challenges of the pandemic, our community found creative ways 
                    to stay connected. We organized outdoor sessions, virtual training, and 
                    socially distanced tournaments. Our membership grew to 25 passionate players 
                    who truly became a badminton family.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="neuro-card neuro-hover text-center">
                  <div className="neuro-icon w-24 h-24 mx-auto mb-6">
                    <FaHeart className="text-5xl text-pastel-pink" />
                  </div>
                  <p className="text-2xl font-semibold text-gradient-pink font-poppins">25 Members Strong</p>
                </div>
              </div>
            </div>

            {/* 2022-2023 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="neuro-card neuro-hover">
                  <div className="flex items-center mb-6">
                    <div className="neuro-icon mr-6">
                      <span className="text-pastel-yellow font-bold text-xl font-poppins">3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gradient-cute font-poppins">Tournament Success (2022-2023)</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-quicksand">
                    Our competitive spirit flourished! We participated in regional tournaments, 
                    won our first championship, and started hosting our own annual tournament. 
                    The club atmosphere became even more vibrant with 40+ active members and 
                    regular social events.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="neuro-card neuro-hover text-center">
                  <div className="neuro-icon w-24 h-24 mx-auto mb-6">
                    <FaTrophy className="text-5xl text-pastel-yellow" />
                  </div>
                  <p className="text-2xl font-semibold text-gradient-cute font-poppins">First Championship</p>
                </div>
              </div>
            </div>

            {/* 2024 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="neuro-card neuro-hover">
                  <div className="flex items-center mb-6">
                    <div className="neuro-icon mr-6">
                      <span className="text-pastel-purple font-bold text-xl font-poppins">4</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gradient-pink font-poppins">Today & Beyond (2024)</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-quicksand">
                    Today, we&apos;re proud to be a thriving community of 50+ members! We&apos;ve 
                    expanded our programs to include coaching for beginners, competitive teams, 
                    and social events that bring our badminton family even closer together. 
                    The future looks bright! 🌟
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="neuro-card neuro-hover text-center pulse-glow">
                  <div className="neuro-icon w-24 h-24 mx-auto mb-6">
                    <FaStar className="text-5xl text-pastel-purple" />
                  </div>
                  <p className="text-2xl font-semibold text-gradient-purple font-poppins">50+ Members & Growing!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="neuro-card pulse-glow">
            <h2 className="text-4xl font-bold text-gradient-cute mb-8 font-poppins">
              Ready to Join Our Story?
            </h2>
            <p className="text-xl text-slate-600 mb-10 font-quicksand">
              Be part of our amazing badminton family! Whether you&apos;re a beginner or a pro, 
              there&apos;s a place for you in our community.
            </p>
            <button className="cute-btn text-lg font-quicksand px-10 py-4">
              Join Our Club Today
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 