import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Scholars = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredScholars, setFilteredScholars] = useState([]);

    const scholars = [
        {
            name: 'Sheikh Dr. Abdul Rahman',
            specialty: 'Quranic Tafseer & Hadith',
            qualification: 'PhD in Islamic Studies',
            country: 'Saudi Arabia',
        },
        {
            name: 'Mufti Muhammad Yaseen',
            specialty: 'Fiqh & Islamic Jurisprudence',
            qualification: 'Mufti, Darul Uloom',
            country: 'Pakistan',
        },
        {
            name: 'Sheikh Usman al-Khamis',
            specialty: 'Aqeedah & Tawheed',
            qualification: 'Islamic Scholar',
            country: 'Kuwait',
        },
        {
            name: 'Dr. Farhat Hashmi',
            specialty: 'Quran & Hadith (Women)',
            qualification: 'PhD in Hadith',
            country: 'Canada',
        },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            const results = scholars.filter(
                (scholar) =>
                    scholar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    scholar.specialty.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredScholars(results);
        } else {
            setFilteredScholars([]);
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="section-title">Noorayn Academy Scholars</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-4"></div>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Explore profiles of renowned Islamic scholars associated with Noorayn Academy
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            placeholder="Search for scholars by name or specialty..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-4 pr-12 rounded-full border-2 border-primary-300 focus:border-primary-500 focus:outline-none text-lg"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-colors"
                        >
                            <FaSearch size={20} />
                        </button>
                    </form>
                </div>

                {/* Search Results */}
                {filteredScholars.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {filteredScholars.map((scholar, index) => (
                            <div key={index} className="card text-center animate-fade-in">
                                <div className="text-5xl mb-4">📚</div>
                                <h3 className="text-xl font-bold text-primary-800 mb-2">
                                    {scholar.name}
                                </h3>
                                <p className="text-gold-600 font-semibold mb-2">{scholar.specialty}</p>
                                <p className="text-sm text-gray-600 mb-1">{scholar.qualification}</p>
                                <p className="text-sm text-gray-500">{scholar.country}</p>
                            </div>
                        ))}
                    </div>
                )}

                {searchTerm && filteredScholars.length === 0 && (
                    <div className="text-center text-gray-600 mb-8">
                        <p className="text-lg">No scholars found matching "{searchTerm}"</p>
                        <p className="text-sm mt-2">Try searching with different keywords</p>
                    </div>
                )}

                {/* Default Display - All Scholars */}
                {!searchTerm && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {scholars.map((scholar, index) => (
                            <div key={index} className="card text-center hover:-translate-y-2 transition-transform">
                                <div className="text-5xl mb-4">📚</div>
                                <h3 className="text-xl font-bold text-primary-800 mb-2">
                                    {scholar.name}
                                </h3>
                                <p className="text-gold-600 font-semibold mb-2">{scholar.specialty}</p>
                                <p className="text-sm text-gray-600 mb-1">{scholar.qualification}</p>
                                <p className="text-sm text-gray-500">{scholar.country}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="text-center mt-12">
                    <p className="text-gray-600 italic">
                        More scholars to be added soon. Stay tuned!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Scholars;
