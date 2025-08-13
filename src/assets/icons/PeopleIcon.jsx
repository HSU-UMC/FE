import styled from "styled-components";
import colors from "../../styles/colors";

const StyledSVG = styled.svg`
  width: 2.8rem;
  height: 2.8rem;

  @media screen and (max-width: 430px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const PeopleIcon = () => {
  return (
    <StyledSVG
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.1655 24.2923V21.9787C23.1655 20.7515 22.6773 19.5746 21.8085 18.7068C20.9397 17.8391 19.7613 17.3516 18.5325 17.3516H9.26671C8.03798 17.3516 6.85958 17.8391 5.99074 18.7068C5.1219 19.5746 4.63379 20.7515 4.63379 21.9787V24.2923"
        stroke={colors.primary_700}
        strokeWidth="1.6331"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9005 12.725C16.4592 12.725 18.5334 10.6533 18.5334 8.09783C18.5334 5.54234 16.4592 3.4707 13.9005 3.4707C11.3418 3.4707 9.26758 5.54234 9.26758 8.09783C9.26758 10.6533 11.3418 12.725 13.9005 12.725Z"
        stroke={colors.primary_700}
        strokeWidth="1.6331"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSVG>
  );
};

export default PeopleIcon;
