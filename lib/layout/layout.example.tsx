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
      <div>第一个事例</div>
      <Example1 />
      <div>第二个事例</div>
      <Example2 />
      <div>第三个事例</div>
      <Example3 />
      <div>第四个事例</div>
      <Example4 />
    </>
  );
}
const sc = scopedClass("react-ui-layout")
const Example1 = () => {
  return (
    <Layout className={sc("example")}>
      <Header>header</Header>
      <Content>content</Content>
      <Footer>footer</Footer>
    </Layout>
  );
};

const Example2 = () => {
  return (
    <Layout className={sc("example")}>
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
    <Layout className={sc("example")}>
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
    <Layout className={sc("example")}>
      <Aside>aside</Aside>
      <Layout>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  );
}