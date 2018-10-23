import crypto from 'crypto-js';
import { dsecret } from './config';

export function encryptit(data){
    return crypto.AES.encrypt(data,dsecret).toString();
}

export function decryptit(data){
    return crypto.AES.decrypt(data,dsecret).toString(crypto.enc.Utf8);
}