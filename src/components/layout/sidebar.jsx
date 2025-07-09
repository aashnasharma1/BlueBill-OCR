import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const navigation = [
  {
    name: 'Dashboard',
    href: '/',
    icon: HomeIcon,
    children: [
      { name: 'Main', href: '/' },
      { name: 'Workspace', href: '/workspace' },
      { name: 'All Invoices', href: '/all-invoices' },
      { name: 'Details', href: '/details' },
    ],
  },
  {
    name: 'Zoho Bills',
    icon: UsersIcon,
    children: [
      { name: 'Vendor Bills', href: '/zoho/vendor' },
      { name: 'Expense Journal ', href: '/zoho/expense' },
      {
        name: 'Settings',
        href: '#',
        children: [
          { name: 'Credentials', href: '/zoho/settings/credentials' },
          { name: 'Vendor', href: '/zoho/settings/vendor' },
          { name: 'COA', href: '/zoho/settings/coa' },
          { name: 'TDS/TCS', href: '/zoho/settings/tds-tcs' },
          { name: 'Taxes', href: '/zoho/settings/taxes' },
        ],
      },
    ],
  },
  {
    name: 'Tally Bills',
    icon: FolderIcon,
    children: [
      { name: 'Vendor Bills', href: '/tally/vendor' },
      { name: 'Expense Journal ', href: '/tally/expense' },
      {
        name: 'Settings',
        href: '#',
        children: [
          { name: 'Ledgers', href: '/tally/settings/ledgers' },
        ],
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const isItemActive = (item, pathname) => {
  if (item.href && pathname === item.href) return true;
  if (item.href && pathname.startsWith(item.href + '/')) return true;
  if (item.children) {
    return item.children.some((child) => isItemActive(child, pathname));
  }
  return false;
};

export default function Sidebar() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [openDisclosure, setOpenDisclosure] = useState(null);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Load sidebar state for desktop only
  useEffect(() => {
    if (!isMobile) {
      const saved = localStorage.getItem('sidebarOpen');
      setNavOpen(saved ? JSON.parse(saved) : true);
    } else {
      setNavOpen(false); // always closed on mobile initially
    }
  }, [isMobile]);

  // Save sidebar state for desktop only
  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem('sidebarOpen', JSON.stringify(navOpen));
    }
  }, [navOpen, isMobile]);

  // Close sidebar on mobile route change
  useEffect(() => {
    if (isMobile) {
      setNavOpen(false);
    }
  }, [location.pathname, isMobile]);

  const toggleSidebar = () => setNavOpen((prev) => !prev);

  return (
    <>
      {/* Overlay on mobile */}
      {isMobile && navOpen && (
        <div
          className="fixed inset-0 z-40 bg-opacity-30"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={classNames(
          'transition-all duration-300 ease-in-out z-40',
          isMobile
            ? `fixed top-16 left-0 h-full w-64 bg-white shadow-lg transform ${navOpen ? 'translate-x-0' : '-translate-x-full'
            }`
            : `relative ${navOpen ? 'w-64' : 'w-0'}`
        )}
      >
        {/* Toggle Button */}
        <div
          className={classNames(
            'h-6 w-6 rounded-2xl border border-[--border] flex items-center justify-center absolute top-4 bg-white hover:bg-gray-50 cursor-pointer z-40',
            navOpen
              ? isMobile
                ? 'right-[-11px] top-[-15px] z-40'
                : '-right-2'
              : isMobile
                ? 'right-[-25px] top-[-15px] z-40'
                : '-right-7'
          )}
          onClick={toggleSidebar}
        >
          {navOpen ? (
            <ArrowLeftIcon className="size-3 text-primary" />
          ) : (
            <ArrowRightIcon className="size-3 text-primary" />
          )}
        </div>

        {/* Sidebar content */}
        <div
          className={classNames(
            'flex grow flex-col gap-y-5 overflow-y-auto border-r border-[--border] h-full',
            navOpen ? 'px-6' : 'px-2'
          )}
        >
          <nav
            className={classNames(
              'flex flex-1 flex-col mt-[5vh] transition-opacity',
              navOpen ? 'opacity-100' : 'opacity-0'
            )}
          >
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => {
                    const isParentActive = isItemActive(item, location.pathname);
                    const isOpen = openDisclosure === item.name;

                    return (
                      <li key={item.name}>
                        {!item.children ? (
                          <Link
                            to={item.href}
                            className={classNames(
                              isParentActive
                                ? 'bg-gray-100 text-indigo-600 font-semibold'
                                : 'hover:bg-gray-50 text-gray-700',
                              'group flex gap-x-3 rounded-md p-2 text-sm/6'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                'size-6 shrink-0',
                                isParentActive ? 'text-indigo-600' : 'text-gray-400'
                              )}
                            />
                            {item.name}
                          </Link>
                        ) : (
                          <div>
                            <button
                              onClick={() =>
                                setOpenDisclosure((prev) =>
                                  prev === item.name ? null : item.name
                                )
                              }
                              className={classNames(
                                isParentActive
                                  ? 'bg-sidebar-ring text-gray-700 font-semibold'
                                  : 'hover:bg-sidebar-ring text-gray-700',
                                'group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 transition-all duration-300'
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  'size-6 shrink-0',
                                  isParentActive ? 'text-gray-600' : 'text-gray-400'
                                )}
                              />
                              {item.name}
                              <ChevronRightIcon
                                className={`ml-auto size-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90 text-gray-500' : 'text-gray-400'
                                  }`}
                              />
                            </button>

                            <div
                              className={classNames(
                                'overflow-hidden transition-all duration-500 ease-in-out',
                                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                              )}
                            >
                              <ul className="mt-1 px-2">
                                {item.children.map((subItem) => {
                                  const isSubActive = isItemActive(subItem, location.pathname);
                                  return (
                                    <li key={subItem.name}>
                                      {!subItem.children ? (
                                        <Link
                                          to={subItem.href}
                                          className={classNames(
                                            isSubActive
                                              ? 'text-indigo-600 font-semibold'
                                              : 'hover:bg-sidebar-ring text-gray-700',
                                            'block rounded-md py-2 pr-2 pl-9 text-sm/6'
                                          )}
                                        >
                                          {subItem.name}
                                        </Link>
                                      ) : (
                                        <Disclosure as="div" defaultOpen={isSubActive}>
                                          {({ open: nestedOpen }) => (
                                            <>
                                              <DisclosureButton
                                                className={classNames(
                                                  'group flex w-full items-center gap-x-3 rounded-md py-2 pr-2 pl-9 text-left text-sm/6 hover:bg-sidebar-ring text-gray-700'
                                                )}
                                              >
                                                {subItem.name}
                                                <ChevronRightIcon
                                                  className={`ml-auto size-4 shrink-0 transition-transform ${nestedOpen
                                                      ? 'rotate-90 text-gray-500'
                                                      : 'text-gray-400'
                                                    }`}
                                                />
                                              </DisclosureButton>
                                              <DisclosurePanel as="ul" className="mt-1 px-2">
                                                {subItem.children.map((nestedItem) => {
                                                  const isNestedActive = isItemActive(
                                                    nestedItem,
                                                    location.pathname
                                                  );
                                                  return (
                                                    <li key={nestedItem.name}>
                                                      <Link
                                                        to={nestedItem.href}
                                                        className={classNames(
                                                          isNestedActive
                                                            ? 'text-indigo-600 font-semibold'
                                                            : 'hover:bg-sidebar-ring text-gray-700',
                                                          'block rounded-md py-2 pr-2 pl-12 text-sm/6'
                                                        )}
                                                      >
                                                        {nestedItem.name}
                                                      </Link>
                                                    </li>
                                                  );
                                                })}
                                              </DisclosurePanel>
                                            </>
                                          )}
                                        </Disclosure>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </li>

              {/* Profile Section */}
              {/*<li className="-mx-6 mt-auto">
                <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <img
                    alt="Tom Cook"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    className="size-8 rounded-full bg-gray-50"
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Tom Cook</span>
                </a>
              </li>*/}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
