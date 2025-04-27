// import * as React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function NotificationBadge() {
  return (
    <Badge badgeContent={1} color="error">
      <NotificationsNoneIcon color="action" style={{ color: "white" }}/>
    </Badge>
  );
}