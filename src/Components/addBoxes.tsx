import newsList from "./temp";

function AddBoxes() {
  let content = document.querySelector(".content");

  const ColorList: string[] = [
    "#FF5733", // Bright Red-Orange
    "#33FF57", // Bright Green
    "#3357FF", // Bright Blue
    "#FF33A1", // Bright Pink
    "#F7FF33", // Bright Yellow
    "#33FFF7", // Bright Cyan
    "#FF3333", // Bright Red
    "#FF8333", // Bright Orange
    "#33FF33", // Bright Lime Green
  ];

  const getRandomColor = () => {
    let randomNumber = Math.floor(Math.random() * ColorList.length);
    let SelectedColor = parseInt(ColorList[randomNumber], 10);
    console.log(randomNumber);
    return SelectedColor;
  };
  getRandomColor();
  return (
    <>
      {newsList.map((item, index) => (
        <div
          key={index}
          className="news-item"
          style={{ backgroundColor: getRandomColor }}
        >
          <h3>{item.NewsTitle}</h3>
          <p>
            <strong>Source:</strong> {item.NewsSource}
          </p>
          <p>{item.NewsContent}</p>
        </div>
      ))}
    </>
  );
}

export default AddBoxes;
