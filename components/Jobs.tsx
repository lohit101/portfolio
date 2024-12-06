const jobs = [
    {
        logo: "data:image/png;base64,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",
        name: "Google",
        position: "AI/ML Engineer",
        year: "2023 - Now",
        location: "Silicon Valley, SF",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsum, asperiores ex mollitia sapiente voluptatem. Porro odio veniam accusantium obcaecati!"
    },
    {
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFZElEQVR4nO2dW4hWVRTHf3PRjOpBumfRFcnRtOgxgggpKrpbvpSRYVD0UXSVpsLqoaJ5GYoioqkgooyKSoJuOGY3aSAzKTDH7j1UY0WBY5krFm3hOMzkd87Ze3/rnLP/8EcYnGGv9eOcs89ae+8DSUlJSUlJSUlJzVQP0AdcBCwHngTeBzYAo8BWYLvzVvezDe7/DLnf0d+d4/5WUgEdA1wNrATGAPHkP4C3gNuAk4HuRGdqHekStdkjgD35W+B+YHYC85+mAUuADyJCkCmst7jLgd4mwpnuQGwyAEIm+CvgemBvGqAuYCnwo4HEyx78PXCFG3MtNR94z0CiJafXAidQI+0FDAB/G0iuFPRfwAPuVlv5mdOHBhIqnjwCHEtFdYF7UZOa+XdgMRXTCgOJk8C+kwpISxOPGEiWRPLDlt/29eH9goEkSWQ/b/Fh3+3qTtJQv2ytcDloICnSYT+KEd1tIBlixHd0GsYiA0kQQ97pei8dkb4g/WYgCWLMvwJHd2JGNWIgeJnC48Ab7nZ6KXCaq6UdAcx0/2oTbIFrVJ0OnAdcB9znofi5LvbMa8BA0mUSrweuAvYtGd+wh7Fo7SuK5hssFP7imku+XtKGPRUk5xFYXQZL6B8DszzH6QOIek3ofspSAwAkY2397hcgTl9AxF25QTQD+MEABHH+BjgwUKzDnhdSBHnAX2MAgmTm+2cSTj6BqJeFWB2yxQAIcX6JsPINZNT3apYlBiBIxidRLSDqy3wO0FIbdoTwCgFEZ6deNNsABMlYVzeWkU4ETgEW/o8/DfTc89KPv9cABMn4xIJxzHJ9ix0dHLu2tkupy63kEyP+s+Db+GFGpuyby74oLjAQhGT8UcE4VhkY+y7PLQPkBgMBSMbPFqy9iSG3ygB5xUAAkrFWmave0XyxKIwe12wRQ+4vEMdqA+POeqxoVbrPwOBlgm8uEIeFh/lEH18EyIUGBi4e7r+dnOZO5fOLAFleAyAzDIx5Mt9aBMhTNQCyj4ExT+YnigBZa2DgUlMg2knMrY0GBi41BaK1stz62sDApaZAtLeUWz437Ccg7JaDn4sA2W4AgNT0Chm3DGTQrSac2YZ1xWQedeX421mHrlBobnMr1v7AaCv82tRBkRb25dZ3DQVyaoSYdcKUW180FMiyCDHrK0VurWkokIEIMWsFOreGGgpkVYSYHy8ysP6GAvkyQsxauM2txQ0EMj3SVgvdCphbcxoIZK7lBpW+VP3UMCAXRyqbdFle5GAJyO3WF4rfEmGACv2SNn1czvH35vjb6rcjxHtjFe6pTSou9lFSnxsIQmoC5DM86B4DgUhNgNzlA8g8A4FITYCUvl3t0rsGgpGKA9FNQLU7ZKZVYSB6BqU39RjZ9NmqKJAtIQ44axkIrFVRINcSQNMiVUKlZkBGQ54MFKsCLDUCovWxYOpy28oSENo+iyX4Yf5alt+WrhDaWXsV7RB/Pewx3bLw3xUsqt4OHfHXqsgzZF0nvtRzlGu2JCDsloOxTn5BYWHkLWMt41eI5uIsOiw9eyQBofCm1CB6MF0hPIQh6Vz7sQbfsoYsfrZCi2fPNBDI0xZhZK+UFQ0CMmgZRlaauH9qDGSHO5a8Ujo7wHtKywAQ3WxzDhXVwcCbNQKyGjiciqvHraTfVmEg4y4GU581Kiv9PMTrFQTyjqtw11aLSiy+a0UEssmdiNQI6VTxXOATg0A2uoOjG/ld9W73ZZtX2yxStgIB0U06r7mx1PZz3UXO1e13fZadkYCsd8XRQwPFVBsd4r5VsnLCIThlgehxf88BV7qzfJMKan/gjAI9al1+c5Pr2xyQsp+UlJSUlJSUREP1LzMXzS4A18L9AAAAAElFTkSuQmCC",
        name: "Facebook",
        position: "Software Engineer",
        year: "2021 - 2023",
        location: "Seattle, WA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium quo similique explicabo officiis quod quam vero, accusantium eos laudantium consequuntur earum optio unde architecto ratione sequi totam. Deleniti, nesciunt."
    },
    {
        logo: "data:image/png;base64,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",
        name: "GitHub",
        position: "Software Development Engineer",
        year: "2019 - 2021",
        location: "Detroit, MI",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi eum minus molestiae et eos sunt rem, vitae adipisci aliquid neque amet. Exercitationem, provident fugit reiciendis impedit placeat voluptatum sequi!"
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
                            <img className="invert h-12 w-auto" src={ job.logo } alt="Company Logo" />
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