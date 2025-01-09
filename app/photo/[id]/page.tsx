type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <p className="bg-white flex w-[300px] text-black rounded-md justify-center items-center h-[200px] mx-auto">
      Photo page id: {id}
    </p>
  );
}
