import React, { useState, useMemo } from 'react';
import MovieList from './components/MovieList';
import GenreFilter from './components/GenreFilter';
import { movies, genres } from './data/movies';
import './App.css';

const App = () => {
    // State for selected genre filter (null = show all)
    const [activeGenre, setActiveGenre] = useState(null);
    
    // Filtered movies based on activeGenre
    const filteredMovies = useMemo(() => {
        if (!activeGenre) return movies;
        return movies.filter(movie => movie.genre === activeGenre);
    }, [activeGenre]);

    // Handler for genre selection
    const handleGenreSelect = (genre) => {
        if (activeGenre === genre) {
            console.log(`Genre selected: "${genre}" (already active filter)`);
        } else {
            setActiveGenre(genre);
        }
    };

    // Utility functions for buttons
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log("Scrolled to top (Top button clicked)");
    };
    
    const handleFilterStatus = () => {
        if (activeGenre) {
            console.log(`Current active filter: ${activeGenre}`);
            alert(`🎬 Active genre filter: "${activeGenre}". Showing ${filteredMovies.length} movies.`);
        } else {
            console.log("No active filter. Showing all movies.");
            alert("No active genre filter. Displaying all 15 movies.");
        }
    };
    
    const handleResetFilters = () => {
        setActiveGenre(null);
        console.log("Filters reset to default (showing all movies)");
    };

    return (
        <div className="app-container">
            {/* Header Section */}
            <div className="app-header">
                <div className="title-section">
                    <h1>Top 15 Movies of All Time</h1>
                </div>
                
                {/* Action Buttons: Top, Filter, Default levels */}
                <div className="action-buttons">
                    <button onClick={handleResetFilters} className="action-btn default-btn">
                       Default levels
                    </button>
                </div>
            </div>

            {/* GenreFilter Component - passing genres array as prop */}
            <GenreFilter 
                genres={genres} 
                onSelectGenre={handleGenreSelect} 
                activeGenre={activeGenre}
            />

            {/* MovieList Component - passing filtered movies array as prop */}
            <MovieList movies={filteredMovies} />

            {/* Footer */}
            <div className="app-footer">
                 Classic selection · Click any genre button → console logs the genre. 
                Built with React, props passing, dynamic filtering.
            </div>
        </div>
    );
};

export default App;