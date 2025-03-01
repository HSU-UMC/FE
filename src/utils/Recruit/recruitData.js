import { images } from "./loadImages";

const RecruitData = [
    {
        "people": [
            {
                "id": 1,
                "explain": "다른 학교 친구도 만나고 협업해보고 싶은"
            },
            {
                "id": 2,
                "explain": "넘치는 열정으로 새로운 것에 도전해보고 싶은"
            },
            {
                "id": 3,
                "explain": "서비스 기획, UX/UI 디자인, IT 개발 프로젝트를 해보고 싶은"
            }
        ],
        "part": [
            {
                "id": 1,
                "name": "PM"
            },
            {
                "id": 2,
                "name": "DESIGN"
            },
            {
                "id": 3,
                "name": "WEB"
            },
            {
                "id": 4,
                "name": "IOS"
            },
            {
                "id": 5,
                "name": "ANDROID"
            },
            {
                "id": 6,
                "name": "SERVER"
            }
        ],
        "activeDate": 
            {
                "start": "2025.03",
                "end": "2025.08",
                "period": "약 6개월"
            }
        ,
        "recruitDate": [
            {
                "id": 1,
                "name": "1차 서류 지원",
                "start": "2025.02.17(월)",
                "bar": "-",
                "end": "2025.02.28(금)"
            },
            {
                "id": 2,
                "name": "1차 서류 합격 발표",
                "start": "2025.03.02(일)"
            },
            {
                "id": 3,
                "name": "2차 면접 기간",
                "start": "2025.03.04(화)",
                "bar": "-",
                "end": "2025.03.07(금)"
            },
            {
                "id": 4,
                "name": "최종 합격 발표",
                "start": "2025.03.09(일)"
            },
            {
                "id": 5,
                "name": "전체 OT",
                "start": "2025.03.14(금) 18:00"
            }
        ],
        "content": [
            {
                "term": [
                    {
                        "id": 1,
                        "title": "워크북",
                        "explain": "3월부터 6월까지 파트 별 워크북에 있는 문제들을 스스로 해결해나갑니다."
                    },
                    {
                        "id": 2,
                        "title": "스터디",
                        "explain": "대면으로 파트 별로 상호 피드백의 스터디 활동을 진행합니다."
                    },
                ],
                "vacation": [
                    {
                        "id": 1,
                        "title": "프로젝트",
                        "explain": "스터디 수료 후 25.07 ~ 25.08까지 팀을 구성하여 프로젝트를 진행합니다.\n클라이언트 / 서버 / 디자이너 / 기획자로 팀이 구성됩니다."
                    },
                    {
                        "id": 2,
                        "title": "데모데이",
                        "explain": "프로젝트 후 \"UMC 데모데이\"를 통해 발표 및 교류를 진행합니다.\n데모데이까지 무사히 완수하시면 UMC 8기를 수료 하시게 됩니다!"
                    }
                ]
            }
        ],
        "competency": [
            {
                "id": 1,
                "name": "Plan",
                "explain": [
                    {
                        "id": 1,
                        "name": "Figma",
                        "WebImage": images["WebFigma"],
                        "MobileImage": images["MobileFigma"],
                    },
                ]
            },
            {
                "id": 2,
                "name": "Design",
                "explain": [
                    {
                        "id": 1,
                        "name": "Figma",
                        "WebImage": images["WebFigma"],
                        "MobileImage": images["MobileFigma"],
                    },
                ]
            },
            {
                "id": 3,
                "name": "Android",
                "explain": [
                    {
                        "id": 1,
                        "name": "Kotlin",
                        "WebImage": images["WebKotlin"],
                        "MobileImage": images["MobileKotlin"],
                    },
                ]
            },
            {
                "id": 4,
                "name": "iOS",
                "explain": [
                    {
                        "id": 1,
                        "name": "Swift",
                        "WebImage": images["WebSwift"],
                        "MobileImage": images["MobileSwift"],
                    },
                ]
            },
            {
                "id": 5,
                "name": "Web",
                "explain": [
                    {
                        "id": 1,
                        "name": "HTML",
                        "WebImage": images["WebHtml"],
                        "MobileImage": images["MobileHtml"],
                    },
                    {
                        "id": 2,
                        "name": "CSS",
                        "WebImage": images["WebCss"],
                        "MobileImage": images["MobileCss"],
                    },
                    {
                        "id": 3,
                        "name": "JavaScript",
                        "WebImage": images["WebJavaScript"],
                        "MobileImage": images["MobileJavaScript"],
                    },
                ]
            },
            {
                "id": 6,
                "name": "SpringBoot",
                "explain": [
                    {
                        "id": 1,
                        "name": "Java",
                        "WebImage": images["WebJava"],
                        "MobileImage": images["MobileJava"],
                    },
                ]
            },
            {
                "id": 7,
                "name": "Node.js",
                "explain": [
                    {
                        "id": 1,
                        "name": "JavaScript",
                        "WebImage": images["WebJavaScript"],
                        "MobileImage": images["MobileJavaScript"],
                    },
                ]
            }
        ],
        "information": [
            {
                "id": 1,
                "explain": "회비는 5만원 입니다.",
            },
            {
                "id": 2,
                "explain": "3월 14일(18:00 예정) OT 필수 참여하셔야 합니다."
            },
            {
                "id": 3,
                "explain": "12주간 교육 기간에 각 파트별로 스터디가 진행됩니다."
            },
            {
                "id": 4,
                "explain": "방중 데모데이는 반드시 참여하셔야 합니다!"
            }
        ],
        "sns": [
            {
                "id": 1,
                "name": "UMC 한성대 인스타그램",
                "linkName": "@hsu_makeus_challenge",
                "link": "https://www.instagram.com/hsu_makeus_challenge"
            },
            {
                "id": 2,
                "name": "UMC 한성대 카카오톡 오픈 채팅방",
                "linkName": "한성대 UMC 8기",
                "link": "https://open.kakao.com/o/s9myjidh"
            }
        ]
    }
]

export default RecruitData;