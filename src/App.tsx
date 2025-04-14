import React from 'react';
import { Router } from './Router';

export default function App() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
                <h1 className="text-xl font-bold">Pipeline AI</h1>
            </header>

            {/* Main Content */}
            <main className="flex flex-1">
                {/* Sidebar */}
                <aside
                    className={`transition-all duration-300 ${
                        isSidebarOpen ? 'w-1/4' : 'w-12'
                    } bg-gray-100 p-4 border-r overflow-hidden`}
                >
                    <button
                        className="mb-4 text-sm text-blue-500 underline flex items-center"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        type="button"
                    >
                        
                        <div className="w-5 h-5 flex flex-col justify-between">
                            <span
                                className={`block h-1 bg-black transition-transform ${
                                    isSidebarOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                            />
                            <span
                                className="block h-1 bg-black transition-opacity"
                                style={{ opacity: isSidebarOpen ? 0 : 1 }}
                            />
                            <span
                                className={`block h-1 bg-black transition-transform ${
                                    isSidebarOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                            />
                        </div>
                    </button>
                    {isSidebarOpen && (
                        <>
                            <h2 className="text-lg font-semibold mb-4">Recent Chats</h2>
                            <ul className="space-y-2">
                                <li className="p-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
                                    Chat 1
                                </li>
                                <li className="p-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
                                    Chat 2
                                </li>
                                <li className="p-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
                                    Chat 3
                                </li>
                            </ul>
                        </>
                    )}
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 p-4 flex flex-col h-full">
                    <Router />
                </div>
            </main>
        </div>
    );
}
