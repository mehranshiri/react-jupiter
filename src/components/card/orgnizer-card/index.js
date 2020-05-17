import React from 'react';
import Grid from 'styled-components-grid';
import { Heading, Text } from '../../typography';
import TitledAvatar from '../../titled-avatar';
import Buttons from './buttons';
import {
  Container,
  BorderedBox,
} from './index.style';

type Props = {
  name: string,
  logo: string,
  allEventsCount?: string,
  activeEventsCount?: string,
  renderLogoLink: * => Node,
  isFollowed?: boolean,
  onClickFollowMe?: () => boolean,
  onClickConnectUs?: () => void,
}

const OrgnizerCard = (props: Props) => {
  const {
    renderLogoLink,
    name,
    logo,
    onClickFollowMe,
    onClickConnectUs,
    isFollowed,
    allEventsCount,
    activeEventsCount,
  } = props;


  return (
    <Container>
      <Heading
        level={3}
        size="md"
      >
        برگزار‌کننده
      </Heading>
      <TitledAvatar
        title={name}
        avatar={logo}
        avatarSize="md"
        titleSize={12}
        renderAvatarLink={renderLogoLink}
      />

      <Buttons
        onClickFollowMe={onClickFollowMe}
        onClickConnectUs={onClickConnectUs}
        isFollowed={isFollowed}
      />

      {(activeEventsCount || allEventsCount) && (
        <Grid>
          {allEventsCount && (
            <Grid.Unit size={{ sm: 1 / 2 }}>
              <BorderedBox>
                <Text size={12} bold>
                  رویداد های برگزارشده
                </Text>
                <Text size={16} bold>
                  {allEventsCount}
                </Text>
              </BorderedBox>
            </Grid.Unit>
          )}
          {activeEventsCount && (
            <Grid.Unit size={{ sm: 1 / 2 }}>
              <BorderedBox>
                <Text size={12} bold>
                  رویداد های فعال
                </Text>
                <Text size={16} bold>
                  {activeEventsCount}
                </Text>
              </BorderedBox>
            </Grid.Unit>
          )}
        </Grid>
      )}
    </Container>
  );
};

OrgnizerCard.defaultProps = {
  isFollowed: false,
  onClickFollowMe: () => false,
  onClickConnectUs: () => { },
  allEventsCount: null,
  activeEventsCount: null,
};

export default OrgnizerCard;
