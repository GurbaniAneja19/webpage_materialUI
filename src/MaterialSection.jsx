function MaterialSection() {
  return (
    <div style={styles.card}>
      <h1>My Skills 💡</h1>

      <p>✔ Python</p>
      <p>✔ Machine Learning</p>
      <p>✔ Data Analysis</p>
      <p>✔ React JS</p>
      <p>✔ SQL</p>
      <p>✔ Algorithms & DSA</p>
    </div>
  );
}

const styles = {
  card: {
    margin: "50px auto",
    width: "70%",
    padding: "40px",
    background: "#fff5f8",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
  }
};

export default MaterialSection;
