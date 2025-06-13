import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const navigation = [
  {
    name: 'Dashboard',
    href: '#',
    icon: HomeIcon,
    current: true,
    children: [
      { name: 'Main', href: '#' },
      { name: 'Workspace', href: '#' },
    ],
  },
  {
    name: 'Zoho Bills',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'Vendor Bills', href: '#' },
      { name: 'Expense Journal ', href: '#' },
      {
        name: 'Settings',
        href: '#',
        children: [
          { name: 'Credentials', href: '#' },
          { name: 'Vendor', href: '#' },
          { name: 'COA', href: '#' },
          { name: 'TDS/TCS', href: '#' },
          { name: 'Taxes', href: '#' },
        ],
      },
    ],
  },
  {
    name: 'Tally Bills',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Vendor Bills', href: '#' },
      { name: 'Expense Journal ', href: '#' },
      {
        name: 'Settings',
        href: '#',
        children: [
          { name: 'Ledgers', href: '#' },
        ],
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  const [navOpen, setNavOpen] = useState(true);
  const handleNavOpen = () => {
    setNavOpen((open) => !open);
  };

  return (
    <div
      className={`relative transition-all duration-300 ease-in-out ${navOpen ? 'max-w-[20vw]' : 'max-w-0'}`}
    >
      <div
        className={`h-6 w-6 rounded-2xl border border-gray-300 flex items-center justify-center absolute ${navOpen ? '-right-2' : '-right-7'} z-50 bg-white top-[1.5vh] hover:bg-gray-50 cursor-pointer`}
        onClick={handleNavOpen}
      >
        {navOpen ? (
          <ArrowLeftIcon className="size-3 text-gray-800 m-auto" />
        ) : (
          <ArrowRightIcon className="size-3 text-gray-800 m-auto" />
        )}
      </div>

      <div
        className={`flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white ${navOpen ? 'px-6' : 'px-2'} max-w-[20vw] min-h-[92vh]`}
      >
        <nav
          className={`flex flex-1 flex-col mt-[5vh] ${navOpen ? 'opacity-100' : 'opacity-0'} transition-opacity`}
        >
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {!item.children ? (
                      <a
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                          'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700'
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-6 shrink-0 text-gray-400"
                        />
                        {item.name}
                      </a>
                    ) : (
                      <Disclosure as="div">
                        {({ open }) => (
                          <>
                            <DisclosureButton
                              className={classNames(
                                item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                'group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700'
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className="size-6 shrink-0 text-gray-400"
                              />
                              {item.name}
                              <ChevronRightIcon
                                aria-hidden="true"
                                className={`ml-auto size-5 shrink-0 text-gray-400 transition-transform ${open ? 'rotate-90 text-gray-500' : ''}`}
                              />
                            </DisclosureButton>
                            <DisclosurePanel as="ul" className="mt-1 px-2">
                              {item.children.map((subItem) => (
                                <li key={subItem.name}>
                                  {!subItem.children ? (
                                    <a
                                      href={subItem.href}
                                      className={classNames(
                                        subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                        'block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700'
                                      )}
                                    >
                                      {subItem.name}
                                    </a>
                                  ) : (
                                    <Disclosure as="div">
                                      {({ open: nestedOpen }) => (
                                        <>
                                          <DisclosureButton
                                            className={classNames(
                                              subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                              'group flex w-full items-center gap-x-3 rounded-md py-2 pr-2 pl-9 text-left text-sm/6 text-gray-700'
                                            )}
                                          >
                                            {subItem.name}
                                            <ChevronRightIcon
                                              aria-hidden="true"
                                              className={`ml-auto size-4 shrink-0 text-gray-400 transition-transform ${nestedOpen ? 'rotate-90 text-gray-500' : ''}`}
                                            />
                                          </DisclosureButton>
                                          <DisclosurePanel as="ul" className="mt-1 px-2">
                                            {subItem.children.map((nestedItem) => (
                                              <li key={nestedItem.name}>
                                                <a
                                                  href={nestedItem.href}
                                                  className={classNames(
                                                    nestedItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                                    'block rounded-md py-2 pr-2 pl-12 text-sm/6 text-gray-600'
                                                  )}
                                                >
                                                  {nestedItem.name}
                                                </a>
                                              </li>
                                            ))}
                                          </DisclosurePanel>
                                        </>
                                      )}
                                    </Disclosure>
                                  )}
                                </li>
                              ))}
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full bg-gray-50"
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
