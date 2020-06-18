import Head from "next/head";
import Layout from "../components/layout";
import styled from "styled-components";
// import { motion } from "framer-motion";
const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;
export default function Home() {
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0.2, x: -100 }
  };

  return (
    <Layout>
      <Head>
        <title>LATITUD NÁUTICA</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <main>
          <div>Latitud Náutica</div>
        </main>
      </Container>
    </Layout>
  );
}
