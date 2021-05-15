import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { blogid } = useParams();
    const { data:blog, error, isBuffer } = useFetch('http://localhost:8000/blogs/'+blogid);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {/* <h2>Blog Details {blogid}</h2> */}
            {isBuffer && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;