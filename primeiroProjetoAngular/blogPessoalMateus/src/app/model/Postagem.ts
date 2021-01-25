import { Tema } from "./Tema"
import { Usuario } from "./Usuario"
import { User } from "./User"

export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public usuario: Usuario
    public tema: Tema
}