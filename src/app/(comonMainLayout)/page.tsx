import Banner from "@/components/home/Banner";
import CategorySection from "@/components/home/CategorySection";
import FlashCardSection from "@/components/home/FlashCardSection";
import { Box, Container } from "@mui/material";



const HomePage = () => {


    return (
        <Container>
            <Banner></Banner>
            <FlashCardSection></FlashCardSection>
            <CategorySection></CategorySection>
        </Container>
    );
};

export default HomePage;