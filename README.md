<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bansari Portfolio — Website README</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin:0;
      font-family: "Segoe UI", system-ui, sans-serif;
      background: radial-gradient(ellipse at bottom, #0b1635 0%, #020617 70%);
      color: #eaf1ff;
      line-height: 1.7;
    }

    .container {
      max-width: 950px;
      margin: 0 auto;
      padding: 60px 30px 100px;
    }

    h1, h2 {
      color: #7cc9ff;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 2.6rem;
      margin-bottom: 18px;
    }

    h2 {
      margin-top: 50px;
      border-bottom: 1px solid rgba(124,201,255,.3);
      padding-bottom: 6px;
    }

    p {
      color: #cfd8ff;
      max-width: 880px;
    }

    .card {
      background: rgba(10,20,50,.65);
      border-radius: 18px;
      padding: 26px 28px;
      margin-top: 20px;
      border: 1px solid rgba(0,160,255,.35);
      box-shadow: 0 0 35px rgba(0,160,255,.25);
      backdrop-filter: blur(12px);
    }

    ul {
      padding-left: 18px;
      color:#cfd8ff;
    }

    li {
      margin-bottom: 8px;
    }

    .tag {
      display:inline-block;
      padding:6px 14px;
      border-radius:999px;
      background: linear-gradient(135deg,#00c6ff,#0072ff);
      font-size:.75rem;
      font-weight:600;
      margin-right:8px;
      margin-top:8px;
    }

    .footer {
      margin-top: 80px;
      text-align: center;
      color: #9fb4ff;
      font-size: .9rem;
    }
  </style>
</head>

<body>
  <div class="container">

    <h1>🌌 Bansari — Personal Portfolio Website</h1>
    <p>
      This repository contains the source code for my personal portfolio website.
      The website is designed to present my profile, skills, projects, and experience
      in a clean, modern, and visually engaging way.
    </p>

    <div class="card">
      <h2>🎯 Purpose of This Website</h2>
      <p>
        This portfolio website serves as my professional online presence.
        It is built to showcase:
      </p>
      <ul>
        <li>My technical and professional skills</li>
        <li>My projects and hands-on work</li>
        <li>My experience and learning journey</li>
        <li>A clear personal brand as an AI/ML & Data-focused engineer</li>
      </ul>
      <p>
        The design focuses on a modern, space-themed UI to reflect innovation,
        technology, and a forward-looking mindset.
      </p>
    </div>

    <div class="card">
      <h2>✨ Website Features</h2>
      <ul>
        <li>Responsive, modern UI design</li>
        <li>Animated starfield and nebula background</li>
        <li>Glassmorphism-style glowing cards</li>
        <li>Smooth scrolling navigation</li>
        <li>Dedicated sections for skills, projects, experience, and contact</li>
        <li>Interactive elements and hover effects</li>
      </ul>
    </div>

    <div class="card">
      <h2>🧰 Technologies Used</h2>
      <span class="tag">HTML5</span>
      <span class="tag">CSS3</span>
      <span class="tag">JavaScript</span>
      <span class="tag">Responsive Design</span>
      <span class="tag">CSS Animations</span>
      <span class="tag">Canvas Animations</span>
      <span class="tag">UI/UX Design</span>

      <ul>
        <li>Custom CSS for glowing & glassmorphism UI</li>
        <li>JavaScript for animations and interactions</li>
        <li>Canvas-based particle & star animations</li>
        <li>Modular page structure for scalability</li>
      </ul>
    </div>

    <div class="card">
      <h2>📁 Folder Structure</h2>
      <ul>
        <li><strong>assets/</strong> — Images, icons, and static assets</li>
        <li><strong>js/</strong> — JavaScript files for UI & animations</li>
        <li><strong>templates/</strong> — Reusable HTML templates</li>
        <li><strong>index.html</strong> — Homepage</li>
        <li><strong>about.html</strong> — About section</li>
        <li><strong>projects.html</strong> — Project showcase</li>
        <li><strong>experience.html</strong> — Experience timeline</li>
        <li><strong>skills.html</strong> — Skills overview</li>
        <li><strong>contact.html</strong> — Contact section</li>
        <li><strong>style.css</strong> — Global styling</li>
        <li><strong>script.js</strong> — UI logic and interactions</li>
        <li><strong>stars.js</strong> — Starfield and particle effects</li>
      </ul>
    </div>

    <div class="card">
      <h2>🚀 Motivation Behind This Portfolio</h2>
      <p>
        This website is built to represent my professional identity in a more
        dynamic and personal way than a traditional resume.
      </p>
      <p>
        It allows me to:
      </p>
      <ul>
        <li>Showcase my work visually</li>
        <li>Demonstrate my attention to UI/UX detail</li>
        <li>Present my skills in a modern, engaging format</li>
        <li>Create a strong first impression for recruiters and collaborators</li>
      </ul>
    </div>

    <div class="card">
      <h2>▶️ How to Run the Website</h2>
      <ul>
        <li>Clone or download this repository</li>
        <li>Open <strong>index.html</strong> in any modern browser</li>
        <li>Or use a local server (recommended):</li>
      </ul>
      <pre style="color:#9fd3ff;">
python -m http.server
      </pre>
      <p>
        Then open: <strong>http://localhost:8000</strong> in your browser.
      </p>
    </div>

    <div class="footer">
      © Bansari — Personal Portfolio Website  
      <br>
      Designed & built to reflect creativity, technology, and professional growth.
    </div>

  </div>
</body>
</html>
