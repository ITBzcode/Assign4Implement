import { Questn } from './questn';

export const QUESTNS: Questn[] = [
    {
        id: 0, 
        theme: 0, 
        qNum: 1, 
        question: 'At a party do you', 
        aAnswer: 'interact with many, including strangers', 
        aDim: 0, 
        bAnswer: 'interact with a few, known to you', 
        bDim: 1, 
        qGrp: 0
    },
    {
        id: 1, theme: 1, qNum: 2, question: 'Are you more', aAnswer: 'realistic', aDim: 2, bAnswer: 'philosophically inclined', bDim: 3, qGrp: 0
    },
    {
        id: 2, theme: 1, qNum: 3, question: 'Are you more intrigued by', aAnswer: 'facts', aDim: 2, bAnswer: 'similies', bDim: 3, qGrp: 0
    },
    {
        id: 3, theme: 2, qNum: 4, question: 'Are you usually more', aAnswer: 'fair minded', aDim: 4, bAnswer: 'kind hearted', bDim: 5, qGrp: 0
    },
    {
        id: 4, theme: 2, qNum: 5, question: 'Do you tend to be more', aAnswer: 'dispassionate', aDim: 4, bAnswer: 'sympathetic', bDim: 5, qGrp: 0
    },
    {
        id: 5, theme: 3, qNum: 6, question: 'Do you prefer to work', aAnswer: 'to deadlines', aDim: 6, bAnswer: 'just "whenever"', bDim: 7, qGrp: 1
    },
    {
        id: 6, theme: 3, qNum: 7, question: 'Do you tend to choose', aAnswer: 'rather carefully', aDim: 6, bAnswer: 'somewhat impulsively', bDim: 7, qGrp: 1
    },
    {
        id: 7, theme: 0, qNum: 8, question: 'At parties do you', aAnswer: 'stay late, with increasing energy', aDim: 0, bAnswer: 'leave early, with decreased energy', bDim: 1, qGrp: 1
    },
    {
        id: 8, theme: 1, qNum: 9, question: 'Are you a more', aAnswer: 'sensible person', aDim: 2, bAnswer: 'reflective person', bDim: 3, qGrp: 1
    },
    {
        id: 9, theme: 1, qNum: 10, question: 'Are you more drawn to', aAnswer: 'hard data', aDim: 2, bAnswer: 'abstruse ideas', bDim: 3, qGrp: 1
    },
    {
        id: 10, theme: 2, qNum: 11, question: 'Is it more natural for you to be', aAnswer: 'fair to others', aDim: 4, bAnswer: 'nice to others', bDim: 5, qGrp: 2
    },
    {
        id: 11, theme: 2, qNum: 12, question: 'In first approaching others are you more', aAnswer: 'impersonal and detached', aDim: 4, bAnswer: 'personal and engaging', bDim: 5, qGrp: 2
    },
    {
        id: 12, theme: 3, qNum: 13, question: 'Are you usually more', aAnswer: 'punctual', aDim: 6, bAnswer: 'leisurely', bDim: 7, qGrp: 2
    },
    {
        id: 13, theme: 3, qNum: 14, question: 'Does it bother you more having things', aAnswer: 'incomplete', aDim: 6, bAnswer: 'completed', bDim: 7, qGrp: 2
    },
    {
        id: 14, theme: 0, qNum: 15, question: 'In your social groups do you', aAnswer: 'keep abreast of the happenings of others', aDim: 0, bAnswer: 'get behind on the news', bDim: 1, qGrp: 2
    },
    {
        id: 15, theme: 1, qNum: 16, question: 'Are you usually more interested in', aAnswer: 'specifics', aDim: 2, bAnswer: 'concepts', bDim: 3, qGrp: 3
    },
    {
        id: 16, theme: 1, qNum: 17, question: 'Do you prefer writers who', aAnswer: 'say what they mean', aDim: 2, bAnswer: 'use lots of analogies', bDim: 3, qGrp: 3
    },
    {
        id: 17, theme: 2, qNum: 18, question: 'Are you more naturally', aAnswer: 'impartial', aDim: 4, bAnswer: 'compassionate', bDim: 5, qGrp: 3
    },
    {
        id: 18, theme: 2, qNum: 19, question: 'In judging are you more likely to be', aAnswer: 'impersonal', aDim: 4, bAnswer: 'sentimental', bDim: 5, qGrp: 3
    },
    {
        id: 19, theme: 3, qNum: 20, question: 'Do you usually', aAnswer: 'settle things', aDim: 6, bAnswer: 'keep options open', bDim: 7, qGrp: 3
    },
    {
        id: 20, theme: 3, qNum: 21, question: 'Are you usually rather', aAnswer: 'quick to agree to a time', aDim: 6, bAnswer: 'reluctant to agree to a time', bDim: 7, qGrp: 4
    },
    {
        id: 21, theme: 0, qNum: 22, question: 'In phoning do you', aAnswer: 'just start talking', aDim: 0, bAnswer: 'rehearse what you will say', bDim: 1, qGrp: 4
    },
    {
        id: 22, theme: 1, qNum: 23, question: 'Facts', aAnswer: 'speak for themselves', aDim: 2, bAnswer: 'usually require interpretation', bDim: 3, qGrp: 4
    },
    {
        id: 23, theme: 1, qNum: 24, question: 'Do you prefer to work with', aAnswer: 'practical information', aDim: 2, bAnswer: 'abstract ideas', bDim: 3, qGrp: 4
    },
    {
        id: 24, theme: 2, qNum: 25, question: 'Are you inclined to be more', aAnswer: 'cool headed', aDim: 4, bAnswer: 'warm hearted', bDim: 5, qGrp: 4
    },
    {
        id: 25, theme: 2, qNum: 26, question: 'Would you rather be', aAnswer: 'more just than merciful', aDim: 4, bAnswer: 'more merciful than just', bDim: 5, qGrp: 5
    },
    {
        id: 26, theme: 3, qNum: 27, question: 'Are you more comfortable', aAnswer: 'setting a schedule', aDim: 6, bAnswer: 'putting things off', bDim: 7, qGrp: 5
    },
    {
        id: 27, theme: 3, qNum: 28, question: 'Are you more comfortable with', aAnswer: 'written agreements', aDim: 6, bAnswer: 'handshake agreements', bDim: 7, qGrp: 5
    },
    {
        id: 28, theme: 0, qNum: 29, question: 'In company do you', aAnswer: 'start conversations', aDim: 0, bAnswer: 'wait to be approached', bDim: 1, qGrp: 5
    },
    {
        id: 29, theme: 1, qNum: 30, question: 'Traditional common sense is', aAnswer: 'usually trustworthy', aDim: 2, bAnswer: 'often misleading', bDim: 3, qGrp: 5
    },
    {
        id: 30, theme: 1, qNum: 31, question: 'Children often do not', aAnswer: 'make themselves useful enough', aDim: 2, bAnswer: 'daydream enough', bDim: 3, qGrp: 6
    },
    {
        id: 31, theme: 2, qNum: 32, question: 'Are you usually more', aAnswer: 'tough minded', aDim: 4, bAnswer: 'tender hearted', bDim: 5, qGrp: 6
    },
    {
        id: 32, theme: 2, qNum: 33, question: 'Are you more', aAnswer: 'firm than gentle', aDim: 4, bAnswer: 'gentle than firm', bDim: 5, qGrp: 6
    },
    {
        id: 33, theme: 3, qNum: 34, question: 'Are you more prone to keep things', aAnswer: 'well organized', aDim: 6, bAnswer: 'open-ended', bDim: 7, qGrp: 6
    },
    {
        id: 34, theme: 3, qNum: 35, question: 'Do you put more value on the', aAnswer: 'definite', aDim: 6, bAnswer: 'variable', bDim: 7, qGrp: 6
    },
    {
        id: 35, theme: 0, qNum: 36, question: 'Does new interaction with others', aAnswer: 'stimulate and energize you', aDim: 0, bAnswer: 'tax your reserves', bDim: 1, qGrp: 7
    },
    {
        id: 36, theme: 1, qNum: 37, question: 'Are you more frequently', aAnswer: 'a practical sort of person', aDim: 2, bAnswer: 'an abstract sort of person', bDim: 3, qGrp: 7
    },
    {
        id: 37, theme: 1, qNum: 38, question: 'Which are you drawn to', aAnswer: 'accurate perception', aDim: 2, bAnswer: 'concept formation', bDim: 3, qGrp: 7
    },
    {
        id: 38, theme: 2, qNum: 39, question: 'Which is more satisfying', aAnswer: 'to discuss an issue thoroughly', aDim: 4, bAnswer: 'to arrive at agreement on an issue', bDim: 5, qGrp: 7
    },
    {
        id: 39, theme: 2, qNum: 40, question: 'Which rules you more:', aAnswer: 'your head', aDim: 4, bAnswer: 'your heart', bDim: 5, qGrp: 7
    },
    {
        id: 40, theme: 3, qNum: 41, question: 'Are you more comfortable with work', aAnswer: 'contracted', aDim: 6, bAnswer: 'done on a casual basis', bDim: 7, qGrp: 8
    },
    {
        id: 41, theme: 3, qNum: 42, question: 'Do you prefer things to be', aAnswer: 'neat and orderly', aDim: 6, bAnswer: 'optional', bDim: 7, qGrp: 8
    },
    {
        id: 42, theme: 0, qNum: 43, question: 'Do you prefer', aAnswer: 'many friends with brief contact', aDim: 0, bAnswer: 'a few friends with longer contact', bDim: 1, qGrp: 8
    },
    {
        id: 43, theme: 1, qNum: 44, question: 'Are you more drawn to', aAnswer: 'substantial information', aDim: 2, bAnswer: 'credible assumptions', bDim: 3, qGrp: 8
    },
    {
        id: 44, theme: 1, qNum: 45, question: 'Are you more interested in', aAnswer: 'production', aDim: 2, bAnswer: 'research', bDim: 3, qGrp: 8
    },
    {
        id: 45, theme: 2, qNum: 46, question: 'Are you more comfortable when you are', aAnswer: 'objective', aDim: 4, bAnswer: 'personal', bDim: 5, qGrp: 9
    },
    {
        id: 46, theme: 2, qNum: 47, question: 'Do you value in yourself more that you are', aAnswer: 'unwavering', aDim: 4, bAnswer: 'devoted', bDim: 5, qGrp: 9
    },
    {
        id: 47, theme: 3, qNum: 48, question: 'Are you more comfortable with', aAnswer: 'final statements', aDim: 6, bAnswer: 'tentative statements', bDim: 7, qGrp: 9
    },
    {
        id: 48, theme: 3, qNum: 49, question: 'Are you more comfortable', aAnswer: 'after a decision', aDim: 6, bAnswer: 'before a decision', bDim: 7, qGrp: 9
    },
    {
        id: 49, theme: 0, qNum: 50, question: 'Do you', aAnswer: 'speak easily and at length with strangers', aDim: 0, bAnswer: 'find little to say to strangers', bDim: 1, qGrp: 9
    },
    {
        id: 50, theme: 1, qNum: 51, question: 'Are you usually more interested in the', aAnswer: 'particular instance', aDim: 2, bAnswer: 'general case', bDim: 3, qGrp: 10
    },
    {
        id: 51, theme: 1, qNum: 52, question: 'Do you feel', aAnswer: 'more practical than ingenious', aDim: 2, bAnswer: 'more ingenious than practical', bDim: 3, qGrp: 10
    },
    {
        id: 52, theme: 2, qNum: 53, question: 'Are you typically more a person of', aAnswer: 'clear reason', aDim: 4, bAnswer: 'strong feeling', bDim: 5, qGrp: 10
    },
    {
        id: 53, theme: 2, qNum: 54, question: 'Are you inclined more to be', aAnswer: 'fair-minded', aDim: 4, bAnswer: 'sympathetic', bDim: 5, qGrp: 10
    },
    {
        id: 54, theme: 3, qNum: 55, question: 'Is it preferable mostly to', aAnswer: 'make sure things are arranged', aDim: 6, bAnswer: 'just let things happen', bDim: 7, qGrp: 10
    },
    {
        id: 55, theme: 3, qNum: 56, question: 'Is it your way more to', aAnswer: 'get things settled', aDim: 6, bAnswer: 'put off settlement', bDim: 7, qGrp: 11
    },
    {
        id: 56, theme: 0, qNum: 57, question: 'When the phone rings do you', aAnswer: 'hasten to get to it first', aDim: 0, bAnswer: 'hope someone else will answer', bDim: 1, qGrp: 11
    },
    {
        id: 57, theme: 1, qNum: 58, question: 'Do you prize more in yourself a', aAnswer: 'good sense of reality', aDim: 2, bAnswer: 'good imagination', bDim: 3, qGrp: 11
    },
    {
        id: 58, theme: 1, qNum: 59, question: 'Are you drawn more to', aAnswer: 'fundamentals', aDim: 2, bAnswer: 'overtones', bDim: 3, qGrp: 11
    },
    {
        id: 59, theme: 2, qNum: 60, question: 'In judging are you usually more', aAnswer: 'neutral', aDim: 4, bAnswer: 'charitable', bDim: 5, qGrp: 11
    },
    {
        id: 60, theme: 2, qNum: 61, question: 'Do you consider yourself more', aAnswer: 'clear headed', aDim: 4, bAnswer: 'good willed', bDim: 5, qGrp: 12
    },
    {
        id: 61, theme: 3, qNum: 62, question: 'Are you more prone to', aAnswer: 'schedule events', aDim: 6, bAnswer: 'take things as they come', bDim: 7, qGrp: 12
    },
    {
        id: 62, theme: 3, qNum: 63, question: 'Are you a person that is more', aAnswer: 'routinized', aDim: 6, bAnswer: 'whimsical', bDim: 7, qGrp: 12
    },
    {
        id: 63, theme: 0, qNum: 64, question: 'Are you more inclined to be', aAnswer: 'easy to approach', aDim: 0, bAnswer: 'somewhat reserved', bDim: 1, qGrp: 12
    },
    {
        id: 64, theme: 1, qNum: 65, question: 'Do you have more fun with', aAnswer: 'hands-on experience', aDim: 2, bAnswer: 'blue-sky fantasy', bDim: 3, qGrp: 12
    },
    {
        id: 65, theme: 1, qNum: 66, question: 'In writings do you prefer', aAnswer: 'the more literal', aDim: 2, bAnswer: 'the more figurative', bDim: 3, qGrp: 13
    },
    {
        id: 66, theme: 2, qNum: 67, question: 'Are you usually more', aAnswer: 'unbiased', aDim: 4, bAnswer: 'compassionate', bDim: 5, qGrp: 13
    },
    {
        id: 67, theme: 2, qNum: 68, question: 'Are you typically more', aAnswer: 'just than lenient', aDim: 4, bAnswer: 'lenient than just', bDim: 5, qGrp: 13
    },
    {
        id: 68, theme: 3, qNum: 69, question: 'Is it more like you to', aAnswer: 'make snap judgements', aDim: 6, bAnswer: 'delay making judgements', bDim: 7, qGrp: 13
    },
    {
        id: 69, theme: 3, qNum: 70, question: 'Do you tend to be more', aAnswer: 'deliberate than spontaneous', aDim: 6, bAnswer: 'spontaneous than deliberate', bDim: 7, qGrp: 13
    }

];