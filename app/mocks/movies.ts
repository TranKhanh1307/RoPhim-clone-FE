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
}

export const MOVIES: Movie[] = [
  {
    id: 1,
    thumbnail:
      "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/04/Transformers-rise-of-the-beasts-poster.jpg?w=1024",
    time: 124,
    timeWatched: 50,
    viName: "Người máy biến hình: Quái thú trỗi dậy",
    enName: "Transformer: Rise of the beasts",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2025",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
  {
    id: 2,
    thumbnail: "https://metiz.vn/media/blogs/12325.jpg",
    time: 180,
    timeWatched: 120,
    viName: "Đại chiến thái bình dương",
    enName: "Pacific Rim",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2025",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
  {
    id: 3,
    thumbnail: "https://rog.asus.com/media/169630374780.jpg",
    time: 124,
    timeWatched: 50,
    viName: "Người nhện: Trở về nhà",
    enName: "Spiderman: Homecoming",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2025",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
  {
    id: 4,
    thumbnail:
      "https://static.nutscdn.com/vimg/1920-0/951859ef2ec65a3be41fa36f156365b4.webp",
    time: 124,
    timeWatched: 50,
    viName: "Phu vụ thế kỷ: Thoát ẩn thoắt hiện",
    enName: "Now you see me: Now you don't",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2025",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
  {
    id: 5,
    thumbnail:
      "https://gamek.mediacdn.vn/133514250583805952/2025/12/8/photo-1765167876114-17651678771151707711567.png",
    time: 95,
    timeWatched: 50,
    viName: "Thợ săn quái vật",
    enName: "The withcer: Wild hunt",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2025",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
  {
    id: 6,
    thumbnail:
      "https://kenh14cdn.com/203336854389633024/2025/11/30/ngang641619c9-7838-4f16-9882-a4d7b492ec5f-17644832259911852191435-1764489119109-1764489127910898827003.jpg",
    time: 95,
    timeWatched: 50,
    viName: "Phi vụ động trời",
    enName: "Zootopia 2",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2025",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
  {
    id: 7,
    thumbnail:
      "https://cdn.galaxycine.vn/media/2025/12/15/avatar-3-750_1765782295757.jpg",
    time: 95,
    timeWatched: 50,
    viName: "Thế thân",
    enName: "Avatar: The way of water",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2025",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
  {
    id: 8,
    thumbnail:
      "https://genk.mediacdn.vn/2018/5/10/photo-1-15259408473471421819303.jpeg",
    time: 95,
    timeWatched: 50,
    viName: "Người sắt",
    enName: "Iron Man",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2025",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
  {
    id: 9,
    thumbnail:
      "https://m.media-amazon.com/images/S/pv-target-images/87c3b82e3237b2f88b33c4627decd6f586dd3664f74bbcce7e9ef17c9a135e63._SX1080_FMjpg_.jpg",
    time: 95,
    timeWatched: 50,
    viName: "Người dơi vs Siêu nhân",
    enName: "Batman v Superman",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2025",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
  {
    id: 10,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPgITmo4dcs4265JV-xY4gWjvjz1Vi7CA0Qw&s",
    time: 95,
    timeWatched: 50,
    viName: "Harry Potter và Hòn đá phù thủy",
    enName: "Harry Potter and the Philosopher's Stone",
    imdb: 6.2,
    resolution: "1080p",
    ageRestricted: "T16",
    publishedYear: "2025",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    categories: [
      "Chính Kịch",
      "Chiếu Rạp",
      "Gay Cấn",
      "Hình Sự",
      "Bí Ẩn",
      "Phiên Lưu",
      "Tâm Lý",
      "Hành Động",
      "Tình Cảm",
      "Hài Hước",
    ],
  },
];
