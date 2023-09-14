import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { Logout } from 'iconsax-react';
import logo from '../../assets/icons/Ajó Savingslogo.png'

import { DASHBOARD_SIDEBAR_LINKS, OTHER_SIDEBAR_LINKS } from '.';

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:text-white hover:bg-cyan-700 hover:no-underline active:bg-cyan-600 rounded-md text-base';

interface SidebarLinkProps {
   link: {
    key: string;
    label: string;
    path: string;
    icon: React.ReactNode;
  };
}

function SidebarLink({ link }: SidebarLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? 'bg-cyan-700 text-white' : 'text-neutral-900',
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="flex flex-col p-3 bg-white w-60">
      <div className="flex items-center gap-2 px-1 py-3">
        <img src={logo} alt="" />
       
      </div>

      <div className="py-8 flex flex-col gap-0.5">
        <span className="text-gray-300 text-md">Overview</span>
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-neutral-700">
        <span className="text-gray-300 text-md">Others</span>

        {OTHER_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div className={classNames(linkClass, 'cursor-pointer')}>
          <span className="text-xl">
          <Logout size="32" color="#697689" variant="Bulk"/>
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}


