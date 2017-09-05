import { Dimen } from './dimen';

export const DIMENS: Dimen[] = [
    {
        id: 0, 
        name: 'E', 
        title: 'Extraversion', 
        description: '***Could be described as talkative, outgoing. ***Like to be in a fast-paced environment. ***Tend to work out ideas with others, think out loud. ***Enjoy being the center of attention.', 
        theme: 0, 
        htmlTitle: '<strong>E</strong>xtraversion'
    },
    {
        id: 1, name: 'I', title: 'Introversion', description: '***Could be described as reserved, private. ***Prefer a slower pace with time for contemplation. ***Tend to think things through inside your head. ***Would rather observe than be the center of attention.', theme: 0, htmlTitle: '<strong>I</strong>ntroversion'
    },
    {
        id: 2, name: 'S', title: 'Sensing', description: '***Focus on the reality of how things are. ***Pay attention to concrete facts and details. ***Prefer ideas that have practical applications. ***Like to describe things in a specific, literal way.', theme: 1, htmlTitle: '<strong>S</strong>ensing'
    },
    {
        id: 3, name: 'N', title: 'iNtuition', description: '***Imagine the possibilities of how things could be. ***Notice the big picture, see how everything connects. ***Enjoy ideas and concepts for their own sake. ***Like to describe things in a figurative, poetic way.', theme: 1, htmlTitle: 'i<strong>N</strong>tuition'
    },
    {
        id: 4, name: 'T', title: 'Thinking', description: '***Make decisions in an impersonal way, using logical reasoning. ***Value justice, fairness. ***Enjoy finding the flaws in an argument. ***Could be described as reasonable, level-headed.', theme: 2, htmlTitle: '<strong>T</strong>hinking'
    },
    {
        id: 5, name: 'F', title: 'Feeling', description: '***Base your decisions on personal values and how your actions affect others. ***Value harmony, forgiveness. ***Like to please others and point out the best in people. ***Could be described as warm, empathetic.', theme: 2, htmlTitle: '<strong>F</strong>eeling'
    },
    {
        id: 6, name: 'J', title: 'Judging', description: '***Prefer to have matters settled. ***Think rules and deadlines should be respected. ***Prefer to have detailed, step-by-step instructions. ***Make plans, want to know what you are getting into.', theme: 3, htmlTitle: '<strong>J</strong>udging'
    },
    {
        id: 7, name: 'P', title: 'Perceiving', description: '***Prefer to leave your options open. ***See rules and deadlines as flexible. ***Like to improvise and make things up as you go. ***Are spontaneous, enjoy surprises and new situations.', theme: 3, htmlTitle: '<strong>P</strong>erceiving'
    }
];