import FaqAccordian from "../faqAccordian/FaqAccordian";
import "./Faqcont.css";

export default function Faqcont() {
  return (
    <section className="container faq-cont">
      <div className="heading-cont">
        <h2 className="heading-secondary">
          <span className="heading-highlight">FAQ</span>- Frequently Asked
          Questions
        </h2>
        <p className="subheading">
          Get answers to your questions about our awesome app! Learn more and
          explore its features now.
        </p>
      </div>

      <FaqAccordian />
    </section>
  );
}
