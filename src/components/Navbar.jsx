import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {
  BrowserRouter as Router,
  Link,
  useParams
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import Register from "../pages/Register";
import Menfashion from "../components/Menfashion";
import Womenfashion from "../components/Womenfashion";
import Login from "../pages/Login";



const Container = styled.div`
  height: 100px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid ;
  border-radius: 10px;
  display: flex;  
  align-items: center;
  margin-left: 45px;
  margin-right: 500px;
  padding: 5px;
  margin-bottom: 39px;
  margin-top: 25px;
`;

const Input = styled.input`
  border: none;
  width:500px;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  margin-bottom: 39px;
  font-weight: bold;
  margin-top: 25px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  list-style-type: none
  justify-content: flex-end;
  }
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 45px;
  margin-bottom: 38px;
 
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  
  return (
    <Router>     
      <div>
      <Container>
      <Wrapper>
        <Left>
        <Logo>
          FASHION HUB.
        </Logo>
        </Left>
        <Center>
        <SearchContainer>
            <Input placeholder="Search for products, brands and more" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
</Center>

                {/* <MenuItem>ManFashion</MenuItem>
                <MenuItem>WomanFashion</MenuItem>
                <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGNIN</MenuItem> */}
          
              <Right>
              <ul>
                <li  style={{ listStyleType: "none"}}>
              <Link style={{ textDecoration: 'none'}} to="/Menfashion">Menfashion</Link>
              </li>
              <li  style={{ listStyleType: "none"}}>
                <Link style={{ textDecoration: 'none' }} to="/Womenfashion">Womenfashion</Link>
              </li>
               <li style={{ listStyleType: "none"}}>
                <Link style={{ textDecoration: 'none' }} to="/Register">Register</Link>
              </li>
              <li style={{ listStyleType: "none"}}>
                  <Link style={{ textDecoration: 'none' }} to="/Login">Sign In</Link>
              </li>
</ul>
            
          
            
          <MenuItem>
            <Badge badgeContent={0} color="primary" >
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Right>
        </Wrapper>
      </Container>
        <Routes>
          <Route path='/Menfashion' element={<Menfashion/>}/>
          <Route path='/Womenfashion' element={<Womenfashion/>}/>
            <Route path='/Register' element={<Register/>} />
            <Route path='/Login' element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;