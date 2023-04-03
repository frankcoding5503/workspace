import "./TripleCardStyles.css"

function TripleCardData(props) {
  return(
    <div className="t-card">
      <div className="t-image">
        <img src={props.img} alt="image"/>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripleCardData;