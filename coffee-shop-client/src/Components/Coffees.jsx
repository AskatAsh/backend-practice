import { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import CoffeeCard from '../Components/CoffeeCard';
import axios from 'axios';


const Coffees = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        axios.get('https://coffee-shop-backend-taupe.vercel.app/coffee')
        .then(data => {
            // console.log(data.data)
            setCoffees(data.data);
        }).catch(error => alert(error.code + " : "+ error.message))
    })

    // useEffect(() => {
    //     fetch('https://coffee-shop-backend-taupe.vercel.app/coffee')
    //         .then(res => res.json())
    //         .then(data => setCoffees(data))
    // }, [])

    return (
        <>
            <h2 className='text-5xl font-bold text-[#331A15] font-secondary text-center'>Our Popular Products</h2>
            <p className='py-5 text-center'>Total Coffee Data Added: {coffees.length}</p>
            <div className='flex justify-center'>
                <Link to='/add_coffee'>
                    <button className="btn bg-[#D2B48C] border-2 border-[#331A15] font-secondary text-2xl">
                        Add Coffee
                    </button>
                </Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-center m-10'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                }
            </div>
        </>
    );
};

export default Coffees;