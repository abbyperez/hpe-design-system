import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, ResponsiveContext } from 'grommet';

export const HorizontalExample = ({
  content,
  controls,
  plain,
  resources,
  showResponsiveControls,
  width,
}) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box align="start" direction="row-responsive" gap="large" wrap>
      <Box
        // let content maintain its defined width
        flex={false}
        // when plain, keep spacing between content and
        // responsiveControls to align with code block to its right
        margin={
          plain && showResponsiveControls
            ? { top: 'xsmall', bottom: size !== 'small' ? 'medium' : undefined }
            : // on small screens, gap from outer box handles spacing
              { bottom: size !== 'small' ? 'medium' : undefined }
        }
        width={width}
      >
        {content}
      </Box>
      <Box flex={false} width="large">
        {resources}
        {controls}
      </Box>
    </Box>
  );
};

HorizontalExample.propTypes = {
  content: PropTypes.node,
  controls: PropTypes.node,
  plain: PropTypes.bool,
  resources: PropTypes.node,
  showResponsiveControls: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
