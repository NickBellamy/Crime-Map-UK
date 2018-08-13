import React from 'react';
import PropTypes from 'prop-types';
import LocationSelector from './LocationSelector';
import NeighbourhoodInfo from './NeighbourhoodInfo';

const FilterControls = ({
  currentArea,
  filteredNeighbourhoods,
  forceNames,
  setCurrentArea,
  selectNeighbourhood,
  selectedNeighbourhood,
  filterNeighbourhoods,
  filterQuery,
  updateFilterQuery,
  isLoading
}) => {
  const toggleMenu = () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.querySelector('#tab_arrow').classList.toggle('rotate');
  };

  return (
    <section id="sidebar">
      <div id="sidebar_main">
        <LocationSelector
          currentArea={currentArea}
          forceNames={forceNames}
          setCurrentArea={setCurrentArea}
        />
        <NeighbourhoodInfo
          isLoading={isLoading}
          filterQuery={filterQuery}
          updateFilterQuery={updateFilterQuery}
          filteredNeighbourhoods={filteredNeighbourhoods}
          selectNeighbourhood={selectNeighbourhood}
          selectedNeighbourhood={selectedNeighbourhood}
        />
      </div>
      <a id="tab_link" href="#" onClick={toggleMenu}>
        <div id="sidebar_tab">
          <div id="tab_arrow">></div>
        </div>
      </a>
    </section>
  );
};

FilterControls.propTypes = {
  currentArea: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  filterQuery: PropTypes.string.isRequired,
  updateFilterQuery: PropTypes.func.isRequired,
  selectNeighbourhood: PropTypes.func.isRequired,
  selectedNeighbourhood: PropTypes.object.isRequired,
  filteredNeighbourhoods: PropTypes.array.isRequired,
  forceNames: PropTypes.array.isRequired,
  setCurrentArea: PropTypes.func.isRequired
};

export default FilterControls;
