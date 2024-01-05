
'use client'

import { useEffect, useState } from "react"
import Table from "../components/Table"
import { TData } from "../drivers/page"
import { API_URL } from "../constant"
import axios from "axios"

const AllVendors: React.FC = () => {
    const [data, setData] = useState<TData[]>([])


    return (
        <Table for_data={"All Vendors"}   />
    )
}

export default AllVendors



