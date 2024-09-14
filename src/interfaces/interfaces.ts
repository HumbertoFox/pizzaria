import { StaticImageData } from "next/image";

export interface HandleClickedProps {
    onClicked: (isClicked: boolean) => void;
    onClickedShopping: (isClicked: boolean) => void;
};

export interface ClickedMenuProps {
    isClicked: boolean;
};

export interface DetailsItemProps {
    name: string;
    size: string;
    price: number;
    details: string;
    image: StaticImageData;
};

export interface ItemsComponentsProps extends DetailsItemProps {
    onAddToCart: (item: DetailsItemProps) => void;
};

export interface ShoppingCartItemsProps {
    detailsorder: DetailsItemProps[];
};

export interface OrderComponentProps {
    onAddToCart: (item: DetailsItemProps) => void;
};