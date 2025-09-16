import { useEffect, useState } from "react";

export default function Navbar() {
  const NavLink = [
    { label: "Home", href: "home" },
    { label: "About Me", href: "about" },
    { label: "Projects", href: "project" },
    { label: "Experience", href: "exp" },
    { label: "Contact", href: "contact" },
  ];

  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    NavLink.forEach((link) => {
      const section = document.getElementById(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent coral pt-10 text-m">
      <div className="flex justify-center space-x-6 py-4">
        {/* Desktop */}
        <div className="hidden md:flex space-x-6">
          {NavLink.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={`transition ${
                active === link.href
                  ? "font-bold text-white"
                  : "hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Button 3 Line */}
        <button
          className="md:hidden pink-text text-3xl ml-auto mr-4 -mt-5 z-50 relative"
          onClick={() => setOpen(!open)}
        >
          ≡
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="fixed inset-0 bg-black/80 md:hidden flex flex-col items-center justify-center space-y-6 z-40">
          {NavLink.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={() => setOpen(false)}
              className={`transition ${
                active === link.href
                  ? "font-bold text-white"
                  : "hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
