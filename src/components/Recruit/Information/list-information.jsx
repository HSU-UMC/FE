import styled from "styled-components";
import colors from "../../../styles/colors";
import ItemInformation from "./item-information";

const ListContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 20.23rem;
    border-radius: 0.68rem;
    border: 0.17rem solid ${colors.bannerBackground4};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2.9rem;
    gap: 2.1rem;

    @media screen and (max-width: 430px) {
        height: 11.9rem;
        border-radius: 0.4rem;
        border: 0.1rem solid ${colors.bannerBackground4};
        padding: 0 1.4rem;
        gap: 1.2rem;
    }
`

const InformationP = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.148rem;
    color: ${colors.recruitColor};
    padding-left: 2.9rem;   
    margin-top: 2rem;

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
        padding-left: 1.4rem;
        margin-top: 1.2rem;
    }   
`

const ListInformation = ({ data }) => {
    return (
        <>
            <ListContainer>
                {data.map((item, index) => (
                    <ItemInformation
                        key={index}
                        explain={item.explain}
                    />
                ))}
            </ListContainer>
            <InformationP>*학기 중에 시험 기간을 제외하고 대면으로 매주 진행되며, 모두 참여하셔야 합니다.</InformationP>
        </>
    )
}

export default ListInformation;