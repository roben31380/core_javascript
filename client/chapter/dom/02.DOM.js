/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* global getNode */

const first = getNode('.first');

/* 문서 대상 확인 */
// - matches 너 이거 있어?
console.log(first.matches('span'));
// - contains 너 안에 이거 있어?
console.log(getNode('h1').contains(first));
console.log(getNode('h1').contains(getNode('.second')));
