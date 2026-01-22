import { Gasoek_One, Roboto } from "next/font/google";
import "./globals.css";

const gasoekOne = Gasoek_One({
  variable: "--font-gasoek-one",
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rifa.DO",
  description:
    "¡Participa en nuestros sorteos y gana increíbles premios! Compra tu boleto en línea de forma fácil y segura, apoya grandes causas y descubre si eres el próximo ganador. ¡Tu oportunidad de ganar comienza aquí!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${gasoekOne.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
