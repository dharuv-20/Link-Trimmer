import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { RiseLoader } from 'react-spinners'
import Error from './error'

import { useState } from 'react'

import * as Yup from 'yup'
import useFetch from '@/hooks/usefetch'

import { useEffect } from 'react'
import { login } from '@/db/authApi'
import { UrlState } from '@/context'

import { useNavigate, useSearchParams } from 'react-router-dom'






const Login = () => {

    const [errors, setErrors] = useState([])

    const [formData, setFormData]= useState({
        email : "",
        password : ""
    })

    const handelInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}))
    }

    const {data,error , loading, fn:fnlogin }=useFetch(login,formData);
    const {fetchUser}=UrlState();

    const navigate = useNavigate();
    let [serchParams, setSearchParams] = useSearchParams();
    const longLink = serchParams.get("createNew");


   

    useEffect(() => {
      // console.log(data, error);
       if (error === null && data) {
          // Navigate to the dashboard or another page upon successful login
          navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
          fetchUser();
       }
    }, [data, error]);


    const handlelogin =async () => {
        setErrors([]);
        try {
            const schema= Yup.object().shape({
                email: Yup.string().email("Invalid email format").required("Email is required"),
                password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
            });
            await schema.validate(formData, { abortEarly: false });
            //api call
            await fnlogin();


            
        } catch (e) {
            const newErrors = {}
            e?.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setErrors(newErrors);
            console.log(newErrors);
            // setErrors(e.errors);
            
        }
    }




  return (
    <Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>to your account if you already have one</CardDescription>
    {error && <Error message={error.message}/>}
  </CardHeader>
  <CardContent className="space-y-2">
    <div className='space-y-1'>
    <Input name="email" placeholder="Enter Your Email" type="email" onChange={handelInputChange}/>
    {errors.email && <Error message={errors.email}/>}
    
    </div>
    <div className='space-y-1'>
    <Input name="password" placeholder="Enter Your Password" type="password" onChange={handelInputChange}/>
    {errors.email && <Error message={errors.password}/>}
    </div>
</CardContent>
  <CardFooter>
    <Button onClick={handlelogin} >{loading ? <RiseLoader   color="#24d8b2"
  size={7} /> : "Login"}</Button>
  </CardFooter>
</Card>
  )
}

export default Login