import Animations from "../../animations.js"


const animation = new Animations()

const variantsSection = document.getElementById('variants__section')
const facadeSection = document.getElementById('facade__section')
const structureSection = document.getElementById('structure__section')
const aboutSection = document.getElementById('about__section')
const portfolioSection = document.getElementById('portfolio__section')
const partnersSection = document.getElementById('partners__section')

const toRightPortfolioCards = document.querySelectorAll('.to__right__portfolio__card')
const toLeftPortfolioCards = document.querySelectorAll('.to__left__portfolio__card')

animation.opacity(variantsSection, '.variants__section__title')
animation.transformToRight(variantsSection, '.variants__section__line')
animation.transformToLeft(variantsSection, '.variants__section__description__ex__container')

animation.transformToRight(facadeSection, '.facade__section__line__container')
animation.transformToLeft(facadeSection, '.facade__section__text__container')
animation.transformToLeft(facadeSection, '.facade__section__description__container')

animation.transformToRight(structureSection, '.structure__section__line__container')
animation.transformToLeft(structureSection, '.structure__section__text__container')

animation.transformToRight(aboutSection, '.about__section__heading__text__container')
animation.transformToRight(aboutSection, '.about__section__line__container')
animation.transformToLeft(aboutSection, '.about__section__description')

animation.transformToRight(aboutSection, '.to__right__card-1')
animation.transformToRight(aboutSection, '.to__right__card-2')
animation.transformToLeft(aboutSection, '.to__left__card-1')
animation.transformToLeft(aboutSection, '.to__left__card-2')

animation.transformToRight(portfolioSection, '.portfolio__section__line__container')

animation.transformToLeft(portfolioSection, '.portfolio__section__text__container')
animation.transformToLeft(portfolioSection, '.portfolio__section__description__container')

toRightPortfolioCards.forEach((card) => {
    const classes = [...card.classList].join('.')
    animation.transformToRight(portfolioSection, `.${classes}`)
})

toLeftPortfolioCards.forEach((card) => {
    const classes = [...card.classList].join('.')
    animation.transformToLeft(portfolioSection, `.${classes}`)
})

animation.transformToRight(partnersSection, '.partners__section__text__container')
animation.transformToRight(partnersSection, '.partners__section__line__container')
animation.transformToLeft(partnersSection, '.partners__section__description__container')