import { useSearchParams } from "react-router-dom";
import { SearchRequest } from "../components/SearchRequest";
import { useEffect, useState } from "react";
import { FlightOffer, FlightsResponse } from "../components/SearchResponse";
import { Flight } from "../components/Flight";

const ResultsPage = () => {
    const [searchParams] = useSearchParams();
    const [flights, setFlights] = useState<FlightOffer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const searchRequest: SearchRequest = {
        originLocationCode: searchParams.get("originLocationCode") || "",
        destinationLocationCode: searchParams.get("destinationLocationCode") || "",
        departureDate: searchParams.get("departureDate") || "",
        returnDate: searchParams.get("returnDate") || "",
        adults: parseInt(searchParams.get("adults") as string, 10) || 1,
        currencyCode: searchParams.get("currencyCode") || "",
        nonStop: searchParams.get("nonStop") === "true",
    };

    const queryString = new URLSearchParams({
        ...searchRequest,
        adults: searchRequest.adults.toString(),
        nonStop: searchRequest.nonStop.toString(),
    } as Record<string, string>).toString();

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await fetch("http://localhost:9090/amadeus/flights/search?" + queryString);
                console.log(response);
                if (!response.ok) {
                    throw new Error("Error fetching flights data");
                }
                const data: FlightsResponse = await response.json();
                console.log(data);
                setFlights(data.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div className="results-page">
            <h1 className="text-xl font-bold">Available Flights</h1>
            <div className="flights-list">
                {flights.map((flight) => (
                    <div key={flight.id} className="flight-offer">
                        {flight.itineraries.map((itinerary, index) => (
                            <div key={index}>
                                <Flight itinerary={itinerary} travelerPricings={flight.travelerPricings} price={flight.price} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export { ResultsPage };