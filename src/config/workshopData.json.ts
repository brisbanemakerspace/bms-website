import { type WorkshopProps } from "./types/configDataTypes";

/**
 * * Workshops — one entry per class, rendered by the /workshops/ list (entries with `listing: true`)
 * and the /workshops/<slug>/ detail pages (every entry).
 *
 * Copy and prices are carried over from the old brisbanemaker.space booking pages. `bookingId` is the
 * ClassBento booking-widget id embedded on the detail page (https://classbento.com.au/<id>-booking-widget).
 * The Valentine's workshops are seasonal and are not listed on the /workshops/ index.
 */
export const workshops = [
  {
    slug: "laser-cutting",
    title: "Laser Cutting for Beginners",
    listing: true,
    listPrice: "Sessions from $69 ($65 for 2 or more!)",
    listDescription: [
      "Have you ever wanted to laser cut or engrave your own creations? Learn all the basics of laser cutting for beginners in this hands-on Brisbane workshop.",
      "In this two-hour workshop, you will learn everything you need to know to get started with laser cutting. We’ll cover all of the basics, including how laser cutting works, the different types of machines and some tips and tricks for getting started. By the end of this workshop, you’ll know how to operate our laser cutter and have a custom engraved keychain or drink coaster!",
    ],
    price: "$69 per person, or $65 for 2 or more (take a friend!)",
    description: [
      "Have you ever wanted to laser cut or engrave your own creations? Learn all the basics of laser cutting for beginners in this hands-on Brisbane workshop.",
      "In this two-hour workshop, you will learn everything you need to know to get started with laser cutting. We’ll cover all of the basics, and by the end of this workshop, you’ll know how to operate our laser cutter and have a custom engraved keychain to take home!",
    ],
    coverHeading: "What we’ll cover in the workshop:",
    covers: [
      "The different types of laser cutters",
      "How laser cutting/engraving works",
      "The pros and cons of the technology",
      "The process of laser cutting your very own item",
      "Laser cutting and engraving your own custom keychain to take home",
    ],
    closing: [],
    accessibility:
      "Accessibility note: unfortunately our workshop is only accessible via a set of stairs and is not wheelchair accessible.",
    bookingId: "qp2tum5nau",
  },
  {
    slug: "3d-printing",
    title: "3D Printing for Beginners",
    listing: true,
    listPrice: "Sessions from $69 ($65 for 2 or more!)",
    listDescription: [
      "Dive into the world of innovative technology in this 3D printing workshop in Brisbane, designed for beginners.",
      "In this two-hour workshop, you’ll learn everything you need to know to get started with 3D printing. We cover various topics, including the types of 3D printers available, what materials to use, some basic print settings and show you a typical 3D printing workflow. We’ll cover all of the basics, and by the end of this workshop, you’ll know how to operate a 3D printer!",
    ],
    price: "$69 per person, or $65 for 2 or more (take a friend!)",
    description: [
      "Dive into the world of innovative technology in this 3D printing workshop in Brisbane, designed for beginners.",
      "In this two-hour workshop, you’ll learn everything you need to know to get started with 3D printing. We’ll cover all of the basics, and by the end of this workshop, you’ll know how to operate a 3D printer!",
      "We cover various topics, including the types of 3D printers available, what materials to use, some basic print settings and show you a typical 3D printing workflow.",
    ],
    coverHeading: "What we’ll cover in the workshop:",
    covers: [
      "The different types of 3D printers",
      "How 3D printing works",
      "What materials to use",
      "The pros and cons of the technology",
      "Basic print settings and how to tweak them",
      "A typical 3D printing workflow and live demo",
    ],
    closing: [],
    accessibility:
      "Accessibility note: unfortunately our workshop is only accessible via a set of stairs and is not wheelchair accessible.",
    bookingId: "2xetumtjau",
  },
  {
    slug: "led-lamp",
    unavailable: true,
    title: "Laser Cut LED Lamp Workshop",
    listing: true,
    listPrice: "Sessions from $59 ($55 for 2 or more!)",
    listDescription: [
      "Have you ever wanted to laser cut a personalised LED lamp? These DIY customised lamps make for truly unique gift ideas or the perfect addition to your home decor. In this 1.5 hour workshop at Brisbane Makerspace, you will laser cut and assemble your own customised LED lamp.",
      "We’ll spend the first half helping you customise and perfect your design, then we’ll cut out and engrave a piece of beautiful clear acrylic on our laser cutter. Each lamp base includes a multi coloured LED strip with a remote control.",
    ],
    price: "$59 per person, or $55 for 2 or more (take a friend!)",
    description: [
      "Have you ever wanted to laser cut a personalised LED lamp? These DIY customised lamps make for truly unique Christmas gift ideas or the perfect addition to your home decor.",
      "In this 1 to 1.5 hour workshop at Brisbane Makerspace, you will laser cut and assemble your own customised LED lamp. We’ll spend the first half helping you customise and perfect your design, then we’ll cut out and engrave a piece of beautiful clear acrylic on our laser cutter. Each lamp base includes a multi coloured LED strip with a remote control.",
    ],
    coverHeading: "What we’ll cover in the workshop:",
    covers: [
      "A brief introduction to how laser cutting works.",
      "Finding and customising a design to be laser cut.",
      "Laser cutting your own acrylic insert to be placed on top of the provided lamp base.",
    ],
    closing: [
      "This workshop requires no prior knowledge or skills and is perfect for beginners who are interested in the laser cutting process. Everyone will take home their own one-of-a-kind LED lamp!",
    ],
    accessibility:
      "Accessibility note: unfortunately our workshop is only accessible via a set of stairs and is not wheelchair accessible.",
    bookingId: "vgytujujau",
  },
  {
    slug: "laser-cut-clock",
    title: "Personalised Laser Cut Clock Workshop",
    listing: false,
    price: "$59 per person, or $55 for 2 or more (take a friend!)",
    description: [
      "In this 1.5 hour workshop at Brisbane Makerspace, you will laser cut and assemble your own DIY clock. This makes for an ideal Valentine’s Day gift or activity.",
      "First we’ll help you customise and perfect your design, then we’ll cut out and engrave some pieces of gorgeous European Poplar timber on our laser cutter. Once the cut and engrave is complete, we’ll guide you to assemble the clock.",
    ],
    coverHeading: "What is included in the workshop:",
    covers: [
      "A brief introduction to how laser cutting/engraving works.",
      "Adding a personalised design to our clock template.",
      "Creating and assembling your own DIY clock.",
      "Clock mechanism and battery.",
    ],
    closing: [
      "This workshop requires no prior knowledge or skills and is perfect for beginners who are interested in the laser cutting process. Everyone will take home their own personalised laser cut clock; the perfect gift or addition to your home!",
    ],
    accessibility:
      "Accessibility note: unfortunately our workshop is only accessible via a set of stairs and is not wheelchair accessible.",
    bookingId: "rpxtqq5nau",
  },
  {
    slug: "valentines-gift-box",
    title: "DIY Valentine’s Day Gift Box Workshop",
    listing: false,
    price: "$49 per person, or $45 for 2 or more (take a friend!)",
    description: [
      "In this one-hour workshop at Brisbane Makerspace, you will laser cut and assemble your own DIY Valentine’s Day gift. If you want to show someone special that you really care about them, this personalised, DIY gift is sure to do the job!",
      "First we’ll help you customise and perfect your design, then we’ll cut out and engrave some pieces of gorgeous European Poplar timber on our laser cutter. Once the cut and engrave is complete, we’ll guide you to glue together and assemble the gift box. Afterwards, you can fill it with a selection of praline chocolates from our friends at the Sweet Relief confectionery store.",
    ],
    coverHeading: "What is included in the workshop:",
    covers: [
      "A brief introduction to how laser cutting/engraving works.",
      "Adding a personalised message to a DIY Valentine’s Day gift box.",
      "Creating and assembling your own DIY Valentines Day gift box.",
      "A selection of praline chocolates to fill your chocolate box.",
    ],
    closing: [
      "This workshop requires no prior knowledge or skills and is perfect for beginners who are interested in the laser cutting process. Everyone will take home their own personalised Valentine’s Day gift box full of delicious praline chocolates!",
    ],
    accessibility:
      "Accessibility note: unfortunately our workshop is only accessible via a set of stairs and is not wheelchair accessible.",
    bookingId: "rpxtqq5nau",
  },
  {
    slug: "cross-stitch",
    title: "Cross-Stitch Embroidery Workshop",
    listing: false,
    price: "$59 per person, or $55 for 2 or more (take a friend!)",
    description: [
      "Embroidery can be a daunting hobby, but it doesn’t have to be! Learn how to cross-stitch from an experienced and avid cross-stitcher (Emily). This class is beginner friendly and includes a complete cross-stitch kit to get started.",
      "This two-hour class will get you started on the basics of creating nice neat stitches, pattern reading and managing materials. The class also comes with a set of basic cross-stitching materials for you to take home at the end of the class.",
    ],
    coverHeading: "What we’ll cover in the workshop:",
    covers: [
      "Creating nice, neat stitches",
      "Understanding & reading patterns",
      "How to manage your materials",
    ],
    closing: [
      "This workshop requires no prior knowledge or skills and is perfect for absolute beginners! The class also comes a set of FREE cross-stitching materials for you to take home at the end of the class.",
    ],
    accessibility:
      "Accessibility note: unfortunately our workshop is on the first floor and is only accessible via stairs. Due to the heritage and design of the building, it is infeasible to add a wheelchair lift, as much as we’d like to. We hope that in the future we can grow large enough to move into a bigger and more accessible building.",
    bookingId: "7v5f424fau",
  },
  {
    slug: "diy-robot",
    title: "DIY Robot Workshop for Beginners",
    listing: false,
    price: "$99 per person, or $95 for 2 or more (take a friend!)",
    description: [
      "Dive into the world of robotics in this DIY robot workshop in Brisbane, designed for beginners. No experience necessary!",
      "In this three-hour workshop, you’ll build your very own robot (with moving parts and LEDs!) and learn some basic electronics concepts, including how circuits work.",
      "Once your robot has been built and tested, you’ll then be given a chance to decorate and bedazzle it using a selection of fun arts and craft supplies. You also get to choose two of our 3D printed accessories to add some character to your bot.",
    ],
    coverHeading: "What we’ll cover in the workshop:",
    covers: [
      "A brief introduction to basic electronics concepts.",
      "Robot components and how they fit together.",
      "Brainstorm some robot design ideas.",
      "Build and assemble your robot.",
      "Decorate and bedazzle your robot using a variety of fun arts and crafts, and 3D printed accessories.",
    ],
    closing: [
      "Please note that the length of time this workshop takes varies depending on the number of people in your class and how much time you want to spend customising your robot. Typically classes take around 2 hours, but may run up to 3 hours in some cases.",
    ],
    accessibility:
      "Accessibility note: unfortunately our workshop is only accessible via a set of stairs and is not wheelchair accessible.",
    bookingId: "r78fd244au",
  },
] satisfies readonly WorkshopProps[];

/** ClassBento gift-card widget id embedded on the /gift-cards/ page. */
export const giftCardWidgetId = "avn4mquwgau";

/** URL of a workshop's ClassBento booking widget. */
export const bookingWidgetUrl = (bookingId: string): string =>
  `https://classbento.com.au/${bookingId}-booking-widget?custom_color=%230072DC`;

/** The workshops shown on the /workshops/ index, with their index-card fields guaranteed present. */
export const listedWorkshops = workshops.flatMap((workshop) =>
  workshop.listing && "listPrice" in workshop && "listDescription" in workshop
    ? [
        {
          ...workshop,
          listPrice: workshop.listPrice,
          listDescription: workshop.listDescription,
        },
      ]
    : [],
);
