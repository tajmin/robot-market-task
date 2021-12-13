import * as React from 'react';
import Shop from './components/Shop/Shop/Shop';
import CartProvider from './context/CartProvider';

function App() {
  return (
    <div className="App">
      {/*Add your code here*/}
      <CartProvider>
        <Shop></Shop>
      </CartProvider>
    </div>
  );
}

export default App;
