import { useRef } from 'react'

export const FocusScreen = () => {

    //* https://react.dev/reference/react/useRef
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        console.log(inputRef.current?.value);
        inputRef.current?.focus();
    };

    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h2 className='text-2xl font-thin text-white'>Focus Screen</h2>
            <input
                ref={inputRef}
                type="text"
                className='bg-white text-black px-4 py-2 rounded-md'
                autoFocus></input>

            <button className='bg-blue-500 px-4 py-2 rounded-md cursor-pointer'
                onClick={handleClick}>Set focus</button>

        </div>
    )
}
