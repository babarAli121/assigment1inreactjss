import "./FAQ.css";

const FAQ = () => {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        <div>
          <h3>What services do you offer?</h3>
          <p>We provide web development, SEO, and marketing services.</p>
        </div>
        <div>
          <h3>How can I contact support?</h3>
          <p>You can reach us via email or live chat 24/7.</p>
        </div>
        <div>
          <h3>Do you offer refunds?</h3>
          <p>Yes, we have a 30-day money-back guarantee.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
