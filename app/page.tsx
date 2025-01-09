import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href="/username" className="hover:opacity-50">
          Link to bug with intercepted route
        </Link>
        <Link href="/non-dynamic-segment" className="hover:opacity-50">
          Link to intercepted route that works (broken in dev?)
        </Link>
      </main>
    </div>
  );
}
