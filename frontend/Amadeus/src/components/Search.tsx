import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon, UsersIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { SearchRequest } from "./SearchRequest";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const searchRequest: SearchRequest = {
            originLocationCode: formData.get("originLocationCode") as string,
            destinationLocationCode: formData.get("destinationLocationCode") as string,
            departureDate: formData.get("departureDate") as string,
            returnDate: formData.get("returnDate") as string,
            adults: parseInt(formData.get("adults") as string, 10),
            currencyCode: formData.get("currencyCode") as string,
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
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 86 54" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.243 41.151C30.437 36.282 71.243 22.841 73.533 22.206C78.983 20.694 85.4 17.317 85.117 14.28C85.051 13.571 81.777 8.347 70.096 11.122C67.346 11.775 61.799 13.527 54.281 16.013L25.421 0L19.406 1.988L36.733 21.753C27.415 24.777 12.305 29.166 12.305 29.166L3.53 21.61C3.046 21.193 2.379 21.061 1.772 21.261L0 21.847L8.46 38.336C9.729 40.807 12.598 41.999 15.243 41.151Z" fill="black" />
                                            <path d="M82.125 44.269H3C1.343 44.269 0 45.612 0 47.269V50.154C0 51.811 1.343 53.154 3 53.154H82.125C83.782 53.154 85.125 51.811 85.125 50.154V47.269C85.125 45.612 83.782 44.269 82.125 44.269Z" fill="black" />
                                        </svg>
                                    </div>
                                    <input type="text" name="originLocationCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Origin" required />
                                </div>
                            </div>
                            <ArrowsRightLeftIcon className="w-5 mx-10" />
                            <div className="mb-5  w-1/2">
                                <label htmlFor="destinationLocationCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 86 54" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.45 29.444C23.643 34.317 64.658 47.105 66.891 47.919C72.205 49.857 79.388 50.841 80.924 48.205C81.282 47.59 81.656 41.436 70.538 36.902C67.921 35.835 62.389 34.035 54.827 31.687L40.655 1.879L34.605 0L37.213 26.155C27.874 23.198 13.028 17.984 13.028 17.984L10.282 6.735C10.13 6.114 9.664 5.619 9.055 5.429L7.27301 4.875L4.569 23.21C4.164 25.958 5.805 28.595 8.45 29.444Z" fill="black" />
                                            <path d="M82.124 55.255H3C1.343 55.255 0 56.598 0 58.255V61.14C0 62.797 1.343 64.14 3 64.14H82.125C83.782 64.14 85.125 62.797 85.125 61.14V58.255C85.124 56.598 83.781 55.255 82.124 55.255Z" fill="black" />
                                        </svg>
                                    </div>
                                    <input type="text" name="destinationLocationCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Destination" required />
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mb-5 w-1/2 mr-12">
                                <label htmlFor="departureDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departure</label>
                                <input type="date" name="departureDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none" placeholder="" required />
                            </div>
                            <div className="mb-5 w-1/2 ml-12">
                                <label htmlFor="returnDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Return</label>
                                <input type="date" name="returnDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none" placeholder="Destination" required />
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
                                <label htmlFor="passengers" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passengers</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                    </div>
                                    <input type="number" id="passengers" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none" placeholder="1" defaultValue={1} min="1" required />
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full mb-5 place-content-between items-center">
                            <div className="flex h-5 items-center">
                                <label htmlFor="nonStop" className="ms-2 me-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non-stop</label>
                                <input name="nonStop" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
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