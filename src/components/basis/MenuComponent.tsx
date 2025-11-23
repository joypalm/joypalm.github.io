

export default function MenuComponent({currentPage}: {currentPage: string}) {

    const menus = [
        {title: "Home", imgSrc: "/navigationBar/imgs/home.png", link: "/"},
        {title: "Projects", imgSrc: "/navigationBar/imgs/project.png", link: "/#/projects"},
        {title: "Team", imgSrc: "/navigationBar/imgs/team.png", link: "/#/team"},
        {title: "Studies", imgSrc: "/navigationBar/imgs/study.png", link: "/#/studies"},
    ]

    function MenuItemComponent({title, imgSrc, link}: {title: string, imgSrc: string, link: string}) {
        return (
            <a href={link} className={`min-w-0 flex-1 flex flex-row md:gap-2 items-center text-white select-none hover:bg-black cursor-pointer px-1 py-1 ${currentPage === title ? "bg-black/30 font-bold" : "font-normal"}`}>
                <div className={"flex-none h-[2rem]"}>
                    <img className={"h-full"} src={imgSrc} alt=""/>
                </div>
                <div className={"min-w-0 font-pixel text-[1.2rem] md:text-[2rem] overflow-hidden text-ellipsis"}>
                    {
                        title
                    }
                </div>
            </a>
        )
    }

    return (
        <div className={"w-full flex flex-row md:flex-col gap-2"}>
            {
                menus.map((item, i) => {
                    return <MenuItemComponent key={i} title={item.title} imgSrc={item.imgSrc} link={item.link} />
                })
            }
        </div>
    )
}