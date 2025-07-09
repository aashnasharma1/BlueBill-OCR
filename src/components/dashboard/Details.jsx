import React, { useRef } from "react";
import { ToggleRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Invoice from '../../assets/Invoice-Format.webp';
import ActionButtons from "./ActionButtons";

const Details = () => {
    const imageRef = useRef();

    return (
        <main className="h-[calc(100vh-64px)] overflow-y-auto">
            <div className=" sm:p-6">
                {/* Top Buttons */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    {/* Left Section */}
                    <div className="flex items-center gap-2 flex-wrap">
                        {/* Back Button */}
                        <button className="flex items-center gap-1 text-sm font-medium text-black hover:underline mr-5">
                            <span className=" text-lg"><ChevronLeft size={16} /></span> Back
                        </button>

                        {/* Action Buttons */}
                        <button className="text-black px-4 py-1 rounded border border-black text-sm font-semibold">Publish</button>
                        <button className="bg-gray-100 text-gray-800 border px-4 py-1 rounded text-sm font-semibold">Add to expense claim</button>
                        <button className="bg-gray-100 text-gray-800 border px-4 py-1 rounded text-sm font-semibold">Split</button>
                        <button className="bg-gray-100 text-gray-800 border px-4 py-1 rounded text-sm font-semibold">Archive</button>
                        <button className="bg-gray-100 text-gray-800 border px-4 py-1 rounded text-sm font-semibold">Move to</button>
                        <button className="bg-gray-100 text-red-600 border px-4 py-1 rounded text-sm font-semibold">Delete</button>
                    </div>

                    {/* Right Section: Pagination */}
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-700 ">
                        <button className="text-gray-400 hover:text-black transition flex items-center gap-1">
                            <span><ChevronLeft size={16} /></span>  Previous
                        </button>
                        <span className="text-black">1 / 54</span>
                        <button className="text-black hover:text-black transition flex items-center gap-1">
                            Next <span><ChevronRight size={16} /></span>
                        </button>
                    </div>
                </div>


                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Left: Invoice Preview */}
                    <div className="flex-1 bg-white p-6 rounded shadow relative overflow-hidden flex justify-center items-center">
                        <img
                            ref={imageRef}
                            src={Invoice}
                            alt="Invoice Preview"
                            className="absolute max-w-[100%] max-h-full rounded border transition-transform duration-300"
                            id="invoice-image"
                        />
                        <ActionButtons imageRef={imageRef} />
                    </div>

                    {/* Right: Details Panel */}
                    <div className="w-full flex-1 bg-white p-6 rounded shadow flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-md font-bold">Details</h3>
                            <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">Ready</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Tax</label>
                            <select className="border rounded px-2 py-1 text-sm">
                                <option>Extracted amount</option>
                            </select>
                            <input type="text" placeholder="Tax amount" value="0.00" className="border px-2 py-1 rounded text-sm" />
                            <input type="text" placeholder="Net amount" value="80.73" className="border px-2 py-1 rounded text-sm bg-gray-50" readOnly />
                            <input type="text" placeholder="Total amount (CAD)" value="110.53" className="border px-2 py-1 rounded text-sm" />
                            <input type="text" placeholder="Tax amount (CAD)" value="0.00" className="border px-2 py-1 rounded text-sm" />
                        </div>

                        <div className="mt-4">
                            <h4 className="text-sm font-medium mb-1">PAYMENT</h4>
                            <div className="flex items-center gap-2 mb-2">
                                <label className="text-sm">Paid</label>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                            <select className="border px-2 py-1 rounded text-sm w-full">
                                <option>Add payment method</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Publish to</label>
                            <select className="border px-2 py-1 rounded text-sm">
                                <option>Purchases</option>
                            </select>
                            <label className="text-sm font-medium">Publish as</label>
                            <select className="border px-2 py-1 rounded text-sm">
                                <option>Awaiting Approval</option>
                            </select>
                        </div>

                        {/* Bottom Buttons */}
                        <div className="flex gap-2 flex-wrap mt-6">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">Publish</button>
                            <button className="bg-gray-100 text-gray-800 border px-4 py-2 rounded">Add to expense claim</button>
                            <button className="bg-gray-100 text-gray-800 border px-4 py-2 rounded">Archive</button>
                            <button className="bg-gray-100 text-gray-800 border px-4 py-2 rounded">More</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Details;
