import React from "react";
import NewTeamCard from "@/app/components/NewTeamCard";

function page() {
    return (
        <>
            <div className="flex flex-wrap gap-8 items-center justify-center  h-full pb-10  px-10  min-h-screen bg-left lg:bg-center">
                <NewTeamCard
                    name="Ashmit Jagtap"
                    github="ashmit-coder"
                    linkedin="ashmit-jagtap-544587270/"
                    image="/images/team/2026/ashmit.jpg"
                    className="h-[420px] w-[250px]"
                />
                <NewTeamCard
                    name="Anshul Kumar"
                    github="Anshulk2004"
                    linkedin="anshul-kumar-627001250"
                    image="/images/team/2026/Anshul.jpg"
                    className="h-[420px] w-[250px]"
                />
                <NewTeamCard
                    name="Shubham Asati"
                    github="ShubhamAsati-123"
                    linkedin="shubham-asati-054ba124b"
                    image="/images/team/2026/shubham.jpg"
                    className="h-[420px] w-[250px]"
                />

                <NewTeamCard
                    name="Manas Agarwal"
                    github="manasagar"
                    linkedin="manas-agarwal-a13623256/"
                    image="/images/team/2026/manas.jpg"
                    className="h-[420px] w-[250px]"
                />
                <NewTeamCard
                    name="Tushar Hirekhan"
                    github="tshrrx"
                    linkedin="tushar-hirekhan-b71a10258/"
                    image="/images/team/2026/Tushar.jpg"
                    className="h-[420px] w-[250px]"
                />
                <NewTeamCard
                    name="Jai Somani"
                    github="jaisomani04"
                    linkedin="jaisomani04"
                    image="/images/team/2026/jai.jpg"
                    className="h-[420px] w-[250px]"
                />
            </div>
        </>
    );
}

export default page;
