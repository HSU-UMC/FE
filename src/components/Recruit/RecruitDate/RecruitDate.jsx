import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListRecruitDate from "./list-recruitDate";

const RecruitDateContainer = styled.div`
    width: 100%;
    height: 36rem;
    background: linear-gradient(0deg, rgba(0,0,0,0) 15%, rgba(27,28,75,0.3) 50%, rgba(0,0,0,0) 85%
);
    margin-top: 9.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 430px) {
        margin-top: 6rem;
        height: 26.6rem;
    }
`

const InnerContainer = styled.div`
    width: 60%;
    height: 28.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 430px) {
        height: 20.825rem;
        width: 92%;
    }
`

const InnerP = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.864rem;
    color: ${colors.gray_50};

    @media screen and (max-width: 430px) {
        font-size: 2rem;
        line-height: 2.387rem;
    }
`

const RecruitDate = ({ data }) => {
    const [recruit, setRecruit] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setRecruit(data[0].recruitDate);
        }
    }, [data]);

    return (
        <RecruitDateContainer>
            <InnerContainer>
                <InnerP>모집 기간</InnerP>
                <ListRecruitDate data={recruit}/>
            </InnerContainer>
        </RecruitDateContainer>
    )
}

export default RecruitDate;