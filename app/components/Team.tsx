import TeamCard from "./TeamCard";
import BatchCard from "./BatchComponent";
const Team = () => {
    return (
        <div className="bg-bg-star min-h-screen bg-left lg:bg-center text-center">
            <h2 className="font-minecraft text-6xl text-white pt-32 pb-5 px-10">
                <span className="text-greenblue">CORE</span> MEMBERS
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-16 h-full pb-7 pt-3 px-7 bg-bg-star bg-cover min-h-screen bg-left lg:bg-center w-full p-24">
                <BatchCard year="2025" className="md:h-96 md:w-96" />
                <BatchCard year="2026" className="md:h-96 md:w-96" />
                <BatchCard year="2027" className="md:h-96 md:w-96" />
            </div>
        </div>
    );
};

export default Team;
