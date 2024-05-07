# React

= Bibliothek, um dynamisch den HTML-Inhalt einer Seite zu verändern (ohne die Seite neuzuladen), wenn sich bestimmte Variablen (sog. State) ändern. Dies nennt man "Reactivity". Deshalb braucht man auch nur eine HTML-Datei.
## Grundprinzipien

> **Root**  
> = HTML-Element, dessen Inhalt von React verwaltet wird  Ist meistens das einzige Element im Body neben den Script-Tags und hat die ID `root`. Enthält den sog. App-Component, welcher der oberste Component auf der Seite ist.  
> Siehe `index.html` Z. 9.

> **JSX**  
> = Superset von JavaScript, welches die Erstellung von Components ermöglicht.  
> HTML ist gültiges JSX, also kann man es beispielsweise einer Variable zuweisen oder eben als Rückgabewert verwenden:
> ```jsx
> const thing = <h1>Hallo</h1>
> ```
> Weiterhin kann man innerhalb von HTML JavaScript-Ausdrücke mit geschweiften Klammern verwenden. Alles innerhalb der geschweiften Klammern wird als JavaScript interpretiert:
> ```jsx
> const thing = <h1>{new Date().getFullYear()}</h1> // <h1>2024</h1>
> ```

> **Component**  
> = Funktion, welche HTML zurückgibt:  
> ```typescript jsx
> function Hello(props: { name: string }) {
>     return <h1>Hallo, {props.name}</h1>
> }
> ```
> Components können mithilfe ihres Namens wie andere HTML-Elemente verwendet werden:   
> ```typescript jsx
> function App() {
>     return <div>
>         <Hello name={"Khoi"} /> <!-- <h1>Hallo, Khoi</h1> -->
>     </div>
> }
> ```
> Components haben immer nur ein Argument. Dieses Argument nennt man "props" (kurz für Properties).

> **State**  
> = Variable, dessen Änderung den Inhalt der Seite verändert.  
> Man deklariert sie mit dem sog. `useState`-Hook, welcher als Argument die Daten nimmt, welche in State verwandelt werden soll:
> ```typescript jsx
> import {useState} from "react";
> 
> function HelloCounter(props: { name: string }) {
>     const [counter, setCounter] = useState(0);
> 
>     return <div>
>         <h1>Hallo, {props.name}</h1>
>         <span>Der Zähler ist bei: {counter}</span>
>         <button onClick={() => setCounter(counter + 1)}>
>             Zähler erhöhen
>         </button>
>     </div>
> }
> ```