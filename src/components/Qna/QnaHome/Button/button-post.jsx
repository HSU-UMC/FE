import styled from "styled-components";
import colors from "../../../../styles/colors";
import { useNavigate } from "react-router-dom";
import EditIcon from "../../../../assets/icons/EditIcon";

const ButtonContainer = styled.div`
    width: 20.4rem;
    height: 5.2rem;
    border: 0.2rem solid ${colors.primary_900};
    border-radius: 0.4rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 5rem;

    @media screen and (max-width: 430px) {
        width: 12rem;
        height: 2.8rem;
        border: 0.1rem solid ${colors.primary_900};
        gap: 0.6rem;
        margin-top: 3.1rem;
    }
`

const ButtonP = styled.p`
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 2.625rem;
    color: ${colors.primary_800};

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 1.671rem;
    }
`

const ButtonPost = () => {
    const navigate = useNavigate();

    const handlePost = () => {
        navigate("/post");
    }

    return (
        <ButtonContainer onClick={handlePost}>
            <EditIcon />
            <ButtonP>질문 작성하기</ButtonP>
        </ButtonContainer>
    )
}

export default ButtonPost;