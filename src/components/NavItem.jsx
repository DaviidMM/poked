import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

const activeClasses = 'ring-2 ring-offset-2 ring-offset-red-600 ring-white';

const NavItem = forwardRef(({ children, to, ...props }, ref) => {
  return (
    <li>
      <NavLink
        ref={ref}
        to={to}
        className={({ isActive }) => {
          return (
            'px-4 py-2 rounded-full hover:bg-red-100 transition-all duration-200 font-semibold bg-white ' +
            (isActive ? activeClasses : '')
          );
        }}
        {...props}
      >
        {children}
      </NavLink>
    </li>
  );
});

NavItem.displayName = 'NavItem';

export default NavItem;
