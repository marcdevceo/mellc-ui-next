# 🧩 MELLC UI Framework

A custom design system and component library built with Tailwind CSS + React. Inspired by React Native’s structure, this framework brings consistency, scalability, and developer joy to every web project I build.

---

## 🚀 What It Is

This is my personal UI framework — used across my projects to streamline:

- Typography (`<Title />`, `<Subtitle />`, `<Text />`)
- Spacing (`<Spacer />`, `<Main />`, `gapClass`, `paddingClass`)
- Layout (`<FlexContainer />`, `<Container />`)
- Components (`<Button />`, `<Card />`, `<Modal />` and more)
- Design tokens (color, spacing, typography)

It follows a semantic, token-driven approach and helps enforce consistent design language across apps.

---

## 📦 Tech Stack

- **Framework:** React (Next.js compatible)
- **Styling:** Tailwind CSS
- **Structure:** Custom components + design tokens
- **Directory Style:** Inspired by React Native and atomic design

---

## 📁 File Structure

/components/ui/ # Reusable UI components
/theme/ # Tokens: colors, spacing, typography
/types/ # TypeScript interfaces for props
/styles/ # Global styles (if needed)


---

## ✨ Features

- 🔁 Responsive design built into token system  
- 🎨 Swappable color tokens per project (`theme/color.ts`)  
- ⚙️ Abstracted spacing and layout logic  
- 🧠 Built from real-world project needs  
- 📐 Uniform typography inspired by React Native  

---

## 📚 Usage Example

```tsx
import { Main, FlexContainer, Spacer } from "@/components/ui/Spacer";
import Title, { Subtitle, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <Main gap="md">
      <Title>MELLC UI Framework</Title>
      <Spacer size="lg" />
      <Text>This text component ensures consistency across the app.</Text>
      <FlexContainer gap="md">
        <Button variant="primary">Click Me</Button>
        <Button variant="secondary">Or Me</Button>
      </FlexContainer>
    </Main>
  );
}

🧪 Status

🚧 Work in Progress — This framework is actively evolving as I build new projects and refine my product development process.
🧠 Why I Built It

After working in both web and mobile development, I wanted a system that:

    Felt as structured as React Native

    Took full advantage of Tailwind CSS

    Could be dropped into any project and feel consistent

It started as a tool for myself — now it powers my portfolio and other production apps.
🔐 License

MIT — feel free to fork, adapt, or contribute.
✍🏾 Built by Marcus Kimber

Let me know if you want:

    A docs/ folder for detailed component usage

    A CONTRIBUTING.md for collaborators

    A CHANGELOG.md to track updates over time

This README sets the tone: you’re not playing. You’re building systems. 💼🛠️
