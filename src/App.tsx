import Table from "./components/Table"

function App() {

    return (
        <div className="h-screen w-screen bg-slate-950">
            <div className="bg-[url('/src/assets/fondo3.jpg')] h-full w-full bg-cover bg-center bg-no-repeat flex justify-center items-center">
                <Table />
            </div>
        </div>
    )
}

export default App
