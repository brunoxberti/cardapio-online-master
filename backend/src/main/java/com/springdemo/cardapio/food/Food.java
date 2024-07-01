package com.springdemo.cardapio.food;
import org.springframework.data.annotation.Id;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Table(name = "foods")
@Entity(name = "foods")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Food {

    @jakarta.persistence.Id
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(columnDefinition = "TEXT") //Coloca o tipo de image para "TEXT" no banco de dados
    private String image;
    @Column(columnDefinition = "TEXT")
    private String description;
    private List<String> ingridients;
    private Integer price;

    public Food(FoodRequestDTO foodRequestDTO) {
        this.image = foodRequestDTO.image();
        this.title = foodRequestDTO.title();
        this.description = foodRequestDTO.description();
        this.ingridients = foodRequestDTO.ingridients();
        this.price = foodRequestDTO.price();
    }


    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
