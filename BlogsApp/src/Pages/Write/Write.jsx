import React, { useContext, useState } from 'react'
import './write.css'
import { Context } from '../../Context/Context'
import axios from 'axios'

function Write() {
 const[title,setTitle] = useState("")
 const[desc,setDesc] = useState("")
 const[file,setFile] = useState(null)
 const[cat,setCat] = useState([]);
 const {user} = useContext(Context)

 const handleSubmit= async (e)=>{
   e.preventDefault();
   const categories = cat.split(",");
   const newPost ={
    username:user.username,
    title,
    desc,
    categories
   }
     
   //category

   categories.map((c)=>{
            
    const newCat = {
        name: c,
    }
        try {
        axios.post("/api/categories/",newCat)
        } catch (error) {
            
        }
    })

   //for storing data
   if(file){
    const data = new FormData();
    const fileName = Date.now()+ file.name;
    data.append("name",fileName);
    data.append("file",file);
    newPost.photo = fileName;
    
    try {
      await axios.post('/api/upload',data)
    } catch (error) {
      console.log("Error uploading file:", error);
    }
   }
   try{
    const res = await axios.post('/api/posts/',newPost)
    window.location.replace('/post/' +res.data._id)
    
    
 }
   catch(err){
    console.log(err);
   }
  //  console.log(data);
 }

  return (
    <div className='write'>
      {file && (
        <img 
            src={URL.createObjectURL(file)} alt="BlogPic" className="image" />
      )
        }
      <form className='writeForm' >
        <div className="Parts">
            <label htmlFor="fileInput">
            <i className=" writeIcon fa-solid fa-upload"></i> 
            </label>
            <input type="file" id='fileInput' style={{display:"none"}} 
            onChange={e=>setFile(e.target.files[0]) }/>
            
            
            <input type="text " 
            placeholder='Title'  
            className='writeInput ' 
            autoFocus={true}
            onChange={(e)=>setTitle(e.target.value)}
            />

          <input type="text " 
            placeholder='Category with ,'  
            className='writeInput ' 
            value={cat}
            onChange={e=>setCat(e.target.value)}
            />
        </div>
        <div className="Part">
            <textarea placeholder='Write the Blog...' 
            type:Text
            className="writeInput writeText" 
            onChange={e =>(setDesc(e.target.value))}
            ></textarea>
        </div>
        <button className="submit" type='submit' onClick={handleSubmit} >Publish</button>
      </form>
    </div>
  )
}

export default Write
