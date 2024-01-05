
'use client'
import axios from "axios"
import Table from "../components/Table"
import { useEffect, useState } from "react"
import { API_URL } from "../constant"

export type TDriver = {
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
    const [drivers, setDrivers] = useState<TDriver[]>([])

    const url = `${API_URL}/all/driver`

    useEffect(() => {
        axios.get(url).then((res) => {
            const data = res.data

            if(data.success === true) {
                setDrivers(data.vendors)
            } else {
                setDrivers([])
            }
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <Table key={"drivers"} for_data={"All Driver"} data={drivers} />
    )
}

export default AllDrivers
