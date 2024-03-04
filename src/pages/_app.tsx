import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
