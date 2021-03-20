import Container from "../styles/pages/Home";
import  Head  from "next/head";
import  React from "react";
import Logo from "../assets/image-default.svg";
const  Home  : React.FC  =  ( ) =>  {
  return (
    <>
        <Head>
        <title>Homepage</title>
        </Head>

            <Container>
                    <Logo />
                    <div>
                        A ReactJS + Next.js structure made by &nbsp;
                        <a href="https://github.com/andreteixeira98">  André Teixeira</a>
                    </div>
            </Container>
    </>
  );
}
export default Home;
