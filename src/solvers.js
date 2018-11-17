/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  let board = new Board({n:n});                                           
  
  let recursion = function(row){
    if (row === n) {
      return;
    }

    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
        recursion(row + 1);
      }
      board.togglePiece(row, i);
    }
  }
  // console.log(JSON.stringify(board.rows()));
   

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  let board = new Board({n:n});
  
  let recursion = function(row){
    if (row === n) {
      solutionCount++;
      return;
    }

    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
        recursion(row + 1);
      }
      board.togglePiece(row, i);
    }
  }

  recursion(0);

  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  let board = new Board({n:n});

  if(n === 2 || n === 3) {
    return 0;
  }
  
  let recursion = function(row){
    if (row === n) {
      solutionCount++;
      return;
    }

    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts() && !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts()) {
        recursion(row + 1);
      }
      board.togglePiece(row, i);
    }
  }

  recursion(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
