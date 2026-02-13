function BootstrapSection() {
  return (
    <div style={styles.card}>
      <h1>My Projects 🚀</h1>

      <h3>📊 Netflix Data Analysis</h3>
      <p>Performed data cleaning, visualization and insights using Python.</p>

      <h3>🤖 Netflix Recommendation System</h3>
      <p>Built a recommendation model using machine learning techniques.</p>
    </div>
  );
}

const styles = {
  card: {
    margin: "50px auto",
    width: "70%",
    padding: "40px",
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
  }
};

export default BootstrapSection;
