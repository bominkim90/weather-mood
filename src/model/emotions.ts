interface Emotion {
  id: number;
  name: string;
  icon: string;
}

export const emotions: Emotion[] = [
  { id: 1, name: 'Sad', icon: '/icons/emotion/emotion_1.svg' },
  { id: 2, name: 'Angry', icon: '/icons/emotion/emotion_2.svg' },
  { id: 3, name: 'So-so', icon: '/icons/emotion/emotion_3.svg' },
  { id: 4, name: 'Smile', icon: '/icons/emotion/emotion_4.svg' },
  { id: 5, name: 'Happy', icon: '/icons/emotion/emotion_5.svg' },
  { id: 6, name: 'Excited', icon: '/icons/emotion/emotion_6.svg' },
];

export const emotionLabels: Record<number, string> = {
  1: 'Sad',
  2: 'Angry',
  3: 'So-so',
  4: 'Smile',
  5: 'Happy',
  6: 'Excited',
};
