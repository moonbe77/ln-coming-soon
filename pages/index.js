import Head from "next/head";
import Layout from "../components/layout";
import styled from "styled-components";
// import { motion } from "framer-motion";
const Main = styled.main`
  width: 100%;
  background: gray;
  color: white;
  display: flex;
  flex-direction: row;

  div {
    margin: 50px;
  }
`;

export default function Home() {
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0.2, x: -100 }
  };

  return (
    <Layout>
      <Main>
        <div>Side bar</div>
        <div>Lista de productos</div>
      </Main>
    </Layout>
  );
}
