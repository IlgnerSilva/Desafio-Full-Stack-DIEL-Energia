export default function Buttons(setFilterItens: any) {
    return (
        <div>
            <button 
                onClick={()=>setFilterItens({filter: false})}
                type="button" 
                className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-2 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">All</button>
            <button 
                onClick={()=>setFilterItens({filter: false, active: true})}
                type="button" 
                className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">outstanding</button>
            <button
                onClick={()=>setFilterItens({filter: false, active: false})} 
                type="button" 
                className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">concluded</button>
        </div>
    )
}