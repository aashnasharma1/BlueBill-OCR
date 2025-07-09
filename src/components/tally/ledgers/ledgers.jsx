import { useState } from "react";
import { RefreshCcw } from "lucide-react";

const people = [
  { partnerLedger: "Lindsay Walton", action: "Front-end Developer" },
  ...Array(5)
    .fill()
    .map(() => ({
      partnerLedger: "Lindsay Walton",
      action: "Front-end Developer",
    })),
];

const transactions = [
  {
    id: "AAPS0L",
    ledgerName: "Chase & Co.",
    openingBalance: "CAC",
    gstIn: "+$4.37",
    company: "SPECTRUM POLY PACK AND PACKAGING",
  },
  {
    id: "BDS93S",
    ledgerName: "Wells Fargo",
    openingBalance: "USD",
    gstIn: "+$1.25",
    company: "SPECTRUM POLY PACK AND PACKAGING",
  },
];

export default function Ledgers() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 overflow-y-scroll h-[calc(100vh-64px)] ">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto p-5 pb-0 flex justify-between items-center">
          <h1 className="text-base font-semibold text-primary">
            Tally Ledgers
          </h1>
          <button className="flex items-center gap-1 bg-indigo-600 px-4 py-2 text-white rounded-md text-sm font-semibold hover:bg-indigo-500 transition cursor-pointer">
            <RefreshCcw size={16} /> Sync Vendors
          </button>
        </div>
      </div>

      <div className="my-8 flow-root px-5">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-sm ring-1 ring-black/5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-[--border]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-primary sm:pl-6">
                      Partner Ledger
                    </th>
                    <th className="px-3 py-3.5 text-right pr-10 text-sm font-semibold text-primary">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[--border] bg-white">
                  {people.map((person, index) => (
                    <>
                      <tr key={`row-${index}`}>
                        <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-primary sm:pl-6">
                          {person.partnerLedger}
                        </td>
                        <td className="px-3 py-5 text-sm whitespace-nowrap text-right text-gray-500">
                          <span
                            className="inline-flex items-center rounded-md  px-2 py-2 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset hover:cursor-pointer"
                            onClick={() => toggleExpand(index)}
                          >
                            {expandedIndex === index
                              ? "Hide Ledgers"
                              : "View Ledgers"}
                          </span>
                        </td>
                      </tr>

                      {/*expanded table*/}
                      <tr key={`expand-${index}`}>
                        <td colSpan={2} className="p-0">
                          <div
                            className="transition-all duration-800 ease-in-out overflow-hidden"
                            style={{
                              maxHeight: expandedIndex === index ? "500px" : "0px",
                              opacity: expandedIndex === index ? 1 : 0,
                              padding: expandedIndex === index ? "16px 32px" : "0px 32px",
                            }}
                          >
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-[--border] border">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-primary">
                                      Ledger Name
                                    </th>
                                    <th className="px-2 py-3.5 text-left text-sm font-semibold text-primary">
                                      Opening Balance
                                    </th>
                                    <th className="px-2 py-3.5 text-left text-sm font-semibold text-primary">
                                      GST IN
                                    </th>
                                    <th className="px-2 py-3.5 text-left text-sm font-semibold text-primary">
                                      Company
                                    </th>
                                    <th className="py-3.5 pr-4 text-sm font-semibold text-right text-primary">
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-[--border] bg-white">
                                  {transactions.map((transaction) => (
                                    <tr key={transaction.id}>
                                      <td className="py-2 px-4 text-sm text-gray-400">
                                        {transaction.ledgerName}
                                      </td>
                                      <td className="px-2 py-2 text-sm font-medium text-primary">
                                        {transaction.openingBalance}
                                      </td>
                                      <td className="px-2 py-2 text-sm text-primary">
                                        {transaction.gstIn}
                                      </td>
                                      <td className="px-2 py-2 text-sm text-gray-400">
                                        {transaction.company}
                                      </td>
                                      <td className="px-4 py-2 text-sm text-right">
                                        <a
                                          href="#"
                                          className="text-indigo-600 hover:text-indigo-900"
                                        >
                                          Edit
                                        </a>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
