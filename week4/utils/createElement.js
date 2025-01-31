export const createElement = (
    tagName,
    attributes = {},
    textContent = ""
) => {
  const element = document.createElement(tagName);

  // ✅ 속성 추가 - 여러개 클래스 지원
  Object.keys(attributes).forEach(key => {
    if (key === "class") element.classList.add(...attributes[key].split(" "));
    else element.setAttribute(key, attributes[key]);
  });

  // ✅ 텍스트 추가 (옵션)
  if (textContent) element.textContent = textContent;
  return element;
}