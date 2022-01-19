import React, { useEffect,useState,useContext } from 'react';
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Button from "../../components/CustomButtons/Button.js";
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import api from "../../utils/api";
import { getDoctors } from '../../actions/authActions.js';
import {GlobalContext} from '../../GlobalContext';
import Axios from 'axios';
import Navbar from '../layout/Navbar.js';
import { Link } from "react-router-dom";


const styles = {
    cardCategoryWhite: {
      "&,& a,& a:hover,& a:focus": {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      "& a,& a:hover,& a:focus": {
        color: "#FFFFFF"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      }
    }
  };

const useStyles = makeStyles(styles);

function Doctors() {

    const [ allDoctors, setAllDoctors ] = useState([]);

    useEffect(() => {
      const getDoctorsData = async () => {
        const response = await Axios.post(
          "/api/users/getdoc"
        )
        setAllDoctors(response.data);
      }
      getDoctorsData();
      // done
    })

    return ( 
        <>
        <Navbar />
        <div style={{marginTop: "22px"}}>
            <StyledDoctorContainer>
                 {allDoctors.map(elem => (
        <Card>
            <CardHeader color="primary" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <img width={25} height={25} style={{ borderRadius: '50%', marginRight: 8 }}/>
            <span style={{ textTransform: 'capitalize' }}>{elem.name}</span>
            </CardHeader>
            <CardBody>
            <StyledIndividualDoctorPanel>
              <span style={{ textTransform: 'capitalize' }}>Specialization: {elem.specialization}</span>
              <span style={{ textTransform: 'capitalize' }}>Gender: {elem.gender}</span>
              <span>Age: {elem.age}</span>
              <span style={{ borderTop: 'solid', borderColor: "#ccc", borderWidth: 1, padding: '4px auto', margin: '4px 0' }}>About: {elem.about}</span>
            </StyledIndividualDoctorPanel>
            <Link to= {`/book/${elem.name} `} ><StyledButton
                  fullWidth
                  color="primary"
                //   onClick={() => {
                //     history.push(`/user/bookAppointment/${elem._id}`);
                //   }}
                  >
                    Book an Appointment
                    {/* <Link to={`/bookAppointment/3`} style={{ color: '#fff' }}>
                      Book an Appointment
                    </Link> */}
                  </StyledButton></Link>
          </CardBody>
        </Card>
                ))} 
      </StyledDoctorContainer>
          
        </div>

        </>
    )    
}

export default Doctors;

const StyledButton = styled(Button)`
  margin: 16px auto;
`;

const StyledDoctorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  column-gap: 12px;
  row-gap: 12px;
  justify-content: center;
  align-items: center;
`;

const StyledIndividualDoctorPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6px;
`;
