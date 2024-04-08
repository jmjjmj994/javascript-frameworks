import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import navLink from './navLinks';
import { TogglerContext } from '../../hooks/use-toggler';
import { useContext } from 'react';
import { motion } from 'framer-motion';
function Navigation() {
  const { navActive, handleNavActive } = useContext(TogglerContext)!;

  const navigationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navigationRef.current &&
        navActive &&
        !(navigationRef.current as HTMLElement).contains(event.target as Node)
      ) {
        handleNavActive();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleNavActive, navActive]);

  return (
    <motion.nav
      ref={navigationRef}
      initial={false}
      animate={{ x: navActive ? 0 : '100%' }}
      transition={{
        damping: 1,
        ease: 'easeIn',
        duration: 0.15,
      }}
      className={`fixed top-0 right-0 w-[25rem] h-full bg-white  z-[2]`}
    >
      <div className="h-[10vh] bg-white flex justify-end items-center">
        <Button />
      </div>
      <ul className="flex flex-col gap-[20px] px-5 py-5">
        {navLink.map(({ id, path, label }) => (
          <li key={id}>
            <Link onClick={() => handleNavActive()} to={path}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

function Button() {
  const { handleNavActive } = useContext(TogglerContext)!;
  return (
    <button aria-label="close" onClick={handleNavActive}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

export default Navigation;
