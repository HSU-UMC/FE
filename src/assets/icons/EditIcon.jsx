import styled from "styled-components";
import colors from "../../styles/colors";

const StyledSVG = styled.svg`
  width: 3.2rem;
  height: 3.2rem;

  @media screen and (max-width: 430px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const EditIcon = () => {
  return (
    <StyledSVG
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M22.7695 4.43269C23.1197 4.0825 23.5355 3.80472 23.993 3.61519C24.4506 3.42567 24.941 3.32813 25.4362 3.32812C25.9314 3.32812 26.4218 3.42567 26.8794 3.61519C27.3369 3.80472 27.7527 4.0825 28.1029 4.43269C28.4531 4.78289 28.7308 5.19862 28.9204 5.65617C29.1099 6.11372 29.2074 6.60412 29.2074 7.09936C29.2074 7.59461 29.1099 8.085 28.9204 8.54255C28.7308 9.0001 28.4531 9.41584 28.1029 9.76603L10.1029 27.766L2.76953 29.766L4.76953 22.4327L22.7695 4.43269Z"
        fill={colors.primary_700}
      />
    </StyledSVG>
  );
};

export default EditIcon;
