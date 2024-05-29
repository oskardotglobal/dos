import React from "react";

const Menu = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-menu-gradient-start via-menu-gradient-transition to-menu-gradient-end">
            <h1 className="mb-3 text-6xl font-MajorMonoDisplay text-white">Dos</h1>
            <h3 className="mb-36 text-xl font-MajorMonoDisplay text-white">A card game.</h3>
            <button className="px-6 py-2 text-2xl mb-4 text-white hover:text-gray-200">New Game</button>
            <button className="px-6 py-2 text-2xl mb-4 text-white hover:text-gray-200">Join Game</button>
            <button className="px-6 py-2 text-2xl text-white hover:text-gray-200">How to Play</button>
        </div>
    );
}

export default Menu;