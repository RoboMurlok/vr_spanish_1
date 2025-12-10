import { links, text } from "../../db/footer";

export default function Footer() {
  return (
    <footer className="footer container">
        <p>{text}</p>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
