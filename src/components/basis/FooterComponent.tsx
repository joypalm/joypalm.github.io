
export default function FooterComponent() {
    return (
        <div className={"bg-white flex flex-row items-center justify-end h-[55px] px-3 py-2 gap-3"}>
            <div className={"h-full"}>
                <a href="https://www.comm.hkbu.edu.hk/comd-www/chinese/front/index.htm" target={"_blank"}>
                    <img className={"h-full object-scale-down"} src="/footer/hkbu.png" alt=""/>
                </a>
            </div>

            <div className={"h-full"}>
                <a href="https://www.hkstp.org/zh-cn/" target={"_blank"}>
                    <img className={"h-full object-scale-down"} src="/footer/hkstp.png" alt=""/>
                </a>
            </div>
        </div>
    )
}