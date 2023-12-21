import './App.css';
import { Listing } from './components/Listing/Listing';
import { productData } from './data/ProductData';

function App() {

  return (
    <>
      <div className='shop'>
        <Listing products={productData}/>
      </div>
    </>
  )
}

export default App
