import React, { useState } from 'react';
import { CloudDownload, ImageDown, Search, X, Eye, ShieldCheck, Trash2, TextSearch, ArrowLeft } from 'lucide-react';
import { PaginationControls } from '@/components/UI/PaginationControl';
import Invoice from '../../assets/Invoice-Format.webp';
import { Separator } from '@/components/UI/separator';

const statuses = ['Drafts', 'Analyzed', 'Synced'];
const bills = Array.from({ length: 99 }, (_, i) => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    return {
        id: `BM-ZV-${i + 1}`,
        createdAt: 'March 8, 2025, 9:57 p.m.',
        status,
        imageUrl: Invoice,
        location: 'Sector 32, Gurgaon',
        biller: 'DHBVN',
        createdDate: 'January 21, 2023',
    };
});


const statusColors = {
    Drafts: 'orange',
    Analyzed: 'blue',
    Synced: 'cyan',
};

const statusStyles = {
    Drafts: 'text-orange-700 ring-orange-600/20',
    Analyzed: ' text-blue-700 ring-blue-600/20',
    Synced: 'text-cyan-700 ring-cyan-600/20',
};


const TableLayout = ({ type = 'Drafts' }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedBill, setSelectedBill] = useState(null);
    const [previewImageOnly, setPreviewImageOnly] = useState(false);

    const filteredBills = bills.filter(
        (bill) =>
            bill.status === type &&
            bill.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentBills = filteredBills.slice(indexOfFirst, indexOfLast);

    const color = statusColors[type] || 'gray';

    const closeModal = () => setSelectedBill(null);

    return (
        <div className="px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between mt-4 mb-2">
                <p className="text-sm text-gray-600">Showing {type.toLowerCase()} bills</p>
                <div className="relative w-40 max-w-xs sm:w-60">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <Search className="h-4 w-4" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search by ID..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="mt-2 overflow-x-auto max-h-[60vh]">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr>
                            <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-primary sm:pl-0">ID</th>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-primary">Status</th>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-primary">Created At</th>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-primary">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[--border] bg-white">
                        {currentBills.length > 0 ? (
                            currentBills.map((bill) => {
                                const billColor = statusColors[bill.status] || 'gray';
                                return (
                                    <tr key={bill.id}>
                                        <td className="py-5 pr-3 pl-4 text-sm whitespace-nowrap sm:pl-0">
                                            <div className="font-medium text-primary">{bill.id}</div>
                                        </td>
                                        <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-400">
                                            <span
                                                className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[bill.status]}`}
                                            >
                                                {bill.status}
                                            </span>

                                        </td>

                                        <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-400">{bill.createdAt}</td>
                                        <td className="px-3 py-5 text-sm">
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => setSelectedBill(bill)}
                                                    className="text-blue-600 font-medium border border-dashed border-blue-600 rounded-sm px-2 p-1 bg-blue-200/20 hover:shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                                                    title="View"
                                                >
                                                    <Eye size={16} />
                                                </button>

                                                <button
                                                    className="text-green-600 font-medium border border-dashed border-green-600 rounded-sm px-2 py-1 bg-green-200/20 hover:shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                                                    title={bill.status === 'Synced' ? 'Detail' : 'Verify'}
                                                >
                                                    {bill.status === 'Synced' ? <TextSearch size={16} /> : <ShieldCheck size={16} />}
                                                </button>

                                                <button
                                                    className="text-red-600 font-medium border border-dashed border-red-600 rounded-sm px-2 py-1 bg-red-200/20 hover:shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>

                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-6 text-gray-500">
                                    No results found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="my-6">
                <PaginationControls
                    totalItems={filteredBills.length}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                    showDownload={false}
                />
            </div>

            {/* Image Modal */}
            {selectedBill && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-2">
                    {previewImageOnly ? (
                        // Image-only Modal 
                        <div className="relative max-w-full max-h-full">
                            <img
                                src={selectedBill.imageUrl}
                                alt={`Bill ${selectedBill.id}`}
                                className="max-h-[80vh] w-auto rounded shadow-lg mx-auto"
                            />


                            <button
                                onClick={() => setSelectedBill(null)}
                                className="absolute top-2 right-2 bg-white text-black rounded-full p-1 hover:bg-gray-100 cursor-pointer transition-transform transform hover:scale-110"
                            >
                                <X size={16} />
                            </button>

                          
                            <button
                                onClick={() => setPreviewImageOnly(false)}
                                className="absolute top-2 left-2 bg-white text-black rounded-full p-1 hover:bg-gray-100 cursor-pointer transition-transform transform hover:scale-110"
                            >
                                <ArrowLeft size={16} />
                            </button>

                        </div>
                    ) : (
                        // Full Detail Modal
                        <div className="bg-white rounded-md shadow-xl w-full max-w-5xl flex flex-col md:flex-row relative max-h-[90vh] overflow-y-auto">


                            <button
                                onClick={() => setSelectedBill(null)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                            >
                                <X size={16} />
                            </button>

                            {/* Left Side: Details */}
                            <div className="w-full md:w-1/2 p-4 sm:p-6 border-b md:border-b-0 md:border-r">
                                <h2 className="text-md font-semibold mb-6">Bill Details</h2>

                                <div className="mb-4 flex flex-col gap-1">
                                    <p className="text-xs text-gray-500">LOCATION</p>
                                    <p className="text-sm font-medium">{selectedBill.location}</p>
                                </div>

                                <Separator className="mb-4" />
                                <div className="mb-4 flex flex-col gap-1">
                                    <p className="text-xs text-gray-500">STATUS</p>
                                    <p className="text-sm font-medium">{selectedBill.status}</p>
                                </div>

                                <Separator className="mb-4" />
                                <div className="mb-4 flex flex-col gap-1">
                                    <p className="text-xs text-gray-500">CREATED AT</p>
                                    <p className="text-sm font-medium">{selectedBill.createdDate}</p>
                                </div>

                                <Separator className="mb-4" />
                                <div className="mb-4 flex flex-col gap-1">
                                    <p className="text-xs text-gray-500">BILLER</p>
                                    <p className="text-sm font-medium">{selectedBill.biller}</p>
                                </div>

                                <Separator className="mb-6" />
                                <div className="flex justify-between gap-3">
                                    <button className="text-green-600 text-sm border border-dashed border-green-600 rounded px-3 py-1 bg-green-200/20 hover:shadow">
                                        Approve
                                    </button>
                                    <button className="text-red-600 text-sm border border-dashed border-red-600 rounded px-3 py-1 bg-red-200/20 hover:shadow">
                                        Reject
                                    </button>
                                </div>
                            </div>

                            {/* Right Side: Image */}
                            <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-between">
                                <img
                                    src={selectedBill.imageUrl}
                                    alt={`Bill ${selectedBill.id}`}
                                    className="max-h-[65vh] w-auto border rounded cursor-pointer"
                                    onClick={() => setPreviewImageOnly(true)}
                                />

                                <a
                                    href={selectedBill.imageUrl}
                                    download={`Bill-${selectedBill.id}.jpg`}
                                    className="mt-6 flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm transition"
                                >
                                    <CloudDownload size={16} />
                                    Download
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            )}



        </div>
    );
};

export default TableLayout;
