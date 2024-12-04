import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="dec 26, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 28, 2023" text="How does ChatGPT comprehend and interpret human language??" />
        <Article imgUrl={blog03} date="jan 6, 2024" text="Can ChatGPT differentiate between various tones, contexts, and intents in conversations?" />
        <Article imgUrl={blog04} date="jan 16, 2024" text="Can ChatGPT generate content in multiple languages or adapt its style to match different audiences?" />
        <Article imgUrl={blog05} date="jan 28, 2024" text="How can ChatGPT be utilized to provide assistance and support in various domains, such as customer service, education, or healthcare??" />
      </div>
    </div>
  </div>
);

export default Blog;
