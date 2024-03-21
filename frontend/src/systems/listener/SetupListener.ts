import {Listener} from "../../api/event/Listener";
import {Manager} from "../../Manager";

export class SetupListener implements Listener {
    private manager: Manager;

    private centerX: number = 0;
    private centerY: number = 0;

    private deckCardBorderWidth: number = 300;
    private deckCardBorderHeight: number = 220;
    private separatorWidth: number = 500;
    private separatorHeight: number = 500;
    private textPadding: number = 15;

    constructor(manager: Manager) {
        this.manager = manager;
    }

    public handle() {
        this.createBoard();
        this.createDeckStatics();

        const players = this.manager.getPlayers();

        this.createPlayerStatic(0, this.centerX, 600, players[0].getName());
        this.createPlayerStatic(1, 1400, this.centerY, players[1].getName());
        this.createPlayerStatic(2, this.centerX, 270, players[2].getName());
        this.createPlayerStatic(3, 270, this.centerY, players[3].getName());
    }

    private verticalText(input: string, x: number, y: number) {
        push();
        this.setTextStroke();
        textAlign(CENTER, CENTER);
        const vt = input.split("").join("\n");
        text(vt, x, y);
        pop();
    }

    private setShapeStroke() {
        strokeWeight(4);
        stroke(150, 155, 170);
    }

    private setTextStroke() {
        strokeWeight(2);
        stroke(150, 155, 170);
        textFont("Verdana");
        textSize(28);
        fill(150, 155, 170);
    }

    private createBoard() {
        createCanvas(windowWidth, windowHeight);
        this.centerX = windowWidth / 2;
        this.centerY = windowHeight / 2;
        background(50, 65, 90);
    }

    private createDeckStatics() {
        this.setShapeStroke()
        noFill();
        rect(this.centerX - this.deckCardBorderWidth / 2, this.centerY - this.deckCardBorderHeight / 2, this.deckCardBorderWidth, this.deckCardBorderHeight, 10);
    }

    private createPlayerStatic(playerNumber: number, x: number, y: number, pName: string) {
        this.setTextStroke();

        switch (playerNumber) {
            case 0:
                this.setShapeStroke();
                line(x - this.separatorWidth / 2, y, x + this.separatorWidth / 2, y);
                this.setTextStroke();
                text(pName, x - this.separatorWidth / 2, y - this.textPadding);

                break;

            case 1:
                this.setShapeStroke();
                line(x, y - this.separatorHeight / 2, x, y + this.separatorHeight / 2);
                this.verticalText(pName, x - this.textPadding - 10, y - this.separatorHeight / 2 + 200);

                break;

            case 2:
                this.setShapeStroke();
                line(x - this.separatorWidth / 2, y, x + this.separatorWidth / 2, y);
                this.setTextStroke();
                text(pName, x - this.separatorWidth / 2, y + this.textPadding + 20);

                break;

            case 3:
                this.setShapeStroke();
                line(x, y - this.separatorHeight / 2, x, y + this.separatorHeight / 2);
                this.verticalText(pName, x + this.textPadding + 10, y - this.separatorHeight / 2 + 200);

                break;
        }
    }
}