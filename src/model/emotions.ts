interface Emotion {
  id: number;
  name: string;
  icon: string;
  color: string;
}

export const emotions: Emotion[] = [
  {
    id: 1,
    name: 'Sad',
    icon: '/icons/emotion/emotion_1.svg',
    color: '#FEE2E2',
  },
  {
    id: 2,
    name: 'Angry',
    icon: '/icons/emotion/emotion_2.svg',
    color: '#FEF3C7',
  },
  {
    id: 3,
    name: 'So-so',
    icon: '/icons/emotion/emotion_3.svg',
    color: '#FEF9C3',
  },
  {
    id: 4,
    name: 'Smile',
    icon: '/icons/emotion/emotion_4.svg',
    color: '#D1FAE5',
  },
  {
    id: 5,
    name: 'Happy',
    icon: '/icons/emotion/emotion_5.svg',
    color: '#DBEAFE',
  },
  {
    id: 6,
    name: 'Excited',
    icon: '/icons/emotion/emotion_6.svg',
    color: '#EDE9FE',
  },
];
