export interface FlightsResponse {
    data: FlightOffer[];
  }
  
  export interface FlightOffer {
    id: string;
    type: string;
    source: string;
    numberOfBookableSeats: number;
    itineraries: Itinerary[];
    price: Price;
    travelerPricings: TravelerPricing[];
  }
  
  interface Itinerary {
    duration: string;
    segments: Segment[];
  }
  
  interface Segment {
    id: string;
    duration: string;
    numberOfStops: number;
    departure: Location;
    arrival: Location;
    carrierCode: string;
    number: string;
    aircraft: Aircraft;
  }
  
  interface Location {
    iataCode: string;
    terminal: string;
    at: string;
  }
  
  interface Aircraft {
    code: string;
  }
  
  interface Price {
    currency: string;
    total: string;
    base: string;
    fees: Fee[];
    grandTotal: string;
  }
  
  interface Fee {
    amount: string;
    type: string;
  }
  
  interface TravelerPricing {
    travelerId: string;
    fareOption: string;
    travelerType: string;
    price: TravelerPrice;
    fareDetailsBySegment: FareDetailsBySegment[];
  }
  
  interface TravelerPrice {
    currency: string;
    total: string;
    base: string;
  }
  
  interface FareDetailsBySegment {
    segmentId: string;
    cabin: string;
    fareBasis: string;
    travelClass: string;
    includedCheckedBags: IncludedCheckedBags;
  }
  
  interface IncludedCheckedBags {
    weight: number;
    weightUnit: string;
  }