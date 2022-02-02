import { useState, useEffect } from "react";

//custom hooks

const useFetch  = (url) => {

    const abortCont = new AbortController();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
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
                 
                if(err.name === "AbortError"){
                    console.log("Fetch aborted");
                }else{
                    setIsPending(false);
                    setData(null);
                    setError(err.message);
                    console.log(err);
                }
            })
            

        }, 1000)
        return ()=> abortCont.abort();
    },[]);


    return { data, isPending, error };
}
 
export default useFetch ;