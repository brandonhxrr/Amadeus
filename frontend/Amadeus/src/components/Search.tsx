import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon, UsersIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { SearchRequest } from "./SearchRequest";
import { useNavigate } from "react-router-dom";
import { AutocompleteInput } from "./AutocompleteInput";
import { useState } from "react";

const Search = () => {
    const navigate = useNavigate();

    const [originIataCode, setOriginIataCode] = useState("");
    const [destinationIataCode, setDestinationIataCode] = useState("");

    const[departureDate, setDepartureDate] = useState("");
    const[returnDate, setReturnDate] = useState("");

    const [passengersNumber, setPassengersNumber] = useState("");

    const getTodayDate = (): string => {
        const today = new Date();
        console.log(today);
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        
        return `${year}-${month}-${day}`;
    }

    const today = getTodayDate();
    console.log(today);

    const handleOriginSelection = (iataCode: string) => {
        setOriginIataCode(iataCode);
    }

    const handleDestinationSelection = (iataCode: string) => {
        setDestinationIataCode(iataCode);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const searchRequest: SearchRequest = {
            originLocationCode: originIataCode,
            destinationLocationCode: destinationIataCode,
            departureDate: formData.get("departureDate") as string,
            returnDate: formData.get("returnDate") as string,
            adults: parseInt(formData.get("adults") as string, 10),
            currencyCode: formData.get("currencyCode") as string,
            sortBy: "",
            nonStop:  formData.get("nonStop") === "on" as string
        }

        const queryString = new URLSearchParams({
            ...searchRequest,
            adults: searchRequest.adults.toString(),
            nonStop: searchRequest.nonStop.toString(),
        } as Record<string, string>).toString();

        navigate("/search?" + queryString);
    }
    return (
        <div>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Search flights</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Use Amadeus to explore cheap flights to anywhere. Search destinations and track prices to find and book your next flight.</p>
            <div className="w-full p-4 mt-10 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 sm:px-20 dark:bg-gray-800 dark:border-gray-700">

                <div className="text-left">
                    <form className="mx-auto justify-center" onSubmit={handleSubmit}>
                        <div className="flex">
                            <div className="mb-5 w-1/2">
                                <label htmlFor="originLocationCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                                <AutocompleteInput inputName="originLocationCode" placeholder="Origin" onSelect={handleOriginSelection} />
                            </div>
                            <ArrowsRightLeftIcon className="w-5 mx-10" />
                            <div className="mb-5  w-1/2">
                                <label htmlFor="destinationLocationCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                                <AutocompleteInput inputName="destinationLocationCode" placeholder="Destination" onSelect={handleDestinationSelection} />
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mb-5 w-1/2 mr-12">
                                <label htmlFor="departureDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departure</label>
                                <input
                                type="date"
                                name="departureDate"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none"
                                placeholder=""
                                value={departureDate}
                                onChange={(e) => setDepartureDate(e.target.value)}
                                min={today}
                                required />
                            </div>
                            <div className="mb-5 w-1/2 ml-12">
                                <label htmlFor="returnDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Return</label>
                                <input
                                type="date"
                                name="returnDate"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none"
                                placeholder="Destination"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                min={departureDate || today}
                                required />
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mb-5 w-1/2 mr-11">
                                <label htmlFor="currencyCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Currency</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <CurrencyDollarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                    </div>
                                    <select name="currencyCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>USD</option>
                                        <option>MXN</option>
                                        <option>EUR</option>
                                    </select>
                                </div>

                            </div>
                            <div className="mb-5 w-1/2 ml-11">
                                <label htmlFor="adults" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passengers</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                    </div>
                                    <input type="number" name="adults" value={passengersNumber} onChange={(e) => setPassengersNumber(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none" placeholder="1" defaultValue={1} min="1" required />
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full mb-5 place-content-between items-center">
                            <div className="flex h-5 items-center">
                                <label htmlFor="nonStop" className="ms-2 me-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non-stop</label>
                                <input name="nonStop" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>

                            <button type="submit" className="text-white flex items-center bg-gradient-to-r from-blue-600 to-sky-300 border-none hover:border-blue-50 focus:ring-4 focus:outline-none focus:transparent font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                <MagnifyingGlassIcon className="w-3.5 h-3.5 me-2" />
                                Search flights</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
}

export { Search };