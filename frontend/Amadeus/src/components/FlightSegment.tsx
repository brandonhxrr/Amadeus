import { getParsedDate, getParsedTime, parseISODurationToTime } from "./DateUtils";
import { FareDetailsBySegment, Segment } from "./SearchResponse";

interface FlightSegmentProps {
    segment: Segment;
    fareDetailsBySegment: FareDetailsBySegment;
};

const FlightSegment: React.FC<FlightSegmentProps> = ({segment, fareDetailsBySegment}) => {
    return (
        <div className="w-full border-dashed border-b-2 py-5">
            <div className="flex justify-between font-bold font-mono">
                <p>Flight No. {segment.number}</p>
                <p>Aircraft {segment.aircraft.code}</p>
            </div>

            <div className="flex w-full items-center h-56 text-center divide-gray-700">
                <div className="w-1/5 h-full flex flex-col justify-center">
                    <div className="flex justify-center">
                        <svg className="w-4 h-4 me-5 text-gray-500 dark:text-gray-400" viewBox="0 0 86 54" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.243 41.151C30.437 36.282 71.243 22.841 73.533 22.206C78.983 20.694 85.4 17.317 85.117 14.28C85.051 13.571 81.777 8.347 70.096 11.122C67.346 11.775 61.799 13.527 54.281 16.013L25.421 0L19.406 1.988L36.733 21.753C27.415 24.777 12.305 29.166 12.305 29.166L3.53 21.61C3.046 21.193 2.379 21.061 1.772 21.261L0 21.847L8.46 38.336C9.729 40.807 12.598 41.999 15.243 41.151Z" fill="black" />
                            <path d="M82.125 44.269H3C1.343 44.269 0 45.612 0 47.269V50.154C0 51.811 1.343 53.154 3 53.154H82.125C83.782 53.154 85.125 51.811 85.125 50.154V47.269C85.125 45.612 83.782 44.269 82.125 44.269Z" fill="black" />
                        </svg>
                        <p>Departure</p>
                    </div>

                    <p className="font-mono font-bold text-3xl mt-7 mb-2">{getParsedTime(segment.departure.at as string)}</p>
                    <p className="font-mono font-bold text-sm my-1">{getParsedDate(segment.departure.at as string)}</p>

                    <p>Airport: {segment.departure.iataCode}</p>
                </div>

                <div className="w-1/5 h-full flex flex-col justify-center">
                    <p className="w-full border-dotted border-b-4 border-gray-400" />
                </div>

                <div className="w-1/5 h-full flex flex-col justify-center">
                    <p className="font-mono font-bold uppercase">{segment.carrierCode}</p>
                    <div className="flex justify-center py-5">
                        <p className="font-mono font-bold uppercase rounded-full bg-gradient-to-r from-blue-600 to-sky-300 text-white w-fit mx-auto px-5"> { parseISODurationToTime(segment.duration) }</p>
                    </div>
                    <p className="font-mono font-bold uppercase"></p>
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

                    <p className="font-mono font-bold text-3xl mt-7 mb-2">{getParsedTime(segment.arrival.at as string)}</p>
                    <p className="font-mono font-bold text-sm my-1">{getParsedDate(segment.arrival.at as string)}</p>

                    <p>Airport: {segment.arrival.iataCode}</p>
                </div>

            </div>

            <div className="flex justify-between font-mono">
                <div>
                    <p className="uppercase font-bold">Cabin</p>
                    <p>{fareDetailsBySegment.cabin}</p>
                </div>
                <div>
                    <p className="uppercase font-bold">Class</p>
                    <p>{fareDetailsBySegment.class}</p>
                </div>
            </div>
        </div>
    );
}

export { FlightSegment };