 
import './App.css';
import Players from './components/Players';

function App() {
  return (
    <div className="App">
      <h1>Athletics With Their Respective Profession. </h1>
       
       
      
      
        <Players name="Christiano Ronaldo"team="Portugal"profession="Football"imgUrl="./images/ronaldo.jpg"></Players>
        <Players name="Virat Kohli"team="India"profession="Cricket"imgUrl="./images/kohli.avif"></Players>
        <Players name="Mike Tyson"team="America"profession="Boxing"imgUrl="./images/tyson.jpg"></Players>

        <Players name="Harmanpreet Sing"team="India"profession="Hockey"imgUrl="./images/sing.webp"></Players>

        <Players name="Rahul Chawdory"team="India"profession="Kabaddi"imgUrl="./images/rahul.jpeg"></Players>
        




       
 
       
    </div>
  );
}

export default App;
