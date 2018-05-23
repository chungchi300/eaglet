// in posts.js
import React from "react";
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  DisabledInput,
  TextInput,
  LongTextInput,
  DateInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <DateField source="published_at" />
      <TextField source="average_note" />
      <TextField source="views" />
      <EditButton basePath="/posts" />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <TextInput source="teaser" options={{ multiLine: true }} />
      <LongTextInput source="body" />
      <DateInput label="Publication date" source="published_at" />
      <TextInput source="average_note" />
      <DisabledInput label="Nb views" source="views" />
    </SimpleForm>
  </Edit>
);

var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["link", "image"], // add's image support
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"] // remove formatting button
];

export const PostCreate = props => (
  <Create title="Create a Post" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <div style={{ width: "1024px" }}>
        <RichTextInput toolbar={toolbarOptions} source="body" />
      </div>
    </SimpleForm>
  </Create>
);
