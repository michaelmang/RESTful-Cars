import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import axios from 'axios';

//presentational component
class CarCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editCarDialog: false,
      make: "",
      model: "",
      color: "",
      year: ""
    };

    this.openEditCarDialog =  this.openEditCarDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  openEditCarDialog() {
    this.setState({
      editCarDialog: true
    });
  }

  handleEdit(event) {
    event.preventDefault();
    axios({
      method: 'put',
      headers: {
        "Content-Type": "application/json",
      },
      url: 'http://localhost:4000/api/cars/' + this.props.id,
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
          year: "",
          updateID: ""
        });
      })
      .catch((error) => {
        alert(error)
      });
  }

  handleClose() {
    this.setState({
      editCarDialog: false
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
    const title = this.props.make;
    const subtitle = this.props.model + " | " + this.props.color + " | " + this.props.year;

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
        onTouchTap={this.handleEdit}
      />,
    ];

    return (
      <Card
        style={{
          maxWidth: "300px",
          marginBottom: "50px"
        }}
      >
        <CardMedia
          overlay={
            <CardTitle
              title={title}
              subtitle={subtitle}
            />
          }
        >
          <img src="http://bit.ly/2vn0SFU" alt="" />
        </CardMedia>
        <CardActions>
          <FlatButton
            onTouchTap={this.openEditCarDialog}
            label="Edit Car Info"
            labelStyle={{
              color: "#4D43E7",
              fontFamily: "Open Sans"
            }}
          />
          {this.state.editCarDialog ? (
            <Dialog
              title="Edit Ride"
              titleStyle={{color: "#686868"}}
              actions={actions}
              modal={false}
              open={this.state.editCarDialog}
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
        </CardActions>
      </Card>
    )
  }
}

export default CarCard
