import coffeeCupBackground from '@/assets/coffee_cup_bg.svg'
import { MaxWidthContainer } from '@/components/MaxWidthContainer'
import styled from 'styled-components'

export const HomeContainer = styled.main``

export const HomeIntro = styled.header`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;

    background: url(${coffeeCupBackground});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    filter: blur(80px);
  }
`

export const HomeIntroWrapper = styled(MaxWidthContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  flex-wrap: wrap-reverse;

  padding: 5.875rem 2rem;

  img {
    height: 22.5rem;
    object-fit: contain;
  }
`

export const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;

  max-width: 37.5rem;

  & > h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;

    color: ${({ theme }) => theme['base-title']};
  }

  & > p {
    margin-top: 1rem;

    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  & > ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    row-gap: 1.25rem;

    margin-top: 4.125rem;
  }
`

const homeAdvantageItemColors = {
  yellowDark: 'yellow-700',
  yellow: 'yellow-500',
  brown: 'base-text',
  purple: 'purple-500'
} as const

interface HomeAdvantageItemProps {
  color: keyof typeof homeAdvantageItemColors
}

export const HomeAdvantageItem = styled.li<HomeAdvantageItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
    border-radius: 99px;
    background: ${({ theme, color }) => theme[homeAdvantageItemColors[color]]};
    color: ${({ theme }) => theme.background};
  }

  p {
    line-height: 1.3;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const OwerProducts = styled(MaxWidthContainer)`
  padding: 2rem;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 2rem;
    color: ${({ theme }) => theme['base-title']};

    margin-bottom: 3.375rem;
  }
`

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  row-gap: 2.5rem;
  column-gap: 2rem;
`
