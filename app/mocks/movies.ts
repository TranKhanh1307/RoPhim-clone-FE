interface Movie {
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
      "https://www.thewitcher.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.4c59601c.jpg&w=3840&q=75",
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
];
