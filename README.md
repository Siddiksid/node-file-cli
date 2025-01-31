`# Node.js CLI File Utilities

This is a simple command-line tool to handle some basic file utilities such as creating files, deleting files, inserting content into files, and reading file content.

## Features

-   **Create a file**: Create a new file with a specific name.
-   **Delete a file**: Remove a file by its name.
-   **Insert content into a file**: Add content to an existing file.
-   **Read file content**: Read and display the content of a file.
-   **Optional Commands**: Speak, bark, praise, and GOT-related phrases.

## Installation

To use this CLI tool, make sure you have [Node.js](https://nodejs.org) installed. Then, clone the repository and run the following commands:

```bash
npm install` 

## Commands

### 1. `mkfile <file>`

Creates a new file with the name provided if it does not already exist.

bash

`node cli mkfile a.txt` 

If the file already exists, a message will inform you of that.

### 2. `delfile <file>`

Deletes a file with the provided name.

bash

`node cli delfile a.txt` 

If the file does not exist, an error message will be displayed.

### 3. `insertfile <file> <content>`

Insert the specified content into an existing file.

bash

`node cli insertfile a.txt "New content to insert"` 

If the file does not exist, it will display an error message.

### 4. `readfile <file>`

Reads and displays the content of the file.

bash

`node cli readfile a.txt` 

If the file does not exist, an error message will be displayed.

### 5. Optional Commands

You can also use some fun phrases through the options:

-   `node cli --speak`
-   `node cli --bark`
-   `node cli --praise`
-   `node cli --got`

### Output Examples:

-   `--speak`: "Talk to the Hand!!"
-   `--bark`: "Woof!!!! Woof!!!!"
-   `--praise`: "All hail the king!!!"
-   `--got`: "The North Remembers"
