import "./App.css";
function App() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Hi, I'm Parimala Ravali Mukkavilli 👋</h1>
      <h2>Front-End Developer | React & TypeScript Enthusiast</h2>
      <p>Welcome to my portfolio! I'm passionate about building beautiful, functional web applications.</p>

      <h3>📌 My Skills</h3>
      <ul>
        <li className="skill">React.js</li>
        <li className="skill">TypeScript</li>
        <li className="skill">HTML, CSS, JavaScript</li>
        <li className="skill">MongoDB</li>
      </ul>

      <h3>📌 My Education</h3>
      <ul>
        <li className="education">React.js</li>
        <li className="education">TypeScript</li>
        <li className="education">HTML, CSS, JavaScript</li>
        <li className="education">MongoDB</li>
      </ul>
      <section style={{
        background: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px auto",
        width: "80%",
        textAlign: "center",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
      }}>
        <h3>🚀 My Projects</h3>
        <p>Coming soon...</p>
      </section>

      <h3>📬 Contact Me</h3>
      <p><a href="mailTo:ravalimukkavilli@gmail.com">ravalimukkavilli@gmail.com</a></p>
      <p><a href="https://github.com/ravali0423" target="_blank">My GitHub</a></p>
      <p><a href="https://www.linkedin.com/in/parimala-ravali-mukkavilli/" target="_blank">My LinkedIn</a></p>
    </div>
  );
}

export default App;
