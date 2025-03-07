import styled from "styled-components";
import colors from "../../../../styles/colors";

const ItemButton = styled.div`
    width: fit-content;
    padding: 0.8rem 2rem;
    border: ${({ selected }) => selected ? "none" : `0.1rem solid ${colors.bannerBackground4}`};
    border-radius: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ selected }) => selected ? colors.bannerBackground4 : "none"};
    font-size: 2.8rem;
    font-weight: ${({ selected }) => selected ? 600 : 500}; 
    line-height: 3.341rem;
    color: ${({ selected }) => selected ? colors.footerColor : colors.bannerBackground4};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 430px) {
        border: ${({ selected }) => selected ? "none" : `0.05rem solid ${colors.bannerBackground4}`};
        padding: 0.4rem 1rem;
        border-radius: 25rem;
        font-size: 1.4rem;
        line-height: 1.671rem;
    }
`


const ItemFilter = ({ id, name, isSelected, onClick }) => {
    return (
        <ItemButton selected={isSelected} onClick={() => onClick(id)}>
            {name}
        </ItemButton>
    );
};

export default ItemFilter;