import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DaniEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
