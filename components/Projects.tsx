import cryptowall from "@/public/img/cryptowall.png";
import webmsi from "@/public/img/webmsi.png";
import sikomobility from "@/public/img/sikomobility.png";
import allProjects from "@/public/img/allprojects.png";

import { ExternalLink } from "lucide-react";

const projects = [
    {
        img: cryptowall.src,
        name: "CryptoWall",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam reiciendis doloribus tenetur similique, ipsam deleniti quos ex corporis delectus voluptatum, eveniet ducimus labore. Repudiandae consequuntur illo aliquam nihil animi.",
        link: "https://cryptowall.live",
    },
    {
        img: webmsi.src,
        name: "WebMSI",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam reiciendis doloribus tenetur similique, ipsam deleniti quos ex corporis delectus voluptatum, eveniet ducimus labore. Repudiandae consequuntur illo aliquam nihil animi.",
        link: "https://webmsi.vercel.app",
    },
    {
        img: sikomobility.src,
        name: "Siko Mobility",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam reiciendis doloribus tenetur similique, ipsam deleniti quos ex corporis delectus voluptatum, eveniet ducimus labore. Repudiandae consequuntur illo aliquam nihil animi.",
        link: "https://sikomobility.com",
    },
]

export default function Projects() {
    return (
        // <div className="grid grid-cols-2 w-1/2 mx-auto gap-5">
        //     { projects.map(project => (
        //         <div className="flex flex-col border border-white/10 rounded-lg overflow-hidden">
        //             <div className="flex">
        //                 <img src={ project.img } alt="Screenshot" />
        //             </div>
        //             <div className="flex flex-col px-4 py-3 bg-zinc-800/20">
        //                 <p className="text-md my-2">{ project.name }</p>
        //                 <p className="text-white/50 text-sm">{ project.description }</p>
        //                 <a href={ project.link } className="text-xs mt-5">View Project</a>
        //             </div>
        //         </div>
        //     )) }
        // </div>
        <div className="grid grid-cols-2 w-1/2 mx-auto gap-5">
            { projects.map(project => (
                <a href={ project.link } target="_blank" className="group relative flex flex-col border border-white/10 rounded-lg overflow-hidden">
                    <div className="flex">
                        <img src={ project.img } alt="Screenshot" />
                    </div>
                    <div className="absolute -bottom-5 group-hover:bottom-0 flex flex-col px-4 py-3 bg-gradient-to-tr from-black via-transparent to-transparent w-1/2 transition-all">
                        <p className="text-sm font-medium drop-shadow-xl">{ project.name }</p>
                        {/* <p className="text-white/50 text-sm">{ project.description }</p> */}
                        <p className="opacity-0 group-hover:opacity-100 text-xs text-white/50 transition-all">View Project</p>
                    </div>
                </a>
            )) }
            <div className="group relative flex items-center justify-center rounded-lg overflow-hidden">
                <img src={ allProjects.src } alt="All Projects" className="absolute z-0 w-full opacity-20 group-hover:opacity-50 blur-sm group-hover:blur-none border border-white/10 overflow-hidden transition-all" />
                <a href="https://github.com/lohit101" target="_blank" className="relative z-10 flex flex-row gap-1 items-center justify-center text-xs text-white/50 hover:text-white border border-white/20 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm transition-all">View all projects <ExternalLink size={12} /></a>
            </div>
        </div>
    )
}