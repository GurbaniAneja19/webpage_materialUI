const BootstrapSection = () => (
  <section id="bootstrap" className="container py-5">
    <h2 className="text-center mb-4">Bootstrap Section</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card p-3 shadow">
          <h5>Responsive Layout</h5>
          <p>Bootstrap’s grid makes layouts easy.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-3 shadow">
          <h5>Components</h5>
          <p>Cards, buttons, and more.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-3 shadow">
          <h5>Utilities</h5>
          <p>Spacing, colors, alignment.</p>
        </div>
      </div>
    </div>
  </section>
);

export default BootstrapSection;
