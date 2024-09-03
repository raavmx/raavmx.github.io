import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import * as styles from './styles.module.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'info' | 'disabled';
    size?: 'small'|'medium'|'large';
    fullWidth?: boolean;  
    onClick?: () => void; 
}

export const Button: FC<ButtonProps> = ({ children, variant = 'primary', fullWidth, className, disabled, ...anyProps }) => {
    const buttonClass = cn(styles.button, {variant, disabled }, className);

    return (
        <button className={buttonClass} {...anyProps}>
            {children}
        </button>
    );
};

