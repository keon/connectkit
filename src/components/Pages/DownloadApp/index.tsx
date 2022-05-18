import React, { useState } from 'react';
import { useContext } from '../../ConnectKit';
import localizations, { localize } from '../../../constants/localizations';
import supportedConnectors from '../../../constants/supportedConnectors';

import {
  ModalBody,
  ModalContent,
  ModalHeading,
} from '../../Common/Modal/styles';
import { OrDivider } from '../../Common/Modal';

import CustomQRCode from '../../Common/CustomQRCode';
import Button from '../../Common/Button';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '../../../assets/icons';

const Container = styled(motion.div)`
  max-width: 100%;
  width: 295px;
`;

const DownloadApp: React.FC<{
  connectorId: string;
}> = ({ connectorId }) => {
  const context = useContext();
  const copy = localizations[context.lang].downloadAppScreen;

  const [id, setId] = useState(connectorId);
  const connector = supportedConnectors.filter((c) => c.id === id)[0];

  const localizeText = (text: string) => {
    return localize(text, {
      CONNECTORNAME: connector.name,
    });
  };
  if (!connector) return <>Connector not found</>;

  const ios = connector.appUrls?.ios;
  const android = connector.appUrls?.android;
  const downloadUri = connector.appUrls?.download;
  const bodycopy =
    ios && android ? copy.iosAndroid : ios ? copy.ios : copy.android;

  return (
    <Container>
      <ModalHeading>{localizeText(copy.heading)}</ModalHeading>
      <ModalContent style={{ paddingBottom: 4, gap: 14 }}>
        {downloadUri && <CustomQRCode value={downloadUri} />}
        {!downloadUri && <>No download link available</>}
        <ModalBody>{localizeText(bodycopy)}</ModalBody>
        {connector.defaultConnect && <OrDivider />}
      </ModalContent>

      {connector.defaultConnect && ( // Open the default connector modal
        <Button icon={<ExternalLinkIcon />}>Open Default Modal</Button>
      )}
    </Container>
  );
};

export default DownloadApp;