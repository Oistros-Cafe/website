// sections
import Hero from "./hero";
import Testimonial from "./testimonial";
import Qualifications from "./qualifications";
import CoffeeExplorer from "./components/coffee-explorer";

export default function ShinyPage() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Qualifications />
      <CoffeeExplorer />
    </>
  );
}
