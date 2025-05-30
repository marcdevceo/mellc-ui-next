import Card from "@/components/ui/Card";
import {
  FlexContainer,
  Main,
  SpacerY,
} from "@/components/ui/Spacer";
import Title, { Subtitle, Text } from "@/components/ui/Typography";

export default function HomePage() {
  return (
    <Main padding="md">
      <Title color="success">MELLC UI Framework</Title>

      <SpacerY size="xl" />

      <Text>This is the start of your reusable UI components.</Text>

      <SpacerY size="lg" />

      <FlexContainer  gap="xl">
        <Card
          background="primary"
          padding="xl"
          onClick={() => alert("clicked")}
        >
          <Title size="lg" color="neutral">
            Card Title
          </Title>
          <Text>This is a card body using your design system.</Text>
        </Card>

        <Card
          background="primary"
          padding="xl"
          onClick={() => alert("clicked")}
        >
          <Title size="lg" color="neutral">
            Card Title
          </Title>
          <Text>This is a card body using your design system.</Text>
        </Card>
      </FlexContainer>

      <SpacerY size="xl" />

      <Subtitle>Welcome to MELLC UI</Subtitle>

      <SpacerY size="md" />

      <Text>This text uses your custom neutral gray.</Text>
    </Main>
  );
}
