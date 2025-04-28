import ptGeneric from "../../../../assets/personal-trainer-generic.jpg";
import ptTeach from "../../../../assets/personal-trainer-teach.jpg";
import ptOnline from "../../../../assets/personal-trainer-online.jpg";


export const FEATURE_LIST  =[
  {
    title: "Hands-on training",
    desc: `Learn from the experts. Our team of certified professionals deliver comprehensive training
       programs designed to equip you with the skills and knowledge you need to succeed`,

    backgroundImage: ptGeneric,
    icon: "",
    redirect: {
      route: "/about",
    },
    key: 1,
  },

  {
    title: "Expert guidance",
    desc: `Get a holistic approach to wellness. Our combined fitness and nutritional programs help you achieve your goals, inside and out. `,
    backgroundImage: ptTeach,
    icon: "",
    redirect: {
      route: "/services",
    },
    key: 2,
  },

  {
    title: "Online options",
    desc: `Train smarter, not harder. Choose from personalized 1-on-1 programs or affordable designed plans.
       Perfect for busy schedules or existing gym-goers looking to elevate their workouts.`,
    backgroundImage: ptOnline,
    icon: "",
    redirect: {
      route: "/services",
    },
    key: 3,
  },
]

export const SECTION_TITLE = `Get Fit with Confidence!`;

export const SECTION_DESC = `We've all been there-feeling lost, unsure of technique, worried about being judged, 
and having trouble actually 'sticking with it'. But what if getting fit could be fun, supportive, and guaranteed
 to bringresults? Well you're in luck, that's exactly what we offer!`;
