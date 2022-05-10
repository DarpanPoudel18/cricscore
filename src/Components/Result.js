import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
// const url = " https://api.npoint.io/85822657dc72cfec34a4"
const url = " https://api.npoint.io/6c39d4ec7aa814bbe5ef"

const Result = () => {
  const[state,setState] = useState([])
  const[loading,setLoading] = useState(true)
  const navigate = useNavigate();

  const fetchData = async() => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setLoading(false);
      console.log(result);
      setState(result);
     
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div className="main-result container ">
   {loading? 
  <div>
      <div className="loader">
      </div>
  </div>  
        :''}

{state.map((item)=>{
          const{venue,status,date,name,id,score} = item;
          return(
            <>

  <div className="mb-3 result-parent" key={id}>
     <div className="card-header bg-warning text-dark text-primary">{venue}{date}</div>
         <div class="card-body text-success">
           <h5 className="card-title result-name">{name}</h5>
        </div>
  {
  score.map((x)=>{
    const{o,r,w,inning} = x;
    return(
      <>  
      <div className="result-inning">
    <span className="child-result-inning">{inning}</span>
    </div>
    <div className="result-score">
    <span className="child-result-score">{r} - {w}</span><span className="child-result-over">{o} ov</span>
    </div>
   </>
    )
  })
 }
  <div class="card-footer bg-primary text-white" style={{textAlign:'center'}}>{status}</div>
</div>

     </>
    )
})}  


    </div>
  )
}

export default Result