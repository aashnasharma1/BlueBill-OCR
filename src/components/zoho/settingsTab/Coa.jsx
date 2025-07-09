import React, { useState, useMemo } from 'react';
import { RefreshCcw, Search } from 'lucide-react';
import { PaginationControls } from '@/components/UI/PaginationControl';

const coaData = [
  { accountId: 'A123', accountName: 'Sales Account', created_at: 'Feb. 22, 2025, 10:09 p.m.' },
  { accountId: 'B456', accountName: 'Expense Account', created_at: 'Feb. 22, 2025, 10:09 p.m.' },
  ...Array(20).fill(null).map((_, idx) => ({
    accountId: `A${100 + idx}`,
    accountName: 'Sales Account',
    created_at: 'Feb. 22, 2025, 10:09 p.m.'
  }))
];

const Coa = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredData = useMemo(() => {
    return coaData.filter((v) =>
      v.accountName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.accountId?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  return (
    <main className="h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b">
          <h1 className="text-base font-semibold">Chart Of Accounts</h1>

          <div className="flex flex-row sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-60">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-md border border-[--border] pl-10 pr-3 py-2 text-sm shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50"
              />
            </div>

            <button className="flex items-center justify-center gap-1 bg-indigo-600 px-4 py-2 text-white rounded-md text-sm font-semibold hover:bg-indigo-500 transition whitespace-nowrap">
              <RefreshCcw size={16} /> Sync COA
            </button>
          </div>
        </div>

        {/* Table */}
       <div className="-mx-4 sm:-mx-0 overflow-x-auto">
          <table className="min-w-full divide-y divide-[--border] bg-white shadow-sm rounded-md overflow-hidden">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="py-3.5 px-4 text-left text-sm font-semibold text-primary">ID</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-primary">Account ID</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-primary">Account Name</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-primary">Created At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[--border]">
              {paginatedData.map((item, index) => (
                <tr key={item.accountId}>
                  <td className="py-4 px-4 text-sm text-gray-700">{index + 1}</td>
                  <td className="px-3 py-4 text-sm text-gray-700">{item.accountId}</td>
                  <td className="px-3 py-4 text-sm text-gray-700">{item.accountName}</td>
                  <td className="px-3 py-4 text-sm text-gray-700">{item.created_at}</td>
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
    </main>
  );
};

export default Coa;
