import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-list">
        <div className="feature">
          <h3>Fast</h3>
          <p>Our service is super fast and reliable.</p>
        </div>
        <div className="feature">
          <h3>Secure</h3>
          <p>We ensure top-notch security for your data.</p>
        </div>
        <div className="feature">
          <h3>Support</h3>
          <p>24/7 customer support is available for you.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
