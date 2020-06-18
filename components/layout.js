import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 80%;
  margin: auto;
  padding: 0 0.5rem;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;
const Header = styled.header`
  width: 100%;

  background: red;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 50px;
  align-items: center;
`;

const Slider = styled.div`
  height: 250px;
  width: 100%;
  border: 1px solid green;
`;

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Layout({
  children,
  title = "This is the default title"
}) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header>
        <nav>
          <Link href='/'>
            <a>Home</a>
          </Link>{" "}
          |
          <Link href='/lista/1/2'>
            <a>Categorías</a>
          </Link>{" "}
          |
          <Link href='/productos'>
            <a>Productos</a>
          </Link>
        </nav>
      </Header>
      <Slider>Slider</Slider>

      {children}

      <Footer>{"Code by B.M. __3c__"}</Footer>
    </Container>
  );
}
