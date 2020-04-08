import React from "react";
import { startReplay } from "./clients/semp-client";
import { Field, Form, Formik } from "formik";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";
import { CustomSelect } from "./CustomSelect";
import { SvgSolaceGreen } from "./img/SvgSolaceGreen";

function App() {
  const tab = useTabState({ selectedId: "cloud" });

  return (
    <div className="w-screen h-screen p-10 bg-gray-100">
      <div className="flex flex-col items-center w-full">
        <div className="flex w-11/12">
          <SvgSolaceGreen height="2rem" />
        </div>
        <div className="flex w-1/2">
          <div className="text-2xl">Replay Admin Dashboard</div>
        </div>
        <div className="w-1/2 p-4 mt-4 bg-white border rounded-sm">
          <Formik
            initialValues={{
              sempUsername: ``,
              sempPassword: ``,
              brokerIp: ``,
              port: ``,
              messageVpn: ``,
              subscribeQueue: ``,
              replayQueue: ``,
              replayRate: ``
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                startReplay(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ handleSubmit, isSubmitting, values }) => (
              <Form onSubmit={handleSubmit}>
                <Field name="sempUsername">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta
                  }) => (
                    <div className="flex flex-col mt-4">
                      <label htmlFor="sempUsername">SEMP username</label>
                      <input
                        {...field}
                        className="border rounded-sm"
                        id="sempUsername"
                        placeholder="E.g. admin"
                      />
                    </div>
                  )}
                </Field>
                <Field name="sempPassword">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta
                  }) => (
                    <div className="flex flex-col mt-4">
                      <label htmlFor="sempPassword">SEMP password</label>
                      <input
                        {...field}
                        className="border rounded-sm"
                        id="sempPassword"
                        placeholder="E.g. admin"
                      />
                    </div>
                  )}
                </Field>
                <Field name="brokerIp">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta
                  }) => (
                    <div className="flex flex-col mt-4">
                      <label htmlFor="brokerIp">Broker IP</label>
                      <input
                        {...field}
                        className="border rounded-sm"
                        id="brokerIp"
                        placeholder="E.g. 0.0.0.0"
                      />
                    </div>
                  )}
                </Field>
                <Field name="port">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta
                  }) => (
                    <div className="flex flex-col mt-4">
                      <label htmlFor="port">Port</label>
                      <input
                        {...field}
                        className="border rounded-sm"
                        id="port"
                        placeholder="E.g. 8080"
                      />
                    </div>
                  )}
                </Field>
                <Field name="messageVpn">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta
                  }) => (
                    <div className="flex flex-col mt-4">
                      <label htmlFor="messageVpn">Message VPN</label>
                      <input
                        {...field}
                        className="border rounded-sm"
                        id="messageVpn"
                        placeholder="E.g. default"
                      />
                    </div>
                  )}
                </Field>
                <Field name="subscribeQueue">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta
                  }) => (
                    <div className="flex flex-col mt-4">
                      <label htmlFor="subscribeQueue">Subscribe queue</label>
                      <input
                        {...field}
                        className="border rounded-sm"
                        id="subscribeQueue"
                        placeholder="E.g. Q/123"
                      />
                    </div>
                  )}
                </Field>
                <Field name="replayQueue">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta
                  }) => (
                    <div className="flex flex-col mt-4">
                      <label htmlFor="replayQueue">Replay queue</label>
                      <input
                        {...field}
                        className="border rounded-sm"
                        id="replayQueue"
                        placeholder="E.g. Q/Replay"
                      />
                    </div>
                  )}
                </Field>
                <Field name="replayRate">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form,
                    meta
                  }) => (
                    <div className="flex flex-col mt-4">
                      <label htmlFor="replayRate">Replay rate</label>
                      <CustomSelect
                        field={field}
                        form={form}
                        options={[
                          { label: "0.25x", value: "0.25" },
                          { label: "0.5x", value: "0.5" },
                          { label: "0.75x", value: "0.75" },
                          { label: "1x", value: "1" },
                          { label: "1.25x", value: "1.25" },
                          { label: "1.5x", value: "1.5" },
                          { label: "1.75x", value: "1.75" },
                          { label: "2.0x", value: "2.0" }
                        ]}
                        placeholder={"Select a rate..."}
                      />
                    </div>
                  )}
                </Field>
                <div className="mt-4">
                  <button
                    className="w-32 px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
