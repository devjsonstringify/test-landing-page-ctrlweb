import facebookIcon from '@/assets/socials/facebook.svg'
import linkedinIcon from '@/assets/socials/linkedin.svg'
import twitterIcon from '@/assets/socials/twitter.svg'

import feature_1 from '@/assets/features/feature_1.svg'
import feature_2 from '@/assets/features/feature_2.svg'
import feature_3 from '@/assets/features/feature_3.svg'

interface Feature {
  icon: string
  title: string
  subtitle: string
  description: string
}

interface FeatureContent {
  title: string
  subtitle: {
    line1: string
    line2: string
  }
  features: Feature[]
}


interface SocialMediaItem {
  id: string;
  name: 'twitter' | 'facebook' | 'linkedin';
  url: string;
  icon: string;
}

interface NavLink {
  id: string;
  name: string;
  url: string;
}


export const socialMedia : SocialMediaItem[] = [
  {
    id: 'socialMedia1',
    name: 'twitter',
    url: '#',
    icon: twitterIcon
  },
  {
    id: 'socialMedia2',
    name: 'facebook',
    url: '#',
    icon: facebookIcon
  },
  {
    id: 'socialMedia3',
    name: 'linkedin',
    url: '#',
    icon: linkedinIcon
  }
]

export const navLinks: NavLink[] = [
  {
    id: 'navLink1',
    name: 'Home',
    url: '#'
  },
  {
    id: 'navLink2',
    name: 'Product',
    url: '#'
  },
  {
    id: 'navLink3',
    name: 'Pricing',
    url: '#'
  },
  {
    id: 'navLink4',
    name: 'About',
    url: '#'
  },
  {
    id: 'navLink5',
    name: 'Contact',
    url: '#'
  }
]

export const featureContent: FeatureContent = {
  title: 'Features',
  subtitle: {
    line1: 'Most calendars are designed for teams.',
    line2: 'Slate is designed for freelancers'
  },
  features: [
    {
      icon: feature_1,
      title: 'OpenType features',
      subtitle: 'Variable fonts',
      description:
        'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
      icon: feature_2,
      title: 'Design with real data',
      subtitle: '',
      description:
        'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
      icon: feature_3,
      title: 'Fastest way to',
      subtitle: 'take action',
      description:
        'Slate helps you see how many more days you need to work to reach your financial goal.'
    }
  ]
}
