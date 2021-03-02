import products from '../helpers/products.json';


export default class Product {

  public static byCategory(category: number): any {
    switch(category) {
      case 1:
        return products['beverages'];
      case 2:
        return products['fruits_vegetables'];
      case 3:
        return products['meat'];
      case 4:
      default:
        return products['dairy'];
    }
  }

}