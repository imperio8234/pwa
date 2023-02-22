import React, { useEffect, useState } from "react";






export const Home=()=>{
    

  

    const [res, setRes ]=useState();
    


    console.log(res)

    


    const resivirApi=async()=>{
       // const res= await fetch("http://localhost:4000/login/home");
        //const data=await res.json();
        //setRes(data)
        console.log("peticion")
       
    };
    resivirApi()
     
 
    return(
        <div>
            
            <h1>Home</h1>
     
        </div>
    )
}