import React from "react";
import Form from "@rjsf/core";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import "./App.css";

const schema: RJSFSchema = {
  title: "Test form",
  type: "object",
  description: "Simple address form",
  properties: {
    mailingAddress: {
      title: "Mailing Address",
      type: "object",
      properties: {
        street: {
          // $schema: "http://json-schema.org/draft-07/schema#",
          // id: "types/addressLine",
          title: "Street Address",
          // description: "Schema for an address line",
          type: "string",
          pattern: "^[a-zA-Z0-9,.'& -/]+$",
        },
        street2: {
          // $schema: "http://json-schema.org/draft-07/schema#",
          // id: "types/addressLine",
          title: "Street Address 2",
          // description: "Schema for an address line",
          type: "string",
          pattern: "^[a-zA-Z0-9,.'& -/]+$",
        },
        city: {
          // $schema: "http://json-schema.org/draft-07/schema#",
          // id: "types/defaultString.json",
          title: "City",
          // description:
          //   "Schema for a default string. Unless otherwise noted we assume it is a sufficient length\n   for a field. The default string doesn't enforce any particular pattern.",
          type: "string",
          pattern: "^[a-zA-Z0-9,.' -]+$",
        },
        state: {
          // $schema: "http://json-schema.org/draft-07/schema#",
          // id: "types/elisState",
          title: "State",
          // description:
          //   "States and territories per ELIS. Source is ELIS External API /v1/reference-data/states.",
          type: "string",
        },
        zipCode: {
          // $schema: "http://json-schema.org/draft-07/schema#",
          // id: "types/zipCode",
          title: "Zip Code",
          // description: "Schema for a zip code",
          type: "string",
          pattern: "^[0-9]{5}(?:[-][0-9]{4})?$",
        },
      },
    },
  },
};

const uiSchema: UiSchema = {
  mailingAddress: {
    "ui:classNames": "mailing-address",
    street: {
      "ui:classNames": "street",
      "ui:autofocus": true,
      // "ui:emptyValue": "",
      "ui:placeholder": "Address line 1",
    },
    street2: {
      "ui:classNames": "street",
      "ui:placeholder": "Address line 2",
    },
    city: {
      "ui:classNames": "city",
      "ui:placeholder": "City",
    },
    state: {
      "ui:classNames": "state",
      "ui:placeholder": "State",
    },
    zipCode: {
      "ui:classNames": "zip-code",
      "ui:placeholder": "Zip Code",
    },
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form schema={schema} uiSchema={uiSchema} validator={validator} />
      </header>
    </div>
  );
}

export default App;
