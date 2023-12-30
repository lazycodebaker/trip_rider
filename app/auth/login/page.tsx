import { RED_COLOR } from "@/contants"
import Image from "next/image"

import RIDER_LOGO from '../../../assets/logo.png'
import GOOGLE_LOGO from '../../../assets/google_logo.png'

const LoginPage: React.FC = () => {
    return (
        <section className="grid w-full h-screen sm:grid-cols-3 grid-cols-1">

            <div style={{
                backgroundColor: RED_COLOR
            }} className="w-full text-white h-full col-span-1 md:flex hidden items-center justify-start py-8 px-4 space-y-8 flex-col">
                <div>
                    <Image src={RIDER_LOGO} alt="Trip Rider" className="w-[336px]" />
                </div>
                <div className="space-y-4">
                    <h1 className="font-semibold text-4xl">Explore new ways to travel <br /> with Trip Rider</h1>
                    <p className="text-base opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque possimus sed facilis dolor quia, </p>
                </div>
            </div>

            <div className="w-full h-full px-4 col-span-2 flex items-center justify-center">
                <div className="text-center md:w-3/5 w-full space-y-4">
                    <div>
                        <h1 className="text-2xl font-semibold">Welcome Back !</h1>
                        <p className="text-sm">Welcome back, Lorem ipsum dolor sit ame</p>
                    </div>

                    <div style={{
                        backgroundColor: RED_COLOR
                    }} className="flex items-center py-2 md:mx-16 text-white space-x-2 rounded-md justify-center">
                        <Image src={GOOGLE_LOGO} alt="Trip Rider" className="" />
                        <h1>sign in with google</h1>
                    </div>


                    <div className="space-y-4">
                        <div className="flex flex-col items-start justify-center">
                            <label htmlFor="Email">Email</label>
                            <input type="text" placeholder="ex. email@domain.com" name="Email" id="Email" className="w-full border border-gray-300 rounded-md py-2 px-4" />
                        </div>

                        <div className="flex flex-col items-start justify-center">
                            <label htmlFor="Phone Number">Phone number <span style={{
                                color: RED_COLOR
                            }} className="text-sm">Why ?</span></label>
                            <input type="text" placeholder="ex. 0123456789" name="Phone Number" id="Phone Number" className="w-full border border-gray-300 rounded-md py-2 px-4" />
                        </div>

                        <div className="flex flex-col items-start justify-center">
                            <label htmlFor="Password">Password</label>
                            <input type="password" placeholder="ex. ********" name="Password" id="Password" className="w-full border border-gray-300 rounded-md py-2 px-4" />
                        </div>

                        <div style={{
                            backgroundColor: RED_COLOR
                        }} className="flex items-center py-2  text-white space-x-2 rounded-full justify-center">
                            Login
                        </div>

                        <h1 className="text-sm text-gray-500">Don't have an account ? <span style={{
                            color: RED_COLOR
                        }} className="text-sm">Sign up here</span></h1>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default LoginPage 