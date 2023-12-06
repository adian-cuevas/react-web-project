import { Menu, MenuItem } from '@mui/material'
import { FC } from 'react'
import { avatarItems } from '../../models/Static_Info'

interface AvatarMenuProps {
  open: boolean
  anchorEl: HTMLElement | null
  handleClose: () => void
}
export const AvatarMenu: FC<AvatarMenuProps> = (props) => {
  const { open, anchorEl, handleClose } = props
  return (
    <Menu
      id='basic-menu'
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      anchorOrigin={{ horizontal: 'left', vertical: 'center' }}
    >
      {avatarItems.map((item) => (
        <MenuItem onClick={() => item.action(handleClose)}>
          {item.name}
        </MenuItem>
      ))}
    </Menu>
  )
}
