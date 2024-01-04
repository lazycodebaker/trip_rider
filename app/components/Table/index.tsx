'use client'
import TRASH_ICON from '../../../assets/table_actions/trash.png'
import EDIT_ICON from '../../../assets/table_actions/edit.png'
import BLOCK_ICON from '../../../assets/table_actions/block.png'
import USER_ICON from '../../../assets/table_actions/user.png'
import SEARCH_ICON from '../../../assets/search_icon.png'

import Image from 'next/image'
import { RED_COLOR } from '@/contants'
import React, { use, useEffect } from 'react'
import { TVendor } from '@/app/drivers/page'

type TableProps = {
    for_data: string,
    data: TVendor[],
    setData?: React.Dispatch<React.SetStateAction<TVendor[]>>
}

const Table: React.FC<TableProps> = ({ for_data, data }) => {

    const [searchFilter, setSearchFilter] = React.useState<string>("")
    const [filteredData, setFilteredData] = React.useState<TVendor[]>([])

    useEffect(() => {
        // Function to filter data based on the searchFilter
        const filterData = () => {
            if (searchFilter.trim() === "") {
                setFilteredData(data);
            } else {
                const lowerCaseFilter = searchFilter.toLowerCase();
                const filtered = data.filter(item =>
                    Object.values(item).some(val => val?.toString().toLowerCase().includes(lowerCaseFilter)
                    )
                );
                setFilteredData(filtered);
            }
        };

        filterData();
    }, [searchFilter, data]);

    const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(e.target.value);
    };

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
                        <input value={searchFilter} onChange={(e) => {
                            handleSearchFilter(e)
                        }} type="text" placeholder="Search User" className="bg-white ml-10 outline-none hover:outline-none focus:outline-none placeholder:text-sm text-black px-6 py-2 rounded-full" />
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
                        {filteredData && filteredData.map((_data, index) => (
                            <tr key={index} className="border-b h-10 text-start px-2 border-gray-200 hover:bg-gray-100">
                                <td className="px-4 py-2 flex items-center">
                                    <img src={_data?.profileImage!} alt="Search Icon" className="w-10 h-10 rounded-full" />
                                    <span className="ml-2">{_data.name}</span>
                                </td>
                                <td className="px-4 py-2">{_data.email}</td>
                                <td className="px-4 py-2">{_data.mobileNumber}</td>
                                <td style={{
                                    color: RED_COLOR
                                }} className="px-4 py-2">{_data.wallet}</td>
                                <td className="px-4 py-2">{_data.otp}</td>
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
                {data?.length === 0 && <p className="text-center text-gray-600 text-sm">Loading ... </p>}
                {filteredData?.length === 0 && <p className="text-center text-gray-600 text-sm">No Data Found</p>}
            </div>
        </div >
    )
}

export default Table