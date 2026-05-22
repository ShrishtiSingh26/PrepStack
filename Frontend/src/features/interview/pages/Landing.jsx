import React from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import { useAuth } from '../../auth/hooks/useAuth'
import '../style/landing.scss'

const Landing = () => {
    const { user } = useAuth()

    return (
        <div className="landing-page">
            <Navbar />

            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-container">
                    <span className="hero-badge">AI-Powered Interview Coach</span>
                    <h1>Ace Your Next Interview with <span className="highlight">PrepStack</span></h1>
                    <p className="hero-subtitle">
                        Paste any job description, upload your resume, and get a personalized, AI-driven preparation roadmap, custom technical questions, and targeted mock exercises in seconds.
                    </p>
                    <div className="hero-actions">
                        {user ? (
                            <Link to="/dashboard" className="button primary-button hero-btn">
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link to="/register" className="button primary-button hero-btn">
                                    Get Started for Free
                                </Link>
                                <a href="#features" className="button secondary-btn hero-btn">
                                    Learn More
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {/* Functioning / How it Works Section */}
            <section className="how-it-works-section">
                <div className="section-container">
                    <h2 className="section-title">How PrepStack Works</h2>
                    <p className="section-subtitle">Get fully prepared in three simple steps</p>

                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            </div>
                            <h3>Input Your Profile</h3>
                            <p>Upload your resume in PDF/DOCX format or provide a quick summary of your background, experience, and core skills.</p>
                        </div>

                        <div className="step-card">
                            <div className="step-number">2</div>
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                            </div>
                            <h3>Paste Job Description</h3>
                            <p>Provide the job description of your target role. Our AI will dissect the requirements, technologies, and required experience level.</p>
                        </div>

                        <div className="step-card">
                            <div className="step-number">3</div>
                            <div className="step-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                            </div>
                            <h3>Get Interview Strategy</h3>
                            <p>Instantly receive your interview preparation package, featuring match scores, target technical questions, behavioral preparation, and a daily roadmap.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features-section">
                <div className="section-container">
                    <h2 className="section-title">Everything You Need to Succeed</h2>
                    <p className="section-subtitle">Tailor-made materials generated on-demand by advanced AI</p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                            </div>
                            <h4>Personalized Match Score</h4>
                            <p>Understand how well your current resume aligns with the target job profile and see exactly where you stand.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                            </div>
                            <h4>Technical Question Bank</h4>
                            <p>Get realistic questions customized for the tech stack in the job description, complete with answer guides and interviewer intentions.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            </div>
                            <h4>Behavioral Preparation</h4>
                            <p>Prepare for cultural fit and behavioral questions with ideal models and guides to communicate your experience effectively.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                            </div>
                            <h4>Day-by-Day Roadmaps</h4>
                            <p>Follow a structured daily study plan focused on resolving identified skill gaps and strengthening your knowledge before the big day.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} PrepStack. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Landing
