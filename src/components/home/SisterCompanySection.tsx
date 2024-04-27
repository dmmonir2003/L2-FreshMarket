import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const SisterCompanySection = () => {

    const imageUrls = [
        "https://i.ibb.co/6R59GhF/Company-Logo.png",
        "https://i.ibb.co/QJL9fv5/Company-Logo.png",
        "https://i.ibb.co/tMFKCcQ/Company-Logo.png",
        "https://i.ibb.co/6nMvKZj/Company-Logo.jpg",
        "https://i.ibb.co/VCyf81k/Company-Logo.png",
        "https://i.ibb.co/nsGdNVP/Company-Logo.png"
    ];


    return (
        <div>
            <Stack my={15} direction='row' height={60} alignItems='center' justifyContent='space-around'>
                {imageUrls.map((imageUrl, index) => (
                    <Image
                        key={index}
                        src={imageUrl}
                        height={40}
                        width={100}
                        alt={`Company Logo ${index + 1}`} // Add descriptive alt text
                    />
                ))}
            </Stack>
        </div>
    );
};

export default SisterCompanySection;