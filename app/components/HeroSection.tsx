import React from 'react'
import GenerateCard from './GenerateCard'

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 w-full h-150">
      <GenerateCard
        logo={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inset-0 z-20 m-auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z" fill="currentColor"></path><rect x="2.75" y="3.86182" width="18.5" height="16.5" rx="3.25" stroke="currentColor" stroke-width="1.5"></rect><path d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>}
        title="Image"
        description="Generate images with custom styles in Flux and Ideogram."
        isNew
        background="bg-gradient-to-b from-slate-500 to-slate-700 text-white"
      />

      <GenerateCard
        logo={<svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.263 7.17399C21.637 6.41199 20.506 6.30099 19.743 6.92499L18.5167 7.92894C18.2593 8.13966 18.1409 8.46318 18.1571 8.79542C18.1589 8.83351 18.16 8.872 18.16 8.91099V15.312C18.16 15.3533 18.1588 15.3941 18.1568 15.4344C18.14 15.7656 18.2584 16.0881 18.5146 16.2987L19.729 17.297C20.045 17.558 20.448 17.701 20.863 17.701C21.849 17.701 22.654 16.899 22.657 15.912L22.669 8.31399C22.67 7.89899 22.527 7.49299 22.263 7.17399Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6444 5.11182H5.68203C3.08003 5.11182 1.33203 6.93982 1.33203 9.66182V15.0618C1.33203 17.7838 3.08003 19.6118 5.68203 19.6118H12.6434C15.2474 19.6118 16.9964 17.7838 16.9964 15.0618V9.66182C16.9964 6.93982 15.2474 5.11182 12.6444 5.11182Z" fill="currentColor"></path><rect x="1" y="5.11182" width="16" height="15" rx="4" fill="currentColor"></rect></svg>}
        title="Video"
        description="Generate videos with Hailuo, Pika, Runway, Luma, and more."
        background="bg-yellow-500 text-white"
      />

      <GenerateCard
        logo={<svg width="18" height="18" className="inset-0 z-20 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.854L12 5.51603" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><circle cx="12.0001" cy="8.17831" r="2.12118" stroke="currentColor" stroke-width="1.5"></circle><path d="M10.4869 10.1001L7.45996 21.4302" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M17.2646 21.2366C17.3715 21.6368 17.1338 22.0479 16.7336 22.1548C16.3334 22.2617 15.9224 22.0239 15.8155 21.6238L17.2646 21.2366ZM14.2377 9.90652L17.2646 21.2366L15.8155 21.6238L12.7885 10.2937L14.2377 9.90652Z" fill="currentColor"></path><path d="M6.42188 16.1118C6.42188 16.1118 7.91228 17.3606 12.0006 17.3606C16.0889 17.3606 17.5793 16.1118 17.5793 16.1118" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>}
        title="Edit"
        description="Add objects, change style, or expand photos and generations."
        isNew
        background="bg-gradient-to-b from-purple-600 to-purple-800 text-white"
      />

      <GenerateCard
        logo={<svg width="22" height="22" className="absolute inset-0  right-[1px] m-auto text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4998 21.174C15.4998 20.5 14.3718 20 12.9998 20C10.9418 20 9.07179 22.356 6.99979 22C4.92779 21.644 4.22479 18.631 5.49979 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.165 8.40356C10.7043 10.6535 12.5111 12.4106 14.7882 12.8777L6.83049 18.7674C6.60581 18.9339 6.32644 19.0157 6.04426 18.9976C5.76209 18.9795 5.49628 18.8627 5.2962 18.6689L4.34224 17.7427C4.14504 17.5516 4.02487 17.2984 4.00345 17.0288C3.98204 16.7593 4.06079 16.4912 4.22547 16.2731L10.165 8.40356Z" fill="currentColor"></path><circle cx="16.5" cy="6.5" r="5.5" fill="currentColor"></circle></svg>}
        title="Video Lipsync"
        description="Lip sync any video to any audio."
        isNew
        background="bg-green-600 text-white"
      />
    </div>
  )
}

export default HeroSection