export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#0f172a", color: "white" }}>
      
      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#020617",
        position: "sticky",
        top: 0
      }}>
        <h2 style={{ color: "#22c55e" }}>Gurbani Portfolio</h2>
        <div>
          <a href="#home" style={link}>Home</a>
          <a href="#about" style={link}>About</a>
          <a href="#projects" style={link}>Projects</a>
          <a href="#contact" style={link}>Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" style={section}>
        <h1 style={{ fontSize: "50px", color: "#38bdf8" }}>🔥 Hi, I'm Gurbani</h1>
        <p style={{ fontSize: "20px" }}>
          Frontend Developer | React Learner | Creative Mind 🚀
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" style={section}>
        <h2 style={heading}>About Me</h2>
        <p>
          Hi 👋 I'm Gurbani — a passionate learner who loves building modern websites
          and creative UI designs. I enjoy experimenting with React, learning new tech,
          and turning ideas into real projects. I'm currently growing my skills in
          frontend development and building my portfolio step by step.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={section}>
        <h2 style={heading}>Projects</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={card}>Portfolio Website 💻</div>
          <div style={card}>React Demo Project ⚛️</div>
          <div style={card}>Upcoming Secret Project 😎</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={section}>
        <h2 style={heading}>Contact Me</h2>
        <p>Email: yourmail@gmail.com</p>
        <p>Phone: 8003900000</p>
      </section>

      <footer style={{ textAlign: "center", padding: "20px", background: "#020617" }}>
        © 2026 Gurbani Portfolio 🚀
      </footer>
    </div>
  );
}

const section = {
  padding: "80px 20px",
  textAlign: "center"
};

const heading = {
  fontSize: "35px",
  marginBottom: "20px",
  color: "#22c55e"
};

const link = {
  margin: "0 10px",
  textDecoration: "none",
  color: "white"
};

const card = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "15px",
  flex: "1",
  minWidth: "200px"
};
