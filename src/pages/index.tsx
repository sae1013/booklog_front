import Image from "next/image";
import { Inter } from "next/font/google";
import { useRecoilState } from "recoil";
import { userNameState } from "@/store/userStore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userName, setUserName] = useRecoilState(userNameState);
  console.log(userName);
  return <main>{userName}</main>;
}
