'use server'

import { headers } from "next/headers";

export default async function ServerSide() {

    const userAgent = (await headers()).get('x-is-mobile')

    return (
        <div>
            <h1>SERVER-COMPONENT</h1>
        <p className='text-sm'>Get &apos;x-is-mobile&apos; from the <b>headers</b> which is set by the middleware in advance.</p>
            <div className="flex items-center justify-center p-2">
                <p className="p-2">{userAgent === 'true' ? 'MOBILE' : 'DESKTOP'}</p>
                <div className={`w-4 h-4 rounded-full ${userAgent === 'true' ? `bg-green-500` : `bg-red-500`}`}>
                </div>
            </div>
        </div>
    )
}