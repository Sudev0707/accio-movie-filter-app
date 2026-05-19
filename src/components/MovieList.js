import React from 'react';

const MovieList = ({ movies }) => {
    
    // Empty state handling
    if (!movies || movies.length === 0) {
        return (
            <div className="empty-state">
                <span className="empty-icon">🎞️</span>
                <p>No movies match the selected genre.</p>
                <p className="empty-subtext">Try a different filter or clear filter</p>
            </div>
        );
    }

    return (
        <div className="movie-table-container">
            <table className="movie-table">
                <thead>
                    <tr className="table-header">
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapping of rows inside table - mandatory requirement */}
                    {movies.map((movie, index) => (
                        <tr 
                            key={`${movie.title}-${movie.year}-${index}`} 
                            className="movie-row"
                            style={{ background: index % 2 === 0 ? '#ffffff' : '#fdfdf9' }}
                        >
                            <td className="movie-title">{movie.title}</td>
                            <td>
                                <span className="genre-badge">{movie.genre}</span>
                            </td>
                            <td className="movie-year">{movie.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="table-footer">
                {movies.length} movie{movies.length !== 1 ? 's' : ''} shown
            </div>
        </div>
    );
};

export default MovieList;