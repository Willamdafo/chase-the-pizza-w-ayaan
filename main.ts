sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    donut.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    info.startCountdown(10)
})
let donut: Sprite = null
scene.setBackgroundColor(7)
let ghost = sprites.create(assets.image`ghost`, SpriteKind.Player)
controller.moveSprite(ghost)
donut = sprites.create(assets.image`donut`, SpriteKind.Food)
ghost.setStayInScreen(true)
