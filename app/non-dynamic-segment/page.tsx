import Link from "next/link";

async function Page() {
  return (
    <div className="size-full px-2 pt-4 sm:px-10 sm:pt-10 bg-green-500">
      <p>Non dynamic segment</p>
      <Link href="/photo/12">Open modal</Link>
    </div>
  );
}

export default Page;
