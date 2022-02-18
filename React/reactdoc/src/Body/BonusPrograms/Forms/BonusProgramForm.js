import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Forms/FormComponents/FormikControl";

function BonusProgramForm() {

  const pgmperiods = [
    { key: 'Select Program Period', value:''},
    { key: 'Quaterly', value: 'quaterly'},
    { key: 'Yearly', value: 'yearly'},
    { key: 'Custom', value: 'custom'}
  ]

  const pgmcusttype = [
    { key: "SmallGroup", value: "smallgroup" },
    { key: "KeyAccount", value: "keyaccount" },
    { key: "LargeGroup", value: "largegroup" },
  ];

  const pgmplns = [
    { key: "Medical", value: "medical" },
    { key: "Speciality", value: "speciality" },
    { key: "Fianance", value: "finanace" },
  ];

  const initialValues = {
    pgmname: "",
    email: "sdf@dsf.com",
    pgmdesc: "",
    pgmprd: "",
    pgmcusttype: "",
    pgmplns: [],
    pgmStrDt: null
  };
  const validationSchema = Yup.object({
    pgmname: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    pgmdesc: Yup.string().required("Required"),
    pgmprd: Yup.string().required("Required"),
    pgmcusttype: Yup.string().required("Required"),
    pgmplns: Yup.string().required("Required"),
    pgmStrDt: Yup.date().required("Required").nullable()
  });
  const onSubmit = (values) => {

    console.log("Form Data :", values);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="pgmname"
              label="Program Name"
              name="pgmname"
            />
            <FormikControl
              control="textarea"
              type="pgmdesc"
              label="Program Description"
              name="pgmdesc"
            />
            <FormikControl
              control="select"
              label="Select Program Period    "
              name="pgmprd"
              options={pgmperiods}
            />
            <FormikControl
              control="radio"
              label="Select Customer Type  :    "
              name="pgmcusttype"
              options={pgmcusttype}
            />
            <FormikControl
              control="checkbox"
              label="Select Program applicable plans  :    "
              name="pgmplns"
              options={pgmplns}
            />
            <FormikControl
              control="date"
              label="Pick program start Date"
              name="pgmStrDt"
            />

            <button type="submit"> Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BonusProgramForm;
