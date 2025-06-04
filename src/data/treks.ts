// Trek data structure
export interface Trek {
  id: string;
  name: string;
  region: string;
  description: string;
  shortDescription: string;
  duration: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult';
  maxElevation: number;
  bestSeason: string;
  basePrice: number;
  pricePerDay: number;
  accommodationOptions: {
    basic: { description: string; pricePerNight: number };
    standard: { description: string; pricePerNight: number };
    comfort: { description: string; pricePerNight: number };
  };
  itinerary: {
    day: number;
    title: string;
    description: string;
    elevation: number;
    hours: number;
    accommodation: string;
  }[];
  highlights: string[];
  images: string[];
  mapImage?: string;
  guides: string[]; // IDs of guides available for this trek
  featured: boolean;
}

// Trek data
export const treks: Trek[] = [
  {
    id: 'everest-base-camp',
    name: 'Everest Base Camp',
    region: 'Everest',
    description: 'The Everest Base Camp trek is one of the most popular trekking routes in Nepal, taking you through stunning Sherpa villages, monasteries, and offering incredible views of the world\'s highest peak, Mount Everest (8,848m). Experience the rich Sherpa culture while walking in the footsteps of legendary mountaineers.',
    shortDescription: 'Trek to the foot of the world\'s highest mountain through Sherpa villages and breathtaking landscapes.',
    duration: 14,
    difficulty: 'Challenging',
    maxElevation: 5545,
    bestSeason: 'March-May, September-November',
    basePrice: 1200,
    pricePerDay: 100,
    accommodationOptions: {
      basic: {
        description: 'Basic teahouse with shared facilities',
        pricePerNight: 15
      },
      standard: {
        description: 'Standard teahouse with private room and shared bathroom',
        pricePerNight: 30
      },
      comfort: {
        description: 'Comfort lodge with private bathroom and hot shower',
        pricePerNight: 60
      }
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Upon arrival at Tribhuvan International Airport, you will be met by our representative and transferred to your hotel in Kathmandu. In the evening, you\'ll have a trek briefing and welcome dinner.',
        elevation: 1400,
        hours: 0,
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 2,
        title: 'Fly to Lukla (2,840m) and trek to Phakding (2,610m)',
        description: 'After an early breakfast, we\'ll take a scenic flight to Lukla, the gateway to the Everest region. From Lukla, we\'ll trek to Phakding, descending through forests and alongside the Dudh Koshi River.',
        elevation: 2610,
        hours: 3,
        accommodation: 'Teahouse in Phakding'
      },
      {
        day: 3,
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Today\'s trek takes us through pine forests and across suspension bridges to the famous Sherpa village of Namche Bazaar, the commercial hub of the Khumbu region.',
        elevation: 3440,
        hours: 6,
        accommodation: 'Teahouse in Namche Bazaar'
      },
      {
        day: 4,
        title: 'Acclimatization day in Namche Bazaar',
        description: 'We\'ll spend a day in Namche to acclimatize. You can explore the village, visit the Sherpa Culture Museum, or hike to the Everest View Hotel for panoramic mountain views.',
        elevation: 3440,
        hours: 3,
        accommodation: 'Teahouse in Namche Bazaar'
      },
      {
        day: 5,
        title: 'Trek to Tengboche (3,860m)',
        description: 'The trail continues with spectacular views of Everest, Nuptse, and Lhotse. We\'ll visit the famous Tengboche Monastery, the largest in the Khumbu region.',
        elevation: 3860,
        hours: 5,
        accommodation: 'Teahouse in Tengboche'
      },
      {
        day: 6,
        title: 'Trek to Dingboche (4,410m)',
        description: 'Today we trek to Dingboche, crossing the tree line. The landscape becomes more barren but offers stunning views of Ama Dablam and other peaks.',
        elevation: 4410,
        hours: 5,
        accommodation: 'Teahouse in Dingboche'
      },
      {
        day: 7,
        title: 'Acclimatization day in Dingboche',
        description: 'Another acclimatization day. We\'ll take a hike to Nangkartshang Peak for views of Makalu, Lhotse, and Cho Oyu.',
        elevation: 4410,
        hours: 3,
        accommodation: 'Teahouse in Dingboche'
      },
      {
        day: 8,
        title: 'Trek to Lobuche (4,940m)',
        description: 'We\'ll trek to Lobuche, passing the memorial site for climbers who lost their lives on Everest. The trail offers stunning views of the Khumbu Glacier.',
        elevation: 4940,
        hours: 5,
        accommodation: 'Teahouse in Lobuche'
      },
      {
        day: 9,
        title: 'Trek to Gorak Shep (5,170m) and Everest Base Camp (5,364m)',
        description: 'An early start for the challenging trek to Gorak Shep. After lunch, we\'ll continue to Everest Base Camp for a close-up view of the Khumbu Icefall.',
        elevation: 5170,
        hours: 7,
        accommodation: 'Teahouse in Gorak Shep'
      },
      {
        day: 10,
        title: 'Hike to Kala Patthar (5,545m) and trek to Pheriche (4,280m)',
        description: 'Early morning hike to Kala Patthar for sunrise views of Everest. We\'ll then return to Gorak Shep for breakfast before descending to Pheriche.',
        elevation: 4280,
        hours: 7,
        accommodation: 'Teahouse in Pheriche'
      },
      {
        day: 11,
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Continue descending through rhododendron and pine forests back to Namche Bazaar.',
        elevation: 3440,
        hours: 6,
        accommodation: 'Teahouse in Namche Bazaar'
      },
      {
        day: 12,
        title: 'Trek to Lukla (2,840m)',
        description: 'The final day of trekking brings us back to Lukla, where we\'ll celebrate the completion of our trek.',
        elevation: 2840,
        hours: 6,
        accommodation: 'Teahouse in Lukla'
      },
      {
        day: 13,
        title: 'Fly to Kathmandu',
        description: 'Early morning flight back to Kathmandu. Free time to explore the city or shop for souvenirs.',
        elevation: 1400,
        hours: 1,
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 14,
        title: 'Departure from Kathmandu',
        description: 'Transfer to the airport for your departure flight. End of services.',
        elevation: 1400,
        hours: 0,
        accommodation: 'N/A'
      }
    ],
    highlights: [
      'Stand at the base of the world\'s highest mountain',
      'Panoramic views from Kala Patthar',
      'Experience Sherpa culture in Namche Bazaar',
      'Visit the historic Tengboche Monastery',
      'Dramatic mountain scenery throughout the trek'
    ],
    images: [
      'https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6650429/pexels-photo-6650429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6442581/pexels-photo-6442581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6650615/pexels-photo-6650615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    guides: ['guide-1', 'guide-2', 'guide-3'],
    featured: true
  },
  {
    id: 'annapurna-base-camp',
    name: 'Annapurna Base Camp',
    region: 'Annapurna',
    description: 'The Annapurna Base Camp trek takes you into the heart of the Annapurna range, through diverse landscapes ranging from lush subtropical forests to high alpine meadows. You\'ll experience rich cultural diversity as you pass through villages of different ethnic groups, all while being surrounded by some of the world\'s highest peaks.',
    shortDescription: 'Journey into the sanctuary of the Annapurna massif through diverse terrain and traditional villages.',
    duration: 11,
    difficulty: 'Moderate',
    maxElevation: 4130,
    bestSeason: 'March-May, September-November',
    basePrice: 950,
    pricePerDay: 90,
    accommodationOptions: {
      basic: {
        description: 'Basic teahouse with shared facilities',
        pricePerNight: 12
      },
      standard: {
        description: 'Standard teahouse with private room and shared bathroom',
        pricePerNight: 25
      },
      comfort: {
        description: 'Comfort lodge with private bathroom and hot shower',
        pricePerNight: 50
      }
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Upon arrival, you\'ll be transferred to your hotel in Kathmandu. In the evening, we\'ll have a trek briefing and welcome dinner.',
        elevation: 1400,
        hours: 0,
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 2,
        title: 'Drive to Pokhara (820m)',
        description: 'After breakfast, we\'ll take a scenic drive to Pokhara, Nepal\'s beautiful lakeside city. Evening free to explore the lakeside area.',
        elevation: 820,
        hours: 7,
        accommodation: 'Hotel in Pokhara'
      },
      {
        day: 3,
        title: 'Drive to Nayapul and trek to Tikhedhunga (1,540m)',
        description: 'A short drive to Nayapul marks the start of our trek. We\'ll hike along the Modi Khola river to Tikhedhunga.',
        elevation: 1540,
        hours: 4,
        accommodation: 'Teahouse in Tikhedhunga'
      },
      {
        day: 4,
        title: 'Trek to Ghorepani (2,860m)',
        description: 'Today involves a challenging ascent up stone steps to the village of Ghorepani, famous for its rhododendron forests.',
        elevation: 2860,
        hours: 6,
        accommodation: 'Teahouse in Ghorepani'
      },
      {
        day: 5,
        title: 'Hike to Poon Hill (3,210m) and trek to Tadapani (2,630m)',
        description: 'Early morning hike to Poon Hill for sunrise views of the Annapurna and Dhaulagiri ranges. After breakfast, we\'ll continue to Tadapani.',
        elevation: 2630,
        hours: 5,
        accommodation: 'Teahouse in Tadapani'
      },
      {
        day: 6,
        title: 'Trek to Chhomrong (2,170m)',
        description: 'The trail descends through rhododendron forest to the Gurung village of Chhomrong, offering great views of Annapurna South and Machhapuchhre.',
        elevation: 2170,
        hours: 5,
        accommodation: 'Teahouse in Chhomrong'
      },
      {
        day: 7,
        title: 'Trek to Dovan (2,580m)',
        description: 'Today we enter the Modi Khola valley and follow the river upstream through bamboo forests to Dovan.',
        elevation: 2580,
        hours: 6,
        accommodation: 'Teahouse in Dovan'
      },
      {
        day: 8,
        title: 'Trek to Annapurna Base Camp (4,130m)',
        description: 'A challenging day as we ascend through the alpine zone to Machhapuchhre Base Camp and then continue to Annapurna Base Camp, surrounded by the Annapurna massif.',
        elevation: 4130,
        hours: 7,
        accommodation: 'Teahouse at Annapurna Base Camp'
      },
      {
        day: 9,
        title: 'Sunrise at ABC and trek to Bamboo (2,310m)',
        description: 'After enjoying sunrise amidst the mountain panorama, we\'ll begin our descent back to Bamboo.',
        elevation: 2310,
        hours: 6,
        accommodation: 'Teahouse in Bamboo'
      },
      {
        day: 10,
        title: 'Trek to Jhinu Danda (1,780m) and hot springs',
        description: 'Continue descending to Jhinu Danda. In the afternoon, enjoy the natural hot springs by the Modi Khola river.',
        elevation: 1780,
        hours: 5,
        accommodation: 'Teahouse in Jhinu Danda'
      },
      {
        day: 11,
        title: 'Trek to Nayapul and drive to Pokhara',
        description: 'Our final day of trekking brings us back to Nayapul, from where we\'ll drive to Pokhara.',
        elevation: 820,
        hours: 5,
        accommodation: 'Hotel in Pokhara'
      }
    ],
    highlights: [
      'Panoramic sunrise from Poon Hill',
      'Standing in the amphitheater of mountains at Annapurna Base Camp',
      'Views of Machhapuchhre (Fishtail Mountain)',
      'Experiencing Gurung culture in traditional villages',
      'Relaxing in natural hot springs at Jhinu Danda'
    ],
    images: [
      'https://images.pexels.com/photos/2609459/pexels-photo-2609459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/10845118/pexels-photo-10845118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6650053/pexels-photo-6650053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    guides: ['guide-2', 'guide-4', 'guide-5'],
    featured: true
  },
  {
    id: 'gokyo-lakes',
    name: 'Gokyo Lakes Trek',
    region: 'Everest',
    description: 'The Gokyo Lakes trek is a stunning alternative to the classic Everest Base Camp route, taking you to the beautiful turquoise lakes of Gokyo and offering exceptional views of four 8,000m peaks. This trek provides a more peaceful experience with fewer trekkers while still showcasing the majesty of the Everest region.',
    shortDescription: 'Discover the turquoise Gokyo Lakes and climb Gokyo Ri for panoramic views of Everest and Cho Oyu.',
    duration: 12,
    difficulty: 'Moderate',
    maxElevation: 5360,
    bestSeason: 'March-May, September-November',
    basePrice: 1100,
    pricePerDay: 95,
    accommodationOptions: {
      basic: {
        description: 'Basic teahouse with shared facilities',
        pricePerNight: 15
      },
      standard: {
        description: 'Standard teahouse with private room and shared bathroom',
        pricePerNight: 30
      },
      comfort: {
        description: 'Comfort lodge with private bathroom and hot shower',
        pricePerNight: 55
      }
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Arrive in Kathmandu and transfer to your hotel. Evening trek briefing and welcome dinner.',
        elevation: 1400,
        hours: 0,
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 2,
        title: 'Fly to Lukla (2,840m) and trek to Phakding (2,610m)',
        description: 'Early morning flight to Lukla followed by a trek to Phakding along the Dudh Koshi River.',
        elevation: 2610,
        hours: 3,
        accommodation: 'Teahouse in Phakding'
      },
      {
        day: 3,
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Uphill trek through forests and suspension bridges to the main trading center of the region, Namche Bazaar.',
        elevation: 3440,
        hours: 6,
        accommodation: 'Teahouse in Namche Bazaar'
      },
      {
        day: 4,
        title: 'Acclimatization day in Namche Bazaar',
        description: 'Rest day with optional hike to Everest View Hotel for acclimatization.',
        elevation: 3440,
        hours: 3,
        accommodation: 'Teahouse in Namche Bazaar'
      },
      {
        day: 5,
        title: 'Trek to Dole (4,110m)',
        description: 'We leave the main Everest trail and head toward the Gokyo Valley, climbing gradually to Dole.',
        elevation: 4110,
        hours: 5,
        accommodation: 'Teahouse in Dole'
      },
      {
        day: 6,
        title: 'Trek to Machhermo (4,470m)',
        description: 'Short but steep climb to Machhermo with views of Cho Oyu and surrounding peaks.',
        elevation: 4470,
        hours: 4,
        accommodation: 'Teahouse in Machhermo'
      },
      {
        day: 7,
        title: 'Trek to Gokyo (4,790m)',
        description: 'Trek to Gokyo village, passing the first and second Gokyo lakes. Afternoon to explore the third lake.',
        elevation: 4790,
        hours: 5,
        accommodation: 'Teahouse in Gokyo'
      },
      {
        day: 8,
        title: 'Hike to Gokyo Ri (5,360m) and explore Fifth Lake',
        description: 'Early morning climb to Gokyo Ri for sunrise views of Everest, Lhotse, Makalu, and Cho Oyu. Later, optional hike to the fifth lake.',
        elevation: 4790,
        hours: 6,
        accommodation: 'Teahouse in Gokyo'
      },
      {
        day: 9,
        title: 'Trek to Dole (4,110m)',
        description: 'Begin descent back down the valley to Dole.',
        elevation: 4110,
        hours: 5,
        accommodation: 'Teahouse in Dole'
      },
      {
        day: 10,
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Continue descending through rhododendron forests back to Namche Bazaar.',
        elevation: 3440,
        hours: 5,
        accommodation: 'Teahouse in Namche Bazaar'
      },
      {
        day: 11,
        title: 'Trek to Lukla (2,840m)',
        description: 'Final day of trekking, returning to Lukla.',
        elevation: 2840,
        hours: 6,
        accommodation: 'Teahouse in Lukla'
      },
      {
        day: 12,
        title: 'Fly to Kathmandu',
        description: 'Morning flight back to Kathmandu. Free afternoon for shopping or sightseeing.',
        elevation: 1400,
        hours: 1,
        accommodation: 'Hotel in Kathmandu'
      }
    ],
    highlights: [
      'Stunning turquoise Gokyo Lakes',
      'Panoramic views from Gokyo Ri',
      'Views of four 8,000m peaks: Everest, Lhotse, Makalu, and Cho Oyu',
      'Less crowded alternative to Everest Base Camp',
      'Ngozumpa Glacier, the largest glacier in Nepal'
    ],
    images: [
      'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6650031/pexels-photo-6650031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6650576/pexels-photo-6650576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6650653/pexels-photo-6650653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    guides: ['guide-1', 'guide-3', 'guide-6'],
    featured: true
  },
  {
    id: 'annapurna-circuit',
    name: 'Annapurna Circuit',
    region: 'Annapurna',
    description: 'The Annapurna Circuit is one of the world\'s classic treks, encircling the Annapurna massif and crossing the challenging Thorong La Pass (5,416m). This journey showcases Nepal\'s incredible diversity, from subtropical valleys and terraced farmland to high alpine landscapes and the arid terrain of the Mustang region.',
    shortDescription: 'Complete the classic circuit around the Annapurna massif, crossing the challenging Thorong La Pass.',
    duration: 18,
    difficulty: 'Challenging',
    maxElevation: 5416,
    bestSeason: 'March-May, September-November',
    basePrice: 1400,
    pricePerDay: 85,
    accommodationOptions: {
      basic: {
        description: 'Basic teahouse with shared facilities',
        pricePerNight: 12
      },
      standard: {
        description: 'Standard teahouse with private room and shared bathroom',
        pricePerNight: 25
      },
      comfort: {
        description: 'Comfort lodge with private bathroom and hot shower',
        pricePerNight: 50
      }
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Arrive in Kathmandu and transfer to your hotel. Evening trek briefing and welcome dinner.',
        elevation: 1400,
        hours: 0,
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 2,
        title: 'Drive to Besisahar (760m)',
        description: 'Drive from Kathmandu to Besisahar, the traditional starting point of the Annapurna Circuit.',
        elevation: 760,
        hours: 7,
        accommodation: 'Teahouse in Besisahar'
      },
      {
        day: 3,
        title: 'Trek to Ngadi (930m)',
        description: 'Begin trekking along the Marsyangdi River valley.',
        elevation: 930,
        hours: 4,
        accommodation: 'Teahouse in Ngadi'
      },
      {
        day: 4,
        title: 'Trek to Jagat (1,300m)',
        description: 'Continue following the river, passing through traditional villages.',
        elevation: 1300,
        hours: 6,
        accommodation: 'Teahouse in Jagat'
      },
      {
        day: 5,
        title: 'Trek to Dharapani (1,860m)',
        description: 'The trail continues to climb gradually with views of waterfalls and surrounding peaks.',
        elevation: 1860,
        hours: 6,
        accommodation: 'Teahouse in Dharapani'
      },
      {
        day: 6,
        title: 'Trek to Chame (2,670m)',
        description: 'Enter pine forests with views of Annapurna II becoming visible.',
        elevation: 2670,
        hours: 5,
        accommodation: 'Teahouse in Chame'
      },
      {
        day: 7,
        title: 'Trek to Upper Pisang (3,300m)',
        description: 'The landscape changes dramatically as we enter the upper Manang valley.',
        elevation: 3300,
        hours: 5,
        accommodation: 'Teahouse in Upper Pisang'
      },
      {
        day: 8,
        title: 'Trek to Manang (3,540m)',
        description: 'Take the high route through Ghyaru and Ngawal with spectacular mountain views.',
        elevation: 3540,
        hours: 6,
        accommodation: 'Teahouse in Manang'
      },
      {
        day: 9,
        title: 'Acclimatization day in Manang',
        description: 'Rest day with optional hike to Ice Lake or Gangapurna Lake for acclimatization.',
        elevation: 3540,
        hours: 3,
        accommodation: 'Teahouse in Manang'
      },
      {
        day: 10,
        title: 'Trek to Yak Kharka (4,018m)',
        description: 'Short but important acclimatization trek to higher elevation.',
        elevation: 4018,
        hours: 4,
        accommodation: 'Teahouse in Yak Kharka'
      },
      {
        day: 11,
        title: 'Trek to Thorong Phedi (4,450m)',
        description: 'Final preparation day before crossing the pass, with a short steep climb to Thorong Phedi.',
        elevation: 4450,
        hours: 3,
        accommodation: 'Teahouse in Thorong Phedi'
      },
      {
        day: 12,
        title: 'Cross Thorong La Pass (5,416m) and trek to Muktinath (3,800m)',
        description: 'Early start for the challenging crossing of Thorong La Pass, followed by a long descent to the sacred temple town of Muktinath.',
        elevation: 3800,
        hours: 8,
        accommodation: 'Teahouse in Muktinath'
      },
      {
        day: 13,
        title: 'Trek to Jomsom (2,720m)',
        description: 'Descend through the dramatic Kali Gandaki valley, known for its strong winds and arid landscape.',
        elevation: 2720,
        hours: 5,
        accommodation: 'Teahouse in Jomsom'
      },
      {
        day: 14,
        title: 'Trek to Kalopani (2,530m)',
        description: 'Continue down the Kali Gandaki valley with views of Dhaulagiri and Annapurna I.',
        elevation: 2530,
        hours: 6,
        accommodation: 'Teahouse in Kalopani'
      },
      {
        day: 15,
        title: 'Trek to Tatopani (1,190m)',
        description: 'Long descent to the hot springs at Tatopani.',
        elevation: 1190,
        hours: 6,
        accommodation: 'Teahouse in Tatopani'
      },
      {
        day: 16,
        title: 'Trek to Ghorepani (2,860m)',
        description: 'Steep ascent through rhododendron forests to Ghorepani.',
        elevation: 2860,
        hours: 7,
        accommodation: 'Teahouse in Ghorepani'
      },
      {
        day: 17,
        title: 'Hike to Poon Hill (3,210m) and trek to Nayapul, drive to Pokhara',
        description: 'Early morning hike to Poon Hill for sunrise, then descend to Nayapul and drive to Pokhara.',
        elevation: 820,
        hours: 6,
        accommodation: 'Hotel in Pokhara'
      },
      {
        day: 18,
        title: 'Drive to Kathmandu',
        description: 'Return to Kathmandu by road. Farewell dinner in the evening.',
        elevation: 1400,
        hours: 7,
        accommodation: 'Hotel in Kathmandu'
      }
    ],
    highlights: [
      'Crossing the challenging Thorong La Pass (5,416m)',
      'Diverse landscapes from subtropical to alpine to arid',
      'Cultural diversity with Hindu, Buddhist, and Thakali influences',
      'Sacred temple complex at Muktinath',
      'Sunrise at Poon Hill over Dhaulagiri and Annapurna',
      'Natural hot springs at Tatopani'
    ],
    images: [
      'https://images.pexels.com/photos/4591254/pexels-photo-4591254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2734522/pexels-photo-2734522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5472581/pexels-photo-5472581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6012007/pexels-photo-6012007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    guides: ['guide-2', 'guide-4', 'guide-5'],
    featured: true
  }
];