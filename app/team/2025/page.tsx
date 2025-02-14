import React from "react";
import NewTeamCard from "@/app/components/NewTeamCard";

function page() {
    return (
        <>
            <div className="flex flex-wrap items-center justify-center gap-16 h-full pb-7  px-7 bg-bg-star bg-cover min-h-[90vh] bg-left lg:bg-center w-full">
                <NewTeamCard
                    name="Vinit Agarwal"
                    linkedin="agarwalvinit5678/"
                    image="/images/team/2025/vinit-agarwal.jpg"
                    className="h-[420px] w-[250px] scale-110"
                />

                <NewTeamCard
                    name="Kanishka Bansode"
                    image="/images/team/2025/kanishka-bansode.jpg"
                    className="h-[420px] w-[250px] scale-110"
                />
                <NewTeamCard
                    name="Ishan Upadhyaya"
                    image="/images/team/2025/ishan-upadhyaya.jpg"
                    className="h-[420px] w-[250px] scale-110"
                />

                <NewTeamCard
                    name="Prakhar Singh "
                    image="/images/team/2025/prakhar-singh.jpg"
                    className="h-[420px] w-[250px] scale-110"
                />
            </div>
        </>
    );
}

export default page;
