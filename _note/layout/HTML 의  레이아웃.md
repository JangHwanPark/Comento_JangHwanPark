### HTML 의 레이아웃
Layout 이란 어떤 공간에 여러 요소를 보기 좋게 배치하는 작업을 의미한다.<br>

HTML 에서 페이지 레이아웃을 위한 요소를 제공하는데 이를 시멘틱(semantic) 태그 라고한다.<br>(header, nav, section, article, aside, footer)

### [CSS] float
`float`은 뜨다 라는 의미로 페이지 내부에서 해당하는 요소를 다음 요소 위에 떠 있게 한다.<br>즉, 요소가 가지는 기본 레이아웃의 흐름에서 벗어나 요소의 모서리가 페이지의 왼쪽이나 오른쪽에 이동하는 것이다.<br>
과거에는 `float`을 주로 사용했으나 요즘엔 `flex`또는`grid`속성을 사용한다.

### [CSS] flex
display 속성 중 하나로 박스 레이아웃을 작성할때 사용되며, 요소의 크기가 불명확 하거나 동적으로 변할 때에도 요소의 크기와 순서를 유연하게 배치할 수 있다.<br>

`flex box`는 1차원 레이아웃으로 한번에 하나의 차원(행 or 열)만 다룬다.
주축은 `flex-direction`을 사용하여 지정하며, 교차축은 주축의 수직인 축으로 결정된다. (주축이 행(가로) 이라면 교차축은 열(세로) 이다.)

`flex box`는 네비게이션 메뉴나 버튼, Tab 메뉴등을 배치할 때 유용하다.

### [CSS] grid
`grid`속성은 2차원 레이아웃으로 한번에 행, 열을 기준으로 요소를 배치할 수 있다.<br>
`grid`는 대칭형 레이아웃, 카드형 콘텐츠 정렬에 주로 사용된다.