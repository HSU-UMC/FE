import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "../../../styles/colors";
import { slideDown, slideUp, fadeIn } from "../../../../src/styles/animations";

import MenuOff1 from "../../../assets/images/Header/Menu/menuOff1.png";
import MenuOff2 from "../../../assets/images/Header/Menu/menuOff2.png";
import MenuOff3 from "../../../assets/images/Header/Menu/menuOff3.png";
import MenuOff4 from "../../../assets/images/Header/Menu/menuOff4.png";
import MenuOff5 from "../../../assets/images/Header/Menu/menuOff5.png";

import MenuOn1 from "../../../assets/images/Header/Menu/menuOn1.png";
import MenuOn2 from "../../../assets/images/Header/Menu/menuOn2.png";
import MenuOn3 from "../../../assets/images/Header/Menu/menuOn3.png";
import MenuOn4 from "../../../assets/images/Header/Menu/menuOn4.png";
import MenuOn5 from "../../../assets/images/Header/Menu/menuOn5.png";

const MenuContainer = styled.div`
    top: 7.5rem;
    width: 100%;
    height: 100vh;
    background-color: ${colors.menuBackground};
    position: fixed;
    z-index: 9999;
    display: flex;
    justify-content: center;
    animation: ${({ closing }) => (closing ? slideUp : slideDown)} 0.7s ease-out forwards;
`;

const MenuContainer2 = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    @media screen and (max-width: 430px) {
        width: 89%;
        margin-top: 2.941rem;
    }
`;

const MenuInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;

    @media screen and (max-width: 430px) {
        gap: 2rem;
    }
`;

const MenuDetailContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.188rem;
    color: ${({ isactive, ishovered }) => (isactive === 'true' || ishovered === 'true' ? colors.white : colors.menuColor)};
    opacity: 0;
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: ${({ index }) => index * 0.25}s;

    &:hover {
        color: ${colors.white};
    }

    @media screen and (max-width: 430px) {
        line-height: 2.2rem;
    }
`;

const MenuIcon = styled.img`
    width: 2.2rem;
`;

const Menu = ({ onClose, closing }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();  
    const isLogin = localStorage.getItem('isLogin') === 'true';

    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);    

    const routes = [
        { path: "/", name: "About UMC" },
        { path: "/project", name: "Project" },
        { path: isLogin ? "/staffqna" : "/qna", name: "Q&A", relatedPaths: ["/staffqna", "/staffanswer", "/staffedit", "/qna", "/qna/:id", "/post"] },
        //{ path: "/photo", name: "UMC Frame Photo", relatedPaths: ["/photo", "/photoresult"] },
        { path: "/recruit", name: "Recruit" }
    ];

    // const iconsOff = [MenuOff1, MenuOff2, MenuOff3, MenuOff4, MenuOff5];
    // const iconsOn = [MenuOn1, MenuOn2, MenuOn3, MenuOn4, MenuOn5];

    const iconsOff = [MenuOff1, MenuOff2, MenuOff3, MenuOff5];
    const iconsOn = [MenuOn1, MenuOn2, MenuOn3, MenuOn5];

    const handleMenu = (index) => {
        onClose();
        setTimeout(() => {
            navigate(routes[index].path);
        }, 500);
    };

    useEffect(() => {
        const currentPath = location.pathname;

        const index = routes.findIndex(route => {
            if (currentPath === route.path) return true;

            if (route.path === "/project" && /^\/project(\/.*)?$/.test(currentPath)) return true;

            if (route.path === (isLogin ? "/staffqna" : "/qna")) {
                return route.relatedPaths.some(path => {
                    if (path === "/qna/:id") {
                        return /^\/qna(\/\d+)?$/.test(currentPath);
                    }
                    return currentPath.startsWith(path);
                });
            }

            if (route.relatedPaths) {
                return route.relatedPaths.some(path => {
                    if (path === "/photoresult") {
                        return /^\/photoresult/.test(currentPath);
                    }
                    return currentPath.startsWith(path);
                });
            }

            return false;
        });

        setActiveIndex(index);
    }, [location.pathname]);

    return (
        <MenuContainer closing={closing}>
            <MenuContainer2>
                <MenuInnerContainer>
                    {routes.map((route, index) => (
                        <MenuDetailContainer
                            key={index}
                            index={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => handleMenu(index)}
                            isactive={activeIndex === index ? 'true' : 'false'}
                            ishovered={hoveredIndex === index ? 'true' : 'false'}
                        >
                            <MenuIcon
                                src={hoveredIndex === index || activeIndex === index ? iconsOn[index] : iconsOff[index]}
                                alt={`icon${index + 1}`}
                            />
                            {route.name}
                        </MenuDetailContainer>
                    ))}
                </MenuInnerContainer>
            </MenuContainer2>
        </MenuContainer>
    );
};

export default Menu;
