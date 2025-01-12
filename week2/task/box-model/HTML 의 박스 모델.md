### Box model
- 모든 HTML 요소는 박스 모양으로 구성되며, 이것을 박스 모델이라고 한다.
- 박스 모델은 HTML 구성 요소를 패딩(padding), 테두리(border), 마진(margin), 컨텐츠(content)로 구분한다.

### Content
- 요소의 텍스트나 이미지 등 실제 내용이 담기는 영역이다.
- 요소의 너비(width)나 높이(height)를 조절할 수 있다.
- 요소의 너비, 높이로 조절한 Content 영역보다 Content 의 크기가 크면 해당 영역을 벗어난다.

### Padding
- 요소의 내부 여백을 지정할 때 사용한다.
- 상하좌우(top, right, bottom, left)영역의 너비를 조절할 수 있다.

### Margin
- 요소의 외부 여백을 지정할 때 사용한다.
- 상하좌우(top, right, bottom, left)영역의 너비를 조절할 수 있다.
- Margin 값에 auto 를 부여하면 해당 요소를 페이지 가운데로 위치할 수 있다.
- 요소의 너비가 페이지 너비보다 크면 스크롤바가 생성된다. (max-width 를 조정하여 해결할 수 있다.)

### Border
- 요소의 테두리 선의 스타일을 지정할 수 있다.

### Box sizing
- 너비와 높이의 대상 영역을 변경할 수 있다.
- 기본값으로 `content-box`를 가지며 너비와 높이의 대상영역이 content 영역을 의미한다.
- `border-box`로 지정하면, 테두리(Border)를 기준으로 크기를 정하며, Margin 을 제외한 박스모델 전체를 너비 높이 대상 영역으로 지정할 수 있다.