import React,{useState,useEffect} from "react";
import Axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MainContent from "./MainContent";

const Mydata = () =>{
   
   const [inputValue,setInputvalue] =useState('');
   const [name,setName]= useState('india');
   const [propsData,setPropsData] =useState(null);


   const fetchData =async () =>{
        try{
          const {data} = await Axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
          setPropsData(data[0]); 
        }catch (error){
            toast("An Error Occurred!")
        }
   }
   useEffect(()=>{
       fetchData()
   },[name]);

   const onChange = (e) =>{
     setInputvalue(e.target.value);
   }
   const handleChange = (e) =>{
       e.preventDefault();
       if(inputValue === ''){
           return toast("Please Enter the value..",{type: "error"});
       }
       setName(inputValue);
       setInputvalue('');
   }
   return(
       <div>
           <div className="text-center mt-5 ">
                  <form onSubmit={handleChange}>
                  <input placeholder="search country" className="py-2 sm:w-full xl:w-1/2 md:w-1/2 capitalize rounded px-3 border-b-2 focus:border-none to-black" value={inputValue} onChange={onChange}/>
                  <button className="bg-green-300 rounded hover:bg-green-800 hover:text-white py-2 px-8 font-black ">Serach</button>
                  </form>
           </div>
           <ToastContainer/>
           { propsData ? <MainContent data={propsData}/> :null  }
       </div>
   )
}
export default Mydata;