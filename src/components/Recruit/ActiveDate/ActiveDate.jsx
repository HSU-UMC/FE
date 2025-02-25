import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

const ActiveContainer = styled.div`
    margin-top: 7.5rem;

    @media screen and (max-width: 430px) {
        margin-top: 5.55rem;
    }
`

const ActiveP = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.864rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.8rem;
        line-height: 2.148rem;
    }
`

const ActiveP2 = styled.p`
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 2.625rem;
    color: ${colors.white};
    margin-top: 2rem;

    @media screen and (max-width: 430px) {
        font-size: 1.5rem;
        line-height: 1.432rem;
        margin-top: 1.8rem;
    }
`

const ActiveDate = ({ data }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [period, setPeriod] = useState("");

    useEffect(() => {
        if (data && data.length > 0) {
            setStartDate(data[0].activeDate.start);
            setEndDate(data[0].activeDate.end);
            setPeriod(data[0].activeDate.period);
        }
    }, [data]);

    return (
        <ActiveContainer>
            <ActiveP>활동 기간</ActiveP>
            <ActiveP2>{startDate} - {endDate} [{period}]</ActiveP2>

        </ActiveContainer>
    )
}

export default ActiveDate;