import React, {useRef, useState} from "react";
import Menu from "$/components/menu/Menu";
import {useRouter} from "$/router";

/**
 * A join game screen component that lets you enter a 6-digit code (to enter a game). <br />
 * Currently does absolutely nothing.
 * @component
 */
export default function JoinGame() {
    const router = useRouter();

    const refs = Array(6).fill(0).map((_) => useRef<HTMLInputElement>(null));
    const [gameCode, setGameCode] = useState(Array(6).fill(''));

    const handleInputChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 1 && index < refs.length - 1) {
            refs[index + 1].current?.focus();
        }
        const newGameCode = [...gameCode];
        newGameCode[index] = e.target.value;
        setGameCode(newGameCode);
    };

    const handleSubmit = () => {
        const code = gameCode.join('');
        console.log(code);
        // Here you can do whatever you want with the game code
    };

    return <div
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-menu-gradient-start via-menu-gradient-transition to-menu-gradient-end">
        <h1 className="mb-5 text-6xl font-MajorMonoDisplay text-white">Join Game</h1>
        <label htmlFor="gameId" className="mb-2 text-xl font-MajorMonoDisplay text-white">Enter your friends Game
            Code:</label>
        <div className="flex space-x-3">
            {refs.map((ref, index) => (<input key={index} ref={ref} onChange={handleInputChange(index)} name='code'
                                              className='text-2xl h-11 w-10 text-center bg-gray-500 text-white opacity-60 p-2 rounded-md'/>))}
        </div>
        <div className="mt-5">
            <button onClick={() => router.redirect(<Menu/>)}
                    className="px-6 py-2 text-2xl mb-4 text-white hover:text-gray-200">Back
            </button>
            <button onClick={handleSubmit} className="px-6 py-2 text-2xl text-white hover:text-gray-200">Join Game
            </button>
            {/* Attach the handleSubmit function here */}
        </div>
    </div>
}
