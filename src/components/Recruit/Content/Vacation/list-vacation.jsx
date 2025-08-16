import styled from "styled-components";
import colors from "../../../../styles/colors";
import ItemVacation from "./item-vacation";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 5.5rem;

    @media screen and (max-width: 430px) {
        margin-top: 2.8rem;
    }
`

const ListP = styled.p`
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.387rem;
    color: ${colors.primary_500};

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.909rem;
    }
`

const ListVacation = ({ data }) => {
    return (
        <>
            <ListContainer>
                <ListP>방학 중 (1~2월)</ListP>
                {data.map((item, index) => (
                    <ItemVacation
                        key={index}
                        title={item.title}
                        explain={item.explain}
                    />
                ))}
            </ListContainer>
        </>
    )
}

export default ListVacation;