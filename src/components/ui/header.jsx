import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'


const Head = () => {
    const navigate = useNavigate();
    const user = true;
  return (
    <nav className='py-4 flex justify-between items-center'>
        <Link to= "/"> <img src="/tlogo.png" alt=" Trimm.r" className='h-20'/> </Link>

        <div>
            {!user ?
            <Button onClick={()=>navigate("/auth")} > Login</Button> : 
            (
            <DropdownMenu>

                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>

            </DropdownMenu>
            )
            }
        </div>
    </nav>
  )
}

export default Head