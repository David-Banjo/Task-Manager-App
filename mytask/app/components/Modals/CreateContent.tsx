"use client";
import axios from "axios";
import React,{useState} from "react";
import toast from "react-hot-toast";


function CreateContent(){
  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState("false");
  const [important, setImportant] = useState("false");

  const handleChange = (name: string) => (e: any) =>{
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;

      case "description":
        setDescription(e.target.value);
        break;

      case "date":
        setDate(e.target.value);
        break;
            
      case "completed":
        setCompleted(e.target.checked);
        break;

      case "important":
        setImportant(e.target.checked);
        break;

      default:
        break;


      
      
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

     const task = {
         title,
         description,
         date,
         completed,
         important,
     };

     try{
             const res = await axios.post("/api/task/", task);

             if(res.data.error){
              toast.error(res.data.error);
             } 
              toast.success("task completed");
         } catch (error){
               toast.error("fuck you");
         }
      };

  return (
  <form onSubmit={handleSubmit} >
    <h1>Create a Task</h1>
    <div className="input-control">
      <label htmlFor="title"> Title</label>
      <input type="text" 
      id="title"
      value={title}
      name="title"
      onChange={handleChange("title")}
      placeholder=" yoo input and shut the fuck up"
      />
        {/* end of title */}
    </div>

{/* description  */}
<div className="input-control">
      <label htmlFor="description"> Description</label>
      <textarea 
             value={description}
             onChange={handleChange("description")}
             name="description"
             id="description"
             rows={4}
             placeholder="work and leave me abeg!"
      ></textarea>
      </div>
{/* end  of description */}

{/* date */}
<div className="input-control">
        <label htmlFor="date">Date</label>
        <input
          value={date}
          onChange={handleChange("date")}
          type="date"
          name="date"
          id="date"
        />
        </div>
        {/* end of date */}

        {/* completed */}
        <div className="input-control toggler ">
        <label htmlFor="completed">Toggle Completed</label>
        <input
          value={completed.toString()}
          onChange={handleChange("completed")}
          type="checkbox"
          name="completed"
          id="completed"
        />
      </div>

      {/* end of completed*/}
     
    {/*   important*/}
      <div className="input-control toggler">
        <label htmlFor="important">Toggle Important</label>
        <input
          value={important.toString()}
          onChange={handleChange("important")}
          type="checkbox"
          name="important"
          id="important"
        />
      </div>
      {/* end of important */}

      <div className="submit-btn">
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
  </form>
);
}

export default CreateContent;