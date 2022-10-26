import { format } from "date-fns"
import { useState } from "react"
import { DateRange } from "react-date-range"
import { useLocation } from "react-router-dom"
import Header from "../../components/header/Header"
import NavBar from "../../components/navbar/NavBar"
import SearchItem from "../../components/searchitem/SearchItem"
import useFetch from "../../hooks/useFetch"
import "./list.css"

const List = () => {
  
  const location = useLocation()
  const[destination,setDestination] = useState(location.state.destination)
  const[openDate,setOpenDate] = useState(false)
  const[dates,setDates] = useState(location.state.dates)
  const[options,setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
  );

  const handleClick = () =>{
    reFetch()
  }
  return (
    <div className="list">
      <NavBar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label >Check-in-date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(dates[0].startDate,"MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>
            {openDate &&  <DateRange 
              onChange={(item) => setDates([item.selection])}
              ranges={dates}
              minDate={new Date()}
              />}
            </div>
            <div className="lsOptions">

            <div className="lsItem">
              <label >Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min price<small>per night</small></span>
                <input onChange={(e) => setMin(e.target.value)} type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max price<small>per night</small></span>
                <input onChange={(e) => setMax(e.target.value)} type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
              </div>
            </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
           {loading?"Loading": <>
           {data.map((item)=>(
             <SearchItem item={item} key={item._id}/>
             ))
           }
           </>}
          </div>
        </div>
      </div>

    </div>
  )
}

export default List