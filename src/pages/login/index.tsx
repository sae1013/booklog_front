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
    const { user, token } = JSON.parse(event.data);
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
      <div className="flex min-h-screen bg-gray-900 text-white flex-col items-center justify-center">
        {/* 로고 또는 타이틀 */}
        <h1 className="mb-8 text-4xl font-bold">tistory</h1>
        {/* 버튼들 */}
        <div className="space-y-4">
          <button
            onClick={() => {
              openCenteredPopup(
                process.env.NEXT_PUBLIC_GOOGLE_OAUTH_LOGIN_URL as string,
                "GOOGLE LOGIN",
                600,
                400
              );
            }}
            className="bg-red-500 text-black px-6 py-2 rounded-full font-medium shadow-lg hover:bg-yellow-600 transition duration-200"
          >
            구글 로그인
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium shadow-lg hover:bg-gray-200 transition duration-200">
            티스토리계정 로그인
          </button>
        </div>
        {/* 하단 텍스트 */}
        <p className="mt-8 text-gray-400">카카오계정으로 티스토리 시작하기</p>
      </div>
    </>
  );
}
