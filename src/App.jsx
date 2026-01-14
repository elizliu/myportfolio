import React, { useState, useEffect } from 'react';
import './App.css';

// Import your images (add these at the top after you save your images)
import ecodevo1 from './images/ecodevo-1.jpg';
import ecodevo2 from './images/ecodevo-2.jpg';
import ecodevo3 from './images/ecodevo-3.jpg';

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
    activities: "Society of Women Engineers (SWE), JADE, CUINFORMS, Columbia Poker Club"
  };

  const experiences = [
    {
      title: "Head Intern and Economic Research Analyst Intern",
      company: "City of Beachwood Economic Development Department",
      location: "Beachwood, OH",
      period: "Jun. 2023 – Aug. 2025",
      highlights: [
        "Led a team of 12 interns as the most senior intern, mentoring and supervising onboarding",
        "Led research and planning for a biomedical innovation ecosystem generating 100+ jobs, $320K+ in City tax benefits, and $5M in capital investment",
        "Founded the Beachwood CIC's innovation committee, funding $60K in forgivable loans for 3 R&D companies and launching a $1M revolving loan program"
      ],
      images: [
        { src: ecodevo1, caption: "Biomedical Innovation Ecosystem", description: "Research planning and strategy development for biomedical cluster growth" },
        { src: ecodevo2, caption: "Community Development Impact", description: "Generated $320K+ in tax benefits and $5M in capital investment" },
        { src: ecodevo3, caption: "Innovation Committee Launch", description: "Founded committee that funded $60K in forgivable loans and $1M revolving loan program" }
      ]
    },
    {
      title: "Marketing Intern",
      company: "JNForensics, LLC",
      location: "Tampa, FL (Remote)",
      period: "Feb. 2023 – Jan. 2025",
      highlights: [
        "Produced marketing content featured by Joe Navarro across social media (73.1K+ followers)",
        "Enhanced understanding of nonverbal communication, branding, and audience psychology through mentorship from Joe Navarro (former FBI Special Agent)"
      ]
    },
    {
      title: "AI and Machine Learning Intern",
      company: "Case Western Reserve University",
      location: "Cleveland, OH",
      period: "May 2024 – Aug. 2024",
      highlights: [
        "Applied linear algebra to build 2D/3D probabilistic models for data prediction",
        "Developed Python models using cross-entropy loss, logistic regression, Gaussian processes, Bayesian optimization, and Metropolis sampling"
      ]
    },
    {
      title: "Cambridge Future Scholar Programme",
      company: "Cambridge Centre for International Research",
      location: "Cambridge, UK (remote)",
      period: "Jun. 2023 – Aug. 2023",
      highlights: [
        "Applied the Fearon Bargaining Model to game-theory-based research on post–Wars of the Roses England",
        "Analyzed commitment problems, signaling, and equilibrium failures with Harvard and Yale researchers"
      ]
    }
  ];

  const leadership = [
    {
      title: "Organizational Committee Member",
      org: "Columbia Society of Women Engineers",
      period: "Sep. 2025 – Present",
      description: "Coordinate events for 500+ member organization; developing 2026 SWE Engineering Exploration Experience event for 200+ high school students"
    },
    {
      title: "VP of Finance",
      org: "Hope Heroes Ohio",
      period: "Aug. 2024 – Jul. 2025",
      description: "Created financial strategy generating $238K+ in corporate sponsorships, surpassing Junior Achievement global fundraising record by $40K"
    },
    {
      title: "Editor in Chief and Founder",
      org: "The Introspect",
      period: "Mar. 2023 – June 2025",
      description: "Founded and led global online magazine with 50+ contributors across 14 US States and 8 countries"
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
                      <div key={i} className="image-container">
                        <img src={img.src} alt={img.caption} />
                        <div className="image-overlay">
                          <h4>{img.caption}</h4>
                          <p>{img.description}</p>
                        </div>
                      </div>
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
                <p>{item.description}</p>
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