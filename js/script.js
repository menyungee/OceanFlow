// ----------------------------------------------------
// 브랜드 슬라이드 로직 (탭 버튼 클릭 시 3개씩 이동)
// ----------------------------------------------------
const navBtns = document.querySelectorAll('.btn-nav');
const brandList = document.getElementById('brandList');

navBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        navBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // 슬라이드 이동 (인덱스 0은 0%, 인덱스 1은 -50%)
        const idx = this.getAttribute('data-idx');
        brandList.style.transform = `translateX(-${idx * 50}%)`;
    });
});

// 2. MERCH 영역 슬라이더 로직
function moveMerchSlide(index) {
    const slider = document.getElementById('merchSlider');
    const dots = document.querySelectorAll('#merchDots .dot');

    // 그룹이 100%씩 이동 (gap 20px이 있으므로 100% + gap 길이만큼 이동 계산 필요)
    // 간단하게 gap을 포함한 컨테이너 이동을 위해 % 사용
    slider.style.transform = `translateX(-${index * 100}%)`;

    // 점(Dot) 활성화 상태 변경
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// 3. SHOW YOUR STYLE 영역 3D 슬라이더 로직
let currentStyleIndex = 0;
const totalStyleCards = 3;

function moveStyleSlide(direction) {
    // 현재 클래스 제거
    const cards = [
        document.getElementById('styleCard0'),
        document.getElementById('styleCard1'),
        document.getElementById('styleCard2')
    ];

    // 인덱스 계산 (0, 1, 2 순환)
    currentStyleIndex = (currentStyleIndex + direction + totalStyleCards) % totalStyleCards;

    // prev, active, next 인덱스 구하기
    const prevIndex = (currentStyleIndex - 1 + totalStyleCards) % totalStyleCards;
    const nextIndex = (currentStyleIndex + 1) % totalStyleCards;

    // 모든 카드 클래스 초기화 후 재할당
    cards.forEach(card => card.className = 'style-card');

    cards[currentStyleIndex].classList.add('active');
    cards[prevIndex].classList.add('prev');
    cards[nextIndex].classList.add('next');
}