import React,{useState,useEffect} from 'react'

const url = " https://api.npoint.io/ffa1e3fa94634568134c"

const Upcoming = () => {
  const[state,setState] = useState([])
  const[loading,setLoading] = useState(true)

  const fetchName=async()=>{
    setLoading(true);
    try{
      const response = await fetch(url)
      const result = await response.json()
      setLoading(false);
      setState(result);
      }
    catch(error){
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(()=>{
fetchName();
  },[])

  return (
    <div className="container Upcoming">
   {loading? 
  <div>
      <div className="loader">
      </div>
  </div>  
        :''}
        
 {
   state.map((item)=> {
     const{date,status,name,id,venue} = item;
     return(

<div className="card divcard" style={{width:'18rem'}} key={id}>
  <div class="card-body divcard-child">
          <h6 class="card-title venue">{venue}</h6>
          <h6 class="card-subtitle mb-2 text-muted date">{date}</h6>
       <div className="team-name">
          <p class="card-text">{name}</p>
      </div>
  </div>
  
</div>

     ) })
 }


  </div>
  )
}

export default Upcoming




 
