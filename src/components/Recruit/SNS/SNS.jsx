import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListSNS from "./list-sns";

const SNSContainer = styled.div`
    width: 100%;
    margin-top: 10.5rem;

    @media screen and (max-width: 430px) {
        margin-top: 6rem;
    }
`

const SNSP = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.864rem;
    color: ${colors.gray_50};

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.909rem;
    }
`

const SNSP2 = styled.p`
    font-size: 1.87rem;
    font-weight: 400;
    line-height: 2.232rem;
    color: ${colors.gray_600};
    padding-left: 2.3rem;

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
        padding-left: 1.4rem;
    }
`

const SNS = ({ data }) => {
    const [sns, setSNS] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setSNS(data[0].sns);
        }
    }, [data]);

    return (
        <SNSContainer>
            <SNSP>문의처</SNSP>
            <ListSNS data={sns} />
            <SNSP2>*각 파트에 대한 소개는 UMC 한성대 인스타그램 카드뉴스를 통해 알 수 있습니다!</SNSP2>
        </SNSContainer>
    )
}

export default SNS;