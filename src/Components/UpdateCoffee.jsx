import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const updateCoffee = useLoaderData()
    const { _id, name, chef, supplier, taste, category, details, photo } = updateCoffee
    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form= e.target;
        const coffee = {
            name: form.name.value,
            chef: form.chef.value,
            supplier: form.supplier.value,
            taste: form.taste.value,
            category: form.category.value,
            details: form.details.value,
            photo: form.photo.value,
        }
        console.log(coffee);
        fetch(`https://practice-coffee-server-beta.vercel.app/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(coffee)
        })
       .then(res => res.json())
       .then(data => { 
        console.log(data)
        if(data.modifiedCount>0){
            Swal.fire({
                title: "Updated!",
                text: "Coffee Updated Successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });
        }
 
       });
    }
    return (
        <div>
            <h1 className="font-bold text-3xl mb-5">Update Coffee: {updateCoffee.name}</h1>
            <div>
            <div>
      <div className="flex justify-center items-center mx-auto">
      <form onSubmit={handleUpdateCoffee} className="w-full bg-[#F4F3F0] p-10  rounded-2xl max-w-lg">
        <div className="flex  flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Enter Coffee name"
              name="name"
              defaultValue={name}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-chef"
            >
              Chef
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Enter Coffee Chef"
              name="chef"
              defaultValue={chef}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-Supplier"
            >
              Supplier
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Enter Coffee Supplier"
              name="supplier"
              defaultValue={supplier}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-Taste"
            >
              Taste
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Enter Coffee Taste"
              name="taste"
              defaultValue={taste}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-Category"
            >
              Category
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Enter Coffee Category"
              name="category"
              defaultValue={category}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-Details"
            >
              Details
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Enter Coffee Details"
              name="details"
              defaultValue={details}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-photo"
            >
              Photo
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Enter photo url" 
              name="photo"
              defaultValue={photo}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:full px-3 mb-6 md:mb-0">
            <button className="btn w-full bg-primary text-neutral-content">Update Coffee</button>
            </div>
         
        </div>
      </form>
      </div>
    </div>
        </div>
        </div>
    );
};

export default UpdateCoffee;