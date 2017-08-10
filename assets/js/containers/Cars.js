import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CarsUI from '../presentationals/CarsUI';

//Container component
class Cars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    }

    this.updateCars = this.updateCars.bind(this);
  }

  componentDidMount() {
    this.getCars();
  }

  getCars() {
    axios.get('http://localhost:4000/api/cars')
      .then((response) => {
        this.setState({
          cars: response.data.data
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  updateCars() {
    this.getCars();
  }

  render() {
    return (
      <MuiThemeProvider>
        <CarsUI cars = {this.state.cars} updateCars={this.updateCars} store={this.props.store}/>
      </MuiThemeProvider>
    )
  }
}

export default Cars
