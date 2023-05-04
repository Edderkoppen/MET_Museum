import { Form, FormGroup, FormText, Input, Label } from "reactstrap";

export default function AdvancedSearchPage() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Plain Text (Static)</Label>
        <Input plaintext value="Some plain text/ static value" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleUrl">Url</Label>
        <Input
          id="exampleUrl"
          name="url"
          placeholder="url placeholder"
          type="url"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleTime">Time</Label>
        <Input
          id="exampleTime"
          name="time"
          placeholder="time placeholder"
          type="time"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSearch">Search</Label>
        <Input
          id="exampleSearch"
          name="search"
          placeholder="search placeholder"
          type="search"
        />
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" />
        <Label check>Check me out</Label>
      </FormGroup>
    </Form>
  );
}
