import React from 'react';
import ProductsCard from './components/products';
import product from './product';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const firstName = "Alex"; // Change to "" to test fallback

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <ProductsCard />
          </div>
        </div>

        <div className="greeting-section">
          <h2 className="greeting-text">
            Hello, {firstName ? firstName : "there"}!
          </h2>
          {firstName && (
            <div className="greeting-image-container">
              <img
                src={product.image}
                alt="Greeting"
                className="greeting-image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;