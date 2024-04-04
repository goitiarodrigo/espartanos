

const TeamsResults = () => {
    return (
        <div className="flex lg:w-10/12 w-full px-1">
            <div className="w-0 h-0 
                border-t-[20px] border-t-transparent
                border-r-[15px] border-r-white
                border-b-[20px] border-b-transparent">
            </div>
            <div className="bg-white w-full h-[40px] relative flex justify-between items-center font-sans text-[9px]">
                <div className="flex items-center font-bold">
                    <img className="w-14" src='/src/assets/espartano.png' alt="escudo" />
                    <span>LOS ESPARTANOS</span>
                    
                </div>
                <div className="font-bold">
                    <span className="p-2 border-black border-[1px]">2</span>
                    <span className="px-2">VS</span>
                    <span className="p-2 border-black border-[1px]">0</span>
                </div>
                <div className="flex items-center font-bold">
                    
                    <span>EL OTRO CLUB</span>
                    <img className="h-12" src='/src/assets/generico.png' alt="escudo" />
                </div>
                <div className="absolute flex w-3/6 marker">
                    <div className="w-0 h-0 
                        border-t-[45px] border-t-transparent
                        border-r-[15px] border-r-black
                        border-b-[45px] border-b-transparent">
                    </div>
                    <div className="h-[90px] w-full bg-black flex flex-col justify-between items-center py-1">
                        <span className="text-white text-xs">
                            Partido de liga
                        </span>
                        <span className="text-white text-xs">
                            Domingo 7 a las 14:50
                        </span>
                    </div>
                    <div className="w-0 h-0 
                        border-t-[45px] border-t-transparent
                        border-l-[15px] border-l-black
                        border-b-[45px] border-b-transparent">
                    </div>
                </div>
            </div>
            <div className="w-0 h-0 
                border-t-[20px] border-t-transparent
                border-l-[15px] border-l-white
                border-b-[20px] border-b-transparent">
            </div>

        </div>
    )
}

export default TeamsResults