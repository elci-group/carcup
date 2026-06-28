extends Node2D

var game

func _ready():
    game = Game.new()
    add_child(game)