import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Contact us',
      title: 'Contact us',
      description:
        'Contact us about your digital software needs.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Here to help',
      description:
        'Reach us on email, mobile or chat.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Our portfolio',
      title: 'Our portfolio',
      description:
        'Have a look at our portfolio of work.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'Our services',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ],
};
