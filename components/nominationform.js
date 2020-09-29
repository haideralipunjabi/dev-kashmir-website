import useNominationForm from "./FormComponents/CustomHooks";
import LinksGroup from "./FormComponents/socialMediaFormGroup";
import TextArea from "./FormComponents/TextArea";
import TextField from "./FormComponents/TextField";
import base64 from "base-64";
import { useRef } from "react";

export default function NominationForm() {
  function nominate() {
    for (let key in Object.keys(inputs)) {
      if (!inputs[key]) delete inputs[key];
    }
    if (Object.keys(inputs).includes("tags")) {
      inputs.tags = inputs.tags.split(",");
    }
    fetch("/api/postform", {
      method: "POST",
      body: JSON.stringify({
        ref: "master",
        inputs: {
          workflow_data: JSON.stringify(inputs),
          username: inputs.name.toLowerCase().replace(/ /g, ""),
        },
      }),
    });
  }
  const { inputs, handleInputChange, handleSubmit } = useNominationForm(
    nominate
  );

  const Questions = [
    "Who are you, and what do you do?",
    "What hardware do you use?",
    "What does your workspace look like?",
    "What software do you use?",
    "What programming language would you use if your life depended on it?",
    "What is your favourite food to have while programming?",
    "What kind of music do you prefer while working?",
    "What is the one piece of advice you would give to a developer getting started?",
    "How can we improve the software development culture in Kashmir?",
    "One thing that you want to plug about yourself or someone else.",
  ];

  const formRef = useRef();
  const validate = () => {
    return formRef.current.reportValidity();
  };
  return (
    <>
      <form
        ref={formRef}
        id="nomination-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <TextField label="Name" onChange={handleInputChange} required />
        <TextField
          type="url"
          label="Profile Picture"
          onChange={handleInputChange}
        />
        <TextField label="Address" onChange={handleInputChange} required />
        <TextField
          label="Tags"
          onChange={handleInputChange}
          helpText="Comma Separated List of Tags/Keywords which can include programming
            languages you mostly use, technologies you like, position you work
            at, etc (For e.g, Python, Git, Backend Developer, etc)"
        />
        <TextArea label="Description" onChange={handleInputChange} />

        <LinksGroup onChange={handleInputChange} />
        <hr />
        <h4 className="is-size-4">
          The below questions are optional and would be shown on your profile
          page
        </h4>

        {Questions.map((question, idx) => (
          <TextArea
            name={`question${idx + 1}`}
            key={idx.toString()}
            label={question}
            onChange={handleInputChange}
          />
        ))}
        <TextField
          type="url"
          label="Workspace Picture"
          onChange={handleInputChange}
        />
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              onClick={() => {
                if (validate()) handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
          <div className="control">
            <button
              className="button is-link is-light"
              onClick={(e) => e.preventDefault()}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
