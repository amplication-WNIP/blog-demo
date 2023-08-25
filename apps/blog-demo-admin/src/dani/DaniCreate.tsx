import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DaniCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="one more" source="oneMore" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
