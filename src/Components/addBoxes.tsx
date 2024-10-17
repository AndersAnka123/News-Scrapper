import newsList from "./temp";

function AddBoxes() {
  const ColorList = ["#f1e8dd", "#f9ccb7", "#d4e0e5"];

  const getRandomColor = () => {
    let randomNumber = Math.floor(Math.random() * ColorList.length);
    return ColorList[randomNumber];
  };
  getRandomColor();
  return (
    <>
      {newsList.map((item, index) => (
        <div
          key={index}
          className="news-item"
          style={{ backgroundColor: getRandomColor() }}
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
