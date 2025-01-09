import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-lg">Intercepted route bugs</h1>

        <Link
          href="/example1"
          className="bg-gray-800 hover:bg-gray-700 rounded-md p-3"
        >
          Example 1: Link to intercepted route with one level up marker (..)
          marker <br />
          ❌ dev <br />❌ vercel
        </Link>
        <Link
          href="/example2"
          className="bg-gray-800 hover:bg-gray-700 rounded-md p-3"
        >
          Example 2: Link to intercepted route with root (...) marker <br />
          ❌ dev <br />❌ vercel
        </Link>
        <Link
          href="/example3"
          className="bg-gray-800 hover:bg-gray-700 rounded-md p-3"
        >
          Example 3: Link to new intercepted route component using with root
          (...) marker
          <br />
          ❌ dev <br />❌ vercel
        </Link>
        <Link
          href="/example4"
          className="bg-gray-800 hover:bg-gray-700 rounded-md p-3"
        >
          Example 4: Link to new intercepted route component using with root (.)
          marker, reimporting photo/[id] folder
          <br />
          ❌ dev <br />❌ vercel
        </Link>
        <Link
          href="/my-username"
          className="bg-gray-800 hover:bg-gray-700 rounded-md p-3"
        >
          Example dynamic segment: Link to intercepted route with root (...)
          marker inside dynamic segment
          <br />
          ✅ dev <br />❌ vercel
        </Link>
      </main>
    </div>
  );
}
