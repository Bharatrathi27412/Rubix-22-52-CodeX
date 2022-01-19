import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Navbar from '../layout/Navbar.js';
import Axios from 'axios';
import { user_id } from '../layout/Navbar.js';


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




function Appointments(){
    const [uApp, setUpp] = useState([]);

  const [pApp, setPpp] = useState([]);

  useEffect(() => {
      const getAllAppointments = async () => {
          const data = await Axios.post(
              "api/users/getappointment/"+user_id
          ).then((res) => res.data)

          console.log(data.data);
          let j=1,k=1;
      let upp = [], ppp = [];
      for(let i=0;i<data.data.length;i++) {
        if(data.data[i].status == "Pending") {
          upp.push([`${j}`, data.first, Date(data.data[i].date), data.data[i].status]);
          j++;
        }

        else {
          ppp.push([`${k}`, data.first, Date(data.data[i].date), data.data[i].status]);
          k++;
        }
      }
      setUpp(upp);
      setPpp(ppp);
      }
      getAllAppointments();

  },[])

    const classes = useStyles();

    // const { user } = this.props.auth;

    console.log(user_id);


  return (
      <>
      <Navbar style={{marginBottom:"22px"}} />
    <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Upcoming Appointments</h4>
          <p className={classes.cardCategoryWhite}>
            Here is a list of your upcoming appointments
          </p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="info"
            tableHead={["ID", "Doctor's Name", "Date/Time", "Status"]}
            tableData={uApp}
          />
        </CardBody>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={12} md={12}>
    <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Previous Appointments</h4>
          <p className={classes.cardCategoryWhite}>
            Here is a list of your previous appointments
          </p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="info"
            tableHead={["ID", "Doctor's Name", "Date/Time", "Status"]}
            tableData={pApp}
          />
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
  </>
  );
}

Appointments.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
)(Appointments);
