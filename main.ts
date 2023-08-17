namespace SpriteKind {
    export const Player_2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    info.player1.changeScoreBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player_2, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.player2.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player_2, sprites.dungeon.floorLight0, function (sprite, location) {
    info.player2.changeScoreBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.player1.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.setBackgroundImage(assets.image`Fondo`)
tiles.setCurrentTilemap(tilemap`Nivel 1`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Jugador 1`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Jugador 2`, SpriteKind.Player))
let Scroll = sprites.create(assets.image`Scroll`, SpriteKind.Enemy)
Scroll.setFlag(SpriteFlag.Invisible, true)
Scroll.setFlag(SpriteFlag.GhostThroughWalls, true)
Scroll.ay = -9
scene.cameraFollowSprite(Scroll)
controller.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
controller.player2.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 100, 0)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), sprites.castle.tileDarkGrass2)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), sprites.castle.tileGrass2)
tiles.placeOnRandomTile(Scroll, sprites.castle.tileGrass2)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
info.player1.setScore(20)
info.player2.setScore(20)
