import { useState } from "react";

const HomePage = () => {
    const heading = "Welcome to blog page"


    // hook 
    //consists of value that can be changed later on
    //blogs is the name of the value inside usestate and setBlogs is the function that changes the value of blogs
    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    return ( 
        <div className="home">
            <h1>{ heading }</h1>
                {/* .map is use to display elements of array in html template */}
                {/* Syntax=> array.map(function(parameters)) */}
                {/* The function should contain the template to be displayed */}
                { blogs.map((blog)=>(         
                        //the react keeps tract of every element of array 
                        // key should contain unique value. It helps identify which element has been changed
                        // used in list and arrays   
                    <div className="blog-preview" key={ blog.id={} }>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </div>
                )) }
        </div>
     );
}
 
export default HomePage;