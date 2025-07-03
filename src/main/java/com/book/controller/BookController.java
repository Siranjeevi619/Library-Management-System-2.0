package com.book.controller;

import com.book.Model.Book;
import com.book.payload.ApiResponse;
import com.book.payload.Status;
import com.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/book")
@CrossOrigin
public class BookController {

    @Autowired
    private BookService bookService;


    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<Book>>> bookList(){
        try{
            List<Book> bookData = bookService.findAll();
            if(bookData.size() == 0){
                return ResponseEntity.status(400).body(new ApiResponse<>(Status.REJECTED, "0 Documents Found", new ArrayList<>()));
            }
            return  ResponseEntity.status(200).body(new ApiResponse(Status.SUCCESS, bookData.size()+" Document founded",bookData));
        }
        catch(Exception e){
            return  ResponseEntity.status(500).body(new ApiResponse(Status.REJECTED, e.getMessage(), new ArrayList<>()));
        }

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
    public ResponseEntity<ApiResponse<byte[]>> fetchImage(@PathVariable long id) {
        try {
            Book book = bookService.findBookById(id);
            if (book == null || book.getImage() == null) {
                return ResponseEntity.notFound().build();
            }

            byte[] imageFile = book.getImage();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            return ResponseEntity.status(200).body(new ApiResponse(Status.SUCCESS , "Image Fetch Successfully", imageFile));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


}
