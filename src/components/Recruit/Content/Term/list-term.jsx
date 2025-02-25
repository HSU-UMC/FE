import styled from "styled-components";
import colors from "../../../../styles/colors";
import ItemTerm from "./item-term";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
`

const ListP = styled.p`
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.387rem;
    color: ${colors.bannerBackground4};

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.909rem;
    }
`

const ItemContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 2.6rem;
    gap: 1rem;

    @media screen and (max-width: 430px) {
        gap: 0.6rem;
        padding: 0 1.5rem;
    }
`

const ContentP = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.909rem;
    color: ${colors.recruitColor};

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.6rem;
    }
`

const ListTerm = ({ data }) => {
    //console.log(data);
    return (
        <ListContainer>
            <ListP>학기 중</ListP>
            {data.map((item, index) => (
                <ItemTerm
                    key={index}
                    title={item.title}
                    explain={item.explain}
                />
            ))}
            <ItemContainer>
                <ContentP>*스스로 작업해서 체득하는 시간이 꼭 필요합니다!</ContentP>
                <ContentP>*스스로의 학습이 필요하기 때문에, 파트 별 기초 지식이 필요합니다!</ContentP>
            </ItemContainer>
        </ListContainer>
    )
}

export default ListTerm;