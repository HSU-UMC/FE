import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListPeople from "./list-people";

const PeopleContainer = styled.div`
    width: 100%;
    margin-top: 7.8rem;

    @media screen and (max-width: 430px) {
        margin-top: 6rem;
    }
`;

const PeopleP = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.864rem;
    color: ${colors.gray_50};

    @media screen and (max-width: 430px) {
        font-size: 1.8rem;
        line-height: 2.148rem;
    }
`;

const PeopleP2 = styled(PeopleP)`
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 2rem;
    margin-top: 2rem;

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        margin-top: 1.2rem;
    }
`

const PeopleP3 = styled(PeopleP2)`
    font-size: 1.9rem;
    line-height: 2.267rem;
    margin-top: 0.8rem;
    color: ${colors.gray_600};

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
        margin-top: 0.4rem;
    }
`

const People = ({ data }) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setPeople(data[0].people);
        }
    }, [data]);

    return (
        <PeopleContainer>
            <PeopleP>지원 대상</PeopleP>
            <PeopleP2>한성대학교 재학생 및 휴학생, 졸업 예정자</PeopleP2>
            <PeopleP3>*졸업생은 신청이 불가합니다</PeopleP3>
            <ListPeople data={people} />
        </PeopleContainer>
    );
};

export default People;
