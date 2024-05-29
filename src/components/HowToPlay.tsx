import React, {useState} from "react";
import Menu from "$/components/Menu";

const HowToPlay = () => {
    const [selectedComponent, setSelectedComponent] = useState<React.ReactElement | null>(null);

    const handleClick = (component: React.ReactElement) => {
        setSelectedComponent(component);
    };

    if (selectedComponent) {
        return selectedComponent;
    }

    return (<div
            className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-menu-gradient-start via-menu-gradient-transition to-menu-gradient-end"
            style={{
                backgroundAttachment: 'local', minHeight: '100vh', overflowY: 'auto', padding: '1em'
            }}
        >
            <h1 className="mb-5 text-6xl font-MajorMonoDisplay text-white">How To Play</h1>
            <p className="mb-2 text-white text-xl" style={{maxWidth: '40%'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas.
            </p>
            <div className="mt-5">
                <button onClick={() => handleClick(<Menu/>)}
                        className="px-6 py-2 text-2xl mb-4 text-white hover:text-gray-200">Back
                </button>
            </div>
        </div>);
}

export default HowToPlay;