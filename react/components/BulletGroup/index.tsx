import React, {PropsWithChildren} from 'react';
import { BulletsSchema } from './BulleTypes';
import {useDevice} from 'vtex.device-detector';
import {useListContext, ListContextProvider} from 'vtex.list-context';
import {useCssHandles} from 'vtex.css-handles';
// ListContextProvider es un component que nos permite ser un proveeddor de este contexto de lista.

import { getBulletsAsTSXList } from './modules/bulletsAsList';
// Generar los bullets como una lista
// Las propiedades deben ser iguales incluso si son obligatorios y opcionales

export interface BulletGroupProps {
    bullets: BulletsSchema
}
const BulletGroup = ({
    bullets,
    children
}:PropsWithChildren<BulletGroupProps>)=> {               // PropsWithChildren va a aceptar una interfaz
    const {isMobile} = useDevice();
    const {list} = useListContext() || []                // Si es indefinido lo declaramos vacio
    console.log(bullets, children, list);
    console.log('Lista de Children:::', children);                     // Obtiene array vacio
    console.log('Lista de Bullets:::', list);                     // Obtiene array vacio
    console.log('Bullets:::', bullets);                     
    // Obtiene objeto => {image: "mi-imagen.png", link: {url: '/'}, titleBullet:"Computadoras"}

    

    const bulletsGroup = getBulletsAsTSXList(bullets);
    const newListContextValue = list.concat(bulletsGroup)         // Concatenar todos los bullets

    console.log('bulletsGroup:::',bulletsGroup);
    console.log('bulletsGroup:::',newListContextValue);
    const CSS_HANDLES = [
        "bullet__container"
    ]
    const handles = useCssHandles(CSS_HANDLES);

    return (                                                      // list es un parametro que necesita una lista de contexto y que va a proveer esa lista a los elementos hijos que los lleguen a necesitar (se utiliza para un slider)
                            
        <ListContextProvider list={newListContextValue}>
            {           
                isMobile
                ?
                <div>
                    <div>Estamos en mobile</div>
                    <div className={handles["bullet__container"]}>
                        {bulletsGroup}
                    </div>
                </div>
                : children                                     
                
            } 
                                                       
        </ListContextProvider>
        // En Desktop coloco children porque quiero mostrar un slider con los hijos.
    )
}
export default BulletGroup;


// Comportammiento en mobile va a verse como grilla
// Comportammiento en desktop va a verse como un slicer