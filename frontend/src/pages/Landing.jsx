import { Link } from 'react-router-dom';
import { Plane, MapPin, Calendar, Users, DollarSign, ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react';

const Landing = () => {
    return (
        <div className="min-h-screen bg-dark-950">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-600/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
                    {/* Navigation */}
                    <nav className="flex items-center justify-between mb-20">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center glow">
                                <Plane className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-display font-bold gradient-text">Planora</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link to="/login" className="btn-outline">
                                Sign In
                            </Link>
                            <Link to="/register" className="btn-primary">
                                Get Started
                            </Link>
                        </div>
                    </nav>

                    {/* Hero Content */}
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-8 animate-slide-down">
                            <Sparkles className="w-4 h-4 text-primary-400" />
                            <span className="text-sm text-primary-300 font-medium">Budget-Smart Trip Planning</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 animate-slide-up">
                            Plan Your Dream Trip
                            <br />
                            <span className="gradient-text">Within Your Budget</span>
                        </h1>

                        <p className="text-xl text-dark-300 mb-10 max-w-2xl mx-auto animate-fade-in">
                            Get personalized trip recommendations with smart budget allocation.
                            Hotels, activities, and destinations tailored to your spending plan.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in">
                            <Link to="/register" className="btn-primary text-lg px-8 py-4">
                                Start Planning Free
                                <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </Link>
                            <button className="btn-outline text-lg px-8 py-4">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold mb-4">
                        <span className="gradient-text">Smart Features</span> for Smart Travelers
                    </h2>
                    <p className="text-dark-400 text-lg">Everything you need to plan the perfect trip</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="card-hover group">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <DollarSign className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-3 text-dark-100">Smart Budget Allocation</h3>
                        <p className="text-dark-400">
                            Automatically split your budget across travel, accommodation, food, and activities based on your preferences.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="card-hover group">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-3 text-dark-100">Destination Recommendations</h3>
                        <p className="text-dark-400">
                            Discover amazing destinations that fit your budget and travel style with AI-powered suggestions.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="card-hover group">
                        <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-3 text-dark-100">Multiple Plan Options</h3>
                        <p className="text-dark-400">
                            Choose from Budget, Balanced, or Comfort plans to match your travel preferences and spending style.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="card-hover group">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Calendar className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-3 text-dark-100">Flexible Dates</h3>
                        <p className="text-dark-400">
                            Plan trips for any duration with automatic day calculation and budget optimization.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="card-hover group">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Users className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-3 text-dark-100">Group Travel Support</h3>
                        <p className="text-dark-400">
                            Plan for solo, couple, or family trips with budget adjustments for multiple travelers.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="card-hover group">
                        <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Shield className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-3 text-dark-100">Secure & Private</h3>
                        <p className="text-dark-400">
                            Your data is protected with JWT authentication and enterprise-grade security.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-accent-600/10 to-secondary-600/10"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-display font-bold mb-4 gradient-text">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
                            Join thousands of travelers who plan smarter with Planora
                        </p>
                        <Link to="/register" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                            Create Free Account
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-dark-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Plane className="w-5 h-5 text-primary-500" />
                            <span className="text-dark-400">© 2025 Planora. All rights reserved.</span>
                        </div>
                        <div className="text-dark-500 text-sm">
                            Built with Spring Boot & React
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
