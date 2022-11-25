import React from 'react';
import Bullet from '../Bullet';
import { BulletsSchema} from '../BulleTypes';
// import { BulletsSchema, LinkBullet } from '../BulleTypes';

// type Bullet = {
//     image : string
//     titleBullet ?: string
//     link ?: LinkBullet
// }
export const getBulletsAsTSXList = (
    bullets : BulletsSchema
) => {                              //const getBulletAsTSX = ( ) => ( ... )  Se puede obviar el return
    return (
                bullets.map((bullet:any, index)=>{
                // bullets.map((bullet:Bullet, index)=>{
                    return (
                        // <div key={index}>
                        //     <a href={bullet?.link?.url ? bullet?.link?.url : ''}>
                        //         <p>{bullet?.titleBullet}</p>
                        //         <p>{bullet.image}</p>
                        //     </a>
                        // </div>
                        <Bullet 
                            key={index}
                            src = {bullet.image}
                            titleBullet = {bullet?.titleBullet}
                            link = {
                                bullet.link? bullet.link 
                                : 
                                {
                                    url : "string",
                                    attributeNofollow : false,
                                    attributeTitle : "",
                                    openNewTab: false,
                                    newTab : false
                                }
                            }
                        />
                    )
                })
    )
}