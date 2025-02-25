import styled from "styled-components";
import colors from "../../../styles/colors";

const ItemContainer = styled.div`
    width: 100%;
    height: 10.37rem;
    display: flex;
    align-items: flex-end;
    border-radius: 0.68rem;
    border: 0.17rem solid ${colors.bannerBackground4};
    position: relative;
    padding: 0 2.3rem 2.1rem 2.3rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 430px) {
        height: 6.1rem;
        border-radius: 0.4rem;
        border: 0.1rem solid ${colors.bannerBackground4};
        padding: 1.4rem;
    }
`

const ItemP = styled.div`
    padding: 0.7rem 2.3rem;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.68rem;
    background: ${colors.recruitColor7};
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.387rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        padding: 0.4rem 1.4rem;
        border-radius: 0.4rem;
        font-size: 1.2rem;
        line-height: 1.432rem;
    }
`

const ItemLink = styled.a`
    text-decoration: underline;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.387rem;
    color: ${colors.white};

    &:hover {
        color: ${colors.bannerBackground4};
    }

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
    }
`

const ItemSNS = ({ name, link }) => {
    return (
        <ItemContainer>
            <ItemP>{name}</ItemP>
            <ItemLink href={link} target="_blank" rel="noopener noreferrer">{link}</ItemLink>
        </ItemContainer>
    )
}

export default ItemSNS;
