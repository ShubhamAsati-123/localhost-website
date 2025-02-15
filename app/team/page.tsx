"use client";

import BatchCard from "../components/BatchComponent";
const TeamCard = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-16 h-full pb-7 pt-[130px] px-7 bg-bg-star bg-cover min-h-screen bg-left lg:bg-center w-full p-24">
            <BatchCard year="2025" className="md:h-96 md:w-96" />
            <BatchCard year="2026" className="md:h-96 md:w-96" />
            <BatchCard year="2027" className="md:h-96 md:w-96" />
        </div>
    );
};

export default TeamCard;
