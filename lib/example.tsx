import React from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, Link, HashRouter as Router } from "react-router-dom";
import Layout, { Header, Aside, Footer, Content } from "./layout/layout";
import ButtonExample from "./button/button.example";
import IconExample from "./icon/icon.example";
import DialogExample from "./dialog/dialog.example";
import LayoutExample from "./layout/layout.example";
import FormExample from "./form/form.example";
import Logo from "./icons/logo.png";
import "./example.scss";

export default function App() {
  return (
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={Logo} width="48" height="48" alt="" />
          <span> FUI </span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">按钮</Link>
            </li>
            <li>
              <Link to="/dialog">对话框</Link>
            </li>
            <li>
              <Link to="/layout">布局</Link>
            </li>
            <li>
              <Link to="/form">表单</Link>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Routers />
        </Content>
      </Layout>
      <Footer className="site-footer">&copy;</Footer>
    </Layout>
  );
}

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/icon" element={<IconExample />} />
      <Route path="/button" element={<ButtonExample />} />
      <Route path="/dialog" element={<DialogExample />} />
      <Route path="/layout" element={<LayoutExample />} />
      <Route path="/form" element={<FormExample />} />
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
