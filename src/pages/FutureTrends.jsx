import { useState } from 'react'
import { BotMessageSquare, Hand, Cog, Radio, Puzzle, Target, Brain, Link, Globe, Landmark } from 'lucide-react'
import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'
import card4 from '../assets/card4.jpeg'
import card5 from '../assets/card5.jpeg'
import card6 from '../assets/card6.jpeg'
import c1 from '../assets/c1.jpeg'
import c2 from '../assets/c2.jpeg'
import c3 from '../assets/c3.jpeg'
import c4 from '../assets/c4.jpeg'
import './FutureTrends.css'

const trends = [
  {
    id: 1,
    title: 'Digital Employees',
    desc: 'AI-powered digital workers that automate complex business processes, handle customer interactions, and make data-driven decisions — transforming workforce productivity across industries.',
    Icon: BotMessageSquare,
    img: card1,
    tags: ['AI Automation', 'NLP', 'RPA'],
  },
  {
    id: 2,
    title: 'Personal Assistant Robots',
    desc: 'Intelligent robotic assistants that learn user preferences, manage daily tasks, and provide hands-free support in homes and offices through natural language and gesture recognition.',
    Icon: Hand,
    img: card2,
    tags: ['Robotics', 'Voice AI', 'Smart Home'],
  },
  {
    id: 3,
    title: 'Physical AI + Smart Robotics Integration',
    desc: 'Bridging the gap between digital intelligence and physical automation — enabling robots to perceive, reason, and act in real-world environments with unprecedented precision.',
    Icon: Cog,
    img: card3,
    tags: ['Computer Vision', 'Embodied AI', 'Sensor Fusion'],
  },
  {
    id: 4,
    title: 'IoT + Edge Computing',
    desc: 'Processing data at the source with distributed intelligence — reducing latency, enhancing privacy, and enabling real-time decision making across billions of connected devices.',
    Icon: Radio,
    img: card4,
    tags: ['IoT', 'Edge AI', '5G Networks'],
  },
  {
    id: 5,
    title: 'Composable & Modular MIS',
    desc: 'Flexible, plug-and-play information systems built from interchangeable components — enabling organizations to rapidly adapt their tech stack to evolving business needs.',
    Icon: Puzzle,
    img: card5,
    tags: ['Microservices', 'API-First', 'Low-Code'],
  },
  {
    id: 6,
    title: 'Hyper-Personalized Systems',
    desc: 'AI-driven platforms that deliver uniquely tailored experiences for every user — from adaptive interfaces to predictive recommendations powered by behavioral analytics.',
    Icon: Target,
    img: card6,
    tags: ['Machine Learning', 'User Analytics', 'Adaptive UX'],
  },
  {
    id: 7,
    title: 'Domain-Specific AI',
    desc: 'Purpose-built AI models trained on specialized industry data — delivering superior performance in healthcare diagnostics, financial modeling, legal analysis, and manufacturing.',
    Icon: Brain,
    img: c1,
    tags: ['Vertical AI', 'Fine-Tuning', 'Industry 4.0'],
  },
  {
    id: 8,
    title: 'Multi-Agent Systems',
    desc: 'Autonomous AI agents that collaborate, negotiate, and coordinate to solve complex problems — creating emergent intelligence greater than the sum of its parts.',
    Icon: Link,
    img: c2,
    tags: ['Agent AI', 'Swarm Intelligence', 'Orchestration'],
  },
  {
    id: 9,
    title: 'Metaverse & Virtual Workspaces',
    desc: 'Immersive 3D environments for collaboration, training, and digital twin simulation — redefining how teams work, learn, and innovate in shared virtual spaces.',
    Icon: Globe,
    img: c3,
    tags: ['XR', 'Digital Twins', 'Spatial Computing'],
  },
  {
    id: 10,
    title: 'Smart Governance + Explainable AI',
    desc: 'Transparent, accountable AI systems that provide clear reasoning for their decisions — building trust through interpretability, fairness auditing, and regulatory compliance.',
    Icon: Landmark,
    img: c4,
    tags: ['XAI', 'AI Ethics', 'Compliance'],
  },
]

export default function FutureTrends() {
  const [activeTrend, setActiveTrend] = useState(null)

  return (
    <div className="futurePage">
      <section className="futureHero">
        <div className="futureHeroContent">
          <span className="futureBadge">Exploring Tomorrow</span>
          <h1>Future Trends in MSI</h1>
          <p>Discover the technologies reshaping Management Information Systems — from intelligent automation to immersive digital experiences</p>
        </div>
        <div className="futureHeroGrid">
          {[card1, card2, card3, card4].map((img, i) => (
            <div className="heroGridItem" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className="futureStats">
        <div className="statItem">
          <span className="statNumber">10</span>
          <span className="statLabel">Key Trends</span>
        </div>
        <div className="statDivider"></div>
        <div className="statItem">
          <span className="statNumber">2026</span>
          <span className="statLabel">& Beyond</span>
        </div>
        <div className="statDivider"></div>
        <div className="statItem">
          <span className="statNumber">AI</span>
          <span className="statLabel">Powered Future</span>
        </div>
        <div className="statDivider"></div>
        <div className="statItem">
          <span className="statNumber">360°</span>
          <span className="statLabel">Integration</span>
        </div>
      </section>

      <section className="trendsSection">
        <h2>The 10 Pillars of Next-Gen MIS</h2>
        <div className="trendsGrid">
          {trends.map((trend) => (
            <div
              className={`trendCard${activeTrend === trend.id ? ' expanded' : ''}`}
              key={trend.id}
              onClick={() => setActiveTrend(activeTrend === trend.id ? null : trend.id)}
            >
              <div className="trendImgWrap">
                <img src={trend.img} alt={trend.title} />
                <span className="trendNumber">0{trend.id}</span>
              </div>
              <div className="trendInfo">
                <div className="trendTitleRow">
                  <span className="trendIcon"><trend.Icon size={22} strokeWidth={2} /></span>
                  <h3>{trend.title}</h3>
                </div>
                <p>{trend.desc}</p>
                <div className="trendTags">
                  {trend.tags.map((tag, i) => (
                    <span className="trendTag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="distributionBar">
        <div className="distContent">
          <div className="distGlobe">
            <div className="globeWrapper">
              <div className="globeSphere">
                <div className="globeGrid"></div>
              </div>
              <div className="globePulse"></div>
            </div>
          </div>
          <div className="distInfo">
            <span className="distBadge">Global Distribution</span>
            <h2>Available Across 45+ Countries</h2>
            <p>Our future-ready MIS solutions are deployed worldwide, empowering businesses across every continent</p>
            <div className="distCountries">
              <div className="distRegion">
                <h4>Americas</h4>
                <ul>
                  <li><span className="distDot americas"></span>United States</li>
                  <li><span className="distDot americas"></span>Canada</li>
                  <li><span className="distDot americas"></span>Brazil</li>
                  <li><span className="distDot americas"></span>Mexico</li>
                </ul>
              </div>
              <div className="distRegion">
                <h4>Europe</h4>
                <ul>
                  <li><span className="distDot europe"></span>Germany</li>
                  <li><span className="distDot europe"></span>United Kingdom</li>
                  <li><span className="distDot europe"></span>France</li>
                  <li><span className="distDot europe"></span>Netherlands</li>
                </ul>
              </div>
              <div className="distRegion">
                <h4>Asia Pacific</h4>
                <ul>
                  <li><span className="distDot asia"></span>Japan</li>
                  <li><span className="distDot asia"></span>South Korea</li>
                  <li><span className="distDot asia"></span>Singapore</li>
                  <li><span className="distDot asia"></span>Australia</li>
                </ul>
              </div>
              <div className="distRegion">
                <h4>Middle East & Africa</h4>
                <ul>
                  <li><span className="distDot mea"></span>UAE</li>
                  <li><span className="distDot mea"></span>Saudi Arabia</li>
                  <li><span className="distDot mea"></span>South Africa</li>
                  <li><span className="distDot mea"></span>Israel</li>
                </ul>
              </div>
            </div>
            <div className="distStats">
              <div className="distStat">
                <strong>45+</strong><span>Countries</span>
              </div>
              <div className="distStat">
                <strong>120+</strong><span>Partners</span>
              </div>
              <div className="distStat">
                <strong>6</strong><span>Continents</span>
              </div>
              <div className="distStat">
                <strong>24/7</strong><span>Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="futureTimeline">
        <h2>Evolution Roadmap</h2>
        <div className="timelineContainer">
          {[
            { year: '2024', label: 'Foundation', desc: 'AI integration begins across core MIS platforms' },
            { year: '2025', label: 'Acceleration', desc: 'Multi-agent systems and edge computing go mainstream' },
            { year: '2026', label: 'Transformation', desc: 'Digital employees and hyper-personalization become standard' },
            { year: '2027+', label: 'Convergence', desc: 'Full physical-digital AI convergence with metaverse workspaces' },
          ].map((item, i) => (
            <div className="timelineItem" key={i}>
              <div className="timelineDot"></div>
              <div className="timelineContent">
                <span className="timelineYear">{item.year}</span>
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
