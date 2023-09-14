

import {
  SecurityCard,
  People, 
  Translate,
  Setting2,
  Home
  
} from 'iconsax-react';


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <Home size="32" color="#D9E3F0" variant="Bulk" />
	},

	{
    key: 'savings',
    label: 'Savings',
    path: '/savings',
    icon: <SecurityCard size="32" color="#697689" variant="Bulk" />
	},
	{
    key: 'groups',
    label: 'Groups',
    path: '/groups',
    icon:<People size="32" color="#697689" variant="Bulk" />
	},
	{
    key: 'transactions',
    label: 'Transactions',
    path: '/transactions',
    icon: <Translate size="32" color="#697689" variant="Bulk"  />
	}
]

export const OTHER_SIDEBAR_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <Setting2 size="32" color="#697689" variant="Bulk" />
	},

]















// import {
//   SecurityCard,
//   People, 
//   Translate,
//   Setting2,
//   Home
  
// } from 'iconsax-react';

// interface SidebarLink {
//   key: string;
//   label: string;
//   path: string;
//   icon: string; 
// }

// export const DASHBOARD_SIDEBAR_LINKS: SidebarLink[] = [
//   {
//     key: 'dashboard',
//     label: 'Dashboard',
//     path: '/',
//     icon: <Home size="32" color="#FF8A65"/> // Use the imported image path directly
//   },
//   {
//     key: 'savings',
//     label: 'Savings',
//     path: '/savings',
//     icon: <SecurityCard size="32" color="#697689" variant="Bulk"/>
//   },
//   {
//     key: 'groups',
//     label: 'Groups',
//     path: '/groups',
//     icon:<People size="32" color="#697689" variant="Bulk"/>, 
//   },
//   {
//     key: 'transactions',
//     label: 'Transactions',
//     path: '/transactions',
//     icon: <Translate size="32" color="#697689" variant="Bulk"/>, // Use the imported image path directly
//   },
// ];

// export const OTHER_SIDEBAR_LINKS: SidebarLink[] = [
//   {
//     key: 'settings',
//     label: 'Settings',
//     path: '/settings',
//     icon:  <Setting2 size="32" color="#697689" variant="Bulk"/>, // Use the imported image path directly
//   }
// ];



