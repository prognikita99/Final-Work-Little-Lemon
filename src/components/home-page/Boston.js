import OmarImage from "../../images/restaurant-owner.jpg";
import GrillImage from "../../images/parrilla.jpg";
import classes from "./Boston.module.css";
import ArrowLeftIcon from "../ui/icons/ArrowLeftIcon";
import ArrowRightIcon from "../ui/icons/ArrowRightIcon";
export default function Boston() {
  return (
    <section className={classes.bostonSection}>
      <div className={`fluidContainer ${classes.bostonContainer}`}>
        <h2 className="sectionTitle">Our story</h2>
        <div className={classes.aboutContent}>
          <div className={classes.aboutText}>
            <div className={classes.displayTitle}>Little Lemon</div>
            <div className={classes.displaySubtitle}>Boston</div>
            <div className={classes.text}>
              <p>
              The interior is really nice, with floor-to-ceiling windows facing the street and exposed brick walls 
              and warm lighting that distinguishes all those design arrangements.
              An indie, almost melancholic atmosphere is generated, which is combined with references to immigrants
              in paintings and details, such as an original pile of suitcases at the entrance.
              </p>
              <p>
              For this reason, we have a gastronomic tradition that encompasses flavors from each of the countries that make up our population.
              </p>
            </div>
          </div>
          <div className={classes.imagesCollage}>
            <div className={classes.leftImageContainer}>
              <div>
                <span>
                  <ArrowRightIcon />
                </span>
              </div>
              
                <div>
                <img
                  src={OmarImage}
                  alt="Omar chef"
                />
              </div>
            </div>
            <div className={classes.rightImageContainer}>
              <div>
                <img
                  src={GrillImage}
                  alt="Grill"
                />
              </div>
              <div>
                <span>
                  <ArrowLeftIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
