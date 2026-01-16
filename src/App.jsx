import React, { useState, useEffect } from 'react';
import './App.css';

// Import your images
import ecodevo1 from './images/ecodevo-1.jpg';
import ecodevo2 from './images/ecodevo-2.jpg';
import ecodevo3 from './images/ecodevo-3.jpg';
import joenavarro1 from './images/joenavarro-1.jpg';
import joenavarro2 from './images/joenavarro-2.jpg';
import joenavarro3 from './images/joenavarro-3.jpg';
import ml1 from './images/ml-1.jpg';
import ml2 from './images/ml-2.jpg';
import ml3 from './images/ml-3.jpg';
import ml4 from './images/ml-4.jpg';
import roses from './images/roses.jpg';
import introspect from './images/introspect.jpg';







function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const education = {
    school: "Columbia University",
    degree: "Bachelor of Science in Decision Science & Data Analytics",
    minor: "Minor in Artificial Intelligence",
    period: "Aug. 2025 – May 2029",
    gpa: "3.7983/4.00",
    coursework: "Data Structures and Algorithms, Multivariable Calculus, Data Engineering, Probability",
    activities: "Society of Women Engineers (SWE), Jumpstarting Aspiring Developers and Entrepreneurs (JADE), Institute for Operations Research and the Management Sciences (CUINFORMS), Columbia Poker Club"
  };

  const experiences = [
    {
      title: "Head Intern and Economic Research Analyst Intern",
      company: "City of Beachwood Economic Development Department",
      location: "Beachwood, OH",
      period: "Jun. 2023 – Aug. 2025",
      highlights: [
        "Entered as the most senior intern, and over the following years, mentored and supervised the onboarding of additional team members, leading a team of 12 interns",
        "Led research and planning for a biomedical innovation ecosystem that directly supported growth of industry clusters, generating 100+ jobs, $320K+ in City tax benefits, and $5M in capital investment over 3 years",
        "Laid the foundation for the Beachwood Community Improvement Corporation’s innovation committee, which has now funded $60K in forgivable loans for 3 R&D companies and launched a $1M revolving loan program"
      ],
      images: [
        { 
          src: ecodevo1, 
          caption: "North American Market Research", 
          description: "Comprehensive market analysis across North America to identify trends and develop targeted marketing strategies for attracting companies to Beachwood",
          pdfLink: "/pdfs/market-research.pdf"
        },
        { 
          src: ecodevo2, 
          caption: "BioMed Cluster Research", 
          description: "Targeted research on companies in Beachwood to support the Director of Economic Development in building relationships and understanding the city's key industry sectors",
          pdfLink: "/pdfs/beachwood-presence.pdf"
        },
        { 
          src: ecodevo3, 
          caption: "Innovation District Initial Research", 
          description: "Foundational research that launched the City of Beachwood's innovation ecosystem project, providing ground-level guidance and real-world examples for implementation",
          pdfLink: "/pdfs/innovation-district.pdf"
        }
      ]
    },
    {
      title: "Marketing Intern",
      company: "JNForensics, LLC",
      location: "Tampa, FL (Remote)",
      period: "Feb. 2023 – Jan. 2025",
      highlights: [
        "Produced marketing content featured by Joe Navarro on Twitter, LinkedIn, Facebook (73.1K+ followers)",
        "Enhanced understanding of nonverbal communication, branding, and audience psychology through mentorship from Joe Navarro (CEO, JNForensics; former FBI Special Agent) and Anne-Maartje Oud (CEO, Behaviour Company)"
      ],
      images: [
        { 
          src: joenavarro1, 
          caption: "Three Minutes to Doomsday", 
          description: "Directed, produced, and edited promotional video for Joe Navarro's espionage thriller, showcasing storytelling and video production skills",
          pdfLink: "https://x.com/navarrotells/status/1642879989736521729"
        },
        { 
          src: joenavarro2, 
          caption: "Advanced Nonverbal Training Promo", 
          description: "Wrote script, directed, produced, and edited promotional video for 2-day advanced training with Joe Navarro, Anne-Maartje Oud, Dr. Abbie Maroño, and An Gaiser",
          pdfLink: "https://x.com/navarrotells/status/1663187717117603847"
        },
        { 
          src: joenavarro3, 
          caption: "Event Marketing Materials", 
          description: "Designed digital flyer using Canva to promote advanced nonverbal communication training, coordinating with video campaign",
          pdfLink: "https://x.com/navarrotells/status/1664247525543387142"
        }
      ]
    },
    {
      title: "AI and Machine Learning Intern",
      company: "Case Western Reserve University",
      location: "Cleveland, OH",
      period: "May 2024 – Aug. 2024",
      highlights: [
        "Applied linear algebra to build 2D/3D probabilistic models for data prediction",
        "Developed Python models on synthetic data (cross-entropy loss, logistic regression, Gaussian processes, Bayesian optimization, Metropolis sampling) to model uncertainty and evaluate its impact on predictive decision-making"
      ],
      images: [
        { 
          src: ml4, 
          caption: "1D Gaussian Process Regression on Synthetic Sine Data",
          pdfLink: "https://github.com/elizliu/Elizabeth-Liu-Machine-Learning-Modeling-2024-Summer-Project/blob/main/gp_2d_regression.ipynb"
        },
        { 
          src: ml1, 
          caption: "1D Bayesian Optimization with Lower Confidence Bound (LCB)", 
          pdfLink: "https://github.com/elizliu/Elizabeth-Liu-Machine-Learning-Modeling-2024-Summer-Project/blob/main/bayesian_optimization_lcb.ipynb"
        },
        { 
          src: ml3, 
          caption: "2D Gaussian Process Regression on a Toy Function",
          pdfLink: "https://github.com/elizliu/Elizabeth-Liu-Machine-Learning-Modeling-2024-Summer-Project/blob/main/gp_2d_regression.ipynb"
        },
        { 
          src: ml2, 
          caption: "2D Kernel Logistic Regression with RBF Kernel", 
          pdfLink: "https://github.com/elizliu/Elizabeth-Liu-Machine-Learning-Modeling-2024-Summer-Project/blob/main/kernel_logistic_regression_rbf.ipynb"
        }
      ]
    },
    {
      title: "Cambridge Future Scholar Programme",
      company: "Cambridge Centre for International Research",
      location: "Cambridge, UK (remote)",
      period: "Jun. 2023 – Aug. 2023",
      highlights: [
        "Applied the Fearon Bargaining Model to a game-theory-based research paper on post–Wars of the Roses England",
        "Analyzed commitment problems, signaling, and equilibrium failures to understand civil conflict and state consolidation; worked with Dr. Stephen Chaudoin (Harvard) and Dr. Michael-David Mangini (Yale)"
      ],
      images: [
        { 
          src: roses, 
          caption: "Commitment to Equilibrium: England after the Wars of the Roses", 
          pdfLink: "https://docs.google.com/document/d/1wPDZZCV9GAiJv-h8RH3kCcFxQyh3FydvUC-o4h84X-Q/edit?usp=sharing"
        }
      ]
    }
  ];

  const leadership = [
    {
      title: "Organizational Committee Member",
      org: "Columbia Society of Women Engineers",
      period: "Sep. 2025 – Present",
      highlights: [
        "Coordinate events and initiatives for a 500+ member student organization supporting women in STEM",
        "Developing the 2026 SWE Engineering Exploration Experience (EEE) event, hosting 200+ high school students at Columbia University as part of a 6-member team"
      ]
    },
    {
      title: "VP of Finance",
      org: "Hope Heroes Ohio",
      period: "Aug. 2024 – Jul. 2025",
      highlights: [
        "Created financial strategy within a 41-member team, coordinating fundraising that generated $238K+ in corporate sponsorships for children’s hospitals in NE Ohio, surpassing Junior Achievement global fundraising record by $40K",
        "Individually secured $5.5K in sponsorships; managed finances and pitch strategy for record-breaking initiative"
            ]
    },
    {
      title: "Editor in Chief and Founder",
      org: "The Introspect",
      period: "Mar. 2023 – Jun. 2025",
      highlights: [
        "Founded and led a global online magazine with 50+ contributors across 14 US States and 8 countries; organized collaborative multimedia initiatives focusing on topics ranging from interconnectivity to nationalism"
      ],
      images: [
        { 
          src: introspect,  // Make sure you imported this!
          caption: "The Introspect Website", 
          pdfLink: "https://theintrospectmagazine.wordpress.com/"
        }
      ]
    }
  ];

  const skills = {
    languages: "Python (Proficient), Java (Proficient), C++ (Intermediate), SQL (Intermediate), Stata (Intermediate)",
    tools: "NumPy, Matplotlib, pandas, Microsoft Office, Google Workspace",
    interests: "Sculptural ceramics, fitness boxing and sparring, horror movies, making noodles"
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="typewriter">Elizabeth (Liz) Liu</h1>
          <p className="subtitle fade-in">Decision Science & Data Analytics + Artificial Intelligence @ Columbia Engineering</p>
          <div className="contact-links fade-in">
            <a href="mailto:el3206@columbia.edu">el3206@columbia.edu</a>
            <span>•</span>
            <a href="/pdfs/Elizabeth Liu Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <span>•</span>
            <a href="https://linkedin.com/in/elizabeth-liu-co29" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>•</span>
            <a href="https://github.com/elizliu" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <button className="scroll-indicator" onClick={scrollToContent}>
          <div className="arrow-down"></div>
        </button>
      </section>

      {/* Education Section */}
      <section className="section education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="card">
            <div className="card-header">
              <div>
                <h3>{education.school}</h3>
                <p className="degree">{education.degree}</p>
                <p className="minor">{education.minor}</p>
              </div>
              <span className="period">{education.period}</span>
            </div>
            <div className="card-content">
              <p><strong>GPA:</strong> {education.gpa}</p>
              <p><strong>Relevant Coursework:</strong> {education.coursework}</p>
              <p><strong>Activities:</strong> {education.activities}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          {experiences.map((exp, idx) => (
            <div key={idx} className="card">
              <div className="card-header">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="location">{exp.location}</p>
                </div>
                <span className="period">{exp.period}</span>
              </div>
              <div className="card-content">
                <ul>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                
                {/* Image Gallery */}
                {exp.images && (
                  <div className="image-gallery">
                    {exp.images.map((img, i) => (
                      <a 
                        key={i} 
                        href={img.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="image-container"
                      >
                        <img src={img.src} alt={img.caption} />
                        <div className="image-overlay">
                          <h4>{img.caption}</h4>
                          <p>{img.description}</p>
                          <span className="view-pdf">View→</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section leadership-section">
        <div className="container">
          <h2 className="section-title">Leadership & Activities</h2>
          {leadership.map((item, idx) => (
            <div key={idx} className="card">
              <div className="card-header">
                <div>
                  <h3>{item.title}</h3>
                  <p className="company">{item.org}</p>
                </div>
                <span className="period">{item.period}</span>
              </div>
              <div className="card-content">
                <ul>
                  {item.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                
                {/* ADD THIS IMAGE GALLERY CODE */}
                {item.images && (
                  <div className="image-gallery">
                    {item.images.map((img, i) => (
                      <a 
                        key={i} 
                        href={img.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="image-container"
                      >
                        <img src={img.src} alt={img.caption} />
                        <div className="image-overlay">
                          <h4>{img.caption}</h4>
                          <p>{img.description}</p>
                          <span className="view-pdf">View PDF →</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Interests</h2>
          <div className="card">
            <div className="card-content">
              <div className="skill-group">
                <h4>Languages</h4>
                <p>{skills.languages}</p>
              </div>
              <div className="skill-group">
                <h4>Libraries & Tools</h4>
                <p>{skills.tools}</p>
              </div>
              <div className="skill-group">
                <h4>Interests</h4>
                <p>{skills.interests}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Elizabeth Liu. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;