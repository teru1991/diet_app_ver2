import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';

const ContextMenuContainer = ({
  onContextMenu,
  onContextMenuClick
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ContextMenu id="menu_id" onShow={(e) => onContextMenu(e, e.detail.data)}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <MenuItem onClick={onContextMenuClick} data={{ action: 'copy' }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <i className="simple-icon-docs" /> <span>Copy</span>
      </MenuItem>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <MenuItem onClick={onContextMenuClick} data={{ action: 'move' }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <i className="simple-icon-drawer" /> <span>Move to archive</span>
      </MenuItem>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <MenuItem onClick={onContextMenuClick} data={{ action: 'delete' }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <i className="simple-icon-trash" /> <span>Delete</span>
      </MenuItem>
    </ContextMenu>
  );
};

export default ContextMenuContainer;
