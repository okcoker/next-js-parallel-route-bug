import Link from "next/link";

type PageProps = {
  params: Promise<{ username: string }>;
};

async function Page({ params }: PageProps) {
  const { username } = await params;

  return (
    <div className="size-full px-2 pt-4 sm:px-10 sm:pt-10 bg-red-500">
      <p>User page for: {username}. This content should stay under the modal</p>
      <Link href="/photo/12">Open modal</Link>
    </div>
  );
}

export default Page;
