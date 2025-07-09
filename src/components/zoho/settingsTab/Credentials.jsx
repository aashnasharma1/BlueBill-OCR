import { RefreshCcw } from 'lucide-react'
import React, { useState } from 'react'

const Credentials = () => {
    const [data] = useState({
        organizationId: '60022394747',
        clientId: '1000.EEUOS8NBH54WJFS680MWXRICKUTFTP',
        clientSecret: 'c449451cad3bca2e16604310f36acec0bd69a9ab63',
        accessToken:
            '1000.cd050ec0b4651d6dee74d18750e7813c.3a16844b4c257f822bd451a879e3e072',
        refreshToken:
            '1000.4a207936b7f97e7376cdf7b0a6e40533.5e12830b8d33e49a119ea5cfcd7ed3b9',
        lastSync: 'July 3, 2025, 11:42 a.m.',
    });

    const credentialItems = [
        { label: 'Organization ID', key: 'organizationId' },
        { label: 'Client ID', key: 'clientId' },
        { label: 'Client Secret', key: 'clientSecret' },
        { label: 'Access Token', key: 'accessToken' },
        { label: 'Refresh Token', key: 'refreshToken' },
        { label: 'Last Sync', key: 'lastSync' },
    ];

    return (
        <main className='h-[calc(100vh-64px)] overflow-y-auto'>
            <div className="p-6 sm:p-6 ">
                <div className="divide-y divide-[--border] overflow-hidden rounded-lg bg-white shadow-sm">
                    <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
                        <p>
                            Credentials
                        </p>
                        <RefreshCcw size={18} color="#4b22ef" className="cursor-pointer" />
                    </div>
                    <div className="px-6 py-5 space-y-4">
                        {credentialItems.map((item) => (
                            <div
                                key={item.key}
                                className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-4 pb-4"
                            >
                                <div className="sm:w-1/3 text-sm font-medium text-gray-400">
                                    {item.label}
                                </div>

                               
                               

                                <div className="sm:w-2/3 text-sm text-primary break-all">
                                    {data[item.key]}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Credentials
