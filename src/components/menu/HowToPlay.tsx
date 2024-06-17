import Menu from "$/components/menu/Menu";
import {useRouter} from "$/router";

/**
 * The component representing the "How to play" page. <br />
 * It contains the written game's rules.
 * @component
 */
export default function HowToPlay() {
    const router = useRouter();

    return <div
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-menu-gradient-start via-menu-gradient-transition to-menu-gradient-end"
        style={{
            backgroundAttachment: 'local',
            minHeight: '100vh',
            overflowY: 'auto',
            padding: '1em',
            paddingTop: '50em'
        }}>
        <h1 className="mb-5 text-6xl font-MajorMonoDisplay text-white">How To Play</h1>
        <div className="mb-5 font-MajorMonoDisplay text-white max-w-3/5">
            <h2 className="mb-1 text-2xl">Basics:</h2>
            <p className="mb-4">Zu Beginn des Spieles wird jeden Spieler ein Kartenstapel mit sieben zufälligen
                Karten ausgeteilt.
                Außerdem wird ein Nachziehstapel und ein Ablegestapel in der Mitte des Spielfeldes erzeugt. Die
                Karten auf dem Nachziehstapel sind gemischt und verdeckt gelegt, man zeiht die oberste Karte. Der
                Ablegestapel besteht zu Beginn aus einer zufälligen aufgedeckten Karte.
                Ein Spieler wird dann zufällig ausgewählt und bekommt dann den ersten Spielzug.
                Nach der Beendung des Spielzuges wird das Privileg einen Spielzug zu tätigen im Uhrzeigersinn zum
                nächsten Spieler übertragen. Wenn ein Spieler nur noch zwei Karten auf der Hand hat, muss er in
                einer kurzen befristeten Zeit jeweils einmal in zwei zufälliges erscheinende Felder klicken, sonst
                muss er eine Strafkarte ziehen. Bei einer Karte auf der Hand muss der Spieler einmal auf ein
                zufälliges erscheinendes Feld klicken, sonst muss er eine Strafkarte bekommen. Wenn ein Spieler
                fertig ist und alle Karten abgelegt hat, ist er fertig und es wird weitergespielt, bis ein Duell der
                beiden letzten Spieler um den letzten Platz entscheidet.</p>

            <h2 className="mb-1 text-2xl">Sonderkarten / Sonderregeln:</h2>
            <p className="mb-3"><strong className="mr-1">+2: </strong>
                Bei einer +2 muss der nächste Spieler entweder zwei Karten zeihen und gibt dann sein Spielzug ab
                oder er legt eine +2 einer anderen oder derselben Farbe drauf und der nächste Spieler muss vier
                Karten zeihen oder legt wiederum eine Karte darauf usw. Man kann auch optional eine +4 drauflegen
                und sich eine neue Farbe wünschen und die Anzahl der zu ziehenden Karten wird um vier erhöht.</p>
            <p className="mb-3"><strong className="mr-1">+4: </strong>
                Bei der Sonderkarte +4 gilt, dass der Spieler sich eine Farbe wünschen darf und der nächste Spieler
                muss vier Karten ziehen, außer er hat selber ein +4 Karte, dann wird die Anzahl der zu ziehenden
                Karten um vier addiert und der nächste Spieler müsste diese Anzahl dann ziehen. Anders kann man auch
                auf die +4 mit der gewünschten Farbe eine +2 drauflegen und der darauf folgende Spieler muss dann
                die entsprechende Anzahl an Karten ziehen und danach wird auch in der Farbe weitergespielt. Nachdem
                man entweder vier Karten oder mehr zeihen musste, ist der Spielzug auch beendet.</p>
            <p className="mb-3"><strong className="mr-1">Richtungswechsel: </strong>
                Wenn der Spieler vor dir eine Richtungswechselkarte in der passenden Farbe legt, dann bist nicht du
                der nächste Spieler, sondern der in entgegen gesetzten Spielrichtung, weil diese bei einer solchen
                Karte geändert wird. Bei der Situation, dass nur noch zwei Spieler im Spiel und eine
                Richtungswechselkarte gelegt wird, dann ist derjenige, der die Karte gelegt hat als nächsten am
                Zug.</p>
            <p className="mb-3"><strong className="mr-1">Aussetzkarte: </strong>
                Bei einer gespielten Aussetzkarte wird der nächste Spieler, der am Zug wäre, übersprungen, muss also
                aussetzten. Bei der Situation, dass nur noch zwei Spieler im Spiel und eine Aussetzkarte gelegt
                wird, dann ist derjenige, der die Karte gelegt hat als nächsten am Zug.</p>
            <p className="mb-4"><strong className="mr-1">Wünschekarte: </strong>
                Eine Wünschekarte hat die Fähigkeit, dass man sie auf jede beliebige Farbe einer Karte legen kann,
                außer +2 und +4. Der Spieler, der die Wünschekarte gelegt hat, darf sich dann eine Farbe aussuchen,
                mit der weitergespielt wird. Man darf jedoch keine Wünschekarte auf eine Wünschekarte legen.</p>

            <h2 className="mb-1 text-2xl">Was beinhaltet ein Spielzug?</h2>
            <p className="mb-3">Bei einem Spielzug muss ein Spieler, wenn er eine passende Karte zur obersten
                aufgedeckten Karte auf
                dem Ablegestapel hat, diese Karte legen. Eine passende Karte passt dann, wenn die Farbe der Karte
                gleich ist oder die Zahl passend ist. Immer kann man eine Wünschekarte oder eine Wünsche +4 ziehen
                Karte legen, sobald man nicht aussetzen muss. Nach dem Ablegen einer passenden Karte ist der
                Spielzug beendet.</p>
            <p>Wenn man aussetzten muss, dann wird der Spielzug übersprungen.
                Wenn man keine Karte legen kann, muss man eine Karte von dem Nachziehstapel ziehen und dann ist so
                der Spielzug beendet.
                Für den Fall, dass man an der Reihe ist und vorher eine +2 oder +4 gelegt wurde, musst du entweder
                eine +2 drauflegen (auch in der gewünschten Farbe im Fall einer +4) damit ist der Zug vorbei oder
                zwei Karten ziehen und dann ist der Zug vorbei.
                Wenn der Spieler vor dir eine Richtungswechselkarte gelegt hat, dann kommst du nicht als Nächstes am
                Zug. </p>
        </div>
        <button onClick={() => router.redirect(<Menu/>)}
                className="mt-5 px-6 py-2 text-2xl mb-4 text-white hover:text-gray-200">Back
        </button>
    </div>;
}