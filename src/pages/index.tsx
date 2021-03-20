import Container from "../styles/pages/Home";
import  Head  from "next/head";
import  React from "react";
import Screenshot from "../assets/screenshot.png";
const  Home  : React.FC  =  ( ) =>  {
  return (
    <>
        <Head>
        <title>Homepage</title>
        </Head>

            <Container>
                    <img src={Screenshot} alt="screenshot"/>
                    <div>
                        A ReactJS + Next.js structure made by &nbsp;
                        <a href="https://github.com/andreteixeira98">  André Teixeira</a>
                    </div>
            </Container>
    </>
  );
}
export default Home;
