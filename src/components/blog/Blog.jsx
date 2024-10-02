import React from 'react';
import './Blog.css';
import Posts from './Posts';

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
      {Posts.map((elem) => {
          const{id, img, title, category, date, link} = elem;
          return (
            <div className="blog__card" key={id}>
              <div className="blog__thumb">
                <span className="blog__category">{category}</span>
                <a href={link}><img src={img} alt="" className="blog__img" /></a>
              </div>
              <div className="blog__details">
                <h3 className="blog__title">{title}</h3>
                  <div className="blog__meta">
                    <span>{date}</span>
                    <span className="blog__dot">.</span>
                    <span>Carou</span>
                  </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Blog
