'use client'

import { useEffect, useState } from 'react';

export default function ClientSide() {
  const [userAgent, setUserAgent] = useState<boolean>(false);
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    setUserAgent(isMobile);
  }, []);
  
  return (
    <div>
        <h1>CLIENT-COMPONENT</h1>
        <p className='text-sm'>Only used <b>window.navigator.userAgent</b>.</p>
        <div className="flex items-center justify-center p-2">
            <p className="p-2">{userAgent ? 'MOBILE' : 'DESKTOP'} </p>
            <div className={`w-4 h-4 rounded-full ${userAgent ? `bg-green-500` : `bg-red-500`}`}>
            </div>
        </div>
    </div>
  );
}
