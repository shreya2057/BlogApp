import { useState, useEffect } from "react";

//custom hooks

const useFetch  = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("The requested data cannot be found") //error commig from server
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setIsPending(false);
                setError(null);
                setData(data);
            }).
            catch((err)=>{
                setIsPending(false);
                setData(null);
                setError(err.message);
                console.log(err);
            })
        }, 1000)
        
    },[]);


    return { data, isPending, error };
}
 
export default useFetch ;