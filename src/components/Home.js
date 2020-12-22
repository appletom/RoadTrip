import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { AddToCart } from './actions/AddToCart'
import cartReducers from './reducers/cartReducers';
import '../index.css';

class Home extends Component {
constructor(props) {
    super(props);
    this.state = {
        items: []
    }

}

    render() {

        const cartArray = this.props.items.map(item => {
            return (

                <div className="card ">
                    
                    <div >
                    <span><img className="game-img" src={item.img} alt={item.title}/></span>
                    </div>

                    <span ><h3 >{item.title}</h3></span>

                    <a href={item.src} className="game-link">
                    <h5 >{item.desc}</h5>            
                    <h5 ><b>{item.price}</b></h5>
                    <span className="game-btn"><Link to="./AddGameToCart"><Button ><AddCircleOutlineIcon fontSize="large"/></Button></Link></span>

                    </a>
                    </div>

            )
        })

    return (
       <div className="container">
           {cartArray}
       </div>

    )
    }

}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }


export default connect(mapStateToProps)(Home)


{/* 
function Home() {
    return (
        <div className="bigDiv">
            <div className="Card">
            <Card 
            src="https://apps.apple.com/app/meteorfall-krumits-tale/id1369611597"
            title="Meteorfall: Krumit’s Tale"
            description="Meteorfall: Krumit’s Tale feels like the ultimate evolution of games that combine turn-based strategy, deck building and RPGs, and then squash the resulting playfield into a tiny grid. Your aim is to defeat foes that exist in a three-by-three playfield, by carefully utilizing cards. But rather than cards being dealt into your hand, they are bought or discarded from the grid for money.

            Every decision you make involves weighing up risk versus reward, whether you’re grabbing a weapon, selling armor, or deciding to take on an enemy. This can be overwhelming at first, and your first few goes will likely result in a swift demise. But stick it out and you’ll find Krumit’s Tale a deeply rewarding strategy title, blessed with fantastic art, a wide range of game modes, and enough depth to keep you refining strategies for months."
            price="$6.99"
            cart=""/>

            <Card
            src="https://apps.apple.com/app/kingdom-two-crowns/id1477991646"
            title="Kingdom Two Crowns"
            description="Kingdom Two Crowns is an iPhone game that kicks things off with a monarch on horseback, using his handful of gold coins to have locals do his bidding. Train archers and they set out to hunt local wildlife for dinner. Elsewhere, fences are erected to turn your ramshackle campfire into a slightly less ramshackle fortress.
            This is just as well, because when the sun sets, the Greed arrive. These ghoulish beasts exist to steal things. If they nab your workers’ tools, you’ll have to spend to upgrade them again. If they get your crown, your reign is over, and it’ll be down to your heir to figure out how to defeat the Greed once and for all.

            With its lush pixel art, large side-scrolling landscapes, and smart mix of real-time strategy and action, Kingdom Two Crowns is a mobile masterpiece."
            price="$4.99"
            cart=""
            />

            <Card 
            src="https://apps.apple.com/us/app/peaks-edge/id1502580967"
            title="Peak’s Edge"
            description="Peak’s Edge joins an increasingly impressive sub-genre of sorts on iPhone: turn-based strategy games in a shoebox. Here, your little pyramid trundles around single-screen levels, aiming to smack enemies into oblivion and reach a goal.

            Much of the strategy lies in the various power-ups that are dotted about. Roll on to one and it’s applied to that face of your pyramid. Defeating foes subsequently relies on correctly orienting yourself before attack.

            Quickly, it becomes apparent that Peak’s Edge is easy to get into, but tough to master – and with procedurally generated levels, 25 skills, and 30 armor types, there’s loads to dig into. Note that although you can play for free, we’re treating this as a premium game, because IAP rids the title of intrusive ads, and unlocks the unlimited undos you’ll need to have the best experience."
            price="$2.99"
            cart=""
            />

            </div>

            <div className="Card">
            <Card 
            src="https://apps.apple.com/app/maze-machina/id1481339646"
            title="Maze Machina"
            description="Maze Machina finds you as a mouse in a maze. Unfortunately, it’s not a cardboard creation with cheese at the end, but a bewilderingly complex clockwork construction crafted by an unhinged robot testing his mini-mes.

            The aim is to get to a key and then an exit. But every tile on the four-by-four grid acts as a power-up. As you swipe to move, everything else on the grid follows suit. You must therefore strategize to forge a path to your goal, not get impaled by tiny stabby robots, and avoid inconveniently blowing up the key with a bomb.

            Every game feels like a new challenge with limitless combinations. But the slide-based mechanics make it approachable. It’s an excellent example of ‘simple to play, hard to master’, brilliantly compressing oodles of strategy into tiny spaces and short games."
            price="$1.99"
            cart=""
            />

            <Card
            src="https://apps.apple.com/app/starbeard/id1188480720"
            title="Starbeard"
            description="Starbeard features a race of space gnomes, attempting to defend their gardens from aliens that look an awful lot like garden pests. But in order to stab them, you must engage your brain rather than your sword arm, because Starbeard is a match puzzler.

            The game happily plays with conventions. You can only move items on the bottom of each column, and your protagonist’s position within the grid is key when it comes to engaging bugs. However, your attacks rely on actions that only become available if fully charged by you matching certain items.

            Starbeard therefore gives you something more than a typical gem matcher, demanding you think several moves ahead; and the strategy the game’s set-up demands ensures victory over those nasty bugs depends on your brain, rather than the dexterity of your digits."
            price="$2.99"
            cart=""
            />

            <Card 
            src="https://apps.apple.com/app/p1-select/id1470639614?l=en"
            title="P1 Select"
            description="P1 Select is a single-screen dungeon crawler with a twist. At the bottom half of the screen is a basic maze, with its walls, monsters, bling, and an exit. At the top half is a player select grid. As you move within the maze (in turn-based fashion), the player selection shifts accordingly.

            This is, to put it mildly, perplexing. At first, P1 Select merrily smashes your brain out with a brick. Even though the game has just nine screens, getting to the end seems like a daunting prospect.

            At some point, it just clicks. You figure out how to goad monsters, and better switch between players. Then you can work on improving your strategy – a must, given that your high score is actually an average of recent runs. Thinky stuff, then, and all the better for it."
            price="$2.99"
            cart=""
            />

            </div>
        </div>
    )
} */}
 