package com.book.controller;

import com.book.Model.Book;
import com.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
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
@RequestMapping("/api/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @Value("${upload.dir}")
    private String uploadDir;

    @GetMapping("/all")
    public ResponseEntity<List<Book>> bookList(){
        return new ResponseEntity<>(bookService.findAll(), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public Book bookListById(@PathVariable int id){
        return bookService.findById((long)id);
    }



    @PostMapping("/add")
    public ResponseEntity<?> addBook(@RequestParam("name") String name,
                                     @RequestParam("author") String author,
                                     @RequestParam("description") String description,
                                     @RequestParam(value = "image", required = false) MultipartFile image) {
        Book book = new Book();
        book.setTitle(name);
        book.setAuthor(author);
        book.setDescription(description);
        if (image != null && !image.isEmpty()) {
            try {
                String fileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
                Path uploadPath = Paths.get("uploads/books");
                Files.createDirectories(uploadPath);
                Path filePath = uploadPath.resolve(fileName);
                Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
                book.setImageUrl("/images/books/" + fileName);
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Image upload failed.");
            }
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(bookService.addBook(book));
    }

}
