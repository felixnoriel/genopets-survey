export enum QuestionInputType {
  RANKED = 'ranked',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
}
export type SurveyQuestionType = {
  title: string;
  choices: string[];
  type: QuestionInputType | string;
};
export type SurveyQuestion = {
  id: string;
  title: string;
  choices: string[];
  type: QuestionInputType;
};
export const SurveyQuestionsData: SurveyQuestion[] = [
  {
    id: '1',
    title: `Do you solemnly swear to answer the following questions truthfully?`,
    choices: [`I do`, `I do not`],
    type: QuestionInputType.RADIO,
  },

  {
    id: '2',
    title: `If you had the choice between a rather minimal game (less features, possible bugs) that you could play today vs a more full fledged game that you could play before a public release, which would you choose?`,
    choices: [
      `Today - A simple game where I can gain experience while walking`,
      `Near Future - A more full fledged game including battling, habitats, evolution, & augments`,
      `Neither - I would prefer to wait for a public release`,
    ],
    type: QuestionInputType.RADIO,
  },

  {
    id: '3',
    title: `Which features made you want to play Genopets the most? Please rank 1-6 with 1 being the most`,
    choices: [
      `Building an active lifestyle`,
      `Nurturing and customizing your Genopet`,
      `Exploring the Genoverse`,
      `Battling`,
      `Crafting items and accessories`,
      `Earning Tokens`,
    ],

    type: QuestionInputType.RANKED,
  },

  {
    id: '4',
    title: `What level of feedback are you willing to give?`,
    choices: [
      `None - I’m not interested in providing feedback`,
      `Minimal - I can share some thoughts on discord polls if I see them`,
      `Moderate - I’ll respond to email surveys if you send them out`,
      `In Depth - I can take screenshots or record my screen to share thoughts & suggestions`,
      `Maximum - I’d love to get on a zoom call with the genopets team and do a user interview`,
    ],
    type: QuestionInputType.RADIO,
  },

  {
    id: '5',
    title: `Which of the following best describes your interests?`,
    choices: [`Gaming`, `Crypto`, `Active Lifestyle`, `None of these`],
    type: QuestionInputType.RANKED,
  },

  {
    id: '6',
    title: `What device will you play Genopets on?`,
    choices: [`iPhone`, `Android`, `Neither`],
    type: QuestionInputType.RADIO,
  },

  {
    id: '7',
    title: `How long ago was your phone model released?`,
    choices: [`<1 year`, `1-2 years`, `2-4 years`, `4+ years`],
    type: QuestionInputType.RADIO,
  },

  {
    id: '8',
    title: `How experienced are you with crypto? (Select all that apply)`,
    choices: [
      `DeFi`,
      `IDOs`,
      `NFTs`,
      `GameFi`,
      `Trading on Coinbase, FTX, or Binance`,
      `wagmi`,
    ],
    type: QuestionInputType.CHECKBOX,
  },

  {
    id: '9',
    title: `Have you played any other Play-to-Earn games such as Axie Infinity or Thetan Arena?`,
    choices: [`Yes`, `No`],
    type: QuestionInputType.RADIO,
  },

  {
    id: '10',
    title: `Do you have any technical expertise? (Select all that apply)`,
    choices: [
      `UI/UX Design`,
      `Sound Design / Music Production`,
      `3D Artist`,
      `2D Artist`,
      `Mobile/Web Development`,
      `Blockchain Development`,
      `Solana Development`,
      `Game Design`,
      `Game Story Writing`,
      `None of the above`,
    ],
    type: QuestionInputType.CHECKBOX,
  },
];
