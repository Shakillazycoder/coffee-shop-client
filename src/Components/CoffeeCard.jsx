import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, setCoffees, coffees}) => {
  const {_id, name, chef, supplier, taste, photo} = coffee
   const handleDelete = _id => {
    console.log('delete', _id);
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
     .then(res => res.json())
     .then(data => {
      console.log(data)
      if(data.deletedCount>0){
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
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });

            const remaining = coffees.filter(c => c._id !== _id)
            setCoffees(remaining)
          }
        });
      }
     })
   }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-72 h-72" src={photo} alt="Movie" />
      </figure>
      <div className="text-start flex justify-around w-full mt-5">
        <div className="space-y-5">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Chef: {chef}</h2>
          <h2 className="card-title">Supplier: {supplier}</h2>
          <h2 className="card-title">Taste: {taste}</h2>
        </div>
        <div className="card-actions justify-end">
          <div className="flex flex-col space-y-5">
            <button className="btn btn-neutral">view</button>
             <Link to={`/updateCoffee/${_id}`}>
            <button className="btn btn-primary">Edit</button>
             </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default CoffeeCard;