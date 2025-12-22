import { cn } from "@/utils/cn";
import { Link } from "react-router";

const TOPICS = [
  { title: "Marvel", color: "bg-blue-400" },
  { title: "4K", color: "bg-slate-400" },
  { title: "Sitcom", color: "bg-green-400" },
  { title: "Lồng Tiếng Cực Mạnh", color: "bg-purple-400" },
  { title: "Xuyên Không", color: "bg-orange-400" },
  { title: "Cổ Trang", color: "bg-red-400" },
];

export default function Topics() {
  return (
    <section className="space-y-4">
      <p className="text-xl font-bold text-white">Bạn đang quan tâm gì?</p>
      <div className="scrollbar-hidden flex gap-4 overflow-x-scroll">
        {TOPICS.map((topic) => (
          <Link
            key={topic.title}
            to={"/topic"}
            className={cn(
              "flex shrink-0 basis-32 items-center rounded-md p-4 text-white lg:basis-48 lg:flex-col lg:items-start lg:justify-center lg:gap-2",
              topic.color,
            )}
          >
            <p className="font-bold lg:text-xl">{topic.title}</p>
            <p className="hidden lg:block">Xem chủ đề {">"}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
