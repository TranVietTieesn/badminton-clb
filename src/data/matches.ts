export interface MatchVideo {
  id: string
  title: string
  description: string
  youtubeUrl: string
  category: 'tournament' | 'friendly' | 'training'
  date: string
  teams: string
  result?: string
  duration?: string
  highlights?: string[]
}

export const matchVideos: MatchVideo[] = [
  {
    id: 'match-1',
    title: '(Siêu căng) Tiến/Ánh vs Thịnh/Trà',
    description: 'Trận đấu siêu căng với những pha cầu đẹp mắt và kỹ thuật cao.',
    youtubeUrl: 'https://www.youtube.com/watch?v=i8w-eVcbwfM&ab_channel=AmiB%E1%BB%A5ngB%E1%BB%B1', // Replace with actual video URL
    category: 'tournament',
    date: '15/03/2024',
    teams: 'Đội A vs Đội B',
    result: 'Đội A thắng 21-19, 18-21, 21-16',
    duration: '45:30',
    highlights: ['Smash mạnh mẽ', 'Phòng thủ xuất sắc', 'Kỹ thuật net tuyệt vời']
  },
  {
    id: 'match-2',
    title: '(Kèo mới) Đạt/Thực vs Thịnh/Tiến',
    description: 'Trận giao hữu thân thiện nhưng không kém phần gay cấn',
    youtubeUrl: 'https://www.youtube.com/watch?v=KL_xF0BQlsw&ab_channel=AmiB%E1%BB%A5ngB%E1%BB%B1', // Replace with actual video URL
    category: 'friendly',
    date: '28/02/2024',
    teams: 'CLB Bernice vs CLB Sao Mai',
    result: 'Hòa 2-2',
    duration: '38:15',
    highlights: ['Tinh thần fair-play', 'Kỹ thuật đa dạng', 'Tương tác tích cực']
  },
  {
    id: 'match-3',
    title: 'Ánh/Vi vs Trà/Chang',
    description: 'Buổi tập luyện tập trung vào các kỹ thuật cơ bản và chiến thuật đội hình.',
    youtubeUrl: 'https://www.youtube.com/watch?v=W01YeLU86KI&ab_channel=AmiB%E1%BB%A5ngB%E1%BB%B1', // Replace with actual video URL
    category: 'training',
    date: '10/02/2024',
    teams: 'Đội tập luyện Bernice',
    duration: '25:45',
    highlights: ['Kỹ thuật serve', 'Di chuyển sân', 'Phối hợp đôi']
  },
  {
    id: 'match-4',
    title: 'Bán Kết Giải Vô Địch Thành Phố',
    description: 'Trận bán kết quan trọng quyết định suất vào chung kết giải vô địch thành phố năm 2024.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual video URL
    category: 'tournament',
    date: '05/03/2024',
    teams: 'Bernice FC vs Thunder Club',
    result: 'Bernice FC thắng 3-1',
    duration: '52:20',
    highlights: ['Comeback ngoạn mục', 'Phá serve tuyệt vời', 'Tinh thần đồng đội']
  },
  {
    id: 'match-5',
    title: 'Tập Luyện Chuyên Sâu - Kỹ Thuật Tấn Công',
    description: 'Buổi tập luyện chuyên về kỹ thuật tấn công và các đường bóng quyết định.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual video URL
    category: 'training',
    date: '20/01/2024',
    teams: 'Nhóm tập luyện nâng cao',
    duration: '35:12',
    highlights: ['Smash đường chéo', 'Drop shot tinh tế', 'Clear phòng thủ']
  },
  {
    id: 'match-6',
    title: 'Giao Hữu Với CLB Đại Học',
    description: 'Trận giao hữu với đội tuyển cầu lông Đại học, tạo cơ hội học hỏi và trao đổi kinh nghiệm.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual video URL
    category: 'friendly',
    date: '12/01/2024',
    teams: 'CLB Bernice vs Đội tuyển ĐH',
    result: 'CLB Bernice thắng 3-2',
    duration: '41:55',
    highlights: ['Kỹ thuật đa dạng', 'Trao đổi kinh nghiệm', 'Cải thiện lối chơi']
  }
]

// Helper functions
export function getVideosByCategory(category: string): MatchVideo[] {
  return matchVideos.filter(video => video.category === category)
}

export function getAllCategories(): string[] {
  const categories = new Set(matchVideos.map(video => video.category))
  return Array.from(categories)
}

export function getVideoById(id: string): MatchVideo | undefined {
  return matchVideos.find(video => video.id === id)
}

export function getRecentVideos(limit: number = 3): MatchVideo[] {
  return matchVideos
    .sort((a, b) => new Date(b.date.split('/').reverse().join('-')).getTime() - new Date(a.date.split('/').reverse().join('-')).getTime())
    .slice(0, limit)
}

export function getTournamentVideos(): MatchVideo[] {
  return getVideosByCategory('tournament')
}

export function getFriendlyVideos(): MatchVideo[] {
  return getVideosByCategory('friendly')
}

export function getTrainingVideos(): MatchVideo[] {
  return getVideosByCategory('training')
}

// Instructions for adding new videos:
/*
To add a new match video:

1. Create a new MatchVideo object with:
   - Unique id (e.g., 'match-7')
   - Descriptive title in Vietnamese
   - Detailed description
   - Valid YouTube URL (watch, youtu.be, or embed format)
   - Category: 'tournament', 'friendly', or 'training'
   - Date in DD/MM/YYYY format
   - Teams or participants
   - Optional: result, duration, highlights

2. Add the object to the matchVideos array

3. Example:
   {
     id: 'match-7',
     title: 'Giải Đấu Mùa Hè 2024',
     description: 'Trận đấu mở màn cho giải đấu mùa hè...',
     youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
     category: 'tournament',
     date: '01/06/2024',
     teams: 'Đội C vs Đội D',
     result: 'Đội C thắng 2-1',
     duration: '35:20',
     highlights: ['Pha cứu bóng tuyệt vời', 'Smash quyết định']
   }

Note: Replace placeholder YouTube URLs with actual match videos
*/ 