import dynamic from "next/dynamic";
import { NextPage } from "next";
import Head from "next/head";
import { Suspense } from "react";

const SignIn: NextPage = () => {
  const SocialLoginDynamic = dynamic(
    () => import("../components/scw").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <>
      <Head>
        <title>Sign In | Docify</title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <SocialLoginDynamic />
      </Suspense>
    </>
  );
};

export default SignIn;
