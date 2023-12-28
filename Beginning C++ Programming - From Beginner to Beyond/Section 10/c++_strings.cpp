/*
    std::string is a Class in the Standard Template Library
        #include <stirng>
        std namespace
        -   contiguous in memory
        -   dynamic size
        -   work with input and output streams
        -   lots of useful member functions
        -   our familiar operators can be used (+, =, <, <=, >, >=, +=, ==, !=, [], ...)
        -   can be easily converted into C-style Strings if needed
        -   safer

    std::string Initialization:
        -   string s1;                  // Empty
        -   string s2 {"Frank"};        // Frank
        -   string s3 {s2};             // Frank
        -   string s4 {"Frank", 3}      // Fra
        -   string s5 {s3, 0, 2}        // Fr
        -   string s6(3, 'X');          // XXX

    Concatenation:
        + +=
        -   Cannot concatenate only C-style Strings (mixed is ok):
            string sentence = "Hello " + "World!"; // Doesn't compile

    Accesing characters:
        -   array indexing []
        -   vector method .at()
    
    Comparison Operators:
        == != > >= < <=
        -   Cannot compare only C-Style Strings
        -   Less/Greater operators compare lexcial/ASCII values of characters

    Methods:
        .subtr(start_index, length); returns substring
        .find("search string/char", start_index); return beginning index of found string/char, or string::npos if no position
        .erase(start_index, length); MUTATES and returns new string
        .clear() MUTATES and returns empty string
        .length() returns length of string

    Functions:
        getline(I/O stream, string_variable, 'char_to_stop_at')




*/
#include <iostream>
#include <string>

using namespace std;

int main () {

    cout << endl;
    return 0;
}