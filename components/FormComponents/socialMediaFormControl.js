import { useEffect, useRef, useState } from "react";
export default function Link(props) {
  const [inputs, setInputs] = useState({ select: "facebook", input: "" });
  const { onChange } = props;
  const selectRef = useRef();
  const inputRef = useRef();
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
    setInputs({
      select: Object.values(socialMediaLinksMap)[
        selectRef.current.selectedIndex
      ],
      input: inputRef.current.value,
    });
  };
  useEffect(() => {
    onChange({
      name: inputs.select,
      value: ((inputs.select==="envelope")?"mailto:":"")+inputs.input,
    });
  }, [inputs]);
  return (
    <>
      <div className="field has-addons">
        <p className="control">
          <span className="select">
            <select ref={selectRef} name="select" onChange={handleInputChange}>
              {Object.keys(socialMediaLinksMap).map((link) => (
                <option>{link}</option>
              ))}
            </select>
          </span>
        </p>
        <p className="control">
          <input
            ref={inputRef}
            className="input"
            type={inputs.select==="envelope"?"email":"url"}
            placeholder="URL"
            onChange={handleInputChange}
            name="input"
          />
        </p>
      </div>
    </>
  );
}
