import { Fragment, useEffect } from "react";
import CallToAction from "./CallToAction";
import Boston from "./Boston";
import CustomersSay from "./CustomersSay";
import Specials from "./Specials";

export default function HomePage() {
  useEffect(() => {
    document.title = "Little Lemon";
  }, []);

  return (
    <Fragment>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Boston />
    </Fragment>
  );
}
