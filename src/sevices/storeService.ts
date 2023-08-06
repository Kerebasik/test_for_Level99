class StoreService{

  store:Storage

  constructor(store:Storage) {
    this.store = store
  }

  setItem(key:string, value:string){
    try {
      return this.store.setItem(key,value)
    } catch (e){
      console.log(e)
    }
  }

  getItem(key: string){
    try {
      return this.store.getItem(key);
    } catch (e){
      console.log(e)
    }
  };

  deleteItem(key:string){
    try {
      return this.store.removeItem(key)
    } catch (e){
      console.log(e)
    }
  }

}

const StoreServiceInstance = new StoreService(localStorage)

export { StoreServiceInstance }
