import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchRequest } from "../components/SearchRequest";
import { useEffect, useState } from "react";
import { Dictionaries, FlightOffer, FlightsResponse } from "../components/SearchResponse";
import { Flight } from "../components/Flight";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { SortButton } from "../components/SortButton";

const initialSortOptions = new Map([
    ["Price (ascending)", { value: "price:asc", current: false }],
    ["Price (descending)", { value: "price:desc", current: false }],
    ["Duration (ascending)", { value: "duration:asc", current: false }],
    ["Duration (descending)", { value: "duration:desc", current: false }],
    ["Departure (earliest first)", { value: "departure:asc", current: false }],
    ["Departure (latest first)", { value: "departure:desc", current: false }],
]);

const ResultsPage = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [flights, setFlights] = useState<FlightOffer[]>([]);
    const [dictionaries, setDictionaries] = useState<Dictionaries>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [sortOptions, setSortOptions] = useState(initialSortOptions);

    const sortBy = searchParams.get("sortBy") || "";

    const searchRequest: SearchRequest = {
        originLocationCode: searchParams.get("originLocationCode") || "",
        destinationLocationCode: searchParams.get("destinationLocationCode") || "",
        departureDate: searchParams.get("departureDate") || "",
        returnDate: searchParams.get("returnDate") || "",
        adults: parseInt(searchParams.get("adults") as string, 10) || 1,
        currencyCode: searchParams.get("currencyCode") || "",
        sortBy: sortBy,
        nonStop: searchParams.get("nonStop") === "true",
    };

    const queryString = new URLSearchParams({
        ...searchRequest,
        adults: searchRequest.adults.toString(),
        nonStop: searchRequest.nonStop.toString(),
    } as Record<string, string>).toString();

    const onSortChange = (selectedOption: string) => {
        const newSortOptions = new Map(
            [...sortOptions.entries()].map(([name, option]) => [
                name,
                { ...option, current: name === selectedOption },
            ])
        );

        setSortOptions(newSortOptions);
        const selectedSortValue = newSortOptions.get(selectedOption)?.value || "";
        setSearchParams((prevParams) => {
            const updatedParams = new URLSearchParams(prevParams);
            updatedParams.set("sortBy", selectedSortValue);
            return updatedParams;
        });
    };

    useEffect(() => {
        const fetchFlights = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await fetch(
                    `http://localhost:9090/amadeus/flights/search?${queryString}`
                );
                if (!response.ok) {
                    throw new Error("Error fetching flights data");
                }
                const data: FlightsResponse = await response.json();
                setFlights(data.data);
                setDictionaries(data.dictionaries);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, [queryString]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="px-64">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
                    <ArrowLeftIcon className="w-5 h-5 me-3" />
                    <p>Return</p>
                </div>
                <h1 className="text-xl font-bold">Available Flights</h1>

                <SortButton
                    options={sortOptions}
                    title="Sort by"
                    onSortChanged={onSortChange}
                />
            </div>

            <div className="flights-list">
                {flights.map((flight, index) => (
                    <div key={flight.id} className="flight-offer">
                        <div key={index}>
                            <Flight
                                itineraries={flight.itineraries}
                                travelerPricings={flight.travelerPricings}
                                price={flight.price}
                                dictionaries={dictionaries as Dictionaries}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { ResultsPage };