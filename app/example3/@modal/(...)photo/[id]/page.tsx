type PageProps = {
  params: Promise<{ id: string }>;
};

export default function Page({}: PageProps) {
  console.log("page.tsx:5", "here");
  return (
    <div className="bg-white size-20 text-black text-center p-4">
      Hello darkness, my old friend.
    </div>
  );
}
