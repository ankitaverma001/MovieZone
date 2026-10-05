const CATEGORIES = ["Action", "Thriller", "Animation", "Horror", "Drama", "Sci-Fi"];

const FilterBar = ({ activeCategory, onSelect }) => {
  return (
    <div className="filter-bar">
      <button
        type="button"
        onClick={() => onSelect("All")}
        className={`btn btn-outline-primary mx-3 ${activeCategory === "All" ? "active" : ""}`}
      >
        All
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`btn btn-outline-primary mx-3 ${activeCategory === category ? "active" : ""}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
