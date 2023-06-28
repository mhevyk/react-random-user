import type { ChangeEvent } from "react";

export default function UserForm() {
  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return <form onSubmit={handleSubmit}>User Form</form>;
}
