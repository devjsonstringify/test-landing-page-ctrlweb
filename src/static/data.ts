import facebookIconWhite from '@/assets/socials/facebook.svg'
import linkedinIconWhite from '@/assets/socials/linkedin.svg'
import twitterIconWhite from '@/assets/socials/twitter.svg'

import facebookIconBlue from '@/assets/socials/blue/facebook.svg'
import linkedinIconBlue from '@/assets/socials/blue/linkedin.svg'
import twitterIconBlue from '@/assets/socials/blue/twitter.svg'

import feature_1 from '@/assets/features/feature_1.svg'
import feature_2 from '@/assets/features/feature_2.svg'
import feature_3 from '@/assets/features/feature_3.svg'

import amazon from '@/assets/partners/amazon.svg'
import dropbox from '@/assets/partners/dropbox.svg'
import google from '@/assets/partners/google.svg'
import microsoft from '@/assets/partners/microsoft.svg'
import uber from '@/assets/partners/uber.svg'

import mapIcon from '@/assets/contact-us/mapIcon.svg'
import phoneIcon from '@/assets/contact-us/phoneIcon.svg'
import emailIcon from '@/assets/contact-us/emailIcon.svg'

import mapIconWhite from '@/assets/contact-us/white/mapIcon.svg'
import phoneIconWhite from '@/assets/contact-us/white/phoneIcon.svg'

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

interface Partners extends Omit<SocialMediaItem, 'name'> {
  name: string;
}

export const socialMediaWhite : SocialMediaItem[] = [
  {
    id: 'socialMedia1',
    name: 'twitter',
    url: '#',
    icon: twitterIconWhite
  },
  {
    id: 'socialMedia2',
    name: 'facebook',
    url: '#',
    icon: facebookIconWhite
  },
  {
    id: 'socialMedia3',
    name: 'linkedin',
    url: '#',
    icon: linkedinIconWhite
  }
]

export const socialMediaBlue : SocialMediaItem[] = [
  {
    id: 'socialMedia_blue_1',
    name: 'twitter',
    url: '#',
    icon: twitterIconBlue
  },
  {
    id: 'socialMedia_blue_2',
    name: 'facebook',
    url: '#',
    icon: facebookIconBlue
  },
  {
    id: 'socialMedia_blue_3',
    name: 'linkedin',
    url: '#',
    icon: linkedinIconBlue
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


export const partners: Partners[] = [
  {
    id: 'partner1',
    name: 'Google',
    url: '#',
    icon: google
  },
  {
    id: 'partner2',
    name: 'Amazon',
    url: '#',
    icon: amazon
  },
  {
    id: 'partner3',
    name: 'Microsoft',
    url: '#',
    icon: microsoft
  },
  {
    id: 'partner4',
    name: 'Uber',
    url: '#',
    icon: uber
  },
  {
    id: 'partner5',
    name: 'Dropbox',
    url: '#',
    icon: dropbox
  },
  {
    id: 'partner6',
    name: 'Google',
    url: '#',
    icon: google
  },
  {
    id: 'partner7',
    name: 'Uber',
    url: '#',
    icon: uber
  },
  {
    id: 'partner8',
    name: 'Amazon',
    url: '#',
    icon: amazon
  }
]

interface Pricing {
  id: string;
  title: string;
  description: string;
  price: number;
  isRecommended: boolean;
  features: string[];
}

export const pricing: Pricing[] = [
  {
    id: 'pricing1',
    title: 'Free',
    description: 'Organize across all apps by hand',
    price: 0,
    isRecommended: false,
    features: [
      'Unlimited cloud storage',
      'Email support',
      'Google Calendar',
      'Google Drive',
      'AWS S3'
    ]
  },
  {
    id: 'pricing2',
    title: 'Standard',
    description: 'Organize across all apps by hand',
    price: 10,
    isRecommended: true,
    features: [
      'Unlimited cloud storage',
      'Email support',
      'Google Calendar',
      'Google Drive',
      'AWS S3'
    ]
  },
  {
    id: 'pricing3',
    title: 'Business',
    description: 'Organize across all apps by hand',
    price: 12,
    isRecommended: false,
    features: [
      'Unlimited cloud storage',
      'Email support',
      'Google Calendar',
      'Google Drive',
      'AWS S3'
    ]
  }
]

interface IContactUs {
    id: string;
    title: string;
    image: string;
    url?: string;
}

export const contactUs: IContactUs = [
  {
    id: 'contact1',
    title: '6386 Spring St undefined Anchorage, Georgia 12473 United States',
    url: 'https://maps.app.goo.gl/bhARqcUcegeKLJC59',
    icon: mapIcon,
  },
  {
    id: 'contact2',
    title: '(843) 555-0130',
    icon: phoneIcon,
    url: 'tel:+8435550130'
  },
  {
    id: 'contact3',
    title: 'willie.jennings@example.com',
    icon: emailIcon,
    url: 'mailto:willie.jennings@example.com'
  }
]

export const contactUsFooter: IContactUs = [
  {
    id: 'contactUs1Footer',
    title: '7480 MockingBird Hill',
    icon: mapIconWhite,
  }, {
    id: 'contact2Footer',
    title: '(239) 555-0108',
    icon: phoneIconWhite,
  }
]

export const tomothys: NavLink[] = [
  {
    id: 'tomothy1',
    name: 'Eleanor Edwards',
    url: '#',
  },
  {
    id: 'tomothy2',
    name: 'Ted Robertson',
    url: '#',
  },
  {
    id: 'tomothy3',
    name: 'Ann Russell',
    url: '#',
  },
  {
    id: 'tomothy4',
    name: 'Jennie Mckinney',
    url: '#',
  },
  {
    id: 'tomothy5',
    name: 'Gloria Richards',
    url: '#',
  }
]

export const janeBlack: NavLink[] = [
  {
    id: 'janeBlack1',
    name: 'Phillip Jones',
    url: '#',
  },
  {
    id: 'janeBlack2',
    name: 'Product',
    url: '#',
  },
  {
    id: 'janeBlack3',
    name: 'Colleen Russell',
    url: '#',
  },
  {
    id: 'janeBlack4',
    name: 'Marvin Hawkins',
    url: '#',
  },
  {
    id: 'janeBlack5',
    name: 'Bruce Simmons',
    url: '#',
  }
]



