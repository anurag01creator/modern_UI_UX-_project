import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Integration into Everyday Applications',
    text: 'ChatGPT could become more integrated into everyday applications and services, ranging from customer support platforms and educational tools to personal assistants and content creation tools.',
  },
  {
    title: 'Improved Conversational Skills',
    text: 'Future iterations of ChatGPT may exhibit more advanced conversational skills, such as better understanding of nuances in language.',
  },
  {
    title: 'Research in AI Safety and Alignment',
    text: 'OpenAI may invest in research aimed at ensuring that AI systems like ChatGPT are aligned with human values and goals, minimizing the risk of unintended consequences or misuse.',
  },
  {
    title: 'Regulatory and Policy Considerations',
    text: 'As AI technologies like ChatGPT become more pervasive, there may be increased attention from regulators and policymakers regarding issues such as data privacy.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
