import { faTheRedYeti } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Link from "./socialMediaFormControl";

export default function LinksGroup(props) {
  const [links, setLinks] = useState([]);
  const [inputs, setInputs] = useState({});

  const { onChange } = props;

  const handleInputChange = (data) => {
    setInputs((inputs) => ({
      ...inputs,
      [data.name]: data.value,
    }));
    // console.log(inputs);
  };
  useEffect(() => {
    for (let key of Object.keys(inputs)) {
      if (!inputs[key]) {
        delete inputs[key];
      }
    }
    onChange({
      persist: () => {},
      target: {
        name: "socialmedialinks",
        value: inputs,
      },
    });
  }, [inputs]);
  useEffect(() => {
    setLinks((links) => [...links, <Link onChange={handleInputChange} />]);
  }, []);
  return (
    <>
      <label className="label is-size-4">Social Media Links</label>
      {links}
      <div className="field">
        <div className="control">
          <button
            className="button is-link"
            onClick={(e) => {
              e.preventDefault();
              setLinks((links) => [
                ...links,
                <Link onChange={handleInputChange} />,
              ]);
            }}
          >
            Add More
          </button>
        </div>
      </div>
    </>
  );
}
