import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen px-6 flex-col-center gap-6">
      <h1 className="large-title text-center">
        ¡Participa hoy,
        <br />
        <span id="title-gradient">Gana en grande!</span>
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-center">
        La plataforma dominicana de rifas seguras, organizadas y transparentes.
      </p>
      <Link
        href={"/raffles"}
        className="py-2 px-4 sm:py-4 sm:px-6 text-sm sm:text-base border-none outline-none cursor-pointer rounded-md bg-primary"
      >
        Ver Rifas Activas
      </Link>
    </section>
  );
};

export default Hero;
