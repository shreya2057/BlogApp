import { useState } from "react";
import BlogList from "./BlogList";

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
            {/* blogs is the property which is known as porps */}
            <BlogList blogs = { blogs } heading = { heading } />
        </div>
     );
}
 
export default HomePage;