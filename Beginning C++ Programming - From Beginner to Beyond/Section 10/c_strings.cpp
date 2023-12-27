/*
    Sequence of characters:
        - contiguous in memory
        - implemented as an array of characters
        - terminated by a null character ('\0')
        - zero or null terminated string

    String Literal:
        - sequence of characters in double quotes
        - constant
        - automatically terminated with null character
    
    *array names and literal evaluate to their location in memory

    #include <cstring>
        - strcpy(str, "Hello ");  // copy
        - strcat(str, "there ");    // concat
        - strlen(str);  // length
        - strcmp(str, "Another ");  // bool compare

    #include <cstdlib>
        - conert strings to other types but all work with null terminated strings


*/