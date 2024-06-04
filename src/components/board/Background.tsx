export default function Background() {
    return (
        <div
            className="h-screen bg-gradient-to-t from-menu-gradient-start via-menu-gradient-transition to-menu-gradient-end">
            <div style={{position: 'absolute', top: '560px', left: '316px', width: '808px', height: '215px'}}
                 className="rounded-lg bg-player-deck opacity-20"></div>

            <div style={{position: 'absolute', top: '30px', left: '420px', width: '600px', height: '170px'}}
                 className="rounded-lg bg-enemy-deck opacity-15"></div>
            <div style={{position: 'absolute', top: '110px', left: '1170px', width: '170px', height: '600px'}}
                 className="rounded-lg bg-enemy-deck opacity-15"></div>
            <div style={{position: 'absolute', top: '110px', left: '100px', width: '170px', height: '600px'}}
                 className="rounded-lg bg-enemy-deck opacity-15"></div>

            <div style={{position: 'absolute', top: '255px', left: '545px', width: '350px', height: '250px'}}
                 className="rounded-lg bg-enemy-deck opacity-15"></div>
        </div>
    );
}