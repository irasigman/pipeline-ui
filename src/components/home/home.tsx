import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <section className="flex-1 flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto ">
                    <p className="text-center text-gray-500">Select a chat to start messaging</p>
                </div>
                <div className="p-4">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </section>
        </>
    );
};

export default Home;