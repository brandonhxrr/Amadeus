import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { FlightSegment } from "./FlightSegment";
import { PricePerTraveler } from "./PricePerTraveler";

const Flight = () => {
    return (
        <div>
            <div className="w-full p-4 mt-10 bg-white border border-gray-200 rounded-t-lg rounded-b-lg shadow sm:p-8 sm:px-20 dark:bg-gray-800 dark:border-gray-700">
                <p className="mb-5 sm:text-lg dark:text-gray-400 text-left text-4xl font-bold">MX - ROME</p>
                <div className="flex w-full">
                    <div className="flex w-full items-center h-56 text-center divide-gray-700">
                        <div className="w-1/5 h-full flex flex-col justify-center">
                            <div className="flex justify-center">
                                <svg className="w-4 h-4 me-5 text-gray-500 dark:text-gray-400" viewBox="0 0 86 54" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.243 41.151C30.437 36.282 71.243 22.841 73.533 22.206C78.983 20.694 85.4 17.317 85.117 14.28C85.051 13.571 81.777 8.347 70.096 11.122C67.346 11.775 61.799 13.527 54.281 16.013L25.421 0L19.406 1.988L36.733 21.753C27.415 24.777 12.305 29.166 12.305 29.166L3.53 21.61C3.046 21.193 2.379 21.061 1.772 21.261L0 21.847L8.46 38.336C9.729 40.807 12.598 41.999 15.243 41.151Z" fill="black" />
                                    <path d="M82.125 44.269H3C1.343 44.269 0 45.612 0 47.269V50.154C0 51.811 1.343 53.154 3 53.154H82.125C83.782 53.154 85.125 51.811 85.125 50.154V47.269C85.125 45.612 83.782 44.269 82.125 44.269Z" fill="black" />
                                </svg>
                                <p>Departure</p>
                            </div>

                            <p className="font-mono font-bold text-3xl my-5">7:30 AM</p>
                            <p>Airport: NLU</p>
                        </div>

                        <div className="w-1/5 h-full flex flex-col justify-center">
                            <p className="w-full border-dotted border-b-4 border-gray-400" />
                        </div>

                        <div className="w-1/5 h-full flex flex-col justify-center">
                            <p className="font-mono font-bold uppercase">Volaris</p>
                            <div className="flex justify-center py-5">
                                <svg width="96" height="91" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.2809 88.5039L46.5348 77.8989L49.7653 78.1021C50.9762 78.2036 51.988 77.2935 52.0895 76.1841V75.8794C52.191 74.8677 52.191 73.9614 52.0895 72.9497V72.645C51.8863 71.6333 51.0778 70.8286 50.1715 70.727L51.0816 69.0082L55.0191 69.2113C56.23 69.3129 57.2418 68.4027 57.3433 67.2933V66.9886C57.4449 65.9769 57.4449 65.0706 57.3433 64.0589V63.7542C57.1402 62.5433 56.1324 61.7347 55.0191 61.8362H54.6168L59.3629 52.2385H83.6049C89.9682 52.344 95.1209 49.1096 95.1209 45.0705C95.1209 41.0314 89.9686 37.8986 83.7069 37.8986H59.3629L54.6168 28.4025H55.0191C56.1285 28.5041 57.1402 27.6955 57.3433 26.4845V26.1798C57.4449 25.1681 57.4449 24.2618 57.3433 23.2501V22.9454C57.2418 21.836 56.2339 20.926 55.0191 21.0275L51.0816 21.2306L50.1715 19.5118C51.0816 19.4102 51.8903 18.6016 52.0895 17.5938V17.2891C52.191 16.2774 52.191 15.3711 52.0895 14.3594V14.0547C51.9879 12.9453 50.9801 12.0352 49.7653 12.1367L46.6364 12.3437L41.3825 1.73872C40.8786 0.727021 39.8669 0.121521 38.7575 0.121521C36.9411 0.121521 35.6247 1.63712 35.7263 3.45352L39.363 37.8985L31.5857 37.8985H30.7771C25.9294 37.8985 21.3826 38.2032 17.3431 38.7071L5.72607 27.2931C5.32373 26.9884 4.71437 26.8908 4.10887 27.09C3.09717 27.3947 2.59327 28.3009 2.89797 29.008L6.63627 40.824C2.99957 42.0349 0.878471 43.449 0.878471 45.0662C0.878471 46.6834 2.99957 48.0974 6.63627 49.3084L2.89797 61.1244C2.59328 61.8314 3.1011 62.7416 4.10887 63.0424C4.71434 63.2455 5.31977 63.1439 5.72607 62.8393L17.3431 51.4333C21.3822 51.9372 25.929 52.2419 30.7771 52.2419H31.5857L39.363 52.2419L35.6247 86.7889C35.5231 88.6053 36.8356 90.1209 38.6559 90.1209C39.7653 90.1209 40.777 89.5157 41.2809 88.5039Z" fill="url(#paint0_linear_16_9)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_16_9" x1="105" y1="75.5" x2="1" y2="8.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#88E1FF" />
                                            <stop offset="1" stop-color="#0180FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <p className="font-mono font-bold uppercase rounded-full bg-gradient-to-r from-blue-600 to-sky-300 text-white w-fit mx-auto px-5">2h 45m</p>
                        </div>

                        <div className="w-1/5 h-full flex flex-col justify-center">
                            <p className="w-full border-dotted border-b-4 border-gray-400" />
                        </div>

                        <div className="w-1/5 h-full flex flex-col justify-center">
                            <div className="flex justify-center">
                                <svg className="w-4 h-4 me-5 text-gray-500 dark:text-gray-400" viewBox="0 0 86 54" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.45 29.444C23.643 34.317 64.658 47.105 66.891 47.919C72.205 49.857 79.388 50.841 80.924 48.205C81.282 47.59 81.656 41.436 70.538 36.902C67.921 35.835 62.389 34.035 54.827 31.687L40.655 1.879L34.605 0L37.213 26.155C27.874 23.198 13.028 17.984 13.028 17.984L10.282 6.735C10.13 6.114 9.664 5.619 9.055 5.429L7.27301 4.875L4.569 23.21C4.164 25.958 5.805 28.595 8.45 29.444Z" fill="black" />
                                    <path d="M82.124 55.255H3C1.343 55.255 0 56.598 0 58.255V61.14C0 62.797 1.343 64.14 3 64.14H82.125C83.782 64.14 85.125 62.797 85.125 61.14V58.255C85.124 56.598 83.781 55.255 82.124 55.255Z" fill="black" />
                                </svg>
                                <p>Arrival</p>
                            </div>

                            <p className="font-mono font-bold text-3xl my-5">7:30 AM</p>
                            <p>Airport: NLU</p>
                        </div>

                    </div>

                    <div className="ms-5 border-dotted border-l-4 border-gray-400 content-center">

                        <p className="text-xl text-green-600 font-mono font-bold w-full text-right mx-5">$1,200 MXN</p>
                        <p className="text-md text-gray-800 font-mono font-bold w-full text-right mx-5">total</p>
                        <p className="text-xl text-green-600 font-mono font-bold w-full text-right mx-5 mt-3">$1,200 MXN</p>
                        <p className="text-md text-gray-800 font-mono font-bold w-full text-right mx-5">per traveler</p>

                    </div>
                </div>

                <div className="flex justify-center items-center mt-5">
                    <p className="font-mono uppercase text-sm font-bold">More details</p>
                    <ChevronDownIcon className="w-5 h-5 ms-1" />
                </div>


            </div>

            <div className="w-full bg-white border border-gray-200 rounded-b-lg sm:py-8 sm:px-20 dark:bg-gray-800 dark:border-gray-700">
                <p className="font-bold font-mono text-lg text-start mb-5 uppercase">Segments</p>
                <div className="flex w-full">
                    <div className="flex-col w-full items-center text-center">

                        <FlightSegment />
                        <FlightSegment />
                    </div>
                    <div className="ms-5 border-dotted border-l-4 border-gray-400 content-center font-mono font-bold uppercase">
                        <p className="text-xl text-right m-5 w-full" mx-5>Price Breakdown</p>
                        <div className="w-full text-right mx-5">
                            <p className="text-xl ">Base: <span className="text-green-600">$1,000 MXN</span></p>
                            <p className="text-xl border-b-2 mb-4">Fees: <span className="text-green-600">$200 MXN</span></p>
                            <p className="text-xl ">Total: <span className="text-green-600">$1,200 MXN</span></p>
                        </div>

                        <p className="text-xl text-right mt-10 m-5 w-full" mx-5>Per traveler</p>
                         <PricePerTraveler/>
                         <PricePerTraveler/>
                    </div>
                </div>



            </div>
        </div>
    );
}

export { Flight }