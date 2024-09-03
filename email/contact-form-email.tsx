import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  email: string;
  name: string;
  mobile: string;
};

export default function ContactFormEmail({
  message,
  email,
  name,
  mobile
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Máte novú správu z Vašej webstránky</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Návštevník stránky Vám zaslal následujúcu správu:
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Odosielateľ: {name}</Text>
              <Text>Email odosielateľa: {email}</Text>
              <Text>Mobil odosielateľa: {mobile}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}