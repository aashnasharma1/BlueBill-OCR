import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ArrowUp } from 'lucide-react'
import UploadInvoice from '../invoices/uploadInvoice'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TabLayout = ({ title = "Vendor Bills", tabs = [], uploadLabel = "Upload" }) => {
  const location = useLocation()
  const [isOpen, setOpen] = useState(false)

  return (
    <main className='h-[calc(100vh-64px)] overflow-y-auto'>
      <div className="p-6 sm:p-6 ">

        <div className="flex sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6">
          <h1 className="text-sm sm:text-sm font-semibold">{title}</h1>
         <button 
            onClick={() => setOpen(true)} 
            className="w-auto flex items-center justify-center gap-1 bg-indigo-600 px-4 py-2 text-white rounded-md text-sm font-semibold hover:bg-indigo-500 transition cursor-pointer"
          >
            <ArrowUp size={16} /> {uploadLabel}
          </button>
        </div>

        {/* Upload Panel */}
        <UploadInvoice isOpen={isOpen} setOpen={() => setOpen(false)} />

        {/* Mobile Dropdown */}
        <div className="relative sm:hidden mt-4 px-2">
          <select
            value={tabs.find(tab => location.pathname === tab.href)?.name}
            onChange={(e) => {
              const selectedTab = tabs.find(tab => tab.name === e.target.value)
              if (selectedTab) {
                window.location.href = selectedTab.href
              }
            }}
            aria-label="Select a tab"
            className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-2.5 h-5 w-5 text-gray-400"
          />
        </div>

        {/* Desktop Tabs */}
        <div className="hidden sm:block mt-4 px-2">
          <div className="border-b border-[--border]">
            <nav aria-label="Tabs" className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => {
                const isActive = location.pathname === tab.href
                return (
                  <Link
                    key={tab.name}
                    to={tab.href}
                    className={classNames(
                      isActive
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-700',
                      'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap'
                    )}
                  >
                    <tab.icon
                      aria-hidden="true"
                      className={classNames(
                        isActive ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-2 -ml-0.5 h-5 w-5'
                      )}
                    />
                    <span>{tab.name}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>


        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default TabLayout
