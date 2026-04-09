// Updated: 2026-04-08
import { motion } from "motion/react";
import grad1 from "./assets/grad1.jpg";
import res2048 from "./assets/2048res.jpg";
import profilePic from "./assets/profile_pic.jpg";
import pcepif from "./assets/pcepif.jpg";
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  BarChart3, 
  Database, 
  TrendingUp, 
  Briefcase,
  CheckCircle2,
  Download
} from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-100">
    <div className="container-custom h-16 flex items-center justify-between">
      <div className="font-display font-bold text-xl tracking-tighter text-brand-700">
        VICTOR <span className="text-slate-400 font-light">VAN EYBERGEN</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#about" className="hover:text-brand-600 transition-colors">About</a>
        <a href="#experience" className="hover:text-brand-600 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-brand-600 transition-colors">Projects</a>
        <a href="#contact" className="px-4 py-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-all shadow-sm">Get in Touch</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-[100px]" />
    </div>
    
    <div className="container-custom">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Available for Entry-Level Analyst Roles
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
          Economics & <span className="text-brand-600">Data Analytics</span>.
        </h1>
        
        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
          Penn State Economics graduate with experience in insurance brokerage, marketing analytics, and statistical modeling. Bilingual in English and Spanish.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/resume.pdf" 
            download="Victor_Van_Eybergen_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </div>
        
        <div className="mt-16 flex items-center gap-8 opacity-50 grayscale">
          <div className="flex items-center gap-2 font-display font-semibold text-sm tracking-widest uppercase">
            <BarChart3 className="w-5 h-5" /> Analytics
          </div>
          <div className="flex items-center gap-2 font-display font-semibold text-sm tracking-widest uppercase">
            <TrendingUp className="w-5 h-5" /> Strategy
          </div>
          <div className="flex items-center gap-2 font-display font-semibold text-sm tracking-widest uppercase">
            <Database className="w-5 h-5" /> Data
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding bg-slate-50">
    <div className="container-custom">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-slate-200 overflow-hidden shadow-2xl">
              <img 
                src={grad1} 
                alt="Victor Van Eybergen" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold text-brand-600">3.2</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">GPA Economics</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-[0.2em] mb-4">About Me</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Analytical Mindset. <br/>Business-First Approach.</h3>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            I’m an Economics graduate from The Pennsylvania State University with a strong foundation in data analysis, sales, and strategic problem-solving. I bring hands-on experience from roles in insurance and marketing, where I’ve worked with tools like Excel, Power BI, and SQL to translate data into actionable insights. I’m a driven and adaptable professional with a strong interest in analytics, business strategy, and continuous learning.
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              "Fluent in English and Spanish (Native/Professional).",
              "Proficient in Stata, MySQL, and Power BI for data management.",
              "Licensed Accident and Health Insurance Producer (AHIP).",
              "Experience in computer vision and statistical modeling projects."
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/victor-van-eybergen/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-brand-600 hover:border-brand-200 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/VVEybergen" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-brand-600 hover:border-brand-200 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:victorvanwe@gmail.com" className="p-3 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-brand-600 hover:border-brand-200 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="container-custom">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-brand-600 uppercase tracking-[0.2em] mb-4">Professional Path</h2>
        <h3 className="text-4xl font-bold text-slate-900">Experience & Impact</h3>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {[
          {
            role: "Sales Associate",
            company: "Clockwork Concepts",
            period: "May 2025 – Sept 2025",
            description: "Executed direct marketing strategies for high-profile clients, focusing on lead generation and sales conversion across Fulton County.",
            achievements: [
              "Generated high-quality leads and successfully converted them into profitable sales.",
              "Represented diverse clients as a trusted marketer, traveling across Fulton County to drive brand awareness.",
              "Conducted direct marketing campaigns, optimizing outreach for maximum client impact."
            ]
          },
          {
            role: "Insurance Broker Intern",
            company: "Aflac",
            period: "Sept 2023 – Sept 2024",
            description: "Managed client data and personalized insurance plans while maintaining AHIP licensure.",
            achievements: [
              "Licensed as an Accident and Health Insurance Producer in Pennsylvania.",
              "Managed client data through Power BI to ensure personalized plan benefits.",
              "Conducted basic underwriting, data management, and sales calls."
            ]
          },
          {
            role: "Marketing Analyst",
            company: "Segmenta Group",
            period: "May 2022 – Sept 2022",
            description: "Delivered data-driven insights and promotional media for a Mexico City-based marketing firm.",
            achievements: [
              "Compiled data from large datasets using MySQL databasing tools.",
              "Delivered Excel spreadsheets and presentations simplifying consumer insights.",
              "Translated web content between Spanish and English to expand market reach.",
              "Utilized Adobe Premiere Pro and Photoshop for promotional media creation."
            ]
          }
        ].map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative pl-8 border-l-2 border-slate-100 hover:border-brand-200 transition-colors pb-8 last:pb-0"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-brand-500 transition-colors" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                <div className="text-brand-600 font-semibold">{exp.company}</div>
              </div>
              <div className="text-sm font-medium text-slate-400 mt-1 md:mt-0">{exp.period}</div>
            </div>
            <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
            <ul className="space-y-2">
              {exp.achievements.map((ach, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                  {ach}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="section-padding bg-slate-900 text-white">
    <div className="container-custom">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold text-brand-400 uppercase tracking-[0.2em] mb-4">Portfolio</h2>
          <h3 className="text-4xl font-bold">Selected Case Studies</h3>
        </div>
        <a href="https://github.com/VVEybergen" target="_blank" rel="noopener noreferrer" className="text-brand-400 font-semibold hover:text-brand-300 transition-colors flex items-center gap-2">
          View all on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Geobal: Advanced Geoguessr Tool",
            category: "Computer Vision / Data Science",
            image: "https://www.wpgmaps.com/wp-content/uploads/2026/01/Untitled-1.png", // High-res map/navigation themed image
            description: "Co-founded a learning tool managing tens of thousands of Google Street View images for geographic recognition.",
            tags: ["Statistical Modeling", "Computer Vision", "Dataset Management"],
            link: "https://github.com/VVEybergen"
          },
          {
            title: "Using Statistics to Beat 2048",
            category: "Mathematics / Probability",
            image: res2048, // High-definition 4x4 grid representation for 2048
            description: "A research project applying Markov chains and recursive equations to determine optimal strategies and theoretical maximum scores for the game 2048.",
            tags: ["Statistics", "Markov Chains", "Mathematical Modeling"],
            link: "https://docs.google.com/document/d/1GL-c0D7DUvUmau4jrVSslwZVlFWc8Q-ev1Lt_ySMdq8/edit?usp=sharing"
          },
          {
            title: "Penn State Derivative Association",
            category: "Finance / Analysis",
            image: "https://static.wixstatic.com/media/9624b9_386c765639594b0c9e19fde5f258325d~mv2.jpg/v1/crop/x_30,y_0,w_567,h_422/fill/w_497,h_369,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Capture_JPG.jpg", // High-definition stock market chart and financial indicators
            description: "Active member analyzing derivative markets and economic indicators.",
            tags: ["Market Analysis", "Derivatives", "Economics"],
            link: "https://www.linkedin.com/company/penn-state-asset-management-group/"
          },
          {
            title: "PCEPI Six Month Forecast",
            category: "Economics / Forecasting",
            image: pcepif,
            description: "A statistical analysis and six-month forecast of the Personal Consumption Expenditures Price Index (PCEPI) using econometric modeling.",
            tags: ["Econometrics", "Forecasting", "Data Analysis"],
            link: "https://docs.google.com/document/d/19t-EgawcvnJBArq6O4Dv51Ai3swcra_klAYbF2mcn8w/edit?usp=sharing"
          }
        ].map((project, i) => (
          <motion.a 
            key={i}
            href={project.link}
            target={project.link.startsWith('http') ? "_blank" : undefined}
            rel={project.link.startsWith('http') ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group block cursor-pointer"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</div>
            <h4 className="text-2xl font-bold mb-3 group-hover:text-brand-400 transition-colors">{project.title}</h4>
            <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, j) => (
                <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section className="section-padding">
    <div className="container-custom">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="p-2 bg-brand-50 rounded-lg text-brand-600">
              <Database className="w-6 h-6" />
            </div>
            Technical
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Stata", "MySQL", "Excel (Advanced)", "Power BI", "Adobe Premiere Pro", "Photoshop"].map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            Analytical
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Statistical Modeling", "Econometrics", "Market Analysis", "Underwriting", "Consumer Insights", "Data Management"].map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <Briefcase className="w-6 h-6" />
            </div>
            Professional
          </h3>
          <div className="flex flex-wrap gap-3">
            {["English (Fluent)", "Spanish (Fluent)", "Sales Calls", "Technical Translation", "Debate Leadership", "Client Management"].map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-padding bg-brand-600 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
    
    <div className="container-custom relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to build something <span className="text-brand-200">impactful?</span></h2>
        <p className="text-xl text-brand-100 mb-12 max-w-2xl mx-auto">
          I'm currently looking for entry-level opportunities in data analytics and economic consulting. Let's discuss how I can contribute to your team.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 text-left mb-16">
          <div className="glass bg-slate-900/90 border-white/10 p-8 rounded-2xl">
            <Mail className="w-8 h-8 mb-4 text-white" />
            <h4 className="text-xl font-bold mb-2 text-white">Email Me</h4>
            <p className="text-white mb-4">I usually respond within 24 hours.</p>
            <a href="mailto:victorvanwe@gmail.com" className="text-lg font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors">victorvanwe@gmail.com</a>
          </div>
          <div className="glass bg-slate-900/90 border-white/10 p-8 rounded-2xl">
            <Linkedin className="w-8 h-8 mb-4 text-white" />
            <h4 className="text-xl font-bold mb-2 text-white">Connect</h4>
            <p className="text-white mb-4">Let's expand our professional network.</p>
            <a href="https://www.linkedin.com/in/victor-van-eybergen/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors">linkedin.com/in/victor-van-eybergen</a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
              <img src={profilePic} alt="Avatar" referrerPolicy="no-referrer" />
            </div>
            <div className="text-left">
              <div className="font-bold">Victor Van Eybergen</div>
              <div className="text-xs text-brand-200 uppercase tracking-wider">Economics Graduate</div>
            </div>
          </div>
          <div className="h-8 w-px bg-white/20 hidden sm:block" />
          <div className="text-sm text-brand-100">
            Based in Roswell, GA • Open to Relocation
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-slate-100">
    <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-slate-400 text-sm">
        © 2026 Victor Van Eybergen. All rights reserved.
      </div>
      <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
        <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
