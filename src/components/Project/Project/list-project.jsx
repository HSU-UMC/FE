import styled from "styled-components";
import ItemProject from './item-project';

const ListContainer = styled.div`
    width: 100%;
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.588rem;

    @media screen and (max-width: 430px) {
        margin-top: 2.6rem;
        gap: 1.2rem;
    }
`;

const ListProject = ({ data }) => {
    return (
        <ListContainer>
            {data.map((item, index) => (
                <ItemProject 
                    key={index}
                    id={item.id}
                    projectWeb={item.projectWeb}
                    projectMobile={item.projectMobile}
                    title={item.title}
                    explain={item.explain}
                    subTitle={item.subTitle}
                />
            ))}
        </ListContainer>
    );
};

export default ListProject;