import React, { useState } from 'react'
import axios from 'axios'

const UserLilstAdd = () => {

    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{

            const tableData = new FormData()

            tableData.append("username", username)
            tableData.append("email", email)

            const response = await axios.post("http://localhost:5000/user/insert", tableData)
            if(response.data){
                setUsername("")
                setEmail("")
            }
        }

        catch(error){
            alert(error)
        }

    }
  return (
    <>
        <table onSubmit={(e)=>handleSubmit(e.target.value)} style={{border:'1px solid balck'}}>
            <tr>
                <th>USERNAME</th>
                <th>EMAIL</th>
            </tr>
        </table>
    </>
  )
}

export default UserLilstAdd