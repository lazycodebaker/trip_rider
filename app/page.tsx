
'use client'

import { useEffect, useState } from "react";
import Table from "./components/Table";
import { API_URL } from "./constant";
import axios from "axios";

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

// using typescript + zod would be much beneficial here 
// we can use the types of the data as table column for proper use 

// i have created a component named table which will render data according to props passed 

export default function Home() {
  const [riders, setRiders] = useState<any>([])

  const url = `${API_URL}/all/user`

  useEffect(() => {
    axios.get(url).then((res) => {
      const data = res.data

      if (data.success === true) {
        setRiders(data.vendors)
      } else {
        setRiders([])
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
