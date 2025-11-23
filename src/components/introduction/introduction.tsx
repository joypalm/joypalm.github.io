import "../../assets/introduction/introudction.css"
import ContainerComponent from "../basis/ContainerComponent.tsx";

export default function IntroductionComponent() {

    const mainCanvas = (
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
    )

    return (
        <ContainerComponent mainCanvas={mainCanvas} currentPage={"Home"}/>
    )
}