This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
node version=20.11.0
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Volunteer Documentation
Volunteer Application Form Documentation
Summary
This React component, VolunteerAppForm, is designed to create a user-friendly volunteer application form. It includes various sections such as Personal Information, Volunteer Information, Skills and Interests, and References. Users can select preferred roles, availability, time slots, and relevant skills, providing detailed information about themselves for volunteering opportunities.

Functionality
Components Used
DropdownMenuCheckboxes Component

Purpose: Renders a dropdown menu with checkboxes for selecting multiple options.
Props:
label: Label for the dropdown.
options: Array of objects containing options (label, value).
selectedValues: Array of currently selected values.
onSelectionChange: Function to handle selection changes.
Button Component

Purpose: Renders a button with different variants (e.g., primary, outline).
Props:
variant: Variant style of the button (primary, outline).
State Management
useState Hooks: Used to manage state variables for selected roles, availability, time slots, relevant skills, and form data (including personal information and references).
Event Handling
Form Submission: Handles form submission with validation and collects all entered data.
Input Changes: Handles input changes for text fields, dropdowns, and checkboxes.
Structure
Grid Layout: Utilizes CSS grid for responsive layout design, ensuring readability and accessibility across different screen sizes.
Validation
Required Fields: Essential fields such as Full Name, Gender, Address, Phone Number, Email Address are marked as required for form submission.
Usage
Installation
Ensure React and required UI components (DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, Button) are installed and imported correctly into your React project.

Integration
Import the VolunteerAppForm component into your React application.
Place <VolunteerAppForm /> in your desired component or route to render the volunteer application form.
Customization
Extend or modify roleOptions, availabilityOptions, timeSlotOptions, skillOptions arrays to customize selectable options based on your organization's needs.
Adjust CSS styles (className attributes) to match your project's design guidelines.
Example Usage
jsx
Copy code
import React from "react";
import VolunteerAppForm from "./VolunteerAppForm";

const App = () => {
  return (
    <div className="App">
      <VolunteerAppForm />
    </div>
  );
};

export default App;
Notes
Ensure all form fields are tested for usability and accessibility.
Implement backend integration to handle form submission and data storage as per organizational requirements.