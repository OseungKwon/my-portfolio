import p1_1 from "./handpainting/p1_1.png";
import p1_2 from "./handpainting/p1_2.png";
import p1_3 from "./handpainting/p1_3.png";
import p1_4 from "./handpainting/p1_4.png";

import myP from "./import-h/myP.jpg";
import boardP from "./import-h/boardP.jpg";
import mainP from "./import-h/mainP.jpg";
import personalP from "./import-h/personalP.jpg";
import personalP2 from "./import-h/personalP2.jpg";
import registerP from "./import-h/registerP.jpg";

import qnaP from "./qlick/qnaP.png";
import qnalistP from "./qlick/qnalistP.png";
import searchP from "./qlick/searchP.png";

export const projects = [
  {
    id: "handpainting",
    title: "HANDPAINTING",
    explain: `아이들을 대상으로 수화에 대한 긍정적 인식을 높여, 청각 장애인 차별을 없애고자 기획한 프로젝트이다.
머신러닝은 mediapipe의 hands를 가져와 사용했으며, hands 머신러닝을 응용해 손의 상대 위치에 따라 수화 동작을 인식하고, 이를 프로세싱으로 보여주는 웹사이트이다.`,
    contribute: `- 전반적인 **개발 총괄**
- **MediaPipe Hands 머신러닝을 도입**해 손을 인식시키고 수화를 인식할 수 있게 개발
- **p5.js**를 도입해 JavaScript에서 프로세싱을 활용함.
- 팀원의 코드를 리뷰하고 개선하는 [활동](https://velog.io/@wkahd01/%EA%B3%B5%EB%AA%A8%EC%A0%84-%EC%BD%94%EB%93%9C-%EA%B0%9C%EC%84%A0)을 가짐.`,
    grow: `- 국립중앙과학관에서 개최한 [“제 1회 인공지능과 예술 공모전”에서 입선](https://www.aixart.co.kr/html/gallery/gallery-list02.html)함
- JavaScript로 머신러닝을 불러와 사용하는 법을 학습함
- 디자이너와 협업하며, 같이 일정을 맞추고, 소통하는 과정을 거침
- p5.js로 웹상에서 시각적인 디자인을 어떤식으로 표현하는지 학습하고 이를 프로젝트에 적용함`,
    github: "https://github.com/OseungKwon/HandPainting",
    images: [p1_1, p1_2, p1_3, p1_4],
    page: "https://oseungkwon.github.io/HandPainting/",
    tech: "JavaScript, p5.js, mediapipe",
    member: "디자인 2명, 프론트엔드: 2명",
    notion: ""
  },
  {
    id: "importh",
    title: "import-H",
    explain: "누구나 쉽게 활동할 수 있는 스터디 사이트",
    contribute: `- 전체/프론트엔드 **팀장으로써 전반적인 개발 총괄**
- 백엔드와 협업하여 **API 문서 작성 및 DB 설계**
- react-testing-library를 도입해 **unit, E2E 테스트** 진행
- **redux-toolkit**을 사용해 전역 상태와 비동기를 관리함
- 프로젝트를 **기획하고 개발, 배포**까지 진행
    `,
    grow: `- 단순히 라이브러리를 도입하지 않고, [더 나은 개선방안을 고민함](https://velog.io/@wkahd01/import-H-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A4%91%EA%B0%84-%ED%9A%8C%EA%B3%A0).
- 팀원과 [프로젝트](https://www.notion.so/jamong1/Import-H-d4f69f3c20ce4a22a5b0f6ac952da2d2), [API 문서](https://jamong1.notion.site/api-70ce2ec74f684f5b9a992089af468d4f)를 작성하며 협업과 문서 작성의 중요성을 알았으며, API 문서를 적극 사용하며 개발 일정을 10% 앞당김
- Git 브랜치를 기능별로 나누어 사용하며, 문제에 유연하게 대처할 수 있고, 팀원들의 피드백을 빠르게 받을 수 있게 만듦
- JWT을 사용하면서, 인증이 필요한 api 호출할 때마다 중복 작성했던 헤더와 인스턴스를 axios interceptor를 적용해 처리함`,
    github: "https://github.com/import-H/frontend",
    notion:
      "https://www.notion.so/jamong1/Import-H-d4f69f3c20ce4a22a5b0f6ac952da2d2",
    images: [myP, boardP, mainP, personalP, personalP2, registerP],
    page: "",
    tech: "React, redux, react-testing-library",
    member: "프론트엔드: 3명, 백엔드: 1명"
  },
  {
    id: "qlick",
    title: "QLICK",
    explain: `"코드 리뷰를 쉽고 간편하게"
자신의 코드에 명확한 확신이 없는 대상인 신입 개발자들을 타겟으로 한, 온라인 코드리뷰 서비스`,
    contribute: `- toast-ui editor를 도입해 **QnA 페이지**를 개발.
- 태그를 검색해, 해당 태그을 클릭하면 태그를 사용한 게시물이 보여지게 하는 **태그 페이지**를 개발.`,
    grow: `- toast-ui editor를 사용하면서 발생한 에러들을 [해결](https://velog.io/@wkahd01/33)하기 위해 패키지의 코드를 직접 뜯어보고, 어떻게 사용하는것이 효율적인지 고민하는 계기가 됨.
- QLICK 프로젝트를 통해 백엔드와 협업하며 API, 비동기 통신을 공부하고 이를 프로젝트에 적용시킴
- Next.js를 사용하면서 SSR로 인해 window 객체가 불러오지 않는 문제 해결`,
    github: "https://github.com/OseungKwon/QLICK",
    notion: "",
    images: [qnaP, qnalistP, searchP],
    page: "",
    tech: "React, redux, Next.js",
    member: "프론트엔드: 2명, 백엔드: 1명"
  }
];

export const activitys = [
  {
    id: "blog",
    title: "📌 Velog",
    link: "https://velog.io/@wkahd01",
    subtitle: "**지식을 다지고 공유**하기 위한 블로그",
    content: `- 약 90개의 글 작성
- 알고리즘 문제 풀이후 발표하기 위해 작성한 [글들](https://velog.io/@wkahd01/series/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
- 프로젝트를 하며 느꼈던 것들을 [공유](https://velog.io/@wkahd01/series/Team-Project)
- JS,React를 공부하며 얻은 지식들 [공유](https://velog.io/@wkahd01/series/JavaScript)`,
    bgcolor: "rgb(198, 250, 219)"
  },
  {
    id: "study",
    title: "📚 프로그래밍 스터디",
    link: "https://jamong1.notion.site/Import-H-eac161997a7a4e58b5b5c8618023b3d1",
    subtitle: "**함께 성장**하기 위해 만든 스터디",
    content: `- 약 30명이 활동중
- 알고리즘 스터디: 알고리즘 스터디를 개설해 주2회씩 활동
- qna채널: qna채널을 운영하며 서로간의 지식 공유
- TIL 채널: 스터디원마다 1개의 TIL 채널이 있어, 그날 공부한 내용을 간략히 소개및 공유`,
    bgcolor: "rgb(181, 222, 255)"
  },
  {
    id: "github",
    title: "😺 Github",
    link: "https://github.com/OseungKwon",
    subtitle: "**소스 코드** 저장소",
    content: `- 팀 프로젝트: [import-H](https://github.com/import-H), [QLick](https://github.com/OseungKwon/QLICK), [Handpainting](https://github.com/OseungKwon/HandPainting), [BTD](https://github.com/brown-the-duck)등의 프로젝트를 진행함
- 개인 프로젝트: [그래](https://github.com/OseungKwon/gue-rae), [Portfolio](https://github.com/OseungKwon/Portfolio), [Shopping Mall](https://github.com/OseungKwon/Shopping-mall) 등의 프로젝트를 진행함
- 그 외: [알고리즘 문제풀이](https://github.com/OseungKwon/Solved-Algorithm)`,
    bgcolor: "rgb(202, 184, 255)"
  },
  {
    id: "github",
    title: "😺 연구실",
    link: "http://bcnlab.hongik.ac.kr/lab-members.html",
    subtitle: "**광대역 융합 네트워크 연구실** 학부생 (21.01.01~21.12.31)",
    content: `- NDN(Named Data Network) 연구
- SDN(Software Defined Network) 연구
- 외국인 대학원생들과 소통하며 연구를 진행함
- etc: 자율적인 프론트엔드 공부`,
    bgcolor: "rgb(255, 218, 184)"
  }
];
