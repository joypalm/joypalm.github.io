import ContainerComponent from "../basis/ContainerComponent.tsx";

export default function StudiesComponent() {

    const mainCanvas = (
        <div className={"min-h-0 flex-1 w-full px-4 py-20 md:pl-12 relative overflow-auto font-pixel text-[2rem] flex flex-col items-center gap-5"}>
            <img className={"max-w-[350px] w-full"} src="/studies/imgs/logo.png" alt=""/>
            <p className={"w-full max-w-[1024px] text-center font-bold"}>
                Dance your fingers to the music
            </p>
            <img className={"max-w-[1024px] w-full mt-10 mb-5"} src="/studies/imgs/1.png" alt=""/>
            <div className={"mb-10 flex flex-col gap-2"}>
                <div className={"w-full text-center text-[1.5rem] font-bold"}>
                    Demonstration of hand gesture interaction
                </div>
                <video controls className={"max-w-[1024px] w-full"}>
                    <source src="/studies/videos/palm.mp4" type="video/mp4" />
                </video>
            </div>

            <p className={"w-full max-w-[1024px]"}>
                Our product is an app that guides the elderly through a series of hand gestures in sync with music and visual cues, aiming to improve their hand dexterity and cognitive control.
            </p>
            <img className={"max-w-[1024px] w-full my-10"} src="/studies/imgs/2.png" alt=""/>
            <div className={"flex flex-col"}>
                <p className={"w-full max-w-[1024px] font-bold"}>
                    Game Interaction
                </p>
                <p className={"w-full max-w-[1024px]"}>
                    imitating a real-life clapping game through interaction with mirror feedback and visual cues for easy understanding.
                </p>
            </div>
            <div className={"flex flex-col"}>
                <p className={"w-full max-w-[1024px] font-bold"}>
                    Self-achievement
                </p>
                <p className={"w-full max-w-[1024px]"}>
                    providing step-by-step guidance to assist the elderly in accomplishing relatively challenging gestures.
                </p>
            </div>
            <img className={"max-w-[350px] w-full"} src="/studies/imgs/hkstp.png" alt=""/>
        </div>
    )

    return (
        <ContainerComponent mainCanvas={mainCanvas} currentPage={"Studies"}/>
    )
}