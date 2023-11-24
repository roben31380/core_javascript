/* ------------------ */
/* Variables          */
/* ------------------ */

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - Calculate product price by quantity
let calcProductPriceByQuantity;
// - 구매 제품 가격의 총 합
// - Total price of purchased products
let totalProductPrice;

// - 1년 기준 일(day)자 수
// - Number of days per year
const DAY_PER_YEAR = 365;

// - 구매 결제 여부
// - Whether to pay for a purchase
let isPay = true;

// - 구매 결제 내역
// - Purchase payment history
let payHistory;

// - 브랜드 접두사
// - brand prefix
const BRAND_PREFIX = 'nike';

// - 오늘의 운세
let todayFortune = 'good';

// - 상품 정보
const ProductInformation = '';

/* variables ----------------------------------------------------------- */
// let totalPrice, purchase, buyList, todayFortune;

/* constant variables -------------------------------------------------- */
// const itemPrice, dayInYear, PreBrand, itemInformation;

// 01
let admin, name; // 변수 두 개를 동시에 선언할 수 있습니다.
name = 'John';
admin = name;
/*alert(admin); // "John"*/

// 02
let ourPlanetName = 'Earth';
let currentUserName = 'John';

// 라이브러리 상태관리 ,redux, jotai, zustand = ajax
// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 응답 실패

const PANDING = 'api/panding';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const REJECTED = 'api/rejected';
