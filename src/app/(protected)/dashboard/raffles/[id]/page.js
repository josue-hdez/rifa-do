const Page = async ({ params }) => {
  const { id } = await params;

  return <main>Raffle {id}</main>;
};

export default Page;
