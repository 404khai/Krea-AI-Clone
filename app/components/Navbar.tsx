"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Star, Settings, Image as ImageIcon } from 'lucide-react';
import { IoNotifications } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import GenerateCard from './GenerateCard';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='w-[95%] h-20 flex items-center justify-evenly justify-self-center'>

        <div className='w-100 h-full flex items-center justify-start gap-10'>
          <button className='md:hidden flex items-center justify-center text-[#4a4a4a]' onClick={() => setIsOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="h-5 w-5 iconify iconify--mynaui" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.392.032.851.044 1.416.05V3.752c-.565.005-1.024.017-1.416.049"></path></svg>
          </button>
          <svg aria-label="Krea Logo" className='max-md:hidden' width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"></path><path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"></path></svg>

          <div className='hidden md:flex w-fit flex items-center justify-center gap-2 h-full'>
            <Image
              src="/profileOrb.svg"
              alt="Context Axis"
              width={0}
              height={0}
              className="h-8 w-8"
            />

            <p className='text-[#b0b0b0]'>benevolentnimblebat</p>

            <ChevronDown className='text-[#b0b0b0]'/>
          </div>
          
        </div>
        
        <div className='hidden md:flex bg-[#f5f5f5] w-100 flex justify-evenly items-center rounded-2xl mx-auto backdrop-blur-2xl transition-[transform,opacity,scale,translate,background-color] select-none duration-[500ms] ease-[cubic-bezier(0,1,.35,1)]'>
          <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 bg-[#fff] bg-ho flex items-center inset-0 z-10 rounded-xl shadow-[0_1px_4px_0px_rgba(0,0,0,0.075)] dark:shadow-none'>
            <svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11.7354C2 10.4141 2 9.75338 2.18958 9.15972C2.35736 8.63437 2.63195 8.14939 2.99611 7.73524C3.40763 7.26724 3.97416 6.92732 5.10723 6.24748L8.70722 4.08748C9.90443 3.36916 10.503 3.01 11.142 2.86967C11.7073 2.74555 12.2927 2.74555 12.858 2.86967C13.497 3.01 14.0956 3.36916 15.2928 4.08748L18.8928 6.24748C20.0258 6.92732 20.5924 7.26724 21.0039 7.73524C21.3681 8.14939 21.6426 8.63437 21.8104 9.15972C22 9.75338 22 10.4141 22 11.7354V18.9118C22 20.0319 22 20.592 21.782 21.0198C21.5903 21.3961 21.2843 21.7021 20.908 21.8938C20.4802 22.1118 19.9201 22.1118 18.8 22.1118H18.2C17.0799 22.1118 16.5198 22.1118 16.092 21.8938C15.7157 21.7021 15.4097 21.3961 15.218 21.0198C15 20.592 15 20.0319 15 18.9118V15.7118C15 15.1518 15 14.8717 14.891 14.6578C14.7951 14.4697 14.6422 14.3167 14.454 14.2208C14.2401 14.1118 13.9601 14.1118 13.4 14.1118H10.6C10.0399 14.1118 9.75992 14.1118 9.54601 14.2208C9.35785 14.3167 9.20487 14.4697 9.10899 14.6578C9 14.8717 9 15.1518 9 15.7118V18.9118C9 20.0319 9 20.592 8.78201 21.0198C8.59027 21.3961 8.28431 21.7021 7.90798 21.8938C7.48016 22.1118 6.9201 22.1118 5.8 22.1118H5.2C4.0799 22.1118 3.51984 22.1118 3.09202 21.8938C2.71569 21.7021 2.40973 21.3961 2.21799 21.0198C2 20.592 2 20.0319 2 18.9118V11.7354Z" fill="currentColor"></path></svg>
          </Link>
          
          <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inset-0 z-20 m-auto"><path fillRule="evenodd" clipRule="evenodd" d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z" fill="currentColor"></path><rect x="2.75" y="3.86182" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"></rect><path d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </Link>

          <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
            <svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.263 7.17399C21.637 6.41199 20.506 6.30099 19.743 6.92499L18.5167 7.92894C18.2593 8.13966 18.1409 8.46318 18.1571 8.79542C18.1589 8.83351 18.16 8.872 18.16 8.91099V15.312C18.16 15.3533 18.1588 15.3941 18.1568 15.4344C18.14 15.7656 18.2584 16.0881 18.5146 16.2987L19.729 17.297C20.045 17.558 20.448 17.701 20.863 17.701C21.849 17.701 22.654 16.899 22.657 15.912L22.669 8.31399C22.67 7.89899 22.527 7.49299 22.263 7.17399Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12.6444 5.11182H5.68203C3.08003 5.11182 1.33203 6.93982 1.33203 9.66182V15.0618C1.33203 17.7838 3.08003 19.6118 5.68203 19.6118H12.6434C15.2474 19.6118 16.9964 17.7838 16.9964 15.0618V9.66182C16.9964 6.93982 15.2474 5.11182 12.6444 5.11182Z" fill="currentColor"></path><rect x="1" y="5.11182" width="16" height="15" rx="4" fill="currentColor"></rect></svg>
          </Link>
          
          <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
            <svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.82105 18.4485H7.83105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.8125 3.69873H12.8025" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><rect x="3.3868" y="5.14091" width="2.5" height="22.0199" rx="1.25" transform="rotate(-44.5361 3.3868 5.14091)" stroke="currentColor" strokeWidth="1.5"></rect><path d="M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z" fill="currentColor"></path></svg>
          </Link>

          <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
            <svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9472 14.4612C14.6244 14.8306 14.4629 15.0153 14.2819 15.1777C14.121 15.3219 13.9487 15.4529 13.7667 15.5693C13.5618 15.7004 13.3384 15.8077 12.8914 16.0223C11.8174 16.538 11.2804 16.7959 10.9271 16.705C10.6205 16.626 10.3693 16.4065 10.25 16.1132C10.1126 15.7753 10.2963 15.2086 10.6635 14.0752C10.8164 13.6035 10.8928 13.3677 10.9952 13.1471C11.0863 12.9511 11.193 12.7629 11.3144 12.5842C11.4511 12.383 11.6125 12.1983 11.9354 11.8289L17.0023 6.03138C17.076 5.94704 17.1129 5.90487 17.1574 5.88701C17.1966 5.87129 17.2398 5.86839 17.2807 5.87871C17.3273 5.89045 17.3695 5.92731 17.4538 6.00102L19.9838 8.21213C20.0681 8.28584 20.1103 8.3227 20.1281 8.36727C20.1438 8.40647 20.1467 8.44964 20.1364 8.4906C20.1247 8.53715 20.0878 8.57932 20.0141 8.66366L14.9472 14.4612Z" fill="currentColor"></path><path d="M20.8883 7.65066C20.8146 7.73499 20.7778 7.77716 20.7332 7.79503C20.694 7.81075 20.6508 7.81365 20.6099 7.80333C20.5633 7.79159 20.5211 7.75473 20.4368 7.68102L17.9096 5.47231C17.8253 5.3986 17.7831 5.36175 17.7652 5.31718C17.7495 5.27798 17.7466 5.23481 17.7569 5.19385C17.7687 5.14729 17.8055 5.10512 17.8792 5.02079L18.3305 4.50446C18.6354 4.15563 18.7878 3.98121 18.9511 3.87147C19.3968 3.57199 19.9685 3.53354 20.4502 3.77066C20.6267 3.85755 20.8012 4.00999 21.15 4.31486C21.4988 4.61972 21.6732 4.77216 21.783 4.93546C22.0824 5.3811 22.1209 5.95283 21.8838 6.43456C21.7969 6.61108 21.6444 6.7855 21.3396 7.13432L20.8883 7.65066Z" fill="currentColor"></path><path d="M9.5 18C9.5 18 7.2314 20.6818 6 20C4.7686 19.3182 8.43957 14.8136 8.43957 13.0357C8.43957 12.0802 5.54026 16.2053 3.75331 16.7185C0.87539 17.5452 7.17108 5 7.17108 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </Link>

          <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
            <svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.854L12 5.51603" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><circle cx="12.0001" cy="8.17831" r="2.12118" stroke="currentColor" strokeWidth="1.5"></circle><path d="M10.4869 10.1001L7.45996 21.4302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M17.2646 21.2366C17.3715 21.6368 17.1338 22.0479 16.7336 22.1548C16.3334 22.2617 15.9224 22.0239 15.8155 21.6238L17.2646 21.2366ZM14.2377 9.90652L17.2646 21.2366L15.8155 21.6238L12.7885 10.2937L14.2377 9.90652Z" fill="currentColor"></path><path d="M6.42188 16.1118C6.42188 16.1118 7.91228 17.3606 12.0006 17.3606C16.0889 17.3606 17.5793 16.1118 17.5793 16.1118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>
          </Link>

          <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inset-0 z-20 m-auto" xmlns="http://www.w3.org/2000/svg"><path d="M3 5C3 4.45 3.45 4 4 4H9.17C9.58 4 9.95 4.21 10.14 4.55L10.86 5.89C11.05 6.23 11.42 6.44 11.83 6.44H20C20.55 6.44 21 6.89 21 7.44V11C21 11.55 20.55 12 20 12H4C3.45 12 3 11.55 3 11V5Z"></path><rect x="3" y="7" width="18" height="12" rx="1"></rect><path d="M3.15 18.5C3.08 18.15 3.08 17.65 3.08 17H20.92C20.92 17.65 20.92 18.15 20.85 18.5H3.15Z" opacity="0.3"></path><path d="M5 20H19C19.8 20 20.2 20 20.5 19.8C20.7 19.7 20.9 19.5 21 19.2C21.05 19.1 21.08 19 21.1 18.5H2.9C2.92 19 2.95 19.1 3 19.2C3.1 19.5 3.3 19.7 3.5 19.8C3.8 20 4.2 20 5 20Z" opacity="0.5"></path></svg>
          </Link>
        </div>

        <div className='w-100 h-13 flex items-start justify-end gap-5 text-[#4a4a4a] md:items-center'>
          <button className='hidden md:flex w-20 h-[70%] flex items-center justify-center gap-1 rounded-xl bg-[#f5f5f5] text-sm'>
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" id="Gallery-Favourite--Streamline-Solar" height="15" width="15">
              <desc>
                Gallery Favourite Streamline Icon: https://streamlinehq.com
              </desc>
              <path fillRule="evenodd" clipRule="evenodd" d="M10.9375 6.875c-1.3258125 0 -1.98875 0 -2.4006250000000002 -0.411875C8.125 6.051237499999999 8.125 5.388325 8.125 4.0625s0 -1.9887374999999998 0.411875 -2.40061875C8.94875 1.25 9.6116875 1.25 10.9375 1.25s1.98875 0 2.4006250000000002 0.41188125C13.75 2.0737625 13.75 2.736675 13.75 4.0625s0 1.9887374999999998 -0.411875 2.4006250000000002C12.92625 6.875 12.263312500000001 6.875 10.9375 6.875Zm-0.9091875 -1.74000625C9.5503125 4.715893749999999 9.0625 4.15745625 9.0625 3.6237625c0 -1.1082 1.03125 -1.52195 1.875 -0.665875 0.84375 -0.856075 1.875 -0.442325 1.875 0.66586875 0 0.5337062499999999 -0.4878125 1.09214375 -0.9657499999999999 1.51124375 -0.372625 0.32666874999999995 -0.558875 0.49 -0.9092500000000001 0.49 -0.350375 0 -0.536625 -0.16333750000000002 -0.9091875 -0.49000625Z" fill="#000000" strokeWidth="0.625"></path>
              <path d="M13.68975 10.275875000000001c0.052187500000000005 -0.6405624999999999 0.059187500000000004 -1.4212500000000001 0.060125 -2.33975 0.00025 -0.24081249999999998 -0.195125 -0.436125 -0.4359375 -0.436125 -0.24081249999999998 0 -0.4359375 0.195375 -0.43618749999999995 0.43618749999999995 -0.0009375 0.9235 -0.00775 1.661375 -0.05725 2.268875 -0.052500000000000005 0.64475 -0.150875 1.1018124999999999 -0.3165 1.4496875l-1.645625 -1.4810625c-0.604375 -0.5439375 -1.5044374999999999 -0.598125 -2.1696874999999998 -0.130625l-0.173375 0.12187500000000001c-0.4623125 0.324875 -1.09125 0.2704375 -1.4908125 -0.129125l-2.4940499999999997 -2.4940625c-0.49779375000000003 -0.49775 -1.2962937499999998 -0.524375 -1.8260999999999998 -0.06075l-0.5820562499999999 0.50925c-0.0002 -0.15812500000000002 -0.0002 -0.32137499999999997 -0.0002 -0.49024999999999996 0 -1.3826874999999998 0.000925 -2.3758375000000003 0.10254374999999999 -3.13164375 0.099925 -0.7432562500000001 0.28998124999999997 -1.1913500000000001 0.621175 -1.52254375 0.33119375 -0.33119375 0.7792875 -0.52125 1.52254375 -0.62118125 0.6738375000000001 -0.09059375 1.5363250000000002 -0.10115 2.6953312499999997 -0.102375 0.24081249999999998 -0.00025624999999999997 0.43631250000000005 -0.1953875 0.43631250000000005 -0.4362125 0 -0.24081875 -0.1954375 -0.43615000000000004 -0.43624999999999997 -0.43589374999999997 -1.1428375 0.00119375 -2.08180625 0.012049999999999998 -2.81159375 0.11016875000000001 -0.8399625 0.11293125 -1.50276875 0.34859375 -2.02300625 0.86883125 -0.5202375 0.5202375 -0.7559 1.18304375 -0.86883125 2.02300625C1.2499875 5.07278125 1.24999375 6.124549999999999 1.25 7.4666250000000005v0.0339375c0 0.30675 0 0.5974999999999999 0.00120625 0.8723749999999999 0.004725 1.08075 0.027487499999999998 1.9510625000000001 0.15190625 2.6505625 0.12665625 0.712125 0.36483125 1.286125 0.8260375 1.747375 0.5202375 0.5201875 1.18304375 0.7558750000000001 2.02300625 0.8688125C5.07278125 13.75 6.12454375 13.75 7.4666250000000005 13.75h0.06675c1.3420625 0 2.393875 0 3.2145 -0.1103125 0.8399375 -0.1129375 1.5027499999999998 -0.34862499999999996 2.023 -0.8688125 0.1833125 -0.1833125 0.33387500000000003 -0.38712499999999994 0.456375 -0.614625 0.2778125 -0.515875 0.4019375 -1.137 0.4625 -1.880375Z" fill="#4a4a4a" strokeWidth="0.625"></path>
            </svg>
            Gallery
          </button>

          <button className='hidden md:flex w-20 h-[70%] flex items-center justify-center gap-1 rounded-xl bg-[#f5f5f5] text-[#4a4a4a] text-sm'>
            <BiSupport className='text-[15px]'/>
            Support
          </button>

          <button className='w-fit p-2 h-[70%] flex items-center justify-center rounded-xl bg-[#f5f5f5] text-[#4a4a4a]'>
            <IoNotifications />
          </button>

          <button className='w-fit p-2 h-[70%] flex items-center justify-center rounded-xl bg-[#f5f5f5] text-[#4a4a4a]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><title>sun_fill</title><g id="sun_fill" fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083.707.707a1 1 0 0 1-1.32 1.497l-.094-.083-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"></path></g></svg>
          </button>

          <Image
            src="/profileOrb.svg"
            alt="Context Axis"
            width={0}
            height={0}
            className="h-8 w-8"
          />
        </div>

        {/* <button aria-label="Theme" className="hover:bg-primary-200/75 dark:bg-primary-800/75 bg-primary-100/75 dark:hover:bg-primary-700/75 flex h-[30px] w-[30px] items-center justify-center rounded-lg text-black/70 backdrop-blur-lg transition-colors duration-150 ease-[cubic-bezier(.33,0,.2,1)] hover:text-black dark:text-white/80 dark:hover:text-white svelte-179jkjd"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><title>sun_fill</title><g id="sun_fill" fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083.707.707a1 1 0 0 1-1.32 1.497l-.094-.083-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"></path></g></svg></button> */}
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
          <div className="relative bg-white w-80 h-full p-4 flex flex-col overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </button>
              <div className="flex items-center gap-2">
                <ChevronDown className="text-gray-500" />
                <p className="text-gray-700">benevolentnimblebat</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#171717] text-[#171717] dark:text-primary-850 dark:bg-primary-150 relative flex aspect-square h-11 items-center justify-center rounded-[10px] opacity-100">
                <svg aria-label="Krea Logo" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"></path><path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"></path></svg>
              </div>

              <p>Home</p>
            </div>
            <p className="font-bold mb-2">Account</p>
            <div className="flex justify-between items-center mb-4">
              <GenerateCard
                logo={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7142857142857142" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-sparkles inset-0 m-auto h-5 w-5 fill-current transition-transform duration-200 ease-out group-hover:scale-110"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>}
                title="Upgrade"
                description=""
                background="bg-[#262626] text-white"
              />
              <button className="bg-blue-600 text-white text-sm font-medium rounded-full px-4 py-1">Get Pro</button>
              
            </div>
            <div className="flex justify-between items-center mb-4">
              
                <GenerateCard
                  logo={
                    <Image
                      src="/profileOrb.svg"
                      alt="logo"
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  }
                  title="Profile"
                  description=""
                  background="bg-[#f2f2f2] text-white"
                />
                <button className="bg-[#f2f2f2] text-sm font-medium rounded-full px-4 py-1">Open</button>
              
              
            </div>
            <div className="flex justify-between items-center mb-4">
              <GenerateCard
                logo={<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="text-black inset-0 m-auto h-5.5 w-5.5 transition-transform duration-200 ease-out group-hover:scale-110 iconify iconify--akar-icons" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269c0 .578-.396 1.074-.935 1.286q-.128.052-.253.106c-.531.23-1.162.16-1.572-.249a1.27 1.27 0 0 0-1.794 0L4.412 5.446a1.27 1.27 0 0 0 0 1.794c.41.41.48 1.04.248 1.572a8 8 0 0 0-.105.253c-.212.539-.708.935-1.286.935C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14c.578 0 1.074.396 1.286.935q.052.128.105.253c.231.531.161 1.162-.248 1.572a1.27 1.27 0 0 0 0 1.794l1.034 1.034a1.27 1.27 0 0 0 1.794 0c.41-.41 1.04-.48 1.572-.249q.125.055.253.106c.539.212.935.708.935 1.286c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269c0-.578.396-1.074.935-1.287q.128-.05.253-.104c.531-.232 1.162-.161 1.571.248a1.27 1.27 0 0 0 1.795 0l1.034-1.034a1.27 1.27 0 0 0 0-1.794c-.41-.41-.48-1.04-.249-1.572q.055-.125.106-.253c.212-.539.708-.935 1.286-.935c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269c-.578 0-1.074-.396-1.287-.935a8 8 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572a1.27 1.27 0 0 0 0-1.794l-1.034-1.034a1.27 1.27 0 0 0-1.794 0c-.41.41-1.04.48-1.572.249a8 8 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27Z"></path><path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></path></g></svg>}
                title="Settings"
                description=""
                background="bg-[#f2f2f2] text-white"
              />
              <button className="bg-[#f2f2f2] text-sm font-medium rounded-full px-4 py-1">Open</button>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold">Apps</p>
              <ChevronDown className="h-4 w-4" />
            </div>

            <div className="flex justify-between items-center mb-4">
              <GenerateCard
                logo={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inset-0 z-20 m-auto"><path fillRule="evenodd" clipRule="evenodd" d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z" fill="currentColor"></path><rect x="2.75" y="3.86182" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"></rect><path d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>}
                title="Image"
                description=""
                background="bg-[linear-gradient(0deg,#D0E3F1_0%,#294962_100%)] text-white"
              />
              <button className="bg-[#f2f2f2] text-sm font-medium rounded-full px-4 py-1">Open</button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <GenerateCard
                    logo={<svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.263 7.17399C21.637 6.41199 20.506 6.30099 19.743 6.92499L18.5167 7.92894C18.2593 8.13966 18.1409 8.46318 18.1571 8.79542C18.1589 8.83351 18.16 8.872 18.16 8.91099V15.312C18.16 15.3533 18.1588 15.3941 18.1568 15.4344C18.14 15.7656 18.2584 16.0881 18.5146 16.2987L19.729 17.297C20.045 17.558 20.448 17.701 20.863 17.701C21.849 17.701 22.654 16.899 22.657 15.912L22.669 8.31399C22.67 7.89899 22.527 7.49299 22.263 7.17399Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12.6444 5.11182H5.68203C3.08003 5.11182 1.33203 6.93982 1.33203 9.66182V15.0618C1.33203 17.7838 3.08003 19.6118 5.68203 19.6118H12.6434C15.2474 19.6118 16.9964 17.7838 16.9964 15.0618V9.66182C16.9964 6.93982 15.2474 5.11182 12.6444 5.11182Z" fill="currentColor"></path><rect x="1" y="5.11182" width="16" height="15" rx="4" fill="currentColor"></rect></svg>}
                    title="Video"
                    description=""
                    background="bg-[#ffa700] text-white"
              />
              <button className="bg-[#f2f2f2] text-sm font-medium rounded-full px-4 py-1">Open</button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <GenerateCard
                    logo={<svg width="18" height="18" className="inset-0 z-20 m-auto text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9472 14.4612C14.6244 14.8306 14.4629 15.0153 14.2819 15.1777C14.121 15.3219 13.9487 15.4529 13.7667 15.5693C13.5618 15.7004 13.3384 15.8077 12.8914 16.0223C11.8174 16.538 11.2804 16.7959 10.9271 16.705C10.6205 16.626 10.3693 16.4065 10.25 16.1132C10.1126 15.7753 10.2963 15.2086 10.6635 14.0752C10.8164 13.6035 10.8928 13.3677 10.9952 13.1471C11.0863 12.9511 11.193 12.7629 11.3144 12.5842C11.4511 12.383 11.6125 12.1983 11.9354 11.8289L17.0023 6.03138C17.076 5.94704 17.1129 5.90487 17.1574 5.88701C17.1966 5.87129 17.2398 5.86839 17.2807 5.87871C17.3273 5.89045 17.3695 5.92731 17.4538 6.00102L19.9838 8.21213C20.0681 8.28584 20.1103 8.3227 20.1281 8.36727C20.1438 8.40647 20.1467 8.44964 20.1364 8.4906C20.1247 8.53715 20.0878 8.57932 20.0141 8.66366L14.9472 14.4612Z" fill="currentColor"></path><path d="M20.8883 7.65066C20.8146 7.73499 20.7778 7.77716 20.7332 7.79503C20.694 7.81075 20.6508 7.81365 20.6099 7.80333C20.5633 7.79159 20.5211 7.75473 20.4368 7.68102L17.9096 5.47231C17.8253 5.3986 17.7831 5.36175 17.7652 5.31718C17.7495 5.27798 17.7466 5.23481 17.7569 5.19385C17.7687 5.14729 17.8055 5.10512 17.8792 5.02079L18.3305 4.50446C18.6354 4.15563 18.7878 3.98121 18.9511 3.87147C19.3968 3.57199 19.9685 3.53354 20.4502 3.77066C20.6267 3.85755 20.8012 4.00999 21.15 4.31486C21.4988 4.61972 21.6732 4.77216 21.783 4.93546C22.0824 5.3811 22.1209 5.95283 21.8838 6.43456C21.7969 6.61108 21.6444 6.7855 21.3396 7.13432L20.8883 7.65066Z" fill="currentColor"></path><path d="M9.5 18C9.5 18 7.2314 20.6818 6 20C4.7686 19.3182 8.43957 14.8136 8.43957 13.0357C8.43957 12.0802 5.54026 16.2053 3.75331 16.7185C0.87539 17.5452 7.17108 5 7.17108 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>} // Replace with proper Realtime icon
                    title="Realtime"
                    description=""
                    background="bg-[linear-gradient(0deg,#CEF6FF_0%,#00D2FF_35%,#009DF1_100%)]"
                />
              <button className="bg-[#f2f2f2] text-sm font-medium rounded-full px-4 py-1">Open</button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <GenerateCard
                    logo={<svg width="18" height="18" className="inset-0 z-20 m-auto text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.82105 18.4485H7.83105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.8125 3.69873H12.8025" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><rect x="3.3868" y="5.14091" width="2.5" height="22.0199" rx="1.25" transform="rotate(-44.5361 3.3868 5.14091)" stroke="currentColor" strokeWidth="1.5"></rect><path d="M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z" fill="currentColor"></path></svg>} // Replace with proper Enhancer icon
                    title="Enhancer"
                    description=""
                    background="bg-[linear-gradient(0deg,#888888_0%,#000000_100%)]"
                />
              <button className="bg-[#f2f2f2] text-sm font-medium rounded-full px-4 py-1">Open</button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <GenerateCard
                    logo={<svg width="22" height="22" className="inset-0 m-auto text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4998 21.174C15.4998 20.5 14.3718 20 12.9998 20C10.9418 20 9.07179 22.356 6.99979 22C4.92779 21.644 4.22479 18.631 5.49979 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M10.165 8.40356C10.7043 10.6535 12.5111 12.4106 14.7882 12.8777L6.83049 18.7674C6.60581 18.9339 6.32644 19.0157 6.04426 18.9976C5.76209 18.9795 5.49628 18.8627 5.2962 18.6689L4.34224 17.7427C4.14504 17.5516 4.02487 17.2984 4.00345 17.0288C3.98204 16.7593 4.06079 16.4912 4.22547 16.2731L10.165 8.40356Z" fill="currentColor"></path>
                        <circle cx="16.5" cy="6.5" r="5.5" fill="currentColor"></circle>
                        </svg>}
                    title="Video Lipsync"
                    description=""
                    background="bg-[linear-gradient(0deg,#BBCA91_0%,#3C878F_60%,#07280F_100%)] text-white"
                />
              <button className="bg-[#f2f2f2] text-sm font-medium rounded-full px-4 py-1">Open</button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <GenerateCard
                    logo={<svg width="22" height="22" className="inset-0 z-10 m-auto shrink-0 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.6904 14.625C24.4364 14.625 25.1517 14.3287 25.6792 13.8012C26.2066 13.2738 26.5029 12.5584 26.5029 11.8125C26.5029 11.0666 26.2066 10.3512 25.6792 9.82376C25.1517 9.29632 24.4364 9 23.6904 9C22.9445 9 22.2291 9.29632 21.7017 9.82376C21.1742 10.3512 20.8779 11.0666 20.8779 11.8125C20.8779 12.5584 21.1742 13.2738 21.7017 13.8012C22.2291 14.3287 22.9445 14.625 23.6904 14.625Z" fill="currentColor"></path><path d="M19.8084 21.5699L18.2221 37.4156C18.1717 37.7942 18.2737 38.1775 18.5058 38.4809C18.7378 38.7844 19.081 38.9832 19.4596 39.0337C19.8383 39.0842 20.2215 38.9821 20.525 38.7501C20.8285 38.518 21.0273 38.1749 21.0778 37.7962L22.5965 28.6743C22.6383 28.4147 22.7712 28.1785 22.9713 28.008C23.1715 27.8375 23.4258 27.7439 23.6887 27.7439C23.9516 27.7439 24.2059 27.8375 24.4061 28.008C24.6062 28.1785 24.7391 28.4147 24.7809 28.6743L26.2996 37.7962C26.3501 38.1749 26.549 38.518 26.8524 38.7501C27.1559 38.9821 27.5391 39.0842 27.9178 39.0337C28.2964 38.9832 28.6396 38.7844 28.8716 38.4809C29.1037 38.1775 29.2057 37.7942 29.1553 37.4156L27.5709 21.5699C27.5307 21.1575 27.5821 20.7413 27.7215 20.351C27.8608 19.9607 28.0847 19.6061 28.3771 19.3124L33.0646 13.2824C33.296 12.9729 33.3982 12.5856 33.3499 12.2022C33.3015 11.8188 33.1063 11.4691 32.8053 11.2267C32.5044 10.9843 32.1211 10.868 31.7362 10.9024C31.3513 10.9369 30.9947 11.1192 30.7415 11.4112L26.7534 16.1999C26.5951 16.4046 26.3798 16.5579 26.1346 16.6406C25.7034 16.7793 24.8878 16.9706 23.6896 16.9706C22.4896 16.9706 21.6759 16.7793 21.2428 16.6406C20.9983 16.5576 20.7837 16.4043 20.6259 16.1999L16.6378 11.4112C16.387 11.1111 16.0285 10.9214 15.6393 10.883C15.2501 10.8445 14.8614 10.9603 14.5567 11.2055C14.2521 11.4507 14.0558 11.8057 14.0102 12.1941C13.9646 12.5825 14.0732 12.9733 14.3128 13.2824L19.0003 19.3124C19.5946 19.9049 19.8928 20.7337 19.8084 21.5699Z" fill="currentColor"></path></svg>} // Replace with Motion Transfer icon
                    title="Motion Transfer"
                    description=""
                    background="bg-black"
                />
              <button className="bg-[#f2f2f2] text-sm font-medium rounded-full px-4 py-1">Open</button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <GenerateCard
                    logo={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" className=" text-[#c4c4c5] block shrink-0" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="circleMask"><circle cx="12" cy="12" r="7"></circle></clipPath><linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="white" stopOpacity="0.6"></stop><stop offset="75%" stopColor="white" stopOpacity="0.15"></stop><stop offset="100%" stopColor="white" stopOpacity="0"></stop></linearGradient></defs><image href="/train-icon-photo.webp" x="5" y="5" width="14" height="14" clipPath="url(#circleMask)"></image><circle cx="12" cy="12" r="6" fill="url(#fadeGradient)"></circle><path d="M16.625 20.1226C14.6815 21.2446 12.3964 21.6219 10.1954 21.1841C7.99441 20.7463 6.02762 19.5232 4.66148 17.7429C3.29534 15.9625 2.62303 13.7462 2.7698 11.5068C2.91658 9.26752 3.87243 7.15792 5.45926 5.57108" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M20.0107 7.48682C21.0289 9.25025 21.4366 11.3004 21.1709 13.3192C20.9051 15.338 19.9806 17.2127 18.5407 18.6526" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M12 2.86182C13.2147 2.86182 14.4176 3.10107 15.5398 3.56593C16.6621 4.03079 17.6818 4.71214 18.5407 5.57108" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M7.375 4.10108C8.07507 3.6969 8.8251 3.38622 9.60592 3.177" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>} // Replace with Train icon
                    title="Train"
                    description=""
                    background="bg-transparent"
                />
              <button className="bg-[#f2f2f2] text-sm font-medium rounded-full px-4 py-1">Open</button>
            </div>

            {/* <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 rounded-full p-1">
                  <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" id="Gallery-Favourite--Streamline-Solar" height="16" width="16">
                    <desc>
                      Gallery Favourite Streamline Icon: https://streamlinehq.com
                    </desc>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.9375 6.875c-1.3258125 0 -1.98875 0 -2.4006250000000002 -0.411875C8.125 6.051237499999999 8.125 5.388325 8.125 4.0625s0 -1.9887374999999998 0.411875 -2.40061875C8.94875 1.25 9.6116875 1.25 10.9375 1.25s1.98875 0 2.4006250000000002 0.41188125C13.75 2.0737625 13.75 2.736675 13.75 4.0625s0 1.9887374999999998 -0.411875 2.4006250000000002C12.92625 6.875 12.263312500000001 6.875 10.9375 6.875Zm-0.9091875 -1.74000625C9.5503125 4.715893749999999 9.0625 4.15745625 9.0625 3.6237625c0 -1.1082 1.03125 -1.52195 1.875 -0.665875 0.84375 -0.856075 1.875 -0.442325 1.875 0.66586875 0 0.5337062499999999 -0.4878125 1.09214375 -0.9657499999999999 1.51124375 -0.372625 0.32666874999999995 -0.558875 0.49 -0.9092500000000001 0.49 -0.350375 0 -0.536625 -0.16333750000000002 -0.9091875 -0.49000625Z" fill="#000000" strokeWidth="0.625"></path>
                    <path d="M13.68975 10.275875000000001c0.052187500000000005 -0.6405624999999999 0.059187500000000004 -1.4212500000000001 0.060125 -2.33975 0.00025 -0.24081249999999998 -0.195125 -0.436125 -0.4359375 -0.436125 -0.24081249999999998 0 -0.4359375 0.195375 -0.43618749999999995 0.43618749999999995 -0.0009375 0.9235 -0.00775 1.661375 -0.05725 2.268875 -0.052500000000000005 0.64475 -0.150875 1.1018124999999999 -0.3165 1.4496875l-1.645625 -1.4810625c-0.604375 -0.5439375 -1.5044374999999999 -0.598125 -2.1696874999999998 -0.130625l-0.173375 0.12187500000000001c-0.4623125 0.324875 -1.09125 0.2704375 -1.4908125 -0.129125l-2.4940499999999997 -2.4940625c-0.49779375000000003 -0.49775 -1.2962937499999998 -0.524375 -1.8260999999999998 -0.06075l-0.5820562499999999 0.50925c-0.0002 -0.15812500000000002 -0.0002 -0.32137499999999997 -0.0002 -0.49024999999999996 0 -1.3826874999999998 0.000925 -2.3758375000000003 0.10254374999999999 -3.13164375 0.099925 -0.7432562500000001 0.28998124999999997 -1.1913500000000001 0.621175 -1.52254375 0.33119375 -0.33119375 0.7792875 -0.52125 1.52254375 -0.62118125 0.6738375000000001 -0.09059375 1.5363250000000002 -0.10115 2.6953312499999997 -0.102375 0.24081249999999998 -0.00025624999999999997 0.43631250000000005 -0.1953875 0.43631250000000005 -0.4362125 0 -0.24081875 -0.1954375 -0.43615000000000004 -0.43624999999999997 -0.43589374999999997 -1.1428375 0.00119375 -2.08180625 0.012049999999999998 -2.81159375 0.11016875000000001 -0.8399625 0.11293125 -1.50276875 0.34859375 -2.02300625 0.86883125 -0.5202375 0.5202375 -0.7559 1.18304375 -0.86883125 2.02300625C1.2499875 5.07278125 1.24999375 6.124549999999999 1.25 7.4666250000000005v0.0339375c0 0.30675 0 0.5974999999999999 0.00120625 0.8723749999999999 0.004725 1.08075 0.027487499999999998 1.9510625000000001 0.15190625 2.6505625 0.12665625 0.712125 0.36483125 1.286125 0.8260375 1.747375 0.5202375 0.5201875 1.18304375 0.7558750000000001 2.02300625 0.8688125C5.07278125 13.75 6.12454375 13.75 7.4666250000000005 13.75h0.06675c1.3420625 0 2.393875 0 3.2145 -0.1103125 0.8399375 -0.1129375 1.5027499999999998 -0.34862499999999996 2.023 -0.8688125 0.1833125 -0.1833125 0.33387500000000003 -0.38712499999999994 0.456375 -0.614625 0.2778125 -0.515875 0.4019375 -1.137 0.4625 -1.880375Z" fill="#4a4a4a" strokeWidth="0.625"></path>
                  </svg>
                </div>
                <p>Gallery</p>
              </div>
              <button className="bg-[#f2f2f2] text-sm font-medium rounded-full px-4 py-1">Open</button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 rounded-full p-1">
                  <BiSupport className='text-[16px]' />
                </div>
                <p>Support</p>
              </div>
              <button className="bg-[#f2f2f2] text-sm font-medium rounded-full px-4 py-1">Open</button>
            </div> */}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { ChevronDown } from 'lucide-react';
// import { IoNotifications } from "react-icons/io5";
// import { BiSupport } from "react-icons/bi";

// const Navbar = () => {
//   return (
//     <nav className='w-[95%] h-20 flex items-center justify-evenly justify-self-center'>

//       <div className='w-100 h-full flex items-center justify-start gap-10'>
//         <svg aria-label="Krea Logo" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"></path><path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"></path></svg>

//         <div className='w-fit flex items-center justify-center gap-2 h-full'>
//           <Image
//             src="/profileOrb.svg"
//             alt="Context Axis"
//             width={0}
//             height={0}
//             className="h-8 w-8"
//           />

//           <p className='text-[#b0b0b0]'>benevolentnimblebat</p>

//           <ChevronDown className='text-[#b0b0b0]'/>
//         </div>
        
//       </div>
      
//       <div className='bg-[#f5f5f5] w-100 flex justify-evenly items-center rounded-2xl mx-auto backdrop-blur-2xl transition-[transform,opacity,scale,translate,background-color] select-none duration-[500ms] ease-[cubic-bezier(0,1,.35,1)]'>
//         <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 bg-[#fff] bg-ho flex items-center inset-0 z-10 rounded-xl shadow-[0_1px_4px_0px_rgba(0,0,0,0.075)] dark:shadow-none'>
//           <svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11.7354C2 10.4141 2 9.75338 2.18958 9.15972C2.35736 8.63437 2.63195 8.14939 2.99611 7.73524C3.40763 7.26724 3.97416 6.92732 5.10723 6.24748L8.70722 4.08748C9.90443 3.36916 10.503 3.01 11.142 2.86967C11.7073 2.74555 12.2927 2.74555 12.858 2.86967C13.497 3.01 14.0956 3.36916 15.2928 4.08748L18.8928 6.24748C20.0258 6.92732 20.5924 7.26724 21.0039 7.73524C21.3681 8.14939 21.6426 8.63437 21.8104 9.15972C22 9.75338 22 10.4141 22 11.7354V18.9118C22 20.0319 22 20.592 21.782 21.0198C21.5903 21.3961 21.2843 21.7021 20.908 21.8938C20.4802 22.1118 19.9201 22.1118 18.8 22.1118H18.2C17.0799 22.1118 16.5198 22.1118 16.092 21.8938C15.7157 21.7021 15.4097 21.3961 15.218 21.0198C15 20.592 15 20.0319 15 18.9118V15.7118C15 15.1518 15 14.8717 14.891 14.6578C14.7951 14.4697 14.6422 14.3167 14.454 14.2208C14.2401 14.1118 13.9601 14.1118 13.4 14.1118H10.6C10.0399 14.1118 9.75992 14.1118 9.54601 14.2208C9.35785 14.3167 9.20487 14.4697 9.10899 14.6578C9 14.8717 9 15.1518 9 15.7118V18.9118C9 20.0319 9 20.592 8.78201 21.0198C8.59027 21.3961 8.28431 21.7021 7.90798 21.8938C7.48016 22.1118 6.9201 22.1118 5.8 22.1118H5.2C4.0799 22.1118 3.51984 22.1118 3.09202 21.8938C2.71569 21.7021 2.40973 21.3961 2.21799 21.0198C2 20.592 2 20.0319 2 18.9118V11.7354Z" fill="currentColor"></path></svg>
//         </Link>
        
//         <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inset-0 z-20 m-auto"><path fillRule="evenodd" clipRule="evenodd" d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z" fill="currentColor"></path><rect x="2.75" y="3.86182" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"></rect><path d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
//         </Link>

//         <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
//           <svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.263 7.17399C21.637 6.41199 20.506 6.30099 19.743 6.92499L18.5167 7.92894C18.2593 8.13966 18.1409 8.46318 18.1571 8.79542C18.1589 8.83351 18.16 8.872 18.16 8.91099V15.312C18.16 15.3533 18.1588 15.3941 18.1568 15.4344C18.14 15.7656 18.2584 16.0881 18.5146 16.2987L19.729 17.297C20.045 17.558 20.448 17.701 20.863 17.701C21.849 17.701 22.654 16.899 22.657 15.912L22.669 8.31399C22.67 7.89899 22.527 7.49299 22.263 7.17399Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12.6444 5.11182H5.68203C3.08003 5.11182 1.33203 6.93982 1.33203 9.66182V15.0618C1.33203 17.7838 3.08003 19.6118 5.68203 19.6118H12.6434C15.2474 19.6118 16.9964 17.7838 16.9964 15.0618V9.66182C16.9964 6.93982 15.2474 5.11182 12.6444 5.11182Z" fill="currentColor"></path><rect x="1" y="5.11182" width="16" height="15" rx="4" fill="currentColor"></rect></svg>
//         </Link>
        
//         <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
//           <svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.82105 18.4485H7.83105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.8125 3.69873H12.8025" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><rect x="3.3868" y="5.14091" width="2.5" height="22.0199" rx="1.25" transform="rotate(-44.5361 3.3868 5.14091)" stroke="currentColor" strokeWidth="1.5"></rect><path d="M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z" fill="currentColor"></path></svg>
//         </Link>

//         <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
//           <svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9472 14.4612C14.6244 14.8306 14.4629 15.0153 14.2819 15.1777C14.121 15.3219 13.9487 15.4529 13.7667 15.5693C13.5618 15.7004 13.3384 15.8077 12.8914 16.0223C11.8174 16.538 11.2804 16.7959 10.9271 16.705C10.6205 16.626 10.3693 16.4065 10.25 16.1132C10.1126 15.7753 10.2963 15.2086 10.6635 14.0752C10.8164 13.6035 10.8928 13.3677 10.9952 13.1471C11.0863 12.9511 11.193 12.7629 11.3144 12.5842C11.4511 12.383 11.6125 12.1983 11.9354 11.8289L17.0023 6.03138C17.076 5.94704 17.1129 5.90487 17.1574 5.88701C17.1966 5.87129 17.2398 5.86839 17.2807 5.87871C17.3273 5.89045 17.3695 5.92731 17.4538 6.00102L19.9838 8.21213C20.0681 8.28584 20.1103 8.3227 20.1281 8.36727C20.1438 8.40647 20.1467 8.44964 20.1364 8.4906C20.1247 8.53715 20.0878 8.57932 20.0141 8.66366L14.9472 14.4612Z" fill="currentColor"></path><path d="M20.8883 7.65066C20.8146 7.73499 20.7778 7.77716 20.7332 7.79503C20.694 7.81075 20.6508 7.81365 20.6099 7.80333C20.5633 7.79159 20.5211 7.75473 20.4368 7.68102L17.9096 5.47231C17.8253 5.3986 17.7831 5.36175 17.7652 5.31718C17.7495 5.27798 17.7466 5.23481 17.7569 5.19385C17.7687 5.14729 17.8055 5.10512 17.8792 5.02079L18.3305 4.50446C18.6354 4.15563 18.7878 3.98121 18.9511 3.87147C19.3968 3.57199 19.9685 3.53354 20.4502 3.77066C20.6267 3.85755 20.8012 4.00999 21.15 4.31486C21.4988 4.61972 21.6732 4.77216 21.783 4.93546C22.0824 5.3811 22.1209 5.95283 21.8838 6.43456C21.7969 6.61108 21.6444 6.7855 21.3396 7.13432L20.8883 7.65066Z" fill="currentColor"></path><path d="M9.5 18C9.5 18 7.2314 20.6818 6 20C4.7686 19.3182 8.43957 14.8136 8.43957 13.0357C8.43957 12.0802 5.54026 16.2053 3.75331 16.7185C0.87539 17.5452 7.17108 5 7.17108 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
//         </Link>

//         <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
//           <svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.854L12 5.51603" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><circle cx="12.0001" cy="8.17831" r="2.12118" stroke="currentColor" strokeWidth="1.5"></circle><path d="M10.4869 10.1001L7.45996 21.4302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M17.2646 21.2366C17.3715 21.6368 17.1338 22.0479 16.7336 22.1548C16.3334 22.2617 15.9224 22.0239 15.8155 21.6238L17.2646 21.2366ZM14.2377 9.90652L17.2646 21.2366L15.8155 21.6238L12.7885 10.2937L14.2377 9.90652Z" fill="currentColor"></path><path d="M6.42188 16.1118C6.42188 16.1118 7.91228 17.3606 12.0006 17.3606C16.0889 17.3606 17.5793 16.1118 17.5793 16.1118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>
//         </Link>

//         <Link href="/" className='my-1.5 ml-1.5 h-10 w-13 hover:bg-[#e5e5e5] flex items-center rounded-2xl'>
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inset-0 z-20 m-auto" xmlns="http://www.w3.org/2000/svg"><path d="M3 5C3 4.45 3.45 4 4 4H9.17C9.58 4 9.95 4.21 10.14 4.55L10.86 5.89C11.05 6.23 11.42 6.44 11.83 6.44H20C20.55 6.44 21 6.89 21 7.44V11C21 11.55 20.55 12 20 12H4C3.45 12 3 11.55 3 11V5Z"></path><rect x="3" y="7" width="18" height="12" rx="1"></rect><path d="M3.15 18.5C3.08 18.15 3.08 17.65 3.08 17H20.92C20.92 17.65 20.92 18.15 20.85 18.5H3.15Z" opacity="0.3"></path><path d="M5 20H19C19.8 20 20.2 20 20.5 19.8C20.7 19.7 20.9 19.5 21 19.2C21.05 19.1 21.08 19 21.1 18.5H2.9C2.92 19 2.95 19.1 3 19.2C3.1 19.5 3.3 19.7 3.5 19.8C3.8 20 4.2 20 5 20Z" opacity="0.5"></path></svg>
//         </Link>
//       </div>

//       <div className='w-100 h-13 flex items-start justify-end gap-5 text-[#4a4a4a]'>
//         <button className='w-20 h-[70%] flex items-center justify-center gap-1 rounded-xl bg-[#f5f5f5] text-sm'>
//           <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" id="Gallery-Favourite--Streamline-Solar" height="15" width="15">
//             <desc>
//               Gallery Favourite Streamline Icon: https://streamlinehq.com
//             </desc>
//             <path fillRule="evenodd" clipRule="evenodd" d="M10.9375 6.875c-1.3258125 0 -1.98875 0 -2.4006250000000002 -0.411875C8.125 6.051237499999999 8.125 5.388325 8.125 4.0625s0 -1.9887374999999998 0.411875 -2.40061875C8.94875 1.25 9.6116875 1.25 10.9375 1.25s1.98875 0 2.4006250000000002 0.41188125C13.75 2.0737625 13.75 2.736675 13.75 4.0625s0 1.9887374999999998 -0.411875 2.4006250000000002C12.92625 6.875 12.263312500000001 6.875 10.9375 6.875Zm-0.9091875 -1.74000625C9.5503125 4.715893749999999 9.0625 4.15745625 9.0625 3.6237625c0 -1.1082 1.03125 -1.52195 1.875 -0.665875 0.84375 -0.856075 1.875 -0.442325 1.875 0.66586875 0 0.5337062499999999 -0.4878125 1.09214375 -0.9657499999999999 1.51124375 -0.372625 0.32666874999999995 -0.558875 0.49 -0.9092500000000001 0.49 -0.350375 0 -0.536625 -0.16333750000000002 -0.9091875 -0.49000625Z" fill="#000000" strokeWidth="0.625"></path>
//             <path d="M13.68975 10.275875000000001c0.052187500000000005 -0.6405624999999999 0.059187500000000004 -1.4212500000000001 0.060125 -2.33975 0.00025 -0.24081249999999998 -0.195125 -0.436125 -0.4359375 -0.436125 -0.24081249999999998 0 -0.4359375 0.195375 -0.43618749999999995 0.43618749999999995 -0.0009375 0.9235 -0.00775 1.661375 -0.05725 2.268875 -0.052500000000000005 0.64475 -0.150875 1.1018124999999999 -0.3165 1.4496875l-1.645625 -1.4810625c-0.604375 -0.5439375 -1.5044374999999999 -0.598125 -2.1696874999999998 -0.130625l-0.173375 0.12187500000000001c-0.4623125 0.324875 -1.09125 0.2704375 -1.4908125 -0.129125l-2.4940499999999997 -2.4940625c-0.49779375000000003 -0.49775 -1.2962937499999998 -0.524375 -1.8260999999999998 -0.06075l-0.5820562499999999 0.50925c-0.0002 -0.15812500000000002 -0.0002 -0.32137499999999997 -0.0002 -0.49024999999999996 0 -1.3826874999999998 0.000925 -2.3758375000000003 0.10254374999999999 -3.13164375 0.099925 -0.7432562500000001 0.28998124999999997 -1.1913500000000001 0.621175 -1.52254375 0.33119375 -0.33119375 0.7792875 -0.52125 1.52254375 -0.62118125 0.6738375000000001 -0.09059375 1.5363250000000002 -0.10115 2.6953312499999997 -0.102375 0.24081249999999998 -0.00025624999999999997 0.43631250000000005 -0.1953875 0.43631250000000005 -0.4362125 0 -0.24081875 -0.1954375 -0.43615000000000004 -0.43624999999999997 -0.43589374999999997 -1.1428375 0.00119375 -2.08180625 0.012049999999999998 -2.81159375 0.11016875000000001 -0.8399625 0.11293125 -1.50276875 0.34859375 -2.02300625 0.86883125 -0.5202375 0.5202375 -0.7559 1.18304375 -0.86883125 2.02300625C1.2499875 5.07278125 1.24999375 6.124549999999999 1.25 7.4666250000000005v0.0339375c0 0.30675 0 0.5974999999999999 0.00120625 0.8723749999999999 0.004725 1.08075 0.027487499999999998 1.9510625000000001 0.15190625 2.6505625 0.12665625 0.712125 0.36483125 1.286125 0.8260375 1.747375 0.5202375 0.5201875 1.18304375 0.7558750000000001 2.02300625 0.8688125C5.07278125 13.75 6.12454375 13.75 7.4666250000000005 13.75h0.06675c1.3420625 0 2.393875 0 3.2145 -0.1103125 0.8399375 -0.1129375 1.5027499999999998 -0.34862499999999996 2.023 -0.8688125 0.1833125 -0.1833125 0.33387500000000003 -0.38712499999999994 0.456375 -0.614625 0.2778125 -0.515875 0.4019375 -1.137 0.4625 -1.880375Z" fill="#4a4a4a" strokeWidth="0.625"></path>
//           </svg>
//           Gallery
//         </button>

//         <button className='w-20 h-[70%] flex items-center justify-center gap-1 rounded-xl bg-[#f5f5f5] text-[#4a4a4a] text-sm'>
//           <BiSupport className='text-[15px]'/>
//           Support
//         </button>

//         <button className='w-fit p-2 h-[70%] flex items-center justify-center rounded-xl bg-[#f5f5f5] text-[#4a4a4a]'>
//           <IoNotifications />
//         </button>

//         <button className='w-fit p-2 h-[70%] flex items-center justify-center rounded-xl bg-[#f5f5f5] text-[#4a4a4a]'>
//           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><title>sun_fill</title><g id="sun_fill" fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083.707.707a1 1 0 0 1-1.32 1.497l-.094-.083-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"></path></g></svg>
//         </button>

//         <Image
//           src="/profileOrb.svg"
//           alt="Context Axis"
//           width={0}
//           height={0}
//           className="h-8 w-8"
//         />
//       </div>

//       {/* <button aria-label="Theme" className="hover:bg-primary-200/75 dark:bg-primary-800/75 bg-primary-100/75 dark:hover:bg-primary-700/75 flex h-[30px] w-[30px] items-center justify-center rounded-lg text-black/70 backdrop-blur-lg transition-colors duration-150 ease-[cubic-bezier(.33,0,.2,1)] hover:text-black dark:text-white/80 dark:hover:text-white svelte-179jkjd"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><title>sun_fill</title><g id="sun_fill" fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083.707.707a1 1 0 0 1-1.32 1.497l-.094-.083-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"></path></g></svg></button> */}
//     </nav>
//   )
// }

// export default Navbar