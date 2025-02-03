# Pam Van Londen Website Migration

** Update Feb 2 All files were updated. 
** Some files in root of the main branch can't be deleted (they do not belong there). 
** Now launch sequence
# npm install
# npm run dev


## Overview

This project is migrating [Pam Van Londen's website](https://pamvanlonden.com/) to **React.js** and hosting it on **Render.com**. The goal is to improve maintainability, scalability, and user experience while keeping the site's design as close to the original as possible.

- **Main branch (production-ready code):** [GitHub Main Branch](https://github.com/PamVanLonden/pvlcom/tree/main)
- **Website migration branch:** [GitHub Migration Branch](https://github.com/PamVanLonden/pvlcom/tree/2024-php-site)
- **Project tasks and issues:** [GitHub Project Board](https://github.com/users/PamVanLonden/projects/1/views/1)
- **Google Sheets Data Source:** [Published Sheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vTyMseqbTrrpUYEXzyDZ0pyh2O4rKBNAClSCt5sEGcjsw-ZxMf-Zx77z2Nf-XIoyib4mz-0Z1-XBEun/pubhtml?gid=1&single=true)

## Code Review and Development Workflow

To maintain high-quality code, all changes must go through a **code review process** before being merged into the main branch.

- All new updates should be pushed to the **review-code** branch.
- After pushing changes, a **pull request (PR)** must be created for approval.
- Only after the PR is reviewed and approved will the changes be merged into the main branch.

## Migration Plan

### 1. Website Assessment
- The current website structure and design are being analyzed to determine necessary changes.
- React components will be created for UI elements to ensure responsiveness and maintain the existing site's look.

### 2. Feature Implementation
- The home page dynamically displays data from a **Google Sheet**.
- The **Google Sheets API** is used to fetch structured data and display it on the React website.

### 3. Deployment Plan
- The website will be deployed to **Render.com** for hosting.
- A smooth transition will be ensured by testing all components and data integrations before the official launch.

## Communication & Collaboration

- **Primary Communication:** Microsoft Teams chat for discussions and feedback.
- **Task Tracking:** GitHub issues and project board.

## Development Guidelines

- **Branching Strategy:**  
  - `main` – Stable production-ready branch.  
  - `review-code` – Branch for code review before merging.  
  - All work must be pushed to `review-code` before being reviewed and merged into `main`.

- **Data Integration:**  
  - Content is fetched from a **Google Sheet** to reduce manual updates.  
  - Ensure that no sensitive information is included in the published sheet.
 
## OpenSSL was removed on Feb 2. 
1. **OpenSSL Digital Envelope Routines Error**
If you encounter an OpenSSL error like:
```sh
Error: error:0308010C:digital envelope routines::unsupported
```
Try running:
```sh
set NODE_OPTIONS=--openssl-legacy-provider
npm start
```
If using Mac/Linux, run:
```sh
export NODE_OPTIONS=--openssl-legacy-provider
npm start
```

