import { StaticImageData } from "next/image";

export interface HandleClicked {
    onClicked: (isClicked: boolean) => void;
};

export interface ClickedMenu {
    isClicked: boolean;
};

export interface DetailsPizza {
    name: string;
    size: string;
    price: number;
    details: string;
    image: StaticImageData;
};

export interface ShoppingCartItem {
    produto: string;
    obs: string;
    quantidade: number;
    valor: number;
};

export interface ShoppingCart {
    detailsorder: ShoppingCartItem[];
};