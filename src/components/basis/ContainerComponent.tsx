import MenuComponent from "./MenuComponent.tsx";
import NavigationBar from "./NavigationBarComponent.tsx";
import FooterComponent from "./FooterComponent.tsx";

function LeftSideComponent({currentPage}: {currentPage: string}) {
    return (
        <div className={"relative z-20 w-full max-w-[220px] bg-[#1f868c] max-md:hidden"}>
            <div className="absolute z-0 right-[-50px] top-0 flex-initial bg-repeat-y bg-[url('/introduction/imgs/left-side.png')] h-full w-[130px]"></div>
            <div className={"relative z-20 h-full overflow-auto w-full flex flex-row items-start px-3 pt-10 pb-3"}>
                <MenuComponent currentPage={currentPage}/>
            </div>
        </div>
    )
}

export default function ContainerComponent({mainCanvas, currentPage}: {mainCanvas: React.ReactNode, currentPage: string}) {
    return (
        <div className={"h-screen w-screen"}>
            <div className={"w-full h-full relative"}>
                {
                    currentPage === "Home" && (
                        <img className={"absolute z-0 w-full h-full object-cover"} src="/introduction/imgs/background/background-light.png" alt=""/>
                    )
                }
                {
                    currentPage === "Team" && (
                        <img className={"absolute z-0 w-full h-full object-cover"} src="/team/imgs/background.png" alt=""/>
                    )
                }

                <div className={"w-full h-full min-h-0 min-w-0 overflow-hidden relative z-10 flex flex-row"}>
                    <LeftSideComponent currentPage={currentPage} />

                    <div className={"min-h-0 flex-1 flex flex-col relative"}>
                        <NavigationBar currentPage={currentPage}/>

                        {
                            mainCanvas
                        }

                        <FooterComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}