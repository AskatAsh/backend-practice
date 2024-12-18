import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { RiEdit2Fill, RiDeleteBin6Fill } from "react-icons/ri";
import Swal from 'sweetalert2'


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, coffeeName, quantity, supplier, photoURL } = coffee;

    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-shop-backend-taupe.vercel.app/coffee/${id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            const remainingCoffees = coffees.filter(coffee => coffee._id !== id);
                            setCoffees(remainingCoffees);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

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
                <Link to={`/coffee/${_id}`} className="tooltip tooltip-top lg:tooltip-right" data-tip="View Details">
                    <button className="bg-[#D2B48C] text-[#331A15] w-[40px] h-[40px] flex items-center justify-center text-xl">
                        <FaEye />
                    </button>
                </Link>
                <Link to={`/update_coffee/${_id}`} className="tooltip tooltip-top lg:tooltip-right" data-tip="Update">
                    <button className="w-[40px] h-[40px] flex items-center justify-center text-xl bg-[#331A15] text-white">
                        <RiEdit2Fill />
                    </button>
                </Link>
                <Link className="tooltip tooltip-top lg:tooltip-right" data-tip="Delete">
                    <button onClick={() => handleDelete(_id)}
                        className="w-[40px] h-[40px] flex items-center justify-center text-xl bg-red-600 text-white">
                        <RiDeleteBin6Fill />
                    </button>
                </Link>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
};

export default CoffeeCard;