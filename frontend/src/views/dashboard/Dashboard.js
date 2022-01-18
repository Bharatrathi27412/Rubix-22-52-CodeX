import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar"
import styled from "styled-components"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// material
// components





class Dashboard extends Component {


  render() {

    const { user } = this.props.auth;

    console.log(user);

    return (
      <>
      <Navbar />

      <Container>
            <h4>Welcome, {user.name.split(" ")[0]}</h4>
            <GridBox>
              <Wrap>
                <div><AccountCircleRoundedIcon/></div>
                <span>10</span>
                <p>Total Users</p>
              </Wrap>
              <Wrap></Wrap>
              <Wrap></Wrap>
              <Wrap></Wrap>


            </GridBox>
      </Container>

      </>

    );
  }}


const Container = styled.div` 
  background-color: rgb(255,255,255);
  padding: 0 calc(3.5vw + 5px);

  h4 {
    font-size: 20px;
  }

`

const GridBox = styled.div` 
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  padding: 30px 0 26px 0;


`

const Wrap = styled.div` 
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 0/ 69%) 0px 26px 30px -10px,rgb(0 0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    background-color: rgb(200,250,205);
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background-image: linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(0,123,85);
    }

    span {
      margin-top: 22px;
      font-size: 2.875rem;
      margin-bottom: -10px;
      color: rgb(0,82,73);
      font-weight: 700;
      line-height: 1.5;
    }

    p {
      font-size: 1.875rem;
      font-weight: 600;
      opacity: 0.72;
      color: rgb(0,82,73);
      /* text-transform: uppercase; */

    }


`


Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
