import { useParams} from "react-router-dom";

const ResultsPage = () => {
    const { id } = useParams();
    return(
        <div>
            <h1>{id}</h1>

        </div>
    );
}

export { ResultsPage };