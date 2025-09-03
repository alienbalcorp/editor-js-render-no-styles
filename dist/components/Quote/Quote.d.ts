import { FC } from 'react';
export declare type TQuoteData = {
    text: string;
    caption: string;
    alignment: 'left' | 'center';
};
export declare const Quote: FC<TQuoteData>;
