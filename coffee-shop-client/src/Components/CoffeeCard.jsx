import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { RiEdit2Fill, RiDeleteBin6Fill } from "react-icons/ri";



const CoffeeCard = ({ coffee }) => {
    const { _id, coffeeName, quantity, supplier, photoURL } = coffee;
    return (
        <div className='text-[#1B1A1A] font-primary flex flex-col lg:flex-row items-center gap-8 bg-[#F5F4F1] rounded-lg p-8'>
            {/* image */}
            <div className='w-[185px] h-[240px] flex justify-center items-center'>
                <img src={photoURL} alt={`image of ${coffeeName}`} />
            </div>
            {/* details */}
            <div className='flex flex-col gap-2 text-xl xl:mr-5'>
                <p><span className='font-semibold'>Name: </span> {coffeeName}</p>
                <p><span className='font-semibold'>Supplier: </span> {supplier}</p>
                <p><span className='font-semibold'>Quantity: </span> {quantity}</p>
            </div>
            {/* view, update delete */}
            <div className='flex flex-row lg:flex-col gap-3'>
                <Link to={`/coffee/${_id}`}>
                    <button className="bg-[#D2B48C] w-[40px] h-[40px] flex items-center justify-center text-xl text-[#331A15]">
                        <FaEye />
                    </button>
                </Link>
                <Link>
                    <button className="bg-[#D2B48C] w-[40px] h-[40px] flex items-center justify-center text-xl text-[#331A15]">
                        <RiEdit2Fill />
                    </button>
                </Link>
                <Link>
                    <button className="bg-[#D2B48C] w-[40px] h-[40px] flex items-center justify-center text-xl text-[#331A15]">
                        <RiDeleteBin6Fill />
                    </button>
                </Link>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object
};

export default CoffeeCard;