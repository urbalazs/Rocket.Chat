import { Box } from '@rocket.chat/fuselage';
import type { ComponentProps, ReactElement } from 'react';
import { forwardRef } from 'react';

const MessageComposerInput = forwardRef<HTMLInputElement, ComponentProps<typeof Box>>(
	(props, ref): ReactElement => <Box minHeight='20px' rows={1} fontScale='p2' ref={ref} pi={12} mb={16} {...props} borderWidth={0} />,
);

export default MessageComposerInput;
