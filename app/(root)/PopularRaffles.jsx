import RaffleCard from "@/components/RaffleCard";
import Label from "./Label";
import { raffles } from "@/lib/constants";

const PopularRaffles = () => {
  return (
    <section className="flex-col-center gap-3 px-6">
      <Label text={"¡Participa!"} />
      <h2 className="medium-title">Rifas Activas</h2>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {raffles.map((raffle) => (
          <RaffleCard key={raffle.id} {...raffle} />
        ))}
      </div>
    </section>
  );
};

export default PopularRaffles;
