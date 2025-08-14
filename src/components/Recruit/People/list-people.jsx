import styled from "styled-components";
import colors from "../../../styles/colors";
import ItemPeople from "./item-people";

const ListContainer = styled.div`
    width: 100%;
    height: 17.7rem;
    border: 0.17rem solid ${colors.primary_700};
    margin-top: 3.1rem;
    border-radius: 0.68rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    padding: 0 2.9rem;

    @media screen and (max-width: 430px) {
        height: 10.4rem;
        border: 0.1rem solid ${colors.primary_700};
        border-radius: 0.4rem;
        margin-top: 2.9rem;
        gap: 1.2rem;
        padding: 0 1.4rem;
    }
`

const ListPeople = ({ data }) => {
    return (
        <ListContainer>
            {data.map((item, index) => (
                <ItemPeople
                    key={index}
                    explain={item.explain}
                />
            ))}
        </ListContainer>
    )
}

export default ListPeople;