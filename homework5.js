class Groceries {
    constructor (name, type) {
        this.name = name;
        this.type = type;
    }

    describe() {
        return '${this.name} buy ${this.type}.';
    }
    }

class List {
    constructor(name){
        this.name = name;
        this.Groceries = [];
    }

    addIngredient(ingredient) {
        if(ingredient instanceof Vegtables ) {
            this.ingredients.push(ingredient);
        } else {
            throw new Error( 'This ingreident is not on the list. Argument is not ingredient needed: ${ingredient}');
        }

    }
    describe() {
        return '${this.name} has ${this.ingredients.length} ingredients.';
    }
}

class Menu {
    constructor() {
        this.lists =[];
        this.selectedList = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while(selection !=0) {
            switch(selection) {
                case '1':
                    this.createList(); //these are methods
                    break;
                case '2':
                    this.viewList(); //these methods need to be described later
                    break;
                case '3':
                    this.deleteIngredientFromList();
                    break;
                case '4':
                    this.displayIngredientsInList();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
    
        alert('Thank you!');
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new list
        2) view list
        3) delete ingredient
        4) display ingredients
        `);
    }

    showListMenuOptions(ingredientInformation) {
        return prompt(`
        0) back
        1) create grocery ingredient
        2) delete grocery ingredient

        -------------------------
        ${ingredientInformation}
        `);
    }

    displayIngredientsInList() {
        let listString = '';
        for (let i =0; i < this.lists.length; i++ ) {
            listString += i + ') ' + this.lists[i].name + '\n';
        }
        alert(listString);
    }
    createList(){
        let name = prompt('Enter name for new ingredient');
        this.lists.push(new List(name));
    }
    viewList(){
        let index = prompt('Enter the index of ingredient you want to view');
        if (index > -1 && index < this.lists.length) {
            this.selectedList = this.lists[index];
            let description = 'Ingredient Name' + this.selectedList.name + '\n';
            
            for (let i=0; i< this.selectedList.Groceries.length; i++) {
                description += i + ') ' + this.selectedList.Groceries[i].name + ' - ' + this.selectedList.Groceries[i].type + '\n';

            }
            let selection = this.showListMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createGroceries();
                    break;
                case'2':
                this.deleteGroceries();
            }
        }
    }
    createGroceriesIngredient() {
        let name = promt('Enter ingredient name:');
        let type = promt('Enter fruit or vegtable:');
        this.selectedGroceries.groceries.push(new List(name, type));
    }


    deleteGroceriesIngredient(){
        let index = prompt('Enter ingredient you need to remove:');
        if (index > -1 && index < this.selectedList.Groceries.length) {
            this.selectedList.Groceries.splice(index, 1);
        }
    
    }
}

let menu = new Menu();
menu.start();