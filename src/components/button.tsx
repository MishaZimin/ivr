import React, { useState } from "react";

export function Button(): JSX.Element {
    const [count, setCount] = useState<number>(1);

    const handleClick = () => {
        setCount(count + 2);
    };

    return (
        <>
            <div className="h-screen  flex items-center justify-center">
                <button className="h-10 bg-white " onClick={handleClick}>
                    click {count}
                </button>
            </div>
        </>
    );
}
