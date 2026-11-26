# Shared Components

## Overview

Briefly explain the purpose of this document and that the components below
were identified by reviewing the application's screens.

---

## Project Folder Structure

In this project, we use a combination of **Feature-Based Architecture** and **Atomic Design** to keep the code organized, reusable, and easy to maintain

### Feature-Based Structure

- Each feature has its own folder inside the `features` directory
- Each feature contains all the components and files related to it
- Example: `auth`, `dashboard`, `members`, `projects`, and `tasks`
- All components related to a specific feature are kept together

### Atomic Design Structure

Each feature is organized into smaller folders based on the role and complexity of its components:

1. **Atoms:** Basic building blocks that cannot be broken down further, such as buttons and inputs
2. **Molecules:** Groups of atoms working together as a single component, such as a form field containing a label and an input
3. **Organisms:** Larger components composed of atoms and molecules, such as login forms or navigation bars
4. **Templates:** Define the overall layout and arrangement of components on a page, providing a structure for the page content

## Shared Components

| #   | Component    | Description                              | Used In                       | Screenshot                                          |
| --- | ------------ | ---------------------------------------- | ----------------------------- | --------------------------------------------------- |
| 1   | Input        | Reusable text input field                | Login, Resgister, Add Project | [Login-Form](/src/docs/Main Form Container.png)     |
| 2   | Button       | Reusable Button for user actions         | All Authenticated pages       | [Screenshot](...)                                   |
| 3   | Sidebare     | Main Application Navigation              | Multiple Pages                | [Home-Page](/src/docs/Aside - SideNavBar Shell.png) |
| 4   | Project card | Displays individual project information  | Projects page                 | [Project-Epics](/src/docs/Epic%20Card%202.png)      |
| 5   | Search input | used to search in multiple pages         | Projects page,Tasks board     | [Screenshot](...)                                   |
| 6   | User Avatar  | A circular user displaying assigned user | Header,Tasks board            | [Screenshot](/src//docs/Background+Shadow.png)      |     |
