const links = [
  { text: "Política de privacidad", href: "#" },
  { text: "Términos de uso", href: "#" },
  { text: "Contacto", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer container">
      <p>© 2025 Consultoría Financiera. Todos los derechos reservados.</p>
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
