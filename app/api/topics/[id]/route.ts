import connectMongoDB from "@/libs/mongodb";
import Topic from "@/model/topic"; 
import { NextResponse } from "next/server";

export async function PUT(request: { json: () => PromiseLike<{ newTitle: any; newDescription: any; newName: any; newEmail: any; newPhone: any; newMessage: any; }> | { newTitle: any; newDescription: any; newName: any; newEmail: any; newPhone: any; newMessage: any; }; }, { params }: any) {  
  const { id } = params;
  const { newTitle:title,newDescription:description,newName:name, newEmail:email,newPhone:phone, newMessage:message } = await request.json();
  await connectMongoDB();  
  await Topic.findByIdAndUpdate(id, {title,description,name,email,phone,message});
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request: any, { params }: any) { 
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 }); 
}

// export async function GET(request, { query }) { 
//   const { title } = query; // Get the "title" query parameter from the URL
//   await connectMongoDB();
//   const topic = await Topic.findOne({ title }); // Search for a topic with the specified name
//   return NextResponse.json({ topic }, { status: 200 }); 
// }
