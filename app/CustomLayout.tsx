
'use client'

import { RED_COLOR } from "@/contants"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import React, { ReactNode } from "react"


export type Children = {
    children: ReactNode | ReactNode[]
}

export type BarProps = {
    isSidebarOpen: boolean
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const CustomLayout: React.FC<Children> = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(true)

    return (
        <section className="w-full h-screen">
            <div className="flex h-full w-full">

                <div style={{
                    backgroundColor: RED_COLOR
                }} className={`lg:w-1/4 md:w-1/3 w-2/3 lg:relative absolute ${isSidebarOpen ? 'left-0' : '-left-full'} z-50 sm:px-2 px-4 top-0 h-full `}>
                    <Sidebar />
                </div>

                <div className="w-full ">
                    <Topbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                    <div className="w-full h-screen">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomLayout