import { IAdmin } from '../entity/IAdmin'
export interface AdminRepository {
    create(email: string, password: string): Promise<{ message: string }>
    find(id: string): Promise<IAdmin>
    findEmail(email: string): Promise<IAdmin>
    findAll(): Promise<IAdmin[]>
    update(id: string, email: string, password: string): Promise<{ message: string }>
    delete(id: string): Promise<{ message: string }>
    sign(email: string, password: string): Promise<IAdmin>
}