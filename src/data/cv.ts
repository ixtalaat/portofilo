export const profile = {
  fullName: "Talaat Ramadan",
  aka: "Talaat",
  initials: "TR",
  role: ["Software", "Engineer"],
  tagline: "Ship · Scale · Build",
  subtitle: "ASP.NET Core + Laravel + NestJS · Cairo, remote",
  location: "Cairo, Egypt",
  issue: "Issue no. 01",
  edition: "Personal edition",
  est: "Est. 2026",
  photoDate: "Est. 2024",
  email: "talatramadan10@gmail.com",
  phone: "+20 11 26342642",
  github: "https://github.com/ixtalaat",
  linkedin: "https://www.linkedin.com/in/ixtalaat",
  summary:
    "Backend Developer specializing in .NET and ASP.NET Core, with hands-on experience building RESTful APIs and working with Entity Framework Core and SQL databases. Familiar with Clean Architecture, authentication and authorization, dependency injection, and backend best practices. Passionate about writing clean, maintainable code and continuously improving problem-solving and system design skills.",
};

export const skills = [
  {
    label: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "PHP"],
  },
  {
    label: "Backend",
    items: [
      "ASP.NET Core",
      "Web API",
      "MVC",
      "RESTful APIs",
      "ASP.NET Identity",
      "CQRS",
      "MediatR",
    ],
  },
  {
    label: "Data",
    items: [
      "SQL Server",
      "Entity Framework Core",
      "LINQ",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Database Design",
    ],
  },
  {
    label: "Architecture",
    items: ["Clean Architecture", "Layered Architecture", "SOLID", "OOP", "Design Patterns", "Clean Code"],
  },
  {
    label: "Testing",
    items: ["Unit Testing", "Integration Testing", "Pest", "PHPUnit"],
  },
  {
    label: "DevOps & Tools",
    items: ["Git", "GitHub Actions", "Docker", "CI/CD", "Postman", "Swagger"],
  },
];

export const experience = [
  {
    role: "Backend Developer",
    company: "Mapour",
    place: "Remote",
    period: "May 2026 – Now",
    bullets: [
      "Developed backend services and RESTful APIs for real-estate platforms, supporting property listings, user workflows, and business operations.",
      "Implemented and maintained backend business logic using clean architecture, SOLID principles, and modular design.",
    ],
  },
  {
    role: "Backend .NET Intern",
    company: "Code Plus",
    place: "Remote",
    period: "Aug 2026 – Sep 2026",
    bullets: [
      "Developed scalable ASP.NET Core Web APIs using Clean Architecture, CQRS, and MediatR, with caching, Docker and GitHub Actions CI/CD.",
    ],
  },
  {
    role: "IT Reserve Officer",
    company: "Egyptian Armed Forces",
    place: "Egypt",
    period: "Apr 2024 – Apr 2026",
    bullets: [
      "Developed and maintained an internal web-based system using PHP and MySQL for personnel and administrative data management, while troubleshooting issues, supporting users and improving administrative workflows.",
    ],
  },
  {
    role: "Web Development Using .NET — Summer Training",
    company: "Information Technology Institute (ITI)",
    place: "Mansoura, Egypt",
    period: "Jul 2022 – Sep 2022",
    bullets: [
      "Completed a 120-hour hands-on training in ASP.NET Core MVC, Entity Framework Core, SQL Server, C#, LINQ, ADO.NET and RESTful API development.",
    ],
  },
];

export const projects = [
  {
    name: "OrderFlow",
    subtitle: "Order Management System",
    kind: "Full-Stack Project",
    stack: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "Angular", "TypeScript", "Docker"],
    bullets: [
      "Built a full-stack order management platform with an Angular 20 storefront (catalog, cart, checkout, order tracking) and admin backoffice backed by a Clean Architecture + CQRS API.",
      "Implemented JWT authentication with refresh-token rotation, optimistic-concurrency inventory reservation, transactional outbox with Hangfire, and 180+ automated tests with Dockerized deployment.",
    ],
  },
  {
    name: "Tamayoz",
    subtitle: "Academy Management System",
    kind: "Freelance Project",
    stack: ["C#", "ASP.NET Core MVC", "EF Core", "SQL Server", "ASP.NET Identity", "Docker"],
    bullets: [
      "Built a full-stack academy management platform with service catalog, booking, portfolio, testimonials, contact messaging, and administration workflows.",
      "Implemented role-based administration, database modeling and seeding, security headers, response compression, health checks, and Docker deployment.",
    ],
  },
  {
    name: "HomeTech",
    subtitle: "Home Maintenance Platform",
    kind: "Freelance Project",
    stack: ["PHP", "Laravel", "MySQL", "Blade", "Tailwind CSS", "Pest", "Firebase"],
    bullets: [
      "Built a complete service lifecycle platform covering customer requests, technician assignment, scheduling, work orders, invoicing, payments, and reviews.",
      "Maintained 260+ feature and unit tests covering core business workflows, queued jobs, scheduled monitoring, and notifications.",
    ],
  },
  {
    name: "Bidaya",
    subtitle: "Kids Education Management System",
    kind: "Freelance Project",
    stack: ["PHP", "Laravel", "MySQL", "Blade", "Tailwind CSS", "PHPUnit", "WhatsApp API"],
    bullets: [
      "Built a complete student lifecycle platform covering enrollment, scheduling, attendance, assessments, homework grading, payments, certificates, dashboards, and reports.",
      "Fully bilingual English/Arabic RTL interface with in-app and WhatsApp notifications, plus 190+ feature and unit tests.",
    ],
  },
  {
    name: "PickPark",
    subtitle: "Parking Management System",
    kind: "Graduation Project · A+",
    stack: ["Node.js", "Express.js", "GraphQL", "PostgreSQL", "Redis"],
    bullets: [
      "Developed RESTful and GraphQL backend services for parking reservations, booking management, and availability tracking.",
      "Designed PostgreSQL schemas for booking workflows and implemented Redis caching to improve API performance.",
    ],
  },
];

export const education = {
  school: "Mansoura University",
  degree: "B.Sc. in Computer and Information Sciences",
  period: "Sep 2019 – Jul 2023",
  notes: ["Overall Grade: 80%", "Graduation Project Grade: A+"],
};

export const certifications = [
  { name: "Object-Oriented Design", issuer: "University of Alberta – Coursera", date: "Sep 2023" },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Intermediate" },
];
