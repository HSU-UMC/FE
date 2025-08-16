import styled from "styled-components";
import colors from "../../../styles/colors";

const StudyCourseContainer = styled.div`
    width: 100%;
    margin: 10rem 0;

    @media screen and (max-width: 430px) {
        margin: 4rem 0;
    }
`;

const StudyCourseTitle = styled.p`
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.387rem;
    color: ${colors.gray_50};
    margin-bottom: 2rem;

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.91rem;
    }
`;


const CourseDescription = styled.p`
    font-size: 1.6rem;
    color: ${colors.gray_200};
    line-height: 1.9rem;
    margin-bottom: 2.4rem;
    text-align: left;

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 1.6rem;
        margin-bottom: 2rem;
    }
`;

const CourseGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2.4rem;

    @media screen and (max-width: 430px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-bottom: 2rem;
    }
`;

const CourseCard = styled.div`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1.2rem;
    padding: 2.4rem;

    @media screen and (max-width: 430px) {
        padding: 2rem;
    }
`;

const CourseHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.6rem;
`;

const CourseEmoji = styled.span`
    font-size: 2rem;
    margin-right: 1.2rem;

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        margin-right: 1rem;
    }
`;

const CourseTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
    }
`;

const CourseSubtitle = styled.p`
    font-size: 1.5em;
    color: ${colors.primary_200};
    margin-bottom: 1.6rem;
    line-height: 1.7rem;

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 1.4rem;
        margin-bottom: 1.4rem;
    }
`;

const CourseFeature = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    color: ${colors.gray_400};
    line-height: 1.7rem;

    &:last-child {
        margin-bottom: 0;
    }

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.3rem;
        margin-bottom: 1rem;
    }
`;

const WarningText = styled.p`
    font-size: 1.6rem;
    color: ${colors.gray_700};
    line-height: 1.8rem;
    margin: 0;

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.3rem;
    }
`;

const StudyCourse = ({ data }) => {
    const studyCourseData = data[0].studyCourse;
    
    return (
        <StudyCourseContainer>
            <StudyCourseTitle>스터디 과정 내 모집 코스</StudyCourseTitle>
            <CourseDescription>
                {studyCourseData.description}
            </CourseDescription>
            
            <CourseGrid>
                {studyCourseData.courses.map((course) => (
                    <CourseCard key={course.id}>
                        <CourseHeader>
                            <CourseEmoji>{course.emoji}</CourseEmoji>
                            <CourseTitle>{course.title}</CourseTitle>
                        </CourseHeader>
                        <CourseSubtitle>
                            {course.subtitle}
                        </CourseSubtitle>
                        {course.features.map((feature, index) => (
                            <CourseFeature key={index}>
                                {feature}
                            </CourseFeature>
                        ))}
                    </CourseCard>
                ))}
            </CourseGrid>
            
            <WarningText>
                {studyCourseData.warning}
            </WarningText>
        </StudyCourseContainer>
    );
};

export default StudyCourse;