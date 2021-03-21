import Container from "../styles/pages/Home";
import  Head  from "next/head";
import  React from "react";
import Screenshot from "../assets/screenshot-default.png";
const  Home  : React.FC  =  ( ) =>  {
  return (
    <>
        <Head>
        <title>Homepage</title>
        </Head>

            <Container>
                    <p>Structure for Projects in: </p>
                    <ul>
                        <li><a href="https://reactjs.org/">React</a></li>
                        <li><a href="https://nextjs.org/">Next</a></li>
                        <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
                        <li><a href="https://styled-components.com/">Styled Components</a></li>
                        <li><a href="https://eslint.org/">Eslint</a></li>
                    </ul>
                    <div>
                        A ReactJS + Next.js structure made by &nbsp;
                        <a href="https://github.com/andreteixeira98">  André Teixeira</a>
                    </div>
            </Container>
    </>
  );
}
export default Home;
