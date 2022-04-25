import * as React from "react";
import Layout from "./layout";
import Header from "./header";
import Aside from "./aside";
import Footer from "./footer";
import Content from "./content";
import { scopedClass } from "../helpers/classes";
import "./layout.example.scss";

export default function () {
  return (
    <>
      <p>第一个事例</p>
      <Example1 />
      <p>第二个事例</p>
      <Example2 />
      <p>第三个事例</p>
      <Example3 />
      <p>第四个事例</p>
      <Example4 />
    </>
  );
}
const sc = scopedClass("deepin-layout")
const Example1 = () => {
  return (
    <Layout className={sc("example")} style={{ width: "500px", height: "500px" }}>
      <Header>header</Header>
      <Content>content</Content>
      <Footer>footer</Footer>
    </Layout>
  );
};

const Example2 = () => {
  return (
    <Layout className={sc("example")} style={{ width: "500px", height: "500px" }}>
      <Header>header</Header>
      <Layout> 
        <Aside>aside</Aside>
        <Content>content</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

const Example3 = () => {
  return (
    <Layout className={sc("example")} style={{ width: "500px", height: "500px" }}>
      <Header>header</Header>
      <Layout> 
        <Content>content</Content>
        <Aside>aside</Aside>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

const Example4 = () => {
  return (
    <Layout className={sc("example")} style={{ width: "500px", height: "500px" }}>
      <Aside>aside</Aside>
      <Layout>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  );
}