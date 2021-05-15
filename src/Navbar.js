import {Link} from 'react-router-dom';

const Navbar = () => {
    const btnNavbarStyle = {
        color:'white',
        backgroundColor:'red',
        borderRadius: '8px'
    };

    return (
        <nav className="navbar">
            <h1>The rocknrold Blog</h1>
            <div className="links">
                <Link to="/" 
                style={btnNavbarStyle}>Home</Link>
                <Link to="/create" 
                style={btnNavbarStyle}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;