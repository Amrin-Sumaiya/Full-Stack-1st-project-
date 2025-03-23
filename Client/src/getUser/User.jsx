import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import {Link} from "react-router-dom"

const User = () => {
  const [users, setUser] = useState([])
    useEffect(()=>{
      const fetchData = async()=>{
        try{
        const response = await axios.get("http://localhost:8000/api/user");
        setUser(response.data)

        }catch (error){
          console.log("Error while fetching data", error);

        }
      };
      fetchData()
    },[])

    const deleteUser = async (userId) =>{
      await axios.delete(`http://localhost:8000/api/delete/user/${userId}`)
      .then((response)=>{
        setUser((prevUser)=>prevUser.filter((user)=>user.id !==userId))
        toast.success(response.data.message,{position:"top-right"})
      })
   
      .catch((error)=>{
        console.log(error);
      })
    }
  



  return (
    <div className='min-h-screen w-full flex flex-col items-center bg-gray-100 p-6'>

      {/* Button aligned to the left */}
      <div className="w-full text-left">
        <Link to="/add-user">
        <button className="bg-blue-500 text-white font-semibold border-2 border-blue-700 px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Add User +
        </button>
        </Link>
      </div>

      {/* Table */}
      <div className="w-full max-w-4xl mt-6 overflow-x-auto shadow-lg">
        <table className='w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden'>
        
          {/* Table Header */}
          <thead>
            <tr className="bg-white text-black">
              <th className='border border-gray-400 px-4 py-2'>SI</th>
              <th className='border border-gray-400 px-4 py-2'>Name</th>
              <th className='border border-gray-400 px-4 py-2'>Email</th>
              <th className='border border-gray-400 px-4 py-2'>Address</th>
              <th className='border border-gray-400 px-4 py-2'>Update</th>
              <th className='border border-gray-400 px-4 py-2'>Delete</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
  {users.map((user, index) => {
    return (
      <tr key={user.id || index} className="hover:bg-gray-100 transition duration-200">
        <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
        <td className="border border-gray-300 px-4 py-2 text-center">{user.name}</td>
        <td className="border border-gray-300 px-4 py-2 text-center">{user.email}</td>
        <td className="border border-gray-300 px-4 py-2 text-center">{user.address}</td>
        <Link to={`/update/`+user._id}>
        <td className="border border-gray-300 px-4 py-2 text-center cursor-pointer text-blue-600 hover:text-blue-800 transition">
          <FaEdit size={20} />
        </td>
        </Link>
        <td onClick={()=>deleteUser(user._id)} className="border border-gray-300 px-4 py-2 text-center cursor-pointer text-red-600 hover:text-red-800 transition">
          <FaTrashAlt size={20} />
        </td>
      </tr>
    );
  })}
</tbody>


        </table>
      </div>
      
    </div>
  )
}

export default User
