import SkeletonCard from "@/components/skeletonCard";

export default function Loading() {
  return (
    <div className="flex justify-center items-center flex-wrap mx-auto py-10 px-[20px] max-w-[1100px] gap-10">
      {Array.from({ length: 9 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
