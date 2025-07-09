import React, { useState, Suspense } from 'react'
import { Plus } from 'lucide-react'
import UploadInvoice from '../invoices/uploadInvoice'
import { ChevronDownIcon } from '@heroicons/react/16/solid'


const InboxTab = React.lazy(() => import('./allInvoices Tabs/InboxTab'))
const ProcessingTab = React.lazy(() => import('./allInvoices Tabs/ProcessingTab'))
const ApprovalsTab = () => <div className="p-4">Approvals content goes here</div>
const ArchiveTab = () => <div className="p-4">Archive content goes here</div>

const tabList = [
    { name: 'Inbox', component: 'InboxTab', count: 54 },
    { name: 'Processing', component: 'ProcessingTab', count: 6 },
    { name: 'Approvals', component: 'ApprovalsTab', count: 4 },
    { name: 'Archive', component: 'ArchiveTab' },
]

const tabComponents = {
    InboxTab,
    ProcessingTab,
    ApprovalsTab,
    ArchiveTab,
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const AllInvoices = () => {
    const [isOpen, setOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('InboxTab')

    const ActiveTabComponent = tabComponents[activeTab]

    return (
        <main className="h-[calc(100vh-64px)] overflow-y-auto">
            <div className="p-6 sm:p-6">
                {/* Header */}
                <div className="flex sm:flex-row items-center sm:items-center justify-between sm:justify-between gap-2 sm:gap-4 px-2 sm:px-2">
                    <h1 className="text-base font-semibold px-4">All Invoices</h1>
                    <div className="flex flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                        <button
                            onClick={() => setOpen(true)}
                            className="flex items-center justify-center gap-1 bg-indigo-600 px-4 py-2 text-white rounded-md text-sm font-semibold hover:bg-indigo-500 transition whitespace-nowrap cursor-pointer"
                        >
                            <Plus size={16} /> Add Invoice
                        </button>
                    </div>
                </div>

                <UploadInvoice isOpen={isOpen} setOpen={() => setOpen(false)} />

                {/* Mobile Tab Selector */}
                <div className="grid grid-cols-1 sm:hidden mt-4">
                    <select
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    >
                        {tabList.map((tab) => (
                            <option key={tab.component} value={tab.component}>
                                {tab.name}
                            </option>
                        ))}
                    </select>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                    />
                </div>

                {/* Desktop Tabs */}
                <div className="hidden sm:block mt-4 px-2">
                    <div className="border-b border-gray-200">
                        <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                            {tabList.map((tab) => {
                                const isActive = activeTab === tab.component
                                return (
                                    <button
                                        key={tab.name}
                                        onClick={() => setActiveTab(tab.component)}
                                        className={classNames(
                                            isActive
                                                ? 'border-indigo-500 text-indigo-600'
                                                : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                                            'flex border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap cursor-pointer'
                                        )}
                                    >
                                        {tab.name}
                                        {tab.count ? (
                                            <span
                                                className={classNames(
                                                    isActive ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                                                    'ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block'
                                                )}
                                            >
                                                {tab.count}
                                            </span>
                                        ) : null}
                                    </button>
                                )
                            })}
                        </nav>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                    <Suspense fallback={<div className="p-4 text-sm">Loading...</div>}>
                        <ActiveTabComponent />
                    </Suspense>
                </div>
            </div>
        </main>
    )
}

export default AllInvoices
