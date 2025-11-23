import MenuComponent from "./MenuComponent.tsx";


export default function NavigationBar({currentPage}: {currentPage: string}) {
    return (
        <div className={"w-full flex flex-col"}>
            <div className={"bg-[#ce6b54] h-32 w-full flex flex-col  pl-12"}>
                <div className={"flex-1 min-h-0 flex flex-row items-center"}>
                    <div className={"h-full py-2 [@media(min-height:550px)]:hidden"}>
                        <img className={"max-w-full max-h-full object-scale-down"} src="/introduction/imgs/big-logo.png" alt=""/>
                    </div>

                    <div className={"h-full flex-1 flex flex-col items-end py-1"}>
                        <img className={"h-full object-contain"} src="/introduction/imgs/small-logo.png" alt=""/>
                    </div>
                </div>
                <div className="flex-initial bg-repeat-x bg-[url('/introduction/imgs/head-symbol-line.png')] h-10 w-full"></div>
            </div>
            <div className="bg-repeat-x bg-[url('/introduction/imgs/head-light-pink.png')] h-24 w-full relative hidden [@media(min-height:550px)]:block">
                <div className={"absolute bottom-0 h-48 max-w-[50vw] flex items-end"}>
                    <img className={"max-w-full max-h-full object-scale-down"} src="/introduction/imgs/big-logo.png" alt=""/>
                </div>
            </div>
            <div className={"bg-[#8bcdce] border-t-3 border-b-3 border-[#e8fab6] md:h-12 md:pl-12 px-2"}>
                <img className={"object-scale-down max-md:hidden"} src="/introduction/imgs/dance-your-finger.png" alt=""/>

                <div className={"md:hidden"}>
                    <MenuComponent currentPage={currentPage}/>
                </div>
            </div>
        </div>
    )
}