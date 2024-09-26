import "./FaqAccordian.css";

function FaqAccordian() {
  return (
    <div className="container accordion">
      <div className="accordion-item">
        <input type="checkbox" id="accordion1" />
        <label htmlFor="accordion1" className="accordion-item-title">
          <span className="icon"></span>How can I download the app?
        </label>
        <div className="accordion-item-desc">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className="accordion-item">
        <input type="checkbox" id="accordion2" />
        <label htmlFor="accordion2" className="accordion-item-title">
          <span className="icon"></span>How can I purchasing the app?
        </label>
        <div className="accordion-item-desc">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className="accordion-item">
        <input type="checkbox" id="accordion3" />
        <label htmlFor="accordion3" className="accordion-item-title">
          <span className="icon"></span>Does it comes with Money back guarantee?
        </label>
        <div className="accordion-item-desc">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className="accordion-item">
        <input type="checkbox" id="accordion4" />
        <label htmlFor="accordion4" className="accordion-item-title">
          <span className="icon"></span>Does it available for Google Android
          platform?
        </label>
        <div className="accordion-item-desc">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className="accordion-item">
        <input type="checkbox" id="accordion5" />
        <label htmlFor="accordion5" className="accordion-item-title">
          <span className="icon"></span>Does it available for Apple IOS
          platform?
        </label>
        <div className="accordion-item-desc">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className="accordion-item">
        <input type="checkbox" id="accordion6" />
        <label htmlFor="accordion6" className="accordion-item-title">
          <span className="icon"></span>Can I upgrade my plan later?
        </label>
        <div className="accordion-item-desc">
          Of course! You can upgrade your plan at any time by just paying the
          difference amount.
        </div>
      </div>
    </div>
  );
}

export default FaqAccordian;
