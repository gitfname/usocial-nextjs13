import Instagram from "instagram-web-api"
import { NextResponse } from "next/server"


export async function GET(req) {

    return NextResponse.json({"text": "hello world"})

}