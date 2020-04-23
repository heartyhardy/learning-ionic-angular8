import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


const STORAGE_KEY = "USER-TOKEN";

export interface UserStorage{
  id: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: UserStorage = null;

  constructor(private storage: Storage) { }

  // Add userData
  addUserData(userData: UserStorage):Promise<any>{
    return this.storage.get(STORAGE_KEY).then((userStores: UserStorage[]) => {
      if(userStores){
        return new Promise<any>((resolve, reject) => {
          resolve(userStores);
        })
      }else{
        return this.storage.set(STORAGE_KEY, userData);
      }
    });
  }

  //Read userData
  readUserData():Promise<any>{
    return this.storage.get(STORAGE_KEY);
  }


  //Save last result
  saveUserData(userData: UserStorage):void{
    this.currentUser = userData;
  }

  //Get last result
  getUserData():UserStorage{
    return this.currentUser
  }
  
}
