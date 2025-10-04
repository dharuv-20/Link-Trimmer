import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Login from '@/components/login'
import Signup from '@/components/signup'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UrlState } from '@/context'


const Auth = () => {
  const [SearchParams] = useSearchParams();
  const longLink = SearchParams.get("createNew");
  const navigate = useNavigate();

  const {isAuthenticated,loading} = UrlState();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
    }
  }, [loading, isAuthenticated]);



  return (
    <div className="mt-10 flex flex-col items-center gap-7">
      <h1 className=' text-4xl font-extrabold' > {SearchParams.get("createNew")
          ? "Hold up! Let's login first.."
          : "Login / Signup"} </h1>

          <Tabs defaultValue="login" className="w-[350px]">
        <TabsList className="grid w-full grid-cols-2 h-10">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="signup">
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Auth