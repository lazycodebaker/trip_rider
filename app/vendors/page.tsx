
'use client'

import { useEffect, useState } from "react"
import Table from "../components/Table"
import { API_URL } from "../constant"
import axios from "axios"

const AllVendors: React.FC = () => {
    const [vendors, setVendors] = useState<any[]>([])

    const url = `${API_URL}/all/vendor`

    useEffect(() => {
        axios.get(url).then((res) => {
            const data = res.data

            console.log(data)

            if (data.success === true) {
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
        <Table key={"vendors"} data={vendors} for_data={"All Vendors"} />
    )
}

export default AllVendors



