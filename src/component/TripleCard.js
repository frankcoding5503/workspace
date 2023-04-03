import TripleCardData from "./TripleCardData";
import "./TripleCardStyles.css"

function TripleCard() {
  return(
    <div className="CardSetCotainer">
      <h1>Recent Updates</h1>
      <q>The latest projects and complishment</q>
      <div className="CardSet">
        <TripleCardData
        img="https://picsum.photos/900/1600?random=9"
        heading="Card 1 Title"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />

        <TripleCardData
        img="https://picsum.photos/900/1600?random=10"
        heading="Card 2 Title"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        
        <TripleCardData
        img="https://picsum.photos/900/1600?random=11"
        heading="Card 3 Title"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
    </div>
  );
}

export default TripleCard;