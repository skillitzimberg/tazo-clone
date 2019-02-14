import React from 'react';
import Article from './Article';
import Banner from '../Banner';

const center = {
  width: '1200px',
  margin: 'auto'
};

const article1 = [
  {
    title: "WE'VE GOT OUR OWN THING BREWING",
    text: <div>"We're on a quest to be the world's most unexpected tea makers. We explore unexpected blends. We tell unexpected stories to go with them. Witty, entertaining, unconventional stories of Tazo drinkers: People seeking to brew the unexpected in every aspect of their lives.

    We're always curious, always seeking, always questioning. What's this? What's that? We love to get right in there and mix it up. We're half curious kid, half intrepid explorer, half undaunted alchemist. Yes– one and a half.

    It's the unpredictable, the unforeseen that drives us. They drive us away from our safe comfort zone in a commandeered golf cart or on the first flight we could find to who knows where or to the last stop of the subway. Whichever gets us to points unexplored.

    That spirit? We bring it to tea. We do it through vibrant, unexpected blends with a twist that unlock the undiscovered flavors the world has stashed away."</div>,
    image: 'https://images.unsplash.com/photo-1521684415672-2306f06332a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: "WHERE DOES TAZO COME FROM?",
    text: <div>"The name Tazo was inspired by the whirling mating dance of pharaohs of ancient Egypt.  It's also synonymous with the cherry salutation used by residents of Easter Island in the 5th century.  It's pretty incredible.

    True?  Maybe, Maybe not.  Either way, it's how founder Steven Smith explained the name and it's as good an indicator as any of the spirit of creativity, adventure, and originality that TAZO is built on.

    Smith was described as Merlin meets Marco Polo by those who knew him.  That's not the kind of rep you get by playing it safe.  It's the kind you get by mixing it up.  By going off the map.  By leaving the spell book on the shelf.  Steven conjured unexpected flavor blends by mixing unconventional ingredients wherever and whenever he found them.  And he did it with style.

    We're inspired by that same spirit today.  We challenge ourselves to explore the unexpected, be unconfined by convention, and fearlessly leap into the unknown.

    With tea.

    Unexpected, flavorful tea."</div>,
    image: 'https://images.unsplash.com/photo-1515696955266-4f67e13219e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  }
];

function Story(){
  return (
    <div>
      <Banner text={''} button={''}/>
      <div style={center}>
        <Article
          title={article1[0].title}
          text={article1[0].text}
          image={article1[0].image} />

        <Article
          title={article1[1].title}
          text={article1[1].text}
          image={article1[1].image} />
      </div>
    </div>
  );
}

export default Story;
