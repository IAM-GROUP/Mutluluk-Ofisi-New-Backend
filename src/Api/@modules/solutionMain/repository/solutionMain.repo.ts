import { ISolutionMain } from '../entity/ISolutionMain'
export interface  SolutionMainRepository  {
     create(image: string, pageImage:string,title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ question: string; context: string; }],questions: [{ src: string; context: string; }]): Promise<{ message: string }>
     find(id: string): Promise<ISolutionMain>
     findAll(): Promise<ISolutionMain[]>
     update(id:string,image: string,pageImage:string, title: string, text: string, description: string,html:[{ title: string; context: string; }], icon: [{ src: string; context: string; }],questions: [{ src: string; context: string; }]): Promise<{ message: string }>
     delete(id: string): Promise<{ message: string }>
}