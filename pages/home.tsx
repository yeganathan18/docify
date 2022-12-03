import Head from "next/head";
import { useState } from "react";
import BetaCard from "../components/BetaCard";
import FeedForm from "../components/FeedForm";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Docify</title>
      </Head>
      <div className={styles.hero}>
        <div className="w-3/4 flex flex-row justify-center py-20">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-medium">Docify 🍀</h1>
            <p className="text-xl">
              ETHIndia 2022 Hackathon Submission by Team Orcues
            </p>
          </div>
        </div>
      </div>
      <main className="grid grid-rows-2 grid-flow-col justify-items-center flex-1 py-14 gap-2">
        <div className="row-span-3 bg-blue-100 border-2 border-blue-400 rounded-xl">
          {/* <FeedForm /> */}
        </div>
        <div className="col-span-2 bg-yellow-100 border-2 border-yello-400 rounded-xl py-4 px-8">
          <BetaCard />
        </div>
      </main>
    </>
  );
};

export default Home;
