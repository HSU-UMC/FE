import styled from "styled-components";
import colors from "../../styles/colors";
import FooterLogo1 from "../../assets/images/Footer/footerLogo1.png";
import FooterLogo2 from "../../assets/images/Footer/footerLogo2.png";

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterInnerContainer = styled.div`
  width: 60%;
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 430px) {
    width: 92%;
    height: 10rem;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const FooterLogoImg = styled.img`
  width: 2.4rem;

  @media screen and (max-width: 430px) {
    width: 1.2rem;
    content: url(${FooterLogo2});
  }
`;

const FooterP = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.432rem;
  color: ${colors.white};

  @media screen and (max-width: 430px) {
    font-size: 1rem;
    line-height: 1.193rem;
  }
`;

const FooterContainer2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  @media screen and (max-width: 430px) {
    margin-top: 0.927rem;
  }
`;

const FooterLeftP = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: ${colors.gray_600};
  text-align: left;

  @media screen and (max-width: 430px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;

const FooterRightP = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: right;
  line-height: 2.4rem;
  color: ${colors.gray_800};

  @media screen and (max-width: 430px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <TopContainer>
          <FooterLogoImg src={FooterLogo1} alt="logo" />
          <FooterP>HSU_MAKEUS CHALLENGE</FooterP>
        </TopContainer>

        <FooterContainer2>
          <FooterLeftP>
            copyright ⓒhsu_makeus_challenge.
            <br />
            All rights reserved.
          </FooterLeftP>
          <FooterRightP>
            PM·DE : 임채현, 양유진
            <br />
            FE : 윤혜성, 양인서
            <br />
            BE : 김준용, 유진
          </FooterRightP>
        </FooterContainer2>
      </FooterInnerContainer>
    </FooterContainer>
  );
};

export default Footer;
