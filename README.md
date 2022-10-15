# Sudoku solver

this is a basic sudoku solver for solving easy to medium puzzles

# basic workflow

each cell has an initial possible numbers that it can hold
### [1,2,3,4,5,6,7,8,9]

the application loops through each cells conditions and filters out the numbers that is not valid/already in use
at the end all the cells containing just one possible number will be filled in, the process repeat it self till all the cells are filled

# CONS!!
* if the cell contains more than one possible number the loop stops and the user must manually enter another number to continue

