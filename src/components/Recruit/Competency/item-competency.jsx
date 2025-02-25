import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
`

const ItemP = styled.p`
    width: 15rem;
    font-size: 2rem;
    font-weight: 300;
    line-height: 3.8rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        width: 8.8rem;
        font-size: 1.2rem;
        line-height: 2.6rem;
    }
`

const ExplainContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.8rem;

    @media screen and (max-width: 430px) {
        gap: 1rem;
    }
`

const ExplainBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;

    @media screen and (max-width: 430px) {
        gap: 0.4rem;
    }
`

const ExplainImg = styled.img`
    width: 1.3rem;
    height: auto;

    @media screen and (max-width: 430px) {
        width: 0.8rem;
    }
`

const ExplainP = styled.p`
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.387rem;
    color: ${colors.recruitColor8};

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 1.432rem;
    }
`

const ItemCompetency = ({ name, explain}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 430);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <ItemContainer>
            <ItemP>{name}</ItemP>
            <ExplainContainer>
                {explain.map((item, index) => (
                    <ExplainBox key={index}>
                        <ExplainImg src={isMobile ? item.MobileImage : item.WebImage} alt="icon" />
                        <ExplainP>{item.name}</ExplainP>
                    </ExplainBox>
                ))}
            </ExplainContainer>
        </ItemContainer>
    )
}

export default ItemCompetency;