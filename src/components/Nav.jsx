import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constant";
export default function Nav() {
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="">
            <img src={headerLogo} alt="HeaderLogo" width={130} height={29} />
          </a>

          <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label} className="text-slate-600 leading-normal font-sans">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div>
            <img src={hamburger} alt="Hamburger" width={24} height={24} className="cursor-pointer min-lg:hidden" />
          </div>
        </nav>
      </header>
    </>
  );
}
