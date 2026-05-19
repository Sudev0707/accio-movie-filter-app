import React from 'react';

const GenreFilter = ({ genres, onSelectGenre, activeGenre }) => {
    
    const handleClick = (genre) => {
        // Console.log the genre which has been selected (requirement)
        console.log(`Genre selected: "${genre}"`);
        onSelectGenre(genre);
    };

    return (
        <div className="genre-filter-wrapper">
            <div className="genre-filter-header">
                <span className="filter-label">Filter by Genre</span>
                <div className="genre-buttons-container">
                    {genres.map((genre) => {
                        const isActive = activeGenre === genre;
                        return (
                            <button
                                key={genre}
                                onClick={() => handleClick(genre)}
                                className={`genre-btn ${isActive ? 'genre-btn-active' : 'genre-btn-inactive'}`}
                            >
                                {genre}
                            </button>
                        );
                    })}
                </div>
            </div>
            
            {/* Active filter indicator */}
            {activeGenre && (
                <div className="active-filter-badge">
                    <span>🔍 Active filter:</span>
                    <strong>{activeGenre}</strong>
                    <button 
                        onClick={() => {
                            console.log('Clearing filter (showing all movies)');
                            onSelectGenre(null);
                        }}
                        className="clear-filter-btn"
                        title="Clear filter"
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
};

export default GenreFilter;