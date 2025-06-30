package com.book.Service;


import com.book.Model.Book;
import com.book.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    public Book findById(Long id) {
        return bookRepository.findById(id).get();
    }
    public Book findByTitle(String title) {
//        return bookRepository.
        return null;
    }
}
