import Image from 'next/image'
import { FaTrophy, FaCalendarAlt, FaUsers, FaStar, FaMedal, FaHeart, FaCameraRetro, FaGift } from 'react-icons/fa'

export default function HighlightsPage() {
  const achievements = [
    {
      id: 1,
      title: 'Regional Championship 2023',
      description: 'Our team won the regional badminton championship, marking our first major tournament victory!',
      date: 'March 2023',
      type: 'tournament',
      image: 'https://images.unsplash.com/photo-1544547863-c9618ba8e31b?w=600&h=400&fit=crop',
      icon: FaTrophy,
      color: 'bg-gradient-to-r from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      title: 'Community Sports Day',
      description: 'Organized a fantastic community event with 100+ participants, introducing badminton to families.',
      date: 'July 2023',
      type: 'event',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      icon: FaUsers,
      color: 'bg-gradient-to-r from-cute-mint to-mint-500'
    },
    {
      id: 3,
      title: '50 Members Milestone',
      description: 'Reached 50 active members, making us one of the largest badminton clubs in the region!',
      date: 'September 2023',
      type: 'milestone',
      image: 'https://images.unsplash.com/photo-1544547863-c9618ba8e31b?w=600&h=400&fit=crop',
      icon: FaStar,
      color: 'bg-gradient-to-r from-cute-pink to-pink-500'
    },
    {
      id: 4,
      title: 'Youth Program Launch',
      description: 'Successfully launched our youth training program with 20 enthusiastic young players.',
      date: 'January 2024',
      type: 'program',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      icon: FaHeart,
      color: 'bg-gradient-to-r from-soft-yellow to-yellow-500'
    },
    {
      id: 5,
      title: 'Inter-Club Tournament',
      description: 'Hosted our first inter-club tournament with 8 teams participating from across the state.',
      date: 'April 2024',
      type: 'tournament',
      image: 'https://images.unsplash.com/photo-1544547863-c9618ba8e31b?w=600&h=400&fit=crop',
      icon: FaMedal,
      color: 'bg-gradient-to-r from-purple-400 to-purple-600'
    },
    {
      id: 6,
      title: 'Charity Fundraiser',
      description: 'Raised $5,000 for local sports equipment in schools through our annual charity tournament.',
      date: 'June 2024',
      type: 'charity',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      icon: FaGift,
      color: 'bg-gradient-to-r from-green-400 to-green-600'
    }
  ]

  const memorableEvents = [
    {
      id: 1,
      title: 'Summer BBQ & Tournament',
      description: 'Annual summer gathering with delicious food, friendly matches, and lots of laughter.',
      highlights: ['40+ attendees', 'Best potluck ever', 'Epic doubles tournament'],
      image: 'https://images.unsplash.com/photo-1544547863-c9618ba8e31b?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'New Year Training Camp',
      description: 'Intensive 3-day training camp to kick off the year with improved skills.',
      highlights: ['Professional coaching', 'Skill workshops', 'Team building activities'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Club Anniversary Celebration',
      description: 'Celebrating 5 years of amazing badminton community and friendship.',
      highlights: ['5-year anniversary', 'Member appreciation', 'Special awards ceremony'],
      image: 'https://images.unsplash.com/photo-1544547863-c9618ba8e31b?w=400&h=300&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-mint-100 via-white to-cute-pink/20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-cute-mint rounded-3xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-cute-pink rounded-2xl opacity-25 animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Our Amazing Highlights
          </h1>
          <p className="text-xl md:text-2xl text-mint-600 max-w-4xl mx-auto leading-relaxed">
            Celebrating our journey of achievements, memorable events, and incredible milestones 
            that make our club special! 🏆✨
          </p>
        </div>
      </section>

      {/* Main Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Major Achievements
            </h2>
            <p className="text-xl text-mint-600 max-w-3xl mx-auto">
              From tournament victories to community milestones - here&apos;s what we&apos;re most proud of
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon
              return (
                <div key={achievement.id} className="glass-effect rounded-3xl overflow-hidden cute-shadow cute-hover">
                  {/* Image */}
                  <div className="relative h-48">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className={`absolute top-4 right-4 w-12 h-12 ${achievement.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="text-white text-lg" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-cute-pink capitalize">
                        {achievement.type}
                      </span>
                      <span className="text-sm text-mint-500">
                        {achievement.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-mint-700 mb-3">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-mint-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Memorable Events Section */}
      <section className="py-20 bg-gradient-to-r from-mint-50 to-cute-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Memorable Events
            </h2>
            <p className="text-xl text-mint-600 max-w-3xl mx-auto">
              Special moments that brought our community together and created lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {memorableEvents.map((event) => (
              <div key={event.id} className="glass-effect rounded-3xl overflow-hidden cute-shadow cute-hover">
                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-2xl flex items-center justify-center">
                    <FaCameraRetro className="text-mint-700" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-mint-700 mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-mint-600 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-mint-700 mb-2">Event Highlights:</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-mint-600 flex items-center">
                          <span className="w-2 h-2 bg-cute-mint rounded-full mr-3"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              By the Numbers
            </h2>
            <p className="text-xl text-mint-600 max-w-3xl mx-auto">
              Our impact in numbers - showcasing the growth and success of our community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cute-mint to-mint-500 rounded-3xl flex items-center justify-center mx-auto mb-4 cute-shadow">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-mint-700 mb-2">50+</h3>
              <p className="text-mint-600">Active Members</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cute-pink to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 cute-shadow">
                <FaTrophy className="text-3xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-mint-700 mb-2">15+</h3>
              <p className="text-mint-600">Tournaments Won</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-soft-yellow to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-4 cute-shadow">
                <FaCalendarAlt className="text-3xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-mint-700 mb-2">100+</h3>
              <p className="text-mint-600">Events Organized</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 cute-shadow">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-mint-700 mb-2">5</h3>
              <p className="text-mint-600">Years of Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-20 bg-gradient-to-r from-cute-mint/20 to-cute-pink/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gradient mb-8">
            Looking Ahead
          </h2>
          <p className="text-xl text-mint-600 mb-8 leading-relaxed">
            We&apos;re just getting started! Here are some exciting goals we&apos;re working towards 
            to make our club even more amazing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-effect rounded-3xl p-8 cute-shadow cute-hover">
              <div className="w-16 h-16 bg-gradient-cute rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-mint-700 mb-4">National Recognition</h3>
              <p className="text-mint-600">
                Compete at national level tournaments and represent our region with pride.
              </p>
            </div>

            <div className="glass-effect rounded-3xl p-8 cute-shadow cute-hover">
              <div className="w-16 h-16 bg-gradient-cute rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-mint-700 mb-4">100 Members</h3>
              <p className="text-mint-600">
                Double our membership while maintaining our welcoming, family-like atmosphere.
              </p>
            </div>
          </div>

          <button className="px-10 py-4 bg-gradient-to-r from-cute-mint to-cute-pink text-white font-semibold rounded-3xl cute-shadow cute-hover text-lg">
            Be Part of Our Future
          </button>
        </div>
      </section>
    </div>
  )
} 