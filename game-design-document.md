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

We want to combine some elements from great games such as Final Fantasy X, Path of Exile, Darkest Dungeon, and the Diablo series.

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
