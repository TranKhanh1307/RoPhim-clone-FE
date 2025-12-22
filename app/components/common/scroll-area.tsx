export default function ScrollArea({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="scrollbar-hidden flex gap-2 overflow-x-scroll">
      {children}
    </div>
  );
}
