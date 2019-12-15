import React from 'react';
import styled from 'styled-components';
import { Typography, Avatar } from '../../../components';

const AvatarWrapper = styled(Avatar)`
  border: 1px solid red;
`;

const { Heading, Link } = Typography;

const AvatarPage = () => (
  <>
    <Heading level={1}>
      آواتار
    </Heading>
    <br />
    <br />

    <Heading level={2}>
      آواتار با حداقل پارامتر ها
    </Heading>
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" />
    <br />

    <Heading level={2}>
      آواتار همراه با لینک
    </Heading>
    <Link to="http://yahoo.com" external>
      <Avatar alt="cat" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" />
    </Link>
    <br />

    <Heading level={2}>
      آواتار در اندازه های متفاوت
    </Heading>

    <Heading level={3}>
      sm size
    </Heading>
    <Avatar alt="cat" size="sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" />
    <br />

    <Heading level={3}>
      md size (default)
    </Heading>
    <Avatar alt="cat" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" />
    <br />

    <Heading level={3}>
      lg size
    </Heading>
    <Avatar alt="cat" size="lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" />
    <br />

    <Heading level={2}>
      آواتار با
      wrapper
      ای که ویژگی های آن را تغییر میدهد
    </Heading>
    <AvatarWrapper alt="cat" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" />
    <br />

    <Heading level={2}>
      آواتار با آدرس دهی نا موجود
    </Heading>
    <Avatar alt="گربه ی ناز نازی" src="wrong-src" />
    <br />

    <Heading level={2}>
      آواتار  بدون آدرس دهی
    </Heading>
    <Avatar alt="گربه ی ناز نازی" />
    <br />

  </>
);

export default AvatarPage;
