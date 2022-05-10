import React,{useState,useEffect} from 'react'
const url='https://api.npoint.io/9fd14f83b58fa7add625';

const Gallery = () => {
const[image,setImage] = useState([])
const[loading,setLoading] = useState(true)

const fetchImages=async()=>{
  setLoading(true);
  try{
    const response = await fetch(url);
    const images = await response.json();
    setLoading(false);
    setImage(images);
  }
  catch(error){
    setLoading(false);
console.log(error);
  }
}

useEffect(()=>{
fetchImages();
},[])

  return (
    <div className="Gallery ">
       {loading? 
  <div>
      <div className="loader">
      </div>
  </div>  
        :''}

        <div className="container photos">
          {image.map((x)=>{
            return(
              <div key={x.id}>
              <img src={x.img} className="img-fluid gallery-img" alt="..."/>
              </div>
            )
          })}

        </div>

    </div>
  )
}

export default Gallery


