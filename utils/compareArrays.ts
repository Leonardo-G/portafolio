import { ITecnologia } from "../interface/proyectos";

export const compareArrays = ( array1: ITecnologia[], array2: ITecnologia[] ): boolean => {
    const array = [] as ITecnologia[] ;

    if ( array2.length === 0 ) return false;

    for( let i = 0; i <= array1.length; i++ ){
        for ( let j = 0; j <= array2.length; j++ ){
            if ( j === i ) {
                array.push( array2[j] );
            }
        }
    }
    console.log(array)
    return array.length > 0;
} 