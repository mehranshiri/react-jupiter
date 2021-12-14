/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React from 'react';
import Grid from 'styled-components-grid';
import { Heading, Text, Paragraph } from '../../typography';
import Avatar from '../../avatar';
import Buttons from './buttons';
import {
  Container,
  TextCenter,
} from './index.style';
import { Margin } from '../../spacing';
import Display from '../../display';

type Props = {
  name: string,
  logo: string,
  description?: string,
  followersCount?: string,
  allEventsCount?: string,
  recommendedCount?: string,
  activeEventsCount?: string,
  isFollowed?: boolean,
  onClickFollowMe?: () => boolean,
  onClickConnectUs?: () => void,
}

const OrgnizerCard = (props: Props) => {
  const {
    name,
    description,
    logo,
    followersCount,
    onClickFollowMe,
    onClickConnectUs,
    isFollowed,
    allEventsCount,
    activeEventsCount,
    recommendedCount,
  } = props;

  return (
    <Container>
      <Display display="flex" alignItems="center" justifyContent="space-between">
        <Display display="flex" alignItems="center">
          <Avatar
            alt={name}
            src={logo}
            size="md"
          />
          <Display display="block">
            <Margin right={5}>
              <Text size={12} bold>
                برگزار‌کننده :
              </Text>
              <br />
              <Heading size="md" level={4}>
                {name}
              </Heading>
            </Margin>
          </Display>
        </Display>
        {(activeEventsCount || allEventsCount) && (
        <Display display="flex" alignItems="center" justifyContent="space-between">
          {followersCount && (
            <Display display="block">
              <Margin left={6}>
                <TextCenter>
                  <Text size={16} bold>
                    {followersCount}
                  </Text>
                  <br />
                  <Text size={12} bold>
                    دنبال کننده
                  </Text>
                </TextCenter>
              </Margin>
            </Display>
          )}
          {allEventsCount && (
            <Display display="block">
              <Margin left={6} right={6}>
                <TextCenter>
                  <Text size={16} bold>
                    {allEventsCount}
                  </Text>
                  <br />
                  <Text size={12} bold>
                    کل رویدادها
                  </Text>
                </TextCenter>
              </Margin>
            </Display>
          )}

          {activeEventsCount && (
            <Display display="block">
              <Margin left={4} right={6}>
                <TextCenter>
                  <Text size={16} bold>
                    {activeEventsCount}
                  </Text>
                  <br />
                  <Text size={12} bold>
                    رویداد فعال
                  </Text>
                </TextCenter>
              </Margin>
            </Display>
          )}
        </Display>
        )}
      </Display>

      {description && (
        <Paragraph size={12} color="riverBed" bold>
          {description}
        </Paragraph>
      )}

    <Grid>
      <Grid.Unit size={1 / 2}>
        {!!recommendedCount && (
          <Heading level={4} size="md" color="riverBed" bold>
          {` ${recommendedCount} `}
            این برگزارکننده را توصیه کرده‌اند.
          </Heading>
        )}
      </Grid.Unit>
      <Grid.Unit size={1 / 2}>
        <Buttons
          onClickFollowMe={onClickFollowMe}
          onClickConnectUs={onClickConnectUs}
          isFollowed={isFollowed}
        />
      </Grid.Unit>
    </Grid>
    </Container>
  );
};

OrgnizerCard.defaultProps = {
  isFollowed: false,
  onClickFollowMe: () => false,
  onClickConnectUs: () => { },
  allEventsCount: null,
  activeEventsCount: null,
  recommendedCount: null,
  description: null,
  followersCount: '',
};

export default OrgnizerCard;
