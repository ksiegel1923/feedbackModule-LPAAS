export const header = {
  navDropDowns: [
    // dropdowns
    // first dropdown start
    [
      {
        LABEL: "navigation.dropdowns.0.linkLabels.0",
        LINK: "https://www.microsoft.com/en-us/microsoft-365/excel",
      },
      {
        LABEL: "navigation.dropdowns.0.linkLabels.1",
        LINK: "https://www.google.com/sheets/about/",
      },
      {
        LABEL: "navigation.dropdowns.0.linkLabels.2",
        LINK: "https://marketingplatform.google.com/about/analytics/",
      },
    ],
  ],
  parentLinks: [], // parent (standalone) links
};

export const footer = {
  primary: header.navDropDowns
    .flat() // turn nested array into flat/unnested array
    .concat(header.parentLinks), // add parent links (taken directly from header; don't make change here)
  secondary: {
    TERMS: "terms",
    PRIVACY: "privacy",
  },
};

export const landing = {
  HERO_BUTTON_LINK:
    "https://docs.google.com/document/d/1SmzwQEeQJy2IyaaJgYfGwjRfaCmcJw1hVxxVP4AvVdg/edit#",
  SECTION_BUTTON_LINK:
    "https://docs.google.com/document/d/1SmzwQEeQJy2IyaaJgYfGwjRfaCmcJw1hVxxVP4AvVdg/edit#",
};

export const page404 = {
  HOME: "/",
  CONTACT: "https://www1.nyc.gov/assets/cto/#/contact",
};
