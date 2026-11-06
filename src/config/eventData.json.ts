import { type EventProps } from "./types/configDataTypes";

/**
 * * Regular events — the meetups with their own pages at /events/<slug>/ (the calendar on /events/ lists
 * every date). Copy is carried over from the old brisbanemaker.space event posts. Dates are free text:
 * check them before relying on them — the two meetups' December/January dates are the old site's and
 * have no year. The location is the site address (`siteData.address`), not the old Oxlade Drive one.
 */
export const events = [
  {
    slug: "maker-mondays",
    title: "Maker Mondays",
    summary:
      "Our regular open night and networking event — come and see our facilities and meet like minded makers.",
    description: [
      "Come along to our regular Maker Mondays open night and networking event to see our facilities and meet like minded individuals. We have 3D printing, laser cutting, electronics, arts & crafts, and so much more! Our members and community love making amazing projects, and sharing their wealth of knowledge and experience.",
    ],
    closing: [
      "Please note that you won’t be able to use our tools unless you’re a member due to insurance and safety reasons. However, we’re happy to give you a demonstration of anything you’d like to see in action so you can see how it works and what it can do.",
    ],
    when: {
      date: "Every Monday",
      time: "6pm – 8pm",
    },
    eventbriteUrl: "https://maker-mondays.eventbrite.com.au",
    facebookUrl: "https://www.facebook.com/events/211724707750033",
  },
  {
    slug: "brisbane-electronics-meetup",
    title: "Brisbane Electronics Meetup",
    summary:
      "Learn new electronics concepts, get basic project help and meet other electronics and Arduino enthusiasts.",
    description: [
      "Our electronics meetup at Brisbane Makerspace (hosted by John Missikos) is a great opportunity to learn about new electronics concepts, get basic project assistance, and network / mingle with other electronics / Arduino enthusiasts.",
    ],
    agendaIntro:
      "This is a casual event, so it may not run exactly like this, but you can roughly expect the following:",
    agenda: [
      "Brief introduction",
      "10-15 minute lightning talk on a specific topic",
      "Project showcase",
      "Socialising & networking",
    ],
    closing: [
      "Brisbane Makerspace also has 3D printing, laser cutting, electronics, arts & crafts, and so much more! Our members and community love making amazing projects, and sharing their wealth of knowledge and experience.",
      "Please note that you won’t be able to use our tools unless you’re a member due to insurance and safety reasons. However, we’re happy to give you a demonstration of anything you’d like to see in action so you can see how it works and what it can do.",
      "Everyone who attends an event hosted at Brisbane Makerspace is required to follow the Brisbane Makerspace code of conduct. If you breach this code of conduct you may be asked to leave.",
    ],
    when: {
      date: "December: 1st, 15th, 29th; January: 12th, 26th",
      time: "6:30pm – 8:00pm",
    },
    eventbriteUrl: "https://brisbane-electronics-meetup.eventbrite.com.au",
    facebookUrl: "https://www.facebook.com/events/310717960902127",
  },
  {
    slug: "brisbane-3d-printing-meetup",
    title: "Brisbane 3D Printing Meetup",
    summary:
      "A social meetup to learn more about 3D printing, share your projects and make new friends.",
    description: [
      "The Brisbane 3D Printing meetup is an excellent chance to connect with other local 3D printing enthusiasts. This is a social meetup that gives you the opportunity to learn more about 3D printing, share your amazing projects, and make new friends.",
    ],
    agendaIntro:
      "This is a casual event, so it may not run exactly like this, but you can roughly expect the following:",
    agenda: [
      "Brief introduction",
      "10-15 minute lightning talk on a specific topic",
      "Project showcase",
      "Socialising & networking",
    ],
    closing: [
      "Brisbane Makerspace also has 3D printing, laser cutting, electronics, arts & crafts, and so much more! Our members and community love making amazing projects, and sharing their wealth of knowledge and experience.",
      "Please note that you won’t be able to use our tools unless you’re a member due to insurance and safety reasons. However, we’re happy to give you a demonstration of anything you’d like to see in action so you can see how it works and what it can do.",
      "Everyone who attends an event hosted at Brisbane Makerspace is required to follow the Brisbane Makerspace code of conduct. If you breach this code of conduct you may be asked to leave.",
    ],
    when: {
      date: "December: 8th, 22nd; January: 5th, 19th",
      time: "6:30pm – 8:00pm",
    },
    eventbriteUrl: "https://brisbane-3dprinting-meetup.eventbrite.com.au",
  },
] satisfies readonly EventProps[];
