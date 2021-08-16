import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Seafood & Peach",
    description:
      "Shrimp, Ham, Peach exploded together with Thousand Island sauce",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Seafood Pesto",
    description: "Shrimp, crab stick, squid, broccoli and green Pesto sauce",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Seafood Cocktail",
    description:
      "Fresh prawns, succulent crab sticks, ham and juicy pineapples with Thousand Island sauce",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Seafood Deluxe",
    description: "Prawn, crab sticks & calamari with Marinara sauce",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Tropical Seafood",
    description: "Crab sticks, pineapples and Thousand Island sauce",
    price: 14.99,
  },
  {
    id: "m6",
    name: "Shrimp Cocktail",
    description:
      "Shrimps, champignon mushrooms, juicy pineapples, fresh tomatoes and Thousand Island Sauce",
    price: 12.68,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
