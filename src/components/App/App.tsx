import { useState } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { getPhotos } from "../../services/photos";

export default function App() {
  const handleSubmit = async (newQuery: string) => {
    try {
      const results = await getPhotos(newQuery);

      if (results.length === 0) {
        alert("No movies found for your request.");
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <Section>
        <Form onSubmit={handleSubmit} />
      </Section>
    </>
  );
}
