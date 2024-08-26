
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        id:12,
        title:"hello",
        discription:"world"
    });
}





export async function POST(request: Request , context:any){
    const data= await request.json();
    
    return NextResponse.json({
        data,
    });
}