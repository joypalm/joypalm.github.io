import ContainerComponent from "../basis/ContainerComponent.tsx";

type People = {
    name: string;
    image: string;
}

function PeopleCard({people}: {people: People}) {
    return (
        <div className={"bg-white/80 w-[120px] px-2 pt-2 pb-0 rounded flex flex-col"}>
            <img src={people.image} alt=""/>
            <div className={"font-pixel font-bold text-[1.2rem]"}>
                { people.name }
            </div>
        </div>
    )
}

export default function TeamComponent() {

    const peoples: People[] = [
        {
            name: "Lei",
            image: "/team/imgs/people/lei-1@2x.png",
        },
        {
            name: "Sinna",
            image: "/team/imgs/people/team-sinna-1@2x.png",
        },
        {
            name: "Nova",
            image: "/team/imgs/people/team-nova-1@2x.png",
        },
        {
            name: "April",
            image: "/team/imgs/people/team-april-1@2x.png",
        },
        {
            name: "Thea",
            image: "/team/imgs/people/team-thea-1@2x.png",
        },
        {
            name: "Yizhe",
            image: "/team/imgs/people/yizhe-1@2x.png",
        }
    ]

    const mainCanvas = (
        <div className={"min-h-0 flex-1 w-full p-4 md:pl-12 relative flex flex-col md:flex-row overflow-auto"}>
            <div className={"flex-1 h-full p-4 text-white font-pixel"}>
                <div className={"w-full h-full bg-black/70 flex flex-col items-center justify-center"}>
                    <div className={"p-4 flex flex-col gap-4"}>
                        <p className={"text-[3rem] font-bold text-shadow-lg"}>
                            Hooli.HK
                        </p>
                        <p className={"text-[1.5rem]"}>
                            歡迎來到 Hooli.hk，這是一個充滿創意和熱情的大家庭！我們是一群來自不同行業、背景豐富的「腦洞玩家」，由前後端開發、市場金融、醫療科技、智能系統、人際交互等多領域的專業人才組成。我們的DNA是創新，我們的使命是用科技連接世界，以人為本，解決生活中最有趣也最重要的問題。
                        </p>
                    </div>
                </div>
            </div>
            <div className={"flex-1 p-4 h-fit grid gap-6 grid-cols-[repeat(auto-fit,minmax(105px,1fr))]"}>
                {
                    peoples.map((people, index) => (
                        <PeopleCard key={index} people={people} />
                    ))
                }
            </div>
        </div>
    )

    return (
        <ContainerComponent mainCanvas={mainCanvas} currentPage={"Team"}/>
    )
}