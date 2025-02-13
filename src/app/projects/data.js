import ticTacToeSample from "./../../../public/Screenshot (38).png";
import portfolioSample from "./../../../public/Screenshot (39).png";
import StockTradinSample from "./../../../public/Screenshot (41).png";

export const projects = [
  {
    name: "9x9 Tic-Tac-Toe",
    description: `A React-based implementation of an enhanced 9x9 Tic-Tac-Toe game. 
  This project expands on the classic Tic-Tac-Toe concept, offering a larger grid and more complex strategic gameplay.`,
    learning: `This project marked my first experience with React, teaching me the fundamentals and practical usage of React hooks. 
  It provided a solid foundation in state management and component-based development.`,
    sampleImage: ticTacToeSample,
  },
  {
    name: "Portfolio Project",
    description: `A personal portfolio project designed to showcase my skills, experience, and projects. 
  The website is built to be easily scalable, allowing for seamless addition or removal of content. 
  It serves as a dynamic representation of my growth and expertise in web development.`,
    learning: `This project enhanced my understanding of CSS functionality, website design, SEO, and animations. 
  It also deepened my knowledge of React, particularly in terms of component reusability and modular design.`,
    sampleImage: portfolioSample,
  },
  {
    name: "Stock Trading",
    description: `Stock_Trading is a Django-based web application designed to deliver a realistic stock trading simulation experience. 
  Users can register, manage their virtual portfolios, and access real-time stock prices using the Alpha Vantage API. 
  The application prioritizes robust security measures to ensure user data protection.`,
    learning: `This project was primarily backend-focused, allowing me to deepen my understanding of database management, CRUD operations, ORM (Object-Relational Mapping), user input sanitization, and authentication mechanisms.`,
    sampleImage: StockTradinSample,
  },
];
