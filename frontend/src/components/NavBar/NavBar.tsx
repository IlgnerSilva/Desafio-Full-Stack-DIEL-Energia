import { Link } from "react-router-dom"
import BTNLogout from "../Logout/BTNLogout"

export default function NavBar(){
    return (
        <nav className="bg-white w-full 2xl:container xl:mx-auto py-4 shadow-md">
            <div className='w-full flex justify-around flex-wrap'>
                <div className="">
                    {
                        localStorage.getItem('username') ? (
                            <h1>Welcome <strong>{localStorage.getItem('username')}</strong></h1>
                        ): null} 
                    <Link className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" to="/">Login</Link>
                    <Link className=" bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" to="/task">Task</Link>
                    {localStorage.getItem('username') ? (
                        <BTNLogout />
                    ): null}
                </div>
            </div>
        </nav>
    )
}