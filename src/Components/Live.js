import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const url=" https://api.npoint.io/7449f77f21e49fe45328"

const Live = () => {
  const [state, setState] = useState([]);
  const[loading,setLoading] = useState(true)
  const navigate = useNavigate();

  const fetchData = async() => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setLoading(false);
      setState(result);
      } catch (error) {
        setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
    },[]);
   
return (
  <div className="background">
   {loading? 
  <div>
  <h1 style={{textAlign:'center',color:'white'}}>International</h1>
  <div className="loader">
   </div>
  </div>  
        :''}
   
     
     <div className="container Live">
        {state.map((item)=>{
          const{venue,status,date,score,id} = item;
          return(
            <div>
   <div className="container row g-0 bg-light innerlive" key={id}>
      <span className="live-venue h6">{venue}</span>
      <span className="live-date h6">{date}</span>
         <hr/>
     {
         score.map((x)=>{
           return(
              <>
         <div className="container col-md-6 mb-md-0 p-md-4 runs-block">
           <img src={x.logo} className="logo" alt="..."/>
           <span className="score">{x.r}/{x.w}</span><span className="over1">{x.o} ov</span>
         </div>

        <div className="container col-md-6 p-4 ps-md-0 live-child-content">
          <div>{x.inning} - {x.r}/{x.w}</div>
       </div>
            </>
                 )})
      }

         <div className="win-msg scorecard live-status-block">
            <div className="h6 live-status">{status}</div>
            <p onClick={()=> navigate(`/Scoreboard/${id}`)} className="scoreboard-link">Scorecard</p>
         </div>
         
      </div>
            </div>
          ) })}  



  </div>
</div>
  );
};

export default Live;


 
