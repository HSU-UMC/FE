import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../../styles/colors";
import StageDot from "../../../assets/svgs/Home/stageDot.svg";
import PeopleIcon from "../../../assets/icons/PeopleIcon";
import useScrollAnimation from "../../../hooks/Home/useScrollAnimation";
import { revealFromLeft, fadeInUp } from "../../../styles/animations";

const DOTS_COUNT = 5;
const RECRUITING_TEXT = "모집예정";

const STAGE_DATA = [
  { date: "2023.09", title: "5TH UMC", count: 43, type: "people" },
  { date: "2024.03", title: "6TH UMC", count: 34, type: "people" },
  { date: "2024.09", title: "7TH UMC", count: 33, type: "people" },
  { date: "2025.02", title: "8TH UMC", count: 30, type: "people" },
  { date: "2025.09", title: "9TH UMC", count: null, type: "recruiting" }
];

const StageBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5.1rem;
  position: relative;
  width: 112rem;
  opacity: 0;
  clip-path: inset(0 100% 0 0);
  transition: opacity 0.6s ease-out, clip-path 2s ease-out;

  @media screen and (max-width: 430px) {
    width: 40rem;
    margin-top: 3.457rem;
  }
`;

const ConnectingLine = styled.div`
  position: absolute;
  top: 50%;
  left: 7.2rem; 
  right: 7.2rem;
  height: 0.2rem;
  background-color: #E1E1E1;
  transform: translateY(-50%);
  z-index: 1;

  @media screen and (max-width: 430px) {
    left: 3.5rem;
    right: 3.5rem;
    height: 0.1rem;
  }
`;

const DotContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 3.6rem;
  height: 3.9rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 430px) {
    width: 1.8rem;
    height: 1.95rem;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 10.8rem);
  margin: 0 5.4rem;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 430px) {
    width: calc(100% - 5.2rem);
    margin: 0 2.6rem;
  }
`;

const StageBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.visible ${StageBarWrapper} {
    animation: ${revealFromLeft} 2s ease-out forwards;
  }

  &.hidden ${StageBarWrapper} {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
  }
`;

const StageDetailContainer = styled.div`
  width: 112rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2.1rem;

  @media screen and (max-width: 430px) {
    width: 40rem;
    margin-top: 1.642rem;
    gap: 0.3rem;
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

  &.visible > div:nth-child(5) {
    opacity: 0;
    animation: ${fadeInUp} 1.2s 2s ease-out forwards;
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
    width: 7rem;
  }
`;

const RecruitingContainer = styled(DetailContainer)`
  position: relative;
  transform: translateY(0);
  transition: transform 0.3s ease;

  @media screen and (max-width: 430px) {
    width: 7rem;
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
  white-space: nowrap;

  @media screen and (max-width: 430px) {
    font-size: 1.6rem;
    line-height: 1.909rem;
    margin-top: 0.588rem;
  }
`;

const BaseBox = styled.div`
  width: 13rem;
  height: 5.4rem;
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.8rem;
  transition: all 0.3s ease;

  @media screen and (max-width: 430px) {
    width: 6rem;
    height: 2.8rem;
    border-radius: 0.25rem;
    margin-top: 1.4rem;
  }
`;

const PeopleBox = styled(BaseBox)`
  border: 0.1rem solid ${colors.primary_900};
`;

const RecruitingBox = styled(BaseBox)`
  border: 0.1rem solid ${colors.primary_800};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.3), 
      transparent
    );
    animation: boxShining 3s infinite;
    z-index: 1;
    pointer-events: none;
  }

  @keyframes boxShining {
    0% { 
      left: -100%; 
      opacity: 0;
    }
    50% { 
      opacity: 1;
    }
    100% { 
      left: 100%; 
      opacity: 0;
    }
  }
`;

const RecruitingText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${colors.primary_500}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  letter-spacing: 0.5px;
  margin: 0;
  z-index: 2;

  @media screen and (max-width: 430px) {
    font-size: 1rem;
    letter-spacing: 0.2px;
  }
`;

const PeopleInner = styled.div`
  display: flex;
  align-items: center;
  width: 7.526rem;
  justify-content: space-between;

  @media screen and (max-width: 430px) {
    width: 3.8rem;
  }
`;

const PeopleP = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.864rem;
  color: ${colors.white};

  @media screen and (max-width: 430px) {
    font-size: 1.2rem;
    line-height: 1.432rem;
  }
`;

const StageItem = ({ stage, isRecruiting = false }) => {
  const Container = isRecruiting ? RecruitingContainer : DetailContainer;
  
  return (
    <Container>
      <StageBarP1>{stage.date}</StageBarP1>
      <StageBarP2>{stage.title}</StageBarP2>
      {stage.type === 'recruiting' ? (
        <RecruitingBox>
          <RecruitingText>{RECRUITING_TEXT}</RecruitingText>
        </RecruitingBox>
      ) : (
        <PeopleBox>
          <PeopleInner>
            <PeopleIcon />
            <PeopleP>{stage.count}</PeopleP>
          </PeopleInner>
        </PeopleBox>
      )}
    </Container>
  );
};

StageItem.propTypes = {
  stage: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number,
    type: PropTypes.oneOf(['people', 'recruiting']).isRequired,
  }).isRequired,
  isRecruiting: PropTypes.bool,
};

const StageBar = () => {
  const { elementRef } = useScrollAnimation();

  return (
    <StageBarContainer ref={elementRef}>
      <StageBarWrapper>
        <ConnectingLine />
        <DotsContainer>
          {Array.from({ length: DOTS_COUNT }, (_, index) => (
            <DotContainer key={index}>
              <img src={StageDot} alt="stage dot" />
            </DotContainer>
          ))}
        </DotsContainer>
      </StageBarWrapper>

      <StageDetailContainer
        className={
          elementRef.current?.classList.contains("visible")
            ? "visible"
            : "hidden"
        }
      >
        {STAGE_DATA.map((stage) => (
          <StageItem 
            key={`${stage.date}-${stage.title}`}
            stage={stage}
            isRecruiting={stage.type === 'recruiting'}
          />
        ))}
      </StageDetailContainer>
    </StageBarContainer>
  );
};

export default StageBar;