export default function TextField(props) {
  const { label, onChange, helpText, name, type, required } = props;
  const altName = label.toLowerCase().replace(" ", "");
  
  return (
    <>
      <div className="field">
        <label className="label is-size-4">{label}</label>
        <div className="control">
          <input
            type={type || "text"}
            className="input"
            name={name || altName}
            onChange={onChange}
            required={required}
          />
        </div>
        {helpText}
      </div>
    </>
  );
}
