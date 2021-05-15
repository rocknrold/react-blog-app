// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// const Home = () => {
//     // let name = 'rocker';

//     const [name,setName] = useState('rocker');

//     const handleClick = (e) => {
//         setName('rock');
//         console.log(name);
//     }

//     // const handleClickAgain = (name, e) => {
//     //     console.log("Hello " + name , e.target);
//     // }

//     return (
//     <div className="home">
//         <h2>Homepage</h2>
//         <p>{ name }</p>
//         <button onClick={handleClick}>Click me</button>
//         {/* <button onClick={(e)=> handleClickAgain('rocker', e) }>Click me again</button> */}
//     </div>
//     );
// }
 
// const Home = () => {
    
//     const [blogs,setBlogs] = useState([
//         {title:'My new website', body:'lorem ipsum...', author:'rock', id:1},
//         {title:'My blog', body:'lorem ipsum...', author:'n', id:2},
//         {title:'Web dev', body:'lorem ipsum...', author:'rock', id:3},
//     ]);
    
//     const [name, setName] = useState('rock');

//     const handleDelete = (id) => {
//         const newBlogs = blogs.filter(blog => blog.id !== id);
//         setBlogs(newBlogs);
//     }

//     useEffect(() => {
//         console.log("use effect");
//         console.log(name);
//     }, [name]);

//     return (
//         <div className="home">
//             <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
//             <BlogList blogs={blogs.filter((blog)=> blog.author === 'rock' )} title="Rock Blogs!"/>
//             <button onClick={() => setName('rold')}>use effect</button>
//         </div>
//     );
// }

// const Home = () => {
    
//     const [blogs,setBlogs] = useState(null);
//     const [isBuffer, setBuffer] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             fetch('http://localhost:8000/blogs')
//             .then(res => {
//                 return res.json()
//             })
//             .then(data => {
//                 setBlogs(data)
//                 setBuffer(false)
//             })
//         }, 1000);
//     }, []);

//     return (
//         <div className="home">
//             {isBuffer && <div>loading...</div>}
//             {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
//         </div>
//     );
// }

// const Home = () => {
    
//     const [blogs,setBlogs] = useState(null);
//     const [isBuffer, setBuffer] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setTimeout(() => {
//             fetch('http://localhost:8000/blogs')
//             .then(res => {
//                 if(res.status === 404){
//                     throw Error('route does not exist!');
//                 } else if (!res.ok) {
//                     throw Error('could not connect to server');
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 setBlogs(data);
//                 setBuffer(false);
//                 setError(null);
//             })
//             .catch(err => {
//                 setError(err.message);
//                 setBuffer(false);
//             })
//         }, 1000);
//     }, []);

//     return (
//         <div className="home">
//             {error && <div>{error}</div>}
//             {isBuffer && <div>loading...</div>}
//             {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
//         </div>
//     );
// }


const Home = () => {
    const {data:blogs, isBuffer, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isBuffer && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home
