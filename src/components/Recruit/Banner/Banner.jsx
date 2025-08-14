import styled from "styled-components";
import colors from "../../../styles/colors";
import BannerLogo1 from "../../../assets/images/Recruit/Banner/bannerLogo1.png";
import BannerLogo2 from "../../../assets/images/Recruit/Banner/bannerLogo2.png";

const BannerContainer = styled.div`
    width: 100%;
    height: 12rem;
    margin-top: 2rem;
    background: linear-gradient(90deg, ${colors.primary_500} 0%, ${colors.tertiary} 100%);

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 430px) {
        height: 7.127rem;
    }
`

const BannerInnerContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3.2rem;
    
    @media screen and (max-width: 430px) {
        width: 92%;
        gap: 1.2rem;
    }
`

const BannerImg = styled.img`
    width: 5.79rem;

    @media screen and (max-width: 430px) {
        width: 3rem;
        content: url(${BannerLogo2});
    }
`

const BannerP = styled.p`
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 3.341rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.671rem;
    }
`

const Banner = () => {
    return (
        <BannerContainer>
            <BannerInnerContainer>
                <BannerImg src={BannerLogo1} alt="banner" />
                <BannerP>IT 연합 사이드 프로젝트 동아리 한성대 UMC 8기 모집!</BannerP>
            </BannerInnerContainer>
        </BannerContainer>
    )
}

export default Banner;