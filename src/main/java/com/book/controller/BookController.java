package com.book.controller;

import com.book.Model.Book;
import com.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookController {

    @Autowired
    private BookService bookService;


    @GetMapping("/all")
    public List<Book> bookList(){
        return bookService.findAll();
    }


    @GetMapping("/{id}")
    public Book bookListById(@PathVariable int id){
        return bookService.findById((long)id);
    }



    @PostMapping("/add")
    public Book addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }
}
