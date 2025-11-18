# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zen Whisper is an AI-powered spiritual copy generator built as a React web application. It generates short, calming, and insightful phrases based on user emotions, problems, or keywords using Google's Gemini AI.

## Development Commands

```bash
# Start development server (port 3000)
pnpm dev
# or
npm run dev

# Build for production
pnpm build
# or
npm run build

# Preview production build
pnpm preview
# or
npm run preview

# Install dependencies
pnpm install
```

## Architecture

### Technology Stack
- **Frontend**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS (via CDN)
- **AI Service**: Google Gemini AI (@google/genai)

### Project Structure
```
src/
├── App.tsx                 # Main application component with core logic
├── components/            # UI components
│   ├── InputArea.tsx      # Text input and submission handling
│   ├── ResultDisplay.tsx  # Generated content display with animations
│   ├── Loader.tsx         # Loading spinner component
│   └── icons.tsx          # Sparkle icon UI element
└── services/
    └── geminiService.ts   # AI API integration and error handling
```

### Core Application Flow
1. User inputs emotions/problems/keywords via `InputArea`
2. Input is processed and sent to Google Gemini 2.5 Flash through `geminiService`
3. AI generates spiritual copy based on comprehensive system instructions
4. Results are displayed with fade-in animations via `ResultDisplay`

### Key Implementation Details

#### AI Integration
- Uses Google Gemini 2.5 Flash model
- Comprehensive system prompt ensuring gentle, concrete, non-cliché responses
- Multiple AI provider support (Kimi, Moonshot, OpenRouter, Gemini)
- Error handling with user-friendly messages

#### UI/UX Features
- Dark theme with cyan/violet gradient accents
- Responsive design using Tailwind CSS
- Enter key submission (Shift+Enter for new line)
- Loading states and animations
- Google Fonts (Inter) integration

#### TypeScript Configuration
- Path alias: `@/*` maps to root directory
- Strict mode enabled
- Modern bundler resolution (`"bundler": true` for `moduleResolution`)

## Environment Setup

Create `.env.local` with AI provider API keys:
```env
GEMINI_API_KEY=your_gemini_key
AI_PROVIDER=GEMINI
MOONSHOT_API_KEY=your_moonshot_key
OPENROUTER_API_KEY=your_openrouter_key
```

## Development Notes

- Uses functional components with React hooks
- State management via `useState` and `useCallback`
- Component-based architecture with TypeScript interfaces
- Error boundaries around AI API calls
- Vite's `define` config for environment variable exposure