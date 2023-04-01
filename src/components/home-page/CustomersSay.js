import User1Image from "../../images/User_1.jpg";
import User2Image from "../../images/User_2.png";
import User3Image from "../../images/User_3.png";
import User4Image from "../../images/User_4.jpg";
import classes from "./CustomersSay.module.css";
import Testimonial from "./Testimonial";

const fetchedTestimonials = [
  {
    id: "t1",
    image: User1Image,
    name: "Mariam",
    stars: 5,
    quote: "The place is very good! the food excellent. we ate outside, very comfortable on a beautiful day. First class... but best of all was Charli's attention, an exceptional waiter who treated us as if he had known us all his life. Bright!!! Thank you.",
  },
  {
    id: "t2",
    image: User2Image,
    name: "Celin",
    stars: 5,
    quote: "It is my favorite restaurant in the world, the quality of the food, the attention, everything always out of 10, the portions are super abundant, my fav is the rib with creamed potatoes in a clay oven, and empanada for starter. The volcano for dessert is the best. We will return all our lives, we love immigrants.",
  },
  {
    id: "t3",
    image: User3Image,
    name: "Tomas ",
    stars: 4.5,
    quote: "The restaurant is very good, the food is very tasty, the service is excellent, and if I have to make a criticism, it is that the dishes are huge and generous (100% to share), and that would be good to be notified in advance. But everything impeccable.",
  },
  {
    id: "t4",
    image: User4Image,
    name: "Alex",
    stars: 4.5,
    quote: "We have gone many times for the attention, it is the best in the area,Abundant dishes, very nice surroundings, prices according to the quality they offer, meats that can be ordered at the desired point since they have a menu with a photograph of each point that the meat is desired.",
  },
];

export default function CustomersSay() {
  return (
    <section className={classes.customersSaySection}>
      <div className={`fluidContainer ${classes.customersSayContainer}`}>
        <h2 className="sectionTitle">What people say about us!</h2>
        <div className={classes.testimonials}>
          {fetchedTestimonials.map((item) => (
            <Testimonial
              key={item.id}
              image={item.image}
              name={item.name}
              stars={item.stars}
              quote={item.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
