import Link from "next/link";

async function Page() {
  return (
    <div className="size-full px-2 pt-4 sm:px-10 sm:pt-10 bg-green-500">
      <p>
        New modal component instead of import. This content should stay under
        the modal
      </p>
      <Link href="/photo/13">Open modal</Link>
    </div>
  );
}

export default Page;
