import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import Header from "./Header";

const Home = () => {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)
    return (
        <div>
            <Header></Header>
            <h1>Coffee: {coffees.length}</h1>
            <div className="space-y-5">
            {
             coffees.map((coffee, index) => <CoffeeCard key={index} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
            }
            </div>
        </div>
    );
};

export default Home;