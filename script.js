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

const queensAttack = (n, k, r_q, c_q, obstacles) => {
    // keep minDistance for all directions (init for full lengths)
    const distances = {
        "up": n - r_q,
        "down": r_q - 1,
        "left": c_q - 1,
        "right": n - c_q,
        "up_left": Math.min(n - r_q, c_q - 1),
        "up_right": Math.min(n - r_q, n - c_q),
        "down_left": Math.min(r_q - 1, c_q - 1),
        "down_right": Math.min(r_q - 1, n - c_q)
    }
    
    //loop through obstacles to get min distances
    for(const [r, c] of obstacles) {
        // up and down paths
        if(c === c_q) {
            const up_diff = r - r_q;
            if(up_diff > 0) {
                distances.up = Math.min(distances.up, up_diff - 1);
            } else {
                distances.down = Math.min(distances.down, Math.abs(up_diff) - 1);
            }
        }
        // left and right paths
        if(r === r_q) {
            const right_diff = c - c_q;
            if(right_diff > 0) { 
                distances.right = Math.min(distances.right, right_diff - 1);
            } else {
                distances.left = Math.min(distances.left, Math.abs(right_diff) - 1);
            }
        }
        // up-left and down-right diagonal
        if((r_q - r) / (c_q - c) === -1) {
            const up_diff = r - r_q;
            const right_diff = Math.abs(c_q - c);
            if(up_diff > 0) { //upleft
                const up_left_diff = Math.min(up_diff, right_diff);
                distances.up_left = Math.min(distances.up_left, up_left_diff - 1);
            } else { //downright
                const down_right_diff = Math.min(Math.abs(up_diff), right_diff);
                distances.down_right = Math.min(distances.down_right, down_right_diff - 1);
            }
        }
        //up-right and down-left diagonal
        if((r_q - r) / (c_q - c) === 1) {
            const up_diff = r - r_q;
            const right_diff = Math.abs(c_q - c);
            if(up_diff > 0) {
                const up_right_diff = Math.min(up_diff, right_diff);
                distances.up_right = Math.min(distances.up_right, up_right_diff - 1);
            } else {
                const down_left_diff = Math.min(Math.abs(up_diff), right_diff);
                distances.down_left = Math.min(distances.down_left, down_left_diff - 1);
            }
        }
        
    }
    //return total distances
    let totalMoves = Object.values(distances).reduce((p,v) => p + v);
    console.log(totalMoves);
    return totalMoves;
}

/////////////////////////////////////////////////////// not time efficient /////////////////////////////////////////////////////////////////// 
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


