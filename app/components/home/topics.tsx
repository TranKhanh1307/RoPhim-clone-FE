import { Link } from "react-router";

const TOPICS = [
  "Marvel",
  "4K",
  "Sitcom",
  "Lồng Tiếng Cực Mạnh",
  "Xuyên Không",
  "Cổ Trang",
];

export default function Topics() {
  return (
    <div>
      <p className="text-xl text-white">Bạn đang quan tâm gì?</p>
      {TOPICS.map((topic) => (
        <Link
          key={topic}
          className="flex flex-col rounded-md bg-red-500 p-10 text-white"
          to={"/topic"}
        >
          <div>
            <p>{topic}</p>
            <p>Xem thêm chủ đề {">"}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
