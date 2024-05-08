import { Typography } from "@mui/material";
import AllProducts from "./AllProducts";



const DeshbordMain = () => {


    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
        image: string,
    ) {
        return { name, calories, fat, carbs, protein, image };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg'),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg'),
        createData('Eclair', 262, 16.0, 24, 6.0, 'https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg'),
    ];





    return (
        <div>
            <Typography>All Products</Typography>
            <AllProducts rows={rows}></AllProducts>
        </div>
    );
};

export default DeshbordMain;