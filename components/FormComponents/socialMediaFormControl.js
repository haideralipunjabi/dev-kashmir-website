import { useEffect, useState } from "react";
export default function Link(props) {
  const [inputs, setInputs] = useState({ select: "facebook", input: "" });

  const { onChange } = props;

  const socialMediaLinksMap = {
    Facebook: "facebook",
    Instagram: "instagram",
    Twitter: "twitter",
    LinkedIn: "linkedin",
    Github: "github",
    Website: "globe-asia",
    Mail: "envelope",
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: (event.target.name==="select")?Object.values(socialMediaLinksMap)[event.target.selectedIndex]:event.target.value,
    }));
  };
  useEffect(() => {
    onChange({
      name: inputs.select,
      value: inputs.input,
    });
  }, [inputs]);
  return (
    <>
      <div className="field has-addons">
        <p className="control">
          <span className="select">
            <select name="select" onChange={handleInputChange}>
              {Object.keys(socialMediaLinksMap).map((link) => (
                <option>{link}</option>
              ))}
            </select>
          </span>
        </p>
        <p className="control">
          <input
            className="input"
            type="url"
            placeholder="URL"
            onChange={handleInputChange}
            name="input"
          />
        </p>
      </div>
    </>
  );
}
