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
                "start": "2025.09",
                "end": "2026.02",
                "period": "약 6개월"
            }
        ,
        "recruitDate": [
            {
                "id": 1,
                "name": "1차 서류 지원",
                "start": "2025.08.18(월)",
                "bar": "-",
                "end": "2025.08.28(목)"
            },
            {
                "id": 2,
                "name": "1차 서류 합격 발표",
                "start": "2025.08.30(토)"
            },
            {
                "id": 3,
                "name": "2차 면접 기간",
                "start": "2025.09.01(월)",
                "bar": "-",
                "end": "2025.09.05(금)"
            },
            {
                "id": 4,
                "name": "최종 합격 발표",
                "start": "2025.09.07(일)"
            },
            {
                "id": 5,
                "name": "전체 OT",
                "start": "2025.09.12(금) 18:00"
            }
        ],
        "content": [
            {
                "term": [
                    {
                        "id": 1,
                        "title": "스터디",
                        "explain": "- 각 파트별 제공된 강의 & 참고자료를 활용하여 워크북 문제를 자기주도적으로 해결\n- 파트별 피드백 & 스터디를 통해 협력하며 학습\n- 해결이 어려운 문제는 스터디 팀원 & 파트장에게 질문하여 해결\n- 해커톤, 컨퍼런스 등 다양한 행사를 통해 실전 경험을 쌓을 기회 제공"

                    }
                ],
                "vacation": [
                    {
                        "id": 1,
                        "title": "프로젝트",
                        "explain": "- 스터디 수료 후, 팀을 구성하여 실전 사이드 프로젝트 진행\n - 기획자 / 디자이너 / 프론트엔드 / 백엔드 협업"
                    },
                    {
                        "id": 2,
                        "title": "데모데이",
                        "explain": "- 프로젝트 완료 후, UMC 데모데이에서 발표 및 교류\n - 최종적으로 데모데이까지 완수하면 공식 수료 인정"
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
                "explain": "9월 12일(18:00 예정) OT 필수 참여하셔야 합니다."
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
        "studyCourse": {
            "description": "개발 파트는 스터디 코스가 두 가지로 나뉩니다. (기획/디자인 파트 제외)",
            "courses": [
                {
                    "id": 1,
                    "emoji": "💁‍♂️",
                    "title": "주니어 코스",
                    "subtitle": "해당 파트의 기초 지식은 있으나, 개발 경험이 적거나 없는 학생",
                    "features": [
                        "- 기본 스터디 진행 후 시니어 미션 자유 도전 가능"
                    ]
                },
                {
                    "id": 2,
                    "emoji": "💁‍♀️",
                    "title": "시니어 코스",
                    "subtitle": "해당 파트를 전 기수(1~8기)에 수료했거나, 프로젝트 경험이 있는 학생",
                    "features": [
                        "- 시니어 코스의 워크북은 주니어와 동일하나 선택 참여 가능",
                        "- 학기 중 미니 프로젝트 신청 가능",
                        "- 신청자 검토 후 운영진이 최종 배정"
                    ]
                }
            ],
            "warning": "*시니어 코스를 신청하더라도, 운영진 판단에 따라 주니어 코스로 배정될 수 있습니다."
        },
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
                "linkName": "한성대 UMC 9기",
                "link": "https://open.kakao.com/o/snJFzOMh"
            }
        ]
    }
]

export default RecruitData;