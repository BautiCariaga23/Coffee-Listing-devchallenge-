import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import list from "./components/coffeeList.json"
import CoffeeCard from './components/CoffeeCard';

function App() {

  const [buttonSelected, setButtonSelected] = useState(0);
  return (
    <>
     <header>
     </header>
    <div className='centered'>
    <main>
      <div>
      <h1>Our Collection</h1>
      <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      <div className='line'>
      <button onClick={()=>{
        setButtonSelected(0)
      }} className={`${buttonSelected == 0 ? 'selected' : 'unselected'}`}>All Products</button>
      <button onClick={()=>{
        setButtonSelected(1)
      }} className={`${buttonSelected == 1 ? 'selected' : 'unselected'}`}>Available Now</button>
      </div>
      </div>
      <div className='grid'>
        {list.list.map((el)=>{
          if(buttonSelected == 1 && !el.soldout){
            return <CoffeeCard ratings = {el.ratings} soldout = {el.soldout} rate = {el.rate} votes = {el.votes} image = {el.image} popular = {el.popular} name = {el.name} price = {el.price}></CoffeeCard>
          }else if(buttonSelected == 0){
            return <CoffeeCard ratings = {el.ratings} soldout = {el.soldout} rate = {el.rate} votes = {el.votes} image = {el.image} popular = {el.popular} name = {el.name} price = {el.price}></CoffeeCard>
          }
          
        })}
      </div>
    </main>
    </div>
    </>
  );
}

export default App;
