package com.book.model;

import lombok.Data;

@Data
public class BookDTO {
    private String title;
    private String author;
    private String publisher;
    private String description;
    private double price;
}
