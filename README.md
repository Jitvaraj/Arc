<div align="center">

# 🚀 Orion v2.2.4 — Cross-Platform Productivity & Tracking Engine

**Your Progress. Your Journey. Your Space.**

A focused personal tracking, discipline, workout, and academic productivity system built for high-performance students and professionals.

![Version](https://img.shields.io/badge/version-2.2.4-4ADE80?style=for-the-badge)
![Aesthetic](https://img.shields.io/badge/ui-dark_glassmorphism-111827?style=for-the-badge)
![Platform](https://img.shields.io/badge/platform-Android_|_PWA_|_Windows_|_iOS-334155?style=for-the-badge)
![AutoSave](https://img.shields.io/badge/autosave-realtime_base64_json-16a085?style=for-the-badge)

---

*Track your progress. Build consistency. Keep moving forward.*

[📦 View GitHub Releases](https://github.com/Jitvaraj/Orion-Forge/releases) · [🐙 GitHub Repository](https://github.com/Jitvaraj/Orion-Forge)

</div>

---

## 📱 Application Installation & Setup Guide

Orion runs locally on any device without requiring account creation or cloud servers. Choose your platform installation below:

### 🤖 1. Android Application (.APK)
- **Method**: Capacitor Native Android Package.
- **Download**: [Latest Android APK (GitHub Releases)](https://github.com/Jitvaraj/Orion-Forge/releases)
- **Steps**:
  1. Download `orion-v2.2.4-android.apk` on your mobile device.
  2. Tap the downloaded file to install. If prompted, enable **"Install from Unknown Sources"** in settings.
  3. Launch Orion from your app drawer.
  4. **Auto-Updates**: The app automatically checks `version.json` on startup and alerts you whenever a new version is released on GitHub!

---

### 🌐 2. Web Application & PWA (Desktop & Mobile Browser)
- **Method**: Progressive Web App with ServiceWorker Caching.
- **Steps**:
  - **Desktop (Chrome / Edge / Brave / Opera)**: Click the **Install** button (📥) in your browser address bar or click **"📲 Instant PWA Install"** inside Orion Settings.
  - **Android (Chrome / Samsung Internet)**: Tap the browser menu (⋮) ➔ Select **"Install App"** or **"Add to Home Screen"**.
  - **Offline Access**: Functions 100% offline after the initial visit.

---

### 💻 3. Windows Desktop Application (.ZIP / .EXE)
- **Method**: Electron Desktop App.
- **Download**: [Latest Windows Package (GitHub Releases)](https://github.com/Jitvaraj/Orion-Forge/releases)
- **Steps**:
  1. Download `orion-v2.2.4-windows.zip` from GitHub Releases.
  2. Extract the archive into your preferred directory (e.g. `C:\Program Files\Orion`).
  3. Double-click `Orion.exe` to run, or pin it to your Start Menu / Taskbar.

---

### 🍎 4. iPhone & iPad (iOS Safari PWA)
- **Method**: iOS WebKit Standalone Home Screen App.
- **Steps**:
  1. Open the live Orion web application in **Safari** on your iOS device.
  2. Tap the **Share button** (square with upward arrow) at the bottom toolbar.
  3. Scroll down and select **"Add to Home Screen"**.
  4. Tap **Add** in the top-right corner.
  5. Orion will launch as a full-screen, frameless mobile app!

---

## 🐙 Direct Raw GitHub File Links

Access or mirror key application configuration files directly from GitHub:

- 📄 **Version Checker**: [`version.json`](https://raw.githubusercontent.com/Jitvaraj/Orion-Forge/main/version.json)
- ⚙️ **Web App Manifest**: [`manifest.json`](https://raw.githubusercontent.com/Jitvaraj/Orion-Forge/main/manifest.json)
- ⚡ **Service Worker**: [`sw.js`](https://raw.githubusercontent.com/Jitvaraj/Orion-Forge/main/sw.js)
- 📱 **Capacitor Config**: [`capacitor.config.json`](https://raw.githubusercontent.com/Jitvaraj/Orion-Forge/main/capacitor.config.json)
- 🌐 **App Code Entry Point**: [`index.html`](https://raw.githubusercontent.com/Jitvaraj/Orion-Forge/main/index.html)

---

## 🛠️ Developer Setup & Self-Hosting Guide

To build or run Orion locally from source code:

```bash
# 1. Clone the repository
git clone https://github.com/Jitvaraj/Orion-Forge.git

# 2. Navigate to project root
cd Orion-Forge

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev

# 5. Build Android APK using Capacitor
npx cap sync android
npx cap open android

# 6. Build Windows Executable via Electron
npx electron-packager . OrionApp --platform=win32 --arch=x64
```

---

## 🌟 Key Features in v2.2.4

- ⚡ **Real-Time Base64/JSON Compressed Auto-Save Engine**: Automatically encodes and saves tracking snapshots on every button tap without requiring user relogging.
- 🔄 **Automatic Version Update Checker**: Periodically fetches `version.json` from GitHub Pages to notify users of new releases.
- 🎓 **Academic Dashboard**: Categorized tracking for School Exams and Coaching Tests with radial percentage gauges.
- 🎯 **Multi-Habit Consistency Engine**: Daily checklists, 7-day consistency indicators, and qualitative reflection logs.
- 🏋️ **Workout & Hypertrophy Tracker**: Exercise logging with sets, reps, and scheduled workout timelines.
- 💬 **Ranked Mindset Quote Wall**: Curated quote cards with tier glow outlines (Gold, Silver, Bronze, Lapis, Ruby, etc.).
- 📝 **Notes & Gemini AI Space**: Revision blueprints, Feynman technique guides, and study notes.

---

<div align="center">

🚀 **Orion v2.2.4** · *Small steps. Consistent effort. Visible progress.*

</div>
