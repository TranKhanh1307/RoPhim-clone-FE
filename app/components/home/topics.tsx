import { cn } from "@/utils/cn";
import { Link } from "react-router";

const TOPICS = [
  { title: "Marvel", color: "bg-linear-to-r from-blue-400 to-blue-700" },
  { title: "4K", color: "bg-linear-to-r from-pink-400 to-pink-700" },
  { title: "Sitcom", color: "bg-linear-to-r from-green-400 to-green-700" },
  {
    title: "Lồng Tiếng Cực Mạnh",
    color: "bg-linear-to-r from-purple-400 to-purple-700",
  },
  {
    title: "Xuyên Không",
    color: "bg-linear-to-r from-orange-400 to-orange-700",
  },
  { title: "Cổ Trang", color: "bg-linear-to-r from-red-400 to-red-700" },
];

export default function Topics() {
  return (
    <section>
      <p className="text-xl font-bold text-white">Bạn đang quan tâm gì?</p>
      <div className="scrollbar-hidden flex gap-4 overflow-x-scroll pt-8">
        {TOPICS.map((topic) => (
          <Link
            key={topic.title}
            to={"/topic"}
            className={cn(
              "flex shrink-0 basis-32 items-center rounded-md p-4 text-white transition-all duration-300 ease-in-out hover:-translate-y-5 active:-translate-y-5 lg:basis-48 lg:flex-col lg:items-start lg:justify-center lg:gap-2",
              topic.color,
            )}
          >
            <p className="font-bold lg:text-xl">{topic.title}</p>
            <p className="hidden after:ml-2 after:content-['>'] lg:block">
              Xem chủ đề
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
