export type BulletsSchema = Array<{
    image: string
    titleBullet : string
    link?: LinkBullet
}>

export interface LinkBullet {
    url: string
    attributeNofollow?: boolean
    attributeTitle?: boolean
    openNewTab?: boolean            // Por si vamos a colocar un target _blank
    newTab?: boolean                // Por si abre nueva pestaña
}