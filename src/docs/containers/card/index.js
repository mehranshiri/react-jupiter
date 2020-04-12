import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '../../../components';
import ShowDate from '../../../components/show-date';
import CardTemplate from '../../../components/card/card-template';
import { EventCard } from '../../../components/card';
import TitledAvatar from '../../../components/titled-avatar';
import OrganizationCard from '../../../components/card/organization-card';
import NumericSummeryReport from '../../../components/numeric-summery-report';
import Responsive from '../../../components/responsive';

const { Heading } = Typography;

const CardPage = () => (
  <>
    <Heading level={1}>
      کارت
    </Heading>
    <ShowDate date={new Date()} />
    <br />
    <Responsive option={{ greaterThan: 1200 }}><h1>Show from to 1200px</h1></Responsive>
    <Responsive option={{ lessThan: 1200 }}><h1>Show up to 1200px</h1></Responsive>
    <Responsive option={{ greaterThan: 900 }}><h1>Show from 900px</h1></Responsive>
    <Responsive option={{ greaterThan: 700, lessThan: 900 }}><h1>Show from 700px up to 900px</h1></Responsive>
    <br />
    <EventCard
      type="vertical"
      title="تایتل یک رویداد نسبتا طولانی در اینجاست که قرار است اضافه بیاید و بزند به بیرون"
      cover="https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg"
      date="2020-01-10T14:00:00+0330"
      place="تهران"
      price="از ۴۴۰۰۰ تومان"
      ads
      finished
      organization={{
        name: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه',
        logo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
      }}
      clickBookmark={() => { window.console.log('handle click bookmark'); return true; }}
      renderEventLink={(element) => <Link to="/tosomewherenew">{element}</Link>}
    />
    <br />
    <EventCard
      type="vertical"
      title="تایتل یک رویداد اینجاست کهن"
      cover="https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg"
      date="2020-01-10T14:00:00+0330"
      place="تهران"
      price="از ۴۴۰۰۰ تومان"
      ads
      organization={{
        name: 'هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه',
        logo: 'https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg',
      }}
      clickBookmark={() => { window.console.log('handle click bookmark'); return true; }}
      renderEventLink={(element) => <Link to="/tosomewherenew">{element}</Link>}
      renderOrganizationLink={(element) => <Link to="/toorganization">{element}</Link>}
    />
    <br />
    <NumericSummeryReport
      data={[
        { id: 1, title: 'برگزار شده', count: 12 },
        { id: 2, title: 'فعال', count: 2 },
        { id: 3, title: 'دنبال کننده‌ها', count: 346 },
      ]}
    />
    <br />

    <EventCard
      type="horizontal"
      title="تایتل یک رویداد نسبتا طولانی در اینجاست که باید و باید و قرار است اضافه بیاید و بزند به بیرون"
      cover="https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg"
      date="2020-01-10T14:00:00+0330"
      place="تهران"
      price="از ۴۴۰۰۰ تومان"
      ads
      clickBookmark={() => { window.console.log('handle click bookmark'); }}
      queryString="icn=trendEvents&ici=fp5"
      renderEventLink={(element) => <Link to="/tosomewhere">{element}</Link>}
    />
    <br />
    <CardTemplate hoverToLevel={2}><div>Hello card template.</div></CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={2} hoverToLevel={4}><div>Hello card template.</div></CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={3} maxWidth="400" renderLink={(el) => <a href="http://google.com">{el}</a>} hoverToLevel={4}>
      <div>
        <Heading>Hello card template. Hello card template.Hello card template.</Heading>
      </div>
    </CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={4}><div>Hello card template.</div></CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={5}><div>Hello card template.</div></CardTemplate>
    <br />
    <br />

    <TitledAvatar
      title="انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی
      انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی"
      avatar="https://static.evand.net/images/organizations/logos/original/96f2fd0f4770552bf2d14db5b51f4013.jpg?x-oss-process=image/resize,h_250"
      avatarSize="sm"
      titleSize={10}
      renderAvatarLink={(element) => <Link to="/tosomewherenew">{element}</Link>}
    />
    <br />
    <TitledAvatar
      title="انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی
      انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی"
      avatar="https://static.evand.net/images/organizations/logos/original/96f2fd0f4770552bf2d14db5b51f4013.jpg?x-oss-process=image/resize,h_250"
      renderAvatarLink={(element) => <Link to="/tosomewherenew">{element}</Link>}
    />
    <br />
    <br />
    <OrganizationCard
      title="انجمن علمی کامپیوتر دانشگاه صنعتی خواجه نصیرالدین طوسی انجمن علمی کامپیوتر دانشگاه صنعتی خواجه"
      logo="https://static.evand.net/images/organizations/logos/original/d431e339d86b187f356055f1d6f39ddb.jpg?x-oss-process=image/resize,h_250"
      report={{
        heldEventsNumber: 2,
        activeEventsNumber: 17,
        followingNumber: 148,
      }}
      onClickFollow={() => { window.console.log('click on follow'); }}
      renderLink={(element) => <Link to="/somewhere">{element}</Link>}
    />
  </>
);

export default CardPage;
