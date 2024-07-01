package com.springdemo.cardapio.food;

import java.util.List;

public record FoodRequestDTO(String title, String image, String description, List<String> ingridients, Integer price) {
}
    