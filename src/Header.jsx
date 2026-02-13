function Header() {
  return (
    <div style={styles.container}>
      <h1>Hello, I'm Gurbani 👋</h1>
      <h2>BTech CSE (AIML) Student</h2>
      <p>
        Passionate about Data Science, Machine Learning and building real-world
        applications. Currently preparing for placements and enhancing my skills.
      </p>
      <button style={styles.button}>View My Work</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "80px",
    background: "#f9f0ff"
  },
  button: {
    padding: "12px 25px",
    background: "#6a11cb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    marginTop: "20px",
    cursor: "pointer"
  }
};

export default Header;
