import { ReactNode } from "react";

export interface VoteProps {
    vote: number;
}

export interface scrollMoveProps {
    scrollMove: boolean;
}

export interface StyledButtonProps {
    isClicked: boolean;
}

export interface StyledLiProps {
    navSelect: string;
}

export interface PropsChildren {
    children: ReactNode;
}

export interface CommonContextType {
    navSelect: string;
    setNavSelect: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isClicked: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
    scrollMove: boolean;
    setScrollMove: React.Dispatch<React.SetStateAction<boolean>>;
    path: string;
    setPath: React.Dispatch<React.SetStateAction<string>>;
    valueInputSearch: string;
    setValueInputSearch: React.Dispatch<React.SetStateAction<string>>;
    btnAddFavIsClicked: boolean;
    setBtnAddFavIsClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export interface CardsProps {
    id: number;
    poster_path: string;
    title?: string;
    name?: string;
    vote_average: number;
}

export interface VideoTrailerProps {
    keyTrailer: string;
}

export interface MovieAgeGroupsProps {
    age: string | undefined;
}

export interface PaginationProps {
    OnChange: (event: React.ChangeEvent<unknown>, newValue: number) => void;
    page: number;
    total_pages?: number
}