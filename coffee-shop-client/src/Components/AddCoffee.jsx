
const AddCoffee = () => {
    return (
        <div className="bg-[#F4F3F0] text-[#1B1A1ACC] font-primary">
            <form>

                <div className="flex flex-col gap-7 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-7 px-10">
                        <div className="w-full">
                            <label htmlFor="coffeeName" className="font-semibold">Coffee Name</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="coffeeName" id="coffeeName" placeholder="Add Coffee Name" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="coffeeName" className="font-semibold">Chef</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="coffeeName" id="coffeeName" placeholder="Add Coffee Name" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-7 px-10">
                        <div className="w-full">
                            <label htmlFor="coffeeName" className="font-semibold">Supplier</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="coffeeName" id="coffeeName" placeholder="Add Coffee Name" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="coffeeName" className="font-semibold">Taste</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="coffeeName" id="coffeeName" placeholder="Add Coffee Name" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-7 px-10">
                        <div className="w-full">
                            <label htmlFor="coffeeName" className="font-semibold">Category</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="coffeeName" id="coffeeName" placeholder="Add Coffee Name" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="coffeeName" className="font-semibold">Details</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="coffeeName" id="coffeeName" placeholder="Add Coffee Name" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center px-10">
                        <div className="w-full">
                            <label htmlFor="coffeeName" className="font-semibold">Photo</label>
                            <br />
                            <input className="border-2 rounded-md py-2 px-2 w-full"
                                type="text" name="coffeeName" id="coffeeName" placeholder="Add Coffee Name" />
                        </div>
                    </div>
                    
                    <input type="submit" value="Add Coffee" className="btn bg-[#D2B48C] border-2 border-[#331A15] mx-10 font-secondary text-2xl" />
                </div>

            </form>
        </div>
    );
};

export default AddCoffee;