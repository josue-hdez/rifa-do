import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TicketSearch = () => {
  return (
    <section className=" h-screen sm:h-[calc(100vh-192px)] px-6 flex-col-center gap-6">
      <div className="border border-dark-100 bg-dark-300 p-6 rounded-3xl">
        <Image
          src={"/icons/ticket.svg"}
          alt="Ticket Icon"
          width={36}
          height={36}
        />
      </div>
      <h1 className="medium-title">Verifica tu Boleto</h1>
      <p className="text-base sm:text-lg lg:text-xl text-center">
        Ingresa tu número de WhatsApp para ver tus participaciones.
      </p>
      <div className="w-full sm:w-3/5 mx-auto flex flex-col xs:flex-row gap-3">
        <Input
          className={"p-6"}
          type="number"
          placeholder="Número de teléfono"
        />
        <Button className="font-normal text-foreground p-6">
          <Image
            src={"/icons/search.svg"}
            alt="Search Icon"
            width={16}
            height={16}
          />
          Buscar
        </Button>
      </div>
    </section>
  );
};

export default TicketSearch;
