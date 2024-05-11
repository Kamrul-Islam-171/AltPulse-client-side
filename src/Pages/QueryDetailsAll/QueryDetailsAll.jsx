import { useParams } from "react-router-dom";


const QueryDetailsAll = () => {
    const {id} = useParams();
    return (
        <div>
            hi iam hello {id}
        </div>
    );
};

export default QueryDetailsAll;