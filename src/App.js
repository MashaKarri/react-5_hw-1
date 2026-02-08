import "./App.css";

function App() {
  const myName = "Марія";

  const photoUrl =
    "https://i.pinimg.com/1200x/ac/e4/d6/ace4d6b62d8a204bbcbe4c747f616fd8.jpg";
  const photoAlt = "Seagulls";

  const myFavouriteSite = {
    name: "Pinterest",
    url: "https://www.pinterest.com/",
  };

  const firstNum = 17;
  const secondNum = 11;
  const sum = firstNum + secondNum;

  const colours = ["white", "black", "scarlet"];

  return (
    <div className="App">
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={photoUrl} alt={photoAlt} />
      <br />
      <a href={myFavouriteSite.url} target="_blank" rel="noopener noreferrer">
        {myFavouriteSite.name}
      </a>
      <p>
        Сума чисел {firstNum} та {secondNum} дорівнює {sum}
      </p>
      <ul>
        {colours.map((colour, id) => (
          <li key={id}>{colour}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
