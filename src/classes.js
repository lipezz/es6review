class List {
    constructor(){        
        this.data = [];
    }    
    add(a,b){
        this.data.push(a);
        this.data.push(b);       
        console.log(this.data);
    }
}

class TodoList extends List {    
    constructor(){        
        super();
        this.usuario = 'Luiz';
    }    
    mostraUsuario(){
        console.log(this.usuario);
    }
    static soma(a,b){
        console.log(a+b);        
    }
}

const MinhaLista = new TodoList();
MinhaLista.mostraUsuario();
MinhaLista.add(500,600);
TodoList.soma(500,600); //static

const MinhaLista2 = new List();
MinhaLista2.add(500,5); //static
