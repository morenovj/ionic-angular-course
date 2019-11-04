import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [{
    id: 'r1',
    title: 'Schnitzel',
    imageUrl: 'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5-500x500.jpg',
    ingredients: ['French Fires', 'Pork', 'Salad']

  },
  {
    id: 'r2',
    title: 'Spaghetti',
    imageUrl: 'https://www.foodiecrush.com/wp-content/uploads/2017/09/My-Moms-Homemade-Spaghetti-and-Meat-Sauce-foodiecrush.com-017-683x1024-1.jpg',
    ingredients: ['Spaghetti', 'Meat', 'Tomatoes']

  }];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes]; // Copia del Array original
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => { // Funcion defecto para buscar en la lista
      return recipe.id === recipeId;
    })}; // Igual que en el all usamos los puntos para crear una copia
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => { // Para borrar segun verdadero o falso
      return recipe.id !== recipeId;
    });
  }
}
