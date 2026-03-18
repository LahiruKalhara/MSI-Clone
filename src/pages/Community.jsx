import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'
import dss from '../assets/dss.jpeg'
import reward from '../assets/reward2.webp'
import insider from '../assets/insider.webp'
import Footer from '../components/Footer'
import './Community.css'

const forums = [
  { title: 'Gaming Discussion', members: '125K', posts: '1.2M', desc: 'Talk about the latest games, settings, and performance tips.' },
  { title: 'Hardware & Builds', members: '89K', posts: '650K', desc: 'Share your MSI builds, get advice, and troubleshoot hardware.' },
  { title: 'Overclocking Lab', members: '45K', posts: '320K', desc: 'Push your hardware to the limit with community-tested profiles.' },
  { title: 'Content Creators', members: '38K', posts: '210K', desc: 'Tips, workflows, and showcases from MSI creator community.' },
]

const featuredPosts = [
  { img: card1, author: 'TechEnthusiast', title: 'My Creator A16 Setup for Video Editing', likes: 342, comments: 56 },
  { img: card2, author: 'ProGamer99', title: 'Stealth 16 - 6 Months Later Review', likes: 518, comments: 89 },
  { img: card3, author: 'BuildMaster', title: 'Ultimate MSI Battlestation Tour', likes: 721, comments: 134 },
]

const events = [
  { date: 'Mar 25', title: 'MSI Gaming Tournament 2026', location: 'Online', status: 'Registration Open' },
  { date: 'Apr 10', title: 'Creator Showcase Livestream', location: 'YouTube Live', status: 'Upcoming' },
  { date: 'Apr 22', title: 'MSI Modding Competition', location: 'Global', status: 'Coming Soon' },
]

export default function Community() {
  return (
    <div className="communityPage">
      <div className="communityHero">
        <h1 data-aos="fade-down">MSI Community</h1>
        <p data-aos="fade-up" data-aos-delay="100">Connect with gamers, creators, and tech enthusiasts worldwide</p>
      </div>

      <section className="communityPrograms">
        <div className="programsGrid">
          <div className="programCard" data-aos="fade-right">
            <img src={reward} alt="MSI Reward Program" />
            <h3>MSI Reward Program</h3>
            <p>Earn points with every purchase and redeem exclusive rewards.</p>
          </div>
          <div className="programCard" data-aos="fade-left" data-aos-delay="100">
            <img src={insider} alt="MSI Insider" />
            <h3>MSI Insider</h3>
            <p>Get early access to products, beta software, and exclusive content.</p>
          </div>
        </div>
      </section>

      <section className="communityForums">
        <h2 data-aos="fade-up">Forums</h2>
        <div className="forumsGrid">
          {forums.map((forum, i) => (
            <div className="forumCard" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <h3>{forum.title}</h3>
              <p>{forum.desc}</p>
              <div className="forumStats">
                <span>{forum.members} members</span>
                <span>{forum.posts} posts</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="communityFeatured">
        <h2 data-aos="fade-up">Featured Posts</h2>
        <div className="featuredGrid">
          {featuredPosts.map((post, i) => (
            <div className="featuredCard" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="featuredImgWrap">
                <img src={post.img} alt={post.title} />
              </div>
              <div className="featuredInfo">
                <span className="featuredAuthor">@{post.author}</span>
                <h3>{post.title}</h3>
                <div className="featuredMeta">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="communityEvents">
        <h2 data-aos="fade-up">Upcoming Events</h2>
        <div className="eventsGrid">
          {events.map((event, i) => (
            <div className="eventCard" key={i} data-aos="fade-left" data-aos-delay={i * 100}>
              <div className="eventDate">{event.date}</div>
              <div className="eventDetails">
                <h3>{event.title}</h3>
                <p>{event.location}</p>
              </div>
              <span className="eventStatus">{event.status}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
