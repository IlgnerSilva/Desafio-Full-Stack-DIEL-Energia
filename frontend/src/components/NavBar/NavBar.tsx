import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <nav className="bg-white w-full 2xl:container xl:mx-auto py-4 shadow-md">
            <div className='w-full flex justify-around flex-wrap'>
                <div className="">
                    <h1>ProductsGram &#123; &#125;</h1>
                    <Link to="/">Login</Link>
                    <Link to="/task">Task</Link>
                </div>
            </div>
        </nav>
    )
}