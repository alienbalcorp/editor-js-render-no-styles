import { FC } from 'react';
declare const ORDERED_KEY = "ordered";
declare const UNORDERED_KEY = "unordered";
export declare type TListData = {
    items: string[];
    style?: typeof ORDERED_KEY | typeof UNORDERED_KEY;
};
export declare const List: FC<TListData>;
export {};
