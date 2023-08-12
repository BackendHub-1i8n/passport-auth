import { Client, USER_TABLE, clientSchema } from './user.model.js'

export function setupModels(){
  Client.init()
}
