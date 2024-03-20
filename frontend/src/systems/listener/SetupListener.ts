import {Listener} from "../../api/event/Listener";
import {Manager} from "../../Manager";

export class SetupListener implements Listener {

    private manager: Manager;

    private _player0Name: string = 'PLACEHOLDER';
    private _player2Name: string = 'PLACEHOLDER';
    private _player3Name: string = 'PLACEHOLDER';
    private _player4Name: string = 'PLACEHOLDER';

    private centerX: number = 0; // set in handle()
    private centerY: number = 0; // set in handle()

    private dCBWidth: number = 300;
    private dCBHeight: number = 220;
    private separatorWidth: number = 500;
    private separatorHeight: number = 500;
    private textPadding: number = 15;

    constructor(manager: Manager) {
        this.manager = manager;
    }

    //------------------------------------------------------------------------------------------------------------------

    set player4Name(value: string) {
        this._player4Name = value;
    }
    set player3Name(value: string) {
        this._player3Name = value;
    }
    set player2Name(value: string) {
        this._player2Name = value;
    }
    set player0Name(value: string) {
        this._player0Name = value;
    }

    //------------------------------------------------------------------------------------------------------------------

    public handle() {
        this.createBoard();
        this.createDeckStatics();

        this.createPlayerStatic(0, this.centerX, 600, this._player0Name);
        this.createPlayerStatic(2, 1400, this.centerY, this._player2Name);
        this.createPlayerStatic(3, this.centerX, 270, this._player3Name);
        this.createPlayerStatic(4, 270, this.centerY, this._player4Name);
    }

    //------------------------------------------------------------------------------------------------------------------

    private verticalText(iText: string, x: number, y: number){
        push();
        textAlign(CENTER, CENTER);
        const vt = iText.split('').join('\n');
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
        textFont('Verdana');
        textSize(28);
        fill(150, 155, 170);
    }

    //------------------------------------------------------------------------------------------------------------------

    private createBoard() {
        createCanvas(windowWidth, windowHeight);
        this.centerX = windowWidth / 2;
        this.centerY = windowHeight / 2;
        background(50, 65, 90);
    }

    private createDeckStatics() {
        this.setShapeStroke()
        noFill();
        rect(this.centerX - this.dCBWidth / 2, this.centerY - this.dCBHeight / 2, this.dCBWidth, this.dCBHeight, 10);
    }

    private createPlayerStatic(playerNumber: number, x: number, y: number, pName: string) {
        this.setTextStroke();

        if (playerNumber === 0) {
            this.setShapeStroke();
            line(x - this.separatorWidth / 2, y, x + this.separatorWidth / 2, y);
            this.setTextStroke();
            text(pName, x - this.separatorWidth / 2, y - this.textPadding);
        } else if (playerNumber === 3) {
            this.setShapeStroke();
            line(x - this.separatorWidth / 2, y, x + this.separatorWidth / 2, y);
            this.setTextStroke();
            text(pName, x - this.separatorWidth / 2, y + this.textPadding + 20);
        } else if (playerNumber === 2) {
            this.setShapeStroke();
            line(x, y - this.separatorHeight / 2, x, y + this.separatorHeight / 2);
            this.setTextStroke();
            this.verticalText(pName, x - this.textPadding - 10, y - this.separatorHeight / 2 + 200);
        } else {
            this.setShapeStroke();
            line(x, y - this.separatorHeight / 2, x, y + this.separatorHeight / 2);
            this.setTextStroke();
            this.verticalText(pName, x + this.textPadding + 10, y - this.separatorHeight / 2 + 200);
        }
    }
}