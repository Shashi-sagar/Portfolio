import { Briefcase, CheckCircle, BookCheck, Target, Award, ExternalLink } from 'lucide-react';

export const experienceData = [
  {
    company: "Infinity Learn (WizKlub)",
    icon: Briefcase,
    color: "blue",
    items: [
      {
        title: "Key Achievements",
        icon: CheckCircle,
        points: [
          "Developed cross-platform mobile interfaces with React Native for Project 'Vista', significantly boosting user engagement.",
          "Built a complex UI dashboard leveraging AmCharts4 for interactive, real-time data visualization, integrating dynamic filters, responsive layouts, and intuitive user controls to enhance decision-making and user experience.",
          "Developed robust API integration using fetch() and Axios, handling asynchronous data fetching, error handling, and caching for optimized performance.",
          "Integrated secure payment gateways like Razorpay/Stripe, ensuring seamless transactions, real-time status updates, and PCI compliance for a smooth checkout experience.",
          "Implemented student progress tracking and certificate generation features, enhancing user satisfaction and streamlining administrative processes.",
          "Built responsive React.js web applications, enhancing accessibility and driving user interaction.",
          "Optimized website performance by significantly reducing page load times, achieving a 30% decrease.",
          "Collaborated effectively with cross-functional teams to enhance UI design, driving platform growth and improving user experience."
        ],
        projects: [
          {
            name: "Project: Wizklub Blog",
            details: [
              "Optimized WordPress URLs with SEO-friendly structures to boost Google crawlability and improve site rankings.",
              "Leveraged WordPress SEO plugins to enhance optimization workflows and simplify ongoing maintenance.",
              "Ensured seamless site recovery and continuity by managing backups and restoration using UpdraftPlus."
            ]
          },
          {
            name: "Project: Dontmemorise.com",
            details: [
              "Strengthened website security by resolving vulnerabilities, including mitigating a Japanese keyword attack.",
              "Updated an outdated WordPress website by creating test instances with CLI and Revise plugins, ensuring secure and efficient functionality."
            ]
          }
        ]
      },
      {
        title: "Key Insights and Growth Milestones",
        icon: BookCheck,
        points: [
          "Standardized coding practices to maintain consistency in naming conventions, formatting, and best practices for better readability and scalability.",
          "Prioritized tasks effectively and met deadlines without compromising quality.",
          "Ensured clear communication before starting tasks, avoiding misunderstandings.",
          "Collaborated across teams to improve UI design and functionality, enhancing user experience.",
          "Regularly communicated progress with team leads and managers to keep them informed.",
          "Effectively handled quick-deadline tasks by focusing only on necessary learning for efficient execution.",
          "Skill Set: JavaScript, React.js, WordPress (CMS), PHP (Basic).",
          "Interest Built: Artificial Intelligence, LangChain, LLM (Large Language Models)."
        ]
      }
    ]
  },
  {
    company: "Veave Technology",
    icon: Target,
    color: "green",
    items: [
      {
        title: "Notable Achievements & Contributions",
        icon: Award,
        points: [
          "Improved website accessibility and reduced load times by refactoring HTML into a single minified JavaScript file for a global certification services platform (ISO, CMMI, CE-MARK).",
          "Optimized content with location-specific keywords provided by the SEO team to enhance local search visibility, integrating Google Analytics tracking for performance insights."
        ],
        projects: [
          {
            name: "Agent Genie",
            details: [
              "Redesigned the front end using HTML, CSS, and JavaScript, improving navigation and enhancing user experience for better lead generation."
            ]
          },
          {
            name: "Biotic Basket",
            details: [
              "Delivered a responsive and visually engaging website redesign with HTML, CSS, and Bootstrap, increasing user engagement and conversion rates."
            ]
          }
        ]
      },
      {
        title: "Lessons Learned & Career Advancements",
        icon: ExternalLink,
        points: [
          "Structured Career Path in Software Development: Built a strong foundation in HTML, CSS, and JavaScript, leading to a step-by-step understanding of web development.",
          "UI/UX Enhancement Skills: Improved website navigation and layout using HTML and CSS, enhancing user experience and engagement.",
          "SEO & Page Optimization Techniques: Learned basic SEO principles, such as structuring HTML properly and optimizing meta tags for better search rankings.",
          "Performance Optimization: Minified and refactored HTML into JavaScript, reducing page load times and improving website efficiency.",
          "Real-World Project Exposure: Worked on live projects like Agent Genie (Real Estate) and Biotic Basket (E-commerce), gaining hands-on experience in front-end development.",
          "Responsive Design Implementation: Ensured mobile-friendly design for Biotic Basket using HTML, CSS, and Bootstrap, improving accessibility and user engagement."
        ]
      }
    ]
  }
];
