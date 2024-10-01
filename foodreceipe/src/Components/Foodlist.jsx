import Fooditem from "./Fooditem";

export default function FoodList({ fooddata, setfoodid }) {
  return (
    <div>
      {fooddata.map((food) => (
        <Fooditem key={food.id} setfoodid={setfoodid} food={food} />
      ))}
    </div>
  );
}
