import Banner from "@/components/home/Banner";
import CategorySection from "@/components/home/CategorySection";
import FlashCardSection from "@/components/home/FlashCardSection";
import MostPopularSection from "@/components/home/MostPopularSection";
import SisterCompanySection from "@/components/home/SisterCompanySection";
import { Box, Container } from "@mui/material";



const HomePage = () => {


    return (
        <Container>
            <Banner></Banner>
            <FlashCardSection></FlashCardSection>
            <CategorySection></CategorySection>
            <MostPopularSection></MostPopularSection>
            <SisterCompanySection></SisterCompanySection>
        </Container>
    );
};

export default HomePage;