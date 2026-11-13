/* =========================================================================
   HUB LINKS
   This is the only file you need to edit to add, change, or remove a link.

   TO ADD A LINK
   1. Copy one of the blocks below, from the opening { to the closing },
   2. Paste it into the "links" list and change the text between the quotes.
   3. Save (on GitHub: "Commit changes"). The page updates in about a minute.

   WHAT EACH LINE MEANS
     name         What people will see as the title.
     url          The full web address, starting with https://
                  Leave it as "" and the card shows "Coming soon".
     description  One short sentence on what it is for.
     category     Must match one of the names in "categories" below, exactly.
     owner        Who to ask when it breaks.
     status       Optional. "new" shows a New badge.
                  "moving" shows a Moving badge (link is about to change).
                  Leave as "" for nothing.

   RULES THAT KEEP THE PAGE WORKING
   - Every line ends with a comma.
   - Text goes inside straight double quotes: "like this"
   - If the page goes blank after an edit, a comma or quote is missing.
     Undo the last change on GitHub (History, then Revert) and try again.

   REMINDER: this page is public.
   - Never paste a link that contains "token=" or a password.
   - Prefer tools that ask people to sign in.
   ========================================================================= */

window.HUB = {

  title: "Cockrell Hill & DBU Hub",
  subtitle: "Every tool, form, and tracker in one place.",
  contact: "Brent",          // shown at the bottom: "Missing a link? Ask ..."
  updated: "November 12, 2026",

  // Sections appear on the page in this order.
  categories: [
    "Operations",
    "Training",
    "HR",
    "Finance",
    "General",
    "Marketing",
    "Catering",
    "Facilities & Supply",
    "Leadership",
    "DBU",
  ],

  links: [

    // ---------------- Operations ----------------
    {
      name: "Schedule Counter",
      url: "https://script.google.com/macros/s/AKfycbyTz_uj9fDn2yTmqPsISWQ_1P3BP_g-IW3TZ1QFq0vkABbWL1Del42MZyU8Ormy2_rQ/exec?page=schedule",
      description: "Check scheduled labor against the day's targets.",
      category: "Operations",
      owner: "Brent",
      status: "",
    },
    {
      name: "Positional Closing Checklist",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSe3y0nbfwKCR3GRLSeao1qI330ouZmWSbNQBmd4DfrYNlQqYg/viewform",
      description: "Closing checklist for each position.",
      category: "Operations",
      owner: "Brent",
      status: "",
    },
    {
      name: "Manager Closing Checklist",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeT_kYjzPJr-9rZZXQkRbiofXOYTIargCOCE9O4PPx1gJ_DKQ/viewform",
      description: "End-of-night checklist for the closing manager.",
      category: "Operations",
      owner: "Brent",
      status: "",
    },
    {
      name: "2-3 PM Operational Lead Checklist",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdBhkD8GEkD4TAnsuvvDJrabkkQvaa15-COGdEH3gkIZmd35Q/viewform",
      description: "Afternoon checklist for the operational lead.",
      category: "Operations",
      owner: "Brent",
      status: "",
    },
    {
      name: "Waste Tracking",
      url: "",
      description: "Daily waste entry and reporting.",
      category: "Operations",
      owner: "Brent",
      status: "",
    },

    // ---------------- Training ----------------
    {
      name: "H.E.A.R.D. Log",
      url: "https://heardlogch.netlify.app/",
      description: "Log and follow up on guest recovery.",
      category: "Training",
      owner: "Brent",
      status: "",
    },
    {
      name: "Daily Training Log",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdOh_b_wxfn0S_HcRto3X7lBHxaXzdF2zCIry2WkIfF5J48eA/viewform",
      description: "Record what was trained today.",
      category: "Training",
      owner: "Brent",
      status: "",
    },
    {
      name: "Training Tracker",
      url: "",
      description: "Who is trained on what, and what is due.",
      category: "Training",
      owner: "Brent",
      status: "",
    },

    // ---------------- HR ----------------
    {
      name: "PTO Request Form",
      url: "https://script.google.com/macros/s/AKfycbx0q-TUhgXBm64vfZDtNYtBD2bfrTsU7iXA4hfAqwShNzSfyj4xi4bgh0InfZh-KI04/exec?view=pto-request",
      description: "Request paid time off.",
      category: "HR",
      owner: "Brent",
      status: "",
    },
    {
      // The only address on file is the form's editing link, which team
      // members cannot open. Paste the form's "Send" link here.
      name: "W2 Address Change Form",
      url: "",
      description: "Update the mailing address for your W-2.",
      category: "HR",
      owner: "Brent",
      status: "",
    },

    // ---------------- Finance ----------------
    {
      name: "Refund Tracker",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScrqTKi6nWiuI6hfjD5A-74sO2JTCShB82I3pmqTLN8guGd9w/viewform",
      description: "Log a guest refund.",
      category: "Finance",
      owner: "Brent",
      status: "",
    },

    // ---------------- General ----------------
    {
      name: "Uniform Request Form",
      url: "https://script.google.com/macros/s/AKfycbx0q-TUhgXBm64vfZDtNYtBD2bfrTsU7iXA4hfAqwShNzSfyj4xi4bgh0InfZh-KI04/exec?view=uniform-request",
      description: "Order uniform pieces.",
      category: "General",
      owner: "Brent",
      status: "",
    },
    {
      name: "Promo Free Tracker",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdnJKgw0ZWmj-c60ae12pkL6c8DbuW5uYJquDP5Bzw-bISduA/viewform",
      description: "Log promotional free items given out.",
      category: "General",
      owner: "Brent",
      status: "",
    },

    // ---------------- Marketing ----------------
    {
      name: "Giving Request Form",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfuooG1CPK6_zP94VvqOhpqFq0fn5k82RB_e87I0LtGo1zlWQ/viewform",
      description: "Donation and sponsorship requests.",
      category: "Marketing",
      owner: "Brent",
      status: "",
    },

    // ---------------- Catering ----------------
    {
      name: "Catering Quote Tool",
      url: "https://script.google.com/macros/s/AKfycbygIPt07mAdW0zI1suEtdh8VMhBSRlvQeA_0n4tyRquqr91H0fzruaBLcIDeo1U9icX/exec",
      description: "Build and email a catering quote.",
      category: "Catering",
      owner: "Brent",
      status: "",
    },
    {
      name: "Catering Pipeline",
      url: "",
      description: "Open quotes and upcoming orders.",
      category: "Catering",
      owner: "Brent",
      status: "",
    },

    // ---------------- Facilities & Supply ----------------
    {
      name: "Facilities Tracker",
      url: "",
      description: "Open repairs, vendors, and maintenance.",
      category: "Facilities & Supply",
      owner: "Carlos",
      status: "",
    },
    {
      name: "Daily Facilities Walk",
      url: "",
      description: "Lot walk and truck order check.",
      category: "Facilities & Supply",
      owner: "Anthony",
      status: "",
    },
    {
      name: "Inventory Analyzer",
      url: "",
      description: "Inventory counts and usage trends.",
      category: "Facilities & Supply",
      owner: "Brent",
      status: "",
    },

    // ---------------- Leadership ----------------
    {
      name: "Manager Hub",
      url: "https://script.google.com/macros/s/AKfycbwuAW9sf08q8FmkF4YmjShpev2FgzS2idV4HuERDYw-LdM3V-8_BAMpJob3K6nUTdiTRA/exec",
      description: "Manager tools in one place.",
      category: "Leadership",
      owner: "Brent",
      status: "",
    },
    {
      // Do not paste the address that contains "token=" here.
      name: "Payroll Operations Hub",
      url: "",
      description: "Payroll review and processing for both locations.",
      category: "Leadership",
      owner: "Brent",
      status: "",
    },
    {
      name: "OT Reconciliation Calculator",
      url: "",
      description: "Checks overtime across Cockrell Hill and DBU.",
      category: "Leadership",
      owner: "Brent",
      status: "",
    },
    {
      name: "Staffing Calibration",
      url: "",
      description: "Sales-per-labor-hour staffing targets by daypart.",
      category: "Leadership",
      owner: "Brent",
      status: "",
    },

    // ---------------- DBU ----------------
    {
      name: "Example: DBU project",
      url: "",
      description: "Replace this with one of Kyla's projects.",
      category: "DBU",
      owner: "Kyla",
      status: "new",
    },

  ],
};
