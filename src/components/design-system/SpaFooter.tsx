export function SpaFooter() {
  return (
    <footer className="footer container">
      <div className="footer-l">
        <span className="io">io</span>Nova
      </div>
      <div className="footer-r">&copy; {new Date().getFullYear()} ioNova. All rights reserved.</div>
    </footer>
  );
}
