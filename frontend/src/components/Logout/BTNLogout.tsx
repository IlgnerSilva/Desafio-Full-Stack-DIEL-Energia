export default function BTNLogout(){
    function Logou(){
        localStorage.clear()
        setTimeout(()=> {window.location.href = '/'},1000)
    }
    return(
        <button 
            className=" m-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            onClick={()=> Logou()}>Logout</button>
    )
}