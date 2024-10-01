import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/Foodlist";
import Nav from "./Components/Nav";
import "./App.css";
import Container from "./Components/Container";
import Innercontainer from "./Components/Innercontainer";

// Fix the export of FoodDetail
function FoodDetail() {
  return <div>Food Details</div>;
}

function App() {
  const [fooddata, setFoodData] = useState([]);
  const [foodid,setfoodid]=useState("")

  return (
    <div className="App">
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <Innercontainer>
          <FoodList setfoodid={setfoodid} fooddata={fooddata} />
        </Innercontainer>
        <Innercontainer>
          <FoodDetail foodid={foodid}/>
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;
