const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // 위치의 강제성 적용 포커스는 위치하게 한다는 뜻
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // HTML의 속성 추가
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // HTML의 속성 추가
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021