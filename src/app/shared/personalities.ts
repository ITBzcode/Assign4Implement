import { Personality } from './personality';

export const PERSONALITIES: Personality[] = [
    {
        id: 0, name: 'INTJ', 
        image: 'assets/images/ic-INTJ-big.png', 
        group: 'Analysts', 
        descriptors: 'Architect, Scientist, Mastermind.', 
        tooltipDesc: 'Vision oriented. Quietly innovative. Insightful. Conceptual. Logical. Seeks understanding. Critical. Decisive. Independent. Determined. Pursues competence, improvement.', 
        briefDesc: 'Innovative, independent, strategic, logical, reserved, insightful. Driven by their own original ideas to achieve improvements.', 
        longDesc: 'Have original minds and great drive for implementing their ideas and achieving their goals.  Quickly see patterns in external events and develop long-range explanatory perspectives.  When committed, organize a job and carry it through.  Skeptical and independent, have high standards of competence and performance -- for themselves and others.', 
        dimFAVW: 1, dimINFO: 3, dimDECI: 4, dimSTRC: 6
    },
    {
        id: 1, name: 'INTP', image: 'assets/images/ic-INTP-big.png', group: 'Analysts', descriptors: 'Logician, Designer Theoriser.', tooltipDesc: 'Logical. Conceptual. Analytical. Objective. Detached. Critical. Ingenious. Complex. Intellectually curious. Loves ideas. Pursues understanding. Questioning. Adaptable. Independent.', briefDesc: 'Intellectual, logical, precise, reserved, flexible, imaginative. Original thinkers who enjoy speculation and creative problem solving.', 
        longDesc: 'Seek to develop logical explanations for everything that interests them.  Theoretical and abstract, interested more in ideas than in social interaction.  Quiet, contained, flexible, and adaptable.  Have unusual ability to focus in depth to solve problems in their area of interest.  Skeptical, sometimes critical, always analytical.', dimFAVW: 1, dimINFO: 3, dimDECI: 4, dimSTRC: 7
    },
    {
        id: 2, name: 'ENTJ', image: 'assets/images/ic-ENTJ-big.png', group: 'Analysts', descriptors: 'Commander, Fieldmarshall.', tooltipDesc: 'Driving organizer. Planner. Vision focused. Decisive. Initiating. Conceptual. Strategic. Systematic. Assertive. Critical. Logical. Organized. Pursues improvement and achievement.', briefDesc: 'Strategic, logical, efficient, outgoing, ambitious, independent. Effective organizers of people and long-range planners.', 
        longDesc: 'Frank, decisive, assume leadership readily.  Quickly see illogical and inefficient procedures and policies, develop and implement comprehensive systems to solve organizational problems.  Enjoy long-term planning and goal setting.  Usually well informed, well read, enjoy expanding their knowledge and passing it on to others.  Forceful in presenting their ideas.', dimFAVW: 0, dimINFO: 3, dimDECI: 4, dimSTRC: 6
    },
    {
        id: 3, name: 'ENTP', image: 'assets/images/ic-ENTP-big.png', group: 'Analysts', descriptors: 'Debater, Enthusiastic Innovator.', tooltipDesc: 'Energetic. Inventive. Enthusiastic. Abstract. Logical. Theoretical. Analytical. Complex. Ingenious. Verbal. Novelty seeking. Change oriented. Global. Independent. Adaptable.', briefDesc: 'Inventive, enthusiastic, strategic, enterprising, inquisitive, versatile. Enjoy new ideas and challenges, value inspiration.', 
        longDesc: 'Quick, ingenious, stimulating, alert, and outspoken.  Resourceful in solving new and challenging problems.  Adept at generating conceptual possibilities and then analyzing them strategically.  Good at reading other people.  Bored by routine, will seldom do the same thing the same way, apt to turn to one new interest after another.', dimFAVW: 0, dimINFO: 3, dimDECI: 4, dimSTRC: 7
    },
    {
        id: 4, name: 'INFJ', image: 'assets/images/ic-INFJ-big.png', group: 'Diplomats', descriptors: 'Advocate, Author, Counsellor.', tooltipDesc: 'Vision and meaning oriented. Quietly intense. Insightful. Creative. Sensitive. Seeks harmony, growth. Serious. Loves language, symbols. Persevering. Inspiring.', briefDesc: 'Idealistic, organized, insightful, dependable, compassionate, gentle.  Seek harmony and cooperation, enjoy intellectual stimulation.', 
        longDesc: 'Seek meaning and connection in ideas, relationships, and material possessions.  Want to understand what motivates people and are insightful about others.  Conscientious and committed to their firm values.  Develop a clear vision about how best to serve the common good.  Organized and decisive in implementing their vision.', dimFAVW: 1, dimINFO: 3, dimDECI: 5, dimSTRC: 6
    },
    {
        id: 5, name: 'INFP', image: 'assets/images/ic-INFP-big.png', group: 'Diplomats', descriptors: 'Mediator, Healer, Questor.', tooltipDesc: 'Deep-felt valuing. Quietly caring. Compassionate. Pursues meaning, harmony. Creative. Idealistic. Empathic helpers. Inquisitive. Enjoys ideas, language, writing. Independent. Adaptable.', briefDesc: 'Sensitive, creative, idealistic, perceptive, caring, loyal.  Value inner harmony and personal growth, focus on dreams and possibilities.', 
        longDesc: 'Idealistic, loyal to their values and to people who are important to them.  Want an external life that is congruent with their values.  Curious, quick to see possibilities, can be catalysts for implementing ideas.  Seek to understand people and to help them fulfill their potential.  Adaptable, flexible, and accepting unless a value is threatened.', dimFAVW: 1, dimINFO: 3, dimDECI: 5, dimSTRC: 7
    },
    {
        id: 6, name: 'ENFJ', image: 'assets/images/ic-ENFJ-big.png', group: 'Diplomats', descriptors: 'Protagonist, Pedagogue.', tooltipDesc: 'Actively sociable. Enthusiastic. Harmonizer. Expressive. Warm. Idealistic. Empathic. Possibility-oriented. Insightful. Cooperative. Imaginative. Conscientious. Appreciative. Tactful.', briefDesc: 'Caring, enthusiastic, idealistic, organized,  diplomatic, responsible. Skilled communicators who value connection with people.', 
        longDesc: 'Warm, empathetic, responsive, and responsible.  Highly attuned to the emotions, needs, and motivations of others.  Find potential in everyone, want to help others fulfill their potential.  May act as catalysts for individual and group growth.  Loyal, responsive to praise and criticism.  Sociable, facilitate others in a group, and provide inspiring leadership.', dimFAVW: 0, dimINFO: 3, dimDECI: 5, dimSTRC: 6
    },
    {
        id: 7, name: 'ENFP', image: 'assets/images/ic-ENFP-big.png', group: 'Diplomats', descriptors: 'Campaigner, Champion, Journalist.', tooltipDesc: 'Enthusiastic. Imaginative. Energetic. Creative. Warm. Future-oriented. Individualistic. Insightful. Caring. Optimistic. Possibility focused. Open. Novelty seeking. Spontaneous. Playful.', briefDesc: 'Enthusiastic, creative, spontaneous, optimistic, supportive, playful. Value inspiration, enjoy starting new projects, see potential in others.', 
        longDesc: 'Warmly enthusiastic and imaginative.  See life as full of possibilities.  Make connections between events and information very quickly, and confidently proceed base on the patterns they see. Want a lot of affirmations from others, and readily give appreciation and support.  Spontaneous and flexible, often rely on their ability to improvise and their verbal fluency.', dimFAVW: 0, dimINFO: 3, dimDECI: 5, dimSTRC: 7
    },
    {
        id: 8, name: 'ISTJ', image: 'assets/images/ic-ISTJ-big.png', group: 'Sentinels', descriptors: 'Logistician, Inspector, Trustee.', tooltipDesc: 'Quietly systematic. Factual. Organized. Logical. Detailed. Conscientious. Analytical. Responsible. Pragmatic. Critical. Conservative. Decisive. Stable. Concrete. Efficient.', briefDesc: 'Responsible, sincere, analytical,  reserved, realistic, systematic. Hardworking and trustworthy with sound practical judgment.', 
        longDesc: 'Quiet, serious, earn success by thoroughness and dependability.  Practical, matter-of-fact, realistic, and responsible.  Decide logically what should be done and work toward it steadily, regardless of distractions.  Take pleasure in making everything orderly and organized -- their work, their home, their life.  Value traditions and loyalty.', dimFAVW: 1, dimINFO: 2, dimDECI: 4, dimSTRC: 6
    },
    {
        id: 9, name: 'ISFJ', image: 'assets/images/ic-ISFJ-big.png', group: 'Sentinels', descriptors: 'Defender, Protector, Conservator.', tooltipDesc: 'Quietly warm. Factual. Sympathetic. Detailed. Dependable. Organized. Thorough. Conscientious. Systematic. Conservative. Realistic. Caring. Practical. Stable. Helpful.', briefDesc: 'Warm, considerate, gently responsible, pragmatic, thorough. Devoted caretakers who enjoy being helpful to others.', 
        longDesc: 'Quiet, friendly, responsible, and conscientious.  Committed and steady in meeting their obligations.  Thorough, painstaking, and accurate.  Loyal, considerate, notice and remember specifics about people who are important to them, concerned with how others feel.  Strive to create an orderly and harmonious environment at work and at home.', dimFAVW: 1, dimINFO: 2, dimDECI: 5, dimSTRC: 6
    },
    {
        id: 10, name: 'ESTJ', image: 'assets/images/ic-ESTJ-big.png', group: 'Sentinels', descriptors: 'Executive, Adminstrator.', tooltipDesc: 'Active organizer. Logical. Assertive. Fact minded. Decisive. Practical. Results oriented. Analytical. Systematic. Concrete. Critical. Responsible. Take charge. Common sense.', briefDesc: 'Efficient, outgoing, analytical, systematic, dependable, realistic. Like to run the show and get things done in an orderly fashion.', 
        longDesc: 'Practical, realistic, matter-of-fact.  Decisive, quickly move to implement decisions.  Organize projects and people to get things done, focus on getting results in the most efficient way possible.  Take care of routine details.  Have a clear set of logical standards, systematically follow them and want others to also.  Forceful in implementing their plans.', dimFAVW: 0, dimINFO: 2, dimDECI: 4, dimSTRC: 6
    },
    {
        id: 11, name: 'ESFJ', image: 'assets/images/ic-ESFJ-big.png', group: 'Sentinels', descriptors: 'Consul, Facilitator Caretaker.', tooltipDesc: 'Actively sociable. Warm. Harmonizer. Caring. Enthusiastic. Empathic. People-oriented. Practical. Responsible. Concrete. Orderly. Conscientious. Cooperative. Appreciative. Loyal.', briefDesc: 'Friendly, outgoing, reliable, conscientious, organized, practical. Seek to be helpful and please others, enjoy being active and productive.', 
        longDesc: 'Warmhearted, conscientious, and cooperative.  Want harmony in their environment, work with determination to establish it.  Like to work with others to complete tasks accurately and on time.  Loyal, follow through even in small matters.  Notice what others need in their day-by-day lives and try to provide it.  Want to be appreciated for who they are and for what they contribute.', dimFAVW: 0, dimINFO: 2, dimDECI: 5, dimSTRC: 6
    },
    {
        id: 12, name: 'ISTP', image: 'assets/images/ic-ISTP-big.png', group: 'Explorer', descriptors: 'Virtuoso, Crafter, Artisan.', tooltipDesc: 'Logical. Quietly analytical. Practical. Adaptable. Curious. Cool. Observer. Problem-solver. Exact. Realistic. Troubleshooter. Hands-on. Variety. Adventurous. Independent.', briefDesc: 'Action-oriented, logical, analytical, spontaneous, reserved, independent. Enjoy adventure, skilled at understanding how mechanical things work.', 
        longDesc: 'Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions.  Analyze what makes things work and readily get through large amounts of data to isolate the core of practical problems.  Interested in cause and effect, organize facts using logical principles, value efficiency.', dimFAVW: 1, dimINFO: 2, dimDECI: 4, dimSTRC: 7
    },
    {
        id: 13, name: 'ISFP', image: 'assets/images/ic-ISFP-big.png', group: 'Explorer', descriptors: 'Adventurer, Composer, Artist.', tooltipDesc: 'Gentle. Quietly caring. Compassionate. Adaptable. Modest. Aesthetic. Idealistic. Observant. Loyal. Helpful. Realistic. Patient with details. Spontaneous. Joy in action.', briefDesc: 'Gentle, sensitive, nurturing, helpful, flexible, realistic. Seek to create a personal environment that is both beautiful and practical.', 
        longDesc: 'Quiet, friendly, sensitive, and kind.  Enjoy the present moment, what is going on around them.  Like to have their own space and to work within their own time frame.  Loyal and committed to their values and to people who are important to them.  Dislike disagreements and conflicts, do not force their opinions or values on others.', dimFAVW: 1, dimINFO: 2, dimDECI: 5, dimSTRC: 7
    },
    {
        id: 14, name: 'ESTP', image: 'assets/images/ic-ESTP-big.png', group: 'Explorer', descriptors: 'Entrepreneur, Promoter.', tooltipDesc: 'Excitement seeking. Active. Pragmatic. Direct. Easygoing. Observant. Concrete. Realistic. Adaptable. Efficient. Analytical. Troubleshooter. Spontaneous. Adventurous. Experiential.', briefDesc: 'Outgoing, realistic, action-oriented, curious, versatile, spontaneous. Pragmatic problem solvers and skillful negotiators.', 
        longDesc: 'Flexible and tolerant, they take a pragmatic approach focused on immediate results.  Theories and conceptual explanations bore them -- they want to act energetically to solve the problem.  Focus on the here-and-now, spontaneous, enjoy each moment that they can be active with others.  Enjoy material comforts and style.  Learn best through doing.', dimFAVW: 0, dimINFO: 2, dimDECI: 4, dimSTRC: 7
    },
    {
        id: 15, name: 'ESFP', image: 'assets/images/ic-ESFP-big.png', group: 'Explorer', descriptors: 'Entertainer, Performer.', tooltipDesc: 'Energetic. Sociable. Practical. Friendly, Caring. Expressive. Open. Enthusiastic. Excitement seeking. Spontaneous. Resourceful. Adaptable. Observant. Hands-on. Generous. Fun-loving.', briefDesc: 'Playful, enthusiastic, friendly, spontaneous, tactful, flexible. Have strong common sense, enjoy helping people in tangible ways.', 
        longDesc: 'Outgoing, friendly, and accepting.  Exuberant lovers of life, people, and material comforts.  Enjoy working with others to make things happen.  Bring common sense and a realistic approach to their work, and make work fun.  Flexible and spontaneous, adapt readily to new people and environments.  Learn best by trying a new skill with other people.', dimFAVW: 0, dimINFO: 2, dimDECI: 5, dimSTRC: 7
    }

];
 