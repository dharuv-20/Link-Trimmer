import Head from '@/components/ui/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'


const AppLayout = () => {
  return (
    <div>
        <main className='min-h-screen container mx-auto px-4'>
            <Head/>
            <Outlet />
        </main>

        <footer className='border-t mt-8 py-4 text-center text-sm bg-gray-700 text-white'>
            &copy; {new Date().getFullYear()} Link Shortener. All rights reserved.
        </footer>
    </div>
  )
}

export default AppLayout