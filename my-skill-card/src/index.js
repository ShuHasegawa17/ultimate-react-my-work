import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
  {
    skill: 'vue',
    level: 'advanced',
    color: 'green',
  },
  {
    skill: 'react',
    level: 'normal',
    color: 'blue',
  },
  {
    skill: 'java',
    level: 'advanced',
    color: 'red',
  },
  {
    skill: 'Go',
    level: 'beginner',
    color: 'pink',
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./avatar.jpg" alt="avatar" />;
}

function Intro() {
  return (
    <>
      <h1>Shu Hasegawa</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo
        atque in quam explicabo eveniet, nihil pariatur officiis alias tenetur
        iste voluptate dignissimos. Ratione iusto esse quae tempora ipsam!
        Quisquam!
      </p>
    </>
  );
}

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => {
        return (
          <Skill
            key={skill.skill}
            skill={skill.skill}
            level={skill.level}
            color={skill.color}
          />
        );
      })}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {`${skill} ${
        (level === 'advanced' && '✊') ||
        (level === 'normal' && '🧡') ||
        (level === 'beginner' && '🦾')
      }`}
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
