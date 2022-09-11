/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Mobile App Development',
    title: 'Mobile App Development',
    text:
      'Mobile app development services for native and cross platform apps.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Web Development',
    title: 'Web Development',
    text:
      'Customized web solutions to fit to your business needs.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Game Development',
    title: 'Game Development',
    text:
      'Desktop and Mobile game development with and award winning team.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Custom Bespoke Software',
    title: 'Custom Bespoke Software',
    text:
      'We can create custom backend, frontend, mobile and APIs to fit your needs.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Our services"
          title="We provide custom solutions to all your digital needs"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
