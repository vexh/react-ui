// After
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, Link,  BrowserRouter as Router } from "react-router-dom";
import Button from './button';
import Icon from './icon/icon';

export default function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/icon" element={<Icon name="wechat"/>} />
          <Route path="/button" element={<Button />} />
        </Routes>
      </div>
    );
  }



// App.js
function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/icon">Icon</Link>
        </nav>
      </>
    );
  }

const container = document.getElementById('app') as HTMLElement; // 必须确保 container 不是空
createRoot(container).render(<Router><App /></Router>)