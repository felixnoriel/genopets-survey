import { Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

const GlitchHeading = styled(Heading)`
  @keyframes glitch-anim {
    0% {
      clip: rect(86px, 9999px, 8px, 0);
      transform: skew(0.09deg);
    }
    5% {
      clip: rect(78px, 9999px, 1px, 0);
      transform: skew(0.99deg);
    }
    10% {
      clip: rect(87px, 9999px, 32px, 0);
      transform: skew(0.01deg);
    }
    15% {
      clip: rect(61px, 9999px, 38px, 0);
      transform: skew(0.37deg);
    }
    20% {
      clip: rect(9px, 9999px, 12px, 0);
      transform: skew(0.46deg);
    }
    25% {
      clip: rect(40px, 9999px, 97px, 0);
      transform: skew(0.94deg);
    }
    30% {
      clip: rect(38px, 9999px, 89px, 0);
      transform: skew(0.3deg);
    }
    35% {
      clip: rect(93px, 9999px, 66px, 0);
      transform: skew(0.03deg);
    }
    40% {
      clip: rect(31px, 9999px, 60px, 0);
      transform: skew(0.53deg);
    }
    45% {
      clip: rect(82px, 9999px, 46px, 0);
      transform: skew(0.77deg);
    }
    50% {
      clip: rect(34px, 9999px, 44px, 0);
      transform: skew(0.04deg);
    }
    55% {
      clip: rect(36px, 9999px, 6px, 0);
      transform: skew(0.8deg);
    }
    60% {
      clip: rect(17px, 9999px, 41px, 0);
      transform: skew(0.94deg);
    }
    65% {
      clip: rect(9px, 9999px, 29px, 0);
      transform: skew(0.07deg);
    }
    70% {
      clip: rect(69px, 9999px, 6px, 0);
      transform: skew(0.78deg);
    }
    75% {
      clip: rect(92px, 9999px, 76px, 0);
      transform: skew(0.98deg);
    }
    80% {
      clip: rect(30px, 9999px, 4px, 0);
      transform: skew(0.18deg);
    }
    85% {
      clip: rect(38px, 9999px, 58px, 0);
      transform: skew(0.56deg);
    }
    90% {
      clip: rect(92px, 9999px, 3px, 0);
      transform: skew(0.16deg);
    }
    95% {
      clip: rect(36px, 9999px, 82px, 0);
      transform: skew(0.08deg);
    }
    100% {
      clip: rect(40px, 9999px, 55px, 0);
      transform: skew(0.07deg);
    }
  }

  @keyframes glitch-anim2 {
    0% {
      clip: rect(49px, 9999px, 93px, 0);
      transform: skew(0.16deg);
    }
    5% {
      clip: rect(92px, 9999px, 69px, 0);
      transform: skew(0.5deg);
    }
    10% {
      clip: rect(22px, 9999px, 3px, 0);
      transform: skew(0.1deg);
    }
    15% {
      clip: rect(30px, 9999px, 36px, 0);
      transform: skew(0.28deg);
    }
    20% {
      clip: rect(88px, 9999px, 46px, 0);
      transform: skew(0.05deg);
    }
    25% {
      clip: rect(28px, 9999px, 30px, 0);
      transform: skew(0.18deg);
    }
    30% {
      clip: rect(88px, 9999px, 72px, 0);
      transform: skew(0.41deg);
    }
    35% {
      clip: rect(96px, 9999px, 21px, 0);
      transform: skew(0.88deg);
    }
    40% {
      clip: rect(12px, 9999px, 33px, 0);
      transform: skew(0.19deg);
    }
    45% {
      clip: rect(30px, 9999px, 86px, 0);
      transform: skew(0.72deg);
    }
    50% {
      clip: rect(12px, 9999px, 59px, 0);
      transform: skew(0.47deg);
    }
    55% {
      clip: rect(32px, 9999px, 10px, 0);
      transform: skew(0.44deg);
    }
    60% {
      clip: rect(67px, 9999px, 35px, 0);
      transform: skew(0.45deg);
    }
    65% {
      clip: rect(83px, 9999px, 13px, 0);
      transform: skew(0.41deg);
    }
    70% {
      clip: rect(47px, 9999px, 26px, 0);
      transform: skew(0.05deg);
    }
    75% {
      clip: rect(31px, 9999px, 68px, 0);
      transform: skew(0.17deg);
    }
    80% {
      clip: rect(18px, 9999px, 67px, 0);
      transform: skew(0.6deg);
    }
    85% {
      clip: rect(49px, 9999px, 87px, 0);
      transform: skew(0.6deg);
    }
    90% {
      clip: rect(96px, 9999px, 84px, 0);
      transform: skew(0.34deg);
    }
    95% {
      clip: rect(10px, 9999px, 79px, 0);
      transform: skew(0.38deg);
    }
    100% {
      clip: rect(23px, 9999px, 38px, 0);
      transform: skew(0.41deg);
    }
  }

  @keyframes glitch-skew {
    0% {
      transform: skew(1deg);
    }
    33.3333333333% {
      transform: skew(2deg);
    }
    66.6666666667% {
      transform: skew(2deg);
    }
    100% {
      transform: skew(1deg);
    }
  }

  position: relative;
  animation: glitch-skew 1s infinite linear alternate-reverse;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'mokoto glitch outline';
    font-weight: 400;
    font-size: 22px;
    opacity: 0.4;
    letter-spacing: 5.5px;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 4s infinite linear alternate-reverse;
    line-height: 22px;
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'mokoto glitch outline';
    font-weight: 400;
    font-size: 22px;
    opacity: 0.4;
    letter-spacing: 5.5px;
    animation: glitch-anim2 3s infinite linear alternate-reverse;
  }
`;

export const H1 = ({ children }: { children: string; color?: string }) => (
  <GlitchHeading
    as="h1"
    data-text={children}
    fontWeight={900}
    fontSize={{ base: `18px`, sm: `20px`, md: `24px` }}
    lineHeight="30px"
    letterSpacing="8px"
    // add padding to the right since "glitching" text can wrap over in some cases
    pr="10px"
  >
    {children}
  </GlitchHeading>
);
