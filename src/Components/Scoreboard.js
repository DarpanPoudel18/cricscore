// import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons'
import React,{useState,useEffect} from 'react'
const url = "https://api.npoint.io/11fef9c7eae0aa685ad8"

const Scoreboard = () => {
  const[state,setState] = useState([])
  const[gameStatus,setGameStatus] = useState([])
  const[loading,setLoading] = useState(true);
 
 const fetchData=async()=>{
    try{
      const response = await fetch(url)
      const result = await response.json();
      const score = result.map((item)=> item.scorecard)[0]
      console.log(score);
      setState(score);
      setGameStatus(result);
      setLoading(false)
      }
    catch(error){
      console.log(error);
    }
    
}

console.log(`this`,gameStatus);

useEffect(()=>{
 fetchData();
  },[])
 
  return (
     <div className="Scoreboard-container container ">
        {loading? 
          <div>
               <div className="loader">
              </div>
         </div>  
     : <div className="Scoreboard-header container w-75 p-2  ">
              <div className="text-center">{gameStatus.map((x)=> x.name)}</div>
        <div className="container overflow-hidden child-scoreboard-header">
             <span className="text-center ">Series:Indian Premier league</span>
             <span className="p-2 text-center ">Venue:{gameStatus.map((x)=> x.venue)}</span>
             <span className="p-2 text-center">Date:{gameStatus.map((x)=> x.date)}</span>
        </div>
    </div>}

  
      
     <div className="container"> 
         <p className="win-msg text-primary">{gameStatus.map((x)=> x.status)}</p>
     </div>
    
 {
      state.map((item)=>{
        const{batting,bowling,catching,extras,inning,totals,id} = item;
        return(
          <>
          <div className="container  p-2 bg-secondary text-white" key={id}>
              <span className="inning-name">{inning}</span>
              <span className="pull-right">{totals.R}-{totals.W} ({totals.O})</span>
         </div>

   <table className="table  p-3" >
     <thead>
      <tr>
      <th scope="col" className="table-secondary text-secondary">Batter</th>
      <th scope="col" className="table-secondary text-secondary"></th>
      <th scope="col" className="table-secondary text-secondary">R</th>
      <th scope="col" className="table-secondary text-secondary">B</th>
      <th scope="col" className="table-secondary text-secondary">4s</th>
      <th scope="col" className="table-secondary text-secondary">6s</th>
      <th scope="col" className="table-secondary text-secondary">SR</th>
     </tr>
    </thead>

       <tbody>
       {batting.map((x)=> {
        return(
          <tr>
             <td scope="row" className="text-primary"> {x.batsman.name}</td>
             <td className="text-secondary">{x[`dismissal-text`]}</td>
             <td>{x.r}</td>
             <td>{x.b}</td>
             <td>{x[`4s`]}</td>
             <td>{x[`6s`]}</td>
             <td>{x.sr}</td>
          </tr>
          
        ) 
    } )}
      </tbody>
  </table>


{/* Looping the through same table for bowler's data */}

<table className="table table w-75 p-3" key={id}>
     <thead>
      <tr>
      <th scope="col" className="table-secondary text-secondary">Bowler</th>
      <th scope="col" className="table-secondary text-secondary">O</th>
      <th scope="col" className="table-secondary text-secondary">M</th>
      <th scope="col" className="table-secondary text-secondary">R</th>
      <th scope="col" className="table-secondary text-secondary">W</th>
      <th scope="col" className="table-secondary text-secondary">NB</th>
      <th scope="col" className="table-secondary text-secondary">WD</th>
      <th scope="col" className="table-secondary text-secondary">ECO</th>
    </tr>
  </thead>
  <tbody>
  {bowling.map((x)=> {
    return(
          <tr>
             <td scope="row" className="text-primary"> {x.bowler.name}</td>
             <td className="text-secondary">{x.o}</td>
             <td>{x.m}</td>
             <td>{x.r}</td>
             <td>{x.w}</td>
             <td>{x.nb}</td>
             <td>{x.wd}</td>
             <td>{x.eco}</td>
          </tr>
          
        ) 
    } )}
    </tbody>
</table>
<br/><br/>


 </>
        )
      })
    }

     
    </div>
  )
}

export default Scoreboard

 
