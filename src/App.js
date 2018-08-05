import React, { Component } from 'react';
import Header from './Header';
import FilterControls from './FilterControls';
import Map from './Map';
import './App.css';
import { getForces, getCrimes, getNeighbourhoods } from './PoliceAPI';

class App extends Component {
  state = {
    forces: [],
    crimeCategories: [],
    currentArea: '',
    currentNeighbourhoods: [],
    currentCrime: '',
    selectedNeighbourhood: ''
  };

  setCurrentArea = area => {
    getNeighbourhoods(area).then(neighbourhoods =>
      this.setState({
        currentArea: area,
        currentNeighbourhoods: neighbourhoods
      })
    );
  };

  setCurrentCrime = crimeName => {
    const currentCrime = this.state.crimeCategories.filter(
      crime => crime.name === crimeName
    )[0];
    this.setState({ currentCrime });
  };

  selectNeighbourhood = neighbourhoodId => {
    this.setState({ selectedNeighbourhood: neighbourhoodId });
  };

  componentDidMount() {
    getForces().then(results =>
      this.setState({ forces: results.map(force => force.id) })
    );
    getCrimes().then(results =>
      this.setState({ crimeCategories: results, currentCrime: results[0] })
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="content">
          <FilterControls
            crimeCategories={this.state.crimeCategories}
            forceNames={this.state.forces}
            setCurrentArea={this.setCurrentArea}
            setCurrentCrime={this.setCurrentCrime}
            selectNeighbourhood={this.selectNeighbourhood}
            currentNeighbourhoods={this.state.currentNeighbourhoods}
          />
          <Map
            currentNeighbourhoods={this.state.currentNeighbourhoods}
            selectNeighbourhood={this.selectNeighbourhood}
            selectedNeighbourhood={this.state.selectedNeighbourhood}
          />
        </div>
      </div>
    );
  }
}

export default App;
