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
function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>  {/*movie title="..."*/}
        </div>
    )
}

function MoviePoster({poster}){  // MoviePoster class와 완전히 동일함
    return <img src={poster} alt="movie poster"/>
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
};

Movie.prototype = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;