function Header(props : {top:string, bottom:string, img:string, background:string}) {
    return (
        <div className="mx-4 pt-4 flex flex-row justify-between items-center">
            <div>
                <h1 className="text-white font-bold ">{props.top}</h1>
                <h6 className="text-white">{props.bottom}</h6>
            </div>
            <button className={`p-3 rounded-full ${props.background}`}>
                <img className=" w-[20px] invert" src={props.img}/>
            </button>
        </div>
    )
}

export default Header;