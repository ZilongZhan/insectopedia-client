import { v4 as uuid } from "uuid";
import classifications from "../../data/classification";
import useForm from "../../hooks/useForm/useForm";

import "./BugForm.css";
import Button from "../../../ui/components/Button/Button";

const BugForm: React.FC = () => {
  const {
    bugFormData: {
      className,
      description,
      imageUrl,
      isDangerous,
      isFavorite,
      name,
      order,
      phylum,
      scientificName,
    },
    handleOnChange,
    handleSubmit,
    isValidData,
    classOptions,
    orderOptions,
  } = useForm();

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <label className="form__group__input-label" htmlFor="name">
          Common name:
        </label>
        <input
          className="form__group__input"
          id="name"
          type="text"
          value={name}
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="form__group">
        <label className="form__group__input-label" htmlFor="scientificName">
          Latin name:
        </label>
        <input
          className="form__group__input"
          id="scientificName"
          type="text"
          value={scientificName}
          onChange={handleOnChange}
          required
        />
      </div>
      <fieldset className="form__group">
        <legend className="form__group__input-label form__group__input-label--legend">
          Classification:
        </legend>
        <div className="classification">
          <select
            className="form__group__input"
            aria-label="Taxonomic rank: phylum"
            id="phylum"
            value={phylum}
            onChange={handleOnChange}
            required
          >
            <option value="">Phylum -- not selected</option>
            {classifications.map(({ name }) => (
              <option key={uuid()} value={name}>
                {name}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
          <select
            className="form__group__input"
            aria-label="Taxonomic rank: class"
            id="className"
            value={className}
            onChange={handleOnChange}
            required
          >
            <option value="">Class -- not selected</option>
            {classOptions.map(({ name }) => (
              <option key={uuid()} value={name}>
                {name}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
          <select
            className="form__group__input"
            aria-label="Taxonomic rank: order"
            id="order"
            value={order}
            onChange={handleOnChange}
            required
          >
            <option value="">Order -- not selected</option>
            {orderOptions.map((order) => (
              <option key={uuid()} value={order}>
                {order}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
      </fieldset>
      <div className="form__group">
        <label className="form__group__input-label" htmlFor="imageUrl">
          Link to image:
        </label>
        <input
          className="form__group__input"
          id="imageUrl"
          type="link"
          value={imageUrl}
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="form__group">
        <label className="form__group__input-label" htmlFor="description">
          Description:
        </label>
        <textarea
          className="form__group__input"
          id="description"
          rows={5}
          value={description}
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="checkboxes-container">
        <div className="form__group form__group--horizontal">
          <input
            className="form__group__input"
            id="isFavorite"
            type="checkbox"
            checked={isFavorite}
            onChange={handleOnChange}
          />
          <label htmlFor="isFavorite" className="form__group__input-label">
            Add to favorites
          </label>
        </div>
        <div className="form__group form__group--horizontal">
          <input
            className="form__group__input"
            id="isDangerous"
            type="checkbox"
            checked={isDangerous}
            onChange={handleOnChange}
          />
          <label htmlFor="isDangerous" className="form__group__input-label">
            Is it dangerous?
          </label>
        </div>
      </div>
      <Button modifier="submit" type="submit" disabled={!isValidData}>
        Send report
      </Button>
    </form>
  );
};

export default BugForm;
