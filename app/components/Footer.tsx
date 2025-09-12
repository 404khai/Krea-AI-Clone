import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-[#2e2e2e] flex items-center justify-between w-full h-30'>
        <div className='flex items-center justify-center gap-4 w-50 h-[80%] '>
            <img className='rounded-xl' src="https://bytescale.mobbin.com/FW25bBB/image/mobbin.com/prod/content/app_logos/10d663d2-a71f-49a0-b378-453a1a50ca29.jpeg?f=png&w=50&q=85&fit=shrink-cover" alt="" />
            <h1 className='text-2xl text-white'>Krea AI</h1>
        </div>
        
        <div className='flex items-center justify-center w-70 h-[80%] text-white'>
            <h1>curated by</h1>
            <div className='flex items-center justify-end gap-1 w-[50%] h-full '>
                <svg width="139" height="64" viewBox="0 0 139 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none h-20 w-[43px] fill-text-primary" data-sentry-element="svg" data-sentry-source-file="MobbinLogo.tsx" data-sentry-component="MobbinLogo"><title>Mobbin</title><path d="M84.3504 64H48.1695V47.315L32.569 63.9989L0 63.9841V29.9515L28.31 0H67.4439V15.9214L82.6881 0H116.593V26.1874H139V64H99.1163V48.208L84.3504 64Z" data-sentry-element="path" data-sentry-source-file="MobbinLogo.tsx"></path></svg>
                <h1>Mobbin</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer