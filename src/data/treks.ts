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
    ],
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
    ],
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
    ],
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
    ],
    featured: true
  },
  {
    id: 'great-tilicho-lake-trek',
    name: 'The Great Tilicho Lake Trek',
    region: 'Annapurna',
    description:
      "The Great Tilicho Lake Trek is a spectacular journey through the Annapurna region that leads to Tilicho Lake (4,919m) one of the highest lakes in the world. This trek combines classic Himalayan landscapes with diverse culture, dramatic gorges, and breathtaking views of Annapurna, Gangapurna, and Tilicho Peak. The trail branches off from the Annapurna Circuit, offering a perfect mix of adventure, natural beauty, and spiritual calm at the shores of the sacred turquoise lake.",
    shortDescription:
      "A breathtaking journey to Tilicho Lake the world’s highest alpine lake through the heart of the Annapurna region.",
    duration: 14,
    difficulty: 'Challenging',
    maxElevation: 5416,
    bestSeason: 'March–May & September–November',
    basePrice: 1550,
    pricePerDay: 100,
    accommodationOptions: {
      basic: {
        description: 'Basic teahouse accommodation with shared facilities',
        pricePerNight: 12
      },
      standard: {
        description: 'Comfortable teahouses with twin rooms and shared bathrooms',
        pricePerNight: 25
      },
      comfort: {
        description: 'Selected lodges with private rooms and attached bathrooms (where available)',
        pricePerNight: 50
      }
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Arrive in Kathmandu, meet your guide, and attend a trek briefing and welcome dinner.',
        elevation: 1400,
        hours: 0,
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 2,
        title: 'Drive to Chame (2,670m)',
        description: 'Scenic drive through Besisahar and along the Marsyangdi River valley to Chame, the district headquarters of Manang.',
        elevation: 2670,
        hours: 9,
        accommodation: 'Teahouse in Chame'
      },
      {
        day: 3,
        title: 'Trek to Pisang (3,200m)',
        description: 'Follow the Marsyangdi River through pine forests and steep ridges with the first views of Annapurna II and Lamjung Himal.',
        elevation: 3200,
        hours: 5,
        accommodation: 'Teahouse in Pisang'
      },
      {
        day: 4,
        title: 'Trek to Manang (3,540m)',
        description: 'Trek through the beautiful valley, passing Braga Monastery before reaching the cultural hub of Manang.',
        elevation: 3540,
        hours: 6,
        accommodation: 'Teahouse in Manang'
      },
      {
        day: 5,
        title: 'Acclimatization Day in Manang',
        description: 'Rest and explore Manang. Optional hikes to Gangapurna Lake or viewpoints for panoramic Annapurna range views.',
        elevation: 3540,
        hours: 3,
        accommodation: 'Teahouse in Manang'
      },
      {
        day: 6,
        title: 'Trek to Khangsar (3,750m)',
        description: 'Leave the main Annapurna trail and ascend towards the isolated village of Khangsar, the gateway to Tilicho.',
        elevation: 3750,
        hours: 4,
        accommodation: 'Teahouse in Khangsar'
      },
      {
        day: 7,
        title: 'Trek to Tilicho Base Camp (4,150m)',
        description: 'A narrow, rugged trail leads to Tilicho Base Camp beneath Tilicho Peak, offering stunning alpine scenery.',
        elevation: 4150,
        hours: 5,
        accommodation: 'Teahouse at Tilicho Base Camp'
      },
      {
        day: 8,
        title: 'Hike to Tilicho Lake (4,919m) and return to Base Camp',
        description: 'Early morning ascent to Tilicho Lake — a sacred turquoise lake nestled below massive snow peaks. Return to Base Camp.',
        elevation: 4919,
        hours: 6,
        accommodation: 'Teahouse at Tilicho Base Camp'
      },
      {
        day: 9,
        title: 'Trek to Yak Kharka (4,020m)',
        description: 'Retrace to Khangsar and continue on the upper trail to Yak Kharka, rejoining the Annapurna Circuit.',
        elevation: 4020,
        hours: 6,
        accommodation: 'Teahouse in Yak Kharka'
      },
      {
        day: 10,
        title: 'Trek to Thorong Phedi (4,450m)',
        description: 'Gradual climb through sparse high-altitude terrain to Thorong Phedi, the base of the Thorong La Pass.',
        elevation: 4450,
        hours: 5,
        accommodation: 'Teahouse in Thorong Phedi'
      },
      {
        day: 11,
        title: 'Cross Thorong La Pass (5,416m) and trek to Muktinath (3,800m)',
        description: 'A challenging climb to the famous Thorong La Pass with spectacular Himalayan views, then descend to Muktinath.',
        elevation: 5416,
        hours: 8,
        accommodation: 'Teahouse in Muktinath'
      },
      {
        day: 12,
        title: 'Trek to Jomsom (2,720m)',
        description: 'Descend through the Kali Gandaki Valley to Jomsom, a windy town at the base of the Mustang region.',
        elevation: 2720,
        hours: 5,
        accommodation: 'Teahouse in Jomsom'
      },
      {
        day: 13,
        title: 'Fly to Pokhara (820m)',
        description: 'Morning flight from Jomsom to Pokhara. Free afternoon to relax by Phewa Lake.',
        elevation: 820,
        hours: 0,
        accommodation: 'Hotel in Pokhara'
      },
      {
        day: 14,
        title: 'Drive or fly to Kathmandu',
        description: 'Return to Kathmandu. Farewell dinner and celebration of the successful trek.',
        elevation: 1400,
        hours: 6,
        accommodation: 'Hotel in Kathmandu'
      }
    ],
    highlights: [
      'Visit Tilicho Lake (4,919m), one of the world’s highest and most beautiful alpine lakes',
      'Experience the culture of Manang, one of the oldest settlements in the Annapurna region',
      'Cross the iconic Thorong La Pass (5,416m)',
      'Enjoy stunning views of Annapurna II, Gangapurna, Tilicho Peak, and Dhaulagiri',
      'Explore diverse landscapes — from subtropical valleys to high-altitude deserts',
      'Blend adventure with cultural immersion in Buddhist and Hindu villages'
    ],
    images: [
      'https://www.insidehimalayas.com/wp-content/uploads/2016/11/Tilicho-Lake.jpg',
    ],
    featured: true
  },
  {
    id: 'mardi-himal-base-camp-trek',
    name: 'Mardi Himal Base Camp Trek',
    region: 'Annapurna',
    description:
      "The Mardi Himal Base Camp Trek is a short yet spectacular journey in the Annapurna region, offering panoramic views of Machapuchare (Fishtail), Annapurna South, and Hiunchuli. This off-the-beaten-path route ascends from lush rhododendron forests to alpine ridges overlooking the Annapurna Sanctuary. Ideal for trekkers seeking a less crowded alternative, the trail provides an authentic mountain experience with traditional Gurung villages and stunning Himalayan vistas.",
    shortDescription:
      "A short and scenic trek through rhododendron forests and alpine ridges to Mardi Himal Base Camp, beneath the majestic Machapuchare.",
    duration: 8,
    difficulty: 'Moderate',
    maxElevation: 4500,
    bestSeason: 'March–May & September–December',
    basePrice: 750,
    pricePerDay: 90,
    accommodationOptions: {
      basic: {
        description: 'Simple teahouse or homestay accommodation with shared facilities',
        pricePerNight: 10
      },
      standard: {
        description: 'Standard teahouse with twin rooms and shared bathrooms',
        pricePerNight: 20
      },
      comfort: {
        description: 'Comfort lodge with private rooms and attached bathrooms (where available)',
        pricePerNight: 40
      }
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Pokhara (820m)',
        description: 'Arrive in Pokhara, the gateway to the Annapurna region. Explore Lakeside and prepare for the trek.',
        elevation: 820,
        hours: 0,
        accommodation: 'Hotel in Pokhara'
      },
      {
        day: 2,
        title: 'Drive to Kande and trek to Deurali (2,100m)',
        description: 'A short drive to Kande followed by a steady climb through forests and stone steps to Australian Camp and onward to Deurali.',
        elevation: 2100,
        hours: 5,
        accommodation: 'Teahouse in Deurali'
      },
      {
        day: 3,
        title: 'Trek to Forest Camp (2,520m)',
        description: 'Walk through dense rhododendron and oak forests, rich in birdlife and natural beauty, to reach Forest Camp.',
        elevation: 2520,
        hours: 5,
        accommodation: 'Teahouse in Forest Camp'
      },
      {
        day: 4,
        title: 'Trek to Low Camp (2,970m)',
        description: 'Gradual ascent through moss-covered forests with occasional glimpses of Machapuchare’s peak.',
        elevation: 2970,
        hours: 4,
        accommodation: 'Teahouse in Low Camp'
      },
      {
        day: 5,
        title: 'Trek to High Camp (3,580m)',
        description: 'Emerge from the forest onto alpine ridges with breathtaking views of the Annapurna range and Fishtail Peak.',
        elevation: 3580,
        hours: 4,
        accommodation: 'Teahouse in High Camp'
      },
      {
        day: 6,
        title: 'Hike to Mardi Himal Base Camp (4,500m) and return to Low Camp',
        description: 'Early morning hike to Mardi Himal Base Camp for sunrise over the Himalayas. Descend back to Low Camp.',
        elevation: 4500,
        hours: 7,
        accommodation: 'Teahouse in Low Camp'
      },
      {
        day: 7,
        title: 'Trek to Siding (1,700m) and drive to Pokhara',
        description: 'Descend through traditional Gurung villages to Siding, then drive back to Pokhara.',
        elevation: 1700,
        hours: 5,
        accommodation: 'Hotel in Pokhara'
      },
      {
        day: 8,
        title: 'Departure from Pokhara',
        description: 'Enjoy a relaxed morning in Pokhara or transfer to your next destination.',
        elevation: 820,
        hours: 0,
        accommodation: '—'
      }
    ],
    highlights: [
      'Reach Mardi Himal Base Camp (4,500m) for close-up views of Machapuchare (Fishtail) and Annapurna South',
      'Trek through rhododendron forests and high alpine ridges with panoramic Himalayan vistas',
      'Experience the tranquility of a less-crowded trail in the Annapurna region',
      'Enjoy sunrise and sunset views over the Annapurna and Dhaulagiri ranges',
      'Stay in charming local teahouses and interact with Gurung communities',
      'Perfect short trek combining adventure and natural beauty'
    ],
    images: [
      'https://hsj.com.np/uploads/0000/386/2020/05/03/mardi-banner.jpeg',
    ],
    featured: true
  },

  {
    id: 'lower-mustang',
    name: 'Lower Mustang Trek',
    region: 'Mustang',
    description: 'The Lower Mustang Trek offers a rare glimpse into the trans-Himalayan culture of Nepal. This trek passes through arid landscapes, ancient Buddhist monasteries, and picturesque villages influenced by Tibetan traditions. The journey takes you through Jomsom, Kagbeni, and Muktinath, showcasing the beauty of the Kali Gandaki Valley—the world’s deepest gorge.',
    shortDescription: 'Explore the mystical landscapes and Tibetan culture of Lower Mustang, from Jomsom to the sacred Muktinath Temple.',
    duration: 10,
    difficulty: 'Moderate',
    maxElevation: 3800,
    bestSeason: 'March-May, September-November',
    basePrice: 950,
    pricePerDay: 80,
    accommodationOptions: {
      basic: {
        description: 'Local teahouse with shared facilities',
        pricePerNight: 10
      },
      standard: {
        description: 'Comfortable teahouse with private room and shared bathroom',
        pricePerNight: 22
      },
      comfort: {
        description: 'Premium lodge with private bathroom and hot shower',
        pricePerNight: 40
      }
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Arrive in Kathmandu and transfer to your hotel. Evening briefing and welcome dinner.',
        elevation: 1400,
        hours: 0,
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 2,
        title: 'Drive to Pokhara (820m)',
        description: 'Scenic drive along the Trishuli and Seti Rivers to the lakeside city of Pokhara.',
        elevation: 820,
        hours: 7,
        accommodation: 'Hotel in Pokhara'
      },
      {
        day: 3,
        title: 'Fly to Jomsom (2,720m) and trek to Kagbeni (2,810m)',
        description: 'Short morning flight to Jomsom, then an easy trek along the Kali Gandaki River to Kagbeni—a traditional Tibetan-style village.',
        elevation: 2810,
        hours: 3,
        accommodation: 'Teahouse in Kagbeni'
      },
      {
        day: 4,
        title: 'Trek to Muktinath (3,800m)',
        description: 'Gradual ascent to Muktinath, a sacred pilgrimage site for Hindus and Buddhists alike.',
        elevation: 3800,
        hours: 5,
        accommodation: 'Teahouse in Muktinath'
      },
      {
        day: 5,
        title: 'Explore Muktinath and return to Jomsom (2,720m)',
        description: 'Morning visit to the Muktinath Temple and its eternal flame. Descend through arid landscapes back to Jomsom.',
        elevation: 2720,
        hours: 5,
        accommodation: 'Teahouse in Jomsom'
      },
      {
        day: 6,
        title: 'Trek to Marpha (2,670m)',
        description: 'Short trek to the charming village of Marpha, famous for its apple orchards and whitewashed houses.',
        elevation: 2670,
        hours: 3,
        accommodation: 'Teahouse in Marpha'
      },
      {
        day: 7,
        title: 'Trek to Tukuche (2,590m)',
        description: 'Walk through beautiful Kali Gandaki valley landscapes and traditional Thakali villages.',
        elevation: 2590,
        hours: 4,
        accommodation: 'Teahouse in Tukuche'
      },
      {
        day: 8,
        title: 'Trek to Tatopani (1,190m)',
        description: 'Descend along the valley to the natural hot springs at Tatopani, perfect for relaxation.',
        elevation: 1190,
        hours: 6,
        accommodation: 'Teahouse in Tatopani'
      },
      {
        day: 9,
        title: 'Drive back to Pokhara',
        description: 'Drive from Tatopani to Pokhara. Enjoy the evening by Phewa Lake.',
        elevation: 820,
        hours: 6,
        accommodation: 'Hotel in Pokhara'
      },
      {
        day: 10,
        title: 'Drive to Kathmandu',
        description: 'Return to Kathmandu by road. Farewell dinner in the evening.',
        elevation: 1400,
        hours: 7,
        accommodation: 'Hotel in Kathmandu'
      }
    ],
    highlights: [
      'Scenic flight between Pokhara and Jomsom',
      'Explore the ancient village of Kagbeni',
      'Visit the sacred Muktinath Temple (3,800m)',
      'Experience the rich Tibetan-Buddhist culture of Mustang',
      'Relax in natural hot springs at Tatopani',
      'Views of Nilgiri, Dhaulagiri, and Annapurna ranges'
    ],
    images: [
      'https://insidehimalayas.com/wp-content/uploads/2017/04/mustang4.jpg',
    ],
    featured: true
  },
  {
    id: 'upper-mustang',
    name: 'Upper Mustang Trek',
    region: 'Mustang',
    description:
      "The Upper Mustang Trek takes you into the remote Trans-Himalayan region of Nepal, a restricted area once part of the ancient Kingdom of Lo. Often called the 'Last Forbidden Kingdom,' this trek combines barren mountain beauty with deep Tibetan Buddhist culture, ancient monasteries, and cave dwellings carved into cliff faces.",
    shortDescription:
      "Journey into the mystical 'Last Forbidden Kingdom' of Upper Mustang, exploring Lo Manthang and its ancient Tibetan heritage.",
    duration: 14,
    difficulty: 'Challenging',
    maxElevation: 4200,
    bestSeason: 'April–November',
    basePrice: 1800,
    pricePerDay: 110,
    accommodationOptions: {
      basic: {
        description: 'Basic teahouse with shared facilities',
        pricePerNight: 15
      },
      standard: {
        description: 'Standard teahouse with twin room and shared bathroom',
        pricePerNight: 30
      },
      comfort: {
        description: 'Comfort lodge with private room and attached bathroom (where available)',
        pricePerNight: 60
      }
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Arrive in Kathmandu and transfer to your hotel. Trek briefing and welcome dinner.',
        elevation: 1400,
        hours: 0,
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 2,
        title: 'Fly to Pokhara (820m)',
        description: 'Short scenic flight to Pokhara. Explore lakeside and prepare for the trek.',
        elevation: 820,
        hours: 0,
        accommodation: 'Hotel in Pokhara'
      },
      {
        day: 3,
        title: 'Fly to Jomsom (2,720m) and trek to Kagbeni (2,810m)',
        description: 'Fly through the Kali Gandaki gorge to Jomsom, then trek along the windy valley to Kagbeni, the gateway to Upper Mustang.',
        elevation: 2810,
        hours: 3,
        accommodation: 'Teahouse in Kagbeni'
      },
      {
        day: 4,
        title: 'Trek to Chele (3,050m)',
        description: 'Follow the Kali Gandaki River, passing caves and sandy trails before a steep climb to Chele.',
        elevation: 3050,
        hours: 6,
        accommodation: 'Teahouse in Chele'
      },
      {
        day: 5,
        title: 'Trek to Syangboche (3,475m)',
        description: 'Cross several ridges and small passes with views of Nilgiri and Tilicho Peak before reaching Syangboche.',
        elevation: 3475,
        hours: 6,
        accommodation: 'Teahouse in Syangboche'
      },
      {
        day: 6,
        title: 'Trek to Ghami (3,520m)',
        description: 'Pass through the picturesque village of Ghiling and cross the Nyi La pass (4,010m) to reach Ghami.',
        elevation: 3520,
        hours: 6,
        accommodation: 'Teahouse in Ghami'
      },
      {
        day: 7,
        title: 'Trek to Tsarang (3,560m)',
        description: 'Walk past long Mani walls and ancient chortens to reach the historic village of Tsarang, once the capital of Mustang.',
        elevation: 3560,
        hours: 5,
        accommodation: 'Teahouse in Tsarang'
      },
      {
        day: 8,
        title: 'Trek to Lo Manthang (3,840m)',
        description: 'Enter the walled city of Lo Manthang, the heart of Upper Mustang, surrounded by ancient monasteries and palaces.',
        elevation: 3840,
        hours: 5,
        accommodation: 'Teahouse in Lo Manthang'
      },
      {
        day: 9,
        title: 'Explore Lo Manthang',
        description: 'Explore the ancient city, visit monasteries, caves, and the King’s Palace. Optional hike to Chhoser Cave.',
        elevation: 3840,
        hours: 3,
        accommodation: 'Teahouse in Lo Manthang'
      },
      {
        day: 10,
        title: 'Trek to Dhakmar (3,810m)',
        description: 'Trek through the village of Ghar Gompa, one of the oldest monasteries in Nepal, and continue to Dhakmar.',
        elevation: 3810,
        hours: 6,
        accommodation: 'Teahouse in Dhakmar'
      },
      {
        day: 11,
        title: 'Trek to Ghiling (3,570m)',
        description: 'Descend to Ghiling along a different trail, with views of the Himalayan ranges.',
        elevation: 3570,
        hours: 6,
        accommodation: 'Teahouse in Ghiling'
      },
      {
        day: 12,
        title: 'Trek to Chhuksang (2,980m)',
        description: 'Follow the trail through the dry terrain and traditional Mustang villages back to Chhuksang.',
        elevation: 2980,
        hours: 6,
        accommodation: 'Teahouse in Chhuksang'
      },
      {
        day: 13,
        title: 'Trek to Jomsom (2,720m)',
        description: 'Retrace your steps back to Jomsom through Kagbeni, marking the end of the Upper Mustang trail.',
        elevation: 2720,
        hours: 5,
        accommodation: 'Teahouse in Jomsom'
      },
      {
        day: 14,
        title: 'Fly to Pokhara and Kathmandu',
        description: 'Morning flight from Jomsom to Pokhara, then continue to Kathmandu. Farewell dinner in the evening.',
        elevation: 1400,
        hours: 0,
        accommodation: 'Hotel in Kathmandu'
      }
    ],
    highlights: [
      'Explore the walled city of Lo Manthang, the ancient capital of Mustang',
      'Fly through the world’s deepest gorge between Dhaulagiri and Annapurna',
      'Visit ancient monasteries and cave dwellings over 1,000 years old',
      'Experience Tibetan Buddhist culture and traditional Mustang lifestyle',
      'Panoramic views of Nilgiri, Dhaulagiri, and Annapurna ranges',
      'Walk through dramatic desert-like landscapes and red cliffs'
    ],
    images: [
      'https://northnepaltrek.com/images/thumbnail/Mon-10-05-57-1413664383-Lower%20Mustang%20trek%20Nepal%20.jpg',
    ],
    featured: true
  },
  {
    id: 'great-manaslu-circumnavigation',
    name: 'The Great Manaslu Circumnavigation',
    region: 'Gorkha',
    description:
      "The Great Manaslu Circumnavigation Trek takes you around the eighth-highest mountain in the world — Mount Manaslu (8,163m). This journey combines rich cultural immersion in remote Himalayan villages with stunning alpine scenery, high mountain passes, and pristine wilderness. Often regarded as a quieter alternative to the Annapurna Circuit, it showcases ancient monasteries, Tibetan-influenced cultures, and the breathtaking Larke La Pass crossing.",
    shortDescription:
      "A breathtaking circuit around Mount Manaslu, blending Himalayan adventure, cultural depth, and the dramatic Larke La Pass crossing.",
    duration: 16,
    difficulty: 'Challenging',
    maxElevation: 5160,
    bestSeason: 'March–May & September–November',
    basePrice: 1650,
    pricePerDay: 100,
    accommodationOptions: {
      basic: {
        description: 'Simple teahouse with dormitory or shared room and basic meals',
        pricePerNight: 12
      },
      standard: {
        description: 'Standard teahouse with twin rooms and shared bathrooms',
        pricePerNight: 25
      },
      comfort: {
        description: 'Upgraded teahouse or lodge with private room and attached bathroom (where available)',
        pricePerNight: 50
      }
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Arrive in Kathmandu and transfer to your hotel. Trek briefing and gear preparation.',
        elevation: 1400,
        hours: 0,
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 2,
        title: 'Drive to Soti Khola (710m)',
        description: 'A scenic drive along the Prithvi Highway and the Budhi Gandaki River to Soti Khola, the starting point of the trek.',
        elevation: 710,
        hours: 8,
        accommodation: 'Teahouse in Soti Khola'
      },
      {
        day: 3,
        title: 'Trek to Machha Khola (930m)',
        description: 'Walk through lush forests, rice terraces, and Gurung villages along the Budhi Gandaki valley.',
        elevation: 930,
        hours: 6,
        accommodation: 'Teahouse in Machha Khola'
      },
      {
        day: 4,
        title: 'Trek to Jagat (1,340m)',
        description: 'Follow the gorge upstream, crossing suspension bridges and small settlements before reaching the stone village of Jagat.',
        elevation: 1340,
        hours: 6,
        accommodation: 'Teahouse in Jagat'
      },
      {
        day: 5,
        title: 'Trek to Deng (1,860m)',
        description: 'Ascend through terraced hillsides and small villages, gradually entering Buddhist cultural zones.',
        elevation: 1860,
        hours: 6,
        accommodation: 'Teahouse in Deng'
      },
      {
        day: 6,
        title: 'Trek to Namrung (2,630m)',
        description: 'Climb through pine forests and mani walls to reach Namrung, offering first views of Manaslu North.',
        elevation: 2630,
        hours: 6,
        accommodation: 'Teahouse in Namrung'
      },
      {
        day: 7,
        title: 'Trek to Lho (3,180m)',
        description: 'A scenic day through Tibetan-style villages with magnificent views of Manaslu and surrounding peaks.',
        elevation: 3180,
        hours: 5,
        accommodation: 'Teahouse in Lho'
      },
      {
        day: 8,
        title: 'Trek to Samagaon (3,530m)',
        description: 'A gradual ascent through alpine meadows to reach Samagaon, a large Tibetan village below Manaslu.',
        elevation: 3530,
        hours: 4,
        accommodation: 'Teahouse in Samagaon'
      },
      {
        day: 9,
        title: 'Acclimatization Day in Samagaon',
        description: 'Rest and explore. Optional hike to Pungyen Gompa or Manaslu Base Camp for panoramic views.',
        elevation: 3530,
        hours: 3,
        accommodation: 'Teahouse in Samagaon'
      },
      {
        day: 10,
        title: 'Trek to Samdo (3,860m)',
        description: 'Follow a broad valley with yak pastures and high-altitude landscapes to reach Samdo, near the Tibetan border.',
        elevation: 3860,
        hours: 4,
        accommodation: 'Teahouse in Samdo'
      },
      {
        day: 11,
        title: 'Acclimatization or Exploration Day in Samdo',
        description: 'Optional hike to the Tibetan border viewpoint or rest before crossing Larke La.',
        elevation: 3860,
        hours: 3,
        accommodation: 'Teahouse in Samdo'
      },
      {
        day: 12,
        title: 'Trek to Dharamsala / Larke Phedi (4,460m)',
        description: 'Gradual ascent to the high camp below Larke La Pass. Prepare for the crossing.',
        elevation: 4460,
        hours: 4,
        accommodation: 'Teahouse in Dharamsala'
      },
      {
        day: 13,
        title: 'Cross Larke La Pass (5,160m) and trek to Bimthang (3,720m)',
        description: 'Start early to cross the challenging Larke La Pass, rewarded with stunning views of Himlung, Annapurna II, and Manaslu.',
        elevation: 5160,
        hours: 8,
        accommodation: 'Teahouse in Bimthang'
      },
      {
        day: 14,
        title: 'Trek to Tilije (2,300m)',
        description: 'Descend through rhododendron forests and alpine pastures to the Gurung village of Tilije.',
        elevation: 2300,
        hours: 6,
        accommodation: 'Teahouse in Tilije'
      },
      {
        day: 15,
        title: 'Trek to Dharapani and drive to Besisahar',
        description: 'Walk to Dharapani where the Manaslu trail joins the Annapurna Circuit route, then drive to Besisahar.',
        elevation: 760,
        hours: 5,
        accommodation: 'Guesthouse in Besisahar'
      },
      {
        day: 16,
        title: 'Drive to Kathmandu',
        description: 'Return to Kathmandu. Farewell dinner and reflection on the trek.',
        elevation: 1400,
        hours: 7,
        accommodation: 'Hotel in Kathmandu'
      }
    ],
    highlights: [
      'Complete circuit around Mount Manaslu (8,163m), the world’s eighth-highest peak',
      'Cross the dramatic Larke La Pass (5,160m) with spectacular Himalayan views',
      'Experience authentic Tibetan-influenced culture in remote mountain villages',
      'Visit ancient monasteries like Pungyen Gompa and Ribung Gompa',
      'Trek through diverse landscapes from subtropical forests to alpine glaciers',
      'Less crowded alternative to the Annapurna Circuit with pristine wilderness'
    ],
    images: [
      'https://www.adventuregreathimalaya.com/wp-content/uploads/Manasl-Trek.jpg',
    ],
    featured: true
  },
  {
    id: 'dhaulagiri-circuit-trek',
    name: 'Dhaulagiri Circuit Trek',
    region: 'Myagdi',
    description:
      "The Dhaulagiri Circuit Trek is one of Nepal’s most challenging and remote high-altitude adventures, encircling Mount Dhaulagiri (8,167m) — the world’s seventh-highest peak. This trek offers a raw and rugged Himalayan experience through wild glaciers, alpine pastures, remote villages, and dramatic mountain scenery. Crossing two high passes — the French Pass (5,360m) and Dhampus Pass (5,200m) — the route demands endurance but rewards trekkers with unmatched wilderness, solitude, and panoramic mountain views.",
    shortDescription:
      "A wild and remote circuit around the world’s seventh-highest peak, featuring glaciers, high passes, and true Himalayan wilderness.",
    duration: 18,
    difficulty: 'Challenging',
    maxElevation: 5360,
    bestSeason: 'April–May & September–November',
    basePrice: 1900,
    pricePerDay: 115,
    accommodationOptions: {
      basic: {
        description: 'Tented camps with shared facilities and simple meals',
        pricePerNight: 20
      },
      standard: {
        description: 'Combination of teahouses in lower regions and tented camps at high altitude',
        pricePerNight: 40
      },
      comfort: {
        description: 'Full-service camping with porters, cook, and upgraded tents',
        pricePerNight: 75
      }
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Arrive in Kathmandu, meet your guide, and attend a trek briefing and gear check.',
        elevation: 1400,
        hours: 0,
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 2,
        title: 'Drive to Beni (830m)',
        description: 'Scenic drive along the Trishuli and Kali Gandaki Rivers to the small town of Beni, the trek’s starting point.',
        elevation: 830,
        hours: 8,
        accommodation: 'Guesthouse in Beni'
      },
      {
        day: 3,
        title: 'Trek to Babiyachaur (950m)',
        description: 'Begin trekking through terraced farmland and small Magar villages along the Myagdi Khola valley.',
        elevation: 950,
        hours: 5,
        accommodation: 'Teahouse in Babiyachaur'
      },
      {
        day: 4,
        title: 'Trek to Dharapani (1,560m)',
        description: 'Gradual ascent through forests and cultivated hillsides to Dharapani village.',
        elevation: 1560,
        hours: 6,
        accommodation: 'Teahouse in Dharapani'
      },
      {
        day: 5,
        title: 'Trek to Muri (1,850m)',
        description: 'Climb through dense forest and traditional villages to reach Muri, with views of Dhaulagiri South and Gurja Himal.',
        elevation: 1850,
        hours: 6,
        accommodation: 'Teahouse in Muri'
      },
      {
        day: 6,
        title: 'Trek to Boghara (2,050m)',
        description: 'Descend and climb along the Myagdi Khola through lush vegetation and small settlements to Boghara.',
        elevation: 2050,
        hours: 6,
        accommodation: 'Teahouse in Boghara'
      },
      {
        day: 7,
        title: 'Trek to Dobang (2,520m)',
        description: 'The trail becomes steeper as you move deeper into the forested valley toward Dobang.',
        elevation: 2520,
        hours: 6,
        accommodation: 'Tented camp in Dobang'
      },
      {
        day: 8,
        title: 'Trek to Sallaghari (3,110m)',
        description: 'Follow the Myagdi River through dense forest and cross wooden bridges before reaching the campsite at Sallaghari.',
        elevation: 3110,
        hours: 5,
        accommodation: 'Tented camp in Sallaghari'
      },
      {
        day: 9,
        title: 'Trek to Italian Base Camp (3,660m)',
        description: 'A steep climb through forests and rocky terrain brings you to Italian Base Camp with close-up views of Dhaulagiri.',
        elevation: 3660,
        hours: 5,
        accommodation: 'Tented camp at Italian Base Camp'
      },
      {
        day: 10,
        title: 'Acclimatization Day at Italian Base Camp',
        description: 'Rest and explore the surrounding glaciers. Essential day for acclimatization before higher altitudes.',
        elevation: 3660,
        hours: 3,
        accommodation: 'Tented camp at Italian Base Camp'
      },
      {
        day: 11,
        title: 'Trek to Glacier Camp (4,210m)',
        description: 'Trek across the Chhonbardan Glacier, navigating icy terrain to reach the remote Glacier Camp.',
        elevation: 4210,
        hours: 6,
        accommodation: 'Tented camp at Glacier Camp'
      },
      {
        day: 12,
        title: 'Trek to Dhaulagiri Base Camp (4,740m)',
        description: 'Climb gradually along the glacier to the Base Camp with breathtaking views of Dhaulagiri I, II, III, and IV.',
        elevation: 4740,
        hours: 5,
        accommodation: 'Tented camp at Dhaulagiri Base Camp'
      },
      {
        day: 13,
        title: 'Cross French Pass (5,360m) and trek to Hidden Valley (5,100m)',
        description: 'A tough but rewarding day crossing French Pass — the highest point of the trek — descending into the vast Hidden Valley.',
        elevation: 5360,
        hours: 7,
        accommodation: 'Tented camp in Hidden Valley'
      },
      {
        day: 14,
        title: 'Cross Dhampus Pass (5,200m) and descend to Yak Kharka (3,680m)',
        description: 'Another high pass day with dramatic landscapes before descending to alpine pastures at Yak Kharka.',
        elevation: 5200,
        hours: 7,
        accommodation: 'Tented camp at Yak Kharka'
      },
      {
        day: 15,
        title: 'Trek to Marpha (2,670m)',
        description: 'Descend through rocky trails to the picturesque Mustang village of Marpha, famous for apple orchards and monasteries.',
        elevation: 2670,
        hours: 6,
        accommodation: 'Teahouse in Marpha'
      },
      {
        day: 16,
        title: 'Drive to Pokhara (820m)',
        description: 'Drive along the Kali Gandaki valley to Pokhara, enjoying views of Nilgiri and Annapurna ranges.',
        elevation: 820,
        hours: 7,
        accommodation: 'Hotel in Pokhara'
      },
      {
        day: 17,
        title: 'Fly or drive to Kathmandu',
        description: 'Return to Kathmandu for rest and celebration dinner.',
        elevation: 1400,
        hours: 0,
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 18,
        title: 'Departure Day',
        description: 'Transfer to the airport for your onward journey after completing one of Nepal’s most rewarding treks.',
        elevation: 1400,
        hours: 0,
        accommodation: '—'
      }
    ],
    highlights: [
      'Complete circuit around Mount Dhaulagiri (8,167m), the world’s seventh-highest mountain',
      'Cross two major high passes — French Pass (5,360m) and Dhampus Pass (5,200m)',
      'Camp beside glaciers and remote alpine valleys',
      'Experience true Himalayan wilderness with few trekkers on the trail',
      'Panoramic views of Dhaulagiri, Annapurna, Nilgiri, and Tukuche peaks',
      'Discover authentic Magar and Thakali villages in lower Myagdi and Mustang regions'
    ],
    images: [
      'https://www.discoveraltitude.com/uploads/img/dhaulagiri-circuit-trekking.webp'
    ],
    featured: true
  },
];