import { Typography } from "@mui/material";
import AllProducts from "./AllProducts";




const DeshbordMain = async () => {

    const res = await fetch('https://l2-assign-8-backend.vercel.app/api/products', {
        cache: 'no-store'
    })
    const data = await res.json();




    return (
        <div>
            <Typography>All Products</Typography>
            <AllProducts data={data}></AllProducts>
        </div>
    );
};

export default DeshbordMain;