import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>Get the latest updates right in your inbox.</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
