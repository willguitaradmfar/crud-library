import { IsNotEmpty } from 'class-validator';


/**
 * Esta documentação pode ser visualizada no auto-complete
 * diretamente da aplicação ui
 */
export default class Book {
     
     id: number

     /**
      * Documentação do campo
      * Pode ser consultada no ui
      */
    @IsNotEmpty()
     name: string

     constructor(id: number, name: string){
        this.name = name
        this.id = id
     }

     static findByName(name : string): Book[]  {
          return Array(10).fill(new Book(1, `Book, ${name}`))
     }

     static findById(id : number): Book  {
          return new Book(id, `Book ${id}`)
     }

     save(): Book {
          return this
     }

     update(): Book {
          return this
     }

}