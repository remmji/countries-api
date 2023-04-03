import React from 'react';
// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ChoosenCountry = () => {
const {state} = useLocation();

  return (
    <div>
     <h1>{state.data.name}</h1>
    </div>
  );
};



export default ChoosenCountry;