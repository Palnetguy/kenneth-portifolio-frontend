# Masaba Kenneth Portfolio

Personal portfolio rebuilt on the `kintarowwwards` stack and interaction model.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-purple?style=for-the-badge&logo=framer)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

## Overview

This project is Masaba Kenneth's portfolio site. It keeps the same core stack, structure, and motion language as `kintarowwwards`, while replacing the original branding and content with Kenneth's profile, engineering background, and projects.

## Stack

- Next.js
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis
- next-themes
- shadcn-style UI primitives

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Backend Data

The portfolio loads profile, project, and service data from the Django backend.
Set the backend API base URL in the deployment environment:

```bash
BACKEND_API_URL=https://backend.masaba-kenneth.info/api
```

For local development with Django running on port 8000:

```bash
BACKEND_API_URL=http://127.0.0.1:8000/api
```

Static JSON content remains as fallback data for fields the backend does not
store yet, such as project category, year, stack labels, roadmap, and localized
section copy.

## License

This project includes adapted code from the upstream MIT-licensed `kintarowwwards` project. See [LICENSE](LICENSE) for the original license terms.
