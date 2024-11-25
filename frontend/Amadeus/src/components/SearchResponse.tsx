export interface FlightsResponse {
    data: FlightOffer[];
    dictionaries: Dictionaries;
  }

  export interface Dictionaries {
    carriers: {[key: string]: string};
    aircraft: {[key: string]: string};
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
  
  export interface Itinerary {
    duration: string;
    segments: Segment[];
  }
  
  export interface Segment {
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
  
  export interface Price {
    currency: string;
    total: string;
    base: string;
    fees: Fee[];
    grandTotal: string;
  }
  
  export interface Fee {
    amount: string;
    type: string;
  }
  
  export interface TravelerPricing {
    travelerId: string;
    fareOption: string;
    travelerType: string;
    price: TravelerPrice;
    fareDetailsBySegment: FareDetailsBySegment[];
  }
  
  export interface TravelerPrice {
    currency: string;
    total: string;
    base: string;
  }
  
  export interface FareDetailsBySegment {
    segmentId: string;
    cabin: string;
    fareBasis: string;
    class: string;
    travelClass: string;
    includedCheckedBags: IncludedCheckedBags;
  }
  
  interface IncludedCheckedBags {
    weight: number;
    weightUnit: string;
  }