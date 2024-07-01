import './App.css';
import { Card } from './components/card';
import { useFoodData } from './hooks/useFoodData';
import { useState } from 'react';
import { CreateModal } from './components/create-modal/create-modal';
import NearbyRestaurantsButton from './components/create-neabyRestaurants/NearbyRestaurantsButton';
import Slider from '@mui/material/Slider';

import emptyImage from './assets/pizza.png';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);



  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const handleFilterByPrice = (price: number) => {
    setMaxPrice(price);
  };

  const resetFilter = () => {
    setMaxPrice(undefined);
  };

  // Filtrar os dados com base no preço máximo
  const filteredData = maxPrice
    ? data?.filter(foodData => foodData.price <= maxPrice)
    : data;

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="content">
        <div className="filter-bar">
          <div className="slider-filter-container"> 
            <Slider className="slider-filter"
        onChange={(_, value) => handleFilterByPrice(value as number)}
        size="medium"
        min = {1}
        max = {120}
        defaultValue={100}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      </div>
      <div className="btn-filter-container">
        <button className="btn-filter" onClick={resetFilter}>Limpar Filtro</button>
      </div>
        </div>
        <div className="card-grid">
          {filteredData && filteredData.length > 0 ? (
            filteredData.map(foodData => (
              <Card
                key={foodData.id}
                id={foodData.id} 
                price={foodData.price}
                title={foodData.title}
                image={foodData.image}
              />
            ))
          ) : (
            <div className="empty-state">
              <img src={emptyImage} alt="Empty State" />
              <p>Nenhum item encontrado no cardápio.</p>
            </div>
          )}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
        <button className="btn-add" onClick={handleOpenModal}>Adicionar</button>
        <NearbyRestaurantsButton /> {/* Adicionar o botão */}
      </div>
    </div>
  );
}

export default App;
