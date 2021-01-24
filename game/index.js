const { Body, Game, Scene, Point, Line } = GameEngine;

const mainScene = new Scene ({
    name: 'mainScene',
    autoStart: true,
    
    loading(loader) {
        loader.addImage('cat', 'static/cat.jpg');
        loader.addJson('persons', 'static/persons.json');
    },

    init () {
        const catTexture = this.parent.loader.getImage('cat');

        this.cat = new Body (catTexture, {
            scale:0.25,
            anchorX: 0.5,
            anchorY: 0.5,
            x: this.parent.renderer.canvas.width / 2,
            y: this.parent.renderer.canvas.height / 2,
            debug: true,
            body: {
                x: 0,
                y: 0.5,
                width: 1,
                height: 0.5
            }
        });

        // this.point = new Point({
        //     x: this.cat.x,
        //     y: this.cat.y
        // });

        // this.line = new Line({
        //     x1: 0,
        //     y1: 0,
        //     x2: this.parent.renderer.canvas.width ,
        //     y2: this.parent.renderer.canvas.height
        // });

        this.add(this.cat);
    },

    update (timestamp) {
        const { keyboard } = this.parent;

        this.cat.rotation = timestamp / 1000;

        if (keyboard.arrowUp) {
            this.cat.y -= 1
        };
    }
});

const game = new Game ({
    el: document.body,
    width:500,
    height:500,
    background: 'green',
    scenes: [mainScene]
});