const CATEGORIES = ["Action", "Thriller", "Animation", "Horror", "Drama", "Sci-Fi"];

const FilterBar = ({ activeCategory, onSelect }) => {
  return (
    <div className="filter-bar">
      <button
        type="button"
        onClick={() => onSelect("All")}
        className={`filter-btn ${activeCategory === "All" ? "filter-btn--active" : ""}`}
      >
        All
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`filter-btn ${activeCategory === category ? "filter-btn--active" : ""}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
