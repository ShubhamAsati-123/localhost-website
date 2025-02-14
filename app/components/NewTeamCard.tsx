// "use client";
// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import Link from "next/link";
// import toast from "react-hot-toast";
// interface TeamCardProps {
//   name: string;
//   image?: string;
//   github?: string;
//   linkedin?: string;
//   className?: string;
//   contact?: string;
// }

// function NewTeamCard(props: TeamCardProps) {
//   const github = props.github;
//   const linkedin = props.linkedin;

//   if (!props.image) {
//     props.image =
//       "https://t4.ftcdn.net/jpg/07/88/67/21/360_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg";
//   }

//   const handleGithubClick = (
//     event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
//   ) => {
//     if (!github) {
//       event.preventDefault();
//       toast.error("Github Link Not Available");
//     }
//   };

//   const handleLinkedinClick = (
//     event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
//   ) => {
//     if (!linkedin) {
//       event.preventDefault();
//       toast.error("LinkedIn Link Not Available");
//     }
//   };
//   return (
//     <>
//       <div
//         className={`  rounded-lg shadow bg-gray-800 border-gray-700 ${props.className} `}
//       >
//         <div className="align-center">
//           <div className="">
//             <img
//               className="p-8 rounded-t-lg "
//               src={props.image}
//               alt={props.name}
//             />
//           </div>
//           <div className="px-5 pb-5">
//             <a href="/" className="flex items-end justify-between">
//               <div className="text-xl font-semibold tracking-tight text-white">
//                 {props.name}
//               </div>
//             </a>
//             {/* <div className="flex items-center justify-between text-white text-xs">
//                         {props.job}
//                     </div> */}
//             <div className="flex items-center justify-between text-white text-xs">
//               {props.contact}
//             </div>

//             <div className="flex items-center  mt-4 mb-5 gap-4">
//               <Link
//                 href={github ? `https://github.com/${github}` : ""}
//                 target="_blank"
//                 onClick={handleGithubClick}
//               >
//                 <FaGithub size={50} color="white" />
//               </Link>

//               <Link
//                 href={linkedin ? `https://linkedin.com/in/${linkedin}` : ""}
//                 target="_blank"
//                 onClick={handleLinkedinClick}
//               >
//                 <FaLinkedin size={50} color="white" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default NewTeamCard;

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface TeamCardProps {
    name: string;
    image?: string;
    github?: string;
    linkedin?: string;
    className?: string;
    contact?: string;
}

export default function NewTeamCard({
    name,
    image,
    github,
    linkedin,
    contact,
    className = "",
}: TeamCardProps) {
    return (
        <div
            className={`max-w-xs mx-auto h-80 bg-white shadow-white/30 shadow-lg rounded-sm  overflow-hidden text-center ${className}`}
        >
            <div
                className="h-28"
                style={{
                    backgroundImage: `linear-gradient(45deg, rgb(241, 121, 22) 0%, rgb(241, 121, 22) 12%, rgb(219, 114, 22) 12%, rgb(219, 114, 22) 29%, rgb(197, 107, 23) 29%, rgb(197, 107, 23) 30%, rgb(175, 100, 23) 30%, rgb(175, 100, 23) 33%, rgb(152, 94, 24) 33%, rgb(152, 94, 24) 51%, rgb(130, 87, 24) 51%, rgb(130, 87, 24) 77%, rgb(108, 80, 25) 77%, rgb(108, 80, 25) 95%, rgb(86, 73, 25) 95%, rgb(86, 73, 25) 100%), linear-gradient(135deg, rgb(241, 121, 22) 0%, rgb(241, 121, 22) 12%, rgb(219, 114, 22) 12%, rgb(219, 114, 22) 29%, rgb(197, 107, 23) 29%, rgb(197, 107, 23) 30%, rgb(175, 100, 23) 30%, rgb(175, 100, 23) 33%, rgb(152, 94, 24) 33%, rgb(152, 94, 24) 51%, rgb(130, 87, 24) 51%, rgb(130, 87, 24) 77%, rgb(108, 80, 25) 77%, rgb(108, 80, 25) 95%, rgb(86, 73, 25) 95%, rgb(86, 73, 25) 100%), linear-gradient(135deg, rgb(241, 121, 22) 0%, rgb(241, 121, 22) 12%, rgb(219, 114, 22) 12%, rgb(219, 114, 22) 29%, rgb(197, 107, 23) 29%, rgb(197, 107, 23) 30%, rgb(175, 100, 23) 30%, rgb(175, 100, 23) 33%, rgb(152, 94, 24) 33%, rgb(152, 94, 24) 51%, rgb(130, 87, 24) 51%, rgb(130, 87, 24) 77%, rgb(108, 80, 25) 77%, rgb(108, 80, 25) 95%, rgb(86, 73, 25) 95%, rgb(86, 73, 25) 100%), linear-gradient(90deg, rgb(199, 181, 128), rgb(162, 8, 93))`,
                    backgroundBlendMode: "overlay, overlay, overlay, normal",
                }}
            ></div>

            <div className="-mt-16">
                <img
                    className="w-32 h-32 mx-auto rounded-full border-4 border-white border-solid"
                    src={
                        image ||
                        "https://t4.ftcdn.net/jpg/07/88/67/21/360_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg"
                    }
                    alt={name}
                />
            </div>

            <div className="p-4">
                <h3 className="text-2xl font-NIKOLETA font-semibold text-gray-600">
                    {name}
                </h3>
                {contact && <p className="text-gray-500">{contact}</p>}
                <div className="flex justify-center mt-6 space-x-4">
                    {github ? (
                        <Link
                            href={`https://github.com/${github}`}
                            target="_blank"
                        >
                            <FaGithub
                                size={30}
                                className="text-gray-900 hover:text-gray-700"
                            />
                        </Link>
                    ) : (
                        <FaGithub size={30} className="text-gray-400" />
                    )}
                    {linkedin ? (
                        <Link
                            href={`https://linkedin.com/in/${linkedin}`}
                            target="_blank"
                        >
                            <FaLinkedin
                                size={30}
                                className="text-blue-600 hover:text-blue-500"
                            />
                        </Link>
                    ) : (
                        <FaLinkedin size={30} className="text-gray-400" />
                    )}
                </div>
            </div>
        </div>
    );
}
