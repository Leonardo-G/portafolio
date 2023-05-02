import { ITecnologia } from "./proyectos";

export interface IConocimientos{
    id: number
    type: "icon" | "img";
    file: any;
    title: ITecnologia;
    color: string
}