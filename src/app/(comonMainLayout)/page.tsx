import Banner from "@/components/home/Banner";
import FlashCardSection from "@/components/home/FlashCardSection";
import { Box, Container } from "@mui/material";



const HomePage = () => {


    return (
        <Container>
            <Banner></Banner>
            <FlashCardSection></FlashCardSection>
        </Container>
    );
};

export default HomePage;