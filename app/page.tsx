import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Intercepted routes bug</h1>

        <Link href="/example1" className="hover:opacity-50">
          Example 1: Link to intercepted route with one level up marker (..)
          marker <br />
          ❌ dev <br />❌ vercel
        </Link>
        <Link href="/example2" className="hover:opacity-50">
          Example 2: Link to intercepted route with root (...) marker <br />
          ❌ dev <br />❌ vercel
        </Link>
        <Link href="/my-username" className="hover:opacity-50">
          Example 3: Link to intercepted route with root (...) marker inside
          dynamic segment
          <br />
          ✅ dev <br />❌ vercel
        </Link>
      </main>
    </div>
  );
}
