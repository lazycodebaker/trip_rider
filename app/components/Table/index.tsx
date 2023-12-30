
import TRASH_ICON from '../../../assets/table_actions/trash.png'
import EDIT_ICON from '../../../assets/table_actions/edit.png'
import BLOCK_ICON from '../../../assets/table_actions/block.png'
import USER_ICON from '../../../assets/table_actions/user.png'
import SEARCH_ICON from '../../../assets/search_icon.png'

import Image from 'next/image'
import { RED_COLOR } from '@/contants'
import React from 'react'

type TableProps = {
    for_data: string
}

const Table: React.FC<TableProps> = ({for_data}) => {

    const rows = 50

    return (
        <div className="w-full h-full md:p-4 p-2 mb-20 border-round-custom">
           
            <div style={{
                backgroundColor: RED_COLOR,
            }} className="w-full md:h-20 h-28 text-white p-4 flex items-start md:items-center md:flex-row flex-col md:space-y-0 space-y-2 justify-between border-round-custom">
                <h1 className="text-2xl">{for_data}</h1>

                <div className="flex items-center h-full space-x-2">
                    <button className="bg-red-800 py-2 w-full px-2 rounded-lg text-sm font-normal md:font-semibold">Add User</button>
                    <div className="rounded-custom relative">
                        <div className="rounded-custom bg-red-800 absolute h-full px-4 flex items-center justify-center">
                            <Image src={SEARCH_ICON} alt="Search Icon" className="w-6" />
                        </div>
                        <input type="text" placeholder="Search User" className="bg-white ml-10 outline-none hover:outline-none focus:outline-none placeholder:text-sm text-black px-6 py-2 rounded-full" />
                    </div>
                </div>
            </div>

            <div className="w-full h-full bg-white overflow-y-scroll overflow-x-scroll" >
                <table className="w-full">
                    <thead className="sticky top-0 w-full bg-gray-100 ">
                        <tr className="text-left w-full">
                            <th className="text-sm font-semibold px-4 py-2">User Name</th>
                            <th className="text-sm font-semibold px-4 py-2">Email</th>
                            <th className="text-sm font-semibold px-4 py-2">Phone No.</th>
                            <th className="text-sm font-semibold px-4 py-2">Wallet Balance</th>
                            <th className="text-sm font-semibold px-4 py-2">Total Trips</th>
                            <th className="text-sm font-semibold px-4 py-2">Action Buttons</th>
                        </tr>
                    </thead>
                    <tbody className="text-center text-sm">
                        {Array(rows).fill(0).map((_, index) => (
                            <tr key={index} className="border-b h-10  px-2 border-gray-200 hover:bg-gray-100">
                                <td className="px-4 py-2 flex items-center">
                                    <Image src={USER_ICON} alt="Search Icon" className="w-8" />
                                    <span className="ml-2">Jhon Doe</span>
                                </td>
                                <td className="px-4 py-2">Jhondoe321@gmail.com</td>
                                <td className="px-4 py-2">999 999 9999</td>
                                <td style={{
                                    color: RED_COLOR
                                }} className="px-4 py-2">2000</td>
                                <td className="px-4 py-2">32</td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center justify-between">
                                        <button className="flex flex-col items-center justify-center space-y-1">
                                            <Image src={TRASH_ICON} alt="Trash Icon" className="w-5" />
                                            <p className="text-gray-600 text-xs">Delete</p>
                                        </button>
                                        <button className="flex flex-col items-center justify-center space-y-1">
                                            <Image src={BLOCK_ICON} alt="Block Icon" className="w-5" />
                                            <p className="text-gray-600 text-xs">Block/Unblock</p>
                                        </button>
                                        <button className="flex flex-col items-center justify-center space-y-1">
                                            <Image src={EDIT_ICON} alt="Edit Icon" className="w-5" />
                                            <p className="text-gray-600 text-xs">Edit</p>
                                        </button>
                                    </div>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table