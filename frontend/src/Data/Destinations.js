import Paris from '../Assets/paris1.jpeg';
import Tokyo from '../Assets/tokyo1.jpg';
import Newyork from '../Assets/new1.jpg';
import London from '../Assets/london1.jpg';
import Dubai from '../Assets/dubai1.jpg';
import Rome from '../Assets/rome1.jpg';
import Bali from '../Assets/bali1.jpg';
import Sydney from '../Assets/sydney1.jpg';
import Cairo from '../Assets/Cairo3.webp';
import Queenstown from '../Assets/Queenstown1.avif';
import Petra from '../Assets/Petra1.webp';
import AmalfiCoast from '../Assets/Amalfi Coast.webp';
import Banff from '../Assets/Banff.jpg';
import Santorini from '../Assets/Santorini.jpg';
import BoraBora from '../Assets/bora.jpg';
import Havana from '../Assets/Havana.avif';
import Edinburgh from '../Assets/Edinburgh1.webp';
import Prague from '../Assets/Prague.jpg';
import MachuPicchu from '../Assets/MachuPicchu.jpg';
import Alentejo from '../Assets/Alentejo1.jpg';
import HockingHills from '../Assets/Hocking Hills.avif';
import Salzburg from '../Assets/Salzburg.avif';
import Nairobi from '../Assets/Nairobi.jpg';
import Reykjavik from '../Assets/Reykjavik.jpeg';
import Cappadocia from '../Assets/Cappadocia.jpg';
import Zanzibar from '../Assets/Zanzibar1.jpeg';
import Rio from '../Assets/Rio de Janeiro1.png';
import BuenosAires from '../Assets/BuenosAires.jpg';
import Zermatt from '../Assets/Zermatt.webp';

const destinations = [
  {
    id: 1,
    title: "Paris",
    image: Paris,
    description: "Explore the city of love with expert guides. Wander through charming streets lined with cafés, marvel at iconic landmarks like the Eiffel Tower, and indulge in world-class art, cuisine, and culture. Paris promises an unforgettable blend of romance, history, and elegance at every turn.",
    price: "30000",
    location: "France",
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    highlights: [
      "Eiffel Tower visit",
      "Seine River cruise",
      "Louvre Museum entry"
    ],
    bestTimeToVisit: "April to June",
    thingsToDo: [
      "Try French pastries",
      "Walk around Montmartre",
      "Shop at Champs-Élysées"
    ]
  },
  {
    id: 2,
    title: "Cairo",
    image: Cairo,
    description: "See the pyramids and feel the ancient magic come alive in the heart of Egypt Explore the Great Sphinx, age-old temples, and bustling bazaars filled with culture and color From desert adventures to Nile cruises, Cairo is a timeless journey through history.",
    price: "25000",
    location: "Egypt",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    highlights: [
      "Pyramids of Giza tour",
      "Visit to the Egyptian Museum",
      "Nile River dinner cruise"
    ],
    bestTimeToVisit: "October to April",
    thingsToDo: [
      "Explore Khan El Khalili Bazaar",
      "Visit the Sphinx",
      "Discover Islamic Cairo"
    ]
  },

  {
    id: 3,
    title: "New York",
    image: Newyork,
    description: "Discover the Big Apple with local experts and uncover its iconic landmarks and vibrant neighborhoods From Central Park to Times Square, experience the culture, food, and energy that define NYC Every corner of the city tells a story—perfect for first-timers and seasoned travelers alike.",
    price: "27000",
    location: "USA",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    highlights: [
      "Statue of Liberty tour",
      "Broadway show experience",
      "Central Park bike ride"
    ],
    bestTimeToVisit: "April to June, September to early November",
    thingsToDo: [
      "Visit Times Square",
      "Explore the Metropolitan Museum of Art",
      "Walk across Brooklyn Bridge"
    ]
  },
  {
    id: 4,
    title: "London",
    image: London,
    description: "Enjoy the charm of London with our expert guides as you explore its iconic sights and hidden gems From Buckingham Palace to the Tower Bridge, dive into rich history, royal heritage, and vibrant culture Discover cozy pubs, world-class museums, and the timeless elegance that makes London unforgettable.",
    price: "28000",
    location: "United Kingdom",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    highlights: [
      "Thames River cruise",
      "London Eye experience",
      "Tower of London tour"
    ],
    bestTimeToVisit: "March to May",
    thingsToDo: [
      "Visit Buckingham Palace",
      "Explore the British Museum",
      "Walk around Camden Market"
    ]
  },
  {
    id: 5,
    title: "Dubai",
    image: Dubai,
    description: "Witness the luxury and deserts of Dubai, where modern skyscrapers meet golden sand dunes Explore world-famous landmarks, indulge in upscale shopping, and experience thrilling desert safaris From the Burj Khalifa to traditional souks, Dubai offers a perfect blend of glamor and adventure.",
    price: "23000",
    location: "United Arab Emirates",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    highlights: [
      "Desert safari adventure",
      "Burj Khalifa observation deck",
      "Dhow cruise dinner"
    ],
    bestTimeToVisit: "November to March",
    thingsToDo: [
      "Shop at Dubai Mall",
      "Visit the Palm Jumeirah",
      "Explore the Dubai Marina"
    ]
  },
  {
    id: 6,
    title: "Rome",
    image: Rome,
    description: "Step into ancient history in Rome, where every street tells a story of emperors and empires Explore iconic landmarks like the Colosseum, Roman Forum, and Vatican City Savor authentic Italian cuisine as you wander through timeless architecture and charming piazzas.",
    price: "24000",
    location: "Italy",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    highlights: [
      "Guided Colosseum tour",
      "Visit to the Vatican Museums",
      "Trevi Fountain walk"
    ],
    bestTimeToVisit: "April to June, September to October",
    thingsToDo: [
      "Explore the Roman Forum",
      "Climb the Spanish Steps",
      "Enjoy authentic Italian gelato"
    ]
  },
  {
    id: 7,
    title: "Bali",
    image: Bali,
    description: "Relax on the tropical beaches of Bali, where crystal-clear waters meet lush green landscapes Unwind with serene sunsets, traditional Balinese culture, and rejuvenating spa experiences From surfing waves to exploring rice terraces, Bali is a paradise for every kind of traveler.",
    price: "26000",
    location: "Indonesia",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    highlights: [
      "Ubud rice terrace tour",
      "Traditional Balinese spa",
      "Sunset at Tanah Lot Temple"
    ],
    bestTimeToVisit: "April to October",
    thingsToDo: [
      "Surf at Kuta Beach",
      "Visit the Uluwatu Temple",
      "Explore the Tegallalang rice fields"
    ]
  },
  {
    id: 8,
    title: "Sydney",
    image: Sydney,
    description: "Explore the harbors and beaches of Sydney, where coastal beauty meets urban sophistication Visit the iconic Sydney Opera House, take a ferry across the harbor, and soak up the sun on Bondi Beach From vibrant city life to laid-back surf culture, Sydney offers the best of both worlds.",
    price: "27000",
    location: "Australia",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    highlights: [
      "Sydney Opera House tour",
      "Bondi Beach relaxation",
      "Harbour Bridge climb"
    ],
    bestTimeToVisit: "September to November, March to May",
    thingsToDo: [
      "Walk around Darling Harbour",
      "Visit Taronga Zoo",
      "Explore The Rocks historic district"
    ]
  },
  {
    id: 9,
    title: "Tokyo",
    image: Tokyo,
    description: "Dive into Japan’s rich culture, futuristic cityscapes, and world-renowned cuisine. From ancient temples and cherry blossoms to bustling streets, anime culture, and sushi experiences—Tokyo offers an unforgettable blend of tradition and innovation.",
    price: "35000",
    location: "Japan",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    highlights: [
      "Sushi tasting tour",
      "Mount Fuji day trip",
      "Cherry blossom walk"
    ],
    bestTimeToVisit: "March to May",
    thingsToDo: [
      "Visit Shibuya Crossing",
      "Explore Akihabara",
      "Try a capsule hotel"
    ]
  },
  {
    id: 10,
    title: "Queenstown",
    image: Queenstown,
    description: "Known as the adventure capital of the world, Queenstown offers breathtaking landscapes and thrilling activities amidst New Zealand’s natural beauty.",
    price: "37000",
    location: "New Zealand",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    highlights: [
      "Bungee Jumping",
      "Milford Sound Cruise",
      "Skyline Gondola"
    ],
    bestTimeToVisit: "September to November",
    thingsToDo: [
      "Try jet boating",
      "Wine tasting in Gibbston Valley",
      "Hike the Ben Lomond Track"
    ]
  },
  {
    id: 11,
    title: "Zermatt",
    image: Zermatt,
    description: "Nestled at the foot of the iconic Matterhorn, Zermatt is a picturesque mountain village ideal for skiing, hiking, and breathtaking alpine views.",
    price: "42000",
    location: "Switzerland",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    highlights: [
      "Matterhorn Glacier Paradise",
      "Gornergrat Railway ride",
      "Hiking in the Alps"
    ],
    bestTimeToVisit: "June to September, December to March",
    thingsToDo: [
      "Ski the Swiss Alps",
      "Visit the Matterhorn Museum",
      "Enjoy fondue with mountain views"
    ]
  },
  {
    id: 12,
    title: "Amalfi Coast",
    image: AmalfiCoast,
    description: "Experience the stunning coastal beauty of Italy's Amalfi Coast, with its charming villages and scenic landscapes.",
    price: "35000",
    location: "Italy",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    highlights: [
      "Drive along the Amalfi Coast",
      "Visit Positano & Ravello",
      "Boat trip to Capri"
    ],
    bestTimeToVisit: "May to October",
    thingsToDo: [
      "Sample local limoncello",
      "Explore Amalfi Cathedral",
      "Relax at Marina Grande beach"
    ]
  },
  {
    id: 13,
    title: "Banff",
    image: Banff,
    description: "Discover the natural wonders of Banff National Park, with its majestic mountains and turquoise lakes.",
    price: "33000",
    location: "Canada",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    highlights: [
      "Lake Louise visit",
      "Banff Gondola ride",
      "Moraine Lake views"
    ],
    bestTimeToVisit: "June to August, December to March",
    thingsToDo: [
      "Hike Tunnel Mountain",
      "Soak in Banff Upper Hot Springs",
      "Wildlife spotting in the park"
    ]
  },
  {
    id: 14,
    title: "Santorini",
    image: Santorini,
    description: "Enjoy the iconic white-washed buildings and stunning sunsets of Santorini, a gem of the Greek islands.",
    price: "31000",
    location: "Greece",
    duration: "4 Days / 3 Nights",
    rating: 4.9,
    highlights: [
      "Oia sunset view",
      "Volcano & hot springs tour",
      "Black sand beach visit"
    ],
    bestTimeToVisit: "April to November",
    thingsToDo: [
      "Explore Fira town",
      "Taste local wines",
      "Sail along the caldera"
    ]
  },
  {
    id: 15,
    title: "Bora Bora",
    image: BoraBora,
    description: "Relax in the tropical paradise of Bora Bora, known for its turquoise waters and luxurious overwater bungalows.",
    price: "65000",
    location: "French Polynesia",
    duration: "5 Days / 4 Nights",
    rating: 5.0,
    highlights: [
      "Lagoon snorkeling",
      "Mount Otemanu hike",
      "Romantic beach dinners"
    ],
    bestTimeToVisit: "April and November",
    thingsToDo: [
      "Jet ski around the island",
      "Relax in an overwater villa",
      "Explore coral reefs"
    ]
  },
  {
    id: 16,
    title: "Havana",
    image: Havana,
    description: "Experience the vibrant culture and historic charm of Havana, Cuba's capital city.",
    price: "27000",
    location: "Cuba",
    duration: "4 Days / 3 Nights",
    rating: 4.6,
    highlights: [
      "Old Havana tour",
      "Classic car ride",
      "Live salsa night"
    ],
    bestTimeToVisit: "October to April",
    thingsToDo: [
      "Visit the Malecón",
      "Try Cuban cigars and coffee",
      "Tour Hemingway’s house"
    ]
  },
  {
    id: 17,
    title: "Edinburgh",
    image: Edinburgh,
    description: "Explore the historic and cultural richness of Edinburgh, Scotland's capital city.",
    price: "30000",
    location: "Scotland",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    highlights: [
      "Edinburgh Castle tour",
      "Royal Mile walk",
      "Arthur's Seat hike"
    ],
    bestTimeToVisit: "May to September",
    thingsToDo: [
      "Explore local pubs",
      "Visit the National Museum",
      "Attend the Edinburgh Festival"
    ]
  },
  {
    id: 18,
    title: "Prague",
    image: Prague,
    description: "Discover the fairy-tale charm of Prague, with its gothic architecture and vibrant cultural scene.",
    price: "27000",
    location: "Czech Republic",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    highlights: [
      "Prague Castle tour",
      "Charles Bridge stroll",
      "Astronomical Clock visit"
    ],
    bestTimeToVisit: "March to May, September to November",
    thingsToDo: [
      "Taste Czech beer",
      "Explore Old Town Square",
      "Cruise the Vltava River"
    ]
  },
  {
    id: 19,
    title: "Machu Picchu",
    image: MachuPicchu,
    description: "Explore the ancient Incan citadel nestled high in the Andes Mountains, offering breathtaking views and rich history.",
    price: "32000",
    location: "Peru",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    highlights: [
      "Guided tour of Machu Picchu",
      "Hike the Inca Trail",
      "Visit Sacred Valley"
    ],
    bestTimeToVisit: "April to October",
    thingsToDo: [
      "Explore Cusco city",
      "Visit local markets",
      "Try traditional Peruvian cuisine"
    ]
  },
  {
    id: 20,
    title: "Alentejo",
    image: Alentejo,
    description: "Experience the serene landscapes of Alentejo with its rolling plains, historic towns, and rich culinary traditions.",
    price: "29000",
    location: "Portugal",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    highlights: [
      "Wine tasting tours",
      "Visit Évora city",
      "Explore medieval castles"
    ],
    bestTimeToVisit: "March to June, September to November",
    thingsToDo: [
      "Stay in a countryside villa",
      "Sample local olive oils",
      "Attend traditional festivals"
    ]
  },
  {
    id: 21,
    title: "Hocking Hills",
    image: HockingHills,
    description: "Discover the natural beauty of Hocking Hills with its stunning caves, waterfalls, and hiking trails.",
    price: "25000",
    location: "USA",
    duration: "3 Days / 2 Nights",
    rating: 4.7,
    highlights: [
      "Old Man's Cave hike",
      "Canoeing on Hocking River",
      "Zip-lining adventures"
    ],
    bestTimeToVisit: "April to October",
    thingsToDo: [
      "Camp under the stars",
      "Visit local artisan shops",
      "Enjoy scenic drives"
    ]
  },
  {
    id: 22,
    title: "Salzburg",
    image: Salzburg,
    description: "Immerse yourself in the musical heritage and baroque architecture of Salzburg, the birthplace of Mozart.",
    price: "31000",
    location: "Austria",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    highlights: [
      "Mozart's birthplace museum",
      "Sound of Music tour",
      "Hohensalzburg Fortress visit"
    ],
    bestTimeToVisit: "May to September",
    thingsToDo: [
      "Attend classical concerts",
      "Stroll through Mirabell Gardens",
      "Explore local cafes"
    ]
  },
  {
    id: 23,
    title: "Nairobi",
    image: Nairobi,
    description: "Experience the vibrant culture and wildlife of Nairobi, a city where urban life meets natural beauty.",
    price: "28000",
    location: "Kenya",
    duration: "5 Days / 4 Nights",
    rating: 4.7,
    highlights: [
      "Safari in Nairobi National Park",
      "Visit Giraffe Centre",
      "Explore Karen Blixen Museum"
    ],
    bestTimeToVisit: "June to October",
    thingsToDo: [
      "Shop at Maasai Market",
      "Taste local Kenyan dishes",
      "Visit the National Museum"
    ]
  },
  {
    id: 24,
    title: "Reykjavik",
    image: Reykjavik,
    description: "Discover the capital of Iceland with stunning landscapes, geothermal spas, and northern lights.",
    price: "45000",
    location: "Iceland",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    highlights: [
      "Blue Lagoon spa experience",
      "Golden Circle tour",
      "Northern lights viewing"
    ],
    bestTimeToVisit: "February to April, September to October",
    thingsToDo: [
      "Explore Hallgrímskirkja Church",
      "Visit Perlan Museum",
      "Try Icelandic hot dogs"
    ]
  },
  {
    id: 25,
    title: "Petra",
    image: Petra,
    description: "Uncover the ancient rose-red city of Petra, one of the New Seven Wonders of the World.",
    price: "34000",
    location: "Jordan",
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    highlights: [
      "Visit the Treasury",
      "Hike to the Monastery",
      "Explore Siq canyon"
    ],
    bestTimeToVisit: "March to May, September to November",
    thingsToDo: [
      "Ride camels through ruins",
      "Enjoy Bedouin tea",
      "Camp in Wadi Rum"
    ]
  },
  {
    id: 26,
    title: "Queenstown",
    image: Queenstown,
    description: "Adventure capital of the world offering bungee jumping, skiing, and breathtaking lake views.",
    price: "46000",
    location: "New Zealand",
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    highlights: [
      "Skydiving and bungee jump",
      "Cruise on Lake Wakatipu",
      "Explore Milford Sound"
    ],
    bestTimeToVisit: "December to February",
    thingsToDo: [
      "Try Fergburger",
      "Ride Skyline Gondola",
      "Visit nearby vineyards"
    ]
  },
  {
    id: 27,
    title: "Cappadocia",
    image: Cappadocia,
    description: "Fly over unique rock formations and ancient cave dwellings in a magical hot air balloon ride.",
    price: "30000",
    location: "Turkey",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    highlights: [
      "Hot air balloon ride",
      "Underground city tours",
      "Stay in cave hotels"
    ],
    bestTimeToVisit: "April to June, September to October",
    thingsToDo: [
      "Explore Goreme Open Air Museum",
      "Taste Turkish delights",
      "Take pottery workshops"
    ]
  },
  {
    id: 28,
    title: "Zanzibar",
    image: Zanzibar,
    description: "Tropical paradise with white sandy beaches, spice farms, and rich Swahili culture.",
    price: "33000",
    location: "Tanzania",
    duration: "5 Days / 4 Nights",
    rating: 4.7,
    highlights: [
      "Relax at Nungwi Beach",
      "Visit Stone Town",
      "Spice plantation tours"
    ],
    bestTimeToVisit: "June to October",
    thingsToDo: [
      "Snorkel in coral reefs",
      "Sail in traditional dhow boats",
      "Visit Jozani Forest"
    ]
  },
  {
    id: 29,
    title: "Rio de Janeiro",
    image: Rio,
    description: "Vibrant city famous for beaches, samba, and the iconic Christ the Redeemer statue.",
    price: "36000",
    location: "Brazil",
    duration: "5 Days / 4 Nights",
    rating: 4.7,
    highlights: [
      "Copacabana & Ipanema beaches",
      "Sugarloaf Mountain",
      "Christ the Redeemer"
    ],
    bestTimeToVisit: "December to March",
    thingsToDo: [
      "Join a samba dance class",
      "Visit Maracanã Stadium",
      "Hike in Tijuca Forest"
    ]
  },
  {
    id: 30,
    title: "Buenos Aires",
    image: BuenosAires,
    description: "The Paris of South America offers vibrant tango, delicious food, and stylish neighborhoods.",
    price: "35000",
    location: "Argentina",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    highlights: [
      "Tango dance lesson",
      "Walk through Palermo neighborhood",
      "Visit La Boca & Caminito"
    ],
    bestTimeToVisit: "September to November, March to May",
    thingsToDo: [
      "Try Argentine steak",
      "Visit Teatro Colon",
      "Explore the Recoleta Cemetery"
    ]
  },
];

export default destinations;
