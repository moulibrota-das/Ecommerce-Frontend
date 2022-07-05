import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
  margin: 0;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-item: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
`;
const SearchWrapper = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-item: center;
  margin left: 25px;
  padding: 5px 10px;
`;
const Input = styled.input`
  display: flex;
  border: none;
  outline: none;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: center;
`;
const Logo = styled.h1`
  font-size: 25px;
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: flex-end;
  padding: 5px;
`;
function Navbar() {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <SearchWrapper className="text-sm text-grey">
              <Input />
              <SearchIcon />
            </SearchWrapper>
          </Left>
          <Center>
            <Logo>LOGO.</Logo>
          </Center>
          <Right>
            <div class="flex flex-inline items-center mx-4">
              <h4 className="ml-4">Register</h4>
              <h4 className="ml-4">Sign In</h4>
            </div>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Navbar;
