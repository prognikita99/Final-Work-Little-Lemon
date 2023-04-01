import Button from "../ui/Button";
import HeroImage from "../../images/roasted-bondiola-with-gratin-vegetables.jpg";
import classes from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={classes.ctaSection}>
      <div className={`fluidContainer ${classes.heroContainer}`}>
        <div className={classes.heroText}>
          <div className={classes.displayTitle}>Little Lemon</div>
          <div className={classes.displaySubtitle}>Boston</div>
          <div className={classes.text}>
          We are a restaurant of roast meats, pastas and seafood that we delight with our delicious traditional meals with a modern touch.
          </div>
          <div className={classes.action}>
            <Button link="/booking-page">Reserve a table</Button>
          </div>
        </div>
        <div className={classes.heroImage}>
          <div className={classes.imageContainer}>
            <img
              src={HeroImage}
              alt="Delicious "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
