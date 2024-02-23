import React, { ReactNode } from 'react'
import * as stylex from "@stylexjs/stylex";
import {  BUTTON_SIZES, BUTTON_STYLES } from '@/styles/button';
import { BorderRadius, BorderStyles, Colors, Sizes, TextColors } from 'types/stylingTypes';
  // size?: StyleXStyles;
  interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    type?: stylex.StyleXStylesWithout<{}>;
    children?: React.ReactNode;  
    size?: stylex.StyleXStylesWithout<{}>;
    rounding?: stylex.StyleXStylesWithout<{}>;
    disabled?: boolean;
    styling?: stylex.StyleXStylesWithout<{}>[] | undefined;
  }

  const Button: React.FC<ButtonProps> = ({ type, size, rounding, disabled = false, children, styling, ...props }) => {
    // Add logic to choose between main, secondary, etc.
    return (
      <button {...props} disabled={disabled} {...stylex.props(BUTTON_STYLES.base, type, size, rounding, ...(styling || []))}>
        {children}
      </button>
    );
  };

  export default Button