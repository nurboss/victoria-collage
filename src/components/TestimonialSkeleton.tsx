const TestimonialSkeleton = () => {
  return (
    <div className="flex gap-20 py-10">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="w-[295px] h-[400px] relative overflow-hidden flex justify-center items-center rotate-12 border border-accent-hotpink"
        >
          <div className="absolute inset-0 bg-gray-300 animate-pulse" />
          <div className="absolute inset-0 bg-dark-800/80" />
          <div className="relative z-10 p-6 space-y-2 -rotate-12 w-full">
            <div className="h-6 bg-gray-400 rounded animate-pulse mb-2" />
            <div className="h-4 bg-gray-400 rounded animate-pulse mb-2" />
            <div className="h-4 bg-gray-400 rounded animate-pulse w-3/4" />
            <div className="flex gap-2 mt-4">
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSkeleton;
