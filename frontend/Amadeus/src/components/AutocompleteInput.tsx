import { useState, useEffect } from "react";
import { useDebounce } from "./Debounce";

interface Option {
    iataCode: string;
    name: string;
}

interface AutocompleteInputProps {
    inputName: string,
    placeholder: string,
    onSelect: (value: string) => void;
}

const AutocompleteInput = ({ inputName, placeholder, onSelect }: AutocompleteInputProps) => {
    const [name, setName] = useState<string>("");
    const [options, setOptions] = useState<Option[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const debouncedName = useDebounce(name, 500);

    useEffect(() => {
        if (name.length < 2) {
            setOptions([]);
            return;
        }

        const fetchOptions = async () => {
            setLoading(true);
            setError(null);
            console.log("Haciendo peticion " + name)
            try {
                const response = await fetch(`http://localhost:9090/amadeus/airports/search?name=${debouncedName}`);
                if (!response.ok) {
                    throw new Error("Error fetching options");
                }
                const data = await response.json();
                console.log(data);
                setOptions(data.data);
                console.log(options);
            } catch (err: any) {
                setError(err.message);
                setOptions([]);
            } finally {
                setLoading(false);
            }
        };

        if (showOptions) {
            fetchOptions();
        }

    }, [debouncedName, showOptions]);

    const handleInputChange = (value: string) => {
        setName(value);
        setShowOptions(true);
    }

    const handleSelect = (iataCode: string, airportName: string) => {
        setName(airportName);
        setOptions([]);
        onSelect(iataCode);
        setShowOptions(false);
    };

    return (
        <div className="">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    {
                        inputName === "originLocationCode" ?

                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 86 54" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.243 41.151C30.437 36.282 71.243 22.841 73.533 22.206C78.983 20.694 85.4 17.317 85.117 14.28C85.051 13.571 81.777 8.347 70.096 11.122C67.346 11.775 61.799 13.527 54.281 16.013L25.421 0L19.406 1.988L36.733 21.753C27.415 24.777 12.305 29.166 12.305 29.166L3.53 21.61C3.046 21.193 2.379 21.061 1.772 21.261L0 21.847L8.46 38.336C9.729 40.807 12.598 41.999 15.243 41.151Z" fill="black" />
                                <path d="M82.125 44.269H3C1.343 44.269 0 45.612 0 47.269V50.154C0 51.811 1.343 53.154 3 53.154H82.125C83.782 53.154 85.125 51.811 85.125 50.154V47.269C85.125 45.612 83.782 44.269 82.125 44.269Z" fill="black" />
                            </svg>
                            :
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 86 54" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.45 29.444C23.643 34.317 64.658 47.105 66.891 47.919C72.205 49.857 79.388 50.841 80.924 48.205C81.282 47.59 81.656 41.436 70.538 36.902C67.921 35.835 62.389 34.035 54.827 31.687L40.655 1.879L34.605 0L37.213 26.155C27.874 23.198 13.028 17.984 13.028 17.984L10.282 6.735C10.13 6.114 9.664 5.619 9.055 5.429L7.27301 4.875L4.569 23.21C4.164 25.958 5.805 28.595 8.45 29.444Z" fill="black" />
                                <path d="M82.124 55.255H3C1.343 55.255 0 56.598 0 58.255V61.14C0 62.797 1.343 64.14 3 64.14H82.125C83.782 64.14 85.125 62.797 85.125 61.14V58.255C85.124 56.598 83.781 55.255 82.124 55.255Z" fill="black" />
                            </svg>
                    }
                </div>
                <input type="text" name={inputName} value={name} onChange={(e) => handleInputChange(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-600 py-2">{error}</p>}
            {showOptions && options.length > 0 && (
                <ul className="border-2 list-none m-0 absolute z-10 mt-2 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                    {options.map((option) => (
                        <li
                            key={option.iataCode}
                            className="p-2 font-mono cursor-pointer divide-y-2 block px-4 text-sm data-[focus]:bg-gray-100 w-full text-left"
                            onClick={() => handleSelect(option.iataCode, option.iataCode + "-" + option.name)}
                        >
                            {option.iataCode} - {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export { AutocompleteInput };

