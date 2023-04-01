import Button from "../ui/Button";
import SpecialCard from "./SpecialCard";
import classes from "./Specials.module.css";

import SpecialImage1 from "../../images/specials1-grilled-entrees-accompanied-by-a-mixed-salad.jpg";
import SpecialImage2 from "../../images/specials2-empanadas.jpg";
import SpecialImage3 from "../../images/specials3-grilled-marinated-squid.jpg";

const specialDishes = [
  {
    id: "d1",
    image: SpecialImage1,
    title: "Grilled entrees accompanied by mixed salad",
    price: 24.50,
    description:
      "Grilled entrecote, cooked to taste, accompanied with chimichurri and a rocket salad, cherry tomato and sliced Parmesan cheese.",
  },
  {
    id: "d2",
    image: SpecialImage2,
    title: "Empanadas",
    price: 10.5,
    description:
      "Meat empanadas cut with a knife or chicken with parsley seasoned to taste.",
  },
  {
    id: "d3",
    image: SpecialImage3,
    title: "Grilled marinated squid",
    price: 15.3,
    description:
      "Grilled marinated squid with stuffed tomato, caper, black olive, onion and rocket salad.",
  },
];

export default function Specials() {
  return (
    <section className={classes.specialsSection}>
      <div className={`fluidContainer ${classes.specialsContainer}`}>
        <div className={classes.specialsInto}>
          <h2 className="sectionTitle">This weeks specials!</h2>
          <Button link="/">Online menu</Button>
        </div>
        <div className={classes.specialsCollection}>
          {specialDishes.map((dish) => (
            <SpecialCard
              key={dish.id}
              image={dish.image}
              title={dish.title}
              price={dish.price}
              description={dish.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
