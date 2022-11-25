import React from 'react';
import {Link} from 'vtex.render-runtime';
import {useCssHandles} from 'vtex.css-handles';
import {LinkBullet} from './BulleTypes';
import './styles.css';

type Props = {
    src: string
    titleBullet: string
    link: LinkBullet
}

const Bullet = (
    {src, titleBullet,link } : Props
) => {
    console.log("Datos de mi bullet:::",src, titleBullet,link);
    const CSS_HANDLES = [
        "bullet__item",
        "bullet__item--title",
        "bullet__item--image",
        "bullet__item--link"
    ];
    const handles = useCssHandles(CSS_HANDLES); // Esta constante es la responsable de mostrar una clase de Vtex IO como se conocen normalmente.
    
    return (
        <div className={`pt1 pl5 ${handles["bullet__item"]}`}>
            <Link 
                to = {link.url}
                className={handles["bullet__item--link"]}       // No se puede llamar una variable en javascript con --
            >
                <img src={src} alt={titleBullet} className={handles["bullet__item--image"]} />
                <p className={`${handles["bullet__item--title"]} externalClass`}>{titleBullet}</p>
            </Link>  
        </div>
    );
}

Bullet.schema = {
    title : "Bullet",
    type : "object",
    properties :{
        src :{
            title : ".:Imagen Bullet:.",
            type: "string",
            widget : {
                "ui:widget": "image-uploader"
            }
        }
    }
}

export default Bullet;


//vtex.render-runtime => permite refrescar evento, manejar un link y no sair de un single page y no tener que volver a refrescar la informacion. Ya esta instalada por defecto.