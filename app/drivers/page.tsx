
'use client'
import axios from "axios"
import Table from "../components/Table"
import { useEffect, useState } from "react"
import { API_URL } from "../constant"

export type TVendor = {
    __v: number
    _id: string
    address: string
    createdAt: string
    email: string
    isBlock: boolean
    isVerified: boolean
    loginType: string
    mobileNumber: string
    name: string
    otp: string
    profileImage: null
    profilePicture: string
    role: string
    status: string
    wallet: number
}

// get the serverprops data here as proops and pass to Table component
const AllDrivers: React.FC = () => {
    const [vendors, setVendors] = useState<TVendor[]>([])

    const url = `${API_URL}/all/driver`

    useEffect(() => {
        axios.get(url).then((res) => {
            const data = res.data

            if(data.success === true) {
                setVendors(data.vendors)
            } else {
                setVendors([])
            }
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <Table for_data={"All Driver"} data={vendors} setData={setVendors} />
    )
}

export default AllDrivers
