import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const HomePage = () => {
    const heading = "All blogs"

    // const [name, setName] = useState('mario');

    // hook 
    //consists of value that can be changed later on
    //blogs is the name of the value inside usestate and setBlogs is the function that changes the value of blogs
    // const [blogs,setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ])

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // const handleClickButton = (id) => {
    //    const newBlog =  setBlogs(blogs.filter((blog) => blog.id !== id));
    //    return newBlog;
    // }


    // useEffect function gets triggered when the components loads and thereafter when the state in rerendered
    // useEffect(()=>{
    //     console.log("triggered");
    // }, [name]);

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                setIsPending(false);
                setBlogs(data);
            })
        }, 1000)
        
    },[]);

    
    return ( 
        <div className="home">
            {/* blogs is the property which is known as porps */}
            {/* <BlogList blogs = { blogs } heading = { heading } handleClickButton = {handleClickButton} /> */}



            {/* <BlogList blogs = { blogs.filter((blog)=>blog.author === "mario") } heading = { "Mario's Blog" } /> */}
            
        {/* useEffect Dependency explained */}

            {/* <button onClick={
                ()=>{
                    setName('Luigi');
                }
            }>Change name</button>
            <p>{ name }</p> */}

            { isPending && <div>Loading...</div> }
            {blogs  && <BlogList blogs = { blogs } heading={ heading }/>}
        </div>
     );
}
 
export default HomePage;