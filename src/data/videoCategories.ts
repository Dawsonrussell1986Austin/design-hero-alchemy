export interface Video {
  id: string;
  title: string;
  description: string;
  mediaId: string;
}

export interface VideoCategory {
  id: string;
  question: string;
  description: string;
  videos: Video[];
  thumbnail: string;
}

export const videoCategories: VideoCategory[] = [
  {
    id: "who-is-oak",
    question: "Who is Oak?",
    description: "Learn about Oak's founding story, team, and vision for the future.",
    thumbnail: "/src/assets/video-thumb-who-is-oak.jpg",
    videos: [
      {
        id: "oak-1",
        title: "Opportunity Selection Process",
        description: "Learn about Oak's founding story and the vision behind our approach to private credit.",
        mediaId: "c156cbp2ql",
      },
      {
        id: "credit-1",
        title: "From the Ashes",
        description: "The story of taking two portfolios and the character of management - making it right for investors.",
        mediaId: "cqwvt434dh",
      },
      {
        id: "oak-3",
        title: "Oak's Future Outlook",
        description: "Discover our vision for the future and strategic growth plans.",
        mediaId: "0eykhn0v2g",
      },
    ],
  },
  {
    id: "investment-strategy",
    question: "What is Oak's Investment Strategy?",
    description: "Discover Oak's diversified approach to lending and investment opportunities.",
    thumbnail: "/src/assets/video-thumb-strategy.jpg",
    videos: [
      {
        id: "strategy-1",
        title: "Diversification",
        description: "Discover how Oak's diversified approach mitigates risk and maximizes returns.",
        mediaId: "yiyqt2ifnu",
      },
      {
        id: "strategy-2",
        title: "Lending",
        description: "Explore Oak's strategic approach to lending and investment opportunities.",
        mediaId: "xl6orct4jo",
      },
      {
        id: "strategy-3",
        title: "The Genesis of Oak",
        description: "Learn about our rigorous investment selection and due diligence process.",
        mediaId: "wn4w0z7jch",
      },
    ],
  },
  {
    id: "what-is-private-credit",
    question: "What is Private Credit?",
    description: "Understanding the fundamentals of private credit lending and market opportunities.",
    thumbnail: "/src/assets/video-thumb-credit.jpg",
    videos: [
      {
        id: "oak-2",
        title: "Fragmented Market",
        description: "Exploring the fragmented market of private lending capital and its opportunities.",
        mediaId: "l66qlx90f9",
      },
      {
        id: "credit-3",
        title: "Understanding Private Credit",
        description: "Explore the opportunities in the fragmented private credit market landscape.",
        mediaId: "etr16bubjs",
      },
    ],
  },
  {
    id: "risk-management",
    question: "How Does Oak Handle Risk Management?",
    description: "Learn about our rigorous underwriting process and risk management strategies.",
    thumbnail: "/src/assets/video-thumb-risk.jpg",
    videos: [
      {
        id: "credit-2",
        title: "Underwriting Approach",
        description: "Learn about our rigorous underwriting process and risk management strategy.",
        mediaId: "4zedgzfvfw",
      },
    ],
  },
];
