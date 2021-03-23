import React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react';

const navStyles: Partial<INavStyles> = { root: { width: '100%', display: 'flex' } };

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Nav List 1',
    expandAriaLabel: 'Expand Basic components section',
    collapseAriaLabel: 'Collapse Basic components section',
    links: [
      {
        key: 'Option 1',
        name: 'Option 1',
        url: '',
      },
      {
        key: 'Option 2',
        name: 'Option 2',
        url: '',
      },
      {
        key: 'Option 3',
        name: 'Option 3',
        url: '',
      },
    ],
  },
  {
    name: 'Nav List 2',
    expandAriaLabel: 'Expand Extended components section',
    collapseAriaLabel: 'Collapse Extended components section',
    links: [
      {
        key: 'Option 1',
        name: 'Option 1',
        url: '',
      },
      {
        key: 'Option 2',
        name: 'Option 2',
        url: '',
      },
      {
        key: 'Option 3',
        name: 'Option 3',
        url: '',
      },
    ],
  },
  {
    name: 'Nav List 3',
    expandAriaLabel: 'Expand Extended components section',
    collapseAriaLabel: 'Collapse Extended components section',
    links: [
      {
        key: 'Option 1',
        name: 'Option 1',
        url: '',
      },
      {
        key: 'Option 2',
        name: 'Option 2',
        url: '',
      },
      {
        key: 'Option 3',
        name: 'Option 3',
        url: '',
      },
    ],
  },
];

const FluentNav = () => {
  return (
    <>
    <Nav styles={navStyles} ariaLabel="Nav example" groups={navLinkGroups} />
    </>
  )
}

export default FluentNav
