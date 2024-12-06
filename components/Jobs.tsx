import globallogicLogo from "@/public/img/logos/globallogicLogo.png";
import img101realtorLogo from "@/public/img/logos/101realtorLogo.png";

const jobs = [
    {
        logo: globallogicLogo.src,
        name: "Hitachi GlobalLogic",
        position: "Software Engineer",
        year: "Feb 2024 - May 2024",
        location: "Noida, UP",
        description: "• Architected an AI-based user story creation tool in VSCode, reducing project setup time by 30%.• Spearheaded front-end development with React.js, boosting interface load speed by 40% and increasing overall user satisfaction.• Partnered with cross-functional teams to deploy new features, elevating user productivity by 25%"
    },
    {
        logo: img101realtorLogo.src,
        name: "101 Realtor Pvt. Ltd.",
        position: "Full Stack Developer",
        year: "Jun 2021 - Sept 2023",
        location: "Gurgaon, HR",
        description: "• Engineered a full-stack web solution using Django, expanding the company's digital reach and generating a 20% increase in customer inquiries. • Optimized SQL databases to streamline data retrieval, reducing query processing time by 50%. • Implemented SEO tactics, leading to a 20% improvement in search engine visibility and organic traffic."
    },
]

export default function Jobs() {
    return (
        <div className="flex flex-row gap-10 w-1/2 mx-auto my-20">
            <div className="flex w-[1px] bg-white/10">
                <div className="sticky top-20 block bg-gradient-to-b from-transparent to-white h-20 w-full"></div>
            </div>
            <div className="flex flex-col gap-10">
                { jobs.map(job => (
                    <div className="flex flex-col">
                        <div className="flex my-2">
                            <img className="h-10 w-auto" src={ job.logo } alt="Company Logo" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-md font-medium">{ job.name }</p>
                            <p className="text-3xl font-medium my-2">{ job.position }</p>
                            <p className="text-sm">{ job.year } &nbsp;&#x2022;&nbsp; { job.location }</p>
                            <p className="text-white/50 text-sm">{ job.description }</p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}