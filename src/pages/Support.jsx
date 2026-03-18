import download from '../assets/download.svg'
import global from '../assets/global.png'
import Footer from '../components/Footer'
import './Support.css'

const quickLinks = [
  { icon: '📥', title: 'Downloads', desc: 'Drivers, BIOS, utilities, and software updates for your MSI products.' },
  { icon: '📋', title: 'Register Product', desc: 'Register your MSI product to activate warranty and access support.' },
  { icon: '🔧', title: 'Troubleshooting', desc: 'Step-by-step guides to resolve common issues with your device.' },
  { icon: '📞', title: 'Contact Us', desc: 'Reach our support team via phone, email, or live chat.' },
]

const faqs = [
  { q: 'How do I update my BIOS?', a: 'Download the latest BIOS from the MSI support page for your product model. Use MSI Center or a USB flash drive to install the update. Always ensure your laptop is plugged in during the process.' },
  { q: 'How do I check my warranty status?', a: 'Visit the MSI warranty check page and enter your product serial number. You can find the serial number on the bottom of your laptop or on the product box.' },
  { q: 'My laptop is overheating. What should I do?', a: 'Clean the air vents, ensure proper ventilation, update BIOS and EC firmware, and use MSI Center to adjust fan curves. If the issue persists, contact MSI support.' },
  { q: 'How do I reset my MSI laptop to factory settings?', a: 'Use the MSI built-in recovery by pressing F3 during boot, or use Windows Settings > System > Recovery > Reset this PC.' },
  { q: 'Where can I find drivers for my product?', a: 'Go to the MSI official website, navigate to Support > Downloads, search for your product model, and download the latest drivers.' },
]

const serviceLocations = [
  { region: 'North America', phone: '1-888-MSI-HELP', hours: 'Mon-Fri 9AM-6PM PST' },
  { region: 'Europe', phone: '+31-45-XXX-XXXX', hours: 'Mon-Fri 9AM-6PM CET' },
  { region: 'Asia Pacific', phone: '+886-2-XXXX-XXXX', hours: 'Mon-Fri 9AM-6PM CST' },
]

export default function Support() {
  return (
    <div className="supportPage">
      <div className="supportHero">
        <h1 data-aos="fade-down">Support</h1>
        <p data-aos="fade-up" data-aos-delay="100">We're here to help you get the most out of your MSI products</p>
        <div className="searchBox" data-aos="fade-up" data-aos-delay="200">
          <input type="text" placeholder="Search by product name or serial number..." />
          <button>Search</button>
        </div>
      </div>

      <section className="quickLinksSection">
        <div className="quickLinksGrid">
          {quickLinks.map((link, i) => (
            <div className="quickLinkCard" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <span className="quickLinkIcon">{link.icon}</span>
              <h3>{link.title}</h3>
              <p>{link.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faqSection">
        <h2 data-aos="fade-up">Frequently Asked Questions</h2>
        <div className="faqList">
          {faqs.map((faq, i) => (
            <details className="faqItem" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="serviceSection">
        <h2 data-aos="fade-up">Service Centers</h2>
        <div className="serviceGrid">
          {serviceLocations.map((loc, i) => (
            <div className="serviceCard" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <h3>{loc.region}</h3>
              <p className="servicePhone">{loc.phone}</p>
              <p className="serviceHours">{loc.hours}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
