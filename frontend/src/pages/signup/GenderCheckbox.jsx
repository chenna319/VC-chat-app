// eslint-disable-next-line react/prop-types
const GenderCheckbox = ({ onCheckboxChange, selectGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-primary">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-secondary">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary"
            checked={selectGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
