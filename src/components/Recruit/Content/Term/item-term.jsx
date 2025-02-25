import styled from "styled-components";
import colors from "../../../../styles/colors";

const ItemContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    height: 10.4rem;
    display: flex;
    padding: 0 2.3rem 2.6rem 2.3rem;
    border-radius: 0.68rem;
    border: 0.17rem solid ${colors.bannerBackground4};
    align-items: flex-end;
    position: relative;

    @media screen and (max-width: 430px) {
        margin: 1rem 0;
        height: 6.1rem;
        padding: 0 1.4rem 1.4rem 1.4rem;
        border-radius: 0.4rem;
        border: 0.1rem solid ${colors.bannerBackground4};
    }
`

const TitleContainer = styled.div`
    width: 10.54rem;
    height: 3.74rem;
    border-radius: 0.68rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.recruitColor7};
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

const ContentP = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.148rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
    }
`

const ItemTerm = ({ title, explain }) => {
    return (
        <ItemContainer>
            <TitleContainer>{title}</TitleContainer>
            <ContentP>{explain}</ContentP>
        </ItemContainer>
    )
}

export default ItemTerm;