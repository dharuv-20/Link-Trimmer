import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'  
import { useNavigate } from 'react-router-dom'



function LandingPage () {
  const [url, setUrl] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle URL shortening logic here
    if (!url) return; // Do nothing if the input is empty

    // Navigate to the /auth page with the URL as a query parameter
    navigate(`/auth?createNew=${encodeURIComponent(url)}`);
    setUrl(''); // Clear the input field after submission
  }

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <h1 className="text-7xl font-bold text-center mt-10">Welcome to Link Shortener</h1>
      <p className="text-center mt-2 text-2xl mb-6 ">Shorten your URLs easily and share them!</p>

      <form  onSubmit={ handleSubmit }
       className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input
        type="url" placeholder="Enter Your Looooong URL.." className="h-full flex-1 py-4 px-4"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        ></Input>
        <Button type="submit " variant="destructive" className=' font-bold py-2 px-4 h-full rounded w-full sm:w-1/4 bg-red-900'>Shorten</Button>

      </form>
      <img src="./banner.png" alt="" className='w-full my-11 md:px-11 ' />

      <h2 className='text-4xl font-semibold mb-4'>Frequently Asked Questions</h2>

            <Accordion type="multiple" collapsible className='w-full md:w-2/4'>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does the Trimrr URL shortener works?
          </AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account allows you to manage your URLs, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, geolocation data of the clicks
            and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
    
  )
}

export default LandingPage