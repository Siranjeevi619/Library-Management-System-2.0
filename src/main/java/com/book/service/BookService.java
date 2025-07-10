package com.book.service;

import com.book.model.Book;
import com.book.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<com.book.model.Book> findAll() {
        return bookRepository.findAll();
    }

    public Book findBookById(long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public void  saveBook(Book book) {
        bookRepository.save(book);
    }

    public List<Book> deleteAll() {
        List<Book> books = bookRepository.findAll();
         bookRepository.deleteAll();
         return books;
    }
}
