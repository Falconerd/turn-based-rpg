# Dawnbreaker Game Design Document

## Table of Contents

1. [Project Overview](#project-overview)
  1. [Executive Summary](#executive-summary)
  2. [High Concept](#high-concept)
  3. [Core Gameplay](#core-gameplay)
  4. [Genre](#genre)
  5. [Target Audience](#target-audience)
  6. [Team Members](#team-members)
2. [Game Overview](#game-overview)
  1. [Overview](#overview)
  2. [Story](#story)
  3. [Characters](#characters)
  4. [Environment](#environment)
  6. [Level Overviews](#level-overviews)
3. [Gameplay](#gameplay)
  1. [Combat](#combat)
  2. [Abilities](#abilities)
  3. 
  
## Project Overview

### Executive Summary

### High Concept

We want to combine some elements from great games such as Hearthstone, Final Fantasy X, Path of Exile, Darkest Dungeon, and the Diablo series.

#### Darkest Dungeon Elements

We want to take the row-based combat from Darkest Dungeon. See [Combat](#combat) for more details about that.

#### Final Fantasy X Elements

We want to take some aspects of weapon customisation.

#### Path of Exile

We want to take the Passive Tree idea and make break it down. Since each character can permanently die and the players must progress with 4 or more characters at a time, we don't want the passive tree to be as massively complex as PoE. If we create a situation in which the player has to spend a lot of time and effort planning each character, it could deter many.

The trick is going to be how to figure out how to have depth without making the character upgrade experience too convoluted.

#### Diablo Series

We want to take the random loot aspect from the Diablo Series. Not sure to what extent and how to combine that with FFX weapon customisation yet.

### Core Gameplay

Most of the gameplay will revolve around combat, as building up your party to defeat bosses is the overarching goal of the game.

However, there is some debate in my mind as to whether we should include a 2d-platformer like roaming mode in between battles.

| Pros | Cons |
|------|------|
| Can implement many other mechanics into the game | Could have many poorly implemented mechanics rather than just good battles
| The game would be more than just a sequence of battles |
| Could engage more with the world the game is set in |

### Genre

I think instead of thinking of the game as one Genre, we should apply a bunch of applicable tags.

- Dungeon Crawler
- Turn-Based Combat
- Multiplayer
- Player vs Environment
- Player vs Player

### Target Audience

Dylan & Jazz, if he joins the project

### Team Members

Dylan... Maybe Jazz one day

## Game Overview

### Overview

I think a lot of this was covered in the High Concept. Perhaps I misused that section?

### Story

High Tech, Low Life, something something Cthulu

### Characters

Player characters should have their own back stories, but probably not too much of an ongoing on. The real main characters of the story should probably be NPCs.

### Environment

I'd still like to use a Cyberpunk setting. However, it'd be great to mix it with some cosmic horror.

### Level Overview

## Scenes

The game will be split into three major scene types: Home, Field, and Battle. As well as these scenes, there will need to be the Menu scene type which can be used to display any data which doesn't fit into the game world.

### Home

Home is where the player can upgrade their characters and check out any other information before embarking on a mission in the Field. This is the same concept as in XCOM/Darkest Dungeon.

An alternative to this, is to just have a continuous storyline with towns along the way.

Finally, we could have both. Players could have their own base, which they can customize to their liking. As well as this, they can go to towns and log off there.

#### Questions

1. Base, Towns or Both?
2. Can players see other players in Towns?
3. Can players invite other players to their Bases?

### Field

Field is the world the player walks around in during the exploration phase of the gameplay. There are a few options I've thought of for this. The one I like the most is a metroid-vania style 2d map which is randomised with different parameters we can set.

- Metroidvania style 2d levels
- Mother Russia Bleeds style 2.5d levels

I don't want to include Darkest Dungeon style levels in here because I don't think they are really enjoyable, and the game mechanics don't fit with walking in a straight line.

#### Questions

1. Should we make monsters visible before running into them and starting a battle?
2. Should the player have all party members visible while walking around?
  1. If so, should the characters all be controllable?
  2. If so, we could set up some puzzles and things which require the use of multiple characters. (not a question, I know)
3. Should the characters be able to jump? Climb ladders? Or just walk and use elevators or something?

### Battle

The battle scene is where all combat happens. It's explained in depth under [Combat](#combat) As of now, this combat can't be influenced by any other scenes. For example, if enemies are visible in the Field, jumping onto their head to initiate a battle doesn't help or hinder the player.

#### Questions

1. Should combat be influenced by the Field?

### Menu

The menu should contain the following sections:

#### Character Sheet

Each character should have a character sheet which displays their individual stats and items, as well as any calculated stats.

#### Player Overview

I'm assuming the player will want some idea of their overall progress.

#### Achievements/Challenges

Completionists can track what they need to do to 100% the game.

#### Social

Should we include a social screen? (We'll have to look at [Multiplayer](#multiplayer) to decide on this one.

## Gameplay

### Combat

A combat scene will consist of two sides. Each side will have 4 slots. All player characters will take up 1 slot each. Enemies may take up more slots each.

Any attack against a large enemy can be used against any slot they take up.

Any attack which hits multiple slots will only apply to each enemy once, even if it hits multiple slots the enemy occupies.

Let's just designate some terms when speaking about enemy sizes.

| Slots | Term |
|-------|------|
| 1 | small
| 2 | medium
| 3 | large
| 4 | massive

Examples

```
c1-4 = player characters
e1-4 = enemies 
```

Standard 4v4 - 4 small enemies
```
[ c1 ] [ c2 ] [ c3 ] [ c4 ] VS [ e1 ] [ e2 ] [ e3 ] [ e4 ]
______ ______ ______ ______    ______ ______ ______ ______
```

4 player characters vs 3 small enemies and 1 medium enemy

```
[ c1 ] [ c2 ] [ c3 ] [ c4 ] VS [    e1     ] [ e2 ] [ e3 ]
______ ______ ______ ______    ______ ______ ______ ______
```

4 player characters vs 1 medium enemy
```
[ c1 ] [ c2 ] [ c3 ] [ c4 ] VS [    e1     ] 
______ ______ ______ ______    ______ ______ ______ ______
```

### Abilities

...

### Multiplayer

The original idea I had for this game, was a TCG masquerading as an RPG. What I mean by that, is since combat is Turn-Based, we could treat characters kind of like Cards which you can upgrade.

#### PvP

Players can choose to duel. Upon the start of a duel, the players will be in a picking phase. When 8 characters have been picked, the players will enter the battle phase.

##### Picking Phase

One player will be able to pick 1 character for any slot, followed by the opposing player doing the same.

##### Battle

The players will have 30 seconds to commit to an action. When the timer has passed, the character whose turn it is will pass their turn.

##### Post-Battle

###### Standard

###### Hardcore

Upon death in PvP in hardcore, the player's characters do not die. Instead, the winning player should get to claim something from the enemy. Perhaps a character used in the battle or an item equipped on one of them?

Alternatively, players might be able put up stakes at the beginning of the battle, which they can agree on before hand.
