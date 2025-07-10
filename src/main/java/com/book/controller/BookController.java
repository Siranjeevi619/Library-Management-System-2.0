package com.book.controller;

import com.book.model.Book;
import com.book.model.BookDTO;
import com.book.payload.ApiResponse;
import com.book.payload.Status;
import com.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/book")
@CrossOrigin
public class BookController {

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Autowired
    private BookService bookService;

    // Get all books
    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<Book>>> bookList() {
        try {
            List<Book> bookData = bookService.findAll();
            if (bookData.isEmpty()) {
                return ResponseEntity.status(400)
                        .body(new ApiResponse<>(Status.REJECTED, "0 Documents Found", new ArrayList<>()));
            }
            return ResponseEntity.ok(new ApiResponse<>(Status.SUCCESS, bookData.size() + " Document(s) found", bookData));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(new ApiResponse<>(Status.REJECTED, e.getMessage(), new ArrayList<>()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Book>> bookListById(@PathVariable int id) {
        try {
            Book book = bookService.findBookById((long) id);
            if (book == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ApiResponse<>(Status.FAILED, "Book not found with ID: " + id, null));
            }
            return ResponseEntity.ok(new ApiResponse<>(Status.SUCCESS, "Book found", book));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(Status.REJECTED, e.getMessage(), null));
        }
    }


    @PostMapping(value = "/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse<?>> addBook(
            @RequestPart("book") BookDTO bookDTO,
            @RequestPart("image") MultipartFile imageFile) {
        try {
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            String fileName = imageFile.getOriginalFilename();
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(imageFile.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            Book book = new Book();
            book.setTitle(bookDTO.getTitle());
            book.setAuthor(bookDTO.getAuthor());
            book.setPublisher(bookDTO.getPublisher());
            book.setDescription(bookDTO.getDescription());
            book.setPrice(bookDTO.getPrice());

            book.setImageUrl("/api/book/image/" + fileName);

            bookService.saveBook(book);
            return ResponseEntity.status(200).body(new  ApiResponse<>(Status.SUCCESS, "Book Added Successfully", book));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(new ApiResponse<>(Status.REJECTED, "INTERNAL SERVER ERROR: "+e.getMessage(), e ));
        }
    }

    @GetMapping("/image/{fileName:.+}")
    public ResponseEntity<ApiResponse<?>> getImage(@PathVariable String fileName) {
        try {
            Path imagePath = Paths.get(uploadDir).resolve(fileName).normalize();
            byte[] imageBytes = Files.readAllBytes(imagePath);

            String contentType = Files.probeContentType(imagePath);
            if (contentType == null) {
                contentType = "application/octet-stream";
            }

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType(contentType));

            return  ResponseEntity.status(200).body(new ApiResponse<>(Status.SUCCESS, "Image Fetched Successfully", imageBytes));
        } catch (Exception e) {
            return  ResponseEntity.status(200).body(new ApiResponse<>(Status.REJECTED, "Internal Server Error: "+e.getMessage(), e));
        }
    }


    @DeleteMapping("/delete-all")
    public ResponseEntity<ApiResponse<?>> deleteAllBooks(){
        try{
            List<Book> books = bookService.deleteAll();
            if(books.isEmpty()){
                return ResponseEntity.status(400).body(new ApiResponse<>(Status.FAILED, "BOOK LIST IS EMPTY", books));
            }
            return ResponseEntity.status(200).body(new ApiResponse<>(Status.SUCCESS, "BOOKS DELETED SUCCESSFULLY AND BOOKS FOUND: "+books.size() , books));

        }
        catch(Exception e){
            return ResponseEntity.status(500).body(new ApiResponse<>(Status.REJECTED, "INTERNAL_SERVER_ERROR : "+e.getMessage(), e));
        }
    }
}
