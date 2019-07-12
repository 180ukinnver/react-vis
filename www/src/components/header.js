import React from 'react'
import Link from './link'
import {css} from '@emotion/core'
import styled from '@emotion/styled'
import theme from '../../config/theme'
import {headerFontFamily, bodyFontFamily} from '../lib/typography'
import MobileNav from './mobile-nav'
import {GitHub} from './social'
import Container from './container'
import {bpMaxSM} from '../lib/breakpoints'

function HeaderLink({headerColor, ...props}) {
  return (
    <Link
      activeClassName="active"
      css={{
        textDecoration: 'none',
        color: theme.colors.body_color,
        borderRight: '1px solid #f2f2f2',
        '&:hover,&:focus': {
          background: '#f2f2f2',
        },
      }}
      {...props}
    />
  )
}

const NavLink = styled(HeaderLink)({
  padding: '0 1.5rem',
  lineHeight: '4rem',
  background: 'transparent',
  [bpMaxSM]: {
    display: 'none',
  },
  '&.active': {
    background: '#c0c0c0',
  },
})

const Header = ({
  dark,
  bgColor = 'none',
  siteTitle,
  headerLink = '/',
  headerColor = 'black',
  fixed = false,
  headerImage = true,
}) => (
  <header
    css={css`
      width: 100%;
      border-bottom: 1px solid #f2f2f2;
      flex-shrink: 0;
      background: none;
      font-family: ${bodyFontFamily};
      background: ${dark ? '#090909' : `${bgColor}` || 'none'};
      z-index: 10;
      position: ${fixed ? 'fixed' : 'absolute'};
      top: 0;
    `}
  >
    <Container noVerticalPadding>
      <nav
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <HeaderLink
          to={headerLink}
          aria-label="go to homepage"
          headerColor={headerColor}
          css={{
            fontFamily: headerFontFamily,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            img: {
              marginBottom: 0,
              maxWidth: '50px',
              position: 'absolute',
              borderRadius: '100%',
              background:
                headerColor === '#fff' ? 'rgba(40, 28, 77, 0.7)' : '#f1f1f1',
            },
            ':hover, :focus': {
              background: 'transparent',
            },
            span: {
              transform: headerImage && 'translateX(60px)',
            },
          }}
        >
          <span>{siteTitle}</span>
        </HeaderLink>
        <div
          css={css`
            font-size: 16px;
            line-height: 1.25;
            display: flex;
            align-items: center;
            .mobile-nav {
              display: none;
              visibility: hidden;
              ${bpMaxSM} {
                display: block;
                visibility: visible;
              }
            }
          `}
        >
          <MobileNav color={headerColor} />
          <NavLink
            headerColor={headerColor}
            to="/blog/"
            aria-label="View blog page"
          >
            Blog
          </NavLink>
          <NavLink
            headerColor={headerColor}
            to="/talks/"
            aria-label="View talks page"
          >
            Talks
          </NavLink>
          {/*<NavLink
            headerColor={headerColor}
            to="/workshops/"
            aria-label="View workshops page"
          >
            Workshops
          </NavLink>*/}
          <NavLink
            headerColor={headerColor}
            to="/about/"
            aria-label="View about page"
          >
            About
          </NavLink>
          <GitHub />
        </div>
      </nav>
    </Container>
  </header>
)

export default Header
