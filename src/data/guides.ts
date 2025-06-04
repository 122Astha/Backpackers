// Guide data structure
export interface Guide {
  id: string;
  name: string;
  photo: string;
  experience: number;
  languages: string[];
  specialties: string[];
  certification: string;
  bio: string;
  ratings: number;
  reviews: {
    author: string;
    rating: number;
    text: string;
  }[];
}

// Guide data
export const guides: Guide[] = [
  {
    id: 'guide-1',
    name: 'Pemba Sherpa',
    photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    experience: 12,
    languages: ['English', 'Nepali', 'Sherpa', 'Hindi'],
    specialties: ['Everest Region', 'High Altitude Trekking', 'Mountain Photography'],
    certification: 'Nepal Mountaineering Association (NMA) Certified Guide',
    bio: 'Born in the Khumbu region, Pemba has been guiding treks for over 12 years. He has summited Everest twice and has extensive knowledge of the local culture and traditions. Pemba is known for his patience, safety-first approach, and ability to share fascinating stories about the mountains and Sherpa way of life.',
    ratings: 4.9,
    reviews: [
      {
        author: 'Michael Thompson',
        rating: 5,
        text: 'Pemba made our Everest Base Camp trek unforgettable. His knowledge of the region and its culture added so much value to our experience. He was always attentive to our needs and made sure we stayed safe throughout the journey.'
      },
      {
        author: 'Sarah Jenkins',
        rating: 5,
        text: 'Choosing Pemba as our guide was the best decision we made. He was professional, friendly, and incredibly knowledgeable. He knew when to push us and when to let us rest, ensuring everyone in our group successfully reached Base Camp.'
      },
      {
        author: 'David Miller',
        rating: 4.5,
        text: 'Pemba is an excellent guide with deep knowledge of the Everest region. He was always patient and supportive, especially when some of us struggled with altitude. His photography tips were an added bonus!'
      }
    ]
  },
  {
    id: 'guide-2',
    name: 'Maya Gurung',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    experience: 8,
    languages: ['English', 'Nepali', 'German', 'French'],
    specialties: ['Annapurna Region', 'Cultural Treks', 'Women\'s Trekking Groups'],
    certification: 'Nepal Academy of Tourism and Hotel Management (NATHM) Licensed Guide',
    bio: 'Maya is one of Nepal\'s pioneering female trekking guides. Growing up in a small village near Pokhara, she developed a passion for the mountains and breaking gender barriers in the trekking industry. She specializes in the Annapurna region and is particularly knowledgeable about local cultures and traditions. Maya is an advocate for sustainable tourism and women\'s empowerment in Nepal.',
    ratings: 4.8,
    reviews: [
      {
        author: 'Emma Wilson',
        rating: 5,
        text: 'Trekking with Maya was inspiring! As a solo female traveler, I felt completely safe and well-cared for. Her knowledge of local customs and her connections with villagers along the route gave us access to authentic experiences that wouldn\'t have been possible otherwise.'
      },
      {
        author: 'Thomas Schmidt',
        rating: 4.5,
        text: 'Maya\'s passion for the mountains and Nepali culture is contagious. She went above and beyond to make our Annapurna Circuit trek educational and comfortable. Her language skills were impressive and helped bridge communication gaps in remote areas.'
      },
      {
        author: 'Julia Martinez',
        rating: 5,
        text: 'Our women\'s group had an amazing experience with Maya on the Annapurna Base Camp trek. She was professional, knowledgeable, and fun to be around. She handled everything perfectly, from accommodations to altitude sickness prevention.'
      }
    ]
  },
  {
    id: 'guide-3',
    name: 'Tenzin Dorje',
    photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    experience: 15,
    languages: ['English', 'Nepali', 'Tibetan', 'Japanese'],
    specialties: ['Everest Region', 'Remote Area Treks', 'Climbing Expeditions'],
    certification: 'IFMGA/UIAGM Certified Mountain Guide',
    bio: 'Tenzin is a highly experienced guide with over 15 years in the field. Born in the Solukhumbu region, he has summited Everest four times and led countless treks throughout the Himalayas. With his international certification, Tenzin specializes in challenging routes and climbing expeditions. He is known for his calm demeanor in difficult situations and his extensive knowledge of mountain safety and rescue techniques.',
    ratings: 4.9,
    reviews: [
      {
        author: 'Robert Johnson',
        rating: 5,
        text: 'Tenzin\'s experience and professionalism are unmatched. When we faced unexpected heavy snow on our Three Passes Trek, his decision-making and leadership kept us safe while still allowing us to complete the journey. Can\'t recommend him highly enough!'
      },
      {
        author: 'Hiroshi Tanaka',
        rating: 5,
        text: 'As someone who has trekked around the world, I can confidently say Tenzin is one of the best guides I\'ve ever had. His knowledge of the mountains is encyclopedic, and his ability to handle emergencies is reassuring.'
      },
      {
        author: 'Alexandra Peters',
        rating: 4.5,
        text: 'Our group felt incredibly safe with Tenzin leading our Gokyo Lakes trek. He was patient with slower members and always had contingency plans ready. His stories about local legends and mountaineering history added depth to our experience.'
      }
    ]
  },
  {
    id: 'guide-4',
    name: 'Raj Tamang',
    photo: 'https://images.pexels.com/photos/4426286/pexels-photo-4426286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    experience: 10,
    languages: ['English', 'Nepali', 'Hindi', 'Spanish'],
    specialties: ['Annapurna Region', 'Wildlife Photography', 'Botany'],
    certification: 'Nepal Academy of Tourism and Hotel Management (NATHM) Licensed Guide',
    bio: 'Raj combines his passion for trekking with expertise in Himalayan flora and fauna. With a background in environmental science, he offers unique insights into the ecological aspects of Nepal\'s diverse landscapes. He is particularly skilled at spotting wildlife and identifying plant species along the trekking routes. Raj leads treks with an emphasis on environmental education and conservation awareness.',
    ratings: 4.7,
    reviews: [
      {
        author: 'Maria Garcia',
        rating: 5,
        text: 'Raj transformed our Annapurna trek into a fascinating nature tour. He could identify every plant and bird we encountered and explained their ecological importance. His knowledge made the experience so much richer than just walking through beautiful scenery.'
      },
      {
        author: 'John Peterson',
        rating: 4.5,
        text: 'As a hobby photographer, I appreciated Raj\'s tips for wildlife photography and his patience as I stopped for countless shots. He knew exactly where and when to look for rare birds and animals. A fantastic guide for nature lovers!'
      },
      {
        author: 'Carlos Mendez',
        rating: 4.5,
        text: 'Raj\'s enthusiasm for Nepal\'s natural environment is infectious. He taught us about sustainable trekking practices and local conservation efforts. His Spanish skills were also helpful for our group.'
      }
    ]
  },
  {
    id: 'guide-5',
    name: 'Dawa Lama',
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    experience: 14,
    languages: ['English', 'Nepali', 'French', 'Chinese'],
    specialties: ['Annapurna Region', 'Mustang Region', 'Cultural Heritage'],
    certification: 'Nepal Mountaineering Association (NMA) Certified Guide',
    bio: 'Dawa has been leading treks in Nepal for over 14 years with a special focus on cultural experiences. With ancestral roots in the Upper Mustang region, he has unique insights into the Tibetan-influenced cultures of Nepal\'s northern regions. Dawa is well-versed in Buddhist traditions and history, making him an excellent guide for treks with significant cultural components. He maintains strong relationships with monasteries and local communities throughout the trekking regions.',
    ratings: 4.8,
    reviews: [
      {
        author: 'Pierre Dubois',
        rating: 5,
        text: 'Our Upper Mustang trek with Dawa was like traveling with a walking encyclopedia of Tibetan Buddhist culture. His connections gave us access to monastery rituals and local homes that truly made the experience authentic and memorable.'
      },
      {
        author: 'Lili Zhang',
        rating: 4.5,
        text: 'Dawa\'s knowledge of history and local customs enriched our Annapurna Circuit experience. He explained religious practices, architectural details, and cultural traditions in a way that was engaging and respectful. His language skills were also impressive!'
      },
      {
        author: 'Sophie Bernard',
        rating: 5,
        text: 'Beyond being an excellent trekking guide who prioritized our safety and comfort, Dawa opened doors to cultural experiences we never expected. From meditation sessions with local monks to traditional meals with families, he created unforgettable moments.'
      }
    ]
  },
  {
    id: 'guide-6',
    name: 'Mingma Sherpa',
    photo: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    experience: 20,
    languages: ['English', 'Nepali', 'Sherpa', 'German'],
    specialties: ['Everest Region', 'High Altitude Expeditions', 'Winter Treks'],
    certification: 'IFMGA/UIAGM Certified Mountain Guide',
    bio: 'With over two decades of experience, Mingma is one of Nepal\'s most senior trekking guides. Born in a small village near Namche Bazaar, he has summited Everest seven times and led expeditions on most major Himalayan peaks. He specializes in technically challenging routes and off-season treks. Mingma\'s wealth of experience makes him particularly skilled at handling adverse weather conditions and emergencies at high altitudes.',
    ratings: 5.0,
    reviews: [
      {
        author: 'Klaus Müller',
        rating: 5,
        text: 'Mingma\'s experience is evident in everything he does. When we encountered an unexpected blizzard on our winter trek to Everest Base Camp, his calm decision-making and extensive knowledge kept everyone safe. There\'s simply no substitute for his level of expertise.'
      },
      {
        author: 'Jennifer Williams',
        rating: 5,
        text: 'I\'ve done three treks with Mingma over the years, and I wouldn\'t consider anyone else for a challenging Himalayan journey. His attention to detail, focus on safety, and ability to inspire confidence in difficult situations are unmatched.'
      },
      {
        author: 'Hans Schmidt',
        rating: 5,
        text: 'Our Three Passes trek was made possible only because of Mingma\'s skilled guidance. His assessment of each trekker\'s capabilities and his adaptive planning ensured everyone succeeded. Add his fascinating stories from years of mountaineering, and you have the perfect guide.'
      }
    ]
  }
];