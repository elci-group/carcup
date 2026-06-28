extends Node

var deck
var current_card
func _init():
    deck = Deck.new()
    current_card = deck.cards[0]