import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Download } from "lucide-react";

export const PaginationControls = ({
  totalItems,
  currentPage,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  showDownload,
  itemsPerPageOptions = [10, 20, 50, 100, 105],

}) => {
  const [gotoPage, setGotoPage] = useState("");
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
  <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">

      {/* Left side: Download CSV button */}
      <div className="flex items-center gap-3 text-sm">
        {showDownload && (
          <Button
            variant="outline"
            size="sm"
            className="text-xs h-fit py-1 flex items-center gap-1"
          >
            <Download className="w-3 h-3" /> Download CSV
          </Button>
        )}
        <span className="text-sm whitespace-nowrap">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
        </span>
      </div>


      {/* Right side: Pagination controls and options */}
      {totalPages > 1 && (
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Pagination>
              <PaginationContent className="text-[10px] sm:text-xs md:text-sm gap-[2px]">
                <PaginationItem className="sm:text-sm ">
                  <PaginationPrevious
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                    className="px-1 py-[2px] sm:px-2 sm:py-1 text-[14px] sm:text-md"
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            onPageChange(page);
                          }}
                          href="#"
                          className="px-1 py-[2px] sm:px-2 sm:py-1 text-[14px] sm:text-md"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    (page === currentPage - 2 && page > 1) ||
                    (page === currentPage + 2 && page < totalPages)
                  ) {
                    return (
                      <PaginationItem key={`ellipsis-${page}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                })}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                    className="px-1 py-[2px] sm:px-2 sm:py-1 text-[14px] sm:text-md"

                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-sm">Show</span>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(val) => {
                  onItemsPerPageChange(parseInt(val));
                  onPageChange(1);
                }}
              >
                <SelectTrigger className="w-[100px] text-xs px-2 py-0 h-8">
                  <SelectValue placeholder="Limit" />
                </SelectTrigger>
                <SelectContent>
                  {itemsPerPageOptions.map((opt) => (
                    <SelectItem key={opt} value={opt.toString()}>
                      {opt} / page
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}


          <div className="flex items-center space-x-1 text-sm">
            <span className="whitespace-nowrap">Go to</span>
            <input
              type="number"
              value={gotoPage}
              onChange={(e) => setGotoPage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const pageNum = Math.max(
                    1,
                    Math.min(totalPages, parseInt(e.target.value))
                  );
                  if (!isNaN(pageNum)) {
                    onPageChange(pageNum);
                    setGotoPage("");
                  }
                }
              }}
              className="w-16 h-8 border rounded px-2 py-1 text-xs dark:bg-black"
              placeholder="Page"
              min="1"
              max={totalPages}
            />
          </div>

        </div>
      )}
    </div>
  );

};