import React from "react";

import NewTeamCard from "@/app/components/NewTeamCard";

export default function Card() {
    return (
        <>
            {/* <GrLinkNext  width={24} color="white"/> */}
            <div className="flex flex-wrap gap-10 items-center justify-center  h-full pb-10  px-10  min-h-screen bg-left lg:bg-center">
                <NewTeamCard
                    name="Anmol Yadav"
                    github="anmolyadav-dev"
                    linkedin="anmolyadav-dev"
                    image="/images/team/2027/anmol.jpg"
                    contact="~anmolyadav.dev"
                    className="h-[420px] w-[250px]"
                />
                <NewTeamCard
                    name="Anomitra"
                    github="anomitroid"
                    image="/images/team/2027/ano.jpg"
                    className="h-[420px] w-[250px]"
                />
                <NewTeamCard
                    name="Shivansh Kandpal"
                    linkedin="shivansh-kandpal-503a2325b"
                    image="/images/team/2027/shivansh.jpeg"
                    github="zyphon12342"
                    className="h-[420px] w-[250px]"
                />
                <NewTeamCard
                    name="Piyush Kulkarni"
                    github="piyushk6626"
                    linkedin="piyush-kulkarni-ai"
                    image="/images/team/2027/kulkarni.jpg"
                    className="h-[420px] w-[250px]"
                />
                <NewTeamCard
                    name="Siddhant Ganesh"
                    github="sdntgnsh"
                    linkedin="siddhant-ganesh-senthil-kumar-911060246"
                    image="/images/team/2027/siddhant.png"
                    className="h-[420px] w-[250px]"
                />
                <NewTeamCard
                    name="Luv Kansal"
                    github=""
                    linkedin="luv-kansal-3a4a372b1"
                    image="/images/team/2027/luv.jpeg"
                    className="h-[420px] w-[250px]"
                />
                <NewTeamCard
                    name="Khushi Garg"
                    github=""
                    linkedin="luv-kansal-3a4a372b1"
                    image="/images/team/2027/khushi.jpg"
                    className="h-[420px] w-[250px]"
                />
            </div>
        </>
    );
}
