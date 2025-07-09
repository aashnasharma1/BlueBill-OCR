import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { PlusIcon } from '@heroicons/react/20/solid'

const people = [
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Courtney Henry',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Tom Cook',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Floyd Miles',
        role: 'Principal Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

const AddWorkspace = ({ isOpen, setOpen }) => {

    return (
        <div>
            <Dialog open={isOpen} onClose={setOpen} className="relative z-10">
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <DialogPanel
                                transition
                                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                            >
                                <div className="flex h-full flex-col divide-y divide-[--border] bg-white shadow-xl">
                                    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto py-6">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <DialogTitle className="text-base font-semibold text-primary">Team Details</DialogTitle>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => setOpen()}
                                                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-hidden"
                                                    >
                                                        <span className="absolute -inset-2.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon aria-hidden="true" className="size-6" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mx-auto max-w-md sm:max-w-3xl px-5 mt-7">
                                            <div>
                                                <div className="text-center">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                        className="mx-auto size-12 text-gray-400"
                                                    >
                                                        <path
                                                            d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <h2 className="mt-2 text-base font-semibold text-[--primary]">Add team members</h2>
                                                    <p className="mt-1 text-sm text-gray-400">You haven’t added any team members to your project yet.</p>
                                                </div>
                                                <form action="#" className="mt-6 space-y-4">
                                                    {/* Team Name & ID Inputs */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div className="flex flex-col">
                                                             <span className="mb-1 text-xs text-gray-400">Team Name</span>
                                                            <input
                                                                name="teamName"
                                                                type="text"
                                                                placeholder="Enter team name"
                                                                className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                            />
                                                           
                                                        </div>

                                                        <div className="flex flex-col">
                                                            <span className="mb-1 text-xs text-gray-400">Team ID</span>
                                                            <input
                                                                name="teamId"
                                                                type="text"
                                                                placeholder="Enter team ID"
                                                                className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                            />
                                                            
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center my-4">
                                                        <hr className="flex-grow border-gray-300" />
                                                        <span className="mx-3 text-gray-400 text-sm font-medium">or</span>
                                                        <hr className="flex-grow border-gray-300" />
                                                    </div>

                                                    {/* Existing Email Invite UI */}
                                                    <div className="sm:flex sm:items-center">
                                                        <div className="flex grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                                            <input
                                                                name="emails"
                                                                type="text"
                                                                placeholder="Enter an email"
                                                                aria-label="Email addresses"
                                                                className="block min-w-0 grow py-1.5 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                            />
                                                            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                                                <select
                                                                    name="role"
                                                                    aria-label="Role"
                                                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                                >
                                                                    <option>Can edit</option>
                                                                    <option>Can view</option>
                                                                </select>
                                                                <ChevronDownIcon
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="mt-3 sm:mt-0 sm:ml-4 sm:shrink-0">
                                                            <button
                                                                type="submit"
                                                                className="block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                            >
                                                                Send invite
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                            <div className="mt-10">
                                                <h3 className="text-sm font-medium text-gray-400">Recommended team members</h3>
                                                <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                    {people.map((person, personIdx) => (
                                                        <li key={personIdx}>
                                                            <button
                                                                type="button"
                                                                className="group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                                                            >
                                                                <span className="flex min-w-0 flex-1 items-center space-x-3">
                                                                    <span className="block shrink-0">
                                                                        <img alt="" src={person.imageUrl} className="size-10 rounded-full" />
                                                                    </span>
                                                                    <span className="block min-w-0 flex-1">
                                                                        <span className="block truncate text-sm font-medium text-[--primary]">{person.name}</span>
                                                                        <span className="block truncate text-sm font-medium text-gray-400">{person.role}</span>
                                                                    </span>
                                                                </span>
                                                                <span className="inline-flex size-10 shrink-0 items-center justify-center">
                                                                    <PlusIcon aria-hidden="true" className="size-5 text-gray-400 group-hover:text-gray-500" />
                                                                </span>
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex shrink-0 justify-end px-4 py-4">
                                        <button
                                            type="button"
                                            onClick={() => setOpen()}
                                            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-xs ring-1 ring-gray-300 ring-inset hover:ring-gray-400"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default AddWorkspace
