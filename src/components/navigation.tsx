export function Navigation() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <a href="#" className="nav-name">
        LOHIT<span>®</span>
      </a>
      <div>
        <a href="#work">Work</a>
        <a href="#fragments">Fragments</a>
        <a href="#about">About</a>
        <a href="#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
}
