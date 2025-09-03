import { FC } from 'react';
declare type TLevel = 1 | 2 | 3 | 4 | 5 | 6;
export declare type THeaderData = {
    level: TLevel;
    text: string;
};
export declare const Header: FC<THeaderData>;
export {};
