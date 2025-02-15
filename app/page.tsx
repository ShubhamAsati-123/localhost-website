"use client";
import { useState, useEffect } from "react";
import JoinOurCommunity from "./components/JoinOurCommunity";
import LandingPage from "./components/LandingPage";
import Team from "./components/Team";
import Loader from "./components/Loading"

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : ( 
        <>
          <LandingPage />
          <Team />
          <JoinOurCommunity />
        </>
      )}
    </div>
  );
};

export default Page;
