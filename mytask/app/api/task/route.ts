import prisma from "@/app/Utils/connect";
import Tasks from "@/app/components/Tasks/Tasks";
import { error } from "console";
import { NextResponse } from "next/server";



// POST METHOD
export async function POST(req: Request){
    try {

const {title, description, date, completed, important} = await req.json();

if (!title || !description || !date) {
  return NextResponse.json({
    error: " Missing required fields",
    status: 400,
  });
}
 
  if (title.length < 3){
    return NextResponse.json({
      error: "Title must be at least 3 characters long",
      status: 400,
    });
  }
const task = await prisma.task.create({

  data: {
    title,
    description,
    date,
    isCompleted : completed,
    isImportant : important,

  }
});

  console.log("TASK CREATED: ", task);

  return NextResponse.json(task);


    } catch (error) {
      console.log("ERROR CREATING TASK: ", error);
      return NextResponse.json({ error: "Error creating task", status: 500 });
    }
}
// END OF PUT METHOD



// GET METHOD
export async function GET(req: Request){
  try {

  } catch (error) {
    console.log (" ERROR GETTING TASK: ", error);
    return NextResponse.json({ error: " Error updating task, status: 500"});
  }
}
// END OF GET METHOD



// PUT METHOD
export async function PUT(req: Request){
  try {

  } catch (error) {
    console.log (" ERROR UPDATING TASK: ", error);
    return NextResponse.json({ error: " Error updating task, status: 500"});
  }
}

// END OF PUT METHOD



//  DELETE METHOD
export async function DELETE(req: Request){
  try {

  } catch (error) {
    console.log (" ERROR DELETING TASK: ", error);
    return NextResponse.json({ error: " Error deleting task, status: 500"});
  }
}