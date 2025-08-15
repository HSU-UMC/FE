import styled from "styled-components";
import colors from "../../../styles/colors";

const ItemContainer = styled.div`
    padding: 0.8rem 2rem;
    border-radius: 0.8rem;
    border: 0.1rem solid ${colors.primary_800};
    font-size: 2rem;
    font-weight: 600;
    color: ${colors.primary_800};
    line-height: 2.387rem;
    white-space: nowrap;

    @media screen and (max-width: 430px) {
        padding: 0.382rem 1.336rem;
        border-radius: 0.382rem;
        border: 0.048rem solid ${colors.primary_800};
        font-size: 1rem;
        line-height: 1.193rem;
    }
`

const ItemProjectExplain = ({ name }) => {
    return (
        <ItemContainer>
            {name}
        </ItemContainer>
    )
}

export default ItemProjectExplain;