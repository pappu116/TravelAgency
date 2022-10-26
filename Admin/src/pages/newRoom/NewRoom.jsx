import axios from "axios"
import { useState } from "react"
import NavBar from "../../components/navbar/NavBar"
import SideBar from "../../components/sidebar/SideBar"
import { roomInputs } from "../../formSource"
import useFetch from "../../hooks/useFetch"
import "./newRoom.scss"

const NewRoom = () => {
  const [info,setInfo] = useState({})
  const [rooms,setRooms]= useState([])
  const [hotelId, setHotelId] = useState(undefined);
  const { data, loading, error } = useFetch("/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
      await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info)
  return (
    <div className="new">
      <SideBar/>
      <div className="newContainer">
        <NavBar/>
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
             {roomInputs.map((input)=>(
               <div className="formInput" key={input.id}>
               <label >{input.label}</label>
               <input id={input.id}  onChange={handleChange} type={input.type} placeholder={input.placeholder}/>
             </div>
             ))}
             <div className="formInput" >
               <label >Rooms</label>
               <textarea onChange={e=>setRooms(e.target.value)}  placeholder="give comma between room numbers."/>
             </div>
               <div className="formInput" >
               <label >Choose a hotel</label>
               <select  id="hotelId" onChange={e=>setHotelId(e.target.value)}>
                {loading?"loading": data && data.map(hotel=>(
                <option value={hotel._id} key={hotel.id}>{hotel.name}</option>
                ))}
               </select>
             </div>
              <button onClick={handleClick}>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewRoom