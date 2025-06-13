import { useState } from "react"
import { useEffect } from "react"
const people = [
    { partnerLedger: 'Lindsay Walton', action: 'Front-end Developer' },
    // More people...
]

const transactions = [
    {
        id: 'AAPS0L',
        ledgerName: 'Chase & Co.',
        openingBalance: 'CAC',
        gstIn: '+$4.37',
        company: '$3,509.00',
    },
    // More transactions...
]


export default function Ledgers() {
    const [showLedger, setShowLedger] = useState(false)

useEffect(() => {
  console.log(showLedger)
}, [showLedger])

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">Tally Ledgers</h1>
                    {/* <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p> */}
                </div>
                {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div> */}
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-sm ring-1 ring-black/5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Partner Ledger
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-right pr-10 text-sm font-semibold text-gray-900">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person) => (
                                        <tr key={person.partnerLedger}>
                                            <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6">
                                                {person.partnerLedger}
                                            </td>
                                            <td className="px-3 py-5 text-sm whitespace-nowrap text-right text-gray-500">
                                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset hover:cursor-pointer" 
                                                onClick={() => setShowLedger(showLedger != showLedger)}>
                                                    View Ledgers
                                                </span>
                                            </td>
                                            {/* <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td> */}
                                            {/* <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td> */}
                                        </tr>
                                        
                                    ))}
                                    <tr>
                                        <td colSpan={2}>
                        <div
                          className="overflow-hidden  transition-all duration-500 ease-in-out mx-8"
                        //   style={{
                        //     maxHeight: expandCategory === category.id ? '100%' : '0',
                        //     opacity: expandCategory === category.id ? 1 : 0,
                        //     borderColor: expandCategory === category.id ? '#E5E7EB' : 'transparent'
                        //   }}
                        >
                            <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold whitespace-nowrap text-gray-900 sm:pl-0"
                  >
                    Ledger Name
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Opening Balance
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    GST IN
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Company
                  </th>
                  
                  <th scope="col" className="relative py-3.5 pr-4 pl-3 whitespace-nowrap sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="py-2 pr-3 pl-4 text-sm whitespace-nowrap text-gray-500 sm:pl-0">{transaction.ledgerName}</td>
                    <td className="px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-900">
                      {transaction.openingBalance}
                    </td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-900">{transaction.gstIn}</td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500">{transaction.company}</td>
                    <td className="relative py-2 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {transaction.id}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
                          {/* <div className=" relative w-full  pl-10  ">
                            <table className="w-full relative  ">
                              <div className='h-full w-[2.1px] bg-gray-200 absolute rounded-xl -ml-3 '></div>
                              < tbody>
                                {subCategory.map((subCategory, index) => (
                                  <tr key={index} className="relative w-full ">
                                    <div className='  w-[72%] h-[1.4px] absolute bg-gray-200 mt-[17px] left-55 '> </div>

                                    <td className=" text-[12px] sm:text-[14px] md:text-[15px] lg:text-sm whitespace-nowrap text-gray-500  ">
                                      <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5 md:size-6 lg:size-6 ">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                        </svg>
                                        <div className='ml-3  '>{subCategory.category}</div>
                                      </div>
                                    </td>


                                    <td className=" text-right pr-6 py-2 text-[12px] sm:text-[14px] md:text-[15px] lg:text-sm whitespace-nowrap text-gray-500">
                                      {subCategory.total_count}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>

                            <div className="flex items-center justify-between border-t border-gray-100  px-4 py-3 sm:px-6  w-full">
                              <div className="flex flex-1 justify-between sm:hidden ">
                                <div
                                  href="#"
                                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                  Previous
                                </div>
                                <div
                                  href="#"
                                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                  Next
                                </div>
                              </div>

                            </div>
                          </div> */}
                        </div>
                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
