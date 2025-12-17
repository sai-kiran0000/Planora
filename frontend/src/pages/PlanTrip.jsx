import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, MapPin, Calendar, Users, DollarSign, ArrowLeft } from 'lucide-react';
import { tripAPI } from '../services/api';

const PlanTrip = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        startCity: '',
        startDate: '',
        endDate: '',
        numberOfTravelers: 1,
        travelType: 'SOLO',
        totalBudget: '',
        planType: 'BALANCED',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await tripAPI.createTrip(formData);
            const tripId = response.data.data.tripId;
            navigate(`/trip/${tripId}`);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create trip plan');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark-950">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="flex items-center text-dark-400 hover:text-dark-200 mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Dashboard
                    </button>

                    <div className="flex items-center space-x-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center glow">
                            <Plane className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-display font-bold gradient-text">Plan Your Trip</h1>
                            <p className="text-dark-400">Tell us about your travel plans</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="card">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Starting City */}
                        <div>
                            <label className="block text-sm font-medium text-dark-300 mb-2">
                                Starting City
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-500" />
                                <input
                                    type="text"
                                    name="startCity"
                                    value={formData.startCity}
                                    onChange={handleChange}
                                    className="input-field pl-11"
                                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                                    required
                                />
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-dark-300 mb-2">
                                    Start Date
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-500" />
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        className="input-field pl-11"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-dark-300 mb-2">
                                    End Date
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-500" />
                                    <input
                                        type="date"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        className="input-field pl-11"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Number of Travelers */}
                        <div>
                            <label className="block text-sm font-medium text-dark-300 mb-2">
                                Number of Travelers
                            </label>
                            <div className="relative">
                                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-500" />
                                <input
                                    type="number"
                                    name="numberOfTravelers"
                                    value={formData.numberOfTravelers}
                                    onChange={handleChange}
                                    className="input-field pl-11"
                                    min="1"
                                    required
                                />
                            </div>
                        </div>

                        {/* Travel Type */}
                        <div>
                            <label className="block text-sm font-medium text-dark-300 mb-3">
                                Travel Type
                            </label>
                            <div className="grid grid-cols-3 gap-4">
                                {['SOLO', 'COUPLE', 'FAMILY'].map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, travelType: type })}
                                        className={`py-3 px-4 rounded-xl font-medium transition-all ${formData.travelType === type
                                                ? 'bg-primary-500 text-white shadow-lg scale-105'
                                                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Total Budget */}
                        <div>
                            <label className="block text-sm font-medium text-dark-300 mb-2">
                                Total Budget (₹)
                            </label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-500" />
                                <input
                                    type="number"
                                    name="totalBudget"
                                    value={formData.totalBudget}
                                    onChange={handleChange}
                                    className="input-field pl-11"
                                    placeholder="e.g., 50000"
                                    min="1"
                                    required
                                />
                            </div>
                        </div>

                        {/* Plan Type */}
                        <div>
                            <label className="block text-sm font-medium text-dark-300 mb-3">
                                Plan Type
                            </label>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { type: 'BUDGET', desc: 'Save more', color: 'accent' },
                                    { type: 'BALANCED', desc: 'Best value', color: 'primary' },
                                    { type: 'COMFORT', desc: 'Premium stay', color: 'secondary' },
                                ].map(({ type, desc, color }) => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, planType: type })}
                                        className={`p-4 rounded-xl border-2 transition-all ${formData.planType === type
                                                ? `border-${color}-500 bg-${color}-500/10 scale-105`
                                                : 'border-dark-700 bg-dark-800 hover:border-dark-600'
                                            }`}
                                    >
                                        <div className="font-semibold text-dark-100 mb-1">{type}</div>
                                        <div className="text-xs text-dark-400">{desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-sm">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating Your Trip Plan...
                                </span>
                            ) : (
                                'Generate Trip Plan'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlanTrip;
