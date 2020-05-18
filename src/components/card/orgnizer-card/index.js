import React from 'react';
import Grid from 'styled-components-grid';
import { Heading, Text, Paragraph } from '../../typography';
import TitledAvatar from '../../titled-avatar';
import Buttons from './buttons';
import {
  Container,
  BorderedBox,
} from './index.style';

type Props = {
  name: string,
  logo: string,
  description?: string,
  followersCount?: string,
  allEventsCount?: string,
  activeEventsCount?: string,
  renderOrganizerLink: * => Node,
  isFollowed?: boolean,
  onClickFollowMe?: () => boolean,
  onClickConnectUs?: () => void,
}

const OrgnizerCard = (props: Props) => {
  const {
    renderOrganizerLink,
    name,
    description,
    logo,
    followersCount,
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
        renderAvatarLink={renderOrganizerLink}
      />
      {description && (
        <Paragraph size={12} color="riverBed" bold>
          {description}
        </Paragraph>
      )}

      <Buttons
        onClickFollowMe={onClickFollowMe}
        onClickConnectUs={onClickConnectUs}
        isFollowed={isFollowed}
        followersCount={followersCount}
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
  description: null,
  followersCount: '',
};

export default OrgnizerCard;
