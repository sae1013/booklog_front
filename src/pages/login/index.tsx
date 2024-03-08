// pages/index.js
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CLIENT_SERVER } from "@/utils/urls";
import { openCenteredPopup } from "@/utils/popup";

export default function LoginPage() {
  const router = useRouter();

  const handleReceiveMessage = (event: MessageEvent) => {
    if (event.origin === CLIENT_SERVER) return;
    const { user, status, errorMessage } = JSON.parse(event.data);
    if (parseInt(status) != 200) {
      // TODO!: Error Popup 띄워주세요.
      console.log(errorMessage);
      return;
    }
    // TODO!: Greeting Toast message 띄워주세요.
    router.push("/");
  };

  useEffect(() => {
    window.addEventListener("message", handleReceiveMessage);
    return () => {
      window.removeEventListener("message", handleReceiveMessage);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="flex min-h-screen bg-gray-100 text-white flex-col items-center justify-center">
        {/* 로고 또는 타이틀 */}
        <h1 className=" mb-16 text-4xl font-extralight text-black">Book.log</h1>
        {/* 버튼들 */}
        <div className="space-y-4 flex flex-col w-full items-center">
          <button
            onClick={() => {
              openCenteredPopup(
                process.env.NEXT_PUBLIC_GOOGLE_OAUTH_LOGIN_URL as string,
                "GOOGLE LOGIN",
                600,
                400
              );
            }}
            className="bg-red-500 w-4/6 max-w-96 h-60pxr text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:opacity-60 transition duration-200 text-lg"
          >
            구글 로그인
          </button>
          <button className="bg-yellow-300 w-4/6 max-w-96 h-60pxr text-black px-6 py-2 rounded-xl font-medium shadow-lg hover:opacity-60 transition duration-200 text-lg">
            카카오 로그인
          </button>
        </div>
        {/* 하단 텍스트 */}
        <p className="mt-8 text-gray-900">북로그 계정으로 시작하기</p>
      </div>
    </>
  );
}
