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
  
  for(let i = 0; i < board.rows().length; i++ ){
    // console.log(i);
    board.togglePiece(i,i);
  }
  // console.log(JSON.stringify(board.rows()));
   
 let solution = board;

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  let board = new Board({n:n});
  let recursiveCall = function(board, rookCount = 0, rowIndex = 0, colIndex = 0 ){

    console.log("BEGINNING");
    console.log(rookCount);

    board.togglePiece(rowIndex, colIndex);
    rookCount++;

    for (let r = rowIndex; r < board.rows().length; r++) {
      for (let c = colIndex; c < board.rows().length; c++) {
        
        console.log("Unchecked board: " + JSON.stringify(board.rows()));

      //check if solution found 
        if(!board.hasAnyColConflicts() && !board.hasAnyRowConflicts() && rookCount === n){
          solutionCount++;
          board.togglePiece(r,c);
          return
        }

        //check if conflict 
        if( board.hasAnyColConflicts() || board.hasAnyRowConflicts() ){
          console.log("Found Conflict");
          console.log("R: "+r);
          console.log("C: "+c);
          board.togglePiece(r,c);
          return;
        }
        // c++;
        // if(c === n){
        //   r++;
        //   c=0;
        // }
        console.log("final RI:"+r);
        console.log("final CI:"+c);
        console.log("ENDING");
        recursiveCall(board,rookCount,r,c); 
      }
    }
  }

  recursiveCall(board);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
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
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
