import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import Home from "../pages/Home";
import { mobile } from "../responsive";
// import { useNavigate } from "react-router-dom";
//  import Register from "../pages/Register";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
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
  margin-right: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width:500px;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  // text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 45px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  // const navigate = useNavigate();
  return (
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
        <Right>
        
           {/* <MenuItem onClick={()=>{
              navigate('/Register');
           }}>REGISTER</MenuItem> */}
           {/* <Link rel="stylesheet" to="/">REGISTER</Link> */}
          
             <MenuItem>ManFashion</MenuItem>
             <MenuItem>WomanFashion</MenuItem>
             <MenuItem>REGISTER</MenuItem>
             <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;