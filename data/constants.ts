export const navLinks = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#pricing",
    label: "pricing",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#contact",
    label: "contact",
  },
];

type TierType = {
  plan: string;
  price: number;
  desc: string;
  popular: boolean;
  features: string[];
};

export const tiers: TierType[] = [
  {
    plan: "Starter",
    price: 29,
    popular: false,
    desc: "Perfect for small businesses just getting started.",
    features: [
      "Up to 500 SKUs",
      "Basic reporting",
      "2 user accounts",
      "Email support",
    ],
  },
  {
    plan: "Professional",
    price: 79,
    popular: true,
    desc: "Ideal for growing businesses with multiple locations.",
    features: [
      "Up to 5,000 SKUs",
      "Advanced analytics",
      "10 user accounts",
      "Priority support",
      "Multi-location support",
    ],
  },
  {
    plan: "Enterprise",
    price: 199,
    popular: false,
    desc: "For large businesses with complex inventory needs.",
    features: [
      "Unlimited SKUs",
      "Custom reporting",
      "Unlimited users",
      "24/7 dedicated support",
      "API access",
      "Custom integrations",
    ],
  },
];

type Review = {
  name: string;
  picture: string;
  role: string;
  review: string;
};

export const customerReviews: Review[] = [
  {
    name: "Michael Carter",
    role: "Logistics Coordinator, SwiftTrans Ltd.",
    picture: "",
    review:
      "Since implementing this system, tracking inventory across multiple locations has never been easier. The real-time updates are a game-changer!",
  },
  {
    name: "Emma Roberts",
    role: "Retail Manager, FreshMart",
    picture: "",
    review:
      "We've minimized overstock issues and improved order accuracy significantly. The analytics dashboard gives us deep insights into our stock levels.",
  },
  {
    name: "Daniel Gomez",
    role: "CEO, AutoParts Warehouse",
    picture: "",
    review:
      "The integration with our POS system was seamless. Now, we never run out of fast-moving products, and our sales have increased!",
  },
  {
    name: "Sophia Kim",
    role: "Supply Chain Analyst, Global Traders",
    picture: "",
    review:
      "I love the predictive analytics feature! It helps us anticipate demand and plan ahead, reducing waste and improving efficiency.",
  },
  {
    name: "James Wright",
    role: "E-commerce Manager, Trendy Gadgets",
    picture: "",
    review:
      "Managing stock across online and offline stores used to be a headache. This system has completely streamlined our operations!",
  },
];

export const inventoryLinks = [
  {
    Name: "Product",
    links: [
      {
        label: "Features",
        href: "#",
      },
      {
        label: "Pricing",
        href: "#",
      },
      {
        label: "Integrations",
        href: "#",
      },
      {
        label: "Roadmap",
        href: "#",
      },
    ],
  },
  {
    Name: "Resources",
    links: [
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "Guides",
        href: "#",
      },
      {
        label: "Help center",
        href: "#",
      },
      {
        label: "Webinars",
        href: "#",
      },
    ],
  },
  {
    Name: "Company",
    links: [
      {
        label: "About Us",
        href: "#",
      },
      {
        label: "Careers",
        href: "#",
      },
      {
        label: "Contact",
        href: "#",
      },
      {
        label: "Privacy Policy",
        href: "#",
      },
    ],
  },
];
