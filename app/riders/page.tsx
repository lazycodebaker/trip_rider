
'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constant";
import Table from "../components/Table";

/*
_id: "658bcef3501b63902fc3e492"
birthday: "23-02-2000"
createdAt: "2023-12-27T07:14:59.160Z"
email: "ali@gmail.com"
gender: "Male"
isBlock: false
isVerified: true
loginType: ""
mobileNumber: "9956987887"
name: "vidhushi"
otp: "1069"
profilePicture: ""
role: "user"
status: "pending"
wallet: 0
*/

type IUser = {}

const AllRiders = () => {
    const [riders, setRiders] = useState<any>([])

    const url = `${API_URL}/all/user`

    useEffect(() => {
        axios.get(url).then((res) => {
            const data = res.data

            if (data.success === true) {
                setRiders(data.vendors)
            }
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <Table key={"riders"} data={riders} for_data={"All Riders"} />
    )
}

export default AllRiders
