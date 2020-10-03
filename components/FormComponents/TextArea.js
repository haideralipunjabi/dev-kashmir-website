export default function TextArea(props) {
    const { label, onChange, helpText,name } = props;
    const altName = label.toLowerCase().replace(" ", "");
    return (
    <div className="field">
      <label htmlFor="input-name" className="label is-size-4">
        {label}
      </label>
      <div className="control">
        <textarea
          type="text"
          className="textarea"
          name={name||altName}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
