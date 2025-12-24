export interface Movie {
  viName: string;
  enName: string;
  imdb: number;
  resolution: string;
  ageRestricted: string;
  publishedYear: string;
  time: number;
  timeWatched: number;
  thumbnail: string;
  id: number;
  description: string;
  categories: string[];
  isSubbed: boolean;
  isDubbed: boolean;
}

export const MOVIES: Movie[] = [
  {
    id: 1,
    thumbnail:
      "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/04/Transformers-rise-of-the-beasts-poster.jpg?w=1024",
    time: 132,
    timeWatched: 50,
    viName: "Người máy biến hình: Quái thú trỗi dậy",
    enName: "Transformer: Rise of the beasts",
    imdb: 6.2,
    resolution: "4K",
    ageRestricted: "T13",
    publishedYear: "2024",
    description: `Cuộc chiến giữa các phe Transformer bước sang một giai đoạn mới khi những quái thú cổ đại bị đánh thức. 
      Optimus Prime và đồng đội phải liên minh với con người để ngăn chặn mối đe dọa có khả năng hủy diệt toàn bộ Trái Đất. 
      Những trận chiến hoành tráng, công nghệ tối tân và các sinh vật khổng lồ tạo nên một cuộc phiêu lưu đầy kịch tính.`,
    categories: [
      "Hành Động",
      "Viễn Tưởng",
      "Phiêu Lưu",
      "Bom Tấn",
      "Chiếu Rạp",
      "Gay Cấn",
      "Chính Kịch",
      "Quái Vật",
    ],
    isSubbed: true,
    isDubbed: true,
  },
  {
    id: 2,
    thumbnail: "https://metiz.vn/media/blogs/12325.jpg",
    time: 165,
    timeWatched: 120,
    viName: "Đại chiến thái bình dương",
    enName: "Pacific Rim",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2019",
    description: `Khi những quái vật khổng lồ từ đáy đại dương trỗi dậy, nhân loại đứng trước nguy cơ diệt vong. 
      Các Jaeger – robot chiến đấu khổng lồ – được điều khiển bởi hai phi công liên kết thần kinh để chống lại hiểm họa. 
      Bộ phim mang đến những màn đối đầu mãn nhãn và tinh thần hy sinh của con người.
    `,
    categories: [
      "Hành Động",
      "Viễn Tưởng",
      "Quái Vật",
      "Chiếu Rạp",
      "Gay Cấn",
      "Bom Tấn",
      "Phiêu Lưu",
      "Chính Kịch",
    ],
    isSubbed: true,
    isDubbed: false,
  },
  {
    id: 3,
    thumbnail: "https://rog.asus.com/media/169630374780.jpg",
    time: 118,
    timeWatched: 50,
    viName: "Người nhện: Trở về nhà",
    enName: "Spiderman: Homecoming",
    imdb: 6.2,
    resolution: "720p",
    ageRestricted: "P",
    publishedYear: "2017",
    description: `Peter Parker phải học cách trưởng thành khi vừa là một học sinh trung học bình thường, vừa là siêu anh hùng Người Nhện. 
      Trong hành trình đó, cậu đối mặt với kẻ thù nguy hiểm và những thử thách về trách nhiệm, tình bạn và lòng dũng cảm.
    `,
    categories: [
      "Siêu Anh Hùng",
      "Hành Động",
      "Hài Hước",
      "Học Đường",
      "Phiêu Lưu",
      "Viễn Tưởng",
      "Gia Đình",
      "Bom Tấn",
    ],
    isSubbed: true,
    isDubbed: false,
  },
  {
    id: 4,
    thumbnail:
      "https://static.nutscdn.com/vimg/1920-0/951859ef2ec65a3be41fa36f156365b4.webp",
    time: 129,
    timeWatched: 50,
    viName: "Phi vụ thế kỷ: Thoát ẩn thoắt hiện",
    enName: "Now you see me: Now you don't",
    imdb: 6.2,
    resolution: "Full HD",
    ageRestricted: "T18",
    publishedYear: "2020",
    description: `Nhóm ảo thuật gia bậc thầy tiếp tục thực hiện những phi vụ lừa đảo táo bạo ngay trước mắt công chúng. 
      Sự kết hợp giữa ảo thuật, trí tuệ và các cú twist bất ngờ khiến cuộc truy đuổi giữa họ và pháp luật trở nên căng thẳng.
    `,
    categories: [
      "Hình Sự",
      "Bí Ẩn",
      "Gay Cấn",
      "Tâm Lý",
      "Chiếu Rạp",
      "Chính Kịch",
      "Bom Tấn",
      "Trí Tuệ",
    ],
    isSubbed: true,
    isDubbed: true,
  },
  {
    id: 5,
    thumbnail:
      "https://gamek.mediacdn.vn/133514250583805952/2025/12/8/photo-1765167876114-17651678771151707711567.png",
    time: 102,
    timeWatched: 50,
    viName: "Thợ săn quái vật",
    enName: "The withcer: Wild hunt",
    imdb: 6.2,
    resolution: "1440p",
    ageRestricted: "T18",
    publishedYear: "2023",
    description: `Một thợ săn quái vật chuyên nghiệp lang thang khắp vùng đất giả tưởng đầy hiểm nguy. 
      Anh phải đối mặt với sinh vật huyền bí, âm mưu chính trị và những lựa chọn đạo đức khắc nghiệt trong thế giới tăm tối.
    `,
    categories: [
      "Giả Tưởng",
      "Viễn Tưởng",
      "Hành Động",
      "Phiêu Lưu",
      "Bí Ẩn",
      "Tâm Lý",
      "Chiến Tranh",
      "Chính Kịch",
    ],
    isSubbed: true,
    isDubbed: true,
  },
  {
    id: 6,
    thumbnail:
      "https://kenh14cdn.com/203336854389633024/2025/11/30/ngang641619c9-7838-4f16-9882-a4d7b492ec5f-17644832259911852191435-1764489119109-1764489127910898827003.jpg",
    time: 110,
    timeWatched: 50,
    viName: "Phi vụ động trời",
    enName: "Zootopia 2",
    imdb: 6.2,
    resolution: "1080p HDR",
    ageRestricted: "P",
    publishedYear: "2026",
    description: `Thành phố Zootopia lại rơi vào hỗn loạn khi một âm mưu mới đe dọa sự hòa hợp giữa các loài động vật. 
      Hai cảnh sát quen thuộc buộc phải hợp tác để phá án và bảo vệ trật tự xã hội.
    `,
    categories: ["Hoạt Hình", "Gia Đình", "Hài Hước", "Phiêu Lưu", "Hình Sự"],
    isSubbed: true,
    isDubbed: true,
  },
  {
    id: 7,
    thumbnail:
      "https://cdn.galaxycine.vn/media/2025/12/15/avatar-3-750_1765782295757.jpg",
    time: 192,
    timeWatched: 50,
    viName: "Thế thân",
    enName: "Avatar: The way of water",
    imdb: 6.2,
    resolution: "4K HDR",
    ageRestricted: "T13",
    publishedYear: "2022",
    description: `Gia đình Jake Sully phải thích nghi với cuộc sống dưới đại dương Pandora. 
      Họ đối mặt với hiểm họa mới từ con người, đồng thời khám phá văn hóa và sinh vật biển kỳ vĩ.
    `,
    categories: [
      "Viễn Tưởng",
      "Phiêu Lưu",
      "Chính Kịch",
      "Gia Đình",
      "Chiếu Rạp",
    ],
    isSubbed: true,
    isDubbed: true,
  },
  {
    id: 8,
    thumbnail:
      "https://genk.mediacdn.vn/2018/5/10/photo-1-15259408473471421819303.jpeg",
    time: 126,
    timeWatched: 50,
    viName: "Người sắt",
    enName: "Iron Man",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T13",
    publishedYear: "2008",
    description: `Tony Stark – một thiên tài công nghệ – bị bắt cóc và buộc phải chế tạo vũ khí. 
      Anh đã biến nghịch cảnh thành cơ hội, tạo ra bộ giáp Người Sắt và mở đầu kỷ nguyên siêu anh hùng Marvel.
    `,
    categories: [
      "Siêu Anh Hùng",
      "Hành Động",
      "Công Nghệ",
      "Viễn Tưởng",
      "Bom Tấn",
    ],
    isSubbed: true,
    isDubbed: true,
  },
  {
    id: 9,
    thumbnail:
      "https://m.media-amazon.com/images/S/pv-target-images/87c3b82e3237b2f88b33c4627decd6f586dd3664f74bbcce7e9ef17c9a135e63._SX1080_FMjpg_.jpg",
    time: 151,
    timeWatched: 50,
    viName: "Người dơi vs Siêu nhân",
    enName: "Batman v Superman",
    imdb: 6.2,
    resolution: "IMAX",
    ageRestricted: "T16",
    publishedYear: "2016",
    description: `Sự khác biệt trong quan điểm bảo vệ nhân loại khiến Batman và Superman đối đầu nhau. 
      Cuộc xung đột không chỉ là sức mạnh, mà còn là niềm tin, đạo đức và trách nhiệm của người hùng.
    `,
    categories: [
      "Siêu Anh Hùng",
      "Hành Động",
      "Chính Kịch",
      "Tâm Lý",
      "Bom Tấn",
    ],
    isSubbed: true,
    isDubbed: true,
  },
  {
    id: 10,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPgITmo4dcs4265JV-xY4gWjvjz1Vi7CA0Qw&s",
    time: 152,
    timeWatched: 50,
    viName: "Harry Potter và Hòn đá phù thủy",
    enName: "Harry Potter and the Philosopher's Stone",
    imdb: 6.2,
    resolution: "720p",
    ageRestricted: "P",
    publishedYear: "2001",
    description: `Harry Potter phát hiện mình là một phù thủy và được mời nhập học tại Hogwarts. 
      Tại đây, cậu kết bạn, học phép thuật và dần khám phá bí mật xoay quanh quá khứ của mình.
    `,
    categories: [
      "Phép Thuật",
      "Phiêu Lưu",
      "Gia Đình",
      "Giả Tưởng",
      "Học Đường",
    ],
    isSubbed: true,
    isDubbed: true,
  },
];
