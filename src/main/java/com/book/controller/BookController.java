package com.book.controller;

import com.book.Model.Book;
import com.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/book")
public class BookController {

    @Autowired
    private BookService bookService;


    @GetMapping("/all")
    public ResponseEntity<List<Book>> bookList(){
        return new ResponseEntity<>(bookService.findAll(), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public Book bookListById(@PathVariable int id){
        return bookService.findBookById((long)id);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addBook(@RequestPart("book") Book book, @RequestPart("image") MultipartFile file){
        try{
            Book newBook = bookService.addBook(book, file);
            return new ResponseEntity<>(newBook, HttpStatus.OK);
        }
        catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/image/{id}")
    public ResponseEntity<byte[]> fetchImage(@PathVariable long id) {
        Book book = bookService.findBookById(id); // make sure this handles nulls or exceptions
        byte[] imageFile = book.getImage();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);

        return new ResponseEntity<>(imageFile, headers, HttpStatus.OK);
    }

}
