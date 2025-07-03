package com.book.service;

import com.book.Model.Book;
import com.book.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<com.book.Model.Book> findAll() {
        return bookRepository.findAll();
    }

    public Book findBookById(long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public Book addBook(Book book, MultipartFile file) throws Exception{
        book.setImage(file.getBytes());
        return bookRepository.save(book);
    }



}
