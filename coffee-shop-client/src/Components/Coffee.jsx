import { useLoaderData } from "react-router-dom";

const Coffee = () => {
    const coffee = useLoaderData();
    // console.log(coffee);
    const { coffeeName, quantity, supplier, photoURL } = coffee;
    return (
        <div className="flex flex-col md:flex-row items-center justify-center py-16 px-5 md:px-0 bg-[#F4F3F0] gap-5 md:gap-28">
            <div className="max-w-[350px] h-[420px] flex items-center justify-center overflow-hidden">
                <img src={photoURL} alt={`image of ${coffeeName}`} />
            </div>
            <div className="font-primary text-xl text-[#1B1A1A] flex flex-col gap-3">
                <h2 className="font-secondary text-5xl text-[#331A15]">Niceties</h2>
                <p><span className="font-semibold">Coffee Name: </span> {coffeeName}</p>
                <p><span className="font-semibold">Supplier: </span> {supplier}</p>
                <p><span className="font-semibold">Quantity: </span> {quantity}</p>
            </div>
        </div>
    );
};

export default Coffee;