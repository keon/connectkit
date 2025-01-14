import React from 'react';
import { ButtonProps } from './types';
import {
  ButtonContainer,
  InnerContainer,
  IconContainer,
  Arrow,
  ArrowLine,
  ArrowChevron,
  DownloadArrow,
  DownloadArrowInner,
} from './styles';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'secondary', // unique aspect to how we're handling buttons
  disabled,
  icon,
  roundedIcon,
  arrow,
  download,
  href,
  onClick,
}) => {
  return (
    <ButtonContainer
      as={href ? 'a' : undefined}
      onClick={(event: any) => {
        if (!disabled && onClick) onClick(event);
      }}
      href={href}
      target={href && '_blank'}
      rel={href && 'noopener noreferrer'}
      disabled={disabled}
      $variant={variant}
    >
      {icon && <IconContainer $rounded={roundedIcon}>{icon}</IconContainer>}
      {download && (
        <DownloadArrow>
          <DownloadArrowInner>
            <Arrow
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ArrowLine
                stroke="currentColor"
                x1="1"
                y1="6"
                x2="12"
                y2="6"
                strokeWidth="var(--stroke-width)"
                strokeLinecap="round"
              />
              <ArrowChevron
                stroke="currentColor"
                d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314"
                strokeWidth="var(--stroke-width)"
                strokeLinecap="round"
              />
            </Arrow>
          </DownloadArrowInner>
        </DownloadArrow>
      )}
      <InnerContainer>{children}</InnerContainer>
      {arrow && (
        <Arrow
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ArrowLine
            stroke="currentColor"
            x1="1"
            y1="6"
            x2="12"
            y2="6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <ArrowChevron
            stroke="currentColor"
            d="M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </Arrow>
      )}
    </ButtonContainer>
  );
};
export default Button;
