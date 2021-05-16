import React from 'react'
import styled from 'styled-components';
import Section from './Section';


function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg= "https://wallpaperaccess.com/full/1921102.jpg"
                leftBtnText="Custom order"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg= "https://techtimes.vn/wp-content/uploads/2018/04/model-3-tesla-techtimes.jpg"
                leftBtnText="Custom order"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section
                title="Model Z"
                description="Order Online for Touchless Delivery"
                backgroundImg= "https://media.caradvice.com.au/image/private/s--M0l-Frtu--/v1544479559/6d801cce932bda1a03035df7e712e4ef.jpg"
                leftBtnText="Custom order"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg= "https://www.tesla.com/sites/default/files/solarpanels/hero/D_solarpanels_hero_2880x1800_20201120.jpg"
                leftBtnText="Custom order"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg= "https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_1.jpg"
                leftBtnText="Shop now"
                rightBtnText=""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`