import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {
//     static propTypes = {
//       title: PropTypes.string.isRequired,  /*isRequired = title props 필수!*/
//       poster: PropTypes.string.isRequired
//     };
//
//
//     render () {
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>  {/*movie title="..."*/}
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component{
//
//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     };
//
//   render (){
//       // console.log(this.props);
//     return (
//       <img src={this.props.poster} />
//     )
//   }
// }


// dumb comp에 사용할 수 있는 함수 - class component를 사용하지 않고도 사용할 수 있는것
// 라이프사이클 X, function render도 없음
// functional component사용시 import react Component할 필요 없음..
function Movie({title, poster, genres, sysnopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>  {/*movie title="..."*/}
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                    {sysnopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){  // MoviePoster class와 완전히 동일함
    return <img src={poster} alt={alt} className="Movie__Poster"/>
}

function MovieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.prototype = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    sysnopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;