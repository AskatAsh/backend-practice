import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>Get All Phones Data: {phones.length}</h2>
            <ul>
                {
                    phones.map(phone => <li key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default Phones;