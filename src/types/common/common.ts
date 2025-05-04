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
}