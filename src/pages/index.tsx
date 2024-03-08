import Image from "next/image";
import { Inter } from "next/font/google";
import { useRecoilState } from "recoil";
// import { userNameState } from "@/store/userStore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>Header </header>
      <main>{"hello"}</main>
      <footer>Footer</footer>
    </>
  );
}
