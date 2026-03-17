import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'
import card4 from '../assets/card4.jpeg'
import card5 from '../assets/card5.jpeg'
import card6 from '../assets/card6.jpeg'
import dss from '../assets/dss.jpeg'
import headbanner from '../assets/headbanner.jpeg'
import Footer from '../components/Footer'
import './WhatsNew.css'

const latestNews = [
  { img: headbanner, tag: 'Product Launch', date: 'Mar 15, 2026', title: 'MSI Unveils Next-Gen Creator A16 with AI Copilot+ at CES 2026', desc: 'MSI introduces revolutionary AI-powered laptops designed for creators, featuring the latest Intel processors and NVIDIA graphics.' },
]

const articles = [
  { img: card1, tag: 'Innovation', date: 'Mar 12, 2026', title: 'How AI is Transforming PC Gaming', desc: 'Explore how MSI integrates AI technology to enhance gaming performance and user experience.' },
  { img: card2, tag: 'Review', date: 'Mar 10, 2026', title: 'Stealth 16 AI Studio - Editor\'s Choice Award', desc: 'Our ultra-thin powerhouse earns top honors for performance and portability.' },
  { img: card3, tag: 'Technology', date: 'Mar 8, 2026', title: 'MSI Cooler Boost 5 Technology Explained', desc: 'A deep dive into the thermal engineering that keeps MSI laptops cool under pressure.' },
  { img: card4, tag: 'Event', date: 'Mar 5, 2026', title: 'MSI at Mobile World Congress 2026', desc: 'Highlights from our showcase of AIoT solutions and smart business products.' },
  { img: card5, tag: 'Gaming', date: 'Mar 3, 2026', title: 'Raider 18 HX Breaks Performance Records', desc: 'The flagship gaming laptop sets new benchmarks in 3DMark and real-world gaming tests.' },
  { img: card6, tag: 'Update', date: 'Feb 28, 2026', title: 'MSI Center 2.0 - Major Software Update', desc: 'Redesigned interface with AI-powered optimization and one-click performance tuning.' },
]

const pressReleases = [
  { date: 'Mar 14, 2026', title: 'MSI Reports Record Q1 2026 Revenue' },
  { date: 'Mar 11, 2026', title: 'MSI Partners with Leading Game Studios for Optimized Drivers' },
  { date: 'Mar 7, 2026', title: 'MSI Expands AIoT Solutions to European Market' },
  { date: 'Mar 2, 2026', title: 'MSI Launches Global Sustainability Initiative' },
  { date: 'Feb 25, 2026', title: 'MSI Creator Awards 2026 - Call for Submissions' },
]

export default function WhatsNew() {
  return (
    <div className="whatsNewPage">
      <div className="whatsNewHero">
        <h1>What's New</h1>
        <p>Latest news, product launches, and stories from MSI</p>
      </div>

      <section className="heroArticle">
        {latestNews.map((news, i) => (
          <div className="heroArticleCard" key={i}>
            <img src={news.img} alt={news.title} />
            <div className="heroArticleOverlay">
              <span className="articleTag">{news.tag}</span>
              <h2>{news.title}</h2>
              <p>{news.desc}</p>
              <span className="articleDate">{news.date}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="articlesSection">
        <h2>Latest Articles</h2>
        <div className="articlesGrid">
          {articles.map((article, i) => (
            <div className="articleCard" key={i}>
              <div className="articleImgWrap">
                <img src={article.img} alt={article.title} />
                <span className="articleTag">{article.tag}</span>
              </div>
              <div className="articleInfo">
                <span className="articleDate">{article.date}</span>
                <h3>{article.title}</h3>
                <p>{article.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pressSection">
        <h2>Press Releases</h2>
        <div className="pressList">
          {pressReleases.map((pr, i) => (
            <div className="pressItem" key={i}>
              <span className="pressDate">{pr.date}</span>
              <h3>{pr.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
