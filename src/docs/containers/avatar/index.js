import React from 'react';
import styled from 'styled-components';
import { Typography, Avatar } from '../../../components';

const AvatarWrapper = styled(Avatar)`
  border: 1px solid red;
`;

const { Heading } = Typography;

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
      آواتار در طراحی دوم
    </Heading>
    <Avatar alt="cat" borderColor="white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" />
    <br />
    <Heading level={2}>
      آواتار در اندازه های متفاوت
    </Heading>
    <Avatar alt="cat" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" />
    <Avatar alt="cat" size="sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqkhWwKzw6iSa0JBXxtse4JPKKR5VVmRXwBF0j_Bqooq9nVDoZ" />
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
      آواتار با آدرس دهی نا موجود.
    </Heading>
    <Avatar alt="گربه ی ناز نازی" src="wrong-src" />
  </>
);

export default AvatarPage;
