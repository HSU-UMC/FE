import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import ListProject from "../../components/Project/Project/list-project";
import Spinner from "../../components/Common/Spinner";
import ProjectData from "../../utils/Project/projectData.js";
import FilterData from "../../utils/Project/filterData.js";
import useImageLoader from "../../hooks/Project/useImageLoader";
import ListFilter from "../../components/Project/Project/filter/list-filter.jsx";

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProjectInnerContainer = styled.div`
  width: 60%;
  margin-top: 3rem;

  @media screen and (max-width: 430px) {
    width: 92%;
    margin-top: 2.441rem;
  }
`;

const ProjectP = styled.p`
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 4.296rem;
  color: ${colors.white};

  @media screen and (max-width: 430px) {
    font-size: 2.8rem;
    line-height: 3.341rem;
  }
`;

const NotP = styled.p`
  color: ${colors.white};
  font-size: 3.6rem;
  font-weight: 700;
  text-align: center;
  margin-top: 11.5rem;

  @media screen and (max-width: 430px) {
    font-size: 1.8rem;
    margin-top: 9.2rem;
  }
`;

const Project = () => {
  const [projectData, setProjectData] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    setProjectData(ProjectData);
  }, []);

  const selectedType = FilterData.find(
    (filter) => filter.id === selectedId
  )?.type;
  const filteredData = useMemo(() => {
    return selectedId === 0
      ? projectData
      : projectData.filter((project) => project.type === selectedType);
  }, [selectedId, selectedType, projectData]);

  const imageSrc = filteredData.length > 0 ? filteredData[0].projectWeb : "";
  const isLoading = useImageLoader(imageSrc);

  //   console.log("selectedId:", selectedId);
  //   console.log("selectedType:", selectedType);
  //   console.log("Filtered Data:", filteredData);
  return (
    <div className="pageContainer">
      <ProjectContainer>
        <ProjectInnerContainer>
          {isLoading ? (
            <Spinner isLoading={isLoading} />
          ) : (
            <>
              <ProjectP>Project</ProjectP>
              <ListFilter selectedId={selectedId} onSelect={setSelectedId} />

              {filteredData.length > 0 ? (
                <ListProject data={filteredData} />
              ) : (
                <NotP>데모데이 기간 종료 후 업로드 될 예정입니다.</NotP>
              )}
            </>
          )}
        </ProjectInnerContainer>
      </ProjectContainer>
    </div>
  );
};

export default Project;
