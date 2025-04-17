
import { NextRequest, NextResponse } from "next/server";


export async function GET(
    req: NextRequest,
    res: NextResponse
) {
    const userAgent = req.headers.get('user-agent') || '';
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);


    console.log('handler')
    return NextResponse.json({isMobile: isMobile});
}