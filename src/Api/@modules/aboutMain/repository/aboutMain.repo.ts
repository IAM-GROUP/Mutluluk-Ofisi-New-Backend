import { IAboutMain } from '../entity/IaboutMain'
export interface  AboutMainRepository  {
     create(image:string,title: string,html:[{ title: string; context: string; }]): Promise<{ message: string }>
     find(id: string): Promise<IAboutMain>
     findAll(): Promise<IAboutMain[]>
     update(image:string,title: string,html:[{ title: string; context: string; }]): Promise<{ message: string }>
     delete(id: string): Promise<{ message: string }>
}