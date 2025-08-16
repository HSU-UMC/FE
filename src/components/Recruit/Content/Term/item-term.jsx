import styled from "styled-components";
import colors from "../../../../styles/colors";

const ItemContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    min-height: 21rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 2.3rem 2.6rem 2.3rem;
    border-radius: 0.68rem;
    border: 0.17rem solid ${colors.primary_700};
    position: relative;

    @media screen and (max-width: 430px) {
        margin: 1rem 0;
        min-height: 12rem;
        padding: 0 1.4rem 1.4rem 1.4rem;
        border-radius: 0.4rem;
        border: 0.1rem solid ${colors.primary_700};
    }
`

const TitleContainer = styled.div`
    width: 10.54rem;
    height: 3.74rem;
    border-radius: 0.68rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.primary_700};
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.387rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        width: 6.2rem;
        height: 2.2rem;
        border-radius: 0.4rem;
        font-size: 1.2rem;
        line-height: 1.432rem;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    @media screen and (max-width: 430px) {
        gap: 0.7rem;
    }
`;

const ContentP = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.148rem;
    color: ${colors.gray_400};
    white-space: pre-line;

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
    }
`

const ItemTerm = ({ title, explain }) => {
    return (
        <ItemContainer>
            <TitleContainer>{title}</TitleContainer>
            <ContentWrapper>
                {explain.split("\n").map((line, index) => (
                    <ContentP key={index}>{line}</ContentP>
                ))}
            </ContentWrapper>
        </ItemContainer>
    )
}

export default ItemTerm;