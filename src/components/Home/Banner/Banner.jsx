import styled, { keyframes } from "styled-components";
import colors from "../../../styles/colors";
import BannerLogo1 from "../../../assets/images/Home/Banner/bannerLogo1.png";
import BannerLogo2 from "../../../assets/images/Home/Banner/bannerLogo2.png";
import Light from "../../../assets/images/Home/Banner/light.png";
import { sparkle, sparkleText, twinkling } from "../../../styles/animations";

const floatAnimation1 = keyframes`
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(100px, -100px); }
`;

const floatAnimation2 = keyframes`
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-100px, 100px); }
`;

const floatAnimation3 = keyframes`
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-50px, -50px); }
`;

const BanenrContainer = styled.div`
    width: 100%;
    height: 76.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.black};
    aspect-ratio: 32 / 17;
    overflow: hidden;

    @media screen and (max-width: 430px) {
        height: 50rem;
    }
`

const FloatingShapes = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 1;
`;

const Shape = styled.div`
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.3;
`;

const Shape1 = styled(Shape)`
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, #6366f1, #a855f7);
    top: 10%;
    left: 10%;
    animation: ${floatAnimation1} 20s infinite ease-in-out;

    @media screen and (max-width: 430px) {
        width: 120px;
        height: 120px;
        filter: blur(20px);
    }
`;

const Shape2 = styled(Shape)`
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #ec4899, #f97316);
    bottom: 20%;
    right: 15%;
    animation: ${floatAnimation2} 25s infinite ease-in-out;

    @media screen and (max-width: 430px) {
        width: 80px;
        height: 80px;
        filter: blur(20px);
    }
`;

const Shape3 = styled(Shape)`
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    top: 50%;
    left: 70%;
    animation: ${floatAnimation3} 15s infinite ease-in-out;

    @media screen and (max-width: 430px) {
        width: 60px;
        height: 60px;
        filter: blur(20px);
    }
`;

const BannerInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 71.2rem;
    z-index: 2;

    @media screen and (max-width: 430px) {
        width: 22.923rem;
    }
`

const BannerP = styled.p`
    font-size: 4.4rem;
    font-weight: 400;
    line-height: 6.371rem;
    text-align: center;
    font-family: Shippori Antique B1;
    color: ${colors.white};
    animation: ${sparkleText} 2s infinite ease-in-out;

    @media screen and (max-width: 430px) {
        font-size: 1.8rem;
        line-height: 2.606rem;
    }
`

const BannerImg = styled.img`
    width: 100%;
    margin-top: 0.793rem;
    animation: ${sparkle} 2.5s infinite ease-in-out;

    @media screen and (max-width: 430px) {
        content: url(${BannerLogo2});
        margin-top: 0rem;
    }
`

const BannerP2 = styled.p`
    font-size: 3.6rem;
    font-weight: 600;
    line-height: 4.296rem;
    color: ${colors.white};
    opacity: 0.95;
    margin-top: 0.799rem;
    animation: ${sparkleText} 2s infinite ease-in-out;

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
        margin-top: 0.849rem;
    }
`

const LightImg = styled.img`
    position: absolute;
    bottom: 30%;
    right: 27%;
    width: 15%;
    animation: ${twinkling} 2.5s infinite ease-in-out;
    z-index: 3;

    @media screen and (max-width: 1024px) {
         bottom: 30%;
         right: 21%;
      }
    @media screen and (max-width: 430px) {
        width: 10%;
          bottom: 33%;
         right: 26%;
      }
    @media screen and (max-width: 400px) {
        right: 22%;
      }
    @media screen and (max-width: 375px) {
        right: 24%;
      }
`

const LightImg2 = styled.img`
    position: absolute;
    bottom: 44%;
    left: 26%;
    width: 15%;
    animation: ${twinkling} 2.5s infinite ease-in-out;
    z-index: 3; /* 가장 앞에 위치 */

    @media screen and (max-width: 1024px) {
         bottom: 46%;
         left: 21%;
      }
    @media screen and (max-width: 430px) {
        width: 10%;
          bottom: 51%;
         left: 25%;
      }
    @media screen and (max-width: 400px) {
        left: 22%;
      }
    @media screen and (max-width: 375px) {
        left: 23%;
      }
`

const Banner = () => {
    return (
        <BanenrContainer>
            <FloatingShapes>
                <Shape1 />
                <Shape2 />
                <Shape3 />
            </FloatingShapes>
            
            <BannerInnerContainer>
                <BannerP>BREAK THE RULES</BannerP>
                <BannerImg src={BannerLogo1} alt="banner" />
                <BannerP2>HSU_MAKE US CHALLENGE</BannerP2>
            </BannerInnerContainer>
            
            <LightImg src={Light} alt="light effect" />
            <LightImg2 src={Light} alt="light effect" />
        </BanenrContainer>
    )
}

export default Banner;