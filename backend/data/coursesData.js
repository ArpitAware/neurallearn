// ================= WEB DEV (1–10 FULL) =================

export const categories = [
  { id: "web-dev", name: "Web Development" },
  { id: "app-dev", name: "App Development" },
  { id: "data-science", name: "Data Science" },
  { id: "ui-ux", name: "UI/UX Design" },
  { id: "devops", name: "DevOps & Cloud" },
];

export const courses = [
  {
    id: "course1",
    title: "Advanced React Architecture",
    category: "web-dev",
    instructor: "Arpit Aware",
    price: 1299,
    thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775443515/web1_sfrdy7.webp",
    description: "Master scalable React apps with advanced architecture and performance techniques.",
    rating: 4.8,
    students: 3200,
    sections: [
      {
        sectionTitle: "Core React",
        lectures: [
          { title: "Modern React Overview", duration: "10:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web1_1.mp4" },
          { title: "Component Design Patterns", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web1_2.mp4" },
          { title: "State Management Basics", duration: "12:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web1_3.mp4" },
        ],
      },
      {
        sectionTitle: "Advanced Patterns",
        lectures: [
          { title: "Custom Hooks", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web1_4.mp4" },
          { title: "Context Optimization", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web1_5.mp4" },
          { title: "Code Splitting", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web1_6.mp4" },
        ],
      },
      {
        sectionTitle: "Production",
        lectures: [
          { title: "Folder Structure", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web1_7.mp4" },
          { title: "Performance Optimization", duration: "17:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web1_8.mp4" },
          { title: "Deployment", duration: "13:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web1_9.mp4" },
        ],
      },
    ],
  },

  {
    id: "course2",
    title: "Next.js Production Mastery",
    category: "web-dev",
    instructor: "Rahul Sharma",
    price: 1399,
    thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775443806/maxresdefault_c9yowg.jpg",
    description: "Build production-ready apps using Next.js with SSR and SSG.",
    rating: 4.9,
    students: 2900,
    sections: [
      {
        sectionTitle: "Fundamentals",
        lectures: [
          { title: "SSR vs SSG", duration: "12:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web2_1.mp4" },
          { title: "Routing System", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web2_2.mp4" },
          { title: "API Routes", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web2_3.mp4" },
        ],
      },
      {
        sectionTitle: "Advanced",
        lectures: [
          { title: "Middleware", duration: "15:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web2_4.mp4" },
          { title: "Auth Integration", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web2_5.mp4" },
          { title: "Image Optimization", duration: "11:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web2_6.mp4" },
        ],
      },
      {
        sectionTitle: "Deployment",
        lectures: [
          { title: "Vercel Deployment", duration: "10:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web2_7.mp4" },
          { title: "Env Variables", duration: "12:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web2_8.mp4" },
          { title: "Scaling Apps", duration: "16:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web2_9.mp4" },
        ],
      },
    ],
  },

  {
    id: "course3",
    title: "Node.js Microservices",
    category: "web-dev",
    instructor: "Amit Patel",
    price: 1299,
    thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775466717/Building_Microservices_with_Node_JS_3a36e88ff6_hhtecm.jpg",
    description: "Design and build scalable microservices using Node.js.",
    rating: 4.7,
    students: 2500,
    sections: [
      {
        sectionTitle: "Basics",
        lectures: [
          { title: "Microservices Intro", duration: "11:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web3_1.mp4" },
          { title: "API Gateway", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web3_2.mp4" },
          { title: "Service Communication", duration: "13:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web3_3.mp4" },
        ],
      },
      {
        sectionTitle: "Implementation",
        lectures: [
          { title: "Express Services", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web3_4.mp4" },
          { title: "Message Queues", duration: "16:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web3_5.mp4" },
          { title: "Database Design", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web3_6.mp4" },
        ],
      },
      {
        sectionTitle: "Production",
        lectures: [
          { title: "Scaling", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web3_7.mp4" },
          { title: "Monitoring", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web3_8.mp4" },
          { title: "Deployment", duration: "19:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web3_9.mp4" },
        ],
      },
    ],
  },

  {
    id: "course4",
    title: "System Design Mastery",
    category: "web-dev",
    instructor: "Vikas Jain",
    price: 1499,
    thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775466816/sddefault_h0yjzr.jpg",
    description: "Learn to design scalable systems like top tech companies.",
    rating: 4.9,
    students: 4100,
    sections: [
      {
        sectionTitle: "Fundamentals",
        lectures: [
          { title: "Scalability Basics", duration: "12:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web4_1.mp4" },
          { title: "Load Balancing", duration: "14:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web4_2.mp4" },
          { title: "Caching", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web4_3.mp4" },
        ],
      },
      {
        sectionTitle: "Architecture",
        lectures: [
          { title: "Database Scaling", duration: "18:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web4_4.mp4" },
          { title: "Event Driven Systems", duration: "16:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web4_5.mp4" },
          { title: "CDN", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web4_6.mp4" },
        ],
      },
      {
        sectionTitle: "Case Studies",
        lectures: [
          { title: "Design Instagram", duration: "20:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web4_7.mp4" },
          { title: "Design WhatsApp", duration: "22:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web4_8.mp4" },
          { title: "Design YouTube", duration: "24:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web4_9.mp4" },
        ],
      },
    ],
  },

{
  id: "course5",
  title: "Advanced JavaScript Patterns",
  category: "web-dev",
  instructor: "Rohit Mehta",
  price: 1099,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775466918/1_eiZfPUyu56kKq36KMhot0A_jrvzde.png",
  description: "Master advanced JavaScript concepts and design patterns for scalable apps.",
  rating: 4.7,
  students: 2800,
  sections: [
    {
      sectionTitle: "Core Concepts",
      lectures: [
        { title: "Closures Deep Dive", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web5_1.mp4" },
        { title: "Execution Context", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web5_2.mp4" },
        { title: "Event Loop", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web5_3.mp4" },
      ],
    },
    {
      sectionTitle: "Patterns",
      lectures: [
        { title: "Module Pattern", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web5_4.mp4" },
        { title: "Observer Pattern", duration: "16:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web5_5.mp4" },
        { title: "Singleton Pattern", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web5_6.mp4" },
      ],
    },
    {
      sectionTitle: "Real World",
      lectures: [
        { title: "Async Patterns", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web5_7.mp4" },
        { title: "Error Handling", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web5_8.mp4" },
        { title: "Optimization", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web5_9.mp4" },
      ],
    },
  ],
},

{
  id: "course6",
  title: "TypeScript for Large Applications",
  category: "web-dev",
  instructor: "Sneha Iyer",
  price: 1199,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775467016/maxresdefault_zvlm6w.jpg",
  description: "Build scalable and maintainable applications using TypeScript.",
  rating: 4.8,
  students: 2600,
  sections: [
    {
      sectionTitle: "Basics",
      lectures: [
        { title: "TS Fundamentals", duration: "10:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web6_1.mp4" },
        { title: "Types & Interfaces", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web6_2.mp4" },
        { title: "Functions", duration: "12:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web6_3.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Generics", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web6_4.mp4" },
        { title: "Decorators", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web6_5.mp4" },
        { title: "Type Inference", duration: "13:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web6_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "TS + React App", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web6_7.mp4" },
        { title: "API Layer", duration: "16:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web6_8.mp4" },
        { title: "Best Practices", duration: "17:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web6_9.mp4" },
      ],
    },
  ],
},

{
  id: "course7",
  title: "GraphQL API Development",
  category: "web-dev",
  instructor: "Ankit Verma",
  price: 1199,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775467388/XDP_COURSE_graphql-api-design-schema-security--deployment_ubdmr4.jpg",
  description: "Build efficient APIs using GraphQL and Apollo.",
  rating: 4.7,
  students: 2300,
  sections: [
    {
      sectionTitle: "Basics",
      lectures: [
        { title: "GraphQL Intro", duration: "11:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web7_1.mp4" },
        { title: "Schemas", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web7_2.mp4" },
        { title: "Resolvers", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web7_3.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Apollo Server", duration: "15:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web7_4.mp4" },
        { title: "Auth with GraphQL", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web7_5.mp4" },
        { title: "Performance", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web7_6.mp4" },
      ],
    },
    {
      sectionTitle: "Integration",
      lectures: [
        { title: "React + GraphQL", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web7_7.mp4" },
        { title: "Caching", duration: "15:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web7_8.mp4" },
        { title: "Deployment", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web7_9.mp4" },
      ],
    },
  ],
},

{
  id: "course8",
  title: "Frontend Performance Optimization",
  category: "web-dev",
  instructor: "Priya Singh",
  price: 1099,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775467186/Frontend-Performance-Optimization_vqgmgi.webp",
  description: "Optimize frontend apps for speed and performance.",
  rating: 4.6,
  students: 2100,
  sections: [
    {
      sectionTitle: "Basics",
      lectures: [
        { title: "Performance Metrics", duration: "10:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web8_1.mp4" },
        { title: "Lighthouse", duration: "12:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web8_2.mp4" },
        { title: "Core Web Vitals", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web8_3.mp4" },
      ],
    },
    {
      sectionTitle: "Optimization",
      lectures: [
        { title: "Lazy Loading", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web8_4.mp4" },
        { title: "Image Optimization", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web8_5.mp4" },
        { title: "Code Splitting", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web8_6.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "SSR Optimization", duration: "16:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web8_7.mp4" },
        { title: "Caching Strategies", duration: "14:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web8_8.mp4" },
        { title: "Bundle Analysis", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web8_9.mp4" },
      ],
    },
  ],
},

{
  id: "course9",
  title: "Web Security & Authentication",
  category: "web-dev",
  instructor: "Vikas Jain",
  price: 1299,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775467496/3720241205133321_canfcl.png",
  description: "Learn modern authentication and secure your web apps.",
  rating: 4.8,
  students: 3000,
  sections: [
    {
      sectionTitle: "Security Basics",
      lectures: [
        { title: "OWASP Top 10", duration: "12:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web9_1.mp4" },
        { title: "XSS & CSRF", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web9_2.mp4" },
        { title: "HTTPS & SSL", duration: "13:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web9_3.mp4" },
      ],
    },
    {
      sectionTitle: "Authentication",
      lectures: [
        { title: "JWT Auth", duration: "16:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web9_4.mp4" },
        { title: "OAuth", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web9_5.mp4" },
        { title: "Session Auth", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web9_6.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Rate Limiting", duration: "13:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web9_7.mp4" },
        { title: "Secure APIs", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web9_8.mp4" },
        { title: "Best Practices", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web9_9.mp4" },
      ],
    },
  ],
},

{
  id: "course10",
  title: "Full Stack SaaS Development",
  category: "web-dev",
  instructor: "Arpit Aware",
  price: 1499,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775467567/hq720_izyann.jpg",
  description: "Build a production-ready SaaS product from scratch.",
  rating: 4.9,
  students: 3500,
  sections: [
    {
      sectionTitle: "Planning",
      lectures: [
        { title: "SaaS Architecture", duration: "12:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web10_1.mp4" },
        { title: "Multi-Tenant Systems", duration: "14:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web10_2.mp4" },
        { title: "Tech Stack", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web10_3.mp4" },
      ],
    },
    {
      sectionTitle: "Development",
      lectures: [
        { title: "Auth System", duration: "18:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web10_4.mp4" },
        { title: "Subscription Logic", duration: "16:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web10_5.mp4" },
        { title: "Dashboard", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web10_6.mp4" },
      ],
    },
    {
      sectionTitle: "Production",
      lectures: [
        { title: "Payments Integration", duration: "20:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web10_7.mp4" },
        { title: "Scaling SaaS", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web10_8.mp4" },
        { title: "Deployment", duration: "19:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/web10_9.mp4" },
      ],
    },
  ],
},
// App Dev

// ================= APP DEV (11–15) =================

{
  id: "course11",
  title: "Advanced Android Development with Kotlin",
  category: "app-dev",
  instructor: "Neha Kapoor",
  price: 1299,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775467663/sddefault_ldzmuj.jpg",
  description: "Build scalable Android apps using Kotlin, MVVM, and modern architecture.",
  rating: 4.8,
  students: 3100,
  sections: [
    {
      sectionTitle: "Core Android",
      lectures: [
        { title: "Kotlin Fundamentals", duration: "12:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app1_1.mp4" },
        { title: "Activities & Fragments", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app1_2.mp4" },
        { title: "Layouts & UI", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app1_3.mp4" },
      ],
    },
    {
      sectionTitle: "Architecture",
      lectures: [
        { title: "MVVM Pattern", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app1_4.mp4" },
        { title: "LiveData & ViewModel", duration: "16:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app1_5.mp4" },
        { title: "Repository Pattern", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app1_6.mp4" },
      ],
    },
    {
      sectionTitle: "Production",
      lectures: [
        { title: "API Integration", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app1_7.mp4" },
        { title: "Firebase Auth", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app1_8.mp4" },
        { title: "Play Store Deployment", duration: "16:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app1_9.mp4" },
      ],
    },
  ],
},

{
  id: "course12",
  title: "React Native Production Apps",
  category: "app-dev",
  instructor: "Rohit Mehta",
  price: 1199,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775467786/maxresdefault_aczkdx.jpg",
  description: "Build cross-platform mobile apps using React Native and modern tools.",
  rating: 4.7,
  students: 2800,
  sections: [
    {
      sectionTitle: "Basics",
      lectures: [
        { title: "React Native Setup", duration: "10:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app2_1.mp4" },
        { title: "Core Components", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app2_2.mp4" },
        { title: "Navigation", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app2_3.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Redux Integration", duration: "16:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app2_4.mp4" },
        { title: "Animations", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app2_5.mp4" },
        { title: "Performance Optimization", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app2_6.mp4" },
      ],
    },
    {
      sectionTitle: "Deployment",
      lectures: [
        { title: "Build APK & IPA", duration: "13:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app2_7.mp4" },
        { title: "Play Store Setup", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app2_8.mp4" },
        { title: "App Store Deployment", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app2_9.mp4" },
      ],
    },
  ],
},

{
  id: "course13",
  title: "Flutter Advanced Development",
  category: "app-dev",
  instructor: "Priya Singh",
  price: 1199,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775467901/Flutter-Course-for-Beginners-to-Advanced_bgjcjt.jpg",
  description: "Build beautiful cross-platform apps with Flutter and Dart.",
  rating: 4.8,
  students: 3000,
  sections: [
    {
      sectionTitle: "Flutter Basics",
      lectures: [
        { title: "Widgets Deep Dive", duration: "12:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app3_1.mp4" },
        { title: "Layouts", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app3_2.mp4" },
        { title: "Navigation", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app3_3.mp4" },
      ],
    },
    {
      sectionTitle: "State Management",
      lectures: [
        { title: "Provider", duration: "15:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app3_4.mp4" },
        { title: "Bloc Pattern", duration: "17:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app3_5.mp4" },
        { title: "Riverpod", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app3_6.mp4" },
      ],
    },
    {
      sectionTitle: "Production",
      lectures: [
        { title: "API Integration", duration: "18:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app3_7.mp4" },
        { title: "Firebase Integration", duration: "16:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app3_8.mp4" },
        { title: "Deployment", duration: "17:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app3_9.mp4" },
      ],
    },
  ],
},

{
  id: "course14",
  title: "iOS Development with Swift",
  category: "app-dev",
  instructor: "Ankit Verma",
  price: 1399,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775468110/Swift-Development-for-iOS_ua2qam.jpg",
  description: "Build iOS apps using Swift and modern Apple frameworks.",
  rating: 4.7,
  students: 2100,
  sections: [
    {
      sectionTitle: "Swift Basics",
      lectures: [
        { title: "Swift Syntax", duration: "11:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app4_1.mp4" },
        { title: "Optionals", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app4_2.mp4" },
        { title: "Control Flow", duration: "12:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app4_3.mp4" },
      ],
    },
    {
      sectionTitle: "UI Development",
      lectures: [
        { title: "UIKit Basics", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app4_4.mp4" },
        { title: "Auto Layout", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app4_5.mp4" },
        { title: "Navigation", duration: "16:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app4_6.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Networking", duration: "17:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app4_7.mp4" },
        { title: "Core Data", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app4_8.mp4" },
        { title: "App Store Deployment", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app4_9.mp4" },
      ],
    },
  ],
},

{
  id: "course15",
  title: "Mobile App Security & Best Practices",
  category: "app-dev",
  instructor: "Vikas Jain",
  price: 1099,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775468180/OIP_dc5qs6.webp",
  description: "Secure mobile applications and implement best practices.",
  rating: 4.6,
  students: 1900,
  sections: [
    {
      sectionTitle: "Security Basics",
      lectures: [
        { title: "Mobile Threats", duration: "10:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app5_1.mp4" },
        { title: "Data Protection", duration: "12:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app5_2.mp4" },
        { title: "Encryption", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app5_3.mp4" },
      ],
    },
    {
      sectionTitle: "Authentication",
      lectures: [
        { title: "Biometric Auth", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app5_4.mp4" },
        { title: "OAuth Mobile", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app5_5.mp4" },
        { title: "Token Storage", duration: "13:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app5_6.mp4" },
      ],
    },
    {
      sectionTitle: "Best Practices",
      lectures: [
        { title: "Secure APIs", duration: "16:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app5_7.mp4" },
        { title: "App Hardening", duration: "15:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app5_8.mp4" },
        { title: "Testing Security", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app5_9.mp4" },
      ],
    },
  ],
},

{
  id: "course16",
  title: "Expo & React Native Rapid Development",
  category: "app-dev",
  instructor: "Aman Gupta",
  price: 999,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775468249/OIP_t0fcng.jpg",
  description: "Build and deploy React Native apps faster using Expo ecosystem.",
  rating: 4.6,
  students: 2200,
  sections: [
    {
      sectionTitle: "Expo Basics",
      lectures: [
        { title: "Expo Setup", duration: "9:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app6_1.mp4" },
        { title: "Project Structure", duration: "11:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app6_2.mp4" },
        { title: "Navigation Setup", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app6_3.mp4" },
      ],
    },
    {
      sectionTitle: "Features",
      lectures: [
        { title: "Camera & Media", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app6_4.mp4" },
        { title: "Push Notifications", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app6_5.mp4" },
        { title: "Device APIs", duration: "15:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app6_6.mp4" },
      ],
    },
    {
      sectionTitle: "Deployment",
      lectures: [
        { title: "Build with Expo", duration: "12:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app6_7.mp4" },
        { title: "OTA Updates", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app6_8.mp4" },
        { title: "Publish App", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app6_9.mp4" },
      ],
    },
  ],
},

{
  id: "course17",
  title: "Kotlin Multiplatform Mobile (KMM)",
  category: "app-dev",
  instructor: "Ritika Sharma",
  price: 1299,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775468331/1_ndsvvkmLDtOMBtFXt20Bzw_t2svnq.png",
  description: "Share business logic across Android & iOS using Kotlin Multiplatform.",
  rating: 4.7,
  students: 1800,
  sections: [
    {
      sectionTitle: "KMM Basics",
      lectures: [
        { title: "KMM Overview", duration: "10:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app7_1.mp4" },
        { title: "Project Setup", duration: "12:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app7_2.mp4" },
        { title: "Shared Modules", duration: "13:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app7_3.mp4" },
      ],
    },
    {
      sectionTitle: "Development",
      lectures: [
        { title: "Networking Layer", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app7_4.mp4" },
        { title: "Database Integration", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app7_5.mp4" },
        { title: "Dependency Injection", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app7_6.mp4" },
      ],
    },
    {
      sectionTitle: "Production",
      lectures: [
        { title: "Android Integration", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app7_7.mp4" },
        { title: "iOS Integration", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app7_8.mp4" },
        { title: "Deployment", duration: "16:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app7_9.mp4" },
      ],
    },
  ],
},

{
  id: "course18",
  title: "SwiftUI Advanced Interfaces",
  category: "app-dev",
  instructor: "Karan Malhotra",
  price: 1199,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775468606/OIP_e4h3wy.webp",
  description: "Design modern iOS apps using SwiftUI and advanced UI techniques.",
  rating: 4.8,
  students: 2000,
  sections: [
    {
      sectionTitle: "SwiftUI Basics",
      lectures: [
        { title: "Views & Layouts", duration: "11:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app8_1.mp4" },
        { title: "Modifiers", duration: "12:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app8_2.mp4" },
        { title: "Navigation", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app8_3.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced UI",
      lectures: [
        { title: "Animations", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app8_4.mp4" },
        { title: "Custom Components", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app8_5.mp4" },
        { title: "Dark Mode", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app8_6.mp4" },
      ],
    },
    {
      sectionTitle: "Integration",
      lectures: [
        { title: "Combine Framework", duration: "17:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app8_7.mp4" },
        { title: "API Calls", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app8_8.mp4" },
        { title: "App Deployment", duration: "16:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app8_9.mp4" },
      ],
    },
  ],
},

{
  id: "course19",
  title: "Mobile UI Performance Optimization",
  category: "app-dev",
  instructor: "Sneha Iyer",
  price: 1099,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775468759/OIP_ksqbse.webp",
  description: "Optimize mobile apps for performance and smooth UI experience.",
  rating: 4.6,
  students: 1700,
  sections: [
    {
      sectionTitle: "Performance Basics",
      lectures: [
        { title: "Rendering Performance", duration: "10:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app9_1.mp4" },
        { title: "Memory Management", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app9_2.mp4" },
        { title: "CPU Optimization", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app9_3.mp4" },
      ],
    },
    {
      sectionTitle: "Optimization",
      lectures: [
        { title: "Lazy Loading", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app9_4.mp4" },
        { title: "Efficient Lists", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app9_5.mp4" },
        { title: "Animations Optimization", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app9_6.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Profiling Tools", duration: "13:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app9_7.mp4" },
        { title: "Crash Debugging", duration: "14:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app9_8.mp4" },
        { title: "Performance Testing", duration: "15:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app9_9.mp4" },
      ],
    },
  ],
},

{
  id: "course20",
  title: "End-to-End Mobile App Deployment",
  category: "app-dev",
  instructor: "Arpit Aware",
  price: 1399,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775468839/end-to-end-app-development-services-l_pbe2xc.jpg",
  description: "Deploy Android & iOS apps with CI/CD pipelines and automation.",
  rating: 4.9,
  students: 2600,
  sections: [
    {
      sectionTitle: "Deployment Basics",
      lectures: [
        { title: "Build Process", duration: "11:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app10_1.mp4" },
        { title: "Signing Apps", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app10_2.mp4" },
        { title: "Versioning", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app10_3.mp4" },
      ],
    },
    {
      sectionTitle: "CI/CD",
      lectures: [
        { title: "GitHub Actions", duration: "15:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app10_4.mp4" },
        { title: "Fastlane", duration: "16:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app10_5.mp4" },
        { title: "Automation", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app10_6.mp4" },
      ],
    },
    {
      sectionTitle: "Publishing",
      lectures: [
        { title: "Play Store Release", duration: "13:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app10_7.mp4" },
        { title: "App Store Release", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app10_8.mp4" },
        { title: "Monitoring Apps", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/app10_9.mp4" },
      ],
    },
  ],
},
// ================= DATA SCIENCE (21–25) =================

{
  id: "course21",
  title: "Python for Data Science Mastery",
  category: "data-science",
  instructor: "Amit Patel",
  price: 1099,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775471015/maxresdefault_weknpn.jpg",
  description: "Master Python, NumPy, and Pandas for real-world data analysis.",
  rating: 4.8,
  students: 4200,
  sections: [
    {
      sectionTitle: "Python Basics",
      lectures: [
        { title: "Syntax & Variables", duration: "10:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data1_1.mp4" },
        { title: "Loops & Functions", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data1_2.mp4" },
        { title: "Data Structures", duration: "12:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data1_3.mp4" },
      ],
    },
    {
      sectionTitle: "Libraries",
      lectures: [
        { title: "NumPy Deep Dive", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data1_4.mp4" },
        { title: "Pandas Operations", duration: "18:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data1_5.mp4" },
        { title: "Data Cleaning", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data1_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "Data Analysis Project", duration: "20:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data1_7.mp4" },
        { title: "Visualization Dashboard", duration: "22:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data1_8.mp4" },
        { title: "Case Study", duration: "24:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data1_9.mp4" },
      ],
    },
  ],
},

{
  id: "course22",
  title: "Machine Learning Engineering",
  category: "data-science",
  instructor: "Rohit Mehta",
  price: 1399,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775471454/maxresdefault_s6e0oh.jpg",
  description: "Build and deploy ML models using Scikit-learn and real datasets.",
  rating: 4.9,
  students: 3900,
  sections: [
    {
      sectionTitle: "ML Basics",
      lectures: [
        { title: "Supervised Learning", duration: "12:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data2_1.mp4" },
        { title: "Regression Models", duration: "14:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data2_2.mp4" },
        { title: "Classification", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data2_3.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Feature Engineering", duration: "17:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data2_4.mp4" },
        { title: "Model Evaluation", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data2_5.mp4" },
        { title: "Hyperparameter Tuning", duration: "18:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data2_6.mp4" },
      ],
    },
    {
      sectionTitle: "Deployment",
      lectures: [
        { title: "Model Deployment", duration: "19:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data2_7.mp4" },
        { title: "Flask APIs", duration: "17:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data2_8.mp4" },
        { title: "Production ML", duration: "20:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data2_9.mp4" },
      ],
    },
  ],
},

{
  id: "course23",
  title: "Deep Learning with TensorFlow",
  category: "data-science",
  instructor: "Sneha Iyer",
  price: 1499,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775471744/OIP_xw7asp.webp",
  description: "Build neural networks and deep learning models using TensorFlow.",
  rating: 4.8,
  students: 3500,
  sections: [
    {
      sectionTitle: "Foundations",
      lectures: [
        { title: "Neural Networks Intro", duration: "11:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data3_1.mp4" },
        { title: "TensorFlow Basics", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data3_2.mp4" },
        { title: "Activation Functions", duration: "12:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data3_3.mp4" },
      ],
    },
    {
      sectionTitle: "Models",
      lectures: [
        { title: "CNNs", duration: "16:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data3_4.mp4" },
        { title: "RNNs", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data3_5.mp4" },
        { title: "Transfer Learning", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data3_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "Image Classifier", duration: "20:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data3_7.mp4" },
        { title: "Text Prediction", duration: "21:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data3_8.mp4" },
        { title: "Deployment", duration: "19:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data3_9.mp4" },
      ],
    },
  ],
},

{
  id: "course24",
  title: "Data Visualization with Python",
  category: "data-science",
  instructor: "Priya Singh",
  price: 999,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775471850/OIP_jl74ye.webp",
  description: "Create powerful visualizations using Matplotlib, Seaborn, and Plotly.",
  rating: 4.7,
  students: 2600,
  sections: [
    {
      sectionTitle: "Basics",
      lectures: [
        { title: "Matplotlib", duration: "11:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data4_1.mp4" },
        { title: "Seaborn", duration: "13:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data4_2.mp4" },
        { title: "Plotly", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data4_3.mp4" },
      ],
    },
    {
      sectionTitle: "Charts",
      lectures: [
        { title: "Bar & Line Charts", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data4_4.mp4" },
        { title: "Heatmaps", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data4_5.mp4" },
        { title: "Dashboards", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data4_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "Sales Dashboard", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data4_7.mp4" },
        { title: "Finance Charts", duration: "17:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data4_8.mp4" },
        { title: "Interactive Reports", duration: "19:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data4_9.mp4" },
      ],
    },
  ],
},

{
  id: "course25",
  title: "SQL for Data Analysis",
  category: "data-science",
  instructor: "Ankit Verma",
  price: 899,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775471916/OIP_vltfna.jpg",
  description: "Master SQL queries for analyzing large datasets.",
  rating: 4.6,
  students: 3000,
  sections: [
    {
      sectionTitle: "SQL Basics",
      lectures: [
        { title: "SELECT Queries", duration: "10:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data5_1.mp4" },
        { title: "WHERE & Filters", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data5_2.mp4" },
        { title: "JOINS", duration: "14:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data5_3.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced SQL",
      lectures: [
        { title: "Subqueries", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data5_4.mp4" },
        { title: "Window Functions", duration: "16:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data5_5.mp4" },
        { title: "CTEs", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data5_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "E-commerce Analysis", duration: "18:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data5_7.mp4" },
        { title: "User Behavior Analysis", duration: "17:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data5_8.mp4" },
        { title: "Dashboard Queries", duration: "19:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data5_9.mp4" },
      ],
    },
  ],
},
// ================= DATA SCIENCE (26–30 CONTINUED) =================

{
  id: "course26",
  title: "Big Data Processing with Spark",
  category: "data-science",
  instructor: "Vikas Jain",
  price: 1399,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775472005/hqdefault_zuj2r5.jpg",
  description: "Process large-scale data using Apache Spark and distributed systems.",
  rating: 4.8,
  students: 2400,
  sections: [
    {
      sectionTitle: "Spark Basics",
      lectures: [
        { title: "Intro to Big Data", duration: "11:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data6_1.mp4" },
        { title: "RDDs", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data6_2.mp4" },
        { title: "DataFrames", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data6_3.mp4" },
      ],
    },
    {
      sectionTitle: "Processing",
      lectures: [
        { title: "Transformations", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data6_4.mp4" },
        { title: "Actions", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data6_5.mp4" },
        { title: "Streaming", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data6_6.mp4" },
      ],
    },
    {
      sectionTitle: "Production",
      lectures: [
        { title: "Cluster Setup", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data6_7.mp4" },
        { title: "Optimization", duration: "17:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data6_8.mp4" },
        { title: "Real Projects", duration: "19:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data6_9.mp4" },
      ],
    },
  ],
},

{
  id: "course27",
  title: "MLOps & Model Deployment",
  category: "data-science",
  instructor: "Rahul Sharma",
  price: 1499,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775472228/maxresdefault_cr5ljt.jpg",
  description: "Deploy, monitor, and maintain ML models in production environments.",
  rating: 4.9,
  students: 2200,
  sections: [
    {
      sectionTitle: "MLOps Basics",
      lectures: [
        { title: "MLOps Overview", duration: "10:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data7_1.mp4" },
        { title: "Versioning Models", duration: "12:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data7_2.mp4" },
        { title: "Pipelines", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data7_3.mp4" },
      ],
    },
    {
      sectionTitle: "Deployment",
      lectures: [
        { title: "Docker for ML", duration: "15:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data7_4.mp4" },
        { title: "CI/CD for Models", duration: "16:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data7_5.mp4" },
        { title: "Kubernetes", duration: "17:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data7_6.mp4" },
      ],
    },
    {
      sectionTitle: "Monitoring",
      lectures: [
        { title: "Model Drift", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data7_7.mp4" },
        { title: "Logging", duration: "13:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data7_8.mp4" },
        { title: "Alerts", duration: "15:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data7_9.mp4" },
      ],
    },
  ],
},

{
  id: "course28",
  title: "Natural Language Processing (NLP)",
  category: "data-science",
  instructor: "Sneha Iyer",
  price: 1399,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775472336/maxresdefault_pyifzi.jpg",
  description: "Process and analyze text data using NLP techniques.",
  rating: 4.8,
  students: 2600,
  sections: [
    {
      sectionTitle: "NLP Basics",
      lectures: [
        { title: "Text Processing", duration: "11:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data8_1.mp4" },
        { title: "Tokenization", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data8_2.mp4" },
        { title: "Stop Words", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data8_3.mp4" },
      ],
    },
    {
      sectionTitle: "Models",
      lectures: [
        { title: "Bag of Words", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data8_4.mp4" },
        { title: "TF-IDF", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data8_5.mp4" },
        { title: "Word Embeddings", duration: "16:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data8_6.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Transformers", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data8_7.mp4" },
        { title: "BERT", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data8_8.mp4" },
        { title: "NLP Projects", duration: "19:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data8_9.mp4" },
      ],
    },
  ],
},

{
  id: "course29",
  title: "Time Series Analysis & Forecasting",
  category: "data-science",
  instructor: "Aman Gupta",
  price: 1199,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775472436/maxresdefault_bw9pjr.jpg",
  description: "Analyze and forecast time-based data using advanced techniques.",
  rating: 4.7,
  students: 2000,
  sections: [
    {
      sectionTitle: "Basics",
      lectures: [
        { title: "Time Series Intro", duration: "10:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data9_1.mp4" },
        { title: "Stationarity", duration: "12:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data9_2.mp4" },
        { title: "Decomposition", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data9_3.mp4" },
      ],
    },
    {
      sectionTitle: "Models",
      lectures: [
        { title: "ARIMA", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data9_4.mp4" },
        { title: "SARIMA", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data9_5.mp4" },
        { title: "Prophet", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data9_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "Stock Forecasting", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data9_7.mp4" },
        { title: "Sales Prediction", duration: "17:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data9_8.mp4" },
        { title: "Demand Forecasting", duration: "19:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data9_9.mp4" },
      ],
    },
  ],
},

{
  id: "course30",
  title: "Data Engineering with Python",
  category: "data-science",
  instructor: "Karan Malhotra",
  price: 1399,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775472533/maxresdefault_d9jiee.jpg",
  description: "Build robust data pipelines and ETL systems using Python.",
  rating: 4.8,
  students: 2300,
  sections: [
    {
      sectionTitle: "Foundations",
      lectures: [
        { title: "Data Pipelines", duration: "11:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data10_1.mp4" },
        { title: "ETL Process", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data10_2.mp4" },
        { title: "Data Warehousing", duration: "14:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data10_3.mp4" },
      ],
    },
    {
      sectionTitle: "Tools",
      lectures: [
        { title: "Airflow", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data10_4.mp4" },
        { title: "Kafka", duration: "15:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data10_5.mp4" },
        { title: "Spark Integration", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data10_6.mp4" },
      ],
    },
    {
      sectionTitle: "Production",
      lectures: [
        { title: "Scaling Pipelines", duration: "18:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data10_7.mp4" },
        { title: "Monitoring", duration: "16:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data10_8.mp4" },
        { title: "Real Projects", duration: "20:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/data10_9.mp4" },
      ],
    },
  ],
},

// ================= UI/UX (31–35) =================

{
  id: "course31",
  title: "UI/UX Design Masterclass",
  category: "ui-ux",
  instructor: "Sneha Iyer",
  price: 1099,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775477820/maxresdefault_zkn2in.jpg",
  description: "Master UI/UX design principles and create user-centered designs.",
  rating: 4.8,
  students: 3400,
  sections: [
    {
      sectionTitle: "Foundations",
      lectures: [
        { title: "Design Principles", duration: "10:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui1_1.mp4" },
        { title: "Color Theory", duration: "12:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui1_2.mp4" },
        { title: "Typography", duration: "11:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui1_3.mp4" },
      ],
    },
    {
      sectionTitle: "UX Research",
      lectures: [
        { title: "User Personas", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui1_4.mp4" },
        { title: "User Flows", duration: "13:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui1_5.mp4" },
        { title: "Wireframing", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui1_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "Mobile App Design", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui1_7.mp4" },
        { title: "Website UI", duration: "17:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui1_8.mp4" },
        { title: "Portfolio Design", duration: "19:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui1_9.mp4" },
      ],
    },
  ],
},

{
  id: "course32",
  title: "Figma to Production Design",
  category: "ui-ux",
  instructor: "Priya Singh",
  price: 999,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775477956/maxresdefault_q0zcon.jpg",
  description: "Design high-fidelity UI and convert them into real products.",
  rating: 4.7,
  students: 2800,
  sections: [
    {
      sectionTitle: "Figma Basics",
      lectures: [
        { title: "Figma Interface", duration: "9:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui2_1.mp4" },
        { title: "Frames & Components", duration: "12:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui2_2.mp4" },
        { title: "Auto Layout", duration: "13:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui2_3.mp4" },
      ],
    },
    {
      sectionTitle: "Design System",
      lectures: [
        { title: "Design Tokens", duration: "14:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui2_4.mp4" },
        { title: "Reusable Components", duration: "15:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui2_5.mp4" },
        { title: "Variants", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui2_6.mp4" },
      ],
    },
    {
      sectionTitle: "Handoff",
      lectures: [
        { title: "Dev Handoff", duration: "16:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui2_7.mp4" },
        { title: "Responsive Design", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui2_8.mp4" },
        { title: "Design QA", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui2_9.mp4" },
      ],
    },
  ],
},

{
  id: "course33",
  title: "Interaction Design & Animations",
  category: "ui-ux",
  instructor: "Ankit Verma",
  price: 1199,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775478088/maxresdefault_f4kibe.jpg",
  description: "Create engaging UI interactions and animations.",
  rating: 4.7,
  students: 2100,
  sections: [
    {
      sectionTitle: "Basics",
      lectures: [
        { title: "Interaction Principles", duration: "10:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui3_1.mp4" },
        { title: "Microinteractions", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui3_2.mp4" },
        { title: "Animation Basics", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui3_3.mp4" },
      ],
    },
    {
      sectionTitle: "Tools",
      lectures: [
        { title: "Figma Animations", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui3_4.mp4" },
        { title: "Framer Motion", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui3_5.mp4" },
        { title: "Lottie Files", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui3_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "App Animations", duration: "16:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui3_7.mp4" },
        { title: "Website Animations", duration: "15:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui3_8.mp4" },
        { title: "Prototype Demo", duration: "17:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui3_9.mp4" },
      ],
    },
  ],
},

{
  id: "course34",
  title: "UX Research & Usability Testing",
  category: "ui-ux",
  instructor: "Ritika Sharma",
  price: 1099,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775478241/maxresdefault_fdbc2w.jpg",
  description: "Conduct user research and improve product usability.",
  rating: 4.6,
  students: 1900,
  sections: [
    {
      sectionTitle: "Research Basics",
      lectures: [
        { title: "User Interviews", duration: "11:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui4_1.mp4" },
        { title: "Surveys", duration: "12:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui4_2.mp4" },
        { title: "Analytics", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui4_3.mp4" },
      ],
    },
    {
      sectionTitle: "Testing",
      lectures: [
        { title: "Usability Testing", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui4_4.mp4" },
        { title: "A/B Testing", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui4_5.mp4" },
        { title: "Heatmaps", duration: "13:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui4_6.mp4" },
      ],
    },
    {
      sectionTitle: "Improvement",
      lectures: [
        { title: "UX Audit", duration: "16:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui4_7.mp4" },
        { title: "Feedback Analysis", duration: "15:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui4_8.mp4" },
        { title: "Iteration", duration: "17:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui4_9.mp4" },
      ],
    },
  ],
},

{
  id: "course35",
  title: "Design Systems & Accessibility",
  category: "ui-ux",
  instructor: "Karan Malhotra",
  price: 1199,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775478360/maxresdefault_vgwzkv.jpg",
  description: "Build scalable design systems and ensure accessibility compliance.",
  rating: 4.8,
  students: 2200,
  sections: [
    {
      sectionTitle: "Design Systems",
      lectures: [
        { title: "Components", duration: "11:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui5_1.mp4" },
        { title: "Tokens", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui5_2.mp4" },
        { title: "Guidelines", duration: "12:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui5_3.mp4" },
      ],
    },
    {
      sectionTitle: "Accessibility",
      lectures: [
        { title: "WCAG Basics", duration: "14:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui5_4.mp4" },
        { title: "Color Contrast", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui5_5.mp4" },
        { title: "Screen Readers", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui5_6.mp4" },
      ],
    },
    {
      sectionTitle: "Implementation",
      lectures: [
        { title: "Accessible UI", duration: "16:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui5_7.mp4" },
        { title: "Testing Tools", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui5_8.mp4" },
        { title: "Best Practices", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui5_9.mp4" },
      ],
    },
  ],
},
// ================= UI/UX (36–40 CONTINUED) =================

{
  id: "course36",
  title: "Advanced Mobile UI Design",
  category: "ui-ux",
  instructor: "Aman Gupta",
  price: 1199,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775478522/maxresdefault_hxmdgf.jpg",
  description: "Design modern and intuitive mobile app interfaces with best practices.",
  rating: 4.7,
  students: 2300,
  sections: [
    {
      sectionTitle: "Mobile Design Basics",
      lectures: [
        { title: "Mobile UI Principles", duration: "10:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui6_1.mp4" },
        { title: "Navigation Patterns", duration: "12:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui6_2.mp4" },
        { title: "Gestures", duration: "11:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui6_3.mp4" },
      ],
    },
    {
      sectionTitle: "Design",
      lectures: [
        { title: "App Layouts", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui6_4.mp4" },
        { title: "UI Components", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui6_5.mp4" },
        { title: "Dark Mode Design", duration: "13:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui6_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "E-commerce App UI", duration: "17:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui6_7.mp4" },
        { title: "Social Media UI", duration: "16:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui6_8.mp4" },
        { title: "Finance App UI", duration: "18:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui6_9.mp4" },
      ],
    },
  ],
},

{
  id: "course37",
  title: "UX Writing & Content Design",
  category: "ui-ux",
  instructor: "Priya Singh",
  price: 899,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775478574/hq720_akli7l.jpg",
  description: "Craft effective UX copy and improve user communication.",
  rating: 4.6,
  students: 1800,
  sections: [
    {
      sectionTitle: "Basics",
      lectures: [
        { title: "UX Writing Intro", duration: "9:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui7_1.mp4" },
        { title: "Microcopy", duration: "11:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui7_2.mp4" },
        { title: "Tone & Voice", duration: "12:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui7_3.mp4" },
      ],
    },
    {
      sectionTitle: "Content Strategy",
      lectures: [
        { title: "User-Centered Writing", duration: "13:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui7_4.mp4" },
        { title: "Content Hierarchy", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui7_5.mp4" },
        { title: "Error Messages", duration: "12:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui7_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "App Copywriting", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui7_7.mp4" },
        { title: "Website Copy", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui7_8.mp4" },
        { title: "UX Audit", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui7_9.mp4" },
      ],
    },
  ],
},

{
  id: "course38",
  title: "Prototyping with Figma & Framer",
  category: "ui-ux",
  instructor: "Ankit Verma",
  price: 1099,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775478650/maxresdefault_cl5x4d.jpg",
  description: "Create interactive prototypes using Figma and Framer.",
  rating: 4.7,
  students: 2100,
  sections: [
    {
      sectionTitle: "Figma Prototyping",
      lectures: [
        { title: "Interactive Components", duration: "10:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui8_1.mp4" },
        { title: "Transitions", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui8_2.mp4" },
        { title: "Smart Animate", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui8_3.mp4" },
      ],
    },
    {
      sectionTitle: "Framer",
      lectures: [
        { title: "Framer Basics", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui8_4.mp4" },
        { title: "Animations", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui8_5.mp4" },
        { title: "Interactions", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui8_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "App Prototype", duration: "16:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui8_7.mp4" },
        { title: "Website Prototype", duration: "15:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui8_8.mp4" },
        { title: "User Testing", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui8_9.mp4" },
      ],
    },
  ],
},

{
  id: "course39",
  title: "UX Analytics & Metrics",
  category: "ui-ux",
  instructor: "Ritika Sharma",
  price: 999,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775478775/f5cd5f33af1c6f95cd01d9b8e6432d22c8f6db29-800x457_onvltm.png",
  description: "Measure and improve UX using analytics and metrics.",
  rating: 4.6,
  students: 1700,
  sections: [
    {
      sectionTitle: "Analytics Basics",
      lectures: [
        { title: "UX Metrics", duration: "10:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui9_1.mp4" },
        { title: "User Behavior", duration: "12:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui9_2.mp4" },
        { title: "Funnels", duration: "13:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui9_3.mp4" },
      ],
    },
    {
      sectionTitle: "Tools",
      lectures: [
        { title: "Google Analytics", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui9_4.mp4" },
        { title: "Hotjar", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui9_5.mp4" },
        { title: "Mixpanel", duration: "15:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui9_6.mp4" },
      ],
    },
    {
      sectionTitle: "Optimization",
      lectures: [
        { title: "Conversion Rate", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui9_7.mp4" },
        { title: "A/B Testing", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui9_8.mp4" },
        { title: "Reporting", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui9_9.mp4" },
      ],
    },
  ],
},

{
  id: "course40",
  title: "Enterprise UX Strategy",
  category: "ui-ux",
  instructor: "Karan Malhotra",
  price: 1399,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775478919/maxresdefault_lm5obb.jpg",
  description: "Design UX strategies for large-scale enterprise products.",
  rating: 4.8,
  students: 2000,
  sections: [
    {
      sectionTitle: "Strategy Basics",
      lectures: [
        { title: "UX Strategy Intro", duration: "11:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui10_1.mp4" },
        { title: "Stakeholder Mapping", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui10_2.mp4" },
        { title: "Business Goals", duration: "12:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui10_3.mp4" },
      ],
    },
    {
      sectionTitle: "Execution",
      lectures: [
        { title: "UX Roadmaps", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui10_4.mp4" },
        { title: "Design Ops", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui10_5.mp4" },
        { title: "Collaboration", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui10_6.mp4" },
      ],
    },
    {
      sectionTitle: "Scaling",
      lectures: [
        { title: "Design Systems at Scale", duration: "16:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui10_7.mp4" },
        { title: "User Feedback Loops", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui10_8.mp4" },
        { title: "Continuous Improvement", duration: "17:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/ui10_9.mp4" },
      ],
    },
  ],
},
// ================= DEVOPS (41–45) =================

{
  id: "course41",
  title: "Docker & Kubernetes Mastery",
  category: "devops",
  instructor: "Vikas Jain",
  price: 1399,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775479003/1_Rsd2osvqDSee1Ov8kBSGXw_pejysz.png",
  description: "Master containerization and orchestration using Docker and Kubernetes.",
  rating: 4.9,
  students: 3800,
  sections: [
    {
      sectionTitle: "Docker Basics",
      lectures: [
        { title: "Intro to Docker", duration: "10:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev1_1.mp4" },
        { title: "Images & Containers", duration: "13:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev1_2.mp4" },
        { title: "Docker CLI", duration: "12:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev1_3.mp4" },
      ],
    },
    {
      sectionTitle: "Kubernetes",
      lectures: [
        { title: "K8s Basics", duration: "15:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev1_4.mp4" },
        { title: "Pods & Services", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev1_5.mp4" },
        { title: "Deployments", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev1_6.mp4" },
      ],
    },
    {
      sectionTitle: "Production",
      lectures: [
        { title: "Scaling Apps", duration: "17:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev1_7.mp4" },
        { title: "Monitoring", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev1_8.mp4" },
        { title: "CI/CD Integration", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev1_9.mp4" },
      ],
    },
  ],
},

{
  id: "course42",
  title: "AWS Cloud Engineering",
  category: "devops",
  instructor: "Rahul Sharma",
  price: 1499,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775479119/maxresdefault_wjiyqs.jpg",
  description: "Build and deploy scalable applications using AWS services.",
  rating: 4.8,
  students: 3600,
  sections: [
    {
      sectionTitle: "AWS Basics",
      lectures: [
        { title: "EC2 & S3", duration: "11:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev2_1.mp4" },
        { title: "IAM", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev2_2.mp4" },
        { title: "VPC", duration: "12:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev2_3.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Lambda", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev2_4.mp4" },
        { title: "RDS & DynamoDB", duration: "16:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev2_5.mp4" },
        { title: "CloudFront", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev2_6.mp4" },
      ],
    },
    {
      sectionTitle: "Deployment",
      lectures: [
        { title: "Elastic Beanstalk", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev2_7.mp4" },
        { title: "Scaling", duration: "16:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev2_8.mp4" },
        { title: "Monitoring", duration: "18:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev2_9.mp4" },
      ],
    },
  ],
},

{
  id: "course43",
  title: "CI/CD Pipeline Engineering",
  category: "devops",
  instructor: "Amit Patel",
  price: 1299,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775479197/hq720_c3r76z.jpg",
  description: "Automate software delivery using CI/CD pipelines.",
  rating: 4.8,
  students: 2900,
  sections: [
    {
      sectionTitle: "CI/CD Basics",
      lectures: [
        { title: "Intro to CI/CD", duration: "10:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev3_1.mp4" },
        { title: "Git Workflows", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev3_2.mp4" },
        { title: "Build Pipelines", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev3_3.mp4" },
      ],
    },
    {
      sectionTitle: "Tools",
      lectures: [
        { title: "GitHub Actions", duration: "15:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev3_4.mp4" },
        { title: "Jenkins", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev3_5.mp4" },
        { title: "GitLab CI", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev3_6.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Pipeline Optimization", duration: "17:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev3_7.mp4" },
        { title: "Security", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev3_8.mp4" },
        { title: "Deployment Automation", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev3_9.mp4" },
      ],
    },
  ],
},

{
  id: "course44",
  title: "Terraform & Infrastructure as Code",
  category: "devops",
  instructor: "Sneha Iyer",
  price: 1399,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775479286/maxresdefault_jelwfo.jpg",
  description: "Manage cloud infrastructure using Terraform and IaC principles.",
  rating: 4.7,
  students: 2400,
  sections: [
    {
      sectionTitle: "IaC Basics",
      lectures: [
        { title: "Terraform Intro", duration: "11:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev4_1.mp4" },
        { title: "Providers", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev4_2.mp4" },
        { title: "Resources", duration: "12:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev4_3.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Modules", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev4_4.mp4" },
        { title: "State Management", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev4_5.mp4" },
        { title: "Workspaces", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev4_6.mp4" },
      ],
    },
    {
      sectionTitle: "Projects",
      lectures: [
        { title: "AWS Infra Setup", duration: "18:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev4_7.mp4" },
        { title: "Multi-Env Setup", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev4_8.mp4" },
        { title: "Best Practices", duration: "19:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev4_9.mp4" },
      ],
    },
  ],
},

{
  id: "course45",
  title: "Monitoring & Logging with Prometheus",
  category: "devops",
  instructor: "Karan Malhotra",
  price: 1199,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775482708/maxresdefault_vtt6cx.jpg",
  description: "Monitor applications and infrastructure using Prometheus and Grafana.",
  rating: 4.7,
  students: 2100,
  sections: [
    {
      sectionTitle: "Monitoring Basics",
      lectures: [
        { title: "Intro to Monitoring", duration: "10:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev5_1.mp4" },
        { title: "Metrics", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev5_2.mp4" },
        { title: "Logs", duration: "13:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev5_3.mp4" },
      ],
    },
    {
      sectionTitle: "Tools",
      lectures: [
        { title: "Prometheus Setup", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev5_4.mp4" },
        { title: "Grafana Dashboards", duration: "15:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev5_5.mp4" },
        { title: "Alerting", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev5_6.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Scaling Monitoring", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev5_7.mp4" },
        { title: "Log Aggregation", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev5_8.mp4" },
        { title: "Real Projects", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev5_9.mp4" },
      ],
    },
  ],
},
// ================= DEVOPS (46–50 CONTINUED) =================

{
  id: "course46",
  title: "Linux for DevOps Engineers",
  category: "devops",
  instructor: "Aman Gupta",
  price: 999,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775482794/maxresdefault_qopwen.jpg",
  description: "Master Linux fundamentals required for DevOps and cloud environments.",
  rating: 4.7,
  students: 2600,
  sections: [
    {
      sectionTitle: "Linux Basics",
      lectures: [
        { title: "Linux Overview", duration: "10:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev6_1.mp4" },
        { title: "File System", duration: "12:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev6_2.mp4" },
        { title: "Permissions", duration: "11:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev6_3.mp4" },
      ],
    },
    {
      sectionTitle: "Command Line",
      lectures: [
        { title: "Shell Commands", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev6_4.mp4" },
        { title: "Bash Scripting", duration: "15:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev6_5.mp4" },
        { title: "Process Management", duration: "13:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev6_6.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Networking", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev6_7.mp4" },
        { title: "Security", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev6_8.mp4" },
        { title: "Automation", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev6_9.mp4" },
      ],
    },
  ],
},

{
  id: "course47",
  title: "Azure Cloud Engineering",
  category: "devops",
  instructor: "Ritika Sharma",
  price: 1399,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775482906/maxresdefault_fx7tdk.jpg",
  description: "Build and deploy applications using Microsoft Azure cloud services.",
  rating: 4.8,
  students: 2200,
  sections: [
    {
      sectionTitle: "Azure Basics",
      lectures: [
        { title: "Azure Overview", duration: "11:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev7_1.mp4" },
        { title: "VMs & Storage", duration: "13:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev7_2.mp4" },
        { title: "Networking", duration: "12:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev7_3.mp4" },
      ],
    },
    {
      sectionTitle: "Advanced",
      lectures: [
        { title: "Azure Functions", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev7_4.mp4" },
        { title: "Cosmos DB", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev7_5.mp4" },
        { title: "Load Balancing", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev7_6.mp4" },
      ],
    },
    {
      sectionTitle: "Deployment",
      lectures: [
        { title: "CI/CD with Azure", duration: "17:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev7_7.mp4" },
        { title: "Scaling Apps", duration: "15:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev7_8.mp4" },
        { title: "Monitoring", duration: "18:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev7_9.mp4" },
      ],
    },
  ],
},

{
  id: "course48",
  title: "Site Reliability Engineering (SRE)",
  category: "devops",
  instructor: "Rahul Sharma",
  price: 1499,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775482978/Site-Reliability-Engineering-Guide_r2qsik.jpg",
  description: "Learn SRE principles to maintain reliable and scalable systems.",
  rating: 4.9,
  students: 2000,
  sections: [
    {
      sectionTitle: "SRE Basics",
      lectures: [
        { title: "Intro to SRE", duration: "10:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev8_1.mp4" },
        { title: "SLIs & SLOs", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev8_2.mp4" },
        { title: "Error Budgets", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev8_3.mp4" },
      ],
    },
    {
      sectionTitle: "Reliability",
      lectures: [
        { title: "Incident Management", duration: "14:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev8_4.mp4" },
        { title: "Monitoring Systems", duration: "15:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev8_5.mp4" },
        { title: "Alerting", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev8_6.mp4" },
      ],
    },
    {
      sectionTitle: "Scaling",
      lectures: [
        { title: "High Availability", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev8_7.mp4" },
        { title: "Disaster Recovery", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev8_8.mp4" },
        { title: "Postmortems", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev8_9.mp4" },
      ],
    },
  ],
},

{
  id: "course49",
  title: "DevSecOps Fundamentals",
  category: "devops",
  instructor: "Sneha Iyer",
  price: 1299,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775483061/6468c1fe276e5718758acaf6_devsecops_fundamentals_s730bv.webp",
  description: "Integrate security practices into DevOps pipelines.",
  rating: 4.7,
  students: 1800,
  sections: [
    {
      sectionTitle: "Security Basics",
      lectures: [
        { title: "DevSecOps Intro", duration: "10:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev9_1.mp4" },
        { title: "Threat Modeling", duration: "12:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev9_2.mp4" },
        { title: "Secure Coding", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev9_3.mp4" },
      ],
    },
    {
      sectionTitle: "Tools",
      lectures: [
        { title: "SAST & DAST", duration: "14:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev9_4.mp4" },
        { title: "Secrets Management", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev9_5.mp4" },
        { title: "Compliance", duration: "14:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev9_6.mp4" },
      ],
    },
    {
      sectionTitle: "Implementation",
      lectures: [
        { title: "Secure Pipelines", duration: "16:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev9_7.mp4" },
        { title: "Container Security", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev9_8.mp4" },
        { title: "Monitoring Security", duration: "17:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev9_9.mp4" },
      ],
    },
  ],
},

{
  id: "course50",
  title: "Cloud Cost Optimization & FinOps",
  category: "devops",
  instructor: "Arpit Aware",
  price: 1199,
  thumbnail: "https://res.cloudinary.com/drkmrq9yo/image/upload/q_auto/f_auto/v1775483187/maxresdefault_sa55ot.jpg",
  description: "Optimize cloud costs and implement FinOps strategies.",
  rating: 4.8,
  students: 2100,
  sections: [
    {
      sectionTitle: "FinOps Basics",
      lectures: [
        { title: "Cost Fundamentals", duration: "10:40", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev10_1.mp4" },
        { title: "Billing Models", duration: "12:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev10_2.mp4" },
        { title: "Cost Allocation", duration: "13:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev10_3.mp4" },
      ],
    },
    {
      sectionTitle: "Optimization",
      lectures: [
        { title: "Reserved Instances", duration: "14:50", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev10_4.mp4" },
        { title: "Auto Scaling", duration: "15:30", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev10_5.mp4" },
        { title: "Resource Cleanup", duration: "14:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev10_6.mp4" },
      ],
    },
    {
      sectionTitle: "Strategy",
      lectures: [
        { title: "Cost Monitoring", duration: "16:20", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev10_7.mp4" },
        { title: "Budget Alerts", duration: "15:00", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev10_8.mp4" },
        { title: "FinOps Culture", duration: "17:10", videoUrl: "https://res.cloudinary.com/demo/video/upload/v1/dev10_9.mp4" },
      ],
    },
  ],
},
];
