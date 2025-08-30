import Skeleton from "@/components/skeleton";


export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen items-center gap-y-4 pt-28 ">
   <Skeleton className="w-[550px]" />
   <Skeleton className="w-[400px]" />
   <Skeleton className="w-[430px]" />
    </div>
  );
}
