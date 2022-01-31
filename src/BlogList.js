// const BlogList = ({ blogs, heading, handleClickButton }) => {
const BlogList = ({ blogs, heading }) => {
    return ( 
        <div className="blog-lists">
            <h1>{ heading }</h1>
                {/* .map is use to display elements of array in html template */}
                {/* Syntax=> array.map(function(parameters)) */}
                {/* The function should contain the template to be displayed */}
                { blogs.map((blog)=>(         
                        //the react keeps tract of every element of array 
                        // key should contain unique value. It helps identify which element has been changed
                        // used in list and arrays   
                    <div className="blog-preview" key={ blog.id }>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>

                        {/* <button onClick={()=>handleClickButton(blog.id)}> Delete blog</button> */}
                    </div>
                )) }
        </div>
     );
}
 
export default BlogList;