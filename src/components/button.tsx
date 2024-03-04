import React, { useState } from "react";

export function Button(): JSX.Element {
    const [count, setCount] = useState<number>(1);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div className="h-screen  flex items-center justify-center">
                <button
                    className="bg-black text-white px-5 py-3 rounded-xl"
                    onClick={handleClick}
                >
                    click {count}
                </button>
            </div>
        </>
    );
}
