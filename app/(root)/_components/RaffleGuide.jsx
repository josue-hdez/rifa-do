import Image from "next/image";
import Label from "./Label";
import { raffleSteps } from "@/lib/constants";

const GuideStep = ({ icon, title, description }) => {
  return (
    <article className="bg-dark-300 border border-dark-100 p-9 rounded-xl flex-col-center gap-3">
      <div className="border border-dark-100 p-6 rounded-3xl">
        <Image src={icon} alt="Guide Icon" width={24} height={24} />
      </div>
      <h4 className="font-bold text-2xl text-center">{title}</h4>
      <p className="max-w-xs text-center">{description}</p>
    </article>
  );
};

const RaffleGuide = () => {
  return (
    <section className="flex-col-center gap-3 px-6 mt-24">
      <Label text={"¡Tan solo dos pasos!"} />
      <h2 className="medium-title">¿Como participar?</h2>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {raffleSteps.map((step, index) => (
          <GuideStep key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default RaffleGuide;
