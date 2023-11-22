class Sudoku{
    constructor(){
        this.cadena = "3.4.69.5....27...49.2..4....2..85.198.9...2.551.39..6....8..5.32...46....4.75.9.6";
        this.filas = 9;
        this.columnas = 9;
        this.tablero = [9][9];
    }

    start(){
        var index = 0;
        for(var i = 0; i < this.filas; i++){
            for(var j = 0; j < this.columnas; j++){
                var num = this.cadena[index];
                if(num != '.'){
                    this.tablero[i][j] = num;
                }
            }
        }
    }
    createStructure(){
        for(var i = 0; i < this.filas; i++){
            for(var j = 0; j < this.columnas; j++){
                var cell = this.tablero[i][j];
                if(cell != '.'){
                    document.write("<p>" +  cell + "<p>");
                }
            }
        }
    }

    paintSudoku(){
        this.createStructure();
    }
}