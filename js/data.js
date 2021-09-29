const qnaList = [
  {
    //FND,U2D,DA,SWT,DM,WD,SA,BND
    q: '회사에 출근했는데 사람들이 모여있다. 그럼 나는...',
    a: [
      { answer: 'a. 슬그머니 근처로 가본다.', type: ['DM', 'SA', 'WD', 'U2D'] },
      { answer: 'b. 우선 내 자리로 간다.', type: ['FND', 'BND', 'DA', 'SWT'] },
    ]
  },
  {
    q: '2. 오늘 신입사원이 왔다!',
    a: [
      { answer: 'a. 바로 다가가 이것저것 물어본다.', type: ['SA', 'BND', 'DA', 'SWT'] },
      { answer: 'b. 궁금하긴 하지만 업무적으로 접촉할 때까지 기다린다.', type: ['FND', 'DM', 'WD', 'U2D'] },
    ]
  },
  {
    q: '3. 금요일, 퇴근 후 피곤함을 달래기 위한 방법은?',
    a: [
      { answer: 'a. 친한 친구들과 치맥!! 캬', type: ['SA', 'DM', 'WD', 'U2D', 'FND'] },
      { answer: 'b. 바로 집으로 직행해서 샤워 후 눕기!', type: ['BND', 'DA', 'SWT'] },
    ]
  },
  {
    q: '4. "OOO씨!" 대표님이 갑자기 나를 부른다면?',
    a: [
      { answer: 'a. 무슨 일이지? 생각하며 대표님한테 달려간다. ', type: ['SA', 'BND', 'DA' ] },
      { answer: 'b. 옆 동료에게 "무슨일 있어?.." 하고 물어본다. ', type: ['DM', 'WD', 'SWT', 'U2D', 'FND' ] },
    ]
  },
  {
    q: '5. "너네 회사 어때?" 하고 친구가 우리 회사에 대해 물어본다면? ',
    a: [
      { answer: 'a. 사람들 관련해서 이야기 한다.', type: ['DM', 'SA', 'WD', 'U2D', 'FND' ] },
      { answer: 'b. 업무 및 운영중인 서비스에 대해 이야기 한다. ', type: ['BND', 'DA', 'SWT']},
    ]
  },

  {
    q: '6. 신입 사원이 업무에 대해 물어본다면? ',
    a: [
      { answer: 'a. 상세하게 알려준다. ', type: ['DM', 'WD', 'SWT' ] },
      { answer: 'b. 가이드에 나와있다고 말하며 스스로 알 수 있도록 도와준다. ', type: ['U2D', 'FND', 'SA', 'BND', 'DA' ] },
    ]
  },
  {
    q: '7. 일이 많은데 시간이 부족하다면? ',
    a: [
      { answer: 'a. 다른 일을 못하더라도 중요한 일부터 처리한다.', type: ['DM', 'SA', 'WD', 'BND' ] },
      { answer: 'b. 모든 업무를 1차 결과물로 빠르게 처리한다. ', type: ['SWT', 'DA', 'U2D', 'FND' ] },
    ]
  },
  {
    q: '8. 회사에 새로운 프로젝트가 생겼다면? ',
    a: [
      { answer: 'a. 누가 참여하는지 살펴본다. ', type: ['DA', 'DM', 'SA' ] },
      { answer: 'b. 묻지도 따지지 않고 바로 참가한다고 말한다. ', type: ['SWT', 'U2D', 'WD', 'FND', 'BND'] },
    ]
  },
  {
    q: '9. 다른 회사에서 스카우트 제안메일이 온다면? ',
    a: [
      { answer: 'a. 나중에 보려고 메일을 숨김 처리한다. ', type: ['DA', 'DM', 'SA', 'SWT' ] },
      { answer: 'b. 회사 이름을 기억한 후 메일을 삭제한다. ', type: ['U2D', 'WD', 'FND', 'BND' ] },
    ]
  },
]

const infoList = [
  {
    //FND
    name: '프론트앤드 개발자',
    desc: '프론트앤드 개발자는 백앤드 개발자와 반대로 사용자 눈에 보이는 것을 구축하는 일을 주로 합니다. 특히 요즘에는 사람마다 사용하는 디바이스가 다르기 때문에, 어떤 크기의 화면에서도 레이아웃이 깨지지 않도록 하는 것이 중요합니다. 필요 기술 : HTML, JS, CSS 등 프로그래밍 언어'
  },
  {
    //U2D
    name: 'UX/UI 디자이너',
    desc: '사용자가 쉽게 서비스를 이용할 수 있도록 크게는 프로세스의 순서를 배치하고 작게는 버튼의 위치와 모양, 그리고 텍스트 문구를 정하는 일을 합니다. 모바일 시대가 되면서 서비스를 단순화 시키는 것이 중요해졌기 때문에 꼭 필요한 직무입니다. 필요 기술 : 스케치,XD, 피그마 등 디자인 툴'
    
  },
  {
    //DA
    name: '데이터 분석가',
    desc: '미디어에서 빅데이터의 중요성이 많이 언급되면서 사람들에게 알려졌습니다. 사용자가 서비스를 이용하면서 발생한 데이터를 통해 개선 사항 등 비즈니스에 활용한 정보를 얻는 것이 주 업무입니다. 필요기술 : R, 스칼라, SQL 등 데이터 관련 언어'
  },
  {
    //SWT
    name: 'SW 테스트 전문가',
    desc: '서비스가 개발된 후 오류를 찾고 품질을 측정하는 업무를 합니다. 사용자가 발견하기 전에 회사 측에서 오류를 발견하여 수정한다면 앱의 평점 등 서비스 만족도가 오를 수 있습니다. 많은 앱의 리뷰를 살펴본다면 서비스의 에러가 평점에 얼마나 큰 영향을 미치는지 알 수 있습니다. 필요 기술 : 테스트 프로세스 문서 작성 능력 '
  },
  {
    //DM
    name: '디지털 마케터',
    desc: '우리의 서비스를 사람들에게 알리고 사용하도록 하는 일을 합니다. 어떤 광고가 가장효율적인지를 항상 측정 해야하고 또 새로운 마케팅 아이디어를 적용해야 합니다. 회사의 성장 척도의 가장 중요한 지표에 직접적으로 참여하기 때문에 서비스 생사에 가장 결정적인 역할을 하기도 합니다. 필요 기술 : 구글 애드워즈, 애널리틱스 등 광고 관련 툴'
  },
  {
    //WD
    name: '웹 디자이너',
    desc: '서비스의 전체적인 부누이기를 형성합니다. 우리화사가 내세우는 가치를 색, 폰트, 그림 등을 활용해 표현 해야 합니다. 서비스의 부족함도 디자인으로 보완이 가능하기 때문에 실력이 좋은 디자이너는 회사의 든든한 지원군이 됩니다. 필요 기술 : 포토샵, 일러스트 등 디자인 툴'
  },
  {
    //SA
    name: '서버 관리자',
    desc: '직접 서버를 만들어 관리하기도 하지만, 요즘에는 클라우드를 활용하여 서비스를 관리합니다. 서비스가 잘 운영될 수 있도록 적합한 환경을 관리하고 또 데이터를 백업하여 예상하지 못한 사고에도 대비하는 일을 합니다. 필요 기술 : AWS 등 클라우드 환경 설정 및 백업 능력'
  },
  {
    //BND
    name: '백앤드 개발자',
    desc: '흔히 ‘개발자’라고 했을 때 많은 사람들이 가장 많이 떠오르는 모습이 백엔드 개발자 일 것 같습니다. 웹사이트, 어플리케이션 등을 만들고 사용자 눈에 보이는 것이 아닌 내부적인 프로세스를 구축하는 일에 많은 시간을 사용합니다. 많은 사용자가 우리 서비스에 접속했을 때 잘 운영되고 프로세스가 빠르게 처리되는 것이 가장 큰 목표로 볼 수 있겠습니다. 필요 기술 : C언어, JAVA 등 프로그래밍 언어'
  },
]
//FND,U2D,DA,SWT,DM,WD,SA,BND