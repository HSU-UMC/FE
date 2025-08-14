import styled from "styled-components";
import colors from "../../../styles/colors";
import { useNavigate } from "react-router-dom";
import ListProjectExplain from "./list-projectExplain";

const ItemContainer = styled.div`
    width: calc(100% - 0rem / 2);
    border: none;
    border-radius: 0.4rem;
    overflow: hidden;
    margin-bottom: 11rem;

    @media screen and (max-width: 430px) {
        border-radius: 0.2rem;
        margin-bottom: 7.2rem;
    }
`

const BackgroundImg = styled.img`
    width: 100%;
    cursor: pointer;
`

const ProjectP = styled.p`
    width: 100%;
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 3.341rem;
    color: ${colors.gray_100};
    margin-top: 4rem;

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        margin-top: 1.6rem;   
    }
`

const ItemProject = ({ id, projectMobile, projectWeb, title, subTitle }) => {
    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/project/${id}`);
    };

    return (
        <ItemContainer>
            <BackgroundImg src={window.innerWidth <= 430 ? projectMobile : projectWeb} alt="project" onClick={handleDetail}/>
            <ProjectP>{title}</ProjectP>
            <ListProjectExplain subTitle={subTitle} />
        </ItemContainer>
    );
};

export default ItemProject;
