import { StaticImageData } from "next/image";

export interface HandleClicked {
    onClicked: (isClicked: boolean) => void;
};

export interface ClickedMenu {
    isClicked: boolean;
};

export interface DetailsItem {
    name: string;
    size: string;
    price: number;
    details: string;
    image: StaticImageData;
};

export interface ShoppingCartItems {
    detailsorder : DetailsItem[];
};