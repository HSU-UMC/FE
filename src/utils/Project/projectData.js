import { images } from "./loadImages";

const ProjectData = [
  // 6기
  {
    id: 1,
    type: "6기",
    projectWeb: images["stepperWeb"],
    projectMobile: images["stepperMobile"],
    projectDetailWeb: images["stepperDetailWeb"],
    projectDetailMobile: images["stepperDetailMobile"],
    title: "STEPPER",
    detailExplain:
      "딱 맞는 운동 루틴을  만들어 빠르게 회복할 수 있으며, AI를 활용한 통증 부위에 맞는 운동 추천 서비스부터 운동 컨디션 평가까지 만능 재활 맞춤 서비스입니다.",
    project: "https://github.com/UMC-Stepper/Stepper_FE",
    people: [
      {
        id: 1,
        part: "디자인",
        name: ["전세원"],
      },
      {
        id: 2,
        part: "안드로이드",
        name: ["김성민", "박지원"],
      },
      {
        id: 3,
        part: "서버",
        name: ["민경빈"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "아리",
        name: "전세원",
        part: "DESIGN",
        explain:
          "프로젝트에서 디자이너 역할을 맡았습니다. 앱디자인은 처음이라 선택과 집중을 하였는데 사용자가 사용하는데 불편함을 느끼지 않도록 집중하며 디자인을 하였습니다. 그래서 사용자가 서비스를 이용하는데 있어서 익숙한 환경이 무엇인지, 시각적으로 불편함이 없는지를 고민하며 디자인하였습니다. 또한PM님이 열심히 완성한 기획을 의도한대로 결과물이 나오는 것에도 집중하였습니다. 프로젝트를 진행하면서 기획자, 개발자와 협업을 할 수 있었던 계기가 되었으며, 그 과정에서 어떻게 소통을 해야할지 배울 수 있었습니다. 그리고 진로를 uiux 디자이너로 갈지 고민하였는데 그 고민을 결정하는 데, 도움이 되었습니다.",
      },
      {
        id: 2,
        nickname: "미니",
        name: "김성민",
        part: "ANDROID",
        explain:
          "기간이 아주 길지는 않았지만 좋은 기획과 좋은 팀원들과 프로젝트를 할 수 있어서 정말 좋은 경험이었습니다. 기획도 정말 마음에 들었고 8명이나 되는 팀원 중 전부 다 마음에 드는 좋은 사람들이어서 정말 즐겁게 할 수 있어서 좋았습니다.",
      },
      {
        id: 3,
        nickname: "루피",
        name: "박지원",
        part: "ANDROID",
        explain:
          "안드로이드 화면설계 및 api연결, 내부 기능을 담당했습니다. 너무 즐거운 프로젝트였고, 기초를 더 탄탄하게 할수 있었습니다. 무엇보다도 협업 능력을 기를 수 있고, 프로젝트 기간도 여유로워 다양한 기술 스택을 배울 수 있었습니다. 기초를 탄탄하게 다져나가고 싶거나, 처음부터 제대로 배워보고 싶었는데 모두 이룬 것 같아 200퍼센트 만족했습니다!",
      },
      {
        id: 4,
        nickname: "빈트",
        name: "민경빈",
        part: "SPRINGBOOT",
        explain:
          "백 스프링부트 헤더로써 프로젝트를 진행했습니다. 많은 인원과 함께하는 프로젝트 진행이여서 매우 새롭고 재밌었습니다. 팀원분들이 다 잘 따라와주셔서 매우 원활히 진행 할수 있었습니다. 매우 좋은 기회였습니다!",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "일상",
      },
      {
        id: 2,
        name: "재활",
      },
      {
        id: 3,
        name: "Android",
      },
    ],
  },
  {
    id: 2,
    type: "6기",
    projectWeb: images["wesaveWeb"],
    projectMobile: images["wesaveMobile"],
    projectDetailWeb: images["wesaveDetailWeb"],
    projectDetailMobile: images["wesaveDetailMobile"],
    title: "WE SAVE",
    detailExplain:
      "우리 주변에 발생하는 사건, 사고들을 직접 제보하고 공유하여 우리 주변의 이웃들을 구하는 서비스입니다.",
    people: [
      {
        id: 1,
        part: "기획",
        name: ["김지은"],
      },
      {
        id: 2,
        part: "안드로이드",
        name: ["임창수"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "지니",
        name: "김지은",
        part: "PLAN",
        explain:
          "PM으로써 서비스를 기획하고, 프로젝트 과정과 팀원들의 일정 등 전반적인 제작 과정을 총괄하였으며, 간단한 디자인 및 비용 관리, 데모데이 부스 준비 등의 활동을 하였습니다. 처음 해보는 역할이어서 어려운 점이 많았지만 그만큼 배운 것도 많았던 활동이었던 것 같습니다.",
      },
      {
        id: 2,
        nickname: "칼트",
        name: "임창수",
        part: "ANDROID",
        explain:
          "ui 구성 및 api연결을 하였습니다. 처음해보는 활동이지만 너무 뜻깊었고 많은 것을 배워갈 수 있는 활동이었다고 생각합니다!!",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "재난",
      },
      {
        id: 2,
        name: "예방",
      },
      {
        id: 3,
        name: "Android",
      },
    ],
  },
  {
    id: 3,
    type: "6기",
    projectWeb: images["kiokiWeb"],
    projectMobile: images["kiokiMobile"],
    projectDetailWeb: images["kiokiDetailWeb"],
    projectDetailMobile: images["kiokiDetailMobile"],
    title: "키오키",
    detailExplain:
      "키오스크 이용의 어려움을 해결하기 위해 실제 브랜드의 키오스크 화면을 제공하고 언제든지 이용법을 볼 수 있는 서비스입니다.",
    people: [
      {
        id: 1,
        part: "기획",
        name: ["박세은"],
      },
      {
        id: 2,
        part: "안드로이드",
        name: ["정예빈"],
      },
      {
        id: 3,
        part: "서버",
        name: ["이지연"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "센",
        name: "박세은",
        part: "PLAN",
        explain:
          "서비스 기획 및 디자인 공동작업, 각 팀원의 의견 전달 및 진도 확인 후 일정 계획을 했습니다. 기획자로 처음 참여한 프로젝트, 기획자는 기획만 끝내면 되는 것이 아닌 팀 전체를 이끌어가며 자신이 생각한 방향으로 프로젝트가 잘 진행될 수 있게 조율해야하기 때문에 책임감을 가져야 한다고 느꼈습니다.",
      },
      {
        id: 2,
        nickname: "비니",
        name: "정예빈",
        part: "ANDROID",
        explain:
          "안드로이드 파트로 활동하면서 정말 많은 것을 배울 수 있었습니다. 처음에는 안드로이드에 대해 아무것도 몰랐지만, 워크북과 클론코딩을 통해 기본 개념을 다질 수 있었습니다. 세션 때마다 안드로이드 팀원들과 모르는 것을 서로 물어보고 고치는 과정이 큰 도움이 되었습니다. 이러한 경험 덕분에 데모데이 때 안드로이드 프로젝트를 무사히 진행할 수 있었습니다:)",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "키오스크",
      },
      {
        id: 2,
        name: "도움",
      },
      {
        id: 3,
        name: "Android",
      },
    ],
  },
  {
    id: 4,
    type: "6기",
    projectWeb: images["plancapsuleWeb"],
    projectMobile: images["plancapsuleMobile"],
    projectDetailWeb: images["plancapsuleDetailWeb"],
    projectDetailMobile: images["plancapsuleDetailMobile"],
    title: "플랜캡슐",
    detailExplain:
      "흐지부지 잊어버리게 되는 목표를  지속적으로 리마인드 해 이를 이룰 수 있도록 하며, 목표 관리의 빈틈을 채워줄 수 있는 서비스입니다.",
    people: [
      {
        id: 1,
        part: "디자인",
        name: ["양유진"],
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "계획",
      },
      {
        id: 2,
        name: "일상",
      },
      {
        id: 3,
        name: "Android",
      },
    ],
  },
  {
    id: 5,
    type: "6기",
    projectWeb: images["veganingWeb"],
    projectMobile: images["veganingMobile"],
    projectDetailWeb: images["veganingDetailWeb"],
    projectDetailMobile: images["veganingDetailMobile"],
    title: "비거닝",
    detailExplain:
      "비건의 진입 장벽을 낮추고자 기획되었으며, 비건의 진입장벽을 보다 쉬운 비건 라이프스타일을 즐길 수 있도록 비건 레시피/식당 정보 및 레시피 공모기능, 개인맞춤 비건 영양 정보 그래프 분석 제공 서비스입니다.",
    people: [
      {
        id: 1,
        part: "디자인",
        name: ["임채현"],
      },
      {
        id: 2,
        part: "iOS",
        name: ["김민솔"],
      },
      {
        id: 3,
        part: "서버",
        name: ["공수민", "송진우"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "에리얼",
        name: "임채현",
        part: "DESIGN",
        explain:
          "비건을 본인만의 라이프스타일로 만들고 싶은 MZ세대가 주요 타겟임을 고려하여, UI 디자인을 세련되고 트렌디하게 함으로써 더욱 비건을 시도해볼 수 있도록 디자인하였습니다. 자신만의 비건 레시피를 공유하고 만들어 볼 수 있어, 더욱 감성적으로 접근했습니다. 좋은 팀원분들을 만나, 디자인 화면들을 실제로 구현해볼 수 있어 뜻깊은 활동이였습니다.",
      },
      {
        id: 2,
        nickname: "라이덜",
        name: "송진우",
        part: "NODE.JS",
        explain:
          "node.js(서버)파트원으로 어플리케이션 서비스를 위한 데이터베이스 설계, 구축과 API설계 및 서버기능을 구현하였습니다. 이번 프로젝트는 처음으로 참여한 팀 프로젝트였고 때문에 팀원들과 함께 어플리케이션을 기획하고 개발, 출시하는 과정을 경험할 수 있었습니다. 처음엔 node.js를 사용한 서버개발이 처음이었기 때문에 어려움이 있었지만, 프로젝트를 진행하며 백엔드 개발의 기본적인 개념과 원리를 익힐 수 있었습니다. 데이터베이스의 설계, 구축, 연동, API 개발, 서버 기능 구현 등 다양한 영역에서 많은 것을 배웠습니다. \n\n또한 팀원들과의 협업을 통해 문제를 해결해 나가는 과정에서 커뮤니케이션의 중요성을 실감하게 되었습니다. 각자의 생각과 아이디어를 공유하고 조율하면서 프로젝트를 성공적으로 마칠 수 있었고, 이는 앞으로의 개발자로서의 진로로 나아가는데 큰 도움이 될 것이라고 확신합니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "건강",
      },
      {
        id: 2,
        name: "웰빙",
      },
      {
        id: 3,
        name: "iOS",
      },
    ],
  },
  {
    id: 6,
    type: "6기",
    projectWeb: images["seokbakjiWeb"],
    projectMobile: images["seokbakjiMobile"],
    projectDetailWeb: images["seokbakjiDetailWeb"],
    projectDetailMobile: images["seokbakjiDetailMobile"],
    title: "석박지",
    project: "https://github.com/SukBakJi/SukBakJi-iOS",
    detailExplain:
      "대학원 진학 희망자, 대학원생, 졸업생을 모두 아울러 정보를 효과적으로 공유할 수 있는 커뮤니티 및 멘토링 서비스입니다.",
    people: [
      {
        id: 1,
        part: "디자인",
        name: ["고하늘"],
      },
      {
        id: 2,
        part: "iOS",
        name: ["김경민"],
      },
      {
        id: 3,
        part: "서버",
        name: ["임수진"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "미락",
        name: "고하늘",
        part: "DESIGN",
        explain:
          "전체적인 앱 디자인 및 데모데이 굿즈 디자인을 하였으며, 디자인 완성도가 높게 나와서 만족했습니다!",
      },
      {
        id: 2,
        nickname: "하키",
        name: "김경민",
        part: "IOS",
        explain:
          "대학원 커뮤니티 서비스 석박지에서 게시판 파트와 디렉토리 파트를 맡아 UI/UX 개발 및 여러 버튼의 기능 구현과 백엔드 서버에서 구현된 API들을 프론트 개발과 연동했습니다. 다양한 사람들과 협업을 진행하면서 나눠진 파트에 따라 개발을 해볼 수 있는 좋은 경험이 될 수 있었습니다. 처음 해보는 협업 프로젝트인데, 팀원들 중 누구의 탈주도 없이 끝까지 노력하여 결과물을 발표할 수 있을 때 굉장한 성취감을 느낄 수 있었습니다. 이번 UMC 6기 활동을 하면서 스터디 진행을 위해 스스로 워크북을 채우는 과정에서도 스스로 정보를 수집하고 이해하는 부분에서 한 단계 더 성장할 수 있었습니다. 또한, 어떻게 해야할지 모르는 나로서, 데모데이 프로젝트를 직접 해보고 나니, 자신감도 생기게 되었고 앞으로도 더 많은 프로젝트를 해보고 싶다는 생각이 들었습니다. 단순히 기초 지식과 개념만 가지고 시작해서 ‘과연 내가 프로젝트를 할 수 있을까?’라는 걱정을 많이 했었지만, 직접 해보면서 배우기도 하고 스스로 공부하게 되는 좋은 영향 덕분에 잘 마무리 할 수 있었습니다.",
      },
      {
        id: 3,
        nickname: "레이첼",
        name: "임수진",
        part: "SPRINGBOOT",
        explain:
          "석박지(석사 박사 지원부터 취업정보까지)의 서버 파트로 참여하게 되었는데 이번에 처음 스프링부트를 접하고 하게 된 프로젝트입니다. 아직 부족한데 잘 할 수 있을까 걱정이 많이 됐었는데 좋은 팀원들을 만나서 서로에게 도움이 되기도 하고, 기대했던 결과물을 만들어낼 수 있어서 행복했어요!\n\n저번 기수 iOS 파트에 이어 이번 6기 UMC에도 활동하게 되었는데, 매주 스터디를 통해 역량을 기르면서 공부할 수 있는 시간을 가질 수 있다는 게 좋았어요. 그리고 기획, 디자인, 프론트엔드, 백엔드 다양한 파트가 모여 약 두달간 개발을 진행하여 완성도 있는 프로젝트를 경험해볼 수 있는데요. 데모데이까지 거치게 되면 정말 많이 배우고 성장해있는 모습을 발견하실 수 있을 거예요!",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "취업",
      },
      {
        id: 2,
        name: "커뮤니티",
      },
      {
        id: 3,
        name: "iOS",
      },
    ],
  },
  {
    id: 7,
    type: "6기",
    projectWeb: images["routeporterWeb"],
    projectMobile: images["routeporterMobile"],
    projectDetailWeb: images["routeporterDetailWeb"],
    projectDetailMobile: images["routeporterDetailMobile"],
    title: "루트포터",
    detailExplain:
      "AI와 간단한 질문들에 문답을 하며, 취향 기반으로 다양한 여행지를 추천하는 기능을 가지고 있습니다. 바쁜 일상 속에서 여유를 찾을 수 있도록, AI가 추천해주는 맘에 쏙 드는 내 여행지 추천 서비스입니다.",
    people: [
      {
        id: 1,
        part: "디자인",
        name: ["송의진"],
      },
      {
        id: 2,
        part: "웹",
        name: ["윤상혁"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "진",
        name: "송의진",
        part: "DESIGN",
        explain:
          "UXUI, 화면 전체 디자인 / 와이어프레임 설계 및 일부 기획 / 굿즈 디자인을 했습니다.\n매주 진행되는 파트별 스터디를 통해 꾸준히 실력을 향상시킬 수 있었고, 직접 프로젝트에 참여하면서 데모데이까지 완수하게 되어 매우 뿌듯합니다. 디자인 뿐 아니라 개발자 및 기획자 등 다른 파트 챌린저들과 협업한 경험은 후에 필드에 나가서도 큰 도움이 될 것 같습니다. 즐겁고 유익한 경험이었습니다. UMC 앞으로도 파이팅-!",
      },
      {
        id: 2,
        nickname: "앨빈",
        name: "윤상혁",
        part: "WEB",
        explain:
          "다른 파트 사람들과 처음으로 협업하며 개발했던 프로젝트였습니다. 처음이다보니 모르는 점이 많아서 UI 구현과 API 연결에 막혔던 부분이 몇 있었지만, 다양한 파트의 사람들과 협업하고 소통하는 방식과 피그마 디자인을 토대로 직접 코드에 적용하는 법 등을 배울 수 있었습니다. 어떤 수업, 스터디보다 얻어가는 게 많았던 시간이었다고 생각합니다. 재밌었습니다~",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "여행",
      },
      {
        id: 2,
        name: "채팅",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  // 7기
  {
    id: 8,
    type: "7기",
    projectWeb: images["daengnyangWeb"],
    projectMobile: images["daengnyangMobile"],
    projectDetailWeb: images["daengnyangDetailWeb"],
    projectDetailMobile: images["daengnyangDetailMobile"],
    title: "댕냥스퀘어",
    detailExplain:
      "한 눈에 접하는 우리동네 반려동물 지도 앱 서비스입니다. 날씨, 디데이 등 사용자에게 필요한 정보와 반려동물을 위한 정보를 제공합니다. 또한 견주들을 위해 산책 코스를 추천해주고, 커뮤니티를 통해 이웃들과 소통할 수 있습니다.",
    people: [
      {
        id: 1,
        part: "서버",
        name: ["임차민"],
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "반려동물",
      },
      {
        id: 2,
        name: "지도",
      },
      {
        id: 3,
        name: "Android",
      },
    ],
  },
  {
    id: 9,
    type: "7기",
    projectWeb: images["tttWeb"],
    projectMobile: images["tttMobile"],
    projectDetailWeb: images["tttDetailWeb"],
    projectDetailMobile: images["tttDetailMobile"],
    title: "Ttt",
    detailExplain:
      "독서를 하고 싶지만 꾸준히 하기 어려운 MZ 세대들이 가벼운 마음으로 독서를 시작할 수 있도록 책&장소, 큐레이션, 북클럽 등을 제공하는 앱 서비스입니다.",
    people: [
      {
        id: 1,
        part: "안드로이드",
        name: ["백상준"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "맹구",
        name: "백상준",
        part: "ANDROID",
        explain:
          "이번 프로젝트를 진행하면서 단순히 기능을 구현하는 것보다 전체적인 흐름을 이해하고 협업하는 것이 중요하다는 것을 깨달았습니다. 처음에는 제 할 일만 신경 쓰며 작업했지만, 진행하면서 다른 팀원들의 작업과 연결되는 부분이 많다는 것을 알게 되었습니다. 특히 서평 작성 기능을 구현할 때 데이터의 흐름과 API 연동 방식을 미리 고민했더라면 더 수월했을 것이라는 아쉬움이 남았습니다. 다음에는 이러한 점을 사전에 고려하여 작업해야겠다고 다짐했습니다.\n또한, 귀찮고 어려운 작업도 결국 해결할 방법이 있다는 것을 경험했습니다. 홈 화면에서 리사이클러뷰를 중첩해야 하는 부분이 예상보다 어려웠고, 여러 번 수정하며 많은 고민을 했습니다. 한때는 단순한 방식으로 해결할까 고민했지만, 결국 원하는 형태로 구현하면서 어려운 문제도 해결할 수 있다는 자신감을 얻었습니다.\n무엇보다 팀 프로젝트에서는 소통이 가장 중요하다는 것을 실감했습니다. 맡은 부분을 제대로 구현하는 것도 중요하지만, 다른 팀원들과 조율과 협업이 더욱 중요하다는 것을 배웠습니다. 다음 프로젝트에서는 개발을 시작하기 전에 더 많은 대화를 나누고, 전체적인 구조를 이해한 후 진행해야겠다고 다짐했습니다. 어려운 부분도 많았지만, 끝까지 해내면서 성장할 수 있었던 값진 경험이었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "독서",
      },
      {
        id: 2,
        name: "스크랩",
      },
      {
        id: 3,
        name: "Android",
      },
    ],
  },
  {
    id: 10,
    type: "7기",
    projectWeb: images["diginWeb"],
    projectMobile: images["diginMobile"],
    projectDetailWeb: images["diginDetailWeb"],
    projectDetailMobile: images["diginDetailMobile"],
    project: "https://github.com/UMC-7th",
    title: "이거 먹자",
    detailExplain:
      "하루하루 나만의 건강한 식단을 추천해주는 서비스로, AI 영양사가 개인 맞춤 식단을 제공합니다. 또한 실시간 시세 조회를 통해 식재료의 정보를 제공하고, 건강한 식단을 편리하게 배송받을 수 있는 맞춤 식단 구독 기능이 있습니다.",
    people: [
      {
        id: 1,
        part: "디자인",
        name: ["양유진"],
      },
      {
        id: 2,
        part: "안드로이드",
        name: ["성규현", "손주완", "최희원"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "주디",
        name: "양유진",
        part: "DESIGN",
        explain:
          "브랜딩(로고 디자인), 디자인 시스템 구축, 컴포넌트 및 UI 디자인, 굿즈 및 명찰 디자인, 데모데이 부스 물품 디자인(현수막, 엑스배너, 미니배너 등)을 담당했습니다.\n인턴을 하며 관심이 생긴 AI로 프로젝트를 하고 싶어 다양한 기획 중에 '이거먹자' 선정하여 데모 버전까지 개발한 후 데모데이 행사에 참여하였습니다. 이 과정에서 사용자의 데이터를 수집하여 AI 활용하는 기술 뿐만 아니라, AI 생성형 이미지를 통해 직관적인 이미지로 사용자에게 식단을 추천해주는 기술을 적용하였습니다. 또한 AI기술 뿐만 아니라 사용자 중심에서 문제를 발견하고, 다양한 화면 디자인 시안을 제안하고 해결책을 제시하는 등 UI/UX 설계와 시각적인 디자인을 통해 인터페이스를 구축하는 경험을 했습니다. 비록 두 달이라는 짧은 기간이었지만, 디자이너로서의 책임감 뿐만 아니라 팀원들과의 커뮤니케이션 능력도 키울 수 있었고, 모두가 하나가 되는 협업하는 소중한 경험이었습니다. 이러한 과정을 거쳐 최종적으로 대상을 받을 수 있었으며, 많은 것을 배워가는 뜻 깊은 경험이었습니다. 또한 AI와 디자인을 융합한 프로젝트에 참여하며 인공지능에 대해 더욱 관심이 생겼고 이후 진로에 한층 더 가까워지는 계기가 되었습니다. 감사합니다~!",
      },
      {
        id: 2,
        nickname: "좐좐",
        name: "손주완",
        part: "ANDROID",
        explain:
          "팀 내 프론트엔드 팀장으로서 타 파트와 긴밀히 소통하며 프로젝트를 주도했습니다. Splash, 로그인, 회원가입, 설문조사, 마이페이지, 구독 페이지, 시세 페이지, 애니메이션 등 대부분의 UI를 구현하였으며, 팀원들이 만든 페이지들을 원활하게 연결하는 역할을 수행했습니다. 또한, 기능을 담당하는 API 연결 작업 중 50개 이상의 API 중 절반을 직접 구현 및 연동하며 개발을 진행했습니다. 그뿐만 아니라, 회의 일정 조율 및 역할 분배를 담당하며 팀의 원활한 협업을 이끌었고, 중간에 진행된 런칭데이에서 프론트엔드 개발 진행 상황을 발표하는 역할도 맡았습니다. 개발 과정에서 어려움이 발생할 때마다 팀원들과 적극적으로 소통하며 해결책을 모색했고, 초기 구상했던 UI와 기능들을 더욱 사용자 친화적으로 설계하기 위해 지속적으로 고민하며 개발을 이어갔습니다.\n짧은 기간 안에 완성도 높은 결과물을 만들어내는 것이 생각보다 쉽지 않았습니다. 빠르게 UI를 구현해도, 세부적인 디테일과 디자인적 요소를 다듬는 데 많은 시간이 걸렸으며, API 연동 과정에서도 보통의 프로젝트 보다 많은 명세서의 양과 예상치 못한 오류들을 해결하는 데 어려움이 많았습니다. 하지만 백엔드 팀과 소통하며 협업한 끝에 API 연동을 성공적으로 마무리했고, 디자이너 및 PM과도 수많은 시행착오를 거치며 완성도 높은 결과물을 만들어낼 수 있었습니다. 이번 프로젝트는 개인 프로젝트나 교내 프로젝트와는 다른 경험이었으며, 다른 학교 사람들과 '개발'이라는 하나의 목표로 함께 달려가는 과정이 얼마나 의미 있는 시간인지 깨닫게 되었습니다.  개인의 실력 또한 성장했으며, 팀원들과 협엽하는 과정에서 소통과 구현능력에서 많은 경험을 얻어간 것 같습니다. 비록 힘들었지만, 굉장히 알찼던 경험이었고 대상을 수상해 그간의 노력이 빛을 바랬던 느낌이었습니다.",
      },
      {
        id: 3,
        nickname: "원",
        name: "최희원",
        part: "ANDROID",
        explain:
          "UI 구현 및 API 연결을 담당했습니다.\n안드로이드를 처음 공부하면서 모르는 부분이 많아 걱정도 됐지만, 매주 워크북 활동을 통해 배운 내용을 프로젝트에 적용하며 성장할 수 있었습니다. 어려운 순간도 많았지만, 완성된 결과물을 보니 보람차고 의미있는 경험이었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "식단",
      },
      {
        id: 2,
        name: "추천",
      },
      {
        id: 3,
        name: "Android",
      },
    ],
  },
  {
    id: 11,
    type: "7기",
    projectWeb: images["ggsWeb"],
    projectMobile: images["ggsMobile"],
    projectDetailWeb: images["ggsDetailWeb"],
    projectDetailMobile: images["ggsDetailMobile"],
    title: "공각심",
    detailExplain:
      "20~30대 대학생 및 구직자를 대상으로 맞춤 자격/시험 일정 관리와 학습 동기를 부여하는 앱 서비스입니다. 공각심은 공부와 경각심을 결합한 합성어로, 학습 경각심을 일깨웁니다.",
    people: [
      {
        id: 1,
        part: "서버",
        name: ["박세웅", "원준영"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "인고사",
        name: "박세웅",
        part: "NODE.JS",
        explain:
          "퀴즈 데이터 크롤링, 퀴즈 정답 판별 기능, 자격증 시험 일정 조회, 접수 알람 신청, 시험 일정 캘린더 추가 등의 기능 구현을 하였고, 데모데이 행사 내에서 백엔드 기능 전체 설명을 담당하여 질의응답에 적극적으로 임했습니다.\n쉽지 않은 순간의 연속이었으나, 따라가다보니 완성이 되어 떨떠름하기도 했고 끝나고 나선 뿌듯한 마음이 컸습니다. 이번 데모데이에서는 강제성이 부여되는 점이 가장 큰 장점 같습니다. 주변 사람들에게도 UMC의 데모데이 해커톤을 추천하고 싶습니다.",
      },
      {
        id: 2,
        nickname: "푸딩",
        name: "원준영",
        part: "NODE.JS",
        explain:
          "자격증 정보 데이터화를 위해 총 92개의 자격증 정보를 크롤링하거나 정리하여 데이터베이스에 저장하는 작업을 수행했습니다. 이 과정에서 데이터의 일관성을 유지하고, 중복 및 불필요한 데이터를 제거하여 보다 효율적인 구조로 정리했습니다. 또한, 자격증별 퀴즈 데이터를 수집 및 정리하여 데이터베이스에 저장할 수 있도록 구조화하였으며, 객관식, OX, 받아쓰기 등 다양한 퀴즈 유형에 맞춰 데이터 처리 방식을 고려하며 설계했습니다. 데이터 활용을 위해 자격증 정보를 효율적으로 가져올 수 있도록 홈 화면 API를 설계 및 구현하였으며, RESTful API 원칙을 준수하면서 필요한 데이터만 반환하도록 최적화했습니다. 사용자의 요구에 맞춰 퀴즈 정보를 제공할 수 있도록 퀴즈 API를 설계 및 구현했으며, 특정 자격증 ID, 퀴즈 유형, 과목 등의 조건을 기반으로 필터링하여 데이터를 제공할 수 있도록 설계했습니다. 마지막으로, 자격증 및 퀴즈 데이터를 저장할 데이터베이스 구조를 설계하면서, 확장성(새로운 자격증 및 퀴즈 추가 가능), 성능(빠른 조회 및 필터링), 데이터 무결성을 고려한 최적화된 스키마를 구축했습니다.\n이번 공각심 팀 데모데이에서 백엔드(Node.js) 팀원으로 참여하며, 프로젝트의 핵심 기능을 설계하고 구현하는 역할을 맡았습니다. 특히 92개의 자격증 정보를 수집하고 정리하는 과정에서 데이터의 일관성을 유지하는 것이 중요한 과제였으며, 사용자 맞춤형 퀴즈 정보를 제공하기 위한 API 설계에서도 많은 고민이 필요했습니다. 또한, 데이터베이스 구조를 설계하면서 확장성과 성능을 고려하는 과정에서도 고민이 많았습니다. 이번 프로젝트를 통해 팀원들과 협업하는 과정, 문제를 해결하는 과정, 그리고 실제 서비스화를 고려한 개발 경험을 쌓을 수 있었다는 점이 가장 큰 배움이었습니다. 특히 프론트엔드와의 협업을 통해 API를 설계하고, 요청에 맞춰 기능을 조정하는 과정에서 커뮤니케이션의 중요성을 다시 한번 실감했습니다. 물론 어려움도 있었습니다. 데이터 크롤링 과정에서 예상치 못한 웹사이트 구조 변경으로 인해 데이터를 정제하는 작업을 반복해야 했고, 퀴즈 API 구현 과정에서도 다양한 유형의 문제 데이터를 효과적으로 처리하는 방법을 고민해야 했습니다. 하지만 이러한 문제들을 해결하는 과정에서 더 깊이 있는 기술적 경험을 쌓을 수 있었고, 결국 완성된 API가 실제로 동작하는 모습을 보며 큰 보람을 느낄 수 있었습니다. 이번 프로젝트를 통해 단순한 기능 개발을 넘어, 서비스의 전체적인 구조를 고려하며 개발하는 경험을 할 수 있었고, 백엔드 개발자로서 한층 더 성장할 수 있는 계기가 되었습니다. 이번 데모데이 프로젝트는 저에게 큰 성장과 깨달음을 가져다주었고, 앞으로 개발자로서 더 나아가기 위한 중요한 경험이었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "알림",
      },
      {
        id: 2,
        name: "학습",
      },
      {
        id: 3,
        name: "Android",
      },
    ],
  },
  {
    id: 12,
    type: "7기",
    projectWeb: images["growitWeb"],
    projectMobile: images["growitMobile"],
    projectDetailWeb: images["growitDetailWeb"],
    projectDetailMobile: images["growitDetailMobile"],
    project: "https://github.com/7-umc-GrowIT",
    title: "그로우잇",
    detailExplain:
      "음성 기반 AI로 대화하며, 일기와 마음 챙김 챌린지를 통해 정신 건강을 관리하는 앱 서비스입니다.",
    people: [
      {
        id: 1,
        part: "디자인",
        name: ["고하늘"],
      },
      {
        id: 2,
        part: "서버",
        name: ["박진성", "송진우", "장우진"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "미락",
        name: "고하늘",
        part: "DESIGN",
        explain:
          "GUI 디자인, 캐릭터 디자인, 기획 및 브랜딩, 그리고 UX 컨셉 도출을 담당했습니다.\n프로젝트에서 캐릭터 디자인을 진행해 볼 수 있어서 유익한 시간이었습니다.",
      },
      {
        id: 2,
        nickname: "애플",
        name: "박진성",
        part: "SPRINGBOOT",
        explain:
          "팀원들과 함께 데이터베이스와 API를 설계하고, 개발하였습니다. 또한, GitHub PR과 코드 리뷰를 통해 개발 프로세스를 원활하게 진행하고, 프로젝트 전반의 진행 상황을 관리하였습니다.\n서비스의 핵심 API를 맡게 되면서 많은 어려움이 있었습니다. 특히, 요구사항을 만족하기 위한 구현 기술에 대한 정보가 부족하여 처음에는 막막함을 느꼈습니다. 그러나 점차적으로 문제를 해결해 나가며, 이 과정 자체가 값진 경험으로 남게 되었습니다. 또한, 운 좋게 좋은 팀원들과 함께하게 되어 프로젝트를 성공적으로 마무리할 수 있었습니다.",
      },
      {
        id: 3,
        nickname: "레인",
        name: "송진우",
        part: "SPRINGBOOT",
        explain:
          "Spring Boot 프레임워크를 사용하여 iOS 애플리케이션의 서버를 개발하였으며, AWS EC2, RDS, S3 등을 활용하여 인프라를 구축했습니다. 백엔드 개발을 담당하며 API 설계와 데이터베이스 구축 등을 경험했습니다. 처음에는 어려움도 있었지만, 팀원들과의 소통과 협력을 통해 문제를 하나씩 해결해 나갔습니다. 이론으로만 알고 있던 개념들을 실제 프로젝트에 적용하며, 실질적인 개발 경험을 쌓을 수 있었습니다.\n프로젝트를 진행하면서 가장 인상 깊었던 점은 다양한 배경을 가진 팀원들과 함께 하나의 서비스를 만들어가는 과정이었습니다. 각자의 강점을 살려 효율적으로 업무를 분담하고, 정기적인 회의를 통해 진행 상황을 공유하며 완성도 높은 프로젝트를 만들어갈 수 있었습니다. 이러한 노력 끝에 전시회에서 우수상이라는 값진 결과를 얻을 수 있었습니다. 이번 UMC 활동을 통해 기술적인 학습뿐만 아니라 협업의 중요성도 깊이 깨달았습니다. 다양한 학교의 학생들과 함께한 경험은 서로 다른 관점과 아이디어를 존중하는 태도를 기르는 데 큰 도움이 되었습니다. 이번 활동에서 얻은 경험을 바탕으로 앞으로도 더 발전된 개발자가 되기 위해 노력하겠습니다.",
      },
      {
        id: 4,
        nickname: "지니",
        name: "장우진",
        part: "SPRINGBOOT",
        explain:
          "일기 API와 대화형 AI 챗봇 구현을 담당했습니다.\n처음으로 규모있는 프로젝트를 진행하게 되면서 뜻깊은 경험을 할 수 있었습니다. 여러가지 문제들을 다른 사람들과 함께 고민하고 해결해 나가는 것이 재미있었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "일상",
      },
      {
        id: 2,
        name: "기록",
      },
      {
        id: 3,
        name: "iOS",
      },
    ],
  },
  {
    id: 13,
    type: "7기",
    projectWeb: images["weggWeb"],
    projectMobile: images["weggMobile"],
    projectDetailWeb: images["weggDetailWeb"],
    projectDetailMobile: images["weggDetailMobile"],
    project: "https://github.com/UMCWegg",
    title: "위그",
    detailExplain:
      "자기 주도적 학습이 어려운 MZ 세대를 위한 공부 관리 서비스입니다. 기존의 학문적이고 형식적인 공부 앱에서 벗어나 자유롭고 유쾌한 분위기에서 공부 일정 및 습관을 관리 할 수 있습니다.",
    people: [
      {
        id: 1,
        part: "iOS",
        name: ["김경민", "송승윤", "이재원"],
      },
      {
        id: 2,
        part: "서버",
        name: ["최승재", "홍해담"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "하키",
        name: "김경민",
        part: "IOS",
        explain:
          "홈, 캘린더, 알림 화면 등을 구현했습니다. 이전에는 해보지 않았던 파트를 담당하면서 새로운 경험을 해볼 수 있었고, 특히 홈 화면에서는 여러 정보를 한 눈에 보기 쉽게 요약해야 하는 어려움이 있었지만 잘 극복할 수 있었습니다.\n이번 7기 데모데이는 여러 과제와 더불어 그라운드룰을 정하면서 개발자들끼리 소통을 원활히 할 수 있었고, 버전 관리도 더욱 자세하게 배울 수 있는 경험이 되었습니다.",
      },
      {
        id: 2,
        nickname: "증윤",
        name: "송승윤",
        part: "IOS",
        explain:
          "카메라 인증 및 앱 내 게시물 관련 기능 개발을 담당했습니다. AVCaptureSession을 활용하여 카메라 촬영 및 미리보기 기능을 구현하고, 촬영된 이미지가 서버와 원활하게 연동될 수 있도록 백엔드와 협업했습니다. 또한, 게시물 관리 기능을 맡아 사용자가 사진을 업로드하고 데이터를 효율적으로 관리할 수 있도록 UI 및 네트워크 연동을 개발했습니다. 이 과정에서 백엔드와 지속적으로 소통하며 API 설계 및 연동을 조율했고, iOS 개발 전반에서 팀의 주요 서비스 구현을 책임지며 진행했습니다.\niOS 개발자로서 핵심 기능을 구현하고 팀과 협업하는 과정에서 많은 성장을 경험했습니다. 특히, 카메라 인증 기능과 게시물 관리 기능을 담당하면서 기술적으로 깊이 있는 개발 경험을 쌓을 수 있었습니다. 백엔드와의 긴밀한 협업을 통해 API 설계 및 데이터 연동을 원활하게 진행하였고, 예상치 못한 문제들을 해결하는 과정에서 커뮤니케이션의 중요성을 다시 한번 실감했습니다. 또한, 팀원들과의 협업 속에서 기능 개발뿐만 아니라 문제 해결 능력, 코드 품질 개선, 최적화 방법 등에 대한 다양한 인사이트를 얻을 수 있었습니다.\n프로젝트 진행 중 어려운 순간도 있었지만, 이를 극복하며 성취감을 느낄 수 있었고, 서비스가 점차 완성되어 가는 과정에서 개발자로서의 보람을 크게 느꼈습니다. 앞으로도 이러한 경험을 바탕으로 더욱 성장하며, 팀과의 협업을 중요하게 생각하는 개발자가 되고 싶습니다.",
      },
      {
        id: 3,
        nickname: "델타",
        name: "홍해담",
        part: "SPRINGBOOT",
        explain:
          "게시물, 팔로우, 결제, 친구추천 순위 알고리즘 설계 및 API 구현을 맡았습니다.\n지금까지 진행했던 프로젝트들 중에서 가장 좋은 팀원들을 만나 함께할 수 있어 정말 뜻깊은 경험이었습니다. 실력이 뛰어나다기보다, 친구처럼 끈끈하게 서로 도와주고 이끌어주는 팀 분위기가 인상적이었습니다. 혼자였다면 절대 떠올리지 못했을 많은 아이디어를 얻을 수 있었습니다. 앞으로도 자주 연락하고 지낼 것 같습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "스터디",
      },
      {
        id: 2,
        name: "습관",
      },
      {
        id: 3,
        name: "iOS",
      },
    ],
  },
  {
    id: 14,
    type: "7기",
    projectWeb: images["partnerdWeb"],
    projectMobile: images["partnerdMobile"],
    projectDetailWeb: images["partnerdDetailWeb"],
    projectDetailMobile: images["partnerdDetailMobile"],
    project: "https://github.com/UMC-partNerd",
    title: "partNerd",
    detailExplain:
      "우리의 동아리를 홍보하고, 콜라보레이션 기능을 통해 타 IT 동아리와의 협업 및 프로젝트 인원을 모집할 수 있는 플랫폼입니다.",
    people: [
      {
        id: 1,
        part: "디자인",
        name: ["임서현"],
      },
      {
        id: 2,
        part: "웹",
        name: ["조희연"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "에이치",
        name: "임서현",
        part: "DESIGN",
        explain:
          "IT 동아리 네트워킹 플랫폼에 맞춰 깔끔하고 직관적인 화면을 디자인했습니다. 또한, 공대생을 상징하는 캐릭터를 활용한 굿즈로 홍보를 진행했습니다.\n처음 데모데이를 준비하면서 많은 어려움이 있었지만, 팀원과 함께 힘내서 끝까지 마칠 수 있어 뿌듯했습니다. UMC를 통해 한 걸음 더 성장한 것 같고, 앞으로 더 다양한 활동을 할 수 있도록 원동력을 받은 것 같은 시간이었습니다.",
      },
      {
        id: 2,
        nickname: "조이",
        name: "조희연",
        part: "WEB",
        explain:
          "카카오 로그인 UI 및 API 구현, 사용자 프로필 이미지 S3 연동, 백엔드 서버로 프로필 사진 데이터 전송, 마이페이지 UI 구현 및 API 연결을 맡았습니다.\n학교에서는 졸업 캡스톤 아니면 이런 큰 규모의 프로젝트를 경험해 볼 기회가 적어서, 그 외로 프로젝트를 진행 해 볼 기회가 있어 좋았습니다. 실력이 많이 부족했었기에 바로 프로젝트를 했으면 많이 힘들었을 것 같은데, 학기중에 진행했던 스터디가 프로젝트 수행에 큰 발판이 되었고 덕분에 프로젝트중 어려움을 많이 덜어낼 수 있었다고 생각합니다. 정말 큰 성장을 했던 학기가 되었습니다! 짱~~ ",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "동아리",
      },
      {
        id: 2,
        name: "커뮤니티",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 15,
    type: "7기",
    projectWeb: images["wheredrugWeb"],
    projectMobile: images["wheredrugMobile"],
    projectDetailWeb: images["wheredrugDetailWeb"],
    projectDetailMobile: images["wheredrugDetailMobile"],
    project: "https://github.com/PharmQuest",
    title: "어디약?",
    detailExplain:
      "해외에서 어떤 상비약을 사야할 지 막막한 사람들을 위해, 상비약 정보와 약국 위치를 한 곳에서 제공하는 서비스입니다. 나라별 상비약 정보와 주변 근처 약국 정보를 제공하며, 각 나라별 인기 영양제를 추천해 줍니다.",
    people: [
      {
        id: 1,
        part: "웹",
        name: ["윤혜성"],
      },
      {
        id: 2,
        part: "서버",
        name: ["김준용"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "핸",
        name: "윤혜성",
        part: "WEB",
        explain:
          "이번 프로젝트에서 프론트엔드로, 상비약 리스트 및 약국찾기 화면을 도맡아 구현했습니다.\n 약국찾기 화면에서 구글 맵 API를 연동하며, 기본적인 지도 표시부터 마커 표시, 검색 기능까지 다양한 지도 관련 기능들을 구현했습니다. 기본적인 지도 서비스 개발 역량을 쌓을 수 있는 좋은 기회였습니다.",
      },
      {
        id: 2,
        nickname: "세인트",
        name: "김준용",
        part: "SPRINGBOOT",
        explain:
          "Open API를 활용해 약국 정보를 불러오고, 사용자에게 필요한 데이터를 제공하는 역할을 맡았습니다.\n이번 데모데이에서 저의 목적은 프로젝트의 진행 흐름과, 팀원과의 소통에 대해 이해하는 것이었습니다. 정말 좋은 팀원들을 만나 프로젝트를 원활하고 재미있게 진행할 수 있었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "약국",
      },
      {
        id: 2,
        name: "예방",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 16,
    type: "7기",
    projectWeb: images["travelstarWeb"],
    projectMobile: images["travelstarMobile"],
    projectDetailWeb: images["travelstarDetailWeb"],
    projectDetailMobile: images["travelstarDetailMobile"],
    project: "https://github.com/UMC-TravelStar",
    title: "여행별",
    detailExplain:
      "여행 일지를 간편하게 작성하며 추억과 감정을 기억하고 공유하는 서비스입니다. 일지에 작성한 위치를 기반으로 나만의 행성에 별이 찍히며, 본인 만의 별자리를 생성할 수 있습니다.",
    people: [
      {
        id: 1,
        part: "웹",
        name: ["양인서", "우정혁", "윤상혁"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "이즈",
        name: "양인서",
        part: "WEB",
        explain:
          "로그인, 일지, 랭킹, 캘린더, 페이지의 UI 구현 및 API 연동을 담당했습니다. 특히, 일지 페이지에서 Spotify API를 처음 활용하면서 어려움이 많았지만, 음악이 정상적으로 재생될 때 큰 보람을 느꼈습니다.\n같은 파트 챌린저들과 어려움을 공유하고 함께 도맡아 협업하며 저 또한 많은 것을 배우고 성장할 수 있었습니다. 좋은 팀원들을 만나 즐겁고 편했던 프로젝트였습니다. 여행별 정말 고생 많았어. 다들 짱짱이야~🥰",
      },
      {
        id: 2,
        nickname: "준",
        name: "우정혁",
        part: "WEB",
        explain:
          "행성, 랭킹, 캘린더 페이지의 UI 구현 및 API 연동을 담당했습니다.\n프로젝트 진행하면서 많이 배울 수 있었습니다. 특히 협업 과정에서 팀원들과의 활발한 소통이 곧 좋은 결과물로 이어진다는 것을 느낄 수 있었습니다!",
      },
      {
        id: 3,
        nickname: "앨빈",
        name: "윤상혁",
        part: "WEB",
        explain:
          "회원가입, 마이페이지의 UI 구현 및 API 연동을 담당했습니다.\n저한테 참 유익했던 시간이었습니다. 매주 진행하는 전체 회의 외에도, 프론트 팀원들과 1~2주에 한번씩 대면으로 만나 이슈를 공유하면서 개발을 진행했습니다. 중간에 다른 파트와 소통이 잘 되지 않아서 애를 조금 먹었지만, 그래도 다른 팀원들 덕분에 잘 끝마칠 수 있었습니다. 개발을 하면서 제 부족함을 돌아볼 수 있었고, 프로젝트에서 소통이 얼마나 중요한 지 깨우칠 수 있었던 시간이었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "여행",
      },
      {
        id: 2,
        name: "별자리",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 17,
    type: "7기",
    projectWeb: images["a1Web"],
    projectMobile: images["a1Mobile"],
    projectDetailWeb: images["a1DetailWeb"],
    projectDetailMobile: images["a1DetailMobile"],
    project: "https://github.com/UMC-7th-A1Grade",
    title: "A1등급",
    detailExplain:
      "막막했던 수학 오답을 조금 더 친숙하게 만들고 효율적으로 제공해주며, 끊임 없이 학생들에게 더 나은 공부환경을 만들어 줍니다. 이처럼 학생들의 수학 공부를 위한 효율적인 공부 도우미 역할을 하는 서비스입니다.",
    people: [
      {
        id: 1,
        part: "디자인",
        name: ["임채현"],
      },
      {
        id: 2,
        part: "웹",
        name: ["송효재"],
      },
      {
        id: 3,
        part: "서버",
        name: ["강다현"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "에리얼",
        name: "임채현",
        part: "DESIGN",
        explain:
          "평소 어려웠던 또는 접근하기 쉽지 않은 수학을 자유롭게 자신만의 노트로 문제를 풀며 필기까지 할 수 있도록 직관적인 UXUI 디자인을 구현하였습니다. 수학이라는 개념을 보다 친숙하게 다가갈 수 있도록 인터랙티브 모션을 활용해서 서비스 뿐만 아니라 수학에 흥미를 돋을 수 있도록 UX를 설계하였습니다. 또한 마치 자신만의 다이어리를 꾸미듯, 자율적으로 자신의 수학노트를 작성할 수 있도록 캐릭터와 함께 매력적인 UI디자인을 진행하였습니다.\n교내뿐만 아니라 타학교 분들과 협업하여, 설계한 화면을 다 구현할 수 있다는 점에서 추천드리고 싶습니다.",
      },
      {
        id: 2,
        nickname: "아라",
        name: "송효재",
        part: "WEB",
        explain:
          "웹 프론트엔드 개발자로 참여하여 구글 로그인, 온보딩, 메인화면을 구현했습니다.\n사실 이렇게 프로젝트에 '개발자'로 참여한 게 처음이었기에 아쉬운 점도 많지만, 큰 성장을 한 거 같습니다. Git과 Github 사용 능력을 많이 키웠다는 게 가장 큰 성장인거 같아요. 또, 개발자의 상황을 더 이해할 수 있는 기획자가 됐다는 것도 큰 자산인거 같습니다. 앞으로는 이번 프로젝트 경험을 살려 더 멋진 기획자가 되는 게 계획입니다.",
      },
      {
        id: 3,
        nickname: "현다",
        name: "강다현",
        part: "SPRINGBOOT",
        explain:
          "로그인, 사용자 정보 관리, 동시성 문제 해결, 그리고 성능 개선을 위한 캐싱 작업을 중심으로 맡아 진행했습니다.\nUMC의 체계적인 커리큘럼 덕분에 단순히 기능을 구현하는 것을 넘어서 스프링 어노테이션이 어떻게 동작하는지 깊이 있게 이해할 수 있었습니다. 이전에는 스프링 프레임워크가 제공하는 기능을 기계처럼 습관적으로 사용했다면, UMC에서 스터디 후 데모데이를 준비하고부터는 그 배경과 원리를 알고 활용하게 되어 개발이 즐겁다는 감정을 다른 때보다 자주 느꼈던 것 같습니다. 그러다 보니 자연스럽게 개발에 대한 주도적인 태도를 기를 수 있었고, 단순히 주어진 기능을 구현하는 것을 넘어 설계와 최적화까지 고민하는 습관이 생겼습니다. 또한, UMC에서는 중앙에서 최소한의 자료만을 제공하며 스스로 학습하는 것을 중요시하기 때문에, 타 스터디에서 공부할 때보다 더 깊이 몰입하고 학습할 수 있었습니다. 덕분에 문제를 스스로 해결하는 능력을 키울 수 있었고, 개발자로서 더욱 성장할 수 있었습니다. 데모데이를 준비하는 과정에서도 TF 팀이 정기적으로 피드백을 제공하고 프로젝트 진행 상황을 점검해 주셔서 체계적으로 준비할 수 있었고, 덕분에 데모데이도 원활하게 진행할 수 있었습니다. 특히 같은 목표를 가진 다양한 학교 사람들과 협업하며 단순한 기술적 성장뿐만 아니라 커뮤니케이션 역량도 함께 키울 수 있었던 소중한 시간이었습니다. UMC에서의 경험은 단순한 기술 학습을 넘어 개발자로서의 사고방식을 정립하는 계기가 되었습니다. 앞으로도 UMC에서 배운 자기주도적 학습 태도를 바탕으로 계속 성장해 나가고 싶습니다!! 😆😀",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "공부",
      },
      {
        id: 2,
        name: "수학",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 18,
    type: "7기",
    projectWeb: images["farmonWeb"],
    projectMobile: images["farmonMobile"],
    projectDetailWeb: images["farmonDetailWeb"],
    projectDetailMobile: images["farmonDetailMobile"],
    project: "https://github.com/Farm-On",
    title: "FarmON",
    detailExplain:
      "농업을 변화시키는 새로운 연결고리인 디지털 솔루션입니다. 농업 데이터 기반으로 맞춤형 컨설팅을 제공하고, 전문가와 농업인 매칭 시스템을 통해 연결해주는 서비스를 제공합니다. 또한 디지털 커뮤니티로 실시간 농업 트렌드를 공유할 수 있습니다.",
    people: [
      {
        id: 1,
        part: "기획",
        name: ["이경록"],
      },
      {
        id: 2,
        part: "웹",
        name: ["양정우", "장수희"],
      },
      {
        id: 3,
        part: "서버",
        name: ["박미정"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "로키",
        name: "이경록",
        part: "PM",
        explain:
          "개발 목표설정(사업목표, MVP, IA, 와이어프레임 등)과 전반적인 프로젝트 관리(디자인점검, 개발일정관리 및 점검, 예산관리, 데모데이 준비 등)를 담당했습니다.\nUMC는 저를 객관적으로 돌아볼 수 있게 해준 활동이었습니다. 저의 강점을 확인할 수 있었고, 동시에 부족한 점도 깨닫는 소중한 경험이었습니다. UMC 활동을 통해 여러분도 스스로를 객관적으로 돌아보고, 부족한 점을 보완하는 계기가 되었으면 좋겠습니다.",
      },
      {
        id: 2,
        nickname: "히히",
        name: "장수희",
        part: "WEB",
        explain:
          "프로젝트 내에서 프론트엔드 팀장을 담당하였습니다.\n다양한 학교의 사람들과 함께 팀 프로젝트를 하니 신기했습니다. 10주간 했던 학교의 웹 스터디가 많은 도움이 되었던 것 같습니다. 한성대 7기 웹 체고-❤️",
      },
      {
        id: 3,
        nickname: "엠제이",
        name: "박미정",
        part: "SPRINGBOOT",
        explain:
          "팀 내에서 백엔드 팀장을 맡아 전체적인 개발 방향을 주도하였습니다. 채팅 및 검색 기능을 담당하여 개발하였고, CI/CD 파이프라인을 구축하여 서버 배포 환경을 구성하였습니다.\n워크북에서 학습한 내용을 프로젝트에 직접 적용하면서 해당 내용을 한층 더 깊이 이해하고 구현 경험을 쌓을 수 있었습니다. 또한 팀원들과 여러 구현 방법, 최적의 해결책 등에 대해 의견을 나누는 과정을 통해 부족한 점을 보완할 수 있었습니다. 데모데이를 통해 한층 더 성장할 수 있었고, 개발 뿐만 아니라 다양한 분야의 팀원들과 협업하며 소통의 중요성과 의견 조율 방법 등을 배우게 되어 뜻깊은 경험이었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "농산물",
      },
      {
        id: 2,
        name: "컨설팅",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 19,
    type: "8기",
    projectWeb: images["linkuWeb"],
    projectMobile: images["linkuMobile"],
    projectDetailWeb: images["linkuDetailWeb"],
    projectDetailMobile: images["linkuDetailMobile"],
    project: "https://github.com/LinkYou-2025",
    title: "링큐",
    detailExplain:
      "사용자의 라이프스타일에 맞춰 AI가 링크를 요약·분류·추천하고, 맞춤형 큐레이션을 제공하는 앱 서비스입니다.",
    people: [
      {
        id: 1,
        part: "서버",
        name: ["김하진"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "핑크터틀",
        name: "김하진",
        part: "SPRINGBOOT",
        explain:
          "회원가입 및 로그인(JWT 인증) 기능을 구현했습니다.\n프로젝트를 진행하며 GitHub 이슈 관리와 코드 리뷰를 경험하면서 협업의 중요성을 배우고, 함께 문제를 해결하는 능력을 기를 수 있었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "AI",
      },
      {
        id: 2,
        name: "정보",
      },
      {
        id: 3,
        name: "Android",
      },
    ],
  },
  {
    id: 20,
    type: "8기",
    projectWeb: images["commitWeb"],
    projectMobile: images["commitMobile"],
    projectDetailWeb: images["commitDetailWeb"],
    projectDetailMobile: images["commitDetailMobile"],
    project: "https://github.com/umc-commit",
    title: "코밋",
    detailExplain:
      "서브컬처 기반 커미션 거래를 중개하는 앱 서비스입니다. 커미션 신청자는 스타일과 목적에 맞는 작가를 쉽고 빠르게 찾을 수 있고, 커미션 작가는 신뢰 기반으로 작업을 진행하고 체계적으로 관리할 수 있습니다.",
    people: [
      {
        id: 1,
        part: "서버",
        name: ["배건우"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "폴",
        name: "배건우",
        part: "NODE.JS",
        explain:
          "채팅, 포인트, 결제 기능 API 개발, 배포를 담당했습니다.\n기획부터 개발, 배포까지의 전 과정을 경험할 수 있었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "중개",
      },
      {
        id: 2,
        name: "커미션",
      },
      {
        id: 3,
        name: "Android",
      },
    ],
  },
  {
    id: 21,
    type: "8기",
    projectWeb: images["teumteumWeb"],
    projectMobile: images["teumteumMobile"],
    projectDetailWeb: images["teumteumDetailWeb"],
    projectDetailMobile: images["teumteumDetailMobile"],
    project: "https://github.com/UMC8-TeumTeum",
    title: "틈틈",
    detailExplain:
      "일상의 빈틈을 찾아, 나만의 리듬에 맞춰 만족감 있는 하루로 채워나갈 수 있도록 돕는 앱 서비스입니다. 무의미하게 흘러가던 틈 사이를 의미 있게 채워 하루의 만족도를 높이고, 계획 없이 시작할 수 있도록 나에게 맞는 활동을 제안합니다.",
    people: [
      {
        id: 1,
        part: "안드로이드",
        name: ["장우진", "최희원"],
      },
      {
        id: 2,
        part: "서버",
        name: ["강다현", "박진성"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "지니",
        name: "장우진",
        part: "ANDROID",
        explain:
          "소셜 로그인 연동, 온보딩, 마이페이지, 피드, 홈화면 시간표 UI 제작 및 API 연동을 담당했습니다.\n프로젝트를 진행하며 여러가지 기술들을 익힐 수 있었고 팀원분들께서도 많은 도움을 주셨습니다. 무엇보다 틈틈 팀원분들이 한명도 빠짐없이 열심히 해주셔서 만족스러운 결과물이 나온 것 같아 기뻤습니다!",
      },
      {
        id: 2,
        nickname: "현다",
        name: "강다현",
        part: "SPRINGBOOT",
        explain:
          "AWS 기반 인프라 설계 및 CI/CD 파이프라인 구축을 담당했고, Prometheus·Grafana·CloudWatch를 통한 모니터링 환경을 구현하여 안정적인 서비스 운영에 기여했습니다.\n지금까지 진행했던 프로젝트는 단순 기능 구현이였던 경우가 대부분이였습니다. 그러나 데모데이 프로젝트를 진행하며 단순한 개발을 넘어 인프라 설계와 배포, 모니터링까지 경험할 수 있어 큰 성장을 느꼈습니다. 특히 CI/CD와 모니터링 환경을 직접 구축하면서 안정적인 서비스 운영의 중요성을 체감했고 팀원들과 협력하며 DevOps적인 시각을 넓힐 수 있었습니다.",
      },
      {
        id: 3,
        nickname: "애플",
        name: "박진성",
        part: "SPRINGBOOT",
        explain:
          "Spring Security와 JWT 기반의 소셜 로그인 인증 및 온보딩 API를 주로 담당하였습니다.\n이번 기수에는 시니어 코스로 UMC에 참여하게 되어, SpringBoot에 대한 깊이있는 이해와 완성도 있는 프로젝트를 목표로 하였습니다. 워크북 개념을 더욱 꼼꼼하게 이해하고 체화하기 위해 성실하게 스터디에 임하였고, 이를 바탕으로 실제로 발생할 수 있는 다양한 상황들까지 고려하며 프로젝트를 개발하였습니다. 덕분에 서비스 전체 흐름과 안정성을 고려하는 개발 습관을 기를 수 있었고, 문제 해결 과정에서 팀원과 소통하며 다양한 경험을 쌓았습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "시간관리",
      },
      {
        id: 2,
        name: "계획",
      },
      {
        id: 3,
        name: "Android",
      },
    ],
  },
  {
    id: 22,
    type: "8기",
    projectWeb: images["eatPicWeb"],
    projectMobile: images["eatPicMobile"],
    projectDetailWeb: images["eatPicDetailWeb"],
    projectDetailMobile: images["eatPicDetailMobile"],
    project: "https://github.com/EatPic",
    title: "EatPic",
    detailExplain:
      "사진 한 장으로 식사를 기록하고, 건강한 루틴을 실처하는 식습관 챌린지 앱 서비스입니다. 간단하게 기록 가능하며, 기록된 식사에 대해 AI가 건강 피드백과 대체 제안을 제공합니다. 또한, 서로 오늘 먹은 식사를 공유하고, 반응을 보내면 소통할 수 있습니다.",
    people: [
      {
        id: 1,
        part: "iOS",
        name: ["송승윤", "이재원"],
      },
      {
        id: 2,
        part: "서버",
        name: ["김준호"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "증윤",
        name: "송승윤",
        part: "IOS",
        explain:
          "UMC 8기 EatPic이라는 프로젝트에 참여하였습니다. 사용자와 함께 식사기록과 맛집을 기록하고 각 식당의 위치와 레시피 링크를 공유하며 커뮤니티를 형성하는 프로젝트입니다. 저는 프론트엔드 iOS에서 가담하였고 프로젝트를 진행하며 로그인 플로우와 회원가입 플로우 UI 및 기능 개발에 참여 하였습니다. 또한 홈 탭 API 연결, 커뮤니티 탭 API 연결 보조 및 어플리케이션 전반적인 버그와 오류 그리고 프로젝트 전반의 리팩토링을 도맡았습니다. 팀원들이 호흡을 맞추어서 함께하였기에 명확한 기여도는 산정하기 쉽지 않지만 프로젝트 전반적으로 여러 탭에 가담 했으며 로그인플로우 100퍼센트 홈화면 API 연결 80% 사용자 관련 API 연결 50% 다양한 역할을 수행하였고 책임감있는 팀원으로 남고자 열심히 노력하여 프로젝트를 마무리 하였습니다.\n지난 7기부터 8기까지 이어 프로젝트를 진행하며 많은것들을 배우고 성장하였습니다. 7기에는 개발과 협업이 미숙하여 많이 방황하고 혼자서 힘들어했던 경험이 있습니다. 하지만 시간이 지나고 힘들어 할때마다  팀원이 이끌어주었으며 개발에 대해 날이 갈수록 익숙해 지다보니 어느새 프로젝트를 참여하고 해당 프로젝트에 많은 기여를 하고 있음을 느꼈습니다. 8기에는 기능 개발에 급급하지 않고 개발에 흥미를 느끼고 소프트웨어 설계에 대한 지식이 쌓이고 이를 적용하는 과정들이 매우 흥미로웠습니다. 단순히 기능 개발을 하는것이 아닌 데이터의 흐름을 팀원들과 서로 토론하며 해당 프로젝트의 파이프라인을 어떻게 구축하고 설계해야 이로울지 얘기하는 과정이 매우 재밌엇습니다. 비록 진행되는 워크북이나 프로젝트를 진행하는 과정들이 순탄하지는 않았지만 오히려 무지한 상태에서 새로운것들을 계속해서 접하다보니 많은것들을 배웠던것같습니다. 8기에는 7기보다 행사 규모도 더 컸으며 워크북 내용 또한 너무 만족하였습니다. 다음 9기때도 지속적으로 발전할 UMC를 응원하겠습니다. 감사합니다.",
      },
      {
        id: 2,
        nickname: "나르",
        name: "김준호",
        part: "SPRINGBOOT",
        explain:
          "EatPic의 커뮤니티 기능과 관련된 DB 설계 및 API 작성을 담당했습니다. 이외에 프로젝트 진행 과정에서 생기는 여러 오류들을 해결했습니다.(깃허브 액션 워크 플로우에서 application.yml 파일 생성 조건에 PR 빌드 시 조건이 제외되어 깃허브 액션 실행시 생겼던 오류 발견, 로컬에서 리프레시 토큰 테스트 시 정상 작동하지만 배포 환경에서 오류가 생기는 상황에서 로컬에서는 환경변수가 설정되어 문제가 없었지만 배포 환경에서 토큰 유효시간 설정값이 올바르지 않음을 발견, 3차 과제에서 N+1문제 해결을 위한 쿼리 최적화 등)\n워크북을 통해 배웠던 API 명세서 설계와 쿼리 작성 같은 주제들이 데모데이 프로젝트를 진행하면서 왜 중요한지 몸소 체감할 수 있는 좋은 경험이었습니다. 또한 프로젝트 과정에서 마주한 다양한 문제들을 해결해 나가며 스스로 한층 더 성장했음을 느낄 수 있었고, 기술적인 부분뿐만 아니라 협업 측면에서도 많은 것을 배울 수 있었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "식단",
      },
      {
        id: 2,
        name: "건강",
      },
      {
        id: 3,
        name: "iOS",
      },
    ],
  },
  {
    id: 23,
    type: "8기",
    projectWeb: images["nookWeb"],
    projectMobile: images["nookMobile"],
    projectDetailWeb: images["nookDetailWeb"],
    projectDetailMobile: images["nookDetailMobile"],
    project: "https://github.com/UMC-NOOK",
    title: "NOOK",
    detailExplain:
      "아늑하고 조용한 독서 공간인 작은 서재를 디지털 기기에 구현하는 것을 목표로 한 웹 서비스입니다. 사용자는 시공간의 제약 없이 자신만의 책장을 만들고, 독서 감상을 기록하고, 마치 독서 모임에 참여한 듯 AI와 대화를 통해 사고를 확장할 수 있어 바쁜 일상 속에서도 디지털 리딩 누크를 통해 특별한 독서 활동을 경험할 수 있습니다.",
    people: [
      {
        id: 1,
        part: "웹",
        name: ["우정혁"],
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "AI",
      },
      {
        id: 2,
        name: "독서",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 24,
    type: "8기",
    projectWeb: images["dontTouchWeb"],
    projectMobile: images["dontTouchMobile"],
    projectDetailWeb: images["dontTouchDetailWeb"],
    projectDetailMobile: images["dontTouchDetailMobile"],
    project: "https://github.com/Money-Touch",
    title: "돈터치",
    detailExplain:
      "지출 내역을 공유하고, 평가 받으며 소비를 자제할 수 있도록 도와주는 SNS형 소비 관리 웹 서비스입니다. 소비 피드를 공유하고, 랜덤 소비 미션 카드 및 잔소리 서비스를 통해 사용자의 소비 습관 개선을 유도합니다.",
    people: [
      {
        id: 1,
        part: "웹",
        name: ["양인서", "윤상혁"],
      },
      {
        id: 2,
        part: "서버",
        name: ["박미정", "유진"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "이즈",
        name: "양인서",
        part: "WEB",
        explain:
          "로그인, 회원가입, 온보딩 테스트 UI 개발 및 API 연동을 담당했습니다.\n웹앱 UI를 구성하는 과정에서 초기 세팅부터 쉽지 않았습니다. 특히 새로 배운 TailwindCSS로 스타일링을 하다 보니, 익숙했던 styled-components와는 다른 방식이라 적응하는 데 어려움이 있었습니다. 이번 프로젝트에서는 그동안 프론트엔드에서만 구현해보던 카카오톡 소셜 로그인을 백엔드와 직접 API 연동해볼 수 있었던 점이 큰 경험이 되었고, 사용자에게 온보딩 테스트를 제공하여 소비 MBTI를 확인할 수 있게 만든 것도 의미 있었습니다. 힘든 점도 많았지만, 팀원들과의 적극적인 소통 덕분에 잘 극복할 수 있었습니다. 특히 이번 경험을 통해 백엔드와의 협업과 소통이 얼마나 중요한지 깊이 체감할 수 있었습니다. 무엇보다 새벽 늦게까지 함께 고생해준 팀원들에게 진심으로 감사의 마음을 전합니다. 돈터치 팀 짱짱! 모두 정말 수고 많았어요. 🙌",
      },
      {
        id: 2,
        nickname: "앨빈",
        name: "윤상혁",
        part: "WEB",
        explain:
          "가계부 UI 개발과 API 연동을 담당했습니다.\n이번이 세 번째 데모데이였지만, TailwindCSS를 처음 도입하는 프로젝트라 초반에는 낯설고 어려웠습니다. 그래서 처음에는 styled-components로 개발을 시작했다가, 도중에 Tailwind로 전환하면서 새로운 스타일링 방식에 적응하게 되었습니다. 또한 루틴 등록 전 이미지를 등록 후 화면에서 불러오는 등 다양한 API 연동 경험을 통해 많은 것을 배울 수 있었습니다. 처음 함께하는 팀원들이 많아 소통에 어려움이 있을까 걱정했지만, 모두 열정적으로 참여해 주셔서 오히려 저에게 큰 동기부여가 된 시간이었습니다.",
      },
      {
        id: 3,
        nickname: "엠제이",
        name: "박미정",
        part: "SPRINGBOOT",
        explain:
          "팀 내에서 백엔드 팀장을 맡았고 가계부 관련 기능(예산, 소비 루틴, 소비 기록 등)을 구현하였으며, CI/CD를 담당하여 서버 배포 환경을 구축했습니다.\n팀원들과 소통하고 피드백을 주고받으며 “이런 방식으로도 구현할 수 있구나”, “내가 이런 부분을 놓치고 있었구나”라는 점을 배울 수 있었습니다. 또한 기능 구현 과정에서 프론트엔드 분들과의 통신 오류를 겪으며, 다양한 상황을 더욱 꼼꼼히 고려해 기능을 구현해야 한다는 점을 깨달았습니다. 데모데이를 준비하고 수행하는 과정에서 제 부족한 점을 돌아볼 수 있었고, 이를 계기로 더 반성하고, 협업에서 필요한 올바른 태도를 배울 수 있었습니다. 돈터치 수고하셨습니다~🤑👍",
      },
      {
        id: 3,
        nickname: "지니",
        name: "유진",
        part: "SPRINGBOOT",
        explain:
          "스프링부트 파트로 피드 관련, 마이페이지 관련, 알림 관련 기능을 맡았습니다.\n이번 프로젝트는 제가 처음으로 백엔드, 프론트엔드, 기획, 디자인을 나눠서 다양한 사람들과 협업을 해본 경험이었습니다. 각자의 역할이 분명히 나뉘어 있다 보니 프로젝트가 더 체계적이고 완성도 있게 진행될 수 있었던 것 같습니다. 무엇보다 실제로 동작하는 서비스를 직접 만들어냈다는 점이 굉장히 재미있었고, 또 큰 뿌듯함을 느낄 수 있었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "지출",
      },
      {
        id: 2,
        name: "소비",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 25,
    type: "8기",
    projectWeb: images["kkukmoaWeb"],
    projectMobile: images["kkukmoaMobile"],
    projectDetailWeb: images["kkukmoaDetailWeb"],
    projectDetailMobile: images["kkukmoaDetailMobile"],
    project: "https://github.com/UMC-8th-kkukmoa",
    title: "꾹모아",
    detailExplain:
      "오프라인 가게의 스탬프와 챌린지를 한 곳에 모아, 쉽고 예쁘게 즐길 수 있게 도와주는 웹 서비스입니다. 분산된 종이 스탬프를 하나의 플랫폼에서 통합 관리하고, 챌린지 기능으로 재미 요소를 강화하여 사용자 참여를 유도합니다. 소상공인 및 사용자가 쉽게 활용 가능한 금액권 시스템을 제공하여, 소상공인은 브랜드 마케팅 수단으로 사용 가능하고, 사용자에게는 혜택을 제공할 수 있습니다.",
    people: [
      {
        id: 1,
        part: "서버",
        name: ["김준용"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "세인트",
        name: "김준용",
        part: "SPRINGBOOT",
        explain:
          "서비스의 주요 기능 중 하나인 스탬프와 쿠폰에 대한 기능을 구현했습니다.\n듬직하고 좋은 팀원들을 만나 즐겁게 프로젝트를 진행할 수 있었고, 팀으로써 프로젝트를 진행하며 팀원들에게서 좋은 영향을 많이 받아갈 수 있었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "스탬프",
      },
      {
        id: 2,
        name: "소상공인",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 26,
    type: "8기",
    projectWeb: images["photoRyWeb"],
    projectMobile: images["photoRyMobile"],
    projectDetailWeb: images["photoRyDetailWeb"],
    projectDetailMobile: images["photoRyDetailMobile"],
    project: "https://github.com/DearGraduate",
    title: "PHOTO:RY",
    detailExplain:
      "온라인에서 쉽게 편지를 작성하고, 오프라인(포토 앨범 디자인)으로 다운로드가 가능한 앨범 제작 웹 서비스입니다. 나만의 앨범을 만들고 링크를 통해 공유할 수 있으며, 포토 앨범 형식의 PDF로 다운 받아 보관할 수 있습니다.",
    people: [
      {
        id: 1,
        part: "기획",
        name: ["송효재"],
      },
      {
        id: 2,
        part: "웹",
        name: ["임성훈", "조희연"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "아라",
        name: "송효재",
        part: "PLAN",
        explain:
          "저는 포토리 서비스의 PM으로서 서비스 기획과 프로젝트 전 과정 매니징을 담당했습니다. 먼저 기획자로서 서비스 초기 단계에서 포토리의 아이디어를 발굴하고, 이를 구체화한 기획서를 작성했습니다. 그리고 UX(사용자 경험)를 고려한 와이어프레임을 설계하고, 개발팀과의 원활한 소통을 위해 화면설계서를 제작했습니다. 디자이너와 긴밀히 협업하여 초기 와이어프레임을 실제 개발 가능한 GUI 뷰로 발전시켰습니다. 완성된 화면설계서를 바탕으로 개발팀에게 요구사항을 명확히 전달하고, 개발 과정에서 발생하는 이슈들을 지속적으로 관리했습니다. 프로젝트 관리 측면에서는 Notion, Figma, 채널톡, Discord 등 다양한 협업 도구를 도입하여 효율적인 업무 환경을 구축했습니다. 매주 정기 회의를 주도하여 팀원 간 소통을 원활히 하고, 프로젝트 진행 상황을 체계적으로 관리했습니다.\n 먼저, 부족한 PM이지만 믿고 따라와준 팀원들에게 고맙다는 말을 하고 싶습니다. 저희 팀은 지부에서도 유명한 분위기 좋은 팀이었는데요! PM으로서 이렇게 좋은 팀원들을 만날 수 있었다는 게 너무나 큰 행복과 행운이었던 거 같습니다. 멋진 팀원들과 즐거운 프로젝트 같이 할 수 있어서 너무 좋았습니다~! 처음 만났던 PM데이부터, 데모데이까지 다들 만나서 너무 행복했습니다. 사랑해요 포토리 멤버들~! 마지막으로, 저희는 코드 리팩토링 이후 스프린트를 통해 실제 운영 서비스로 만들 예정입니다. 앞으로도 포토리 많은 관심과 사랑 부탁드립니다. 감사합니다!",
      },
      {
        id: 2,
        nickname: "리암",
        name: "임성훈",
        part: "WEB",
        explain:
          "리엑트, 타입스크립트, 테일윈드를 활용하여 프론트엔드 개발을 했습니다. 홈, 로그인 UI/UX/API연동 개발, 앨범 페이지 UI/UX 개발을 담당했습니다.\n학기 동안 공부한 내용을 프로젝트에 직접 활용하며 기술을 익힐 수 있어서 좋았습니다. 10명이 한 팀으로 이루어지는 협업을 처음 해보며 많은 것을 배울 수 있었습니다. 같은 프론트원과의 협업 능력, 다른 파트 개발자와의 협업 능력, PM, 디자이너와 같은 비개발자 팀원과의 협업 능력이 굉장히 중요하다는 것을 배웠습니다. 추가로, 코드나 로직 같은 시스템 아키텍처를 생각하고 관리하는 역할이 매우 중요하다는 것도 알 수 있었습니다. UMC를 통해서 쉽게 하기 어려운 경험을 할 수 있어서 매우 좋았습니다. 감사합니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "앨범",
      },
      {
        id: 2,
        name: "롤링페이퍼",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 27,
    type: "8기",
    projectWeb: images["myFitWeb"],
    projectMobile: images["myFitMobile"],
    projectDetailWeb: images["myFitDetailWeb"],
    projectDetailMobile: images["myFitDetailMobile"],
    project: "https://github.com/UMC-MyFit",
    title: "마핏",
    detailExplain:
      "스타트업/창업을 위한 쉽고 간편한 리크루팅 웹 서비스입니다. 빠른 팀원 매칭이 가능하며, 틀에 맞추기 보다 나의 틀이 필요한 사람들과 일할 수 있도록 도와줍니다. 딱딱한 절차에서 벗어난 부담없는 구인/구직 문화를 만들며, 인스타에서 사적인 팔로우 하듯 재밌고 간편하게 공적 네트워킹을 할 수 있습니다.",
    people: [
      {
        id: 1,
        part: "서버",
        name: ["채민수"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "라트로",
        name: "채민수",
        part: "NODE.JS",
        explain:
          "Node.js 플랫폼을 이용해서 피드, 구인 공고 등 서비스의 API를 설계 및 개발했습니다. 또한 관계형 데이터베이스의 설계와 RDS, S3, EC2등 AWS 클라우드 서비스를 이용해서 배포 서버 인프라를 구축했고 CI/CD 파이프라인을 구축했습니다.\n처음으로 PM, 디자이너, 프론트엔드 등 다양한 파트원들과 협업을 하게 되어서, 우여곡절도 많았지만 커뮤니케이션을 통해서 각 파트의 작업이 하나로 결합되면서 완성도 높은 프로젝트를 완성하는 뜻 깊은 경험을 했습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "창업",
      },
      {
        id: 2,
        name: "구인/구직",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 28,
    type: "8기",
    projectWeb: images["banddyWeb"],
    projectMobile: images["banddyMobile"],
    projectDetailWeb: images["banddyDetailWeb"],
    projectDetailMobile: images["banddyDetailMobile"],
    project: "https://github.com/UMC-Banddy",
    title: "밴디",
    detailExplain:
      "비슷한 음악 취향을 공유하는 사람과 연결되는 AI 기반 밴드 매칭 웹 서비스입니다. 좋아하는 음악이 겹치는 사람과 교류하고, 비슷한 음악 취향을 가진 사람과 합주할 수 있습니다. 또한 나의 공연을 홍보하고, 다른 밴드의 공연을 보러갈 수 있습니다.",
    people: [
      {
        id: 1,
        part: "웹",
        name: ["박세웅"],
      },
      {
        id: 2,
        part: "서버",
        name: ["전종현"],
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "AI",
      },
      {
        id: 2,
        name: "음악",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 29,
    type: "8기",
    projectWeb: images["myMediWeb"],
    projectMobile: images["myMediMobile"],
    projectDetailWeb: images["myMediDetailWeb"],
    projectDetailMobile: images["myMediDetailMobile"],
    project: "https://github.com/My-Medi",
    title: "마이메디",
    detailExplain:
      "20~30세대가 건강검진 수치를 쉽게 이해하고, 질환을 예방하도록 돕는 헬스케어 웹 서비스입니다. 내 건강검진 데이터와 건강검진 공공데이터 기반 비교로 건강 위험도를 체크하고, 맞춤형 의료 콘텐츠를 제공 및 건강에 따른 병원 1초 예약이 가능합니다. 또한, 어려운 의학 용어를 MZ 눈높이에 맞는 쉬운 해설로 건강 행동 변화를 유도합니다.",
    people: [
      {
        id: 1,
        part: "웹",
        name: ["원준영"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "푸딩",
        name: "원준영",
        part: "WEB",
        explain:
          "Web 팀장을 담당했습니다.\n이 프로젝트를 진행하면서 웹(프론트엔드) 개발자로써 더욱 성장하고 많은 것을 배워갔다고 생각합니다. 단순히 '코딩실력이 늘었다' 보다는 팀원들과 소통하고 문제를 조율하며, 프로젝트를 순차적으로 진행해나가는 것에 대해 많이 느끼고 성장했습니다. 사용자 경험 측면에서는 건강관리 앱에서 정보의 명확성과 접근성이 얼마나 중요한지 깨달았습니다. 위험부터 안심까지의 직관적인 색상 체계와 게이지 차트, 아이콘을 통한 시각적 피드백이 사용자가 복잡한 의료 정보를 쉽게 이해할 수 있도록 도와주는 것을 확인했습니다. 또한 의료 데이터의 민감성을 고려한 보안과 프라이버시 보호의 중요성도 체감했습니다. 기술적으로는 TypeScript를 활용한 타입 안정성, React Query를 통한 서버 상태 관리, Tailwind CSS로 일관된 디자인 시스템을 구축하는 과정에서 많은 성장을 경험했습니다. 백엔드 팀과의 협업을 통해 API 설계부터 에러 처리, 성능 최적화까지 전반적인 개발 과정을 이해할 수 있었습니다. 가장 인상 깊었던 것은 사용자 중심 사고의 중요성이라고 느꼈습니다. 의료 지식이 부족한 일반 사용자들이 복잡한 의료 용어를 쉽게 이해할 수 있도록 시각적 요소와 직관적인 인터페이스를 제공하는 것이 핵심이었습니다. 이 프로젝트를 통해 단순한 코딩 작업을 넘어서 사람들의 건강과 삶의 질 향상에 기여할 수 있는 의미 있는 개발 경험을 할 수 있었고, 헬스테크 분야에 대한 깊은 관심을 가지게 되었습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "건강",
      },
      {
        id: 2,
        name: "공공데이터",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
  {
    id: 30,
    type: "8기",
    projectWeb: images["ekecWeb"],
    projectMobile: images["ekecMobile"],
    projectDetailWeb: images["ekecDetailWeb"],
    projectDetailMobile: images["ekecDetailMobile"],
    project: "https://github.com/EKEC-crew",
    title: "EKEC",
    detailExplain:
      "성향 맞춤 모임 매칭 웹 서비스로, 누구나 쉽게 시작하고, 활발한 커뮤니티를 만들어가는 곳입니다. 웹 전반에 흩어진 다양한 모임 모집글을 한 곳에 모아 통합 정보 허브를 구축하였으며, 사람의 성향 별로 맞는 모임을 추천합니다. 모임 활동 내역과 참여 후기 데이터를 투명하게 공개해 신뢰를 확보하고, 모임 생성부터 일정 관리, 알림 설정까지 통합적으로 관리하는 워크플로우를 제공합니다.",
    people: [
      {
        id: 1,
        part: "웹",
        name: ["유상완", "임혜미", "정동열"],
      },
    ],
    feel: [
      {
        id: 1,
        nickname: "바나",
        name: "유상완",
        part: "WEB",
        explain:
          "해당 프로젝트 내에서 프론트엔드 팀장을 담당하였습니다. 팀장으로서 기본 프로젝트 세팅 및 타 파트의 팀원과의 소통을 이끌었으며 40% 정도의 API 연결을 담당했습니다.\n타인과 함께하는 첫 프로젝트였습니다. 팀 구성원 모두가 저와 같은 첫 협업 및 첫 프로젝트인 사람들이었기 때문에 부족하지만 더욱 책임감 가지고 노력할 수 있었습니다. 스스로 더 잘하기 위해 노력한 시간들이 많은 도움이 되었고 아직 알지 못하는 지식들을 더욱 많이 습득하고 싶습니다.",
      },
    ],
    subTitle: [
      {
        id: 1,
        name: "커뮤니티",
      },
      {
        id: 2,
        name: "매칭",
      },
      {
        id: 3,
        name: "Web",
      },
    ],
  },
];

export default ProjectData;
