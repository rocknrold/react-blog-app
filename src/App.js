import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './404';

function App() {
  // const title = 'Welcome to the new blog';
  // const person = {
  //   name: "harold",
  //   age : 21
  // }
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blog/:blogid">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/* <Home /> */}
        {/* <h1>{ title }</h1>
        <p>{ person.name }</p>
        <p>Person ages : { person.age }</p> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
