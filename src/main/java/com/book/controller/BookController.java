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

    // Get book by ID
    @GetMapping("/{id}")
    public Book bookListById(@PathVariable int id) {
        return bookService.findBookById((long) id);
    }

    // Add book with image upload
    @PostMapping(value = "/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> addBook(
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

            // Save only the relative path to be used in frontend
            book.setImageUrl("/api/book/image/" + fileName);

            bookService.saveBook(book);
            return ResponseEntity.ok("Book added successfully!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    // Serve image file to browser
    @GetMapping("/image/{fileName:.+}")
    public ResponseEntity<byte[]> getImage(@PathVariable String fileName) {
        try {
            Path imagePath = Paths.get(uploadDir).resolve(fileName).normalize();
            byte[] imageBytes = Files.readAllBytes(imagePath);

            String contentType = Files.probeContentType(imagePath);
            if (contentType == null) {
                contentType = "application/octet-stream";
            }

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType(contentType));

            return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
