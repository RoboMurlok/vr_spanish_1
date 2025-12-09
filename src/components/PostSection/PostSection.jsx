import { useParams, Link } from "react-router-dom";
import { posts } from "../../db/posts.js";

export default function PostSection() {
  const { slug } = useParams();
  const post = posts.find((a) => a.slug === slug);

  if (!post) {
    return (
      <section className="post-section">
        <div className="container">
          <h1 className="post-title">Artículo no encontrado</h1>
          <p className="post-sub">
            Lo sentimos, el artículo que buscas no existe.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="post-section">
      <div className="container">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-sub">{post.excerpt}</p>
        <div className="post-content">
          <div className="hero-image">
            <div className="hero-img-placeholder">
              <img src={post.image} alt={post.title} className="post-image" />
            </div>
          </div>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="post-sub">
            <Link to="/blog" className="card-cta">
              Nuestros servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
