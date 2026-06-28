extends Node

var cards = []
func _init():
    for i in range(4):
        for j in range(13):
            cards.append(Card.new(i, j))