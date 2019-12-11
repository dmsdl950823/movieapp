import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';




class App extends Component {

    state = {};

    componentDidMount() {
        this._getMovies();
    }

    // _ :: 자체 함수와 개발자가 만든 함수와 다름을 표시하고자 함
    _renderMovies = () => {
        const movies = this.state.movies.map((movie) => { // index사용시 느려짐..
            console.log(movie)
            return (<Movie
                    title={movie.title_english}
                    poster={movie.medium_cover_image}
                    key={movie.id}
                    genres={movie.genres}
                    sysnopsis={movie.synopsis}/> )
        });
        return movies;
    };

    _getMovies = async () => {  // async function
        const movies = await this._callApi(); 
        // await : _callApi가 끝나기(완성/실패)를 기다린 후, 끝나면 함수를 변수에 입력할것.
        // 그 후 밑에 줄이 실행
        this.setState({
            movies  // movies: movies
        })
    }

    _callApi = () => {
        // fetch : 주소 및 API 불러오기 - console창의 network로 확인 가능
        // console.log(fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')); 
        // - Promise concept를 가져옴(비동기적-앞 코드가 끝나지 않았으 경우에도 실행함)

        return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
        // fetch가 끝나면... 실행해! 
        .then(response => response.json())
            // (respose)는 http header를 가져다줌
            // body: ReadableStream = byte 의미. json으로 바꿔줘야함
        .then(json => {
            console.log(json);
            return json.data.movies;
        })
        .catch(err => console.log(err));  // 실패하면 실행해!
    }

  render() {
    return (
        <div className="App">
            {this.state.movies ? this._renderMovies() : 'loading...'}
        </div>
    )
  }
}


export default App;

