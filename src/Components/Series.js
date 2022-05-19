import React,{useState,useEffect} from 'react'
const url = "https://api.npoint.io/5c35799c591283bd296c"


const Series = () => {
    const[state,setState] = useState([])
    const[loading,setLoading] = useState(true);

    const fetchData=async()=>{
        setLoading(true);
        try{
            const response = await fetch(url);
            const result = await response.json();
            setLoading(false);
            setState(result) 
            }catch(error){
            setLoading(false);
            console.log(error);
        }
     
    }

    useEffect(()=>{
       fetchData();
    },[])

  return (
    <div className="container series">
      {loading? 
  <div>
      <div className="loader">
      </div>
  </div>  
        :''}

     {
        state.map((item)=>{
            const{id,name,startDate,endDate,
            odi,t20,test,squads,matches} = item;
            return(
                <div className="card text-center series-margin  text-dark Parent-card" key={id}>
                   <div className="card-header bg-danger text-white">
                    <p>{name}</p>
                   </div>
                   <div className="card-header bg-warning bg-gradient ">
                    <span>{startDate}</span>
                    <span>{endDate}</span>
                   </div>
               <div className="card-body  child-content ">
                 <h5 class="card-title">ODI {odi}</h5>
                 <h5 class="card-title">T20  {t20}</h5>
                 <h5 class="card-title">TEST {test}</h5>
                 {/* <h5 class="card-title">MATCHES {matches}</h5> */}
             <a href="https://www.cricbuzz.com/cricket-match/live-scores/recent-matches" class="btn btn-primary">View More</a>
              </div>
             </div>
                  )
                   })




                   
    }

      </div>
    )
}

export default Series
