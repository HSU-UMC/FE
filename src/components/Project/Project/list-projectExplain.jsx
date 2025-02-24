import styled from "styled-components";
import ItemProjectExplain from "./item-projectExplain";

const ListContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-top: 2rem;

    @media screen and (max-width: 430px) {
        gap: 0.7rem;
        margin-top: 1rem;
    }
`

const ListProjectExplain = ({ subTitle }) => {
    // console.log(subTitle);
    return (
        <ListContainer>
            {subTitle.map((item, index) => (
                <ItemProjectExplain 
                    key={index} 
                    id={item.id}
                    name={item.name} 
                />
            ))}
        </ListContainer>
    );
}

export default ListProjectExplain;
