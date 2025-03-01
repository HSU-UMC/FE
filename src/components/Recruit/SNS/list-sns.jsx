import styled from "styled-components";
import ItemSNS from "./item-sns";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.2rem;

    @media screen and (max-width: 430px) {
        gap: 1.3rem;
    }
`

const ListSNS = ({ data }) => {
    return (
        <ListContainer>
            {data.map((item, index) => (
                <ItemSNS
                    key={index}
                    name={item.name}
                    link={item.link}
                    linkName={item.linkName}
                />
            ))}
        </ListContainer>
    )
}

export default ListSNS;