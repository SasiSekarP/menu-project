import './App.css';
import { FaStore } from 'react-icons/fa';
import data from './data';
import { useState } from 'react';

function App() {
  const { fetchedClothData, navBarData } = data;
  const [clothData, setClothData] = useState(fetchedClothData);

  const sortFn = (type) => {
    if (type !== 'All') {
      let newData = fetchedClothData.filter((singleData) => {
        return (singleData.catagory === type);
      })
      
      setClothData(newData);
    } else {
      setClothData(fetchedClothData);
    }
  }

  return (
    <div className="App">
      <div className='heading-row'>
      <FaStore className='logo' />
      <h1 className='store-name'>Cloth Store</h1>
      </div>
      <div className='navBar'>
        {navBarData.map((singleData,index) => {
          return <div className='nav-btn' key={index} onClick={() => { sortFn(singleData)} }>{singleData}</div> 
        })}
      </div>
      <div className='card-container'>
        {clothData.map((singleData) => {
          return <div className='card' key={singleData.id}>
            <img src={singleData.image} className='photos' alt={singleData.title} />
            <div className='title'>{singleData.title}</div>
            <p>{ singleData.discription }</p>
            <div className='price'>₹ {singleData.price} only</div>
            
          </div> 
        })}
      </div>
    </div>
  );
}

export default App;
