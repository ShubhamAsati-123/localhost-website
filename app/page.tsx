"use client";
import { useState, useEffect } from "react";
import JoinOurCommunity from "./components/JoinOurCommunity";
import LandingPage from "./components/LandingPage";
import Team from "./components/Team";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <video
            src="./loading.mp4" // Place your video in the public folder
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
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
