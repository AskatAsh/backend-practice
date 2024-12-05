import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photo.value;
        // console.log(coffeeName, quantity, supplier, taste, category, details, photoURL);
        const coffee = {coffeeName, quantity, supplier, taste, category, details, photoURL};
        // console.log(coffee);

        fetch('https://coffee-shop-backend-taupe.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Added new coffee successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] text-[#1B1A1ACC] font-primary">
            <form onSubmit={handleAddCoffee}>

                <div className="flex flex-col gap-7 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-7 px-10">
                        <div className="w-full">
                            <label htmlFor="name" className="font-semibold">Coffee Name</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="name" id="coffeeName" placeholder="Add Coffee Name" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="quantity" className="font-semibold">Quantity</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="quantity" id="quantity" placeholder="Add quantity" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-7 px-10">
                        <div className="w-full">
                            <label htmlFor="supplier" className="font-semibold">Supplier</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="supplier" id="supplier" placeholder="Add supplier" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="taste" className="font-semibold">Taste</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="taste" id="taste" placeholder="Add taste" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-7 px-10">
                        <div className="w-full">
                            <label htmlFor="category" className="font-semibold">Category</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="category" id="category" placeholder="Add category" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="details" className="font-semibold">Details</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="details" id="details" placeholder="Add details" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center px-10">
                        <div className="w-full">
                            <label htmlFor="photo" className="font-semibold">Photo</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="photo" id="photo" placeholder="Add Photo URL" />
                        </div>
                    </div>
                    
                    <input type="submit" value="Add Coffee" className="btn bg-[#D2B48C] border-2 border-[#331A15] mx-10 font-secondary text-2xl" />
                </div>

            </form>
        </div>
    );
};

export default AddCoffee;