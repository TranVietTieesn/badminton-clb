import Image from 'next/image'
import { FaCrown, FaCouch, FaCalendarAlt, FaMedal, FaUsers, FaHeart } from 'react-icons/fa'

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Founder & President',
      icon: FaCrown,
      bio: 'Sarah started playing badminton in college and fell in love with the sport. Her dream of creating an inclusive community led to the founding of our club in 2019.',
      achievements: ['Founded the club in 2019', 'Regional tournament organizer', '10+ years of badminton experience'],
      funFact: 'Can serve at 180 km/h! 🚀',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&face'
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      role: 'Head Coach',
      icon: FaCouch,
      bio: 'Former professional player turned passionate coach. Alex believes every player has unique potential waiting to be unlocked.',
      achievements: ['National championship semi-finalist', 'Certified badminton coach', 'Trained 100+ players'],
      funFact: 'Once played 50 consecutive matches in one day! 💪',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face'
    },
    {
      id: 3,
      name: 'Maya Patel',
      role: 'Events Coordinator',
      icon: FaCalendarAlt,
      bio: 'The heart and soul of our social events! Maya ensures every gathering is memorable and brings people together through her amazing organizational skills.',
      achievements: ['Organized 50+ club events', 'Community builder extraordinaire', 'Master of fun activities'],
      funFact: 'Has never missed a club event in 4 years! 🎉',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&face'
    },
    {
      id: 4,
      name: 'James Kim',
      role: 'Tournament Director',
      icon: FaMedal,
      bio: 'Competitive player and strategic mastermind. James organizes our tournaments and helps members reach their competitive goals.',
      achievements: ['Won 15 local tournaments', 'Tournament strategy expert', 'Mentored 20+ competitive players'],
      funFact: 'Calculates winning percentages in his head during matches! 🧮',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Community Manager',
      icon: FaUsers,
      bio: 'Lisa welcomes new members and ensures everyone feels at home. Her warm personality and genuine care make our club feel like family.',
      achievements: ['Welcomed 200+ new members', 'Conflict resolution specialist', 'Friendship facilitator'],
      funFact: 'Remembers everyone\'s birthday and favorite snacks! 🎂',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&face'
    },
    {
      id: 6,
      name: 'David Park',
      role: 'Youth Program Lead',
      icon: FaHeart,
      bio: 'Passionate about nurturing young talent. David runs our youth programs and has a special gift for making badminton fun for kids.',
      achievements: ['Youth coaching certification', 'Developed kids program from scratch', 'Inspired 50+ young players'],
      funFact: 'Can explain badminton rules using cartoon characters! 🎨',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&face'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-mint-100 via-white to-cute-pink/20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-cute-mint rounded-3xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-cute-pink rounded-3xl opacity-30 animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Meet Our Amazing Team
          </h1>
          <p className="text-xl md:text-2xl text-mint-600 max-w-4xl mx-auto leading-relaxed">
            The passionate individuals who make our club a special place. 
            Each bringing their unique talents and love for badminton! 💚
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const IconComponent = member.icon
              return (
                <div key={member.id} className="glass-effect rounded-3xl p-8 cute-shadow cute-hover">
                  {/* Profile Image & Role Icon */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-3xl overflow-hidden cute-shadow">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-cute rounded-2xl flex items-center justify-center">
                      <IconComponent className="text-white text-lg" />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-mint-700 mb-2">{member.name}</h3>
                    <p className="text-cute-pink font-semibold">{member.role}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-mint-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-mint-700 mb-3">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, index) => (
                        <li key={index} className="text-xs text-mint-600 flex items-start">
                          <span className="text-cute-mint mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fun Fact */}
                  <div className="bg-gradient-to-r from-cute-mint/10 to-cute-pink/10 rounded-2xl p-4">
                    <h4 className="text-sm font-semibold text-mint-700 mb-2">Fun Fact:</h4>
                    <p className="text-xs text-mint-600">{member.funFact}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-20 bg-gradient-to-r from-mint-50 to-cute-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-mint-600 max-w-3xl mx-auto mb-8">
              We&apos;re always looking for passionate volunteers who want to help make our club even better!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-effect rounded-3xl p-6 cute-shadow cute-hover text-center">
              <FaCalendarAlt className="text-3xl text-cute-mint mx-auto mb-4" />
              <h3 className="font-semibold text-mint-700 mb-2">Event Helper</h3>
              <p className="text-sm text-mint-600">Assist with organizing tournaments and social events</p>
            </div>
            
            <div className="glass-effect rounded-3xl p-6 cute-shadow cute-hover text-center">
              <FaCouch className="text-3xl text-cute-pink mx-auto mb-4" />
              <h3 className="font-semibold text-mint-700 mb-2">Assistant Coach</h3>
              <p className="text-sm text-mint-600">Help train new players and share your skills</p>
            </div>
            
            <div className="glass-effect rounded-3xl p-6 cute-shadow cute-hover text-center">
              <FaUsers className="text-3xl text-soft-yellow mx-auto mb-4" />
              <h3 className="font-semibold text-mint-700 mb-2">Welcoming Committee</h3>
              <p className="text-sm text-mint-600">Help new members feel at home in our community</p>
            </div>
            
            <div className="glass-effect rounded-3xl p-6 cute-shadow cute-hover text-center">
              <FaMedal className="text-3xl text-gradient mx-auto mb-4" />
              <h3 className="font-semibold text-mint-700 mb-2">Social Media</h3>
              <p className="text-sm text-mint-600">Capture and share our amazing moments online</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-gradient-to-r from-cute-mint to-cute-pink text-white font-semibold rounded-3xl cute-shadow cute-hover text-lg">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gradient mb-8">
            What Makes Our Team Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-cute-mint rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-mint-700 mb-3">Passion</h3>
              <p className="text-mint-600">
                We genuinely love badminton and our community. This passion drives everything we do.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-cute-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-mint-700 mb-3">Teamwork</h3>
              <p className="text-mint-600">
                We support each other and work together to create the best experience for everyone.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-soft-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaMedal className="text-2xl text-mint-700" />
              </div>
              <h3 className="text-xl font-bold text-mint-700 mb-3">Excellence</h3>
              <p className="text-mint-600">
                We strive to be the best versions of ourselves and help others do the same.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 