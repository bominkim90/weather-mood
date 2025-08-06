import { RecordsStatus } from '@/model/record';

const records: RecordsStatus = {
  eachEmotionCount: {
    Happy: 1,
    'So-so': 1,
    Sad: 1,
    Angry: 1,
    Smile: 1,
    Excited: 1,
  },
  list: [
    {
      main: 'sunny',
      cityName: 'Seoul, Korea',
      feelings: {
        name: 'Happy',
        id: 5,
      },
      memo: 'Beautiful sunny day in Seoul! Walked through Hangang Park and felt so energized by the warm sunshine.',
      createdAt: '2024-12-01',
    },
    {
      main: 'cloudy',
      cityName: 'Tokyo, Japan',
      feelings: {
        name: 'So-so',
        id: 3,
      },
      memo: 'Overcast day in Shibuya. The weather matched my neutral mood perfectly. Had some good ramen though.',
      createdAt: '2024-12-02',
    },
    {
      main: 'rainy',
      cityName: 'London, UK',
      feelings: {
        name: 'Sad',
        id: 1,
      },
      memo: 'Typical London rain. Feeling a bit homesick today. The grey skies make everything feel melancholic.',
      createdAt: '2024-12-03',
    },
    {
      main: 'sunny',
      cityName: 'Sydney, Australia',
      feelings: {
        name: 'Excited',
        id: 6,
      },
      memo: 'Amazing sunny day at Bondi Beach! The ocean breeze and sunshine filled me with pure joy and excitement.',
      createdAt: '2024-12-04',
    },
    {
      main: 'thunderstorm',
      cityName: 'New York, USA',
      feelings: {
        name: 'Angry',
        id: 2,
      },
      memo: 'Intense thunderstorm in Manhattan. Traffic was horrible and I got completely soaked. Very frustrating day.',
      createdAt: '2024-12-05',
    },
    {
      main: 'snow',
      cityName: 'Stockholm, Sweden',
      feelings: {
        name: 'Happy',
        id: 5,
      },
      memo: 'First snow of the season! Everything looks magical covered in white. Built a small snowman in the park.',
      createdAt: '2024-12-06',
    },
    {
      main: 'clear',
      cityName: 'Los Angeles, USA',
      feelings: {
        name: 'Smile',
        id: 4,
      },
      memo: 'Perfect clear day in LA. Drove down the coast with the windows down. California weather never disappoints.',
      createdAt: '2024-12-07',
    },
    {
      main: 'fog',
      cityName: 'San Francisco, USA',
      feelings: {
        name: 'So-so',
        id: 3,
      },
      memo: 'Typical SF fog rolling in from the bay. Could barely see the Golden Gate Bridge. Mysterious but chilly.',
      createdAt: '2024-12-08',
    },
    {
      main: 'windy',
      cityName: 'Chicago, USA',
      feelings: {
        name: 'Excited',
        id: 6,
      },
      memo: 'Super windy day in the Windy City! Hair everywhere but felt so alive walking along Lake Michigan.',
      createdAt: '2024-12-09',
    },
    {
      main: 'sunny',
      cityName: 'Barcelona, Spain',
      feelings: {
        name: 'Happy',
        id: 5,
      },
      memo: 'Gorgeous sunny afternoon in Park Güell. The colorful mosaics sparkled in the sunlight. Pure happiness!',
      createdAt: '2024-12-10',
    },
    {
      main: 'rainy',
      cityName: 'Paris, France',
      feelings: {
        name: 'Sad',
        id: 1,
      },
      memo: 'Rainy day by the Seine. Even the Eiffel Tower looked gloomy through the rain. Missing home today.',
      createdAt: '2024-12-11',
    },
    {
      main: 'cloudy',
      cityName: 'Berlin, Germany',
      feelings: {
        name: 'Smile',
        id: 4,
      },
      memo: 'Cloudy but pleasant day exploring the Brandenburg Gate. The cool weather was perfect for walking.',
      createdAt: '2024-12-12',
    },
    {
      main: 'sunny',
      cityName: 'Dubai, UAE',
      feelings: {
        name: 'Excited',
        id: 6,
      },
      memo: 'Blazing sunshine in Dubai! Visited the Burj Khalifa and felt on top of the world. What an adventure!',
      createdAt: '2024-12-13',
    },
    {
      main: 'drizzle',
      cityName: 'Vancouver, Canada',
      feelings: {
        name: 'So-so',
        id: 3,
      },
      memo: 'Light drizzle all day. Spent time in a cozy coffee shop reading. The rain was actually quite soothing.',
      createdAt: '2024-12-14',
    },
    {
      main: 'hail',
      cityName: 'Denver, USA',
      feelings: {
        name: 'Angry',
        id: 2,
      },
      memo: 'Unexpected hailstorm ruined my outdoor plans. Had to take shelter and wait it out. So annoying!',
      createdAt: '2024-12-15',
    },
    {
      main: 'sunny',
      cityName: 'Rio de Janeiro, Brazil',
      feelings: {
        name: 'Happy',
        id: 5,
      },
      memo: 'Perfect beach day at Copacabana! The sun, sand, and waves created the most joyful atmosphere.',
      createdAt: '2024-12-16',
    },
    {
      main: 'overcast',
      cityName: 'Edinburgh, Scotland',
      feelings: {
        name: 'Smile',
        id: 4,
      },
      memo: 'Overcast day exploring Edinburgh Castle. The moody weather added character to the ancient stones.',
      createdAt: '2024-12-17',
    },
    {
      main: 'mist',
      cityName: 'Reykjavik, Iceland',
      feelings: {
        name: 'Excited',
        id: 6,
      },
      memo: 'Mystical morning mist around the Blue Lagoon. Felt like being in a fairy tale. Absolutely magical!',
      createdAt: '2024-12-18',
    },
    {
      main: 'sunny',
      cityName: 'Cape Town, South Africa',
      feelings: {
        name: 'Happy',
        id: 5,
      },
      memo: 'Stunning sunny day with Table Mountain in full view. The natural beauty here is breathtaking.',
      createdAt: '2024-12-19',
    },
    {
      main: 'rainy',
      cityName: 'Mumbai, India',
      feelings: {
        name: 'Sad',
        id: 1,
      },
      memo: 'Heavy monsoon rains flooded the streets. Stuck indoors feeling a bit isolated from the world.',
      createdAt: '2024-12-20',
    },
    {
      main: 'clear',
      cityName: 'Athens, Greece',
      feelings: {
        name: 'Excited',
        id: 6,
      },
      memo: 'Crystal clear day at the Acropolis! The ancient history combined with perfect weather was inspiring.',
      createdAt: '2024-12-21',
    },
    {
      main: 'partly_cloudy',
      cityName: 'Amsterdam, Netherlands',
      feelings: {
        name: 'Smile',
        id: 4,
      },
      memo: 'Nice partly cloudy day cycling along the canals. The Dutch weather was surprisingly pleasant.',
      createdAt: '2024-12-22',
    },
    {
      main: 'snow',
      cityName: 'Moscow, Russia',
      feelings: {
        name: 'So-so',
        id: 3,
      },
      memo: 'Heavy snowfall in Red Square. Beautiful but freezing cold. The winter here is no joke.',
      createdAt: '2024-12-23',
    },
    {
      main: 'sunny',
      cityName: 'Bangkok, Thailand',
      feelings: {
        name: 'Happy',
        id: 5,
      },
      memo: 'Hot and sunny day exploring the temples. The golden Buddhas gleamed in the tropical sunlight.',
      createdAt: '2024-12-24',
    },
    {
      main: 'thunderstorm',
      cityName: 'Singapore',
      feelings: {
        name: 'Angry',
        id: 2,
      },
      memo: 'Sudden tropical thunderstorm caught me off guard. Got drenched running for cover. Very irritating!',
      createdAt: '2024-12-25',
    },
    {
      main: 'clear',
      cityName: 'Zurich, Switzerland',
      feelings: {
        name: 'Smile',
        id: 4,
      },
      memo: 'Crisp clear day in the Swiss Alps. The mountain air and stunning views lifted my spirits.',
      createdAt: '2024-12-26',
    },
    {
      main: 'fog',
      cityName: 'Hong Kong',
      feelings: {
        name: 'So-so',
        id: 3,
      },
      memo: 'Dense fog covered Victoria Harbour. Could barely see the skyline. Felt a bit disconnected.',
      createdAt: '2024-12-27',
    },
    {
      main: 'sunny',
      cityName: 'Tel Aviv, Israel',
      feelings: {
        name: 'Excited',
        id: 6,
      },
      memo: 'Gorgeous sunny day at the Mediterranean beach. The warm sun and sea breeze were absolutely perfect!',
      createdAt: '2024-12-28',
    },
    {
      main: 'windy',
      cityName: 'Buenos Aires, Argentina',
      feelings: {
        name: 'Happy',
        id: 5,
      },
      memo: 'Breezy day in Plaza de Mayo. The wind carried the sounds of tango music from nearby cafés.',
      createdAt: '2024-12-29',
    },
    {
      main: 'cloudy',
      cityName: 'Seoul, Korea',
      feelings: {
        name: 'Smile',
        id: 4,
      },
      memo: 'Cloudy but comfortable day in Myeongdong. Perfect weather for shopping and trying street food.',
      createdAt: '2024-12-30',
    },
  ],
};

export default records;
