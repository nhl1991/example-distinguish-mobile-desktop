import { NextRequest, NextResponse } from "next/server";


export default function middleware(request: NextRequest) {
    if (request.method === "GET") {
        const userAgent = request.headers.get('user-agent') || "";
        const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

        return NextResponse.next({
            headers: {
                'x-is-mobile': isMobile ? 'true' : 'false',
            },
        });
    }
}