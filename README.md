<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?lines=Hi+there!+👋;I'm+Soumen;Welcome+to+my+profile!&center=true&size=30">
</h1>

<h3 align="center">💻 Software Developer | 🚀 Always Looking for Good Opportunities</h3>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=soumencodes&label=Profile%20views&color=0e75b6&style=flat" alt="soumencodes" />
</p>

<p align="center">
  <a href="https://github.com/soumencodes">
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=soumencodes&theme=radical&border=7F3FBF&background=0D1117" alt="Soumen's GitHub streak"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/soumencodes">
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=soumencodes&theme=radical" alt="Soumen's GitHub Contribution"/>
  </a>
</p>

<h3 align="center">Connect with me:</h3>

<p align="center">
  <a href="mailto:soumen19j@gmail.com" target="_blank"><img src="https://img.icons8.com/bubbles/50/000000/gmail.png" alt="Gmail"/></a>
  <a href="https://linkedin.com/in/soumenjs" target="_blank"><img src="https://img.icons8.com/bubbles/50/000000/linkedin.png" alt="LinkedIn"/></a>
  <a href="https://instagram.com/soumen_is_here" target="_blank"><img src="https://img.icons8.com/bubbles/50/000000/instagram.png" alt="Instagram"/></a>
</p>

<h3 align="center">Languages and Tools:</h3>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,react,vue,nextjs,tailwind,reactnative,bootstrap,cpp,java,mongodb&perline=6" />
  </a>
</p>

<details>
  <summary>Click For More about me</summary>
  
  - 🔭 I'm currently working on enhancing my full-stack development skills
  - 🌱 I'm currently learning advanced React patterns and Node.js
  - 👯 I'm looking to collaborate on innovative web projects
  - 💬 Ask me about JavaScript, React, or any tech-related stuff
  - ⚡ Fun fact: I love to solve puzzles and play chess in my free time!
</details>

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=soumencodes&theme=radical&layout=compact" alt="Soumen's Top Languages" />
</p>

<div align="center">
  <h3>🐍 My Contributions 🐍</h3>
  <br>
  <img alt="snake eating my contributions" src="https://raw.githubusercontent.com/soumencodes/soumencodes/output/github-contribution-grid-snake.svg" />
  
  <br/><br/><br/>
</div>

<h3 align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?lines=Thank+you+for+visiting!;Have+a+great+day!&center=true&size=20">
</h3>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #0D1117;
    color: #c9d1d9;
    line-height: 1.6;
    font-size: 18px;
  }

  h1, h2, h3 {
    color: #58a6ff;
  }

  a {
    color: #58a6ff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #1f6feb;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  .skill-icon {
    width: 60px;
    height: 60px;
    transition: transform 0.3s ease;
  }

  .skill-icon:hover {
    transform: scale(1.1);
  }

  .github-stats {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
  }

  .github-stat-card {
    background-color: #161b22;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .github-stat-card:hover {
    transform: translateY(-5px);
  }

  .typing-effect {
    border-right: 2px solid #58a6ff;
    white-space: nowrap;
    overflow: hidden;
    font-size: 28px;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #58a6ff; }
  }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 1s ease forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  details {
    background-color: #161b22;
    border-radius: 10px;
    padding: 20px;
    margin-top: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  details:hover {
    background-color: #1f2937;
  }

  summary {
    font-weight: bold;
    color: #58a6ff;
  }

  .snake-container {
    margin-top: 50px;
    text-align: center;
  }

  .snake-container h3 {
    margin-bottom: 20px;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Fade-in effect for sections
    const sections = document.querySelectorAll('h1, h3, p, .skills-container, .github-stats, details');
    sections.forEach((section, index) => {
      section.style.animationDelay = `${index * 0.2}s`;
      section.classList.add('fade-in');
    });

    // Typing effect for the main title
    const titleElement = document.querySelector('h1');
    const titleText = titleElement.textContent;
    titleElement.textContent = '';
    titleElement.classList.add('typing-effect');

    let i = 0;
    function typeWriter() {
      if (i < titleText.length) {
        titleElement.textContent += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();

    // Add hover effect to skill icons
    const skillIcons = document.querySelectorAll('.skill-icon');
    skillIcons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2) rotate(10deg)';
      });
      icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
      });
    });
  });
</script>

