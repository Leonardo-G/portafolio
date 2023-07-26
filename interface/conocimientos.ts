import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { ITecnologia } from "./proyectos";

export interface IConocimientos{
    id: number
    type: "icon" | "img";
    file: string | IconDefinition;
    title: ITecnologia;
    color: string;
    stack: 'front' | 'back' | 'basic' | 'other'
}