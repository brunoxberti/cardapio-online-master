package com.springdemo.cardapio.food;

import java.util.List;

public record FoodResponseDTO(Long id, String title, String image, String description, List<String> ingridients, Integer price) {

    public FoodResponseDTO(Food food) {
        this(food.getId(), food.getTitle(), food.getImage(), food.getDescription(), food.getIngridients(), food.getPrice());
    }

}
