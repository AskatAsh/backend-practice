import { useLoaderData } from "react-router-dom";

const Coffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    return (
        <div>
            <h2>Coffee Details</h2>
        </div>
    );
};

export default Coffee;