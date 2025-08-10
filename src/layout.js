import "./globals.css";
import { Titillium_Web } from "next/font/google";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Shakir Ali - Portfolio",
  description: "Technical Lead & Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titilliumWeb.className} d-flex flex-column h-100`}>
        {children}
      </body>
    </html>
  );
}
