export interface SearchRequest {
    originLocationCode: string,
    destinationLocationCode: string,
    departureDate: string,
    returnDate: string,
    adults: number,
    currencyCode: string,
    sortBy: string,
    nonStop: boolean,
}