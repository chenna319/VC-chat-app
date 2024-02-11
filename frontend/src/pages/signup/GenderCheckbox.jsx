const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-primary">Male</span>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-secondary">Female</span>
          <input type="checkbox" className="checkbox checkbox-secondary" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;