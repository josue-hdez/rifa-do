import Hero from "./_components/Hero";
import PopularRaffles from "./_components/PopularRaffles";
import RaffleGuide from "./_components/RaffleGuide";
import RecentWinners from "./_components/RecentWinners";

const Page = () => {
  return (
    <main>
      <Hero />
      <PopularRaffles />
      <RaffleGuide />
      <RecentWinners />
    </main>
  );
};

export default Page;
