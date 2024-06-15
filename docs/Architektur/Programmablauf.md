# Programmablauf

Es gibt genau eine HTML-Datei, die `index.html`.
Diese Datei lädt dann die `src/main.tsx`, welche der Eintrittspunkt von React ist.

Dann lädt React den `Menu`-Component (`src/components/menu/Menu.tsx`). Standardmäßig gibt dies das Menü zurück.
Die Buttons im Menü setzen einen State namens `selectedComponent`. Wenn dieser nicht `null` ist, dann wird er statt dem Menü vom Menü-Component zurückgegeben.

Wenn das Spiel gestartet werden soll, wird der New Game Button gedrückt und das Menü mit dem New-Game Component (`src/components/menu/NewGame.tsx`) ersetzt.
Der NewGame-Component ist ein Alias für den Einstiegspunkt (`Client`) von boardgame.io. Von Client geht es in zwei Richtungen. Entweder man schaut jetzt die Rendering-Logik im Component `Board` (`src/components/board/Board.tsx`) oder man schaut sich die Spiel-Logik im `DosGame`-Objekt an, welches sich in der `src/lib/game.ts` finden lässt.

## Spiel-Logik

In der `game.ts` wird das Game-Objekt erstellt, welches die Moves und die Erstellung von `G` festlegt.

### Problem: `G` kann nicht Instanz einer Klasse sein

Wir unterscheidung für Klassen zwischen der Klasse und der serialisierten Form (mit dem Namen `Serialiable` + dem Namen der Klasse), ein Typ, welcher die Eigenschaften eines Objekts festlegt, ohne eine Klasse zu sein. 
Deshalb konvertieren wir die eine Form in die andere mit der `serialize` und `deserialize` Methode.

Besonderheit: Die serialisierte Form von `G` nennen wir `g`.

Die Methoden `serialize` und `deserialize` sind auf dem `Serializable`-Interface (`src/lib/types/Serializable.ts`) deklariert. Alle Klassen außer `GameState` implentieren dieses Interface.    
Die `serialize`-Methode erstellt immer ein Objekt des serialisierbaren Typen (normales Objekt) und die `deserialize`-Methode erstellt aus dem normalen, serialisierbaren Objekt eine Instanz einer Klasse, indem sie den Konstruktor aufruft.

### Problem: In JavaScript/Typescript können Klassen keine polymorphen Konstruktoren haben

Wir haben Logik in den Konstruktoren, wie z.B. die Befüllung des Decks in der Klasse `Deck`.
Für die Lösung des obrigen brauchen wir aber eine Konstruktor mit allen Argumenten, also können wir die Logik nicht mehr in Konstruktor packen.

Lösung:

Stattdessen haben wir statische `create`-Methoden, welche die Werte bestimmen und dann den Konstruktor aufrufen.
Beispielsweise haben wir in `Deck` die Logik für die Befüllung des Decks in der Methode und das fertige Array an Karten wird dann an den Konstruktor übergeben.
Dies ist das Factory-Pattern bzw. eine Factory-Methode.


