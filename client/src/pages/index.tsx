import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${inter.className} flex min-h-screen flex-row items-center justify-center`}
    >
      Hello World
    </main>
  );
}
