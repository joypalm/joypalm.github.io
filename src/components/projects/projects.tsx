import ContainerComponent from "../basis/ContainerComponent.tsx";

type Project = {
    coverImage: string;
    title: string;
    description: string;
    link: string;
    others: string[];
    mainColor: string;
    secondaryColor: string;
    textColor: string;
};

function ProjectCard({project}: {project: Project}) {
    return (
        <div className={"w-full flex flex-col items-center py-4"}>
            <div className={"sm:w-4/10 w-full px-4 relative z-20 mb-[-80px]"}>
                <img src={project.coverImage} alt={project.title} className={"w-full h-auto mb-4"} />
            </div>
            <div className={`${project.mainColor} w-full pt-[100px] px-4 pb-10 md:pl-10 flex justify-center relative z-0 overflow-hidden`}>
                <div className="absolute z-0 top-0 flex-initial bg-repeat-x bg-[url('/projects/imgs/line-decorator.png')] h-[150px] w-full"></div>
                <div className={"relative z-10 flex flex-col gap-2 items-center max-w-[500px]"}>
                    <div className={`${project.textColor} font-pixel text-[2.2rem] font-bold`}>
                        {project.title}
                    </div>
                    <div className={`font-pixel text-[1.5rem]`}>
                        {project.description}
                    </div>
                    {
                        project.others.length > 0 && (
                            <div className={"w-full my-3 min-w-0 overflow-hidden flex flex-row gap-1 items-center"}>
                                {
                                    project.others.map(other => {
                                        return (
                                            <div>
                                                <img src={other} alt={""} className={"w-full object-scale-down"} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                    <a href={project.link} target={"_blank"} className={`w-full text-end font-bold text-[2rem] font-pixel ${project.textColor}`}>
                        More {">>"}
                    </a>
                </div>

                <div className={"rotate-20 w-[300px] h-[300px] absolute bottom-[-100px] left-[75%] md:left-[65%] " + project.secondaryColor}></div>
            </div>
        </div>
    )
}


export default function ProjectsComponent() {

const projects: Project[] = [
    {
        coverImage: "/projects/palm/imgs/main.png",
        title: "Palm “樂然指上“ 長者健腦遊戲",
        description: "這是一款專為提升長者認知與互動體驗設計的遊戲，通過音樂、手勢和語音的結合，提供沉浸式的娛樂與健腦活動，搭配 AI 技術進一步增強使用者體驗。",
        link: "/#/studies",
        others: [
            "/projects/palm/imgs/1.png",
            "/projects/palm/imgs/2.png",
            "/projects/palm/imgs/3.png",
            "/projects/palm/imgs/4.png",
        ],
        mainColor: "bg-[#eef7f8]",
        secondaryColor: "bg-[#38e0e3]",
        textColor: "text-[#1e868d]",
    },
    {
        coverImage: "/projects/hooli/imgs/main.png",
        title: "Podcast “博士之後” 播客欄目",
        description: "一檔專注於分享博士生活與職涯發展的訪談節目，通過與博士畢業生的深入對話，探索他們的求學經歷、生活故事及職業規劃，旨在為觀眾提供啟發與實用建議，無論你是學生、教育工作者，還是對科研與高等教育感興趣的聽眾，都能在這裡找到共鳴與收穫。",
        link: "https://www.xiaoyuzhoufm.com/podcast/661ca0ca48c40e2fb05a1ec8",
        others: [],
        mainColor: "bg-[#f7fde6]",
        secondaryColor: "bg-[#d8f77e]",
        textColor: "text-[#2e5aa8]",
    },
    {
        coverImage: "/projects/tianshuizhen/imgs/main.png",
        title: "Podcast “甜水鎮接待員” 播客欄目",
        description: " 一檔以生活隱喻與輕鬆談話為主的節目，通過角色扮演與故事分享，讓聽眾在繁忙的人生劇本中找到片刻的平靜與自我反思。節目以「甜水鎮接待員」為引導，探討人生中各種角色的多樣性，並鼓勵人們成為自己故事的主角，珍惜當下，演繹屬於自己的精彩人生。 ",
        link: "https://www.xiaoyuzhoufm.com/podcast/678351d4461a1d87924bb05e",
        others: [],
        mainColor: "bg-[#faf0ea]",
        secondaryColor: "bg-[#f2d6d0]",
        textColor: "text-[#ce6b54]",
    }
]


    const mainCanvas = (
        <div className={"min-h-0 flex-1 w-full relative overflow-auto"}>
            {
                projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))
            }
        </div>
    )

    return (
        <ContainerComponent mainCanvas={mainCanvas} currentPage={"Projects"}/>
    )
}