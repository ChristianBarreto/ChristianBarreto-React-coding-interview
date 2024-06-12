import { Box, Typography, Avatar } from '@mui/material';
import { SystemStyleObject, Theme } from '@mui/system';

import { Card } from '@components/atoms';
import { IContact } from 'react-coding-interview-shared/models';
import { EditableDisplay } from './editableDisplay';

export interface IContactCardProps {
  person: IContact;
  sx?: SystemStyleObject<Theme>;
}

export const ContactCard: React.FC<IContactCardProps> = ({
  person: { name, email },
  sx,
}) => {
  return (
    <Card sx={sx}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar />
        <Box textAlign="center" mt={2}>
          <Typography variant="subtitle1" lineHeight="1rem">
           
            <EditableDisplay text={name} type="text"/>
          </Typography>
          <Typography variant="caption" color="text.secondary">
          <EditableDisplay text={email} type="email"/>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
