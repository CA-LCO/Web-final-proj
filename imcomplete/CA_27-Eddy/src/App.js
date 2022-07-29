import Login from "./Components/Login";
import Signup from "./Components/Signup";
import LinkList from "./Components/LinkList";
// import UserList
import ThunkCounter from "./Components/ThunkCounter";
import { logoutThunk } from './Redux/authSlice'
import { BrowserRouter, Routes, Link, Route, Navigate } from "react-router-dom";
import { Container, Navbar, NavItem, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import RequireAuth from "./Components/RequireAuth";
import UserList from "./Components/UserList";

// import useSelector and useDispatch from react-redux
// import your logout thunk action

// Create the Require auth function

function App() {
  const dispatch = useDispatch()
  // use useDispatch here so you can logout later
  // use useSelector here to check if the user is logged in
  const isAuthenticated = useSelector(state => state.authStore.isAuthenticated);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar bg="dark">
            {isAuthenticated ? (
              <Container>
                <NavItem>
                  <Link to="/linkList">LinkList</Link>
                </NavItem>
                {/* After you finish implementing the userList uncomment below */}
                <NavItem>
                  <Link to='/userList'>userList</Link>
                </NavItem>
                <NavItem>
                  <Link to="/thunkCounter">Thunk Counter</Link>
                </NavItem>
                <NavItem>
                  {/* Implement a logout button and link it to the authStore */}
                  <Link to='/'><div onClick={()=>{dispatch(logoutThunk())}}>logout</div></Link>
                </NavItem>
              </Container>
            ) : (
              <Container>
                <NavItem>
                  <Link to='/'>Signup</Link>
                </NavItem>
                <NavItem>
                  <Link to='/login'>Login</Link>
                </NavItem>
                {/*<NavItem>
                  <Link to='/linkList'>LinkList</Link>
                </NavItem>*/}
                {/* After you finish implementing the userList uncomment below */}

                {/* <NavItem>
                  <Link to='/userList'>userList</Link>
                </NavItem> */}
                <NavItem>
                  <Link to="/thunkCounter">Thunk Counter</Link>
                </NavItem>
                
              </Container>
            )}
          </Navbar>

          {/* After you have created the require auth functions, protect the linkList and the userList so that users need to login before they can access that component */}
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/thunkCounter" element={<ThunkCounter />} />
            <Route path="/linkList" element={<RequireAuth redirectTo="/login"><LinkList /></RequireAuth>} />
            {/* After you finish implementing the userList uncomment below */}
            <Route path='/userList' element={<RequireAuth redirectTo="/login"><UserList /></RequireAuth>} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
