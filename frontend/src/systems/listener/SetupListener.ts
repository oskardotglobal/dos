import {Listener} from "../../api/event/Listener";
import {Manager} from "../../Manager";
import p5 from "p5";


export class SetupListener implements Listener {
    private manager: Manager;

    //private cardHolderStatics: p5.Color = color(81, 115, 59);

    //Deck static elements displayed in an active game
    private deckCardBorderWidth: number = 290;
    private deckCardBorderHeight: number = 200;
    private deckCardBorderOffset: number = 40;

    //Player 0 static elements displayed in an active game
    private player0CardBorderWidth: number = 450;
    private player0CardBorderHeight: number = 5;
    private player0CardBorderOffsetFromBottom: number = 270;

    //Player 1 (single opponent) static elements displayed in an active game
    private player1CardBorderWidth: number = 450;
    private player1CardBorderHeight: number = 5;
    private player1CardBorderOffsetFromTop: number = 190;


    constructor(manager: Manager) {
        this.manager = manager;
    }

    public handle() {
        this.createCanvas()
        this.createDeckStatics();
        this.createPlayer0Statics();
        this.createPlayer1Statics();

    }

    private createCanvas() {
        createCanvas(windowWidth, windowHeight);
        background(51, 65, 92);
    }

    private createDeckStatics() {
        strokeWeight(4);
        stroke(151, 157, 172); // use the color variable 'cardHolderStatics' for the fill later
        noFill();
        rect(windowWidth/2 - this.deckCardBorderWidth/2, windowHeight/2 - this.deckCardBorderHeight/2 - this.deckCardBorderOffset, this.deckCardBorderWidth, this.deckCardBorderHeight, 10);
    }

    private createPlayer0Statics() {
        fill(151, 157, 172); // use the color variable 'cardHolderStatics' for the fill later
        noStroke();
        rect(windowWidth/2 - this.player0CardBorderWidth/2, windowHeight - this.player0CardBorderOffsetFromBottom - this.player0CardBorderHeight, this.player0CardBorderWidth, this.player0CardBorderHeight, 10);
        text('YOU', windowWidth/2 - this.player0CardBorderWidth/2 + 350, windowHeight - this.player0CardBorderOffsetFromBottom - this.player0CardBorderHeight/2 - 20);
    }

    private createPlayer1Statics() {
        fill(151, 157, 172); // use the color variable 'cardHolderStatics' for the fill later
        noStroke();
        rect(windowWidth/2 - this.player1CardBorderWidth/2, this.player1CardBorderOffsetFromTop, this.player1CardBorderWidth, this.player1CardBorderHeight, 10);
    }
}