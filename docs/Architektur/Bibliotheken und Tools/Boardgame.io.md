# boardgame.io

Boardgame.io ist eine JavaScript-Bibliothek, die die Erstellung von Mehrspieler-Brettspielen vereinfacht. 
Sie bietet Featues wie: State Management, Online Multiplayer, AI, Game Phases, Lobby, Prototyping, Extendable, View-layer Agnostic und Logs. 

## Grundkonzepte

### Game

`Game` ist ein Objekt, welches das Verhalten des Spiels enthält.

### G

`G` ist eine globale Variable, die den Zustand des aktuellen Spiels enthält.

### Board

Das Board ist ein React-Component, welches als Argument `G` bekommt.

### Moves

Moves sind Funktionen, die `G` verändern.
