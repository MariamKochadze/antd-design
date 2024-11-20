import bookImage from '../../assets/book.jpg'; 
import './home.css';

const Home = () => {
  return (
    <div className='homeContainer'>
      <h1 className='headerContainer'>Welcome Home page!</h1>
      <img 
      src={bookImage} 
      alt="Book image" 
      className='bookImg'
      />
      <p>
  Historical books delve into past events, cultures, and civilizations. They often provide insights into specific time periods, famous figures, or societal transformations.
</p>

<p>
  Romance books focus on love and relationships, often exploring emotional connections and challenges. They can range from lighthearted stories to dramatic tales.
</p>

<p>
  Science books focus on exploring the natural world, technology, or scientific phenomena. They may be academic, popular science, or educational in nature.
</p>

<p>
  Biology books specifically address topics related to biology, from human anatomy to ecosystems and evolution. They may be academic or written for general readers.
</p>

<p>
  Fantasy books transport readers to magical worlds with imaginative characters, creatures, and epic quests. They often involve supernatural elements and mythical beings.
</p>

<p>
  Mystery and thriller books keep readers on edge, featuring suspenseful plots, crime-solving, or psychological intrigue. They are designed to create tension and excitement.
</p>

<p>
  Self-help books provide guidance on personal growth, mental health, and improving one’s life. They often focus on strategies for success, happiness, and personal development.
</p>

<p>
  Biographies and memoirs focus on the lives of real people, providing inspiration or insight into their personal journeys, achievements, and challenges.
</p>

    </div>
  );
};

export default Home;
