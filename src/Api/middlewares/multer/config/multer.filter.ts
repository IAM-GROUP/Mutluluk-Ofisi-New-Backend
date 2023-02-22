import { FileFilterCallback } from 'multer'
import { Request, Express } from 'express'


export function aboutUploadFilter({ _, file, cb }: {_:Request,file:Express.Multer.File,cb:FileFilterCallback}) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}
export function aboutMainUploadFilter({ _, file, cb }: { _: Request; file: Express.Multer.File; cb: FileFilterCallback; }) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}
export function productUploadFilter({ _, file, cb }: { _: Request; file: Express.Multer.File; cb: FileFilterCallback; }) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}
export function projectConsultantUploadFilter({ _, file, cb }: { _: Request; file: Express.Multer.File; cb: FileFilterCallback; }) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}
export function announcementUploadFilter({ _, file, cb }: { _: Request; file: Express.Multer.File; cb: FileFilterCallback; }) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}
export function userUploadFilter({ _, file, cb }: { _: Request; file: Express.Multer.File; cb: FileFilterCallback; }) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}


