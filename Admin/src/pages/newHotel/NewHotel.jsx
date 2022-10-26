import { DriveFolderUploadOutlined } from "@mui/icons-material"
import axios from "axios"
import { useState } from "react"
import NavBar from "../../components/navbar/NavBar"
import SideBar from "../../components/sidebar/SideBar"
import { hotelInputs } from "../../formSource"
import useFetch from "../../hooks/useFetch"
import "./newHotel.scss"

const NewHotel = () => {
  const [files,setFiles]= useState("")
  const [info,setInfo] = useState({})
  const [rooms,setRooms]= useState([])
  const { data, loading, error } = useFetch("/rooms");

const handleChange =(e)=>{
  setInfo((prev)=>({...prev,[e.target.id]:e.target.value}))
}

const handleSelect = (e) => {
  const value = Array.from(
    e.target.selectedOptions,
    (option) => option.value
  );
  setRooms(value);
};


const handleClick  = async (e) => {
  e.preventDefault()
  try {
    const list = await Promise.all(
      Object.values(files).map(async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/drpvjjxog/image/upload",
          data
        );

        const { url } = uploadRes.data;
        return url;
      })
    );

    const newHotel = {
      ...info,
      rooms,
      photos: list,
    };

    await axios.post("/hotels", newHotel);
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div className="new">
      <SideBar/>
      <div className="newContainer">
        <NavBar/>
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img   src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              } alt="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="file">Image:<DriveFolderUploadOutlined className="icon"/></label>
                <input type="file" id="file" multiple onChange={(e) => setFiles(e.target.files)}  style={{display:"none"}}/>
              </div>
             {hotelInputs.map((input)=>(
               <div className="formInput" key={input.id}>
               <label >{input.label}</label>
               <input onChange={handleChange} id={input.id} type={input.type} placeholder={input.placeholder}/>
             </div>
             ))}
             <div className="formInput" >
               <label >Featured</label>
               <select id="featured" onChange={handleChange}>
               <option value={true}>Yes</option>
                <option value={false}>No</option>
               </select>
             </div>
             <div className="selectRooms" >
               <label >Rooms</label>
               <select id="rooms" multiple onChange={handleSelect}>
                {loading?"loading":data && data.map(room=>(
                  <option value={room._id} key={room._id}>{room.title}</option>
                ))}
               </select>
             </div>
              <button onClick={handleClick }>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewHotel