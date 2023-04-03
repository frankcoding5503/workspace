import ArticleData from "./ArticleData";
import "./ArticleStyles.css"

const Article = () => {
    return(
      <div className="Article">
        <h1>Amazing Designs</h1>
        <p>See what we had done</p>

        <ArticleData 
        className="frist-project"
        heading="project 1"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        img1="https://picsum.photos/900/1600?random=5"
        img2="https://picsum.photos/900/1600?random=6"
        />

        <ArticleData 
        className="frist-project-reverse"
        heading="project 2"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        img1="https://picsum.photos/900/1600?random=7"
        img2="https://picsum.photos/900/1600?random=8"
        />

      </div>
    );
}

export default Article