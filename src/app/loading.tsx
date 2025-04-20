export default function Loading() {
  return (
    <div className="flex items-center justify-around p-5">
      <div className="h-[870px] w-[600px] animate-pulse rounded-lg bg-gray-300"></div>
      <div className="flex w-[375px] flex-col justify-center">
        <div className="h-6 w-1/4 animate-pulse rounded-lg bg-gray-300"></div>
        <div className="mt-2 h-4 w-1/3 animate-pulse rounded-lg bg-gray-300"></div>

        <div className="mt-10 flex flex-col gap-4">
          <div className="h-10 w-full animate-pulse rounded-lg bg-gray-300"></div>
          <div className="h-10 w-full animate-pulse rounded-lg bg-gray-300"></div>
          <div className="h-10 w-full animate-pulse rounded-lg bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
