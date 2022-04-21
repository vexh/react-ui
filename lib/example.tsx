import React from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, Link, HashRouter as Router } from "react-router-dom";
import Button from "./button";
import Layout from "./layout/layout";
import IconExample from "./icon/icon.example";
import DialogExample from "./dialog/dialog.example";
import LayoutExample from "./layout/layout.example";
import Header from "./layout/header";
import Aside from "./layout/aside";
import Footer from "./layout/footer";
import Content from "./layout/content";
import Logo from "./icons/logo.png";
import "./example.scss";

export default function App() {
  return (
    <Layout>
      <Header>
        <div className="logo">
          <img src={Logo} alt="" width={44} />
          <span>deepin-react</span> 
        </div>
      </Header>
      <Layout>
        <Aside>
          <h1>组件</h1>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
            <li>
              <Link to="/layout">Layout</Link>
            </li>
          </ul>
        </Aside>
        <Content>
          <Routers />
        </Content>
      </Layout>
    </Layout>
  );
}

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/icon" element={<IconExample />} />
      <Route path="/button" element={<Button />} />
      <Route path="/dialog" element={<DialogExample />} />
      <Route path="/layout" element={<LayoutExample />} />
    </Routes>
  );
}

// App.js
function Home() {
  return <>home</>;
}

const container = document.getElementById("app") as HTMLElement; // 必须确保 container 不是空
createRoot(container).render(
  <Router>
    <App />
  </Router>
);
