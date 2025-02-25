import Header from "./Header";
import "./App.css";
import novelBits from "./assets/novelbits.png";
import profile from "./assets/profile.jpeg";


function App() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", padding: "50px" }}>
        <div style={{ textAlign: "center", padding: "80px 50px" }}>
          <h1>Hi, I'm Parimala Ravali Mukkavilli 👋</h1>
          <h2>Product Manager | AI Enthusiast | Front-End Developer</h2>
          <p>
            Passionate about leveraging AI, product management, and web development to create
            scalable and user-centric solutions. Skilled in <strong>React.js, OpenAI APIs, and AI-driven habit analysis</strong>.
          </p>
          <p>
            Currently pursuing a <strong>Master's in Computer Science</strong> at
            <em>California Science & Technology University</em>, focusing on AI, Python, and product management.
          </p>
        </div>
        <h3>📌 My Skills</h3>
        <ul>
          <li className="skill">🌐 React.js</li>
          <li className="skill">⚡ TypeScript & JavaScript</li>
          <li className="skill">📊 OpenAI API, Google Places API</li>
          <li className="skill">🤖 AI-driven habit analysis</li>
          <li className="skill">📝 Product Management & Agile</li>
          <li className="skill">🎯 Python for AI & Automation</li>
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
          <div className="projects">

            <div className="project">
              <img src={novelBits} alt="Novel Bits Project" className="images" />
              <h4>Novel Bits – Subscription-Based eBook Platform</h4>
              <p>Developed a strategic roadmap and applied product management frameworks to enhance user experience.</p>
              <a href="https://github.com/your-github/novel-bits" target="_blank">GitHub Repo</a>
            </div>

            <div className="project">
              <img src={profile} alt="Tripper AI Project" className="images" />
              <h4>Tripper – AI-Powered Travel Planning Assistant</h4>
              <p>Designed an AI travel assistant using OpenAI GPT, Google Places API, and Open Weather API.</p>
              <a href="https://github.com/your-github/tripper" target="_blank">GitHub Repo</a>
            </div>

            <div className="project">
              <img src="/parking.jpg" alt="Automated Parking Slot Project" />
              <h4>Automated Parking Slot Indicator (Arduino)</h4>
              <p>Used IR sensors to monitor real-time parking slot availability and display it on an LCD screen.</p>
              <a href="https://github.com/your-github/parking-slot" target="_blank">GitHub Repo</a>
            </div>

            <div className="project">
              <img src="/gas-detection.jpg" alt="Gas Leakage Detection" />
              <h4>LPG Gas Leakage Detection System</h4>
              <p>Built an embedded system using an MQ-6 sensor to detect gas leaks and trigger alarms.</p>
              <a href="https://github.com/your-github/gas-detection" target="_blank">GitHub Repo</a>
            </div>

          </div>

        </section>

        <h3>📬 Contact Me</h3>
        <p><a href="mailTo:ravalimukkavilli@gmail.com">ravalimukkavilli@gmail.com</a></p>
        <p><a href="https://github.com/ravali0423" target="_blank">My GitHub</a></p>
        <p><a href="https://www.linkedin.com/in/parimala-ravali-mukkavilli/" target="_blank">My LinkedIn</a></p>
      </div>
    </>
  );
}

export default App;
