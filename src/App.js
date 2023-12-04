import React from 'react';
import {useState} from 'react';
import { Route } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navbar';
import Home from './Components/Home';
import MovieList from './Components/MovieList';
import AddFlex from './Components/Add';
import PosterOne from './Components/Posters/dr_no.jpg';
import PosterTwo from './Components/Posters/from_russia_with_love.jpg';
import PosterThree from './Components/Posters/goldfinger.jpg';
import PosterFour from './Components/Posters/thunderball.png';
import PosterFive from './Components/Posters/you_only_live_twice.jpg';
import PosterSix from './Components/Posters/on_her_majesty_s_secret_service.jpg';
import PosterSeven from './Components/Posters/diamonds_are_forever.jpg';
import PosterEight from './Components/Posters/live_and_let_die.jpg';
import PosterNine from './Components/Posters/the_man_with_the_golden_gun.jpg';
import PosterTen from './Components/Posters/the_spy_who_loved_me.jpg';
import PosterEleven from './Components/Posters/moonraker.jpg';
import PosterTwelve from './Components/Posters/for_your_eyes_only.jpg';
import PosterThirteen from './Components/Posters/octopussy.jpg';
import PosterFourteen from './Components/Posters/a_view_to_a_kill.jpg';
import PosterFifteen from './Components/Posters/the_living_daylights.jpg';
import PosterSixteen from './Components/Posters/licence_to_kill.jpg';
import PosterSeventeen from './Components/Posters/goldeneye.jpg';
import PosterEighteen from './Components/Posters/tomorrow_never_dies.jpg';
import PosterNineteen from './Components/Posters/the_world_is_not_enough.jpg';
import PosterTwenty from './Components/Posters/die_another_day.jpeg';
import PosterTwentyone from './Components/Posters/casino_royale.jpg';
import PosterTwentytwo from './Components/Posters/quantum_of_solace.png';
import PosterTwentythree from './Components/Posters/skyfall.jpg';
import PosterTwentyfour from './Components/Posters/spectre.webp';
import PosterTwentyfive from './Components/Posters/no_time_to_die.jpg';
import TrailerAndDescription from './Components/Trailer';

function App () {
  const [movies, setMovies] = useState( [ 
    { id: 0,
    posterURL: PosterOne , 
    title: "DR. NO", 
    description: "In the film that launched the James Bond saga, Agent 007 (Sean Connery) battles mysterious Dr. No, a scientific genius bent on destroying the U.S. space program. As the countdown to disaster begins, Bond must go to Jamaica, where he encounters beautiful Honey Ryder (Ursula Andress), to confront a megalomaniacal villain in his massive island headquarters.", 
    year: 1962,
    director:	"Terence Young",
    runtime: "1h 50m",
    rate: 5,
    trailer: "https://www.youtube.com/embed/pw61uyA0F8A"},

    {id: 1,
    posterURL: PosterTwo , 
    title: "FROM RUSSIA WITH LOVE", 
    description:"Agent 007 (Sean Connery) is back in the second installment of the James Bond series, this time battling a secret crime organization known as SPECTRE. Russians Rosa Klebb (Lotte Lenya) and Kronsteen are out to snatch a decoding device known as the Lektor, using the ravishing Tatiana (Daniela Bianchi) to lure Bond into helping them. Bond willingly travels to meet Tatiana in Istanbul, where he must rely on his wits to escape with his life in a series of deadly encounters with the enemy.", 
    year: 1963,
    director:	"Terence Young",
    runtime: "1h 58m",
    rate: 5,
    trailer: "https://www.youtube.com/embed/t9AeIdMQqR8"},

    {id: 2,
    posterURL: PosterThree ,
    title: "GOLDFINGER", 
    description:"Special agent 007 (Sean Connery) comes face to face with one of the most notorious villains of all time, and now he must outwit and outgun the powerful tycoon to prevent him from cashing in on a devious scheme to raid Fort Knox -- and obliterate the world's economy.", 
    year: 1964,
    director:	"Terence Young",
    runtime: "1h 58m",
    rate: 5,
    trailer: "https://www.youtube.com/embed/MA65V-oLKa8"},
    
    {id: 3,
    posterURL: PosterFour ,
    title: "THUNDERBALL", 
    description:"Led by one-eyed evil mastermind Emilio Largo (Adolfo Celi), the terrorist group SPECTRE hijacks two warheads from a NATO plane and threatens widespread nuclear destruction to extort 100 million pounds. The dashing Agent 007, James Bond (Sean Connery), is sent to recover the warheads from the heart of Largo's lair in the Bahamas, facing underwater attacks from sharks and men alike. He must also convince the enchanting Domino (Claudine Auger), Largo's mistress, to become a key ally.", 
    year: 1965,
    director:	"Terence Young",
    runtime: "2h 10m",
    rate: 4,
    trailer: "https://www.youtube.com/embed/7JowkFmI1Fo"},

    {id: 4,
    posterURL: PosterFive ,
    title: "YOU ONLY LIVE TWICE", 
    description:"During the Cold War, American and Russian spacecrafts go missing, leaving each superpower believing the other is to blame. As the world teeters on the brink of nuclear war, British intelligence learns that one of the crafts has landed in the Sea of Japan. After faking his own death, secret agent James Bond (Sean Connery) is sent to investigate. In Japan, he's aided by Tiger Tanaka (Tetsuro Tamba) and the beautiful Aki (Akiko Wakabayashi), who help him uncover a sinister global conspiracy.", 
    year: 1967,
    director:	"Lewis Gilbert",
    runtime: "1h 56m",
    rate: 3,
    trailer: "https://www.youtube.com/embed/gGiYrS2Y1k"},

    {id: 5,
    posterURL: PosterSix ,
    title: "ON HER MAJESTY'S SECRET SERVICE", 
    description:"Agent 007 (George Lazenby) and the adventurous Tracy Di Vicenzo (Diana Rigg) join forces to battle the evil SPECTRE organization in the treacherous Swiss Alps. But the group's powerful leader, Ernst Stavro Blofeld (Telly Savalas), is launching his most calamitous scheme yet: a germ warfare plot that could kill millions!", 
    year: 1969,
    director:	"Peter Hunt",
    runtime: "2h 20m",
    rate: 4,
    trailer: "https://www.youtube.com/embed/dOLq5Rg9N-c"},
          
    {id: 6,
    posterURL: PosterSeven ,
    title: "DIAMONDS ARE FOREVER", 
    description:"While investigating mysterious activities in the world diamond market, 007 (Sean Connery) discovers that his evil nemesis Blofeld (Charles Gray) is stockpiling the gems to use in his deadly laser satellite. With the help of beautiful smuggler Tiffany Case (Jill St. John), Bond sets out to stop the madman -- as the fate of the world hangs in the balance!", 
    year: 1971,
    director:	"Guy Hamilton",
    runtime: "1h 59m",
    rate: 2,
    trailer: "https://www.youtube.com/embed/9yOamj4mlnE"},

    {id: 7,
    posterURL: PosterEight ,
    title: "LIVE AND LET DIE", 
    description:"When Bond (Roger Moore) investigates the murders of three fellow agents, he finds himself a target, evading vicious assassins as he closes in on powerful Kananga (Yaphet Kotto). Known on the streets as Mr. Big, Kananga is coordinating a global threat, using tons of self-produced heroin. As Bond tries to unravel the mastermind's plan, he meets Solitaire (Jane Seymour), a beautiful tarot-card reader, whose magic is crucial to the crime lord.", 
    year: 1973,
    director:	"Guy Hamilton",
    runtime: "2h 1m",
    rate: 2,
    trailer: "https://www.youtube.com/embed/KTzsm9-XWQo"},

    {id: 8,
    posterURL: PosterNine ,
    title: "THE MAN WITH THE GOLDEN GUN", 
    description:"James Bond receives a gold bullet inscribed with “007”, signifying he has been targeted by high-class professional assassin Francisco Scaramanga known as “The Man with the Golden Gun”. 007 is relieved of his current assignment, the search for scientist Gibson and his solex agitator, the solution to the global energy crisis, and determines to find Scaramanga. The trail leads to a specialist armorer Lazar in Macau, then to Scaramanga’s contact Andrea and industrialist Hai Fat in Hong Kong. After killing Gibson, Scaramanga steals the solex agitator and kidnaps MI6 liaison office Mary Goodnight. A homing device leads Bond to Scaramanga’s lair, an isolated island in Chinese waters. Bond travels there by seaplane, kills Scaramanga in a duel, retrieves the solex agitator, and escapes with Goodnight in Scaramanga’s junk.", 
    year: 1974,
    director:	"Guy Hamilton",
    runtime: "2h 5m",
    rate: 2,
    trailer: "https://www.youtube.com/embed/gF5fr3Zhi7E"},

    {id: 9,
    posterURL: PosterTen ,
    title: "THE SPY WHO LOVED ME", 
    description:"In a globe-trotting assignment that has him skiing off the edges of cliffs and driving a car deep underwater, British super-spy James Bond (Roger Moore) unites with sexy Russian agent Anya Amasova (Barbara Bach) to defeat megalomaniac shipping magnate Karl Stromberg (Curt Jurgens), who is threatening to destroy New York City with nuclear weapons. Bond's most deadly adversary on the case is Stromberg's henchman, Jaws (Richard Kiel), a seven-foot giant with terrifying steel teeth.", 
    year: 1977,
    director:	"Lewis Gilbert",
    runtime: "2h 5m",
    rate: 4,
    trailer: "https://www.youtube.com/embed/UBxG_TJvYTg"},

    {id: 10,
    posterURL: PosterEleven ,
    title: "MOONRAKER", 
    description:"Agent 007 (Roger Moore) blasts into orbit in this action-packed adventure that takes him to Venice, Rio De Janeiro and outer space. When Bond investigates the hijacking of an American space shuttle, he and beautiful CIA agent Holly Goodhead (Lois Chiles) are soon locked in a life-or-death struggle against Hugo Drax (Michael Lonsdale), a power-mad industrialist whose horrific scheme may destroy all human life on earth!", 
    year: 1979,
    director:	"Lewis Gilbert",
    runtime: "2h 6m",
    rate: 2,
    trailer: "https://www.youtube.com/embed/KFOOjYU16KE"},

    {id: 11,
    posterURL: PosterTwelve ,
    title: "FOR YOUR EYES ONLY", 
    description:"When a British ship is sunk in foreign waters, the world's superpowers begin a feverish race to find its cargo: a nuclear submarine control system. And 007 (Roger Moore) is thrust into one of his most riveting adventures as he rushes to join the search ... and prevent global devastation!", 
    year: 1981,
    director:	"John Glen",
    runtime: "2h 7m",
    rate: 3,
    trailer: "https://www.youtube.com/embed/e0iF8TCk4Fw"},

    {id: 12,
    posterURL: PosterThirteen ,
    title: "OCTOPUSSY", 
    description:"James Bond (Roger Moore) may have met his match in Octopussy (Maud Adams), an entrancing beauty involved in a devastating military plot to destroy détente. From the palaces of India to a speeding circus train in Germany and a mid-air battle on the wing of a high-flying jet, only Agent 007 can stop the nightmarish scheme!", 
    year: 1983,
    director:	"John Glen",
    runtime: "2h 10m",
    rate: 1,
    trailer: "https://www.youtube.com/embed/q1hLWZzgZvU"},

    {id: 13,
    posterURL: PosterFourteen ,
    title: "A VIEW TO A KILL", 
    description:"After recovering a microchip from the body of a deceased colleague in Russia, British secret agent James Bond (Roger Moore) discovers that the technology has the potential for sinister applications. Investigating further, Bond is led to Max Zorin (Christopher Walken), the head of Zorin Industries. Soon Agent 007 faces off against the villainous Zorin and his tough Amazonian bodyguard, May Day (Grace Jones), who are scheming to cause massive destruction that will eliminate the competition.", 
    year: 1985,
    director:	"John Glen",
    runtime: "2h 11m",
    rate: 1,
    trailer: "https://www.youtube.com/embed/G8UVLNVbZik"},

    {id: 14,
    posterURL: PosterFifteen ,
    title: "THE LIVING DAYLIGHTS", 
    description:"British secret agent James Bond (Timothy Dalton) helps KGB officer Georgi Koskov (Jeroen Krabbé) defect during a symphony performance. During his debriefing, Koskov reveals that a policy of assassinating defectors has been instated by new KGB head Leonid Pushkin (John Rhys-Davies). But as Bond explores this threat, a counterplot surfaces, involving a shady American arms dealer (Joe Don Baker) and a pair of Russian assassins, Necros (Andreas Wisniewski) and Kara Milovy (Maryam d'Abo).", 
    year: 1987,
    director:	"John Glen",
    runtime: "2h 10m",
    rate: 3,
    trailer: "https://www.youtube.com/embed/IXAVKJTIM1E"},

    {id: 15,
    posterURL: PosterSixteen ,
    title: "LICENCE TO KILL", 
    description:"James Bond (Timothy Dalton) takes on his most-daring adventure after he turns renegade and tracks down one of the international drug cartel's most-brutal and powerful leaders. After the murder of his just-married friend, he is fighting not only for country and justice, but for personal revenge!", 
    year: 1989,
    director:	"John Glen",
    runtime: "2h 13m",
    rate: 3,
    trailer: "https://www.youtube.com/embed/quHQAuO0lkg"},

    {id: 16,
    posterURL: PosterSeventeen ,
    title: "GOLDENEYE", 
    description:"When a powerful satellite system falls into the hands of Alec Trevelyan, AKA Agent 006 (Sean Bean), a former ally-turned-enemy, only James Bond (Pierce Brosnan) can save the world from an awesome space weapon that -- in one short pulse -- could destroy the earth! As Bond squares off against his former compatriot, he also battles Trevelyan's stunning ally, Xenia Onatopp (Famke Janssen), an assassin who uses pleasure as her ultimate weapon.", 
    year: 1995,
    director:	"Martin Campbell",
    runtime: "2h 10m",
    rate: 3,
    trailer: "https://www.youtube.com/embed/8Zw8ylP4buA"},

    {id: 17,
    posterURL: PosterEighteen ,
    title: "TOMORROW NEVER DIES", 
    description:"When a powerful satellite system falls into the hands of Alec Trevelyan, AKA Agent 006 (Sean Bean), a former ally-turned-enemy, only James Bond (Pierce Brosnan) can save the world from an awesome space weapon that -- in one short pulse -- could destroy the earth! As Bond squares off against his former compatriot, he also battles Trevelyan's stunning ally, Xenia Onatopp (Famke Janssen), an assassin who uses pleasure as her ultimate weapon.", 
    year: 1997,
    director:	"Roger Spottiswoode",
    runtime: "1h 59m",
    rate: 2,
    trailer: "https://www.youtube.com/embed/eqrk7-mx2D0"},

    {id: 18,
    posterURL: PosterNineteen ,
    title: "THE WORLD IS NOT ENOUGH", 
    description:"Bond (Pierce Brosnan) must race to defuse an international power struggle with the world's oil supply hanging in the balance. Elektra King (Sophie Marceau), is the daughter of a murdered oil tycoon whom Bond is assigned to protect. The villain is Renard (Robert Carlyle), who has a bullet lodged in his brain rendering him unable to feel pain. Also featuring nuclear weapons expert Dr. Christmas Jones (Denise Richards).", 
    year: 1999,
    director:	"	Michael Apted",
    runtime: "2h 5m",
    rate: 2,
    trailer: "https://www.youtube.com/embed/9nH1DwQP2Xs"},

    {id: 19,
    posterURL: PosterTwenty ,
    title: "Die Another Day", 
    description:"James Bond (Pierce Brosnan) is captured by North Korean agents and must serve a grueling prison sentence. He's finally released, and is convinced that someone in his own agency betrayed him. He escapes from custody and travels to Cuba, hot on the heels of Zao (Rick Yune), the agent who put Bond behind bars. Meanwhile, Bond begins romancing NSA agent Jinx (Halle Berry) as he uncovers a scheme concocted by Zao and British millionaire Graves (Toby Stephens), involving a highly destructive laser.", 
    year: 2002,
    director:	"	Lee Tamahori",
    runtime: "2h 10m",
    rate: 2,
    trailer: "https://www.youtube.com/embed/GTznf1x4khc"},

    {id: 20,
    posterURL: PosterTwentyone ,
    title: "CASINO ROYALE", 
    description:"After receiving a license to kill, British Secret Service agent James Bond (Daniel Craig) heads to Madagascar, where he uncovers a link to Le Chiffre (Mads Mikkelsen), a man who finances terrorist organizations. Learning that Le Chiffre plans to raise money in a high-stakes poker game, MI6 sends Bond to play against him, gambling that their newest operative will topple the man's organization.", 
    year: 2006,
    director:	"	Martin Campbell",
    runtime: "2h 24m",
    rate: 5,
    trailer: "https://www.youtube.com/embed/36mnx8dBbGE"},

    {id: 21,
    posterURL: PosterTwentytwo ,
    title: "QUANTUM OF SOLACE", 
    description:"Following the death of Vesper Lynd, James Bond (Daniel Craig) makes his next mission personal. The hunt for those who blackmailed his lover leads him to ruthless businessman Dominic Greene (Mathieu Amalric), a key player in the organization which coerced Vesper. Bond learns that Greene is plotting to gain total control of a vital natural resource, and he must navigate a minefield of danger and treachery to foil the plan.", 
    year: 2008,
    director:	"	Marc Forster",
    runtime: "1h 45m",
    rate: 2,
    trailer: "https://www.youtube.com/embed/BBqYaFEWBxI"},

    {id: 22,
    posterURL: PosterTwentythree ,
    title: "SKYFALL", 
    description:"When James Bond's (Daniel Craig) latest assignment goes terribly wrong, it leads to a calamitous turn of events: Undercover agents around the world are exposed, and MI6 is attacked, forcing M (Judi Dench) to relocate the agency. With MI6 now compromised inside and out, M turns to the one man she can trust: Bond. Aided only by a field agent (Naomie Harris), Bond takes to the shadows and follows a trail to Silva (Javier Bardem), a man from M's past who wants to settle an old score.", 
    year: 2012,
    director:	"Sam Mendes",
    runtime: "2h 23m",
    rate: 5,
    trailer: "https://www.youtube.com/embed/6kw1UVovByw"},

    {id: 23,
    posterURL: PosterTwentyfour ,
    title: "SPECTRE", 
    description:"A cryptic message from the past leads James Bond (Daniel Craig) to Mexico City and Rome, where he meets the beautiful widow (Monica Bellucci) of an infamous criminal. After infiltrating a secret meeting, 007 uncovers the existence of the sinister organization SPECTRE. Needing the help of the daughter of an old nemesis, he embarks on a mission to find her. As Bond ventures toward the heart of SPECTRE, he discovers a chilling connection between himself and the enemy (Christoph Waltz) he seeks.", 
    year: 2015,
    director:	"Sam Mendes",
    runtime: "2h 28m",
    rate: 2,
    trailer: "https://www.youtube.com/embed/ujmoYyEyDP8"},    

    {id: 24,
    posterURL: PosterTwentyfive ,
    title: "NO TIME TO DIE", 
    description:"In No Time To Die, Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.", 
    year: 2021,
    director:	"Cary Joji Fukunaga",
    runtime: "2h 43m",
    rate: 4,
    trailer: "https://www.youtube.com/embed/N_gD9-Oa0fg"},  
  ])

  const [search, setSearch] = useState("");
  const [rating, setRating  ] = useState(0);

  const handleAdd=(newMovie)=>{setMovies([...movies,newMovie])}

  return (
    <div className="App">
      
      <Navigation  setSearch = {setSearch} setRating = {setRating}></Navigation>
     
        <Route  exact path='/'    render={(props)=>  <Home  movies={movies} {...props}  ></Home>  }     />
    
      <AddFlex handleAdd={handleAdd} />
   <Route exact path= '/007Collection'>   <MovieList movies ={movies} search={search} rating={rating} /> </Route>
     
        <Route   path='/Trailers/:id'      render={(props)=>  <TrailerAndDescription  movies={movies} {...props}  ></TrailerAndDescription>  }      />
    
    </div>
  );
}
export default App;
