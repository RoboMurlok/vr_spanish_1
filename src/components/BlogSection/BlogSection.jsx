import React from "react";
import { Link } from "react-router-dom";
import randomPosts from "../../blogRandom.json";

export default function BlogSection() {
  return (
    <section id="blog" className="container">
      <h2 className="section-title">Nuestro Blog</h2>
      <p className="section-sub">Artículos y recursos para mejorar tus finanzas</p>

      <ul className="grid blog-grid">
        {randomPosts.map((article, index) => (
          <li key={index} className="card">
            <div className="blog-img-placeholder">
              <img src={article.image} alt={article.title} className="post-image" />
            </div>
            <h3 className="card-title">{article.title}</h3>
            <p className="card-desc">{article.excerpt}</p>
            <Link to={`/blog/${article.slug}`} className="card-cta">
              Leer más
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
