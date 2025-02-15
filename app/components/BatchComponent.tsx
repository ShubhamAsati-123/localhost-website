"use client";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
interface BatchCardProps {
    year: string;
    className?: string;
}
const BatchCard = (props: BatchCardProps) => {
    const year = props.year.slice(-2);

    return (
        <>
            <Link href={`team/${props.year}`}>
                <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.5}
                    glareColor="#4DFFDB"
                    glarePosition="all"
                >
                    <div
                        className={`h-60 w-60 rounded-md bg-opacity-50 bg-white flex justify-center items-center ${props.className}`}
                    >
                        <h1 className="font-northwood text-6xl font-semibold h-32 flex justify-center items-center">
                            Batch 2K{year}
                        </h1>
                    </div>
                </Tilt>
            </Link>
        </>
    );
};

export default BatchCard;
