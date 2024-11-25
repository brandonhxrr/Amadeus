import { TravelerPricing } from "./SearchResponse";

interface PricePerTravelerProps {
    travelerPricing: TravelerPricing;
}

const PricePerTraveler: React.FC<PricePerTravelerProps> = ({travelerPricing}) => {
    return (
        <div className="w-full text-right mx-5">
            <p>{travelerPricing.travelerId}.- {travelerPricing.fareOption} {travelerPricing.travelerType} </p>
            <p className="text-xl ">Base: <span className="text-green-600">${travelerPricing.price.base} {travelerPricing.price.currency}</span></p>
            <p className="text-xl mb-4">Total: <span className="text-green-600">${travelerPricing.price.total} {travelerPricing.price.currency}</span></p>
        </div>
    );
}

export { PricePerTraveler };