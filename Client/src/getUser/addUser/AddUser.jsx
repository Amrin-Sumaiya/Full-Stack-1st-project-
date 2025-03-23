import axios from "axios";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom"


const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        address: "",
    })
   
    const navigate = useNavigate()

    const inputHandler = (e) =>{
        const {name, value} = e.target;
        console.log(name, value);


        setUser({...user, [name]: value });
       

    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:8000/api/user", user, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log("User created successfully:", response.data);
          navigate("/"); 
        } catch (error) {
          console.error("Error creating user:", error.response || error);
        }
      };




  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
    
        <div className="bg-white  p-6 rounded-lg shadow-lg w-80">
            <Link to="/">
        <button className="bg-gray-600 text-white px-8 py-1 rounded-md hover:bg-gray-500 transition duration-300"> <FaArrowLeft size={14} /> Back</button>
        </Link><br />
      <h2 className="text-2xl font-bold text-green-800 text-center mb-4 shadow-inner">ADD NEW USER</h2>

      {/* Form */}
      <form className="space-y-4" onSubmit={submitForm}>
        {/*name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={inputHandler}
            className="mt-1 w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
        </div>
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email 
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={inputHandler}
            className="mt-1 w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="name@example.com"
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="adddress" className="block text-sm font-medium text-gray-900">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={inputHandler}
            className="mt-1 w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
        </div>

 

        {/* Submit Button */}
        <button
          type="submit"
          className="h-14 w-24 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
    </div>

  );
};

export default AddUser;
