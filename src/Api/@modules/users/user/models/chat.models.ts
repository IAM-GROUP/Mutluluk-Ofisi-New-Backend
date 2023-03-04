import { neo4j } from '../../../../../core/data-source/neo4j/connection'
import { IChat } from '../entity/IChat';


export const chat = neo4j()?.model<IChat>('Chat', {
    id: {
        primary: true,
        type: 'uuid',
    },
    name:{
        type:"string"
    }
});