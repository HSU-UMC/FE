import styled from "styled-components";
import colors from "../../../styles/colors";
import StageBar1 from "../../../assets/images/Home/Stage/stageBar1.png";
import StageBar2 from "../../../assets/images/Home/Stage/stageBar2.png";
import StagePeople1 from "../../../assets/images/Home/Stage/stagePeople1.png";
import StagePeople2 from "../../../assets/images/Home/Stage/stagePeople2.png";
import useScrollAnimation from "../../../hooks/Home/useScrollAnimation";
import { revealFromLeft, fadeInUp } from "../../../styles/animations";

const StageBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.visible > img {
    animation: ${revealFromLeft} 2s ease-out forwards;
  }

  &.hidden > img {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
  }
`;

const StageBarImg = styled.img`
  width: 80.4rem;
  margin-top: 5.1rem;
  opacity: 0;
  clip-path: inset(0 100% 0 0);
  transition: opacity 0.6s ease-out, clip-path 2s ease-out;

  @media screen and (max-width: 430px) {
    width: 33.6rem;
    content: url(${StageBar2});
    margin-top: 3.457rem;
  }
`;

const StageDetailContainer = styled.div`
  width: 90.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.1rem;

  @media screen and (max-width: 430px) {
    width: 37.759rem;
    margin-top: 1.642rem;
  }

  &.visible > div:nth-child(1) {
    opacity: 0;
    animation: ${fadeInUp} 1.2s 0.4s ease-out forwards;
  }

  &.visible > div:nth-child(2) {
    opacity: 0;
    animation: ${fadeInUp} 1.2s 0.8s ease-out forwards;
  }

  &.visible > div:nth-child(3) {
    opacity: 0;
    animation: ${fadeInUp} 1.2s 1.2s ease-out forwards;
  }

  &.visible > div:nth-child(4) {
    opacity: 0;
    animation: ${fadeInUp} 1.2s 1.6s ease-out forwards;
  }

  &.hidden > div {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 14.4rem;

  @media screen and (max-width: 430px) {
    width: 7.659rem;
  }
`;

const StageBarP1 = styled.p`
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 3.341rem;
  color: ${colors.white};

  @media screen and (max-width: 430px) {
    font-size: 1.2rem;
    line-height: 1.432rem;
  }
`;

const StageBarP2 = styled.p`
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 3.2rem;
  color: ${colors.white};
  margin-top: 0.6rem;

  @media screen and (max-width: 430px) {
    font-size: 1.6rem;
    line-height: 1.909rem;
    margin-top: 0.588rem;
  }
`;

const PeopleBox = styled.div`
  width: 13rem;
  height: 5.4rem;
  border: 0.1rem solid ${colors.bannerBackground4};
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.8rem;

  @media screen and (max-width: 430px) {
    width: 7.659rem;
    height: 3.501rem;
    border-radius: 0.2rem;
    margin-top: 1.8rem;
  }
`;

const PeopleBox2 = styled(PeopleBox)`
  border: 0.1rem solid ${colors.white};
`;

const PeopleInner = styled.div`
  display: flex;
  align-items: center;
  width: 7.526rem;
  justify-content: space-between;

  @media screen and (max-width: 430px) {
    width: 4.7rem;
  }
`;

const PeopleImg = styled.img`
  width: 3.404rem;

  @media screen and (max-width: 430px) {
    width: 2rem;
    content: url(${StagePeople2});
  }
`;

const PeopleP = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.864rem;
  color: ${colors.bannerBackground4};

  @media screen and (max-width: 430px) {
    font-size: 1.6rem;
    line-height: 1.909rem;
  }
`;

const PeopleP2 = styled(PeopleP)`
  color: ${colors.white};

  @media screen and (max-width: 430px) {
    font-size: 1.2rem;
    line-height: 1.432rem;
  }
`;

const StageBar = () => {
  const { elementRef } = useScrollAnimation();

  return (
    <StageBarContainer ref={elementRef}>
      <StageBarImg src={StageBar1} alt="stageBar" />

      <StageDetailContainer
        className={
          elementRef.current?.classList.contains("visible")
            ? "visible"
            : "hidden"
        }
      >
        <DetailContainer>
          <StageBarP1>2023.09</StageBarP1>
          <StageBarP2>5TH UMC</StageBarP2>
          <PeopleBox>
            <PeopleInner>
              <PeopleImg src={StagePeople1} alt="people" />
              <PeopleP>43</PeopleP>
            </PeopleInner>
          </PeopleBox>
        </DetailContainer>

        <DetailContainer>
          <StageBarP1>2024.03</StageBarP1>
          <StageBarP2>6TH UMC</StageBarP2>
          <PeopleBox>
            <PeopleInner>
              <PeopleImg src={StagePeople1} alt="people" />
              <PeopleP>34</PeopleP>
            </PeopleInner>
          </PeopleBox>
        </DetailContainer>

        <DetailContainer>
          <StageBarP1>2024.09</StageBarP1>
          <StageBarP2>7TH UMC</StageBarP2>
          <PeopleBox>
            <PeopleInner>
              <PeopleImg src={StagePeople1} alt="people" />
              <PeopleP>33</PeopleP>
            </PeopleInner>
          </PeopleBox>
        </DetailContainer>

        <DetailContainer>
          <StageBarP1>2025.02</StageBarP1>
          <StageBarP2>8TH UMC</StageBarP2>
          <PeopleBox>
            <PeopleInner>
              <PeopleImg src={StagePeople1} alt="people" />
              <PeopleP>30</PeopleP>
            </PeopleInner>
          </PeopleBox>
        </DetailContainer>
      </StageDetailContainer>
    </StageBarContainer>
  );
};

export default StageBar;
