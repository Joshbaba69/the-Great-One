import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, Mail, Send, X, Menu, ChevronDown, Sparkles,
  BriefcaseBusiness, Users, Globe2, TrendingUp, CalendarDays, MapPin,
  ExternalLink, Linkedin, Instagram
} from "lucide-react";
import "./styles.css";

const A = "/assets/";

const proof = [
  {
    id: "axioflo",
    number: "01",
    type: "SUMMIT",
    title: "The Blockchain Web3 Adoption Summit",
    org: "Axioflo",
    date: "May 9, 2026",
    place: "The Assembly, Ogbomoso",
    cover: A+"axioflo-summit.jpg",
    accent: "gold",
    description: "A Web3 adoption summit bringing builders, founders and ecosystem voices together around practical blockchain opportunities.",
    gallery: [A+"axioflo-summit.jpg", A+"axioflo-crowd.jpg", A+"axioflo-crowd-2.jpg"]
  },
  {
    id: "metamask",
    number: "02",
    type: "COMMUNITY",
    title: "Community Builder Night",
    org: "MetaMask Ambassadors",
    date: "May 16 & Aug 08, 2026",
    place: "Ogbomoso, Nigeria",
    cover: A+"metamask-event-1.jpg",
    accent: "orange",
    description: "Community-focused Web3 gatherings designed around education, connection and ecosystem participation.",
    gallery: [A+"metamask-event-1.jpg", A+"metamask-event-2.jpg", A+"metamask-photo-1.jpg", A+"metamask-photo-2.jpg", A+"metamask-photo-3.jpg", A+"metamask-photo-4.jpg", A+"metamask-photo-5.jpg"]
  },
  {
    id: "xora",
    number: "03",
    type: "ONBOARDING",
    title: "Xora Finance Onboarding Event",
    org: "Xora Finance",
    date: "July 24, 2026",
    place: "The Assembly, Ogbomoso",
    cover: A+"xora-event.jpg",
    accent: "green",
    description: "An onboarding experience introducing people to the future of finance through community, education and product awareness.",
    gallery: [A+"xora-event.jpg", A+"xora-photo-1.jpg", A+"xora-photo-2.jpg"]
  }
];

const stats = [
  ["5+", "Years experience", BriefcaseBusiness],
  ["BD", "Business development", TrendingUp],
  ["∞", "Strategic partnerships", Users],
  ["Web3", "Ecosystem growth", Globe2],
];

function GlowOrb() {
  return <div className="glow-orb" aria-hidden="true" />;
}

function LogoCloud() {
  const logos = [
    ["MetaMask", "metamask-logo.jpg", "orange"],
    ["Axioflo", "axioflo-logo.jpg", "gold"],
    ["Xora Finance", "xora-logo1.jpg", "green"],
    ["Victus Global", "xora-logo.jpg", "white"],
    // ["Consensys", null, "white"],
    // ["Linea", null, "white"]
  ];
  return (
    <div className="logo-cloud">
      {logos.map(([name, img, tone]) => (
        <div className={"logo-tile "+tone} key={name}>
          {img ? <img src={A+img} alt="" /> : <span className="text-logo">{name}</span>}
          <small>{name}</small>
        </div>
      ))}
    </div>
  );
}

function Nav({ open, setOpen }) {
  const items = [["About","about"],["Experience","experience"],["Proof of work","work"],["Contact","contact"]];
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    setOpen(false);
  };
  return (
    <header className="nav-wrap">
      <nav className="nav">
        <button className="brand" onClick={() => go("home")}>
          <span>THE</span> GREAT <b>ONE</b>
        </button>
        <div className={"nav-links "+(open ? "open":"")}>
          {items.map(([label,id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
          <button className="nav-cta" onClick={() => go("contact")}>Let's connect <ArrowUpRight size={16}/></button>
        </div>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X/> : <Menu/>}
        </button>
      </nav>
    </header>
  );
}

function Hero({ onConnect }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid" />
      <div className="hero-noise" />
      <GlowOrb />
      <div className="hero-copy">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="eyebrow">
          <span className="pulse-dot" /> WEB3 · BUSINESS DEVELOPMENT · GROWTH
        </motion.div>
        <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.1}}>
          Building relationships.<br/>
          Creating <span className="shine">opportunities.</span><br/>
          Moving <span className="green-text">Web3</span> forward.
        </motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.2}}>
          Over 5 years across crypto business development, strategic partnerships,
          growth strategy and ecosystem expansion. Turning people, ideas and opportunities
          into meaningful Web3 outcomes.
        </motion.p>
        <motion.div className="hero-actions" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.3}}>
          <a className="btn primary" href="#work">Explore my work <ArrowUpRight size={18}/></a>
          <button className="btn ghost" onClick={onConnect}>Let's connect <ArrowUpRight size={18}/></button>
        </motion.div>
        <div className="social-row">
          <span>FOLLOW ME</span>
          <a href="https://x.com/The_greatone86" target="_blank" rel="noreferrer">𝕏</a>
          <a href="https://t.me/The_greatone86" target="_blank" rel="noreferrer"><Send size={17}/></a>
          <a href="mailto:greatone8062@gmail.com"><Mail size={17}/></a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />
        <div className="orbit orbit-c" />
        <div className="hero-badge badge-growth">GROWTH</div>
        <div className="hero-badge badge-partnerships">PARTNERSHIPS</div>
        <div className="hero-badge badge-community">COMMUNITY</div>
        <div className="hero-badge badge-strategy">STRATEGY</div>
        <div className="portrait-ring">
          <img src={A+"pfp.jpg"} alt="The Great One" />
        </div>
        <div className="hero-chip">WEB3 <Sparkles size={13}/></div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats section">
      <div className="stats-card">
        {stats.map(([value,label,Icon],i) => (
          <motion.div className="stat" key={label} whileHover={{y:-4}}>
            <div className="stat-icon"><Icon size={19}/></div>
            <strong>{value}</strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-kicker">ABOUT ME</div>
      <div className="about-grid">
        <motion.div className="about-media" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <img src={A+"pfp.jpg"} alt="The Great One" />
          <div className="media-caption"><span>THE GREAT ONE</span><small>Web3 Business Development</small></div>
          <div className="corner-glow" />
        </motion.div>
        <motion.div className="about-copy" initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <h2>Experience built <span className="green-text">inside the ecosystem.</span></h2>
          <p>The Great One brings over five years of experience in Crypto Business Development, partnerships, growth strategy and ecosystem expansion.</p>
          <p>As Senior BD Manager at Victus Global, he has played a key role in building strategic relationships and driving impactful collaborations across the blockchain industry.</p>
          <p>Beyond Victus Global, he is actively building Axioflo and serves as a MetaMask Ambassador, contributing to broader Web3 adoption and community growth.</p>
          <div className="mini-points">
            <span>Strategic relationships</span><span>Growth strategy</span><span>Ecosystem expansion</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    ["CURRENT","Senior BD Manager","Victus Global","Business Development · Strategic Partnerships · Growth Strategy","green"],
    ["BUILDING","Growth Lead","Axioflo","Web3 Adoption · Community Building · Ecosystem Expansion","gold"],
    ["AMBASSADOR","MetaMask Ambassador","MetaMask","Community · Education · Web3 Adoption · Growth","orange"]
  ];
  return (
    <section className="section" id="experience">
      <div className="section-kicker">EXPERIENCE</div>
      <h2 className="section-title">The <span className="green-text">journey.</span></h2>
      <div className="timeline">
        <div className="timeline-line" />
        {items.map(([tag,title,company,desc,tone],i) => (
          <motion.div className={"timeline-item "+tone} key={company} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}>
            <div className="timeline-dot" />
            <span className="timeline-tag">{tag}</span>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProofCard({item, onOpen}) {
  return (
    <motion.article className={"proof-card "+item.accent} whileHover={{y:-8}} transition={{type:"spring",stiffness:260}}>
      <div className="proof-image">
        <img src={item.cover} alt={item.title}/>
        <span className="number">{item.number}</span>
        <span className="proof-type">{item.type}</span>
      </div>
      <div className="proof-body">
        <span className="proof-org">{item.org}</span>
        <h3>{item.title}</h3>
        <div className="proof-meta"><span><CalendarDays size={14}/>{item.date}</span><span><MapPin size={14}/>{item.place}</span></div>
        <button onClick={() => onOpen(item)}>View project <ArrowUpRight size={15}/></button>
      </div>
    </motion.article>
  );
}

function ProofOfWork({onOpen}) {
  return (
    <section className="section work" id="work">
      <div className="section-head">
        <div><div className="section-kicker">PROOF OF WORK</div><h2 className="section-title">Real events. <span className="green-text">Real impact.</span></h2></div>
        <span className="head-note">Selected ecosystem work</span>
      </div>
      <div className="proof-grid">{proof.map(p => <ProofCard key={p.id} item={p} onOpen={onOpen}/>)}</div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="section ecosystem">
      <div className="section-kicker">ECOSYSTEM</div>
      <h2 className="section-title">Connected to great <span className="green-text">ecosystems.</span></h2>
      <LogoCloud/>
    </section>
  );
}

function Contact({onConnect}) {
  return (
    <section className="section contact" id="contact">
      <div className="contact-card">
        <div className="contact-glow" />
        <div className="section-kicker">LET'S CONNECT</div>
        <h2>Have an idea worth <span className="shine">building?</span></h2>
        <p>Partnerships, ecosystem growth, community initiatives or the next big Web3 opportunity  let's talk.</p>
        <div className="email-pill">
          <Mail size={18}/>
          <span>greatone8062@gmail.com</span>
          <button onClick={onConnect}><ArrowUpRight size={18}/></button>
        </div>
        <div className="contact-links">
          <a href="https://x.com/The_greatone86" target="_blank" rel="noreferrer">𝕏 / The_greatone86</a>
          <a href="https://t.me/The_greatone86" target="_blank" rel="noreferrer"><Send size={16}/> Telegram</a>
        </div>
      </div>
    </section>
  );
}

function Modal({item,onClose}) {
  if (!item) return null;
  return (
    <AnimatePresence>
      <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
        <motion.div className="modal" initial={{opacity:0,y:30,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20}} onClick={e=>e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}><X/></button>
          <div className="modal-cover"><img src={item.cover} alt={item.title}/></div>
          <div className="modal-content">
            <span className="proof-org">{item.org}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="proof-meta big"><span><CalendarDays size={16}/>{item.date}</span><span><MapPin size={16}/>{item.place}</span></div>
            <div className="gallery">{item.gallery.map((src,i)=><img src={src} key={src+i} alt="" />)}</div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [menu,setMenu] = useState(false);
  const [modal,setModal] = useState(null);
  const [toast,setToast] = useState(false);
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress,{stiffness:100,damping:30,restDelta:.001});

  const connect = async () => {
    try {
      await navigator.clipboard.writeText("greatone8062@gmail.com");
      setToast(true);
      setTimeout(()=>setToast(false),2200);
    } catch {
      window.location.href = "mailto:greatone8062@gmail.com";
    }
  };

  useEffect(()=> {
    document.body.style.overflow = modal ? "hidden" : "";
    return ()=>{document.body.style.overflow=""};
  },[modal]);

  return <>
    <motion.div className="scroll-progress" style={{scaleX}} />
    <Nav open={menu} setOpen={setMenu}/>
    <main>
      <Hero onConnect={connect}/>
      <Stats/>
      <About/>
      <Experience/>
      <ProofOfWork onOpen={setModal}/>
      <Ecosystem/>
      <Contact onConnect={connect}/>
    </main>
    <footer><span>THE GREAT ONE</span><span>© 2026 · WEB3 BUSINESS DEVELOPMENT</span></footer>
    <Modal item={modal} onClose={()=>setModal(null)}/>
    <AnimatePresence>{toast && <motion.div className="toast" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:15}}>Email copied — ready to connect.</motion.div>}</AnimatePresence>
  </>;
}

createRoot(document.getElementById("root")).render(<App />);
