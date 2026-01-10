const navLinks = [
  { label: "inicio", href: "/" },
  { label: "verificacion", href: "/verification" },
  { label: "rifas", href: "/raffles" },
];

const raffles = [
  {
    id: 1,
    title: "Combo KTM Navideño Super Especial 2026",
    image: "/images/raffle-image.png",
    drawDate: "2026-12-31T23:59:59",
    status: "Activa",
  },
  {
    id: 2,
    title: "Combo KTM Navideño Super Especial 2026",
    image: "/images/raffle-image.png",
    drawDate: "2026-06-31T23:59:59",
    status: "Activa",
  },
  {
    id: 3,
    title: "Combo KTM Navideño Super Especial 2026",
    image: "/images/raffle-image.png",
    drawDate: "2026-01-31T23:59:59",
    status: "Activa",
  },
];

const raffleSteps = [
  {
    icon: "/icons/shopping-cart.svg",
    title: "1. Seleccione la Cantidad",
    description:
      "Elige cuántos productos deseas comprar y agrégalos a tu carrito.",
  },
  {
    icon: "/icons/captions.svg",
    title: "2. Llenas tu datos",
    description: "Crea una cuenta o inicia sesión para completar tu compra.",
  },
  {
    icon: "/icons/ticket.svg",
    title: "3. ¡Ya estás participando!",
    description: "Recibe tus boletos y listo, ya estás participando.",
  },
];

const footerLinks = [
  { icon: "/icons/whatsapp.svg", href: "https://www.whatsapp.com/" },
  { icon: "/icons/instagram.svg", href: "https://www.instagram.com/" },
  { icon: "/icons/tiktok.svg", href: "https://www.tiktok.com/" },
  { icon: "/icons/facebook.svg", href: "https://www.facebook.com/" },
];

export { navLinks, raffles, raffleSteps, footerLinks };
