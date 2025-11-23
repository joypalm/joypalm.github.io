import "../../assets/introduction/introudction.css"
import NavigationBar from "../basis/NavigationBarComponent.tsx";
import MenuComponent from "../basis/MenuComponent.tsx";
import FooterComponent from "../basis/FooterComponent.tsx";

export default function IntroductionComponent() {
    return (
        <div className={"h-screen w-screen"}>
            <div className={"w-full h-full relative"}>
                <img className={"absolute z-0 w-full h-full object-cover"} src="/introduction/imgs/background/background-light.png" alt=""/>

                <div className={"w-full h-full min-h-0 min-w-0 overflow-hidden relative z-10 flex flex-row"}>
                    <div className={"relative z-20 w-full max-w-[220px] bg-[#1f868c] max-md:hidden"}>
                        <div className="absolute z-0 right-[-50px] top-0 flex-initial bg-repeat-y bg-[url('/introduction/imgs/left-side.png')] h-full w-[130px]"></div>
                        <div className={"relative z-20 h-full overflow-auto w-full flex flex-row items-start px-3 pt-10 pb-3"}>
                            <MenuComponent currentPage={"Home"}/>
                        </div>
                    </div>

                    <div className={"min-h-0 flex-1 flex flex-col relative"}>
                        <NavigationBar currentPage={"Home"}/>

                        <div className={"min-h-0 flex-1 w-full pl-10 relative"}>
                            <img className={"z-20 absolute bottom-0 [@media(min-width:550px)]:bottom-[-55px] [@media(min-height:550px)]:left-[-13%] [@media(min-width:550px)]:max-w-[65%] max-h-[65%] object-contain"} src="/introduction/imgs/old-people.png" alt=""/>
                            <img className={"absolute top-[35%] [@media(min-width:550px)]:top-[50%] left-[60%] max-w-[25%] max-h-[25%] object-contain"} src="/introduction/imgs/hands/hand-1.png" alt=""/>
                            <img className={"absolute top-[10%] right-[10%] [@media(min-width:550px)]:left-[50%] max-w-[25%] max-h-[25%] object-contain"} src="/introduction/imgs/hands/hand-2.png" alt=""/>
                            <img className={"absolute top-[5%] left-[40%] [@media(min-width:550px)]:left-[30%] max-w-[25%] max-h-[25%] object-contain"} src="/introduction/imgs/hands/hand-3.png" alt=""/>
                            <img className={"absolute top-[8%] left-[8%] max-w-[25%] max-h-[25%] object-contain"} src="/introduction/imgs/hands/hand-4.png" alt=""/>

                            <div className={"absolute bottom-[25vh] [@media(min-width:550px)]:bottom-[10vh] right-0 w-[25vw] h-[25vh] flex flex-col items-end justify-end"}>
                                <img className={"max-h-full max-w-full object-scale-down"} src="/introduction/imgs/question-man/man.png" alt=""/>
                            </div>
                        </div>

                        <FooterComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}