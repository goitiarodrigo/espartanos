import TeamsResults from "./TeamsResults"


const Table = () => {
    return (
        <div className="h-5/6 lg:w-5/6 w-full border-2 border-[#ffffff73] rounded-md backdrop-blur-sm flex flex-col justify-start items-center">
            <div className="flex justify-center items-center">
                <div className="rounded-full  h-44 w-44 flex justify-between items-center">
                    <img className="mb-36"  src="/src/assets/escudo.png" alt="" />
                </div>
            </div>
            <div className="w-full flex flex-col gap-16 overflow-auto pt-7 -mt-12">
                <TeamsResults />
                <TeamsResults />
                <TeamsResults />
                <TeamsResults />
                <TeamsResults />
                <TeamsResults />
                <TeamsResults />
            </div>
        </div>
    )
}

export default Table