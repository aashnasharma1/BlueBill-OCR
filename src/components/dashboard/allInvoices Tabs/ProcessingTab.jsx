import React, { useState, useMemo } from 'react'
import { Image, Plus, RefreshCcw, Search } from 'lucide-react'
import { PaginationControls } from '@/components/UI/PaginationControl'

const processingData = [
    {
        image: <Image size={18} />,
        id: 12345,
        user: 'John',
        fileName: 'invoice.jpg',
        submissionMethod: 'via web',
        extractionProcess: '6 out of 8 fields extracted'
    },
    ...Array(5).fill(null).map((_, idx) => ({
        image: <Image size={18} />,
        id: idx + 2,
        user: 'Aarav',
        fileName: 'invoice.jpg',
        submissionMethod: 'via web',
        extractionProcess: '6 out of 8 fields extracted'
    }))
];

const tableHeaders = [
    { key: 'image', label: '' },
    { key: 'id', label: 'Item ID' },
    { key: 'user', label: 'User' },
    { key: 'fileName', label: 'Filename' },
    { key: 'submissionMethod', label: 'Submission Method' },
    { key: 'extractionProcess', label: 'Extraction Process' },
    { key: 'inbox', label: 'Action' },
];

const ProcessingTab = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const filteredData = useMemo(() => {
        return processingData.filter((v) =>
            v.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
            v.id.toString().includes(searchQuery)
        )
    }, [searchQuery])

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage
        return filteredData.slice(start, start + itemsPerPage)
    }, [filteredData, currentPage, itemsPerPage])

    return (
        <div>
            <div className="m-2 my-5">
                <span className="bg-gray-100 p-2 text-xs rounded-sm">Move all items to inbox</span>
            </div>

            {/* Table */}
            <div className="-mx-4 sm:-mx-0 overflow-x-auto px-2 ">
                <table className="min-w-full divide-y divide-[--border] bg-white shadow-sm rounded-md overflow-hidden">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr>
                            {tableHeaders.map((header) => (
                                <th
                                    key={header.key}
                                    className="px-4 py-3.5 text-left text-sm font-semibold text-primary"
                                >
                                    {header.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[--border]">
                        {paginatedData.map((invoice) => (
                            <tr key={invoice.id} className="hover:bg-gray-50">
                                <td className="py-4 px-4 text-sm text-gray-700">{invoice.image}</td>
                                <td className="py-4 px-4 text-sm text-gray-700">{invoice.id}</td>
                                <td className="py-4 px-4 text-sm text-gray-700">{invoice.user}</td>
                                <td className="px-3 py-4 text-sm text-gray-700">{invoice.fileName}</td>
                                <td className="px-3 py-4 text-sm text-gray-700">{invoice.submissionMethod}</td>
                                <td className="px-3 py-4 text-sm text-gray-700">{invoice.extractionProcess}</td>
                               <td className="px-4 py-3 text-sm">
                                    <button className="bg-indigo-500 text-white px-3 py-1.5 text-xs rounded-md hover:bg-indigo-600 transition-all duration-150 cursor-pointer">
                                        Move To Inbox
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="my-6">
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

export default ProcessingTab
