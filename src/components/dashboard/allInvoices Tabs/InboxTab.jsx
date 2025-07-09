import React, { useState, useMemo } from 'react'
import {
    EllipsisVertical,
    Funnel,
    Image as ImageIcon,
    Search,
    Settings,
} from 'lucide-react'
import { PaginationControls } from '@/components/UI/PaginationControl'

const inboxData = [
    {
        id: 1,
        status: 'Ready',
        user: 'Ashish Gupta',
        date: '20 Jun 2025',
        supplier: 'Webshare Software',
        category: '424 - Software',
        total: 'USD 80.73',
        tax: 'USD 0.00',
    },
    {
        id: 2,
        status: 'To review 3',
        user: 'Ashish Gupta',
        date: '24 Jun 2025',
        supplier: '-',
        category: '',
        total: 'CAD 0.00',
        tax: 'CAD 0.00',
    },
    {
        id: 3,
        status: 'To review 1',
        user: 'Ashish Gupta',
        date: '18 Dec 2024',
        supplier: 'Really Great Site',
        category: '',
        total: 'CAD 3,300.00',
        tax: 'CAD 300.00',
    },
    {
        id: 4,
        status: 'Ready',
        user: 'Ashish Gupta',
        date: '13 Jun 2025',
        supplier: 'Dext Software',
        category: '487 - Software',
        total: 'CAD 72.50',
        tax: 'CAD 0.00',
    },
    ...Array(50).fill(null).map((_, idx) => ({
        id: idx + 5,
        status: idx % 2 === 0 ? 'Ready' : `To review ${Math.floor(Math.random() * 5) + 1}`,
        user: 'Ashish',
        date: '01 Jul 2025',
        supplier: 'Sample Supplier',
        category: '487 - Software',
        total: 'CAD 100.00',
        tax: 'CAD 5.00',
    }))
];


/*const tableHeaders = [
    {
        key: 'select',
        label: (
            <input
                type="checkbox"
                className="form-checkbox text-indigo-600 w-4 h-4"
                checked={paginatedData.length > 0 && paginatedData.every(row => selectedRows.includes(row.id))}
                onChange={(e) => {
                    if (e.target.checked) {
                        const newSelected = [...new Set([...selectedRows, ...paginatedData.map(row => row.id)])];
                        setSelectedRows(newSelected);
                    } else {
                        const remaining = selectedRows.filter(id => !paginatedData.some(row => row.id === id));
                        setSelectedRows(remaining);
                    }
                }}
            />
        ),
    },
    { key: 'status', label: 'Status' },
    { key: 'user', label: 'User' },
    { key: 'date', label: 'Date' },
    { key: 'supplier', label: 'Supplier' },
    { key: 'category', label: 'Category' },
    { key: 'total', label: 'Total' },
    { key: 'tax', label: 'Tax' },
    { key: 'action', label: 'Action' },
]*/

const InboxTab = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedRows, setSelectedRows] = useState([]);


    const filteredData = useMemo(() => {
        return inboxData.filter((v) =>
            v.user.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [searchQuery])

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage
        return filteredData.slice(start, start + itemsPerPage)
    }, [filteredData, currentPage, itemsPerPage])

    const buttonClass =
        'text-xs font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-black px-3 py-1.5 rounded-sm transition-all duration-150 shadow-sm'

    const getStatusBadge = (status) => {
        if (status.toLowerCase().includes('ready')) {
            return (
                <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-sm">
                    {status}
                </span>
            )
        }

        const match = status.match(/(To review)\s*(\d+)/i)
        if (match) {
            const label = match[1]
            const count = match[2]

            return (
                <span className="bg-yellow-100 text-yellow-800 text-xs rounded-sm inline-flex items-center px-2 py-1 font-medium">
                    {label}
                    <span className="ml-2 bg-yellow-800 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm">
                        {count}
                    </span>
                </span>
            )
        }

        return (
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded-sm">
                {status}
            </span>
        )
    }


    const getStatusCell = (status, id) => {
        const isReady = status.toLowerCase().includes('ready');
        const isReview = status.toLowerCase().includes('to review');
        const isSelected = selectedRows.includes(id);

        return (
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600 w-4 h-4"
                    checked={isSelected}
                    onChange={() => {
                        setSelectedRows((prev) =>
                            isSelected ? prev.filter(i => i !== id) : [...prev, id]
                        );
                    }}
                />
                <ImageIcon size={18} className="text-gray-700" />

            </div>
        );
    };

    const renderTableHeaders = () => {
        return (
            <tr>
                <th className="px-4 py-3 text-left text-sm font-medium whitespace-nowrap">
                    <input
                        type="checkbox"
                        className="form-checkbox text-indigo-600 w-4 h-4"
                        checked={
                            paginatedData.length > 0 &&
                            paginatedData.every(row => selectedRows.includes(row.id))
                        }
                        onChange={(e) => {
                            if (e.target.checked) {
                                const newSelected = [
                                    ...new Set([...selectedRows, ...paginatedData.map(row => row.id)])
                                ];
                                setSelectedRows(newSelected);
                            } else {
                                const remaining = selectedRows.filter(
                                    id => !paginatedData.some(row => row.id === id)
                                );
                                setSelectedRows(remaining);
                            }
                        }}
                    />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium">User</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Supplier</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Category</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Total</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Tax</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Action</th>
            </tr>
        );
    };



    return (
        <div className="w-full">
            {/* Top Bar */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                <div className="m-2 flex gap-2 flex-wrap">
                    <button className={buttonClass}>Publish</button>
                    <button className={buttonClass}>Archive</button>
                    <button className={buttonClass}>Move To</button>
                </div>

                <div className="flex items-center gap-4 mr-5 flex-wrap">
                    <div className="relative w-full sm:w-60">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <Search className="h-4 w-4" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search user..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value)
                                setCurrentPage(1)
                            }}
                            className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>
                    <Funnel size={20} className="text-gray-400" />
                    <Settings size={20} className="text-gray-400" />
                    <EllipsisVertical size={20} className="text-gray-400" />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-md shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      
                            {renderTableHeaders()}
                    

                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {paginatedData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm">
                                    {getStatusCell(item.status, item.id)}
                                </td>
                                <td className="px-4 py-3 text-sm">{getStatusBadge(item.status)}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.user}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.date}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.supplier}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">
                                    <select className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500">
                                        <option>{item.category || 'Select category'}</option>
                                    </select>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.total}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.tax}</td>
                                <td className="px-4 py-3 text-sm">
                                    <button className="bg-indigo-500 text-white px-3 py-1.5 text-xs rounded-md hover:bg-indigo-600 transition-all duration-150 cursor-pointer">
                                        Publish
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-6">
                <PaginationControls
                    totalItems={filteredData.length}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                    showDownload={false}
                />
            </div>
        </div>
    )
}

export default InboxTab
