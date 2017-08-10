import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

import CarCard from './CarCard';

//presentational component
class CarsUI extends React.Component {
  constructor() {
    super();
    this.state = {
      addCarDialog: false,
      make: "",
      model: "",
      color: "",
      year: ""
    };

    this.openAddCarDialog =  this.openAddCarDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  openAddCarDialog() {
    this.setState({
      addCarDialog: true
    });
  }

  handleAdd(event) {
    event.preventDefault();
    axios({
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      url: 'http://localhost:4000/api/cars',
      data: {
        car: {
          make: this.state.make,
          model: this.state.model,
          color: this.state.color,
          year: this.state.year
        }
      }
    })
      .then((response) => {
        this.handleClose();
        this.props.updateCars();
        this.setState({
          make: "",
          model: "",
          color: "",
          year: ""
        });
      })
      .catch((error) => {
        alert(error)
      })
  }

  handleClose() {
    this.setState({
      addCarDialog: false
    });
  }

  handleMake(event) {
    this.setState({
      make: event.target.value
    });
  }

  handleModel(event) {
    this.setState({
      model: event.target.value
    });
  }

  handleColor(event) {
    this.setState({
      color: event.target.value
    });
  }

  handleYear(event) {
    this.setState({
      year: event.target.value
    });
  }

  render() {
    const carCards = this.props.cars.map((car, index) =>
      <CarCard
        key = {index}
        id = {car.id}
        color = {car.color}
        make = {car.make}
        model = {car.model}
        year = {car.year}
        store = {this.props.store}
        updateCars = {this.props.updateCars}
      />
    );

    const actions = [
      <FlatButton
        label="Cancel"
        labelStyle={{
          color: "#4D43E7"
        }}
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        backgroundColor= {"#4D43E7"}
        hoverColor={"#635CEA"}
        label="Confirm"
        labelStyle={{ color: "#FFFFFF" }}
        primary={true}
        keyboardFocused={false}
        onTouchTap={this.handleAdd}
      />,
    ];

    return (
      <div className="dashboard">
        <div className={css(styles.topBar)}>
          <h1 className={css(styles.title)}>RESTFUL CARS</h1>
        </div>
        <div className={css(styles.carsBody)}>
          <div className={css(styles.addCarsRow)}>
            <h2 className={css(styles.carsText)}>Our Rides</h2>
            <RaisedButton
              onTouchTap={this.openAddCarDialog}
              label="Add Car"
              labelColor="#FFFFFF"
              backgroundColor= "#4D43E7"
              labelStyle={{
                fontFamily: 'Lato',
                fontSize: "14px"
              }}
              style={{
                marginLeft: "20px"
              }}
            />
            {this.state.addCarDialog ? (
              <Dialog
                title="Add a Ride"
                titleStyle={{color: "#686868"}}
                actions={actions}
                modal={false}
                open={this.state.addCarDialog}
              >
              <TextField
                floatingLabelText="Make"
                value={this.state.make}
                onChange={this.handleMake.bind(this)}
                floatingLabelFocusStyle={{color: "#4D43E7"}}
                underlineFocusStyle={{borderColor: "#4D43E7"}}
              /><br />
              <TextField
                value={this.state.model}
                onChange={this.handleModel.bind(this)}
                floatingLabelText="Model"
                floatingLabelFocusStyle={{color: "#4D43E7"}}
                underlineFocusStyle={{borderColor: "#4D43E7"}}
              /><br />
              <TextField
                value={this.state.color}
                onChange={this.handleColor.bind(this)}
                floatingLabelText="Color"
                floatingLabelFocusStyle={{color: "#4D43E7"}}
                underlineFocusStyle={{borderColor: "#4D43E7"}}
              /><br />
              <TextField
                value={this.state.year}
                onChange={this.handleYear.bind(this)}
                type="number"
                floatingLabelText="Year"
                floatingLabelFocusStyle={{color: "#4D43E7"}}
                underlineFocusStyle={{borderColor: "#4D43E7"}}
              /><br />
              </Dialog>
            ) : (
                <div></div>
              )
            }
          </div>
          <div className={css(styles.carsRow)}>
          {carCards}
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  topBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "75px",
    width: "100vw",
    padding: "30px",
    paddingRight: "50px",
    background: `
      linear-gradient(
        45deg,
        rgba(156, 230, 225, 1),
        rgba(125, 163, 229, 0.95),
        rgba(77, 67, 231, 1)
      )
      no-repeat center center
    `,
    backgroundSize: "cover",
    boxShadow: `2px 9px 18px -5px rgba(0,0,0,0.18)`
  },
  carsBody: {
    position: "relative",
    width: "100vw",
    height: "100%"
  },
  title: {
    color: "#FFFFFF",
    fontFamily: 'Lato',
    fontSize: "30px",
    fontWeight: "700"
  },
  addCarsRow: {
    paddingLeft: "50px",
    paddingRight: "50px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  carsText: {
    color: "#686868",
    fontFamily: 'Open Sans',
    fontSize: "24px",
    fontWeight: "400"
  },
  carsRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "30px",
    paddingLeft: "50px",
    paddingRight: "50px",
    background: "none"
  },
  label: {
    color: "#828982",
    fontFamily: 'Open Sans',
    textAlign: "left",
    marginBottom: "5px",
    marginTop: "5px",
    fontSize: "16px",
    fontWeight: "400"
  }
});

export default CarsUI
