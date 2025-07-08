export interface Photo {
  id: string
  src: string
  alt: string
  title: string
  date: string
  category: string
  description?: string
}

export interface PhotoCategory {
  key: string
  label: string
  description?: string
}

// Photo categories for the club
export const photoCategories: PhotoCategory[] = [
  { 
    key: 'all', 
    label: 'Tất cả',
    description: 'Tất cả ảnh của câu lạc bộ'
  },
  { 
    key: 'training', 
    label: 'Tập luyện',
    description: 'Các buổi tập luyện và rèn kỹ năng'
  },
  { 
    key: 'tournament', 
    label: 'Giải đấu',
    description: 'Các giải đấu và thi đấu'
  },
  { 
    key: 'team', 
    label: 'Đội ngũ',
    description: 'Thành viên và đội ngũ CLB'
  },
  { 
    key: 'event', 
    label: 'Sự kiện',
    description: 'Các hoạt động và sự kiện đặc biệt'
  },
  { 
    key: 'facility', 
    label: 'Cơ sở',
    description: 'Sân tập và trang thiết bị'
  },
  { 
    key: 'achievement', 
    label: 'Thành tích',
    description: 'Kỷ niệm và trao giải'
  }
]

// Club photos - Add your actual photos here
export const clubPhotos: Photo[] = [
  // Training Photos
  {
    id: 'train_001',
    src: '/images/trainning/Firefly 20250606152843.png',
    alt: 'Thành viên CLB trong buổi tập luyện',
    title: 'Buổi tập luyện cuối tuần',
    date: '2024-12-15',
    category: 'training',
    description: 'Các thành viên tập luyện cùng nhau trong không khí sôi động và tập trung cao độ.'
  },
  {
    id: 'train_002',
    src: 'https://images.unsplash.com/photo-1594736797933-d0289ba2e65b?w=800&h=600&fit=crop',
    alt: 'Luyện tập kỹ thuật cơ bản',
    title: 'Rèn luyện kỹ thuật',
    date: '2024-12-10',
    category: 'training',
    description: 'Buổi tập trung vào việc hoàn thiện các kỹ thuật cơ bản và nâng cao.'
  },

  // Tournament Photos
  {
    id: 'tourn_001',
    src: '/images//tournament//476429567_1877628312767537_4942515097612906741_n.jpg',
    alt: 'Giải đấu nội bộ CLB',
    title: 'Giải đấu tháng 11',
    date: '2024-11-20',
    category: 'tournament',
    description: 'Giải đấu nội bộ với sự tham gia của tất cả thành viên, tạo không khí thi đấu sôi nổi.'
  },
  {
    id: 'tourn_002',
    src: '/images/tournament/476795714_600128126198459_6943664557928451318_n.jpg',
    alt: 'Trận chung kết gay cấn',
    title: 'Chung kết kịch tính',
    date: '2024-11-22',
    category: 'tournament',
    description: 'Trận chung kết đầy kịch tính và hấp dẫn, thu hút sự theo dõi của toàn bộ CLB.'
  },

  // Team Photos
  {
    id: 'team_001',
    src: 'https://images.unsplash.com/photo-1571367034861-e6729ad9c2d5?w=800&h=600&fit=crop',
    alt: 'Đội ngũ huấn luyện viên',
    title: 'Đội ngũ huấn luyện',
    date: '2024-10-10',
    category: 'team',
    description: 'Đội ngũ huấn luyện viên giàu kinh nghiệm và tận tâm của câu lạc bộ.'
  },
  {
    id: 'team_002',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    alt: 'Ban chủ nhiệm CLB',
    title: 'Ban lãnh đạo CLB',
    date: '2024-09-25',
    category: 'team',
    description: 'Ban chủ nhiệm và các thành viên trong ban lãnh đạo câu lạc bộ.'
  },

  // Event Photos
  {
    id: 'event_001',
    src: 'https://images.unsplash.com/photo-1626003441462-87ba6faf1c34?w=800&h=600&fit=crop',
    alt: 'Hoạt động team building',
    title: 'Team Building 2024',
    date: '2024-09-15',
    category: 'event',
    description: 'Hoạt động gắn kết và xây dựng tinh thần đồng đội giữa các thành viên.'
  },
  {
    id: 'event_002',
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    alt: 'Tiệc tất niên CLB',
    title: 'Tiệc tất niên 2024',
    date: '2024-12-20',
    category: 'event',
    description: 'Buổi tiệc tất niên ấm cúng, tổng kết một năm hoạt động thành công.'
  },

  // Facility Photos
  {
    id: 'facility_001',
    src: 'https://images.unsplash.com/photo-1594736797933-d0289ba2e65b?w=800&h=600&fit=crop',
    alt: 'Sân tập luyện của CLB',
    title: 'Sân tập hiện đại',
    date: '2024-08-01',
    category: 'facility',
    description: 'Cơ sở vật chất hiện đại với đầy đủ trang thiết bị phục vụ tập luyện.'
  },
  {
    id: 'facility_002',
    src: 'https://images.unsplash.com/photo-1544547863-c9618ba8e31b?w=800&h=600&fit=crop',
    alt: 'Khu vực nghỉ ngơi',
    title: 'Không gian thư giãn',
    date: '2024-08-05',
    category: 'facility',
    description: 'Khu vực nghỉ ngơi thoải mái cho các thành viên sau những buổi tập.'
  },

  // Achievement Photos
  {
    id: 'achieve_001',
    src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
    alt: 'Lễ trao giải',
    title: 'Lễ trao giải thành tích',
    date: '2024-07-20',
    category: 'achievement',
    description: 'Tôn vinh những thành tích xuất sắc và sự cống hiến của các thành viên.'
  },
  {
    id: 'achieve_002',
    src: 'https://images.unsplash.com/photo-1626003441462-87ba6faf1c34?w=800&h=600&fit=crop',
    alt: 'Nhận cúp vô địch',
    title: 'Vinh danh nhà vô địch',
    date: '2024-11-25',
    category: 'achievement',
    description: 'Khoảnh khắc nhận cúp vô địch trong giải đấu mà CLB tự tổ chức.'
  }
]

// Helper functions
export const getPhotosByCategory = (category: string): Photo[] => {
  if (category === 'all') return clubPhotos
  return clubPhotos.filter(photo => photo.category === category)
}

export const getPhotoById = (id: string): Photo | undefined => {
  return clubPhotos.find(photo => photo.id === id)
}

export const getCategoryCount = (category: string): number => {
  if (category === 'all') return clubPhotos.length
  return clubPhotos.filter(photo => photo.category === category).length
}

// Instructions for adding new photos:
/*
Để thêm ảnh mới vào album:

1. Tải ảnh lên một dịch vụ hosting (như Imgur, Cloudinary, hoặc thư mục public của Next.js)
2. Thêm object Photo mới vào array clubPhotos với cấu trúc:
   {
     id: 'unique_id',           // ID duy nhất (ví dụ: 'train_003')
     src: 'url_of_image',       // URL của ảnh
     alt: 'mô tả ảnh',          // Mô tả ngắn cho accessibility
     title: 'Tiêu đề ảnh',      // Tiêu đề hiển thị
     date: 'YYYY-MM-DD',        // Ngày chụp (format: năm-tháng-ngày)
     category: 'category_key',   // Loại ảnh (training, tournament, team, event, facility, achievement)
     description: 'Mô tả chi tiết' // Mô tả chi tiết (tuỳ chọn)
   }

Các category có sẵn:
- training: Tập luyện
- tournament: Giải đấu  
- team: Đội ngũ
- event: Sự kiện
- facility: Cơ sở
- achievement: Thành tích

Ví dụ thêm ảnh mới:
{
  id: 'train_003',
  src: '/images/club/training-session-new.jpg',
  alt: 'Buổi tập luyện mới nhất',
  title: 'Tập luyện tuần này',
  date: '2024-12-25',
  category: 'training',
  description: 'Buổi tập với sự tham gia đông đảo của các thành viên mới.'
}
*/ 