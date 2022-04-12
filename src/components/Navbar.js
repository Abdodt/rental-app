import { Badge } from "@material-ui/core";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import 'bootstrap/dist/css/bootstrap.min.css';
//import { mobile } from "../responsive";



const Container = styled.div` 
  height: 80px;
  border-bottom:1px solid grey;
  padding-bottom: 20px;
 `;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid black;  
  border-radius: 0px;
  width:72%;
  padding-right:6px;
`;

const Input = styled.input`
  border: none;
  border-right: 0.5px solid grey;
  width: 94.8%;
  height:30px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return(
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "black", fontSize: 17, alignItems:"center" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Rental</Logo>
        </Center>
        <Right>
          <AccountCircleOutlinedIcon />
          <MenuItem>Rented Items</MenuItem>
          <MenuItem>
          <Link to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;




