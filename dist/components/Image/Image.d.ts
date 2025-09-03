import { FC } from 'react';
export declare type TImageData = {
    file: {
        url: string;
    };
    caption?: string;
    withBorder?: boolean;
    stretched?: boolean;
    withBackground?: boolean;
};
export declare const Image: FC<TImageData>;
