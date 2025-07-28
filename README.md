# 📡 `@SessionsBot/backend-api-types`

This repository hosts a shared NPM package containing all internal **TypeScript types and interfaces** used across our backend API services. It helps keep types in sync and up to date across multiple related repositories (like bots, dashboards, and clients).


## 📦 Installation

```shell
npm install @SessionsBot/backend-api-types
```

## 🎯 Purpose

The goal of this package is to:
- Serve as the single source of truth for backend API type definitions
- Ensure consistent typing between projects (Discord bot, frontend, etc.)
- Reduce duplication and type drift over time

## 🛠️ Usage

In any TypeScript project:
```ts
import { APIErrorData } from '@SessionsBot/backend-api-types/types';
```
