import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <div className="blog-details">
                <article>
                    <h2>Title: {title}</h2>
                    <p>Written by: {author}</p>
                    <div>Body: {body}</div>
                </article>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="rock">Rock</option>
                    <option value="rold">Rold</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}
 
export default Create;