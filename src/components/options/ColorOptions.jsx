import React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react';

const navStyles: Partial<INavStyles> = { root: { width: '100%', display: 'flex' } };

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Colors',
    expandAriaLabel: 'Expand Basic components section',
    collapseAriaLabel: 'Collapse Basic components section',
    links: [
      {
        name: 'Primary',
      },
      {
        name: 'Success',
      },
      {
        name: 'Danger',
      },
      {
        name: 'Warning',
      },
      {
        name: 'Info',
      },
      {
        name: 'Light',
      },
      {
        name: 'Dark',
      },
    ],
  },
];

const ColorOptions = ({ renderColorBootstrap }) => {
  return (
    <>
    <Nav styles={navStyles} onLinkClick={(e) => renderColorBootstrap(e.target.innerHTML.toLowerCase())} ariaLabel="Nav example" groups={navLinkGroups} />
    </>
  )
}

export default ColorOptions
