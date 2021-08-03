/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n   //size of the board ex. 4x4 
 *  2. INTEGER k    
 *  3. INTEGER r_q  //row of the queen start
 *  4. INTEGER c_q   //column of the queen start
 *  5. 2D_INTEGER_ARRAY obstacles   //number of obstacles on the board
 */


//not time efficient 
const checkUps = (grid, queen_position) => {
    let [qr, qc] = queen_position;
    qr--;
    let possibleMoves = 0;
    while(qr >= 0 && grid[qr][qc] === 0) {
        grid[qr][qc] = 'X';  //puts an 'X' for possible moves up
        possibleMoves++;
        qr--;
    }
    return possibleMoves;
}

const checkDowns = (grid, queen_position) => {
    let [qr, qc] = queen_position;
    qr++;
    let possibleMoves = 0;
    while(qr >=0 && qr < grid.length && grid[qr][qc] === 0) {
        grid[qr][qc] = 'X';  //add 'x' to the grid for down moves
        possibleMoves++;
        qr++;
    }
    return possibleMoves;
}

const checkLefts = (grid, queen_position) => {
    let [qr, qc] = queen_position;
    qc--;
    let possibleMoves = 0;
    while(qc >= 0 && grid[qr][qc] === 0) {
        grid[qr][qc] = 'X';  //puts an 'X' for possible moves up
        possibleMoves++;
        qc--;
    }
    return possibleMoves;
}

const checkRights = (grid, queen_position) => {
    let [qr, qc] = queen_position;
    qc++;
    let possibleMoves = 0;
    while(qr >= 0 && grid[qr][qc] === 0) {
        grid[qr][qc] = 'X';  //puts an 'X' for possible moves up
        possibleMoves++;
        qc++;
    }
    return possibleMoves;
}

const checkUpLefts = (grid, queen_position) => {
    let [qr, qc] = queen_position;
    qr--;
    qc--;
    let possibleMoves = 0;
    while(qc < grid.length && qr >= 0 && grid[qr][qc] === 0) {
        grid[qr][qc] = 'X';  //puts an 'X' for possible moves up
        possibleMoves++;
        qr--;
        qc--;
    }
    return possibleMoves;
}

const checkUpRights = (grid, queen_position) => {
    let [qr, qc] = queen_position;
    qr--;
    qc++;
    let possibleMoves = 0;
    while(qc < grid.length && qr >= 0 && grid[qr][qc] === 0) {
        grid[qr][qc] = 'X';  //puts an 'X' for possible moves up
        possibleMoves++;
        qr--;
        qc++;
    }
    return possibleMoves;
}

const checkDownLefts = (grid, queen_position) => {
    let [qr, qc] = queen_position;
    qr++;
    qc--;
    let possibleMoves = 0;
    while(qc >= 0 && qr < grid.length && grid[qr][qc] === 0) {
        grid[qr][qc] = 'X';
        possibleMoves++;
        qr++;
        qc--
    }
    return possibleMoves;
}

const checkDownRights = (grid, queen_position) => {
    let [qr, qc] = queen_position;
    qr++;
    qc++;
    let possibleMoves = 0;
    while(qc >= 0 && qr < grid.length && grid[qr][qc] === 0) {
        grid[qr][qc] = 'X';
        possibleMoves++;
        qr++;
        qc++;
    }
    return possibleMoves;
}


const queensAttack = (n, k, r_q, c_q, obstacles) => {
    //n is grid size n x n
    //k = number of obstacles
    //queen start at r_q, c_q
    
    //create grid
    const grid = Array.from({length: n}, () => new Array(n).fill(0));
    //add obstacles
    for(const [r,c] of obstacles) {
        grid[r-1][c-1] = 1
    };
    //place queen
    const queen_position = [r_q-1, c_q-1];
    grid[r_q-1][c_q-1] = 'Q';
    //counter for possible moves
    let possibleMoves = 0;
    //go through all 8 directions
    //up
    possibleMoves += checkUps(grid, queen_position);
    //down
    possibleMoves +=checkDowns(grid, queen_position);
    //left
    possibleMoves +=checkLefts(grid, queen_position);
    //right
    possibleMoves +=checkRights(grid, queen_position);
    //upleft
    possibleMoves +=checkUpLefts(grid, queen_position);
    //upright
    possibleMoves +=checkUpRights(grid, queen_position);
    //downleft
    possibleMoves +=checkDownLefts(grid, queen_position);
    //downrights
    possibleMoves +=checkDownRights(grid, queen_position);
    
    
    console.log(grid);
    return possibleMoves;
}
