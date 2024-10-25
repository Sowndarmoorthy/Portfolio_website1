// TechSkill.jsx
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TechSkill = () => {
  const skills = [
    { name: 'Java', percentage: 80 },
    { name: 'MERN Stack', percentage: 80 },
    { name: 'React', percentage: 70 },
    { name: 'SQL', percentage: 65 },
    { name: 'Python', percentage: 60 },
    { name: 'django', percentage: 50 },

  ];

  return (
    <section className='pt-14' id='skills'>
      <div className='container text-center'>
        <h2 className='text-headingColor font-[800] text-[2rem] mb-2'>My Skills</h2>
        <p className='text-gray-600 mb-10'>Here's an overview of my technical expertise:</p>
        <div className='flex flex-wrap justify-center gap-10'>
          {skills.map((skill, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar 
                  value={skill.percentage} 
                  text={`${skill.percentage}%`} 
                  styles={{
                    path: {
                      stroke: `rgba(63, 94, 251, ${skill.percentage / 100})`, // Adjust the color based on percentage
                    },
                    text: {
                      fill: '#3f51b5', // Color of the percentage text
                      fontSize: '16px',
                      fontWeight: 'bold',
                    },
                    trail: {
                      stroke: '#d6d6d6',
                    },
                  }} 
                />
              </div>
              <span className='text-headingColor font-[600] text-[16px] mt-2'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkill;
