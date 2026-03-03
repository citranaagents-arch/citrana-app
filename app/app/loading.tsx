import { Skeleton, SkeletonCard } from "@/components/ui/skeleton";

export default function AppLoading() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="mb-2 h-8 w-48" />
        <Skeleton className="h-4 w-72 max-w-full" />
      </div>

      <Skeleton className="h-24 w-full rounded-xl" />

      <section>
        <Skeleton className="mb-4 h-4 w-28" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {[1, 2, 3, 4, 5].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-3">
        <SkeletonCard className="h-[200px]" />
        <div className="space-y-4 lg:col-span-2">
          <Skeleton className="h-4 w-24" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} className="h-[140px]" />
            ))}
          </div>
        </div>
      </div>

      <Skeleton className="h-[200px] w-full rounded-xl" />
    </div>
  );
}
