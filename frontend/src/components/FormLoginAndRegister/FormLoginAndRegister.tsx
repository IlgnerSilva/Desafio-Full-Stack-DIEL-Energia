import React, { useState } from "react"
import { login } from "../../services/Authentication.service";

export default function FormLoginAndRegister() {
    const [credentials, setCredentials] = useState({email: '', password: ''});

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await login(credentials);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    return (
        <div className="main w-max m-auto mt-10">
            <div className="login">
                <h2 className="text-2xl mb-6">Login</h2>
                <form onSubmit={e => handleFormSubmit(e)}>
                    <div className="flex border rounded text-gray-500 mb-4">
                        <input 
                            className="outline-none px-2 h-full py-2 text-lg" 
                            type="email" 
                            placeholder="email" 
                            onChange={handleInputChange}
                            value={credentials.email}
                            name="email"
                            required/>
                    </div>

                    <div className="password flex border rounded text-gray-500 mb-4">
                        <input 
                            className="outline-none px-2 h-full py-2 text-lg"
                            type="password" 
                            placeholder="password"
                            onChange={handleInputChange}
                            value={credentials.password}
                            name="password"
                            required/>
                    </div>

                    <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
                        <div className="wrapper flex w-max mx-auto">
                            <input className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent" type="submit" value="Login" />
                        </div>
                    </div>
                </form>
            </div>

            <div className="register">
                <h2 className="text-2xl mb-6">Register</h2>
                <form>
                    <div className="flex border rounded text-gray-500 mb-4">
                        <input className="outline-none px-4 h-full py-2 text-lg" type="text" placeholder="username" />
                    </div>

                    <div className="flex border rounded text-gray-500 mb-4">
                        <input className="outline-none px-4 h-full py-2 text-lg" type="text" placeholder="email" />
                    </div>

                    <div className="password flex border rounded text-gray-500 mb-4">
                        <input className="outline-none px-4 h-full py-2 text-lg" type="password" placeholder="password" />
                    </div>

                    <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
                        <div className="wrapper flex w-max mx-auto">
                            <input className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent" type="button" value="Register" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}