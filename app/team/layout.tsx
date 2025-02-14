"use client";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function TeamLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { batch: string };
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [batch, setBatch] = useState<string>("");
    // console.log(params.batch);
    useEffect(() => {
        // Split the pathname & get the last segment
        const segments = pathname.split("/");
        setBatch(segments[segments.length - 1]);
    }, [pathname]);

    // Convert batch to a number for arithmetic operations.
    const currentBatch = parseInt(batch);

    const changeNextBatch = () => {
        if (!isNaN(currentBatch) && currentBatch < 2027) {
            const newBatch = currentBatch + 1;
            router.push(`/team/${newBatch}`);
        }
    };

    const changePrevBatch = () => {
        if (!isNaN(currentBatch) && currentBatch > 2025) {
            const newBatch = currentBatch - 1;
            router.push(`/team/${newBatch}`);
        }
    };
    return (
        <div className=" pb-7 pt-[130px] px-7 bg-bg-star bg-cover bg-left lg:bg-center w-full text-center">
            <div className="flex flex-col items-center w-full min-h-screen bg-none mt-20">
                {/* Navigation Header */}
                <div className="flex w-full items-center justify-center gap-10 py-6">
                    <button
                        onClick={() => {
                            changePrevBatch();
                        }}
                        className=""
                    >
                        <GrFormPrevious
                            size={25}
                            className="text-white hover:text-black hover:bg-white rounded-full"
                            style={{ boxShadow: "0 0 1rem" }}
                        />
                    </button>
                    <h1 className="text-4xl text-white font-minecraft">
                        {batch} Batch
                    </h1>
                    <button
                        onClick={() => {
                            changeNextBatch();
                        }}
                    >
                        <MdNavigateNext
                            size={25}
                            className="text-white rounded-full hover:text-black hover:bg-white"
                            style={{ boxShadow: "0 0 1rem" }}
                        />
                    </button>
                </div>
                {children}

                {/* Main Content */}
            </div>
        </div>
    );
}
