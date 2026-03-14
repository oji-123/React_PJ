import './App.css'
import { useEffect, useState } from "react"; // 非同期処理を実行するためにuseEffectを追加

function App() {

  const defaultMovieList = [
    {
      id: 1,
      name: "君の名は",
      image:
        "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yLglTwyFOUZt5fNKm0PWL1PK5gm.jpg",
      overview:
        "1ヵ月後に1000年ぶりの彗星が訪れる日本。東京で暮らす平凡な男子高校生・瀧と、山深い村で都会の生活に憧れながら憂鬱な日々を送る女子高校生・三葉。つながりのない2人は、互いが入れ替わる不思議な夢を見る。",
    },
    {
      id: 2,
      name: "ハウルの動く城",
      image:
        "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/v0K2e1t6ocUNnkZ9BeiFdcOT9LG.jpg",
    },
    {
      id: 3,
      name: "もののけ姫",
      image:
        "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/mVdz3vlmioKWZaHTGfu99zIuayZ.jpg",
    },
    {
      id: 4,
      name: "バック・トゥ・ザ・フューチャー",
      image:
        "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oHaxzQXWSvIsctZfAYSW0tn54gQ.jpg",
    },
  ];

  // 非同期で映画のリストを取得するAPIを実行
  const fetchMovieList = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=ja&page=1`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      }
    );
    const data = await response.json();
    setMovieList(data.results);
  };

  // キーボード入力値保持用の変数
  // keybordは状態を保持する変数、setKeywordは状態の変数を更新するためのメソッド名、useStateはReact Hooksの一種
  const [keyword, setKeyword] = useState("");
  // 映画の検索結果を保持するための変数
  const [movieList, setMovieList] = useState<any[]>([]);

  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <div>

      <div>{keyword}</div>
      {/* 入力用テキストボックス */}
      <input type="text" onChange={(e) => setKeyword(e.target.value)} />

      {movieList
        .filter((movie) => movie.original_title.includes(keyword)) // 状態(keyboard)をもとに映画の名前をフィルタリング
        .map((movie) => (
          <div key={movie.id}>
            <h2>{movie.original_title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title} />
            <p>{movie.overview}</p>
          </div>
        ))}
    </div>
  )
}

export default App