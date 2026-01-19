export const JOBS = [
  {
    id: '1',
    title: 'Plumbing Repair',
    description: 'Fixing a leaking pipe in the kitchen. Urgent.',
    budget: '15,000 CFA',
    location: 'Dakar, Plateau',
    date: '2023-10-25',
    category: 'Plumbing',
  },
  {
    id: '2',
    title: 'House Painting',
    description: 'Painting 3 rooms and a hallway. Paint provided by owner.',
    budget: '50,000 CFA',
    location: 'Mermoz',
    date: '2023-10-26',
    category: 'Painting',
  },
  {
    id: '3',
    title: 'Gardening Help',
    description: 'Trimming hedges and cleaning the garden for a villa.',
    budget: '10,000 CFA',
    location: 'Almadies',
    date: '2023-10-27',
    category: 'Gardening',
  },
  {
    id: '4',
    title: 'AC Maintenance',
    description: 'Regular service for 2 split AC units.',
    budget: '20,000 CFA',
    location: 'Sacré-Cœur',
    date: '2023-10-28',
    category: 'Technician',
  },
];

export const TRAINING = [
  {
    id: '1',
    title: 'Basic Carpentry',
    provider: 'Centre de Formation Professionnelle (CFP)',
    duration: '3 Months',
    category: 'Carpentry',
    image: 'https://via.placeholder.com/150',
    price: '25,000 CFA/month',
  },
  {
    id: '2',
    title: 'Sewing for Beginners',
    provider: 'Liggéey Academy',
    duration: '6 Weeks',
    category: 'Sewing',
    image: 'https://via.placeholder.com/150',
    price: '15,000 CFA',
  },
  {
    id: '3',
    title: 'Introduction to IT Support',
    provider: 'Tech Senegal',
    duration: '4 Months',
    category: 'IT',
    image: 'https://via.placeholder.com/150',
    price: 'Free (Subsidized)',
  },
];

export const ARTISANS = [
  {
    id: '1',
    name: 'Moussa Diop',
    skill: 'Carpenter',
    location: 'Pikine',
    rating: 4.8,
    about: 'Experienced carpenter with over 10 years of experience in custom furniture. I specialize in wooden beds, wardrobes, and kitchen cabinets.',
    portfolio: [
      { id: 'p1', title: 'Custom Wardrobe', image: 'https://via.placeholder.com/300' },
      { id: 'p2', title: 'Dining Table', image: 'https://via.placeholder.com/300' },
      { id: 'p3', title: 'Office Desk', image: 'https://via.placeholder.com/300' },
    ]
  },
  {
    id: '2',
    name: 'Fatou Ndiaye',
    skill: 'Tailor',
    location: 'Yoff',
    rating: 4.9,
    about: 'Specializing in traditional and modern Senegalese fashion. Boubou, Taille Basse, and modern dresses.',
    portfolio: [
        { id: 'p1', title: 'Wedding Dress', image: 'https://via.placeholder.com/300' },
        { id: 'p2', title: 'Taille Basse', image: 'https://via.placeholder.com/300' },
    ]
  },
  {
    id: '3',
    name: 'Amadou Sow',
    skill: 'Electrician',
    location: 'Guédiawaye',
    rating: 4.5,
    about: 'Reliable electrician for residential and commercial projects. Wiring, repairs, and installation.',
    portfolio: [
        { id: 'p1', title: 'House Wiring', image: 'https://via.placeholder.com/300' },
    ]
  },
  {
    id: '4',
    name: 'Khady Faye',
    skill: 'Hairdresser',
    location: 'Parcelles Assainies',
    rating: 4.7,
    about: 'Professional braiding and hair care services at home or in my salon.',
    portfolio: []
  },
];
