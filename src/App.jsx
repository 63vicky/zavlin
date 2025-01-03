import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from './components/ui/button';
import Navbar from './clothing-store-landing/Navbar';
import ClothingStoreLanding from './clothing-store-landing/ClothingStoreLanding';
import { ScrollArea } from '@radix-ui/react-scroll-area';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="bg-background">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <ScrollArea className="w-full h-full">
        <ClothingStoreLanding />
      </ScrollArea>
    </>
  );
}

export default App;
