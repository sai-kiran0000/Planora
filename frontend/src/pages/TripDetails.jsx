import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Users, DollarSign, Hotel, Activity } from 'lucide-react';
import { tripAPI } from '../services/api';

const TripDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTripDetails();
    }, [id]);

    const fetchTripDetails = async () => {
        try {
            const response = await tripAPI.getTrip(id);
            setTrip(response.data.data);
        } catch (error) {
            console.error('Error fetching trip:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark-950">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
            </div>
        );
    }

    if (!trip) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark-950">
                <div className="text-center">
                    <p className="text-dark-400 text-lg">Trip not found</p>
                    <button onClick={() => navigate('/dashboard')} className="btn-primary mt-4">
                        Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center text-dark-400 hover:text-dark-200 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Dashboard
                </button>

                {/* Trip Overview */}
                <div className="card mb-8">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h1 className="text-3xl font-display font-bold gradient-text mb-2">
                                {trip.destinationName}
                            </h1>
                            <p className="text-dark-400 flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                From {trip.startCity}
                            </p>
                        </div>
                        <span className="px-4 py-2 bg-primary-500/20 text-primary-400 border border-primary-500/30 rounded-xl font-semibold">
                            {trip.planType} PLAN
                        </span>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-primary-400" />
                            </div>
                            <div>
                                <p className="text-dark-500 text-sm">Duration</p>
                                <p className="text-dark-100 font-semibold">{trip.numberOfDays} Days</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 text-accent-400" />
                            </div>
                            <div>
                                <p className="text-dark-500 text-sm">Travelers</p>
                                <p className="text-dark-100 font-semibold">{trip.numberOfTravelers}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-secondary-400" />
                            </div>
                            <div>
                                <p className="text-dark-500 text-sm">Total Budget</p>
                                <p className="text-dark-100 font-semibold">₹{trip.totalBudget.toLocaleString()}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-primary-400" />
                            </div>
                            <div>
                                <p className="text-dark-500 text-sm">Dates</p>
                                <p className="text-dark-100 font-semibold text-sm">
                                    {new Date(trip.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(trip.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Budget Breakdown */}
                <div className="card mb-8">
                    <h2 className="text-2xl font-display font-bold text-dark-100 mb-6">Budget Breakdown</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { label: 'Travel', amount: trip.budgetBreakdown.travelBudget, percent: trip.budgetBreakdown.travelPercentage, color: 'primary' },
                            { label: 'Accommodation', amount: trip.budgetBreakdown.accommodationBudget, percent: trip.budgetBreakdown.accommodationPercentage, color: 'accent' },
                            { label: 'Food', amount: trip.budgetBreakdown.foodBudget, percent: trip.budgetBreakdown.foodPercentage, color: 'secondary' },
                            { label: 'Activities', amount: trip.budgetBreakdown.activitiesBudget, percent: trip.budgetBreakdown.activitiesPercentage, color: 'primary' },
                        ].map((item) => (
                            <div key={item.label} className="bg-dark-800 rounded-xl p-4">
                                <p className="text-dark-400 text-sm mb-1">{item.label}</p>
                                <p className="text-2xl font-bold text-dark-100 mb-1">₹{item.amount.toLocaleString()}</p>
                                <p className={`text-${item.color}-400 text-sm font-medium`}>{item.percent.toFixed(1)}%</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hotels */}
                <div className="card mb-8">
                    <h2 className="text-2xl font-display font-bold text-dark-100 mb-6 flex items-center">
                        <Hotel className="w-6 h-6 mr-2 text-accent-400" />
                        Recommended Hotels
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {trip.hotels.map((hotel) => (
                            <div key={hotel.id} className="bg-dark-800 rounded-xl p-5 hover:bg-dark-700 transition-colors">
                                <h3 className="text-lg font-semibold text-dark-100 mb-2">{hotel.name}</h3>
                                <p className="text-dark-400 text-sm mb-3 flex items-center">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {hotel.location}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-dark-500 text-sm">Per Night</p>
                                        <p className="text-xl font-bold text-accent-400">₹{hotel.pricePerNight.toLocaleString()}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-dark-500 text-sm">Rating</p>
                                        <p className="text-xl font-bold text-secondary-400">⭐ {hotel.rating}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activities */}
                <div className="card">
                    <h2 className="text-2xl font-display font-bold text-dark-100 mb-6 flex items-center">
                        <Activity className="w-6 h-6 mr-2 text-primary-400" />
                        Recommended Activities
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {trip.activities.map((activity) => (
                            <div key={activity.id} className="bg-dark-800 rounded-xl p-5 hover:bg-dark-700 transition-colors">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-dark-100">{activity.name}</h3>
                                    <span className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-lg">
                                        {activity.category}
                                    </span>
                                </div>
                                <p className="text-dark-400 text-sm mb-4">{activity.description}</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-dark-500 text-sm">Cost</p>
                                        <p className="text-lg font-bold text-primary-400">₹{activity.cost.toLocaleString()}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-dark-500 text-sm">Duration</p>
                                        <p className="text-lg font-bold text-dark-100">{activity.durationHours}h</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripDetails;
