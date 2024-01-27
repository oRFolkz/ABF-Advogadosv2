/* ### SLIDE SHOW ### */
/* ### SLIDE SHOW ### */
/* ### SLIDE SHOW ### */
/* ### SLIDE SHOW ### */
/* ### SLIDE SHOW ### */

const slideImgs = document.querySelectorAll('.jsSlide');
let currentIndex = 0
const slideShow = () => {
    currentIndex = (currentIndex + 1) % 3;
    if (currentIndex === 0) {
        slideImgs[2].classList.add("none");
        slideImgs[0].classList.remove("none");
        slideImgs[0].classList.add("showing");
    } else if (currentIndex === 1) {
        slideImgs[0].classList.add("none");
        slideImgs[1].classList.remove("none");
        slideImgs[1].classList.add("showing");
    } else if (currentIndex === 2) {
        slideImgs[1].classList.add("none");
        slideImgs[2].classList.remove("none");
        slideImgs[2].classList.add("showing");
    };
};

setInterval(slideShow, 4500)

/* ### SLIDE SHOW ^^^ ### */
/* ### SLIDE SHOW ^^^ ### */
/* ### SLIDE SHOW ^^^ ### */
/* ### SLIDE SHOW ^^^ ### */
/* ### SLIDE SHOW ^^^ ### */

const servicos = document.querySelector('.servicos')
const localizacao = document.querySelector('.localizacao')
const sobre = document.querySelector('.sobre')
const quemSomos = document.querySelector('.quemSomos')
const scrollToViewServicos = document.querySelector(".cardsInfo")
const scrollToViewSobre = document.querySelector(".advogado")
const scrollToViewLocalizacao = document.querySelector('footer')
const scrollToViewquemSomos = document.querySelector('.partners')

servicos.addEventListener('click', () => {
    scrollToViewServicos.scrollIntoView({ behavior: 'smooth' });
});

localizacao.addEventListener('click', () => {
    scrollToViewLocalizacao.scrollIntoView({ behavior: 'smooth' });
});

sobre.addEventListener('click', () => {
    scrollToViewSobre.scrollIntoView({ behavior : 'smooth' });
});

quemSomos.addEventListener('click', () => {
    scrollToViewquemSomos.scrollIntoView({ behavior : 'smooth' });
});
/* ### SKILL HOVER ### */
/* ### SKILL HOVER ### */
/* ### SKILL HOVER ### */
/* ### SKILL HOVER ### */
/* ### SKILL HOVER ### */

const firstImg = document.querySelector(".jsFirstImgSkill");
const secondImg = document.querySelector(".jsSecondImgSkill");
const henriqueHover = document.querySelectorAll(".henriqueSkill");
const anaHover = document.querySelectorAll(".anafSkill");
const larissaHover = document.querySelectorAll(".larissaSkill");
const gabrieleHover = document.querySelectorAll(".gabrieleSkill");


henriqueHover.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        firstImg.style.opacity = 0;
        setTimeout(() => {
            firstImg.src = "img/henrique/Henrique6.png";
            firstImg.style.opacity = 1;
        }, 500);
    });
});

anaHover.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        firstImg.style.opacity = 0;
        setTimeout(() => {
            firstImg.src = "img/anaF/anaF.png";
            firstImg.style.opacity = 1;
        }, 500);
    });
});

larissaHover.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        firstImg.style.opacity = 0;
        setTimeout(() => {
            secondImg.src = "img/larissa/larissa.png";
            firstImg.style.opacity = 1;
        }, 500);
    });
});

gabrieleHover.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        firstImg.style.opacity = 0;
        setTimeout(() => {
            secondImg.src = "img/gabriele/gabriele.png";
            firstImg.style.opacity = 1;
        }, 500);
    });
});

/* ### SKILL HOVER ^^^ ### */
/* ### SKILL HOVER ^^^ ### */
/* ### SKILL HOVER ^^^ ### */
/* ### SKILL HOVER ^^^ ### */
/* ### SKILL HOVER ^^^ ### */