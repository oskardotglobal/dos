import React, {useState} from "react";
import NewGame from "$/components/menu/NewGame";
import JoinGame from "$/components/menu/JoinGame";
import HowToPlay from "$/components/menu/HowToPlay";

const Menu = () => {
    const [selectedComponent, setSelectedComponent] = useState<React.ReactElement | null>(null);

    const handleClick = (component: React.ReactElement) => {
        setSelectedComponent(component);
    };

    if (selectedComponent) {
        return selectedComponent;
    }

    return (<div
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-menu-gradient-start via-menu-gradient-transition to-menu-gradient-end">
        <h1 className="mb-3 text-6xl font-MajorMonoDisplay text-white">Dos</h1>
        <h3 className="mb-36 text-xl font-MajorMonoDisplay text-white">A card game.</h3>
        <button onClick={() => handleClick(<NewGame/>)}
                className="px-6 py-2 text-2xl mb-4 text-white hover:text-gray-200">New Game
        </button>
        <button onClick={() => handleClick(<JoinGame/>)}
                className="px-6 py-2 text-2xl mb-4 text-white hover:text-gray-200">Join Game
        </button>
        <button onClick={() => handleClick(<HowToPlay/>)}
                className="px-6 py-2 text-2xl text-white hover:text-gray-200">How to Play
        </button>
    </div>);
}

export default Menu;