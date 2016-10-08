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

High Tech, Low Life, something something Cthulu, madness

### Characters

Player characters should have their own back stories, but probably not too much of an ongoing on. The real main characters of the story should probably be NPCs.

### Environment

I'd still like to use a Cyberpunk setting. However, it'd be great to mix it with some cosmic horror.

### Level Overview

## Scenes

The game will be split into two major scene types: Field, and Battle.

As well as these scenes, there will need to be the Menu scene type which can be used to display any data which doesn't fit into the game world.

Menu can be an overlay on the current scene.

### Field

The Field is where most of the meat of the game will come from. There will be a storyline which takes you throughout the metroidvania style cityscape and beyond.

The unnamed protagonist is what the player will control while in the field. When a battle starts, the mercenaries they have hired will fight the battle.

Level design should be similar to a 2d Dark Souls.

There should be no loading screens. I hate those things. Also, they give players pause to decide to stop playing.

The Field will play similarly to a 2d sidescroller, albeit less action-packed. The player will be able to speak to NPCS, solve puzzles, and do other things I have not yet thought of.

We haven't decided whether or not enemies should appear in the field, or whether it'll be more like Pokemon/Final Fantasy, with random encounters.

I suppose that we display enemies in the field, for the sake of Jazz's sanity, we should keep their movements outside of battle to a minimum.

Example scenario: Some `<generic humanoid enemy>` is beating something - which is clearly already dead - with a pole. Walking up to this person triggers a battle.

Example scenario: Some `<generic muncher enemies>` are huddled around some object of fascination. Walking up to them triggers a battle.

#### Questions

1. Should the player be able to jump? Climb ladders? Or just walk and use elevators or something?

### Battle

The battle scene is where all combat happens. It's explained in depth under [Combat](#combat) As of now, this combat can't be influenced by any other scenes. For example, if enemies are visible in the Field, jumping onto their head to initiate a battle doesn't help or hinder the player.

I'd like to create a situation in which if a player encounters an enemy in the field, they are thrust into battle in their current location, never truly leaving the field.

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
